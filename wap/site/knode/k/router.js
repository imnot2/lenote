var router = require('koa-router'),
    koaBody = require('koa-body')(/*defaults*/);
    copy = require('copy-to');

module.exports = function(app){
    app.use(function *locals(next){
        copy({
            session: this.session,
            flash: this.flash,
            csrf: this.csrf,
            browser: this.browserDetect,
            ip: this._ip,
            client: this.client || {},
            env: this.app.env
        }).to(this.locals);
        yield *next;
    });
    
    app.use(router(app));
    
    //首页
    app.all('/', function *(next){
        yield this.render('index', {
            title: '乐云记事 - 移动版 - 随时随地,记录和同步我的笔记',
            description: '乐云记事移动版-随时随地,记录和同步我的笔记',
            keywords: '乐云记事,云笔记,乐云记事移动版'
        });
    });
    
    //笔记列表页
    app.get('/notes', function *(next){
        yield this.render('note/index', {
            title: '我的笔记 - 乐云记事 - 移动版',
            description: '乐云记事移动版-随时随地,记录和同步我的笔记',
            keywords: '乐云记事,云笔记,乐云记事移动版,我的记事,我的笔记'
        });
    });
    
    app.get('/note/create', function *(next){
        yield this.render('note/create', {
            title: '创建新笔记 - 乐云记事 - 移动版',
            description: '乐云记事移动版-随时随地,记录和同步我的笔记',
            keywords: '乐云记事,云笔记,乐云记事移动版,我的记事,我的笔记,创建新笔记'
        });
    });
    
    //笔记详情页
    app.get('/note/:id', function *(next){
        yield this.render('note/show', {
            title: '笔记查看 - 乐云记事 - 移动版',
            description: '乐云记事移动版-随时随地,记录和同步我的笔记',
            keywords: '乐云记事,云笔记,乐云记事移动版,我的记事,我的笔记',
            id: this.params.id
        });
    });
    
    //模板商店
    app.get('/store', function *(next){
        var store = new (D('store'))(),
            list = yield store.getAll();
        if(F.isEmpty(list)) this.locals.flash = {warn: '模板商城还没有货哦'};
        yield this.render('store/index', {
            list: list
        });
    });
    
    //模板详情
    app.get('/store/:tid', function *(next){
        var store = new (D('store'))(),
            item = yield store.get(this.params.tid);
        if(F.isEmpty(item)) this.locals.flash = {warn: '没有找到模板'};
        yield this.render('store/show', {
            item: item
        });
    });
    
    //登录
    app.post('/login', koaBody, function*(next){
        var session = this.session,
            forward = forward? C.config.host + session.forward : null;
        
        if(forward) delete session.forward;
        
        //console.warn(JSON.parse(decodeURIComponent(this.cookies.get('UState'))));
        //this.cookies.set('token', this.request.body.leNoteToken, {expires: this.cookies.expires});
        session.user = {
            id: this.request.body.uid, userID: this.request.body.userID,
            name: this.request.body.userName, wust: this.request.body.wust
        };
        
        this.body = {feedback: forward, cookie: {
            aid: this.request.body.lenovoAccountID, t: this.request.body.leNoteToken,
            un: this.request.body.userName, uid: this.request.body.uid
        }, returnCode: 200};
    });
    
    //退出
    app.get('/logout', function *(next){
        this.session = null;
        this.body = {returnCode: 200};
    });
    
    //node-readability不支持node0.11.13版本
    //app.all('/collect', function *(next){
    //    var url = this.query.url || 'http://www.iteye.com/news/29147',
    //        result = yield D('collect')(url);
    //    
    //    //this.body = '<p>' + result.title + '</p><p>' + result.content + '</p>';
    //    this.body = result.title;
    //});
    
    //app.redirect(/.*/, global.C.config.host + 'static/html/404.html');
    //app.all(/.*/, function *(next){
    //    this.redirect(global.C.config.host + 'static/html/404.html');
    //});
    app.use(function *_pageNotFound(next){
        yield next;
        if (404 !== this.status) return;
        
        //we need to explicitly set 404 here, so that koa doesn't assign 200 on body=
        this.status = 404;
        
        switch (this.accepts('html', 'json', 'text')){
            case 'html':
                this.type = 'html';
                //this.body = '<p>Page Not Found</p>';
                this.redirect(global.C.config.host + 'html/404.html');
                break;
            case 'json':
                this.body = {message: 'Page Not Found'};
                break;
            case 'text':
                this.type = 'text';
                this.body = 'Page Not Found';
                break;
            default:
                this.redirect(global.C.config.host + 'html/404.html');
        }
    });
};