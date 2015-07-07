var supernote_audio = {};
(function(){
    //行为
    var behavior = {
        listener: function(){
            $('a.attachment[resource="attachment"]').dblclick(function(){
                try{
                    console.info('Todo| open file:' + $(this).attr('_id'));
                    window.external.openFile($(this).attr('_id'));
                }catch(e){}
            });
            
            $('div.audio-play').click(function(){
                try{
                    supernote_audio.startOrPause(this);
                }catch(e){}
            });
        },
        cleanIconState: function(id){
            if(!id) return;
            var icons = $('#' + id + ' .item .timeline .icon[status=active]');
            for(var i = 0; i < icons.length; i++) behavior.updateIconState($(icons[i]));
        },
        updateIconState: function(icon){
            if(!icon) return;
            var src = icon.attr('src');
            if(src){
              var res = src.replace(new RegExp('_normal|_active', 'gim'), function(s){
                  if(s == '_normal'){
                    icon.attr('status', 'active');
                    icon.addClass('light-timeline');
                    return  '_active';
                  }else{
                    icon.removeAttr('status');
                    icon.removeClass('light-timeline');
                    return '_normal';
                  }
              }, false);
              icon.attr('src', res);
            }
        },
        slide: function(id, second, speed, ignoreUpdateIcon){
            if(!speed) speed = 100;
            
            var target = $('#' + id + ' .item[time="' + second + '"]');
            if(target.length > 0){
                if(!ignoreUpdateIcon){
                  behavior.cleanIconState(id);
                  behavior.updateIconState(target.find('.timeline .icon'));
                }
                $('body, html').clearQueue().animate({scrollTop: target.offset().top - 15}, 400);
            }
        }
    };
    
    //调整图片大小
    function setPhotoSize(maxWidth){
        function setSize(id){
            var image_temp = new Image(), img = $('img#' + id), width = img.attr('_w'), start_time = new Date().getTime(),
                  src = img.attr('src') + '?' + start_time, interval = null, times = 50;
            
            if(img.length == 0) return;
            img.on('error', function(){
                var img = $(this);
                img.css({width: 'auto', height: 'auto'});
                clearInterval(interval);
                img.removeAttr('_w');
                image_temp = null;
            }).on('load', function(){
                //console.info($(this).width());
                var img = $(this);
                if(img.width() > width){
                    img.css({width: width, height: width * (parseInt(img.height()) / parseInt(img.width()))});
                    clearInterval(interval);
                    img.removeAttr('_w');
                    image_temp = null;
                }
            });
            
            try{
                image_temp.src = src;
                var check = function(){
                    //console.info(id + ': ' + times);
                    if(image_temp.width > 0 && image_temp.height > 0){
                        if(image_temp.width > width){
                            img.css({width: width, height: width * (parseInt(image_temp.height) / parseInt(image_temp.width))});
                        }
                    }
                    times -= 1;
                    if(times <= 0 || (image_temp.width > 0 && image_temp.height > 0)){
                        clearInterval(interval);
                        img.removeAttr('_w');
                        image_temp = null;
                    }
                };
                interval = setInterval(check, 500);
            }catch(e){}
        }
        
        maxWidth = parseInt(maxWidth);
        if(maxWidth && maxWidth > 0) $('img:not([_w])').attr('_w', maxWidth);
        
        var images = $('img[_w]');
        for(var i = 0; i < images.length; i++){
            var image = $(images[i]);
            setSize(image.attr('id'));
        }
    }
    
    /*
     * Public Event API
     *   supernote_audio.init     加载事件
     *   supernote_audio.start    播放或暂停
     *   supernote_audio.stop     停止或停止所有: 用于页面上有多个音频文件时, 在点击其它音频时要停止正在播放的音频
     *   supernote_audio.slideTo  滑动
     */
    
    supernote_audio.init = function(maxWidth){
        setPhotoSize(maxWidth);
        behavior.listener();
    };
    
    /*
     *  播放音频
     *  @_audio 音频
     */
    supernote_audio.startOrPause = function(_audio){
        var _this = $(_audio), id = _this.attr('id'), isPlay = _this.attr('play');
        
        //先关闭暂停所有音频的播放
        if(isPlay == 0) supernote_audio.stop();
        
        //if: mix audio
        if(_this.attr('belong') && $.trim(_this.attr('belong'))){
            id = _this.attr('belong');
            var icon = $('#' + id + ' [audio="' + _this.attr('id') + '"] .timeline .icon');
            behavior.updateIconState(icon);
            if(isPlay == 1) icon.removeClass('light-timeline');
        }
        
        if(isPlay == 0){
            _this.attr('play', 1);
            _this.addClass('active');
            if(_this.attr('belong') && $.trim(_this.attr('belong'))){
                behavior.slide(id, 0, 50, true);
                var type = 'mix';
            }else{
                var type = 'normal';
            }
            //播放
            try{
              var res = window.external.play(_this.attr('id'), _this.attr('_id'), type);
            }catch(e){}
        }else{
            _this.attr('play', 0);
            _this.removeClass('active');
            //暂停
            try{
                window.external.pause(_this.attr('id'), _this.attr('_id'));
            }catch(e){}
        }
    };
    
    supernote_audio.start = function(id){
        var play = $('#' + id + '.audio-play');
        if(play.length > 0){
            play.attr('play', 1).addClass('active');
        }
    };
    
    supernote_audio.pause = function(id){
        var play = $('#' + id + '.audio-play');
        if(play.length > 0){
            play.attr('play', 0).removeClass('active');
        }
    };
    
    /*
     * 停止播放
     * @id mix id
     */
    supernote_audio.stop = function(id){
        if(id){
            var play = $('#' + id + '.audio-play');
            if(play.length > 0){
                play.attr('play', 0).removeClass('active');
                if(play.attr('belong') && $.trim(play.attr('belong'))){
                    behavior.cleanIconState(play.attr('belong'));
                    behavior.slide(play.attr('belong'), 0, 50, true);
                }
            }
        }else{
            var items = $('div.audio-play[play=1]'), icons = $('.mix .item .timeline .icon[status=active]');
            for(var i = 0; i < items.length; i++){
                var play = $(items[i]);
                //停止播放
                try{
                    window.external.stop(play.attr('id'), play.attr('_id'));
                }catch(e){}
                
                //if(play.attr('belong') && $.trim(play.attr('belong'))){
                //    behavior.cleanIconState(play.attr('belong'));
                //}
                play.attr('play', 0).removeClass('active');
            }
            
            for(var i = 0; i < icons.length; i++) behavior.updateIconState($(icons[i]));
        }
    };
    
    /*
     * 滑动
	 * @id mix ID
	 * @second 当前播放的秒数
	 * @speed  在指定的时间内完成动画，默认为100ms
     */
    supernote_audio.slideTo = function(id, second, speed){
        var audio = $('#' + id);
        if(audio.attr('belong') && $.trim(audio.attr('belong'))){
            behavior.slide(audio.attr('belong'), second, speed);
        }
    };
})();