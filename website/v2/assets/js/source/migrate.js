$(function(){
    if(typeof(JSON) == 'undefined'){
        $('body').append('<script type="text/javascript" src="/assets/js/json/json2.js"></script>');
    }
    
    migrate = {
        import_interval: null,
        //检查是否登录
        checkLogin: function(){
            if(user.checkLogin()){
                this.checkStatus();
            }else{
                $.lebox.warning('抱歉，您还未登录，请先登录！');
                setTimeout(function(){user.login('/migrate/mk.html');}, 1200);
            }
        },
        //检查当前用户的数据导入状态
        checkStatus: function(){
            $.ajax('/import/status', {
                type: "POST", dataType: "json", cache: false,
                contentType:'application/json; charset=utf-8',
                headers: {'AuthToken': user.getUState('t'), 'Collect-Data': utils.getCollectData(user.getUState('t'))},
                //data:  JSON.stringify({source: 'mk', account: user.getUState('aid')}),
                data:  JSON.stringify({source: 'mk', AuthToken: user.getUState('t')}),
                success: function(respose){
                    //if(respose.returnCode == '200'){
                        //migrate.init($.trim(respose.status));
                    //}else{
                    //    $.lebox.error('数据错误，请检查！');
                    //}
                    migrate.init(respose.status);
                },
                before: function(){$.lebox.notify('正在加载，请稍候...');},
                error: function(xhr, msg, eThrow){$.lebox.error('网络错误，请稍后再试！');}
            });
        },
        checkImportStatus: function(){
            if(this.import_interval === null){
                this.import_interval = setInterval(function(){
                    $.ajax('/import/status', {
                        type: "POST", dataType: "json", cache: false,
                        contentType:'application/json; charset=utf-8',
                        headers: {'AuthToken': user.getUState('t'), 'Collect-Data': utils.getCollectData(user.getUState('t'))},
                        data:  JSON.stringify({source: 'mk', AuthToken: user.getUState('t')}),
                        success: function(respose){
                            if(respose.status === 1) return;
                            clearInterval(migrate.import_interval);
                            migrate.import_interval = null;
                            if(respose.status === 2){
                                migrate.finishedUI();
                            }else{
                                migrate.errorUI();
                            }
                        },
                        error: function(xhr, msg, eThrow){
                           clearInterval(migrate.import_interval);
                           migrate.import_interval = null;
                        }
                    });
                }, 10000);
            }
        },
        //根据不同的状态显示不同的界面
        init: function(status){
            $.lebox.close();
            var body = $('body');
            //header
            var header = ['<div id="header">'];
            header.push('<h1><a href="/" title="乐云记事" class="logo">乐云记事</a></h1>');
            header.push('<div class="client_downloads"><a href="' + lenoteConfig.download.pc.link + '" class="pc" title="PC 客户端下载"></a><a href="' + lenoteConfig.download.ios.link + '" class="iphone" title="iPhone 客户端下载"></a><a href="' + lenoteConfig.download.android.link + '" class="android" title="Android 客户端下载"></a></div>');
            header.push('<div class="links">');
            header.push('<a href="javascript:;" class="accountinfo"></a><img src="/assets/images/top_line.png" alt="|" class="spaceline" /><a href="javascript:;" class="logout">登出</a>');
            header.push('</div></div>');
            body.append(header.join(''));
            
            //主体与侧边栏
            var main = ['<div id="main"><div class="wrap clearfix"></div></div>'];
            body.append(main.join(''));
            
            //页脚
            var footer = ['<div id="footer"><div class="wrap">'];
            footer.push('<img src="/assets/images/footer_logo_gray.png" alt="乐云记事" title="乐云记事 · 您的生活好帮手" class="logo">');
            footer.push('<span class="copyright">&copy; 1998 - 2014 Lenovo Inc. All Rights Reserved</span>');
            footer.push('</div></div><div id="flashcontent" name="flashcontent"></div>');
            body.append(footer.join(''));
            
            //设置高度
            this.setHeight();
            $(window).resize(function(){
                migrate.setHeight();
            });
            
            //帐号名及退出监听
            $('.accountinfo').append(user.getUState('un'));
            $('.logout').click(function(){user.logout();});
            
            this.show(status);
            utils.show('#header, #main, #footer', true);
        },
        show: function(status){
            switch(status){
                case 0: this.startUI();break;
                case 1: this.doingUI();break;
                case 2: this.finishedUI();break;
                case 3: break;
                default: this.errorUI();
            }
        },
        startUI: function(msg){
            var main = $('#main .wrap'), res = [];
            msg = msg? msg : '您可以点击数据导入按钮，将数据导入到乐笔记';
            res.push('<a class="btn start" href="javascript:;"><span>开 始<br/>导 入</span></a>');
            res.push('<div class="msg start">' + msg + '</div>');
            main.html(res.join(''));
            $('.btn.start').click(function(){
                $(this).unbind('click');
                $.ajax('/import/capture', {
                    type: "POST", dataType: "json", cache: false,
                    contentType:'application/json; charset=utf-8',
                    headers: {'AuthToken': user.getUState('t'), 'Collect-Data': utils.getCollectData(user.getUState('t'))},
                    data:  JSON.stringify({source: 'mk', tactics: 'task', AuthToken: user.getUState('t')}),
                    success: function(respose){
                       //if(respose.returnCode == '200' && respose.status == 'success'){
                       //if(respose.status == 'success'){
                       if(respose.status === 1){
                           migrate.doingUI();
                           migrate.checkImportStatus();
                       }else{
                           migrate.errorUI();
                       }
                    },
                    before: function(){$.lebox.notify('正在创建任务，请稍候...');},
                    error: function(xhr, msg, eThrow){$.lebox.error('网络错误，请稍后再试！');}
                });
            });
        },
        doingUI: function(){
            var main = $('#main .wrap'), res = [];
            res.push('<a class="btn importing" href="javascript:;"></a>');
            res.push('<div class="msg importing">数据正在导入，请耐心等待...</div>');
            main.html(res.join(''));
        },
        finishedUI: function(){
            var main = $('#main .wrap'), res = [];
            res.push('<a class="btn finished" href="javascript:;"></a>');
            res.push('<div class="msg finished">您的数据已经成功导入，感谢您的耐心等待：)  点击<a href="/notes">查看</a></div>');
            main.html(res.join(''));
        },
        errorUI: function(){
            this.startUI('您的数据导入失败，请确认您的帐号然后重新导入');
        },
        setHeight: function(){
            var h = utils.calElemHeight('#main', '#header', 80, true) - 20;
            $('#main').height(h > 525? h : 525);
        }
    };
    
    migrate.checkLogin();
});