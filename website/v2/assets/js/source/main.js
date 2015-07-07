/*
 *  author: gejian1@lenovo.com
 *  description: 应用入口
 */
$(function(){
    $.lebox.notify('请稍候，正在初始化...');
    
    //检查是否支持JSON，如不支持则导入json2.json
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
            utils.audios.errorEvent(id, msg);
        },
        stop: function(id){
            this.getIframeWindow().stop(id);
            utils.audios.stop(id);
        },
        slideTo: function(id, second, speed){
            this.getIframeWindow().slideTo(id, second, speed);
        }
    };

    //检查是否登录，如果未登录则要求登录
    if(!user.checkLogin(true, function(status, userInfo){
        if(status){
            //初始化flash播放器
            var params = {quality: "high", scale: "noscale", wmode: "window", allowscriptaccess: "always", bgcolor: "#fff"};
            var flashvars = {};
            var attributes = {id: "flashcontent", name: "flashcontent"};
            //if(UE.browser.ie && (UE.browser.version < 9 || UE.browser.ie8Compat || UE.browser.ie7Compat || UE.browser.ie6Compat)){ //版本号会导致ie7/8加载flash时报找不到对象
            //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", null, "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
            //}else{
            //    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
            //}
            swfobject.embedSWF("/assets/js/parser/supernote-audio.swf?v" + Date.parse(new Date), "flashcontent", "1", "1", "10", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
            
            //设置所有笔记、星标笔记、分享笔记、回收站的笔记数
            lenoteDom.category.count('all-notes', userInfo.noteCount);
            lenoteDom.category.count('stars-notes', userInfo.markedCount, false, true);
            lenoteDom.category.shared_count(userInfo.sharedCount);
            lenoteDom.category.trash_count(userInfo.recycleCount);
            //设置默认分类
            $('#sidebar-a').data({defaultCategoryID: userInfo.defaultCategoryID});
            
            //$.lebox.close();
            lenoteView.init(new lenote(user.getUState('t'), {uid: user.getUState('uid')}));
            setTimeout(function(){
                $.lebox.close(function(){
                    //检查是否需要导入旧用户数据
                    user.importStatus(function(respose){
                        try{
                            if(respose.status === 0){
                                user.importData(function(res){
                                    if(res.status === 1){
                                        $.smartDoing({action: 'add', text: '<a href="/migrate/mk.html" target="_blank">数据导入中，点击查看</a>', hold: true});
                                        $.lebox.modalbox('数据导入提示', lenoteDom.fragment.getImportPrompt(), function(){}, true, 'liner');
                                        user.checkImportStatus();
                                    }
                                });
                            }else if(respose.status === 1){
                                $.smartDoing({action: 'add', text: '<a href="/migrate/mk.html" target="_blank">数据导入中，点击查看</a>', hold: true});
                                user.checkImportStatus();
                            }else if(respose.status === -1){
                                $.smartDoing({action: 'add', text: '<a href="/migrate/mk.html" target="_blank">数据导入中，点击查看</a>', hold: true});
                                $.smartDoing({action: 'del', text: '数据导入失败，点击<a href="/migrate/mk.html" target="_blank"> 这里 </a>重新导入', statusClass: 'error', hold: true, delay: 5000});
                            }
                        }catch(e){}
                    });
                    
                    //轮询检查cookie是否过期
                    user.checkUserStatus();
                });
            }, 500);
        }else{
            user.cleanUState(true, function(){
                $.lebox.error('获取用户信息失败，请重新登录！');
            });
        }
    }))
    user.cleanUState(true, function(){
        $.lebox.warning('抱歉，您还未登录！');
    });
});