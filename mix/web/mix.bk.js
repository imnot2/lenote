var mixInsts = {};

$(function(){
    var resources = $('[resource=mix]');
    $.each(resources, function(i, item){
        var id = $(resources[i]).attr('id');
        //mixInsts.push(new MixClass(id));
        mixInsts['mix_' + id] = new MixClass(id);
    });
    resources = null;
});

(function($){
    MixClass = function(id){
        function setup(){
          var _mix = $('#' + id + '.mix[resource]'), _viewer = _mix.find('.slideshow .slideshow-wrap ul'),
              _thumbs = _mix.find('.slider ul.thumbs'), _thumbs_items = _thumbs.children('li');
          var count = _thumbs_items.length, thumb_width = _thumbs_items.outerWidth(true), viewer_width = _viewer.children('li').outerWidth(true),
              thumb_wrap_width = _mix.find('.slider .thumbs-wrap').width(), viewer_wrap_width = _mix.find('.slideshow .slideshow-wrap').width();
          _thumbs_items.first().addClass('first current').end().last().addClass('last');
          //fixed for ie
          _viewer.width(viewer_width * count);
          _thumbs.width(thumb_width * count);
          _mix = _viewer = _thumbs = _thumbs_items = null;
          return {count: count, viewer_width: viewer_width, viewer_wrap_width: viewer_wrap_width, thumb_width: thumb_width, thumb_wrap_width: thumb_wrap_width}
        }
        this.id = id;
        this.meta = setup();
        this.init();
        //this.interval = null;
        //this.timeout = null;
    };
    
    //MixClass.prototype.init = function(){};
    //MixClass.prototype = {init: function(){}};
    $.extend(MixClass.prototype, {
        init: function(){
            this.slider.init(this);
            this.audio.init(this);
        },
        //clearTimer: function(){
        //    if(this.interval) clearInterval(this.interval);
        //    if(this.timeout) clearTimeout(this.timeout);
        //},
        slider: {
            init: function(_mix){
                this.mix = _mix;
                var that = this;
                //监听前/后按钮
                $('#' + this.mix.id + ' .slider .arrow').click(function(event){
                    event = event || window.event;
                    try{
                      if(!event.isPropagationStopped()) event.stopPropagation();
                      if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    var _parent = $(this).parent(), isAvailable = ! $(this).hasClass('disable');
                    if(isAvailable){
                      var current = $('#' + that.mix.id + ' .slider ul.thumbs li.current');
                      if(!current) return false;
                      if(_parent.hasClass('prev')){
                        that.slideTo(current.prev('li'));
                      }else if(_parent.hasClass('next')){
                        that.slideTo(current.next('li'));
                      }
                    }
                });
                //监听thumb的点击
                $('#' + this.mix.id + ' .slider ul.thumbs li').click(function(event){
                    event = event || window.event;
                    try{
                      if(!event.isPropagationStopped()) event.stopPropagation();
                      if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    that.slideTo($(this));
                });
            },
            setCurrent: function(target){
                if(this.isFirst(target)){
                    $('#' + this.mix.id + ' .slider .prev .arrow').addClass('disable');
                }else if(this.isLast(target)){
                    $('#' + this.mix.id + ' .slider .next .arrow').addClass('disable');
                }else{
                    $('#' + this.mix.id + ' .slider .arrow').removeClass('disable');
                }
                $('#' + this.mix.id + ' .slider ul.thumbs li.current').removeClass('current');
                target.addClass('current');
            },
            slideTo: function(target, speed, isGroup){
                if(!target || this.isCurrent(target)) return false;
                //if(!target || (this.isCurrent(target) && isGroup !== true)) return false;
                speed = speed || 200;
                
                //this.mix.clearTimer();
                var _mix = $('#' + this.mix.id + '.mix[resource]'), _thumbs = _mix.find('.slider ul.thumbs'), current = $('#' + this.mix.id + ' .slider ul.thumbs li.current'),
                    _viewer = _mix.find('.slideshow .slideshow-wrap ul'), _index = parseInt(target.position().left / this.mix.meta.thumb_width + 1),
                    _current_index = parseInt(current.position().left / this.mix.meta.thumb_width + 1),
                    distance = current.position().left - target.position().left, minus = target.position().left - Math.abs(_thumbs.position().left),
                    isBetween = minus >= 0 && minus <= this.mix.meta.thumb_wrap_width, left = null, viewer_left = 0;
                
                //连续点击时清空动画队列
                _thumbs.clearQueue(); // _thumbs.stop(true, true);
                //jQuery.fx.off = true;jQuery.fx.off = false;
                
                if(distance == 0){
                    return false;
                }else if(distance > 0){  //向后
                    //是否是列表第一个
                    if(this.isFirst(target)){
                        left = 0;
                    }else if(isBetween){
                        if(_thumbs.position().left == 0 || (minus - this.mix.meta.thumb_width) >= 0){
                            left = -1;
                        }else{
                            //(Math.abs(_thumbs.position().left) >= this.mix.meta.thumb_width * 2)
                            left = _thumbs.position().left + (this.mix.meta.thumb_width - Math.abs(minus));
                        }
                    }else{
                        left = _thumbs.position().left + Math.abs(minus) + this.mix.meta.thumb_width;
                    }
                    viewer_left = _viewer.position().left + (Math.abs(_viewer.position().left) - (_index - 1) * this.mix.meta.viewer_width);
                }else{  //向前
                    var wrap_fixed = Math.ceil(this.mix.meta.thumb_width - (this.mix.meta.thumb_wrap_width - minus));
                    if(Math.abs(wrap_fixed) >= this.mix.meta.thumb_width) wrap_fixed = 0;
                    
                    //是否是列表最后一个
                    if(this.isLast(target)){
                        left = target.position().left + this.mix.meta.thumb_width - this.mix.meta.thumb_wrap_width;
                        if(left > 0){
                            left = -left;
                        }else{
                            left = -1;
                        }
                    }else if(isBetween){
                        if((minus - wrap_fixed + this.mix.meta.thumb_width * 2) <= this.mix.meta.thumb_wrap_width){
                            left = -1;
                        }else{
                            left = _thumbs.position().left - this.mix.meta.thumb_width - wrap_fixed;
                        }
                    }else{
                        left = _thumbs.position().left - (minus - this.mix.meta.thumb_wrap_width + this.mix.meta.thumb_width) - wrap_fixed;
                    }
                    viewer_left = -(_index - 1) * this.mix.meta.viewer_width;
                }
                
                //_viewer.children('li[source=' + target.attr('target') + ']').position().left
                try{
                    var items = _viewer.children('li');
                    $(items.get(_current_index - 1)).animate({opacity: .4}, speed - 50);
                    $(items.get(_index - 1)).css({opacity: .4}).animate({opacity: 1}, speed + 50);
                }catch(e){}
                
                if(isGroup === true){
                    _viewer.animate({left: viewer_left}, speed / 6);
                    if(left != null && left != -1){
                        var that = this;
                        _thumbs.animate({left: left}, speed, function(){
                            that.setCurrent(target);
                        });
                    }else{
                        this.setCurrent(target);
                    }
                }else{
                    _viewer.animate({left: viewer_left}, speed);
                    if(left != null && left != -1) _thumbs.css({left: left});
                    this.setCurrent(target);
                }
            },
            //判断是否区间滑动, 根据next/count决定多长时间滑动一次并且每一次滑动中间要有停顿
            pointTo: function(time){
                //this.mix.clearTimer();
                var thumbs = $('.slider ul.thumbs li[time=' + time + ']');
                if(thumbs.length == 1){
                    this.slideTo(thumbs);
                }else if(thumbs.length > 1){
                    //不再保存next属性，使用$('.slider .thumbs li[time=4]').last().next('li').attr('time')获取
                    var size = thumbs.length, startTime = thumbs.attr('time'), nextTime = thumbs.attr('next'),
                        interval = nextTime - startTime, sleep = 0, speed = (interval / size) * 1000;
                    if(speed >= 1000){
                        sleep = 250;
                    }else if(speed >= 600){
                        sleep = 50;
                    }else if(speed >= 350){
                        sleep = 20;
                    }
                    speed -= sleep;
                    
                    //var that = this, _thumbs = $('.slider ul.thumbs');
                    //_thumbs.clearQueue('slider');
                    //for(var i = 0; i < size; i++){
                    //    var thumb = thumbs[i];
                    //    _thumbs.queue('slider', function(){
                    //        //console.info(123)
                    //        that.slideTo($(thumb), speed);
                    //    });
                    //}
                    //var  promise = _thumbs.promise('slider');
                    //promise.done(function(){ console.info(22)
                    //    clearInterval(that.mix.interval);
                    //});
                    //_thumbs.dequeue('slider');
                    //this.mix.interval = setInterval(function(){
                    //    //console.info(111)
                    //    _thumbs.dequeue('slider');
                    //    if(_thumbs.queue('slider').length == 0) clearInterval(that.mix.interval);
                    //}, sleep);
                    
                    //$(thumbs[0]).delay(1500).queue(function(){
                    //    console.info(this);
                    //});
                    //sleep = 1000;
                    var that = this;
                    for(var i = 0; i < size; i++){
                        if(i == 0){
                            this.slideTo($(thumbs[i]), speed);
                        }else{
                            var _sleep = sleep * i;
                            //$(thumbs[i]).clearQueue().delay(_sleep).queue(function(){
                            $(thumbs[i]).delay(_sleep).queue(function(){
                                that.slideTo($(this), speed, true);
                                $(this).dequeue();
                            });
                        }
                    }
                }
            },
            isCurrent: function(target){
                return target.hasClass('current');
            },
            isFirst: function(target){
                return target.hasClass('first');
            },
            isLast: function(target){
                return target.hasClass('last');
            },
            finish: function(){
                var _mix = $('#' + this.mix.id + '.mix[resource]');
                _mix.find('.slideshow .slideshow-wrap ul').css({left: 0}).children('li').css({opacity: 1});
                var _thumbs = _mix.find('.slider ul.thumbs');
                _thumbs.css({left: 0});
                this.setCurrent(_thumbs.children('li').first());
            }
        },
        audio: {
            init: function(_mix){
                this.mix = _mix;
                this.audioUI = $('#' + this.mix.id + ' .audio');
                this.audioDom = $('#' + this.mix.id + ' audio');
                this.audio = this.audioDom.get(0);
                
                var that = this;
                this.audioUI.children('.over').click(function(){
                    that.finish();
                    //关闭进度条和时间
                    
                });
                
                  //audio.addEventListener('play', function(){
                  //  var i = setInterval(function(){
                  //    if(audio.ended || audio.paused){
                  //      clearInterval(i);
                  //      console.info('play over');
                  //    }else{
                  //      console.info(audio.currentTime);
                  //    }
                  //  }, 1);
                  //});
            },
            play: function(){
                //$('audio').get(0).play()
                //var audio = $('audio').get(0);
                //console.info(audio.duration);
            },
            pause: function(){
                //$('audio').get(0).pause()
            },
            finish: function(){
                this.mix.slider.finish();
            }
        }
    });
})(jQuery);