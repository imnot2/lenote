/*
 *  author: gejian1@lenovo.com
 *  description: 首页初始化及事件监听
 */

//初始化flash播放器
var params = {quality: "high", scale: "noscale", wmode: "window", allowscriptaccess: "always", bgcolor: "#fff"}, flashvars = {},
      attributes = {id: "flashcontent", name: "flashcontent"},
      ieversion = (/msie/.test(navigator.userAgent.toLowerCase()) && !+[1,])? parseFloat(navigator.userAgent.toLowerCase().match(/msie (\d+)/)[1]) : 0;
//if((ieversion > 0) && (document.documentMode == 8 || ((ieversion == 7 && !document.documentMode) || document.documentMode == 7) || (ieversion < 7 || browser.quirks))){ //版本号会导致ie7/8加载flash时报找不到对象
//    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf?" + Date.parse(new Date), "flashcontent", "1", "1", "10", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes,function(res){console.info(res.success);});
//}else{
//    swfobject.embedSWF("/assets/js/parser/supernote-audio.swf?" + Date.parse(new Date), "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);
//}
swfobject.embedSWF("/assets/js/parser/supernote-audio.swf?v" + Date.parse(new Date), "flashcontent", "1", "1", "10", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);

//首页Mix播放
var supernote_audio = {
    url: '/assets/js/parser/snote.mp3', id: 'main',
    loadedEvent:function(id, time){},
    errorEvent: function(id, msg){
        this.stop();
        //alert('音频文件加载失败: ' + msg);
    },
    getPlayer: function(){
        return $('#flashcontent').get(0);
    },
    init: function(){
        try{
            this.getPlayer().load(this.id, this.url, 'mix');
        }catch(e){
            //console.info(e);
        }
        
        $('#main #mods .btns li a.listen').click(function(){
            try{
                supernote_audio.startOrPause();
            }catch(e){}
        });
    },
    startOrPause: function(){
        var audio = $('#main #mods .btns li a.listen');
        if(audio.hasClass('pause')){
            audio.removeClass('pause');
            //暂停
            try{
                this.getPlayer().pause(this.id);
            }catch(e){}
        }else{
            audio.addClass('pause');
            //播放
            try{
              var res = this.getPlayer().audioPlay(this.id, this.url, 'mix');
              switch(parseInt(res)){
                case 0: this.stop();alert('音频正在加载，请稍候点击播放');break;
                case 1: break;
                case -1: this.stop();alert('音频加载失败，请刷新后重试！');break;
              }
            }catch(e){
                //console.info(e);
            }
        }
    },
    stop: function(){
        var audio = $('#main #mods .btns li a.listen'), timeline = $('#main .timeline img.badge');
        audio.removeClass('pause');
        for(var i = 0; i < timeline.length; i++){
            var _timeline = $(timeline[i]);
            _timeline.attr('src', _timeline.attr('src').replace(/_active/i, ''));
        }
        
        //停止播放
        try{
          this.getPlayer().audioStop(this.id);
        }catch(e){}
    },
    slideTo: function(id, second){
        var target = $('#' + id + ' div[time="' + second + '"]');
        if(target.length > 0){
            var timeline = $('#main .timeline img.badge'), icon = target.find('.timeline img.badge'), fix = 98;
            for(var i = 0; i < timeline.length; i++){
                var _timeline = $(timeline[i]);
                _timeline.attr('src', _timeline.attr('src').replace(/_active/i, ''));
            }
            //icon.attr('src', icon.attr('src').replace(/\.png$/i, '_active.png'));
            //验证是否是图片时添加版本号的验证规则，因为编译后图片及js/css等都添加了版本号
            icon.attr('src', icon.attr('src').replace(/\.png(\?v\d+?)?$/i, '_active.png'));
            if(target.attr('id') == 'particular') fix += 48;
            $('body, html').clearQueue().animate({scrollTop: target.offset().top - fix}, 400);
        }
    }
};

//监听登录和注册按钮
var listenPageEvent = function(){
    $('.signin').click(function(){
        user.login();
    });
    $('.register, #particular .new-note').click(function(){
        user.register();
    });
    $('#main #useful .mark').click(function(){
        var _this = $(this);
        $.lebox.modalbox('', '<a class="close" title="关闭" href="javascript:;"></a><img src="/assets/images/home/useful/' + _this.attr('to') + '"/>', null, true, 'userful', true);
        //$('#lebox-wrap').css({top: function(i, v){return parseFloat(v) + 22;}});
    });
};

//页面加载完成后执行
$(function(){
    //检查是否支持JSON，如不支持则导入json2.json
    if(typeof(JSON) == 'undefined'){
        $('body').append('<script type="text/javascript" src="/assets/js/json/json2.js"></script>');
    }
    
    //$('#mods a.download').hover(function(){
    //    //$.lebox.info('正在紧锣密鼓地准备中，敬请期待！', 500);
    //    $(this).children('span').text('敬请期待');
    //}, function(){
    //    $(this).children('span').text('下载乐云记事');
    //});
    
    $('#header ul.links').smartNavHover();
    
    $('#surface .slider').nivoSlider();
    $(window).on('point.slider', function(e){
        //var w = $(this), point = $('#point'), top = 300, 
        //      scrollTop = w.scrollTop(), height = w.height(), _height = point.outerHeight(), _top = scrollTop + top;
        var w = $(this), point = $('#point'), scrollTop = w.scrollTop(), height = w.height(), _height = point.outerHeight();
        var _top = scrollTop + (height - _height) / 2;
        //if(_top + _height > height) _top = scrollTop + height - _height - 30;
        point.clearQueue().animate({top: _top}, 600);
    });
    $(window).on('scroll resize', function(){
        $(this).trigger("point.slider");
    });
    
    $('#point i').click(function(e){
        try{
            if(!e.isPropagationStopped()) e.stopPropagation();
            if(!e.isDefaultPrevented()) e.preventDefault();
        }catch(_e){}
        
        var w = $('body, html'), _this = $(this);
        $('#point i').removeClass('active');
        _this.addClass('active');
        w.clearQueue().animate({scrollTop: $('#' + _this.attr('to')).offset().top - 98}, 400);
    });
    
    setTimeout(function(){
        $('#main').smartGuide({callback: function(id){
            $('#point i').removeClass('active');
            $('#point i[to="' + id + '"]').addClass('active');
        }, ignore: ['mods']});
        $(window).trigger('scroll');
    }, 500);
    
    if(user.resolveST()){
        if(user.checkLogin()){
            user.redirect();
        }else{
            window.listenPageEvent();
            setTimeout(function(){supernote_audio.init();}, 300);
        }
    }
});