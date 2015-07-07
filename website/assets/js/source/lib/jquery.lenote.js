/*
 *  author: gejian1@lenovo.com
 *  description: jquery扩展
 */
(function($){
    //为jquery对象添加扩展
    $.fn.extend({
        /*
         * 跨浏览器实现输入框的Placeholder效果
         * example:
         *   html: 
         *    <div class="smart-input">
         *      <label for="title_input" class="smart-label">标题</label>
         *      <input type="text" value="" name="title" id="title_input" />
         *    </div>
         *   js:
         *     $('#title_input').smartInput();
         */
        smartInput: function(options){
            var defaults = {wrapname:'.smart-input', placeholder:'.smart-label', focuscname: 'focus', changecname:'change'};
            var options = $.extend(defaults, options);
            
            var interval = null;
          
            var clean_interval = function(){
                if(interval !== null){
                    clearInterval(interval);
                    interval = null;
                }
            };
          
           var init_interval = function(_smartinput, that){
                clean_interval();
                interval = setInterval(function(){
                  var _val = $.trim($(that).val());
                  if(_val != ''){
                      _smartinput.addClass(options.changecname);
                      clean_interval();
                  }
                }, 100);
           };
           
           var clear_content = function(_smartinput, _key, that){
                var _val = $.trim($(that).val());
                if(_key == 8 || _key == 0 || _key == 46){
                    if(_val == ''){
                         _smartinput.removeClass(options.changecname);
                         init_interval(_smartinput, that);
                    }
                }
           };
          
            var check_content = function(_smartinput, placeholder_val, that){
                var _val = $.trim($(that).val());
                if(_val == '' || placeholder_val == _val){
                     $(that).val('');
                     _smartinput.removeClass(options.focuscname + ' ' + options.changecname);
                }else{
                     _smartinput.addClass(options.changecname);
                }
            };
            
           return this.each(function(){
                var placeholder_val = $(this).siblings(options.placeholder).text();
                var smartinput = $(this).closest(options.wrapname);
                
                check_content(smartinput, placeholder_val, this);
            
                $(this).focus(function(){
                     init_interval(smartinput, this);
                     var _val = $.trim($(this).val());
                     if(_val == ''){
                         smartinput.removeClass(options.changecname);
                         smartinput.addClass(options.focuscname);
                     }
                }).blur(function(){
                     clean_interval();
                     check_content(smartinput, placeholder_val, this);
                }).keypress(function(event){
                     var _val = $.trim($(this).val());
                     if((event.which != 32 && event.which!= 13 && event.which != 8 && event.which != 0 && event.which != 46) || _val != ''){
                         clean_interval();
                         smartinput.addClass(options.changecname);
                     }
                     clear_content(smartinput, event.which, this);
                }).keydown(function(event){
                     var _val = $.trim($(this).val());
                     if(_val != ''){
                          clean_interval();
                          smartinput.addClass(options.changecname);
                      }
                      clear_content(smartinput, event.which, this);
                }).keyup(function(event){
                      clear_content(smartinput, event.which, this);
                });
           });
        },
        
        /*
         *  滚动时自动高亮对应的菜单
         */
        smartGuide: function(options){
            var defaults = {fixTop: 98, id: 'id', mark: 'div', callback: function(target){console.info(target);}, ignore: []};
            var options = $.extend(defaults, options);
            
            return this.each(function(){
                var items = $(this).children(options.mark), keys = {}, values = [], timer = null;
                for(var i = 0; i < items.length; i++){
                    var item = $(items[i]), top = item.offset().top;
                    if($.inArray(item.attr(options.id), options.ignore) != -1) continue;
                    keys[top] = item.attr(options.id);
                    values.push(top);
                }
                values.sort(function(a, b){return a > b? 1 : -1;});
                
                $(window).scroll(function(){
                    if(timer !== null){
                        clearTimeout(timer);
                        timer = null;
                    }
                    
                    var scrollTop = $(this).scrollTop(), key = tmp = 0;
                    timer = setTimeout(function(){
                        for(var i = 0; i < values.length; i++){
                            var v = values[i] - options.fixTop;
                            if(scrollTop == v){
                                key = values[i];
                                break;
                            }else if(scrollTop > v){
                                if(i + 1 == values.length){
                                    key = values[i];
                                    break;
                                }else{
                                    tmp = values[i];
                                }
                            }else if(scrollTop < v){
                                key = (tmp == 0)? values[i] : tmp;
                                break;
                            }
                        }
                        
                        if(keys[key]) options.callback(keys[key]);
                        key = tmp = 0;
                    }, 50);
                });
            });
        },
        
        /*
         *  导航菜单Hover
         */
        smartNavHover: function(options){
            var defaults = {target: 'a', className: 'active', cur: 'a.active', height: 4, width: 36};
            var options = $.extend(defaults, options);
            
            return this.each(function(){
                //var _this = $(this), current = line = null, top = _this.outerHeight(true) + _this.offset().top - options.height;
                var _this = $(this), current = line = null, top = _this.outerHeight(true) - options.height, isCurrent = true, timer = null;
                _this.hover(function(){}, function(){
                    if(isCurrent) return;
                    
                    if(timer !== null){
                        clearTimeout(timer);
                        timer = null;
                    }
                    if(line) line.remove();
                    if(current) current.addClass(options.className);
                    current = line = null, isCurrent = true;
                });
                
                _this.find(options.target).hover(
                    function(){
                        var _this_ = $(this);
                        if(_this_.hasClass(options.className)) return;
                        
                        line = $('.navline');
                        if(line.length > 0){
                            var _top = line.offset().top, _left = line.offset().left;
                        }else{
                            isCurrent = false, current = _this.find(options.cur);
                            //var _top = top + $(window).scrollTop();
                            var _top = top +_this.offset().top, _left = current.offset().left;
                            $('body').append(line = $('<div class="navline"></div>'));
                            line.css({
                                position: 'absolute', 'background-color': '#c21a17', 'z-index': 1001,
                                height: options.height, width: options.width, top: _top, left: _left
                            });
                            current.removeClass(options.className); //current.css(borderColor: 'transparent');
                        }
                        var _width_ = _this_.outerWidth(true), _fixleft_ = (_width_ - line.outerWidth(true)) / 2;
                             _top_ = _this_.offset().top, _left_ = _this_.offset().left + _fixleft_;
                        //var _width_ = _this_.outerWidth(true), _top_ = _this_.offset().top, _left_ = _this_.offset().left;
                        if(line){
                            if(timer !== null){
                                clearTimeout(timer);
                                timer = null;
                            }
                            timer = setTimeout(function(){
                                //line.clearQueue().animate({left: _left_}, 200, function(){
                                //line.stop(true, true).animate({left: _left_}, 200, function(){
                                line.stop(true).animate({left: _left_}, 200, function(){
                                    $(this).animate({left: _left_ - _fixleft_, width: _width_}, 300);
                                });
                                //line.clearQueue().animate({left: _left_, width: _width_}, 400);
                            }, 80);
                        }
                    }
                );
            });
        },
        
        /*
         * 跨浏览器实现hover效果
         * example:
         *   $(targetElementGroup).smartHover([options])
         */
        smartHover: function(options){
            var defaults = {classname: 'hover'};
            var options = $.extend(defaults, options);
            return this.each(function(){
              $(this).hover(
                function(){ $(this).addClass(options.classname); },
                function(){ $(this).removeClass(options.classname); }
              );
            });
        },
        
        /*
         *  拖动改变元素的宽度，并支持拖动的最小/最大宽度
         *  example:
         *     $(targetElement).smartDragline([options])
         */
        smartDragline: function(options){
            var defaults = {min: 160, max: 280, wrapClass: '.wrap', contentClass: '.content', title: '拖拉改变大小'}, dragline, draglineline, draglineoverlay, target, wrap, content;
            var options = $.extend(defaults, options);
            options.source = this;
            
            var mouseMove = function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
                
                var w = event.clientX - $(options.source).offset().left;
                if(w >= options.min && w <= options.max){
                    draglineline.css({left: event.clientX});
                    $(event.target).css('cursor', 'e-resize');
                }else{
                    $(event.target).css('cursor', 'default');
                }
                return false;
            };
            
            var mouseUp = function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
                
                //减去滚动条的宽度
                //wrap.width(dragline.offset().left - (target.outerWidth() - content.outerWidth()));
                try{
                    var w = draglineline.offset().left - $(options.source).offset().left;
                    if(w >= options.min && w <= options.max){
                        wrap.width(w);
                    }
                }catch(e){}
                
                $(document).off('mousemove', mouseMove).off('mouseup', mouseUp);
                
                $(event.target).css('cursor', 'default');
                $('#sidebar-c input').css('cursor', 'text');
                document.body.onselectstart = function(){return !0;};
                document.onselectstart = null;
                document.unselectable = "off";
                $('body').removeClass('drag-line-noselect');
                
                try{
                    draglineoverlay.remove();
                    draglineline.remove();
                    draglineoverlay = draglineline = target = wrap = content = null;
                }catch(e){
                    $('.drag-line-overlay, .drag-line-line').remove();
                }
                return false;
            };
            
            return this.each(function(){
                var that = this;
                $(this).append(dragline = $('<div class="drag-line" title="' + options.title + '"></div>'));
                dragline.smartHover();
                
                dragline.mousedown(function(event){
                    if($('.drag-line-line').length > 0) return false;
                    try{
                       if(!event.isPropagationStopped()) event.stopPropagation();
                       if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    try{
                        //清理选区
                        if(window.getSelection){ //chrome & firefox
                            window.getSelection().removeAllRanges();
                        }else if(document.selection){ //ie
                            document.selection.empty();
                        }
                        //防止内容被选择
                        document.body.onselectstart = function(){return !1;};
                        document.onselectstart = function(){return false;};
                        document.unselectable = "on";
                        //禁止在firefox下拖动时选择文字
                        $('body').addClass('drag-line-noselect');
                    }catch(e){}
                    
                    target = $(that);
                    wrap = target.children(options.wrapClass);
                    content = target.children(options.wrapClass).children(options.contentClass);
                    
                    $('body').append(draglineoverlay=$('<div class="drag-line-overlay" onselectstart="return false;"></div>'), draglineline=$('<div class="drag-line-line"></div>'));
                    draglineline.css({height: dragline.outerHeight(), top: dragline.offset().top, left: dragline.offset().left, visibility: 'visible'});
                    
                    $(document).on('mousemove', mouseMove).on('mouseup', mouseUp);
                });
            });
        },
        
        /*
         *  点击图标最小化目标元素，即显示或隐藏
         */
        smartMinimize: function(options){
            var defaults = {wrapClass: '.wrap'};
            var options = $.extend(defaults, options);
            
            return this.each(function(){
                var that = this, collapseBtn;
                $(this).append(collapseBtn=$('<div class="collapse-btn" title="收起"><a href="javascript:;" class="icon icon-arrow" onclick="this.blur();"></a></div>'));
                collapseBtn.click(function(event){
                    var wrap = $(that).children(options.wrapClass);
                    if(wrap.is(':hidden')){
                        wrap.show();
                        $(this).removeClass('open').attr('title', '收起');
                    }else{
                        wrap.hide();
                        $(this).addClass('open').attr('title', '展开');
                    }
                });
            });
        },
        
        /*
         *   在目标元素中添加正在执行的图标和提示
         *   options:
         *      action: 在目标元素中添加或删除loading, 有两个值：del、add
         *      isappend: 添加loading时表示是否添加到目标元素的后面
         *      effect: 表示隐藏时是否显示效果
         *      text:  添加loading时的文字描述
         *      callback: 删除loading时的回调函数
         *   example:
         *      $(target).smartLoading({text: '正在发送...', isappend: false});  添加loading
         *      $(target).smartLoading({action:'del', effect:'xxx', callback:function(){}}); 删除loading
         */
        smartLoading: function(options){
            var defaults = {action: 'add', isappend: true, effect: 'hide', text: '正在加载...'};
            var options = $.extend(defaults, options || {});
            
            function removeLoading(_this){
                $(_this).remove();
                 if(typeof options.callback == 'function') options.callback();
            }
            
            return this.each(function(){
                if(options.action == 'del'){
                    if(options.effect == 'hide'){
                        $(this).children('.loading').hide('fast', function(){
                            removeLoading(this);
                        });
                    }else{
                        $(this).children('.loading').slideUp('slow', function(){
                            removeLoading(this);
                        });
                    }
                }else if(options.action == 'add'){
                    var html = '<div class="loading">' + options.text + '</div>';
                    options.isappend? $(this).append(html) : $(this).prepend(html);
                }
            });
        }
    });
    
    $.extend({
        /*
          *  在页面右下角添加ajax标志
          *  options:
          *    action:  添加或删除doing，有两种值：del、add
          *    text:     文字提示
          *    statusClass: 得到ajax结果后显示的状态样式
          *    hold: 弹出窗吸附，删除时需要指定才可以删除此类窗口
        */
        smartDoing: function(options){
            var defaults = {action: 'add', text: '处理中...', statusClass: 'success', hold: false, speed: 200, delay: 600, _callback: null};
            var options = $.extend(defaults, options || {});
            
            if(options.action == 'del'){
                //var div = $('.doing');
                var div = options.hold? $('.doing.hold') : $('.doing:not(.hold)');
                
                if(options.text){
                    //div.text(options.text);
                    div.html(options.text);
                }
                //div.addClass(options.statusClass).animate({bottom: -35}, 200, function(){
               //     $(this).remove();
               //});
               div.addClass(options.statusClass);
               setTimeout(function(){
                   div.animate({bottom: -35}, options.speed, function(){
                       $(this).remove();
                       //重新整理doing的位置
                       var doings = $('.doing');
                       for(var i = 0; i < doings.length; i++){
                           var distance = i * 35 + 5;
                           //if(distance != 5){
                               $(doings[i]).animate({bottom: distance}, 100);
                           //}
                       }
                       if(typeof options._callback == 'function') options._callback();
                   });
               }, options.delay);
            }else if(options.action == 'add'){
                //$('body').append('<div class="doing">' + options.text + '</div>');
                //$('.doing').animate({bottom: 5}, 200);
                var doings = $('.doing').length, tmp = null, distance = doings * 35 + 5;
                $('body').append(tmp = $('<div class="doing' + (options.hold? ' hold' : '') + '">' + options.text + '</div>'));
                if(tmp) tmp.animate({bottom: distance}, 200);
            }
        }
    });
    
    //为jquery添加全局扩展
    //overlay表示遮罩层，wrap表示内容的包裹层
    var overlay, wrap, publicMethods;
    
    //定义$.lebox对象
    publicMethods = $.lebox = {};
    
    /*
     * 根据当前视窗的大小计算中心的位置
     * params:
     *   target:  需要计算位置的目标元素选择器表达式
     *   isFirst:  如果是首次计算则会添加动画效果
     */
    function setBoxPostion(target, isFirst){
        var ele = $(target);
        if(ele.length == 0) return;
        
        var left = Math.floor(($(window).width() - ele.outerWidth()) / 2) + $(window).scrollLeft();
        var top = Math.floor(($(window).height() - ele.outerHeight()) / 2) + $(window).scrollTop();
        if(top > 150) top -= 150;
        if(left < 0) left = 0;
        if(top < 0) top = 0;
        if(isFirst){
            ele.css({top: -ele.outerHeight(), left: left, opacity: 0, visibility:'visible'}).animate({top: top, opacity: 100}, 500);
        }else{
            ele.css({top: top, left: left});
        }
    }
    
    function setNotifyPostion(target, isFirst){
        var ele = $(target);
        if(ele.length == 0) return;
        
        //var left = ele.offset().left + $(window).scrollLeft();
        //var top = ele.offset().top + $(window).scrollTop();
        var top = Math.floor(($(window).height() - ele.outerHeight()) * 0.3) + $(window).scrollTop();
        //if(left < 0) left = 0;
        if(top < 0) top = 0;
        if(isFirst){
            //ele.css({top: -ele.outerHeight(), left: left, opacity: 0, visibility:'visible'}).animate({top: top, opacity: 100}, 500);
            ele.css({top: -ele.outerHeight(), opacity: 0, visibility:'visible'}).animate({top: top, opacity: 100}, 500);
        }else{
            //ele.css({top: top, left: left});
            ele.css({top: top});
        }
    }
    
    /*
     * 动态弹出框
     * params:
     *   title: 弹出框标题
     *   content: 弹出框内容
     *   callback: 点击确定按钮时的回调函数
     *   escKey:  如果为false则取消对esc事件的监听
     */
    publicMethods.modalbox = function(title, content, callback, escKey, customClass, noAutoUpdate, init){
        if($("#lebox-wrap").length > 0) return false;
        
        var addons = '';
        if(customClass != 'userful'){
            addons = '<div class="rainbow"></div>';
        }
        
        overlay = $('#lebox-overlay');
        if(overlay.length == 0){
            $('body').append(overlay = $('<div id="lebox-overlay" class="fixed"></div>'));
        }
        $('body').append(
            wrap = $('<div id="lebox-wrap" class="modal"><div class="top clearfix"><span class="title">' + title + '</span><a class="icon close" title="关闭" href="javascript:;"></a></div>' + addons + '<div class="content">' + content + '</div></div>')
        );
        
        if(customClass){
            overlay.addClass(customClass);
            wrap.addClass(customClass);
        }
        
        //设置遮罩层的高度
        //overlay.height($(document).height()).show();
        overlay.show();
        //设置弹出框居中
        setBoxPostion('#lebox-wrap', true);
        if(noAutoUpdate !== true){
            //当窗口大小变化时自动调整弹出框位置
            $(window).resize(function(){setBoxPostion('#lebox-wrap', false);}).scroll(function(){setBoxPostion('#lebox-wrap', false);});
        }else{
            //$(window).off('resize scroll');
        }
        
        //监听关闭按钮点击事件
        $('#lebox-wrap .close, #lebox-wrap .btn-close').click(function(event){
            try{
               if(!event.isPropagationStopped()) event.stopPropagation();
               if(!event.isDefaultPrevented()) event.preventDefault();
            }catch(e){}
            publicMethods.modalbox.close();
        });
        $('#lebox-wrap .close').smartHover();
        //设置焦点
        //$('#lebox-wrap .content :input').first().focus();
        var input = $('#lebox-wrap .content :input:enabled').first();
        if(input.length > 0) input.focus().val(input.val());
        
        //提交表单时的处理函数
        var handler = function(){
            //$(document).unbind('keydown.modal');
            if(typeof callback == 'function') callback();
        };
        
        //监听键盘事件
        $(document).unbind('keydown.modal').bind('keydown.modal', function(event){
                var key = event.which || event.keyCode;
                //监听esc事件
                if(key == 27){
                    if(escKey !== false){
                        if(event.isDefaultPrevented()) event.preventDefault();
                        publicMethods.modalbox.close();
                    }
                }else if(key == 13){
                    //监听回车事件
                    handler();
                }
        });
        //如果有提交按钮则监听
        $('#lebox-wrap .btn-confirm').click(function(){handler();});
        if(typeof init == 'function') init();
    };
    
    //关闭modal弹出框
    publicMethods.modalbox.close = function(callback){
        //注销esc事件监听
        $(document).unbind('keydown.modal');
        $('#lebox-wrap').animate({top: 0, opacity:0}, 300, function(){
            $(this).remove();
            //overlay.remove();
            overlay && overlay.animate({opacity:0}, 200, function(){
                $(this).remove();
                if(typeof callback == 'function') callback();
            });
        });
    };
    
    //插入简单通知的HTML
    function appendNotifyHTML(icon){
        var image_path = '/assets/images/';
        icon = image_path + icon;
        if($("#lebox-wrap").length){
            $('#lebox-icon').attr('src', icon);
            return;
        }
        
        overlay = $('#lebox-overlay');
        if(overlay.length == 0){
            $('body').append(
                overlay = $('<div id="lebox-overlay" class="fixed"></div>'),
                wrap = $('<div id="lebox-wrap" class="notify"><div id="lebox-content" class="clearfix"><img id="lebox-icon" src="' + icon + '"/><div id="lebox-msg"></div></div></div>')
            );
        }else{
            $('body').append(
                wrap = $('<div id="lebox-wrap" class="notify"><div id="lebox-content" class="clearfix"><img id="lebox-icon" src="' + icon + '"/><div id="lebox-msg"></div></div></div>')
            );
        }
    }
    
    /*
     * 用于弹出提示的简单通知框
     * params:
     *   msg: 需要显示的消息
     *   icon: 指定文字前方显示的图标，如警告、成功等
     *   autoHide: 指示是否自动隐藏通知框，单位为毫秒
     */
    publicMethods.notify = function(msg, icon, autoHide){
        icon = icon? icon : 'loading.gif';
        appendNotifyHTML(icon);
        $('#lebox-wrap #lebox-content #lebox-msg').html(msg);
        //overlay.height($(document).height()).show();
        overlay.show();
        wrap.show();
        
        setNotifyPostion('#lebox-wrap', true);
        //当窗口大小变化时自动调整弹出框位置
        //$(window).off('resize scroll').resize(function(){setNotifyPostion('#lebox-wrap', false);}).scroll(function(){setNotifyPostion('#lebox-wrap', false);});
        $(window).resize(function(){setNotifyPostion('#lebox-wrap', false);}).scroll(function(){setNotifyPostion('#lebox-wrap', false);});
        
        if(typeof autoHide === 'number'){
            setTimeout($.lebox.close, autoHide);
        }
    };
    
    //显示错误消息的简单通知框
    publicMethods.error = function(msg, autoHide){
        publicMethods.notify(msg, 'error.png', autoHide);
    };
    
    //显示成功消息的简单通知框
    publicMethods.success = function(msg, autoHide){
        publicMethods.notify(msg, 'success.png', autoHide);
    };
    
    //显示警告消息的简单通知框
    publicMethods.warning = function(msg, autoHide){
        publicMethods.notify(msg, 'warning.png', autoHide);
    };
    
    //显示消息
    publicMethods.info = function(msg, autoHide){
        publicMethods.notify(msg, 'info.png', autoHide);
    };
    
    //关闭简单通知框
    publicMethods.close = function(callback, holdOverlay){
        if(holdOverlay === true){
            wrap && wrap.hide(function(){
               $(this).remove();
               if(typeof callback == 'function') callback(); 
            });
        }else{
            wrap && wrap.hide(function(){
                $(this).remove();
                overlay && overlay.fadeOut('fast', function(){
                    //wrap.remove();
                    $(this).remove();
                    if(typeof callback == 'function') callback();
                });
            });
        }
    };
})(jQuery);