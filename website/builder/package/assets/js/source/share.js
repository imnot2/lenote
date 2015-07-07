$(function(){
    if(typeof(JSON) == 'undefined'){
        $('body').append('<script type="text/javascript" src="/assets/js/json/json2.js"></script>');
    }
    
    //获取播放器实例-调研flash为什么不能放在iframe中
    window.getPlayer = function(iframeWindow){
        window.iframeWindow = iframeWindow;
        return $('#flashcontent').get(0);
    };
    //flash回调事件封装
    window.supernote_audio = {
        getIframeWindow: function(){
            var iframeWindow = window.iframeWindow || $('#iframeNodeView').get(0).contentWindow;
            return iframeWindow.supernote_audio;
        },
        loadedEvent: function(id, time){
            this.getIframeWindow().loadedEvent(id, time);
        },
        errorEvent: function(id, msg){
            this.getIframeWindow().errorEvent(id, msg);
        },
        stop: function(id){
            this.getIframeWindow().stop(id);
        },
        slideTo: function(id, second, speed){
            this.getIframeWindow().slideTo(id, second, speed);
        }
    };
    
    //初始化flash播放器
    var params = {quality: "high", scale: "noscale", wmode: "window", allowscriptaccess: "always", bgcolor: "#fff"}, flashvars = {},
          attributes = {id: "flashcontent", name: "flashcontent"},
          ieversion = (/msie/.test(navigator.userAgent.toLowerCase()) && !+[1,])? parseFloat(navigator.userAgent.toLowerCase().match(/msie (\d+)/)[1]) : 0;
    //if((ieversion > 0) && (document.documentMode == 8 || ((ieversion == 7 && !document.documentMode) || document.documentMode == 7) || (ieversion < 7 || browser.quirks))){ //版本号会导致ie7/8加载flash时报找不到对象
    //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", null, "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
    //}else{
    //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
    //}
    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf?v" + Date.parse(new Date), "flashcontent", "1", "1", "10", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
    
    lenoteDom = {
        editor: {
            getContent: function(){
                return $('#main #content').data('content');
            },
            setContent: function(content){
                $('#main #content').data('content', content);
            },
            data: {
                attachments: {
                    set: function(resources){
                        if(!resources || resources.length < 1) return false;
                        for(var i = 0; i < resources.length; i++){
                            var _data = resources[i], indexof = _data.name.lastIndexOf('.'), filetype = (indexof != -1)? _data.name.substring(indexof) : ''; 
                                 ext = filetype? filetype.replace(/^\./ig, '') : '', name = _data.name.replace(filetype, '');
                            
                            var attachment = $.extend(_data, {
                                title: _data.name, name: name, size: _data.size, type: filetype, ext: ext, resourceID: _data.resourceID, localID: _data.local_id, _type: _data.type,
                                keyID: _data.keyID, link: _data.link, uploadTime: _data.uploadTime, utime: new Date(_data.uploadTime).format('yyyy-MM-dd hh:mm'),
                                publicLink: _data.publicLink
                            });
                            attachment = $.extend(attachment, {sizeof: utils.calFileSize(attachment.size), url: _data.publicLink});
                            this.add(attachment);
                        }
                    },
                    add: function(attachment){
                        var container = $('#main #content'), _attachment = {};
                       _attachment['key_' + attachment['localID']] = attachment;
                       container.data('attachments', $.extend(container.data('attachments') || {}, _attachment));
                    },
                    get: function(localID){
                        var _data = $('#main #content').data('attachments');
                        var attachment = (typeof  _data == 'object')? _data['key_' + localID] : '';
                        if(attachment){
                            var publicLink = attachment.publicLink;
                            if(/\.kk$/i.test($.trim(attachment.title))){
                                publicLink = utils.getDomain() + '/getShareFile/?' + $.param({resourceKeyId: attachment.resourceID, resourcePublicLink: attachment.publicLink, fileName: attachment.title, fileSize: attachment.size || 0});
                            }
                            return $.extend(attachment, {
                                sizeof: utils.calFileSize(attachment.size),
                                url: publicLink
                            });
                        }
                        return '';
                    },
                    getAll: function(){
                        return $('#main #content').data('attachments');
                    }
                }
            }
        }
    };
    
    UE = {
        utils: {
            html: function(str){
                return str ? str.replace(/&((g|l|quo)t|amp|#39);/g, function (m){
                    return {
                        '&lt;':'<',
                        '&amp;':'&',
                        '&quot;':'"',
                        '&gt;':'>',
                        '&#39;':"'"
                    }[m];
                }) : '';
            },
            unhtml: function(str, reg){
                return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function (a, b) {
                    if(b){
                        return a;
                    }else{
                        return{
                            '<':'&lt;',
                            '&':'&amp;',
                            '"':'&quot;',
                            '>':'&gt;',
                            "'":'&#39;'
                        }[a];
                    }
                }) : '';
            }
        }
    };
    
    var browser = UE.browser = function(){
        var agent = navigator.userAgent.toLowerCase(), opera = window.opera,
             browser = {
                 ie: !!window.ActiveXObject,
                 opera: (!!opera && opera.version),
                 webkit: (agent.indexOf( ' applewebkit/' ) > -1),
                 mac: (agent.indexOf( 'macintosh' ) > -1),
                 quirks: (document.compatMode == 'BackCompat')
             };
        browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera);
        var version = 0;
        if(browser.ie){
            version = parseFloat(agent.match(/msie (\d+)/)[1]);
            browser.ie9Compat = document.documentMode == 9;
            browser.ie8 = !!document.documentMode;
            browser.ie8Compat = document.documentMode == 8;
            browser.ie7Compat = ((version == 7 && !document.documentMode) || document.documentMode == 7);
            browser.ie6Compat = (version < 7 || browser.quirks);
        }
        if(browser.gecko){
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if(geckoRelease){
                geckoRelease = geckoRelease[1].split( '.' );
                version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
            }
        }
        if(/chrome\/(\d+\.\d)/i.test(agent)){
            browser.chrome = + RegExp['\x241'];
        }
        if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
            browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
        }
        if(browser.opera) version = parseFloat(opera.version());
        if(browser.webkit) version = parseFloat(agent.match(/ applewebkit\/(\d+)/ )[1]);
        browser.version = version;
        browser.isCompatible =
            !browser.mobile && (
            (browser.ie && version >= 6) ||
            (browser.gecko && version >= 10801) ||
            (browser.opera && version >= 9.5) ||
            (browser.air && version >= 1) ||
            (browser.webkit && version >= 522) ||
            false );
        return browser;
    }();
    
    shared = {
        init: function(){
            var body = $('body');
            body.click(function(event){
                try{
                   if(!window.ActiveXObject) 'getSelection' in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                }catch(e){}
            }).on('mouseup mousedown', function(event){
                try{
                    var win = $('#iframeNodeView').get(0).contentWindow;
                    if(typeof win == 'object'){
                        'getSelection' in win ? win.getSelection().removeAllRanges() : win.document.selection.empty();
                    }
                }catch(e){}
            });
            //header
            var header = ['<div id="header">'], index_lnk = '/';
            if(user.checkLogin()){
                header.push('<h1><a href="/notes" title="乐云记事" class="logo">乐云记事</a></h1>');
                index_lnk = '/notes';
            }else{
                header.push('<h1><a href="/" title="乐云记事" class="logo">乐云记事</a></h1>');
            }
            header.push('<div class="client_downloads"><a href="' + lenoteConfig.download.pc.link + '" class="pc" title="PC 客户端下载"></a><a href="' + lenoteConfig.download.ios.link + '" class="iphone" title="iPhone 客户端下载"></a><a href="' + lenoteConfig.download.android.link + '" class="android" title="Android 客户端下载"></a></div>');
            header.push('<div class="links">');
            if(user.checkLogin()){
                header.push('<a href="javascript:;" class="accountinfo"></a><img src="/assets/images/top_line.png" alt="|" class="spaceline" /><a href="javascript:;" class="logout">登出</a>');
            }else{
                header.push('<a href="/" class="home">首页</a><img src="/assets/images/top_line.png" alt="|" class="spaceline" /><a href="javascript:;" class="signin">登录</a><a href="javascript:;" class="register">注册</a>');
            }
            header.push('</div></div>');
            //body.append(header.join(''));
            
            //主体与侧边栏
            var main = ['<div id="main"><div class="wrap clearfix">'];
            //--content
            main.push('<div id="content"><div class="top_bg"></div><div class="container"></div><div class="bottom_bg"></div></div>');
            //--sidebar
            main.push('<div id="sidebar"><div class="contents">');
            main.push('<h3 class="logo"><a href="' + index_lnk + '" title="乐云记事-随时随地记录一切">乐云记事</a></h3>');
            main.push('<div class="clients">');
            //main.push('<a href="/download.html" class="pc" title="桌面客户端下载"><span class="title">桌面客户端下载</span><span class="desc">WinXP/Win7/Win8</span></a>');
            //修复chrome下缩放会溢出的问题
            //main.push('<button><a href="/download.html" class="pc" title="桌面客户端下载"><span class="title">桌面客户端下载</span><span class="desc">WinXP/Win7/Win8</span></a></button>');
            main.push('<a href="' + lenoteConfig.download.pc.link + '" class="pc" title="桌面客户端下载"><span class="detail"><span class="title">桌面客户端下载</span><span class="desc">WinXP/Win7/Win8</span></span></a>');
            main.push('<a href="' + lenoteConfig.download.android.link + '" class="android" title="Android客户端下载"><span class="detail"><span class="title">Android Phone</span><span  class="desc">客户端下载</span></span></a>');
            main.push('<a href="' + lenoteConfig.download.ios.link + '" class="iphone" title="iPhone客户端下载"><span class="detail"><span class="title">iPhone客户端下载</span></span></a>');
            main.push('</div>');
            main.push('<div class="qrcode"><img src="/assets/images/QRCode.png" alt="QR Code"/><p>扫描二维码下载</p></div>');
            main.push('</div></div>');
            
            main.push('</div></div>');
            //body.append(main.join(''));
            
            //页脚
            var footer = ['<div id="footer"><div class="wrap">'];
            footer.push('<img src="/assets/images/footer_logo_gray.png" alt="乐云记事" title="乐云记事 · 您的生活好帮手" class="logo">');
            footer.push('<span class="copyright">&copy; 1998 - 2013 Lenovo Inc. All Rights Reserved</span>');
            footer.push('</div></div>');
            //body.append(footer.join(''));
            
            body.prepend(header.join('') + main.join('') + footer.join(''));
            
            //事件监听并显示
            if(user.checkLogin()){
                $('.accountinfo').append(user.getUState('un'));
                $('.logout').click(function(){user.logout();});
            }else{
                $('.signin').click(function(){user.login();});
                $('.register').click(function(){user.register();});
            }
            //设置高度
            this.setHeight();
            $(window).resize(function(){
                shared.setHeight();
                shared.iframe.setHeight();
            });
            this.getNote();
            utils.show('#header, #main, #footer', true);
            //允许encopy的类内容选择
            $('#content .container').on('click', '.encopy', function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   //if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
            });
        },
        getNote: function(){
            var key = $.trim(location.href.replace(new RegExp('^' + utils.getDomain() + '/shared/', 'i'), ''));
            if(key){
                var _lenote = new lenote(user.getUState('t')), _this = this;
                _lenote.share.getContent(key, {
                    success: function(respose){
                        if(respose.status == 1){
                            var note = respose.notes[0];
                            window.parent.lenoteDom.editor.setContent(note.content);
                            lenoteDom.editor.data.attachments.set(note.resource);
                            //$('title').text(note.title + ' - 笔记分享 - 乐云记事');
                            document.title = note.title + ' - 笔记分享 - 乐云记事';
                            note['_title'] = note['title'];
                            note['title'] = utils.unhtml(note['title']);
                            _this.insertContent(note);
                        }else{
                            _this.insertError();
                        }
                        $.lebox.close();
                    },
                    before: function(){
                        $.lebox.notify('请稍候，正在加载笔记...');
                    },
                    failure: function(){
                        _this.insertError();
                    },
                    error: function(){
                        _this.insertError();
                    }
                });
            }else{
                this.insertError();
            }
        },
        setHeight: function(){
            var h = utils.calElemHeight('#main', '#header', 80, true), _h = $('#sidebar .contents').outerHeight(), height = h > _h? h - 10 : _h + 20;
            $('#main').height(height).find('#content .container').height(height - 36);
        },
        insertError: function(){
            var container = $('#main #content .container'), caption = '<div class="caption error">哎呀，出错了</div>';
            caption += '<div class="detail error"><ul class="reason"><li>未找到分享笔记</li><li>您所提供的公开连接无法对应有效的笔记</li><li>可能是连接输入错误，或者笔记主人取消了分享</li></ul></div>';
            container.html(caption);
        },
        insertContent: function(note){
            var utime = new Date(note.lastUpdateTime),
                  container = $('#main #content .container'); caption = ['<div class="caption">'];
            caption.push('<div class="info clearfix encopy ellipsis"><h2 class="title ellipsis">' + note.title + '</h2><div class="toolbar">转存到我的SNOTE</div></div>');
            caption.push('<div class="meta">更新：<span class="encopy">' + utime.format('yyyy年MM月dd日 hh:mm') + '&nbsp;' + (utime.getHours() >= 12? 'PM' : 'AM') + '</span></div>');
            if(note.tag && note.tag.length > 0){
                var _tags = [];
                for(var i = 0; i < note.tag.length; i++){
                    //var _tag = note.tag[i], name = UE.utils.unhtml(utils.trim(utils.strip_tags(UE.utils.html(_tag.name || ''))).replace(/\s+?/igm, '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                    var _tag = note.tag[i], name = utils.unhtml($.trim(_tag.name || '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                    if(!name) continue;
                    _tags.push('<span class="tagname">' + name + '</span>');
                }
                caption.push('<div class="tags"><span class="title">标签：</span><span class="encopy">' + _tags.join('') + '</span></div>');
            }
            caption.push('</div>');
            container.append(caption.join(''));
            
            var detail = ['<div class="detail encopy"></div>'];
            container.append(detail.join(''));
            this.show();
        },
        show: function(){
            function render(height, maxWidth){
                var root_path = '/assets/js/ueditor/';
                //var html = [(!!window.ActiveXObject)? '' : '<!DOCTYPE html>'];
                var html = [(!+[1,])? '' : '<!DOCTYPE html>'];
                html.push('<html xmlns="http://www.w3.org/1999/xhtml" class="view"><head>');
                html.push('<meta http-equiv="content-type" content="text/html;charset=utf-8">');
                //html.push('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7; IE=EmulateIE9; IE=EmulateIE10" />');
                html.push('<style type="text/css">' +
                                   'body{cursor: text;margin:8px;font-family:sans-serif;font-size:16px;}' +
                                   //'.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}' +
                                   '.view{word-wrap:break-word;cursor:text;height:90%;}' +
                                   'p{margin:5px 0;}' +
                                 '</style>'
                                );
                html.push('<link rel="stylesheet" type="text/css" href="/assets/css/lib/editor_expand.css"/>');
                height -= 20;
                html.push('</head><body class="view" style="height:' + height + 'px"><div id="viewer"></div>');
                html.push('<script type="text/javascript" src="' + root_path + 'ueditor.parse.js"></script>');
                html.push('<script type="text/javascript" src="/assets/js/jquery.min.js"></script>');
                html.push('<script type="text/javascript" src="/assets/js/parser/parser_api.js"></script>');
                //html.push('<script type="text/javascript">setTimeout(function(){uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                //html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"})},300);</script>');
                html.push('<script type="text/javascript">var _interval = setInterval(function(){if(typeof uParse == "function"){');
                html.push('if(_interval) clearInterval(_interval);uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"});}},300);</script>');
                //html.push('<script type="text/javascript">setTimeout(function(){' +
                //                '$(function(){' +
                //                    '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent()));' +
                //                    'setTimeout(function(){supernote_audio.init(' + maxWidth + ');}, 300);' +
                //                    'try{$("body").on("mouseup mousedown", function(){' +
                //                    '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                //                    ' })}catch(e){}' +
                //                '});' +
                //                '}, 50);</script>');
                html.push('<script type="text/javascript">var interval = setInterval(function(){' +
                                    'if(typeof jQuery == "function"){' +
                                        'if(interval) clearInterval(interval);' +
                                        '$(function(){' +
                                            '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent()));' +
                                            'setTimeout(function(){supernote_audio.init(' + maxWidth + ');}, 300);' +
                                            'try{$("body").on("mouseup mousedown", function(){' +
                                            '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                                            ' })}catch(e){}' +
                                        '});' +
                                    '}' +
                                '}, 50);</script>');
                html.push('</body></html>');
                return html.join('');
            }
            var height = this.iframe.calHeight(), maxWidth = $('#main #content .container .detail').width() - 80;
            var src = 'document.open();' +
                          'document.write(\'' + UE.utils.unhtml(render(height, maxWidth)) + '\');document.close();';
            var iframe = '<iframe id="iframeNodeView" name="iframeNodeView" width="100%" height="100%" frameborder="0" src="javascript:void(function(){' + src + '}());"></iframe>';
            $('#main #content .container .detail').height(height).html(iframe);
        },
        iframe: {
            getIframe: function(){
                var iframe = $('#iframeNodeView');
                return iframe.length > 0? iframe : null;
            },
            calHeight: function(){
                var container = $('#main #content .container'), detail = container.children('.detail'),
                      height = container.height() - detail.position().top;
                return (height <= 20)? 25 : height;
            },
            setHeight: function(){
                var iframe = this.getIframe();
                if(iframe){
                    var height = this.calHeight();
                    $('#main #content .container .detail').height(height);
                    iframe.contents().find('body').height(height - 20);
                }
            }
        }
    };
    
    shared.init();
});