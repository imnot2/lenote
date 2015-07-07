/*
 *交互流程
 *   1.	用户用绿茶浏览网页时，点击一键保存链接(需要产品定义UI)
 *  	1.1 如果未登录则弹出登录窗口登录(类似之前的绿茶书签收藏),然后跳转到正常的登录流程处理 
 *   	1.2 如果已登录，则直接发送请求给乐云记事网页收藏接口
 *   2.	乐云记事收到客户端请求后，验证请求的有效性，返回给客户端正确的响应，然后异步处理网页的保存。
 *接口详情
 *  url: http://n.lenote.com/m/collect，method: POST
 *  参数有：token、url、from、sign，所有参数都需要urlencode
 *      token为用户登录乐云记事后获取的令牌
 *      url为需要抓取的网址
 *      from值为web-gt，表示来源地址
 *  	sign值
 *           首先将token、url、from按首字母(a-z、A-Z).charCodeAt()的ascii码排序后转成json字符串+secret后md5加密、然后将md5加密后的值和secret的值偶数位交换即为sign值，
 *           如：md5密串为：abcdefg, secret为：123456，替换后的结果为：1b3d5f7。 secret的值是：9eb4ee1e614eb2aad4323a82b59314fd
 *  TODO:
 *      1. 添加timestamp+timezone验证链接有效性,默认10s内的链接有效
 *      2. 返回消息给客户端时也需要组装验证字符串，由客户端(如绿茶)验证返回参数的正确性。与客户端提交是一样的流程：排序、加密、交换、提交
 *      3. 因为是异步处理网页时，所以网页保存与否是无法通知客户端应用的，考虑使用websocket/socket.io/长连接实现Push推送
 */
var xss = require('xss'),
    xssoptions = {
        allowCommentTag: false,
        stripIgnoreTag: true,
        stripIgnoreTagBody: ['script', 'applet', 'embed', 'object', 'textarea', 'button', 'style', 'title', 'noframes', 'noscript', 'param'],
        //whiteList: F.extend(xss.whiteList, {
        //    style: []
        //})
    },
    myxss = new xss.FilterXSS(xssoptions),
    url = require('url'),
    request = require('request'),
    coRequest = require('co-request'),
    readability = require('node-readability'),
    fetchUrl = require('fetch').fetchUrl,
    cheerio = require('cheerio'),
    Encoder = require('node-html-encoder').Encoder,
    clipper = function(params, ip, agent){
        this.params = params;
        this.status = 200;
        this.message = '';
        this.ip = ip;
        this.agent = agent;
    };

clipper.prototype = {
    verify: function *(){
        var response = yield coRequest({
            url: C.config.api + 'thirddata/status',
            method: 'POST',
            encoding: 'utf8',
            timeout: 10000,
            body: JSON.stringify({token: this.params.token, url: this.params.url, from: this.params.from}),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'AuthToken': this.params.token,
                'ConsumerKey': 'lenote-clickSave',
                'ConsumerSecret': this.params.sign
            }
        });
        
        if(response.statusCode == 200){
            try{
                var body = JSON.parse(response.body);
                this.status = body.returnCode;
                this.message = body.returnMessage;
            }catch(e){
                this.status = 422;
            }
        }else{
            this.status = response.statusCode;
        }
        
        return response;
    },
    
    getAppInfo: function(){
        var info = {tags: [], dataSource: ''};
        switch(this.params.from){
            case 'web-gt':
                info.tags = [{tagName: '绿茶浏览器', tagIcon: 0}];
                info.dataSource = 'greentea';
                break;
        }
        return info;
    },
    
    save: function(title, content){
        function cleanHtml(html){
            html = (html || '').replace(/\r|\n|\t/igm, '').replace(/<br[^>]*>\s*<(p|div)/gi, '<\$1').replace(/<script[^>]*>.*?<\/script>/igm, '');
            //html = html.replace(/<[^/>]+>(\s|&nbsp;|<br\/?>)*<\/[^>]+>/gim, "");
            return html;
        }
        
        content = cleanHtml(content);
        title = myxss.process(title || '').trim();
        content = myxss.process(content).trim();
        var encoder = new Encoder('entity'),
            _content = encoder.htmlDecode(F.h.strip_tags(content));
        if(F.isEmpty(title)){
            title = F.isEmpty(_content)? '无标题笔记' : _content.substring(0, 30);
        }else{
            title = encoder.htmlDecode(title);
        }
        var summary = _content.substr(0, 100);
        var info = this.getAppInfo();
        
        request(C.config.api + 'note/createNote', {
            method: 'POST',
            encoding: 'utf8',
            timeout: 10000,
            body: JSON.stringify({
                title: title, content: content, summary: summary, tags: info.tags,
                dataSource: {dataSource: info.dataSource, dataSourceKey: this.params.url}
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'AuthToken': this.params.token,
                'Collect-Data': '1.0.0/clipper///' + this.params.from + '//' + this.ip + '/' + this.params.token + '/clipper/' + this.agent.major
            }
        }, function(error, response, body){
            if(!error && response.statusCode == 200){
                try{
                    var body = JSON.parse(body);
                    if(body.returnCode == 200){
                        console.info('create new note: ' + body.noteID);
                    }
                }catch(e){}
            }else{
                console.error(error);
            }
        });
    },
    
    run: function *(){
        var checker = yield this.verify();
        if(this.status == 200){
            var title = this.params.url, content = '<a href="' + this.params.url + '" target="_blank">' + this.params.url + '</a>';
            if(/^https?:\/\/.+(\.[\w\-_]+)+/i.test(this.params.url)){
                var _this = this;
                fetchUrl(this.params.url, {
                    timeout: 20000,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
                        'Referer': F.h.getHost(this.params.url)
                    }
                }, function(error, meta, body){
                    if(!error){
                        if(typeof body !== 'string') body = body.toString();
                        readability(body, function(err, article, meta){
                            if(err){
                                console.error('readability error:', err);
                                _this.save(getTitle(body) || title, fixLinks(_this.params.url, body));
                            }else{
                                try{
                                    var _content = article.content;
                                }catch(e){
                                    var _content = fixLinks(_this.params.url, body);
                                }
                                var text = getText(_content);
                                if(text.length > 50){
                                    _this.save(article.title, _content);
                                }else{
                                    console.warn('The content is too shortly.');
                                    _this.save(article.title || getTitle(body), fixLinks(_this.params.url, body));
                                }
                            }
                        });
                    }else{
                        _this.save(title, content);
                    }
                });
            }else if(F.isEmpty(this.params.url)){
                this.status = 400;
            }else{
                this.save(title, content);
            }
        }
        
        console.info('fetch: ' + this.params.url);
        return {status: this.status, message: this.message};
    }
};

function getTitle(html){
    var r = (html || '').match(/<\s*title[^>]*?>(.+?)<\s*\/\s*title[^>]*?>/im);
    return r && r.length == 2? r[1].trim() : '';
}

function getText(html){
    html = (html || '').replace(/\s|&nbsp;/igm, '').replace(/<footer[^>]*>.*?<\/footer>/igm, '');
    html = xss(html, F.extend(F.clone(xssoptions), {whiteList: []}));
    return F.h.strip_tags(html);
}

function fixLinks(originalURL, html){
    function fixLink(link){
        if(!/\/$/.test(originalURL)) originalURL += '/';
        var fixed = url.resolve(originalURL, link);
        return fixed;
    }
    
    var $ = cheerio.load(html || '', {decodeEntities: false}),
        imgs = $('img'),
        as = $('a');
    
    F.each(imgs, function(img){
        img = $(img);
        var src = img.attr('src');
        if(src) img.attr('src', fixLink(src));
    });
    
    F.each(as, function(a){
        a = $(a);
        var href = a.attr('href');
        if(href) a.attr('href', fixLink(href));
    });
    
    //$(':empty').remove();
    
    return $.html();
}

module.exports = clipper;