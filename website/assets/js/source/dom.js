/*
 *  author: gejian1@lenovo.com
 *  description: DOM相关操作
 */
(function(){
    lenoteDom = {
        //初始化DOM UI
        init: function(view){
            //设置帐户名、初始化编辑器高度和宽度
            this.setAccountTitle().editor.init(view);
            //如果已登录则显示界面内容，否则是一个空白页
            utils.show('#header, #main', true);
            //加载完成后设置边栏和内容区的高度以便当内容溢出时滚动条可以正确地出现
            this.setHeight();
            //监听窗口变化自动调整元素的大小
            $(window).resize(function(){
                lenoteDom.setHeight();
                $(window).trigger("editor.event.resize");
                //if(lenoteDom.editor.adjustTimeout !== null) clearTimeout(lenoteDom.editor.adjustTimeout);
                //lenoteDom.editor.adjustTimeout = setTimeout(function(){
                //    lenoteDom.editor.adjustToolbar();
                //}, 40);
                lenoteDom.editor.adjustToolbar();
            });
            //搜索框提示词
            $('#q').smartInput();
            //边栏A的拖动条及最小化按钮
            $('#sidebar-a').smartDragline({min: 200, max: 290}).smartMinimize();
            //边栏B的拖动条
            $('#sidebar-b').smartDragline({min: 355, max: 445});
            //监听全局事件
            lenoteEvent.init();
            //初始化笔记本(组)树->笔记列表->第一篇笔记
            //view.category.init();
        },
        
        //设置header中的帐户名
        setAccountTitle: function(){
            $('.accountinfo').append(user.getUState('un'));
            return this;
        },
        
        //根据可见视窗的高度设置笔记列表、侧边栏等元素的相关高度
        setHeight: function(){
            utils.calElemHeight('#sidebar-a, #sidebar-b, #sidebar-c');
            utils.calElemHeight('#sidebar-a .wrap', null, 20);
            utils.calElemHeight('#sidebar-b .content', null, 45);
        },
        
        //编辑器相关
        editor: {
            //窗口变化时调整工具栏隐藏与显示
            //adjustTimeout: null,
            //adjustToolBarWidth: 0,
            adjustLastWidth: 0,
            adjustToolbar: function(){
                //var width = $('.edui-editor-toolbarboxinner').width();
                var morebutton = $(".edui-for-moretool"),
                      showbox = $(".edui-editor-toolbarboxinner .edui-toolbar"),
                      width = showbox.width();
                if(UE.browser.ie && UE.browser.version === 8) width -= 50;
                //防抖动
                //try{
                //    //if((this.adjustToolBarWidth !== 0 && Math.abs(this.adjustToolBarWidth - width) < 15) || (width > 0 && !morebutton.hasClass('edui-button-show') && width >= getChildWidth(showbox))){
                //    if(this.adjustToolBarWidth !== 0 && Math.abs(this.adjustToolBarWidth - width) < 10){
                //        return false;
                //    }
                //    //this.adjustToolBarWidth = width;
                //}catch(e){}
                
                if((this.adjustLastWidth !== 0 && Math.abs(this.adjustLastWidth - width) < 5) || width < 1) return false;
                if(this.adjustLastWidth === 0) this.adjustLastWidth = width;
                
                function getWidth(node){
                    var w = node.outerWidth(true);
                    if(w > 0) return w;
                    var widthObj = {"fontfamily":85, "fontsize":60, "forecolor":36, "backcolor":36, "separator": 21},
                          classname = node.attr('class').replace(/-default|-colorbutton|edui|box|button|split|combox|for-|-|\s/ig,'');
                    return widthObj[classname] ? widthObj[classname] : 26;
                }
                
                function getChildWidth(node){
                    //var val = parseInt(node.get(0).scrollWidth) || 0;
                    //if(val > 0) return val;
                    var children = node.children(), val = 0;
                    //for(var i = 0; i < children.length; i++) val += $(children[i]).outerWidth(true);
                    for(var i = 0; i < children.length; i++) val += getWidth($(children[i]));
                    return val;
                }
                
                //if(width > 0){ //仅编辑状态时会改变
                    var morewrap = $("#moretoolbox"),
                          morebox = $("#moretoolbox .edui-toolbar"),
                          //showChildW = showbox.width();
                          showChildW = getChildWidth(showbox),
                          //morebuttonW = 4 + 2 + 26 + (UE.browser.ie && UE.browser.version === 8? 18 : -18);
                          morebuttonW = 4 + 2 + 20 + 6;
                    //width -= morebuttonW; //减去morebutton的width + padding + border + maring + position - parent padding
                    if(morebutton.hasClass('edui-button-show')) showChildW += morebuttonW;
                    
                    if(this.adjustLastWidth < width || width - showChildW > 26){//放大
                        var children = morebox.children();
                        for(var i = 0; i < children.length; i++){
                            var child = $(children[i]), w = getWidth(child);
                            if((width - showChildW - 10) > w || (i === children.length - 1 && w < morebuttonW)){
                                //this.adjustToolBarWidth = width + morebuttonW; //防抖动
                                child.remove();
                                showbox.append(child);
                                //showChildW = showbox.width();
                                if(morebutton.hasClass('edui-button-show')){
                                    showChildW = morebuttonW + getChildWidth(showbox);;
                                }else{
                                    showChildW = getChildWidth(showbox);
                                }
                                if(morebox.children().length === 0){
                                    morewrap.removeClass("edui-moretoolbox-show");
                                    morebutton.removeClass("edui-button-show");
                                    //morebutton.removeClass("edui-button-checked");
                                    break;
                                }
                            }else{
                                break;
                            }
                        }
                    //}else if((width + morebuttonW) < showChildW){//缩小
                     }else{
                        var children = showbox.children();
                        for(var i = children.length - 1; i >= 0; i--){
                            //var child = $(children[i]), w = getWidth(child);
                            var child = $(children[i]);
                            if((showChildW - width) > 0 || width - showChildW < 10){
                                //this.adjustToolBarWidth = width + morebuttonW; //防抖动
                                child.remove();
                                //morebox.append(child);
                                morebox.children().length > 0? morebox.prepend(child) : morebox.append(child);
                                if(!morebutton.hasClass('edui-button-show')){
                                    morebutton.addClass("edui-button-show");
                                    showChildW = morebuttonW + getChildWidth(showbox);
                                }else{
                                    showChildW = getChildWidth(showbox);
                                }
                            }else{
                                break;
                            }
                        }
                    }
                    this.adjustLastWidth = width
                //}
            },
            
            /*选区相关操作：用于处理附件、音频等特殊格式时焦点与选区的计算*/
           selectionchange: function(eventName, isChange, keyCode){
               if(isChange){
                   //lenoteDom.editor.editor.selection.getRange().setStartAtLast(lenoteDom.editor.editor.body.lastChild).setCursor(false, true);
                   try{
                       var _editor = lenoteDom.editor.editor, sel = _editor.selection, range = sel.getRange(),
                            domUtils = UE.dom.domUtils, start = range.startContainer, end = range.endContainer;
                       //if(!range.collapsed) range.collapse(true);
                       //var filterNode = domUtils.findParent(range.startContainer, function(node){
                       //    return $(node).hasClass('attachskin');
                       //});
                       
                       //if(start && (start.nodeType == 1 || start.nodeType == 3)){
                       if(start){
                           //console.info($(range.startContainer).parents('span.attachskin').get(0));
                           var node = $(start);
                           //仅处理keyup
                           if(eventName == 'keyup' && keyCode){
                               var parent = node.parents('span.attachskin');
                               if(parent.length == 0){
                                   switch(keyCode){
                                       case 37:
                                            if(range.startOffset == 0 && range.endOffset == 0){
                                                var _elem = utils.getSibling(node, 'span.attachskin', true);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).previousSibling || _elem.get(0).previousElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.before('&#8203;');
                                                        }catch(e){}
                                                    }
                                                }
                                            }
                                            break;
                                       case 39:
                                            if($.trim(node.get(0).nodeValue) == ''){
                                                var _elem = utils.getSibling(node, 'span.attachskin', false);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).nextSibling || _elem.get(0).nextElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.after('&#8203;');
                                                        }catch(e){}
                                                    }
                                                }
                                            }
                                            break;
                                   }
                               }
                               return true;
                           }
                           
                           if(start.nodeType == 1){ //处理element节点
                               //解决点击编辑按钮时光标偏移的问题
                               //if(eventName == 'focus' && node.is('p') && node.parent('body').length > 0){
                               //    var _attachskins = node.find('span.attachskin');
                               //    if(_attachskins.length > 0){
                               //        //for(var i = 0; i < _attachskins.length; i++){
                               //        //    var _attachskin = $(_attachskins[i]), attachskinDom = _attachskin.get(0);
                               //        //    try{
                               //        //        var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                               //        //        if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.before('&#8203;');
                               //        //        _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                               //        //        if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.after('&#8203;');
                               //        //    }catch(e){}
                               //        //}
                               //        var _attachskin = $(_attachskins.last()), attachskinDom = _attachskin.get(0);
                               //        try{
                               //            var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                               //            if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.before('&#8203;');
                               //            _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                               //            if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.after('&#8203;');
                               //            //range.setStartAfter(_range.endContainer).setCursor(false, true);
                               //        }catch(e){}
                               //    }
                               //}
                               
                               if(node.attr('contenteditable') && node.attr('contenteditable').toLowerCase() === 'false'){
                                   //var parent = node.parents('span.attachskin'), parentDom = parent.get(0);
                                   //var parent = node.parents('.btnattact');
                                   var attachskin = node.parents('span.attachskin');
                                   if(attachskin.length == 1){
                                       var parent = attachskin.children('.btnattact'), attachskinDom = attachskin.get(0);
                                       //检查附件前后是否有分隔符，解决直接在没有分隔符的附件后点击时获取焦点的问题
                                       try{
                                           var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                                           if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) attachskin.before('&#8203;');
                                           _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                                           if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) attachskin.after('&#8203;');
                                       }catch(e){}
                                       
                                       if(parent.length == 1){
                                           var parentDom = parent.get(0);
                                           //range.setStartBefore(parentDom);
                                           //range.setEndAfter(parentDom);
                                           range.selectNode(parentDom);
                                           range.select();
                                       }
                                   }
                               }
                           }else if(start.nodeType == 3 && keyCode){ //处理文本节点
                               var parent = node.parents('span.attachskin');
                               //node.hasClass('attachskin')
                               //sel.clearRange();
                               if(parent.length == 1){
                                   var parentDom = parent.get(0);
                                   switch(keyCode){
                                       case 37:case 38:case 9: //向前、向上、tab
                                          var _elem = parentDom.previousSibling || parentDom.previousElementSibling; //parent.prev().get(0)，不能获取文本节点
                                          //if(!_elem) parent.before('&#8203;');
                                          try{
                                              if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) parent.before('&#8203;');
                                          }catch(e){}
                                          range.setStartBefore(parentDom).setCursor(false, true);
                                          break;
                                       case 39:case 40:case 27: //向后、向下、esc
                                          var _elem = parentDom.nextSibling || parentDom.nextElementSibling; //parent.next().get(0)
                                          //if(!_elem) parent.after('&#8203;');
                                          try{
                                              if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) parent.after('&#8203;');
                                          }catch(e){}
                                          range.setStartAfter(parentDom).setCursor(false, true);
                                          break;
                                       case 36:case 33: //Home、pageup
                                          range.setStartAtLast(_editor.body.firstChild).setCursor(false, true);
                                          break;
                                       case 35:case 34: //End、pagedown
                                          range.setStartAtLast(_editor.body.lastChild).setCursor(false, true);
                                          break;
                                       case 46:case 8://Del、Backspace
                                          parent.remove();
                                          break;
                                   }
                               //解决附件前面有元素时，就不能再选中附件了，需要检查是否是当前range的第一个子节点或文本节点中的第一个字符
                               //}else if((range.startOffset == 0 && range.endOffset == 0) || (domUtils.isWhitespace(node.get(0)) && ($.trim(node.get(0).nodeValue) == ''))){
                               //}else if(range.startOffset == 0 || (domUtils.isWhitespace(node.get(0)) && ($.trim(node.get(0).nodeValue) == ''))){
                               }else{
                                   //当使用向前向后键时检查当前元素的前后是否存在自定义标签，如存在则选中
                                   switch(keyCode){
                                       case 37: //向前<
                                            //if((range.startOffset == 0 && range.endOffset == 0) || (domUtils.isWhitespace(node.get(0)) && ($.trim(node.get(0).nodeValue) == ''))){
                                            //if((range.startOffset == 0 && range.endOffset == 0) || $.trim(node.get(0).nodeValue) == ''){
                                            if(range.startOffset == 0 && range.endOffset == 0){
                                                var _elem = utils.getSibling(node, 'span.attachskin', true);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).previousSibling || _elem.get(0).previousElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.before('&#8203;');
                                                        }catch(e){}
                                                    }
                                                    //_elem.before('&#8203;');
                                                }
                                            }
                                            break;
                                       case 39: //向后>
                                            //if((range.startOffset == 0 && range.endOffset == 0) && $.trim(node.get(0).nodeValue) == ''){
                                            if($.trim(node.get(0).nodeValue) == ''){
                                                var _elem = utils.getSibling(node, 'span.attachskin', false);
                                                if(_elem && _elem.length > 0){
                                                    var _target = _elem.children('.btnattact');
                                                    if(_target.length > 0){
                                                        range.selectNode(_target.get(0));
                                                        range.select();
                                                        try{
                                                            var whiteTag = _elem.get(0).nextSibling || _elem.get(0).nextElementSibling;
                                                            if(!whiteTag || $.trim(whiteTag.nodeValue) != '' || whiteTag.nodeType == 1) _elem.after('&#8203;');
                                                        }catch(e){}
                                                    }
                                                    //_elem.after('&#8203;');
                                                }
                                            }
                                            break;
                                   }
                               }
                           }
                       }
                   }catch(e){}
               }
           },
           
            /*
             *  自动保存:
             *  * 在set前取消监听-使用removeListener(String types, Function fn)取消指定的函数引用，该事件监听的其它处理函数不取消
             *  1. 当笔记修改后，阻止F5、Ctrl+F5、关闭浏览器/标签页、前进后退按钮
             *  2. 当停止输入5s后才同步，当用户在不停的输入时要延长timeout
             *  3. 当正在保存时笔记内容二次修改不直接自动保存，等上一个保存请求结束后再触发自动保存
             *  4. 空笔记不自动保存，除非手工点击或内容改变完成按钮
             *  5. 当标题、标签、内容发生改变时保存
             *  6. 自动保存时，完成按钮不可用
             *  7. 点击完成按钮时关闭自动保存
             *  8. 切换笔记时重置saved状态（需要检查是否已保存并将saveing的所有参数重置），防止连续点击切换笔记
             *  9. 当正在导mk数据时，可以切换笔记
             *  10.分类、星标、分享、所有笔记、标签切换及搜索时需要检查笔记是否保存
             *  11.ctrl+s:需要分别监听iframe和外部窗口的ctrl+s事件(保存前需要检查是否有笔记在编辑、如果是空分类没有笔记按ctrl+s是没有反应的)
             * 
             *  自动保存的状态
             *  @is_need : 笔记是否需要保存
             *  @is_doing: 0初始状态，1笔记正在保存，2在保存时笔记又已修改，此时is_need不能还原成false
             *  @is_hold: 控制不能离开当前编辑的笔记，必须得点击完成按钮才可离开
             *  desc
             *  1. 当笔记修改后, 阻止F5、Ctrl+F5、关闭浏览器/标签页、前进后退按钮
             *  2. 当停止输入5s后才同步，当用户在不停的输入时要延长timeout
             *  3. 当正在保存时笔记内容又修改就暂不保存，等请求结束后再保存二次修改
             *  4. 空笔记不保存，除非手工点击完成按钮
             *  5. 切换笔记及点击完成按钮后重置saved状态
             */
            saved: {
                is_need: false, is_doing: 0, is_hold: null, timeout: null, title_based: null, content_based: null,
                init: function(){
                    this.is_need = false;
                    this.is_doing = 0;
                    this.is_hold = null;
                    //this.is_first = false; //用于检查是否第一次输入字符，用于屏蔽keyup频繁触发
                    this.title_based = null;
                    this.content_based = null;
                    if(this.timeout !== null) clearTimeout(this.timeout);
                    this.timeout = null;
                },
                clean: function(){
                    lenoteDom.editor.editor.removeListener('contentChange', lenoteDom.editor.saved.contentChange);
                    lenoteDom.editor.editor.removeListener('keyup', lenoteDom.editor.saved.keybordChange);
                    lenoteDom.editor.editor.removeListener('keydown', lenoteDom.editor.saved.shortcut);
                    //选区相关
                    lenoteDom.editor.editor.removeListener('selectionchange', lenoteDom.editor.selectionchange);
                    $('#note_title_input').off('keyup');
                    this.init();
                },
                listen: function(){
                    //var based = md5(lenoteDom.editor.getContent());
                    //lenoteDom.editor.saved.content_based = based;
                    this.content_based = md5(lenoteDom.editor.getContent());
                    //在add前取消监听-使用removeListener(String types, Function fn)取消指定的函数引用，该事件监听的其它处理函数不取消
                    lenoteDom.editor.editor.removeListener('contentChange', lenoteDom.editor.saved.contentChange);
                    lenoteDom.editor.editor.removeListener('keyup', lenoteDom.editor.saved.keybordChange);
                    lenoteDom.editor.editor.removeListener('keydown', lenoteDom.editor.saved.shortcut);
                    lenoteDom.editor.editor.addListener('contentChange', lenoteDom.editor.saved.contentChange);
                    lenoteDom.editor.editor.addListener('keyup', lenoteDom.editor.saved.keybordChange);
                    lenoteDom.editor.editor.addListener('keydown', lenoteDom.editor.saved.shortcut);
                    //选区相关
                    lenoteDom.editor.editor.removeListener('selectionchange', lenoteDom.editor.selectionchange);
                    lenoteDom.editor.editor.addListener('selectionchange', lenoteDom.editor.selectionchange);
                },
                monitorTitle: function(){
                    var input = $('#note_title_input');
                    if(input.length == 0) return;
                    
                    //var based = md5(lenoteDom.editor.getTitle());
                    this.title_based = md5(lenoteDom.editor.getTitle());
                    input.off('keyup').on('keyup', function(event){
                        //try{
                        //    if(!event.isPropagationStopped()) event.stopPropagation();
                        //}catch(e){}
                        //var key = event.which || event.keyCode;
                        
                        //通过比较md5值判断title是否改变
                        var newer = md5(lenoteDom.editor.getTitle()), based = lenoteDom.editor.saved.title_based;
                        if(based !== newer){
                            //based = newer;
                            lenoteDom.editor.saved.title_based = newer;
                            lenoteDom.editor.saved.setPoll();
                        }
                    });
                },
                check: function(_callback, isCheck){ //@isCheck自动保存时是否删除不存在的附件信息
                    //防止连续点击切换笔记，确保在保存时不切换笔记
                    if(this.is_doing != 0) return;
                    
                    this.is_doing = 0;
                    //如果不需要保存则直接调用回调函数
                    if(this.is_need){
                        if(isCheck === true) lenoteDom.editor.data.attachments.build(); //更新资源
                        this.setPoll(true, _callback);
                    }else if(lenoteDom.editor.isEditable() && isCheck === true){ //当is_need为false时且当资源没有修改时就不需要频繁保存了, !!isCheck
                        var a = lenoteDom.editor.data.attachments.build(true),
                              b = lenoteDom.editor.data.attachments.build();
                        if(a.length !== b.length){
                            this.setPoll(true, _callback);
                        }else{
                            if(typeof _callback == 'function') _callback();
                        }
                    }else{
                        if(typeof _callback == 'function') _callback();
                    }
                },
                setPoll: function(immediately, _callback){
                    this.is_need = true;
                    if(this.is_doing === 1) this.is_doing = 2;
                    if(this.is_doing === 2) return;
                    
                    //当用户在不停地输入时就延长自动保存触发的时间
                    if(this.timeout !== null) clearTimeout(this.timeout);
                    if(immediately){
                        this.callback(_callback);
                    }else{
                        this.timeout = setTimeout(this.callback, 5000);
                    }
                },
                callback: function(_callback){
                    lenoteView.note.saved({
                        init: function(){
                            lenoteDom.editor.saved.is_doing = 1;
                            lenoteDom.editor.insertBtn.saveState(true);
                        },
                        success: function(_callback_){
                            lenoteDom.editor.saved.reset();
                            //if(typeof _callback == 'function') _callback();
                            if(typeof _callback_ == 'function'){
                                _callback_(_callback);
                            }else if(typeof _callback == 'function'){
                                _callback();
                            }
                        },
                        error: function(msg){
                            $.smartDoing({action: 'del', text: '保存笔记失败，请手动复制后重试！', statusClass: 'error'});
                        },
                        complete: function(){
                            lenoteDom.editor.saved.is_doing = 0;
                            lenoteDom.editor.insertBtn.saveState();
                        }
                    });
                },
                reset: function(){
                    this.is_need = (this.is_doing === 2)? true : false;
                    this.is_doing = 0;
                    if(this.timeout !== null) clearTimeout(this.timeout);
                    this.timeout = null;
                    if(this.is_need) this.setPoll();
                },
                contentChange: function(){
                    //console.info('触发')
                    //通过比较md5值判断content是否改变
                    //使用监听而非使用setInterval轮询比较内容来确认是否需要保存，是为了防止编辑器自己添加的标签引起不必要的同步
                    var newer = md5(lenoteDom.editor.getContent()), based = lenoteDom.editor.saved.content_based;
                    if(based !== newer){
                        //console.info('内容已修改')
                        //based = newer;
                        lenoteDom.editor.saved.content_based = newer;
                        lenoteDom.editor.saved.setPoll();
                    }
                },
                shortcut: function(type, event){ //Ctrl + S保存
                    var keyCode = event.keyCode || event.which;
                    if(event.ctrlKey && keyCode == 83){
                        try{
                            if(window.event){ //ie
                                try{event.keyCode = 0;}catch(e){}
                                event.returnValue = false;
                            }
                            event.preventDefault();
                        }catch(e){}
                        
                        //保存前检查内容是否有变化(is_need是否为true)，有变化则立即保存、没有则不做任何处理
                        lenoteDom.editor.saved.check();
                        return false;
                    }else{
                        //当使用向前和向后键、Home及End时触发选区改变事件
                        lenoteDom.editor.selectionchange('keydown', true, keyCode);
                    }
                },
                keybordChange: function(type, event){
                    var keyCode = event.keyCode || event.which, me = lenoteDom.editor.editor;
                    if(event.ctrlKey){
                        if(keyCode == 88 || keyCode == 86){ //ctrl + x、ctrl + v
                            //me.selection.getRange().collapsed
                            //me.selection.getText()
                            me.fireEvent('contentchange');
                        }
                    }else if(!utils.isFunctionKey(keyCode)){ //解决输入第一个字符时不触发contentchange的问题
                        me.fireEvent('contentchange');
                    }
                    
                    //当使用向前和向后键时触发选区改变事件
                    lenoteDom.editor.selectionchange('keyup', true, keyCode);
                    
                    //if(utils.isFunctionKey(keyCode)){
                    //    event.stopPropagation();
                    //    event.preventDefault();
                    //    return false;
                    //}
                }
            },
            
            //初始化富文本编辑器，并根据视窗大小变化自动调整编辑器的区域大小
            init: function(view){
                var that = this;
                this.editor = UE.getEditor('editor_entity', {onready: function(){
                    this.disable();
                    //初始化笔记本(组)树->笔记列表->第一篇笔记，需等待编辑初始化完成后再去获取数据、否则如果获取数据在初始化前就会导致在cleanUI中编辑器操作异常
                    view.category.init();
                    //设置固定宽度
                    this.container.style.width="100%";
                    this.iframe.parentNode.style.width = "100%";
                    this.iframe.parentNode.parentNode.style.width = "100%";
                }});
                this.editor.ready(function(){
                    $(window).unbind('editor.event.resize').bind('editor.event.resize', function(e){
                        //that.editor.setHeight(utils.calElemHeight('.note-editor', null, $('.edui-editor-toolbarbox').outerHeight() + 5, true));
                        //由于1.6.1版本中高度计算方法改变，所以在这里重新实现统一的编辑器高度计算方法
                        if(!$('.note-editor').is(':hidden')) that.setHeight(utils.calElemHeight('.note-editor', null, $('.edui-editor-toolbarbox').outerHeight() + 5, true));
                        //自适应宽度-因为隐藏边栏时不会触发resize事件所以不采用这种方法动态更新宽度，而是直接在编辑器中直接设置
                        //that.setWidth($(window).width() - $('.note-editor').offset().left);
                        that.iframe.setHeight();
                    });
                    $(window).trigger("editor.event.resize");
                    
                    //更多工具图标事件监听
                    $(".edui-for-moretool").click(function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        //$("#moretoolbox").toggleClass("edui-moretoolbox-show");
                        //$("#moretoolbox").slideToggle('fast', function(){
                        //    $(this).toggleClass("edui-moretoolbox-show");
                        //});
                        //$(this).toggleClass("edui-button-checked");
                        $("#moretoolbox").slideToggle('fast', function(){
                            lenoteDom.dropdown.remove();
                        });
                    }).mouseover(function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        $(this).addClass("edui-button-hover");
                    }).mouseout(function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        $(this).removeClass("edui-button-hover");
                    }).on('mouseup mousedown', function(event){
                        if(!event.isPropagationStopped()) event.stopPropagation();
                        if(!event.isDefaultPrevented()) event.preventDefault();
                    });
                    //var moretool = $(".edui-for-moretool"), moretoolbox = $("#moretoolbox");
                    //if(moretoolbox.children().length){
                    //    moretool.addClass("edui-button-show");
                    //}
                });
                
                //editor事件监听
                try{
                    this.editor.addListener('focus', function(){
                        try{
                            lenoteDom.dropdown.remove();
                            "getSelection" in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                            //处理当笔记内容只有一个附件且后面没有任何元素时，不能获取焦点的问题
                            lenoteDom.editor.selectionchange('focus', true);
                            
                            //更多工具隐藏/显示事件注册-去掉更多工具的选中状态
                            //var checked = $(".edui-button-checked");
                            //if(checked.length > 0){
                            //    checked.removeClass("edui-button-checked");
                            //    $(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                            //}
                        }catch(e){}
                    });
                    //this.editor.addListener('afterSetContent', function(){
                    //    try{
                    //        if(lenoteView.dom.editor.iframe.getIframe() === null && $('.note-editor').is(':hidden') === false){
                    //            console.info(lenoteDom.editor.editor.body);
                    //        }
                    //    }catch(e){}
                    //});
                    
                    //更多工具隐藏/显示事件注册
                    this.editor.addListener('click', function(){
                        //去掉更多工具的选中状态。
                        //var checked = $(".edui-button-checked");
                        //if(checked.length > 0){
                        //    checked.removeClass("edui-button-checked");
                            //$(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                           //$(".edui-moretoolbox-show").slideUp('fast', function(){
                           //     $(this).removeClass("edui-moretoolbox-show");
                           //});
                        //   $("#moretoolbox").slideUp('fast');
                        //}
                        $("#moretoolbox").slideUp('fast');
                    });
                }catch(e){}
            },
            
            //内容展示
            show: function(){
                function render(that, height){
                    var root_path = that.editor.options.UEDITOR_HOME_URL;
                    var html = [(UE.browser.ie && UE.browser.version < 9)? '' : '<!DOCTYPE html>'];
                    html.push('<html xmlns="http://www.w3.org/1999/xhtml" class="view"><head>');
                    //html.push('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7; IE=EmulateIE9; IE=EmulateIE10" />');
                    html.push('<meta http-equiv="content-type" content="text/html;charset=utf-8">');
                    html.push('<style type="text/css">' +
                                       'body{cursor: text;margin:8px;font-family:sans-serif;font-size:16px;}' +
                                       //'ol,ul{-webkit-padding-start: 30px;margin:0;}' +
                                       //'ol,ul{padding-left: 30px;margin:0;}' +
                                       //'.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}' +
                                       '.view{word-wrap:break-word;cursor:text;height:90%;}' +
                                       'p{margin:5px 0;}' +
                                     '</style>'
                                    );
                    if(that.editor.options.iframeCssUrl){
                        html.push('<link rel="stylesheet" type="text/css" href="' + UE.utils.unhtml(that.editor.options.iframeCssUrl) + '"/>');
                    }
                    if(that.editor.options.initialStyle){
                        html.push('<style type="text/css">' + that.editor.options.initialStyle + '</style>');
                    }
                    height -= 20;
                    //html.push('</head><body class="view" style="height:' + height + 'px">' + that.editor.getContent().replace(/'/igm, '&#39;').replace(/&/igm, '&amp;'));
                    html.push('</head><body class="view" style="height:' + height + 'px"><div id="viewer"></div>');
                    html.push('<script type="text/javascript" src="' + root_path + 'ueditor.parse.js"></script>');
                    html.push('<script type="text/javascript" src="/assets/js/jquery.min.js"></script>');
                    html.push('<script type="text/javascript" src="/assets/js/parser/parser_api.js"></script>');
                    //html.push('<script type="text/javascript" src="/assets/js/parser/swfobject.js"></script>');
                    //解决uParse未定义的错误
                    //html.push('<script type="text/javascript">setTimeout(function(){uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                    //html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"})},300);</script>');
                    html.push('<script type="text/javascript">var _interval = setInterval(function(){if(typeof uParse == "function"){');
                    html.push('if(_interval) clearInterval(_interval);uParse("div", {"highlightJsUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCore.js",');
                    html.push('"highlightCssUrl":"' + root_path + 'third-party/SyntaxHighlighter/shCoreDefault.css"});}},300);</script>');
                    //html.push('<script type="text/javascript">setTimeout(function(){document.body.innerHTML = window.parent.lenoteDom.editor.getContent();}, 0);</script>');
                    //html.push('<script type="text/javascript">setTimeout(function(){var j = jQuery.noConflict();j(function(){j("body > #viewer").html(window.parent.lenoteDom.editor.getContent());});}, 20);</script>');
                    //setTimeout解决找不到jQuery的bug
                    //html.push('<script type="text/javascript">setTimeout(function(){' +
                    //                '$(function(){' +
                    //                    '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent(true)));' +
                    //                    //'var params = {quality : "high", scale : "noscale", wmode : "window", allowscriptaccess : "always", bgcolor : "#fff"};' +
                    //                    //'var flashvars = {};var attributes = {id : "flashcontent", name : "flashcontent"};' +
                    //                    //'swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);' +
                    //                    'setTimeout(function(){supernote_audio.init();}, 300);' +
                    //                    //点击iframe时取消浮框并清除选区
                    //                    //'try{$("body").on("click mousedown", function(){' +
                    //                    'try{$("body").on("mouseup mousedown", function(){' +
                    //                    //'$(window.parent.document.body).trigger("click");'+
                    //                    'window.parent.lenoteDom.dropdown.remove();'+
                    //                    '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                    //                    ' })}catch(e){}' +
                    //                '});' +
                    //                '}, 50);</script>');
                    html.push('<script type="text/javascript">var interval = setInterval(function(){' +
                                        'if(typeof jQuery == "function"){' +
                                            'if(interval) clearInterval(interval);' +
                                            '$(function(){' +
                                                '$("body > #viewer").html(window.parent.lenoteAnalyze.decode(window.parent.lenoteDom.editor.getContent(true)));' +
                                                //'var params = {quality : "high", scale : "noscale", wmode : "window", allowscriptaccess : "always", bgcolor : "#fff"};' +
                                                //'var flashvars = {};var attributes = {id : "flashcontent", name : "flashcontent"};' +
                                                //'swfobject.embedSWF("/assets/js/parser/supernote-audio.swf", "flashcontent", "1", "1", "10.2.124", "/assets/js/parser/expressInstall.swf", flashvars, params, attributes);' +
                                                'setTimeout(function(){supernote_audio.init();}, 300);' +
                                                //点击iframe时取消浮框并清除选区
                                                //'try{$("body").on("click mousedown", function(){' +
                                                'try{$("body").on("mouseup mousedown", function(){' +
                                                //'$(window.parent.document.body).trigger("click");'+
                                                'window.parent.lenoteDom.dropdown.remove();'+
                                                '"getSelection" in window ? window.parent.getSelection().removeAllRanges() : window.parent.document.selection.empty();' +
                                                ' })}catch(e){}' +
                                            '});' +
                                        '}' +
                                    '}, 50);</script>');
                    html.push('</body></html>');
                    return html.join('');
                }
                var height = this.iframe.calHeight();
                var src = 'document.open();' + (this.editor.options.customDomain && document.domain != location.hostname ?  'document.domain="' + document.domain + '";' : '') +
                              'document.write(\'' + UE.utils.unhtml(render(this, height)) + '\');document.close();';
                var iframe = '<iframe id="iframeNodeView" name="iframeNodeView" width="100%" height="100%" frameborder="0" src="javascript:void(function(){' + src + '}());"></iframe>';
                $('#sidebar-c .note-detail').height(height).html(iframe);
                //$($('#iframeNodeView').get(0).contentWindow.document.body).html(this.getContent());
            },
            
            //显示note时iframe相关方法
            iframe: {
                getIframe: function(){
                    //$(window.frames["iframeNodeView"].document)
                    var iframe = $('#iframeNodeView');
                    return iframe.length > 0? iframe : null;
                },
                
                calHeight: function(){
                    var height = utils.calElemHeight('#sidebar-c .note-detail', null, 5, true);
                    return (height <= 20)? 25 : height;
                },
                
                setHeight: function(){
                    if($('#sidebar-c .note-detail').is(':hidden')) return false;
                    var iframe = this.getIframe();
                    if(iframe){
                        var height = this.calHeight();
                        $('#sidebar-c .note-detail').height(height);
                        iframe.contents().find('body').height(height - 20);
                    }
                }
            },
            
            //设置编辑器高度
            setHeight: function(height){
                height = (height <= 20)? 25 : height;
                if(height !== parseInt(this.editor.iframe.parentNode.style.height)){
                    this.editor.iframe.parentNode.style.height = height + 'px';
                }
                this.editor.document.body.style.height = height - 20 + 'px';
            },
            
            //设置编辑器宽度
            setWidth: function(width){
                width = (width <= 20)? 25 : width;
                if(width !== parseInt(this.editor.iframe.parentNode.style.width)){
                     this.editor.iframe.parentNode.style.width = width + 'px';
                     this.editor.iframe.parentNode.parentNode.style.width = width + 'px';
                }
                this.editor.document.body.style.width = width - 20 + 'px';
            },
            
            //获取编辑器内容
            getContent: function(isOriginal){
                return isOriginal? $.trim(this.data.get('content')) : $.trim(this.editor.getContent());
            },
            
            //获取标题
            getTitle: function(){
                var input = $('#note_title_input');
                if(input.length > 0){
                    //var title = utils.trim(input.val(), true);
                    var title = $.trim(input.val());
                    if(!title || /^\s+$/igm.test(title) || title == '无标题笔记'){
                        title = utils.trim(utils.strip_tags(lenoteAnalyze.encode(this.getContent())));
                        //title = title? UE.utils.html(title).substring(0, 30) : '无标题笔记';
                        if(title){
                            title = UE.utils.html(title).substring(0, 30);
                        }else{
                            var firstAttachment = lenoteDom.editor.data.attachments.getFirst();
                            //title = firstAttachment? firstAttachment.title : '无标题笔记';
                            if(firstAttachment) title = utils.trim(firstAttachment.title || '', true);
                            title = title? UE.utils.html(title).substring(0, 30) : '无标题笔记';
                        }
                    }
                    //return utils.unhtml(title);
                }else{
                    //title = $.trim($('#sidebar-c .note-info div.title').html());
                    title = $.trim($('#sidebar-c .note-info div.title').text());
                    //return UE.utils.unhtml(title).replace(/\s/igm, '&nbsp;');
                }
                return utils.unhtml(title);
            },
            
            //过滤title
            filterTitle: function(title){
                title = title.replace(/&nbsp;/igm, ' ');
                return UE.utils.html(title);
            },
            
            //设置焦点
            focus: function(){
                var input = $('#note_title_input');
                if($.trim(input.val()) == ''){
                    //input.get(0).focus();
                    utils.setFocus('#note_title_input');
                }else{
                    //this.editor.focus(true);
                    setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50);
                }
            },
            
            //将编辑区域设置为空白
            cleanUI: function(){
                //saved-自动保存: 取消内容变化的监听
                //this.editor.removeListener('contentChange keyup');
                //this.editor.removeListener('contentChange', lenoteDom.editor.saved.contentChange);
                //this.editor.removeListener('keyup', lenoteDom.editor.saved.keybordChange);
                //$('#note_title_input').off('keyup');
                //this.saved.init();
                this.saved.clean();
                
                try{
                    supernote_audio.stop();
                }catch(e){}
                //恢复工具栏字体颜色
                UE.ui.buttons.forecolor.setColor('#000');
                UE.ui.buttons.backcolor.setColor('#eee');
                //lenoteDom.editor.editor.execCommand('FontFamily', '宋体');
                //lenoteDom.editor.editor.execCommand('fontsize', '14px');
                
                //重置编辑器-防止当编辑多个笔记时，点击undo会后退至上一笔记的内容
                this.editor.reset();
                //删除按钮
                this.insertBtn.clean();
                //清除笔记的元数据
                this.data.clean();
                //禁用编辑器
                this.editor.disable();
                //清空编辑器内容
                this.editor.setContent('');
                $('#sidebar-c .note-detail').html('');
                //隐藏按钮、元信息、编辑器容器、工具条
                utils.hide('#sidebar-c .toolbar .btn');
                utils.hide('#sidebar-c .note-info, #sidebar-c .note-meta');
                $('#sidebar-c .note-detail, #sidebar-c .note-editor').hide();
                //清空标题及笔记元信息
                $('#sidebar-c .note-info div.title, #sidebar-c .note-info .extra, #sidebar-c .note-meta').html('');
            },
            
            //显示编辑区域
            showUI: function(){
                $('#sidebar-c .note-editor').hide();
                utils.show('#sidebar-c .toolbar .btn');
                utils.show('#sidebar-c .note-info, #sidebar-c .note-meta');
                $('#sidebar-c .note-detail').show();
                this.show();
            },
            
            //编辑UI
            editUI: function(title, content){
                try{
                    supernote_audio.stop();
                }catch(e){}
                $('#sidebar-c .note-detail').html('').hide();
                $('#sidebar-c .note-info .extra').html('');
                title = $.trim(title || this.getTitle());
                if(title == '无标题笔记') title = '';
                this.editor.enable();
                this.insertTitleInput(title);
                //this.editor.setContent($.trim(content || this.getContent()));
                ////if(title) this.editor.focus(true);
                //if(title) setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50); //fixed: IE can't run focus function
                if(!UE.browser.ie || (UE.browser.ie && UE.browser.version != 10 && UE.browser.version != 9)){
                    this.editor.setContent($.trim(content || this.getContent()));
                    if(title) setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50);
                }else{
                    //修复ie9/10有序列表全为0时的轻微闪动问题
                    utils.hide('#sidebar-c .note-editor');
                }
                utils.show('#sidebar-c .toolbar .btn');
                utils.show('#sidebar-c .note-info, #sidebar-c .note-meta');
                $('#sidebar-c .note-editor').show('fast', function(){
                    try{
                        //解决ol在ie9/10下切换列表或其父类显示与隐藏状态时列表为0的情况:是ie9/10下的一个bug
                        if(UE.browser.ie && (UE.browser.version == 10 || UE.browser.version == 9)){
                            lenoteDom.editor.editor.setContent($.trim(content || lenoteDom.editor.getContent()));
                            setTimeout(function(){utils.show('#sidebar-c .note-editor');}, 35);
                            if(title) setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50);
                        }
                        
                        //滚动到光标处:在列表中测试
                        try{
                            (lenoteDom.editor.editor.selection.getRange()).scrollToView(null, 5);
                        }catch(e){}
                        
                        var _attachskins = $(lenoteDom.editor.editor.body).find('span.attachskin');
                        if(_attachskins.length > 0){
                            for(var i = 0; i < _attachskins.length; i++){
                                var _attachskin = $(_attachskins[i]), attachskinDom = _attachskin.get(0);
                                var _elem = attachskinDom.previousSibling || attachskinDom.previousElementSibling;
                                if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.before('&#8203;');
                                _elem = attachskinDom.nextSibling || attachskinDom.nextElementSibling;
                                if(!_elem || $.trim(_elem.nodeValue) != '' || _elem.nodeType == 1) _attachskin.after('&#8203;');
                            }
                        }
                        
                        //编辑器更多工具
                        var moretool = $(".edui-for-moretool"), moretoolbox = $("#moretoolbox .edui-toolbar");
                        if(moretoolbox.children().length > 0){
                            moretool.addClass("edui-button-show");
                        }else{
                            moretool.removeClass("edui-button-show");
                        }
                    }catch(e){}
                });
                //$('#sidebar-c .note-meta').hide();
                $('#sidebar-c .note-meta').html('').hide();
                $(window).trigger("editor.event.resize");
                this.insertBtn.clean().save().show();
                
                //saved-自动保存: 监听内容变化
                //lenoteDom.editor.saved.listen();
                this.saved.listen();
            },
            
            //新建UI
            createUI: function(){
                this.cleanUI();
                this.editUI(' ', ' ');
                $('#sidebar-c .note-meta').hide();
                $(window).trigger("editor.event.resize");
            },
            
            /*
             *   检查笔记区域是否正在执行操作
             *   [ignoreList]  忽略的mark, 防止按钮重复点击
             */
            checkIsOpr: function(ignoreList){
                var mark = this.data.get('mark');
                if(mark){
                    ignoreList = ignoreList || [];
                    if($.inArray(mark, ignoreList) == -1){
                        switch(mark){
                            case 'del': $.lebox.warning('正在删除笔记，请稍候...', 800); break;
                            case 'update': $.lebox.warning('正在更新笔记，请稍候...', 800); break;
                            case 'save': $.lebox.warning('正在保存笔记，请稍候...', 800); break;
                            case 'restore': $.lebox.warning('正在还原笔记，请稍候...', 800); break;
                            default:  $.lebox.warning('正在发送请求，请刷新后再试...', 800); 
                        }
                    }
                    return true;
                }
                return false;
            },
            
            //检查笔记是否处理编辑状态
            isEditable: function(){
                return $('#note_title_input').length === 1;
            },
            
            //笔记相关按钮
            insertBtn: {
                clean: function(){
                    $('#sidebar-c .toolbar .btn').remove();
                    $('#sidebar-c .toolbar').removeClass('gray').children(' .r').empty();
                    return this;
                },
                show: function(){
                  utils.show('#sidebar-c .toolbar .btn');
                  //$('#sidebar-c .toolbar .btn').show();
                  return this;  
                },
                create: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="new-note btn"><span>新建笔记</span></a>'));
                    btn.click(function(){lenoteView.note.create();});
                    return this;
                },
                save: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="save-note btn"><span>完成</span></a>'));
                    btn.click(function(){lenoteView.note.save();});
                    return this;
                },
                saveState: function(is_disable){
                    var btn = $('#sidebar-c .toolbar .save-note');
                    if(btn.length == 0) return;
                    if(is_disable){
                        btn.off('click');
                        btn.addClass('disabled');
                    }else{
                        btn.removeClass('disabled');
                        btn.click(function(){lenoteView.note.save();});
                    }
                },
                edit: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="edit-note btn"><span>编辑</span></a>'));
                    btn.click(function(){lenoteView.note.edit();});
                    return this;
                },
                del: function(){
                    $('#sidebar-c .toolbar .l').append(btn=$('<a class="del-note btn btn-gray"><span>删除</span></a>'));
                    btn.click(function(){lenoteView.note.del();});
                    return this;
                },
                trash: function(){
                    $('#sidebar-c .toolbar').addClass('gray').children('.l').append(
                        restoreBtn=$('<a class="restore-note btn"><span>还原</span></a>'),
                        delBtn=$('<a class="del-note btn btn-gray"><span>删除</span></a>')
                    ).end().children('.r').append('<div class="explain">这条笔记在废纸篓中，还原后才能进行编辑。</div>');
                    
                    restoreBtn.click(function(){lenoteView.trash.restore();});
                    delBtn.click(function(){lenoteView.trash.del();});
                    return this;
                },
                share: function(){
                    $('#sidebar-c .toolbar .r').append(btn=$('<a class="share-note btn btn-gray"><span>分享</span></a>'));
                    btn.click(function(event){
                        try{
                           if(!event.isPropagationStopped()) event.stopPropagation();
                           if(!event.isDefaultPrevented()) event.preventDefault();
                        }catch(e){}
                        
                        var popup = $('.popup-menu.shared');
                        if(popup.length == 0){
                            $(this).trigger('mouseover');
                        }else{
                            $('.popup-menu.shared').slideUp('fast', function(){
                               $(this).remove();
                            });
                        }
                    }).hover(
                        function(){
                            var popup = $('.popup-menu.shared'), _this = $(this);
                            if(popup.length == 0){
                                var menu = ['<dl class="popup-menu shared">'], width = $(window).outerWidth(), offset = _this.offset();
                                
                                if(lenoteDom.editor.data.get('shareKey')){
                                    menu.push('<dd data-value="dellink" class="ellipsis"><span>关闭链接</span></dd>');
                                }else{
                                    menu.push('<dd data-value="publiclink" class="ellipsis"><span>公开链接</span></dd>');
                                }
                                
                                menu.push('</dl>');
                                $('body').append(popup = $(menu.join('')));
                                
                                //var left = (width - offset.left > 200)? offset.left + 3: offset.left - popup.outerWidth() + _this.outerWidth() - 15,
                                //      top = offset.top + _this.outerHeight() - 2;
                                var left = (width - offset.left > 200)? offset.left + 3 : offset.left - popup.outerWidth() + _this.outerWidth() - 10,
                                      top = offset.top + _this.outerHeight() - 2;
                                popup.css({left: left, top: top}).slideDown('fast');
                                
                                popup.children('dd').click(function(){
                                    var _this = $(this);
                                    switch(_this.attr('data-value')){
                                        case 'publiclink': lenoteView.note.share();break;
                                        case 'dellink': lenoteView.note.share(true);break;
                                    }
                                }).smartHover();
                            }
                        }
                    );
                    return this;
                }
            },
            
            //插入title的输入控件
            insertTitleInput: function(title){
                $('#sidebar-c .note-info div.title .smart-input').remove();
                var div = ['<div class="smart-input">'];
                div.push('<label for="note_title_input" class="smart-label">标题</label>');
                div.push('<input type="text" maxlength="60" value="' + $.trim(title) + '" name="note_title_input" id="note_title_input"/></div>');
                $('#sidebar-c .note-info div.title').html(div.join(''));
                var input = $('#note_title_input');
                input.smartInput();
                //if(!title) input.get(0).focus();
                if(!title) utils.setFocus('#note_title_input');
                
                //saved-自动保存: 监听标题的变化
                this.saved.monitorTitle();
            },
            
            //编辑区域有关笔记的元信息设置
            data: {
                //清理笔记数据
                clean: function(){
                    $('#sidebar-c .note-editor').removeData('note');
                },
                //获取笔记数据
                get: function(key){
                    var _data = $('#sidebar-c .note-editor').data('note');
                    return (typeof  _data == 'object')? _data[key] : '';
                },
                //增加key/value
                add: function(key, value){
                    var container = $('#sidebar-c .note-editor'), _data = {};
                    _data[key] = value;
                    container.data('note', $.extend(container.data('note') || {}, _data));
                },
                //删除key
                remove: function(key){
                    var container = $('#sidebar-c .note-editor'), _data = container.data('note') || {};
                    delete _data[key];
                    if($.isEmptyObject(_data)){
                        container.removeData('note');
                    }else{
                        container.data('note', _data);
                    }
                },
                //设置笔记数据
                set: function(note){
                    var container = $('#sidebar-c .note-editor');
                    container.data('note', {cid: note.categoryID, id: note.id, ver: note.version, content: note.content, shareKey: note.shareLinkID});
                    //if(note.attachments) container.data('attachments', note.attachments);
                },
                getAll: function(){
                    return $('#sidebar-c .note-editor').data();
                },
                /*
                 *  当前笔记的标签
                 */
                tags: {
                    clean: function(){
                         $('#sidebar-c .note-editor').removeData('tags');
                    },
                    build: function(isDisplay){
                        var _tags = this.getAll(), res = [];
                        if(_tags){
                            for(var key in _tags){
                                //var item = _tags[key], name = this.getName(UE.utils.html(item.name));
                                var item = _tags[key], name = this.getName(utils.html(item.name));
                                if(!name) continue;
                                
                                if(isDisplay){
                                    var _data = {name: name, type: item.type, tagIcon: item.tagIcon};
                                    if(item.id) $.extend(_data, {id: item.id});
                                }else{
                                    //var _data = {tagName: name, tagType: item.type, tagIcon: item.tagIcon};
                                    var _data = {tagName: utils.html(name), tagType: item.type, tagIcon: item.tagIcon};
                                    if(item.id) $.extend(_data, {tagID: item.id});
                                }
                                res.push(_data);
                            }
                        }
                        return res;
                    },
                    isExist: function(name){
                        name = this.getName(name);
                        return this.getKey(name) in this.getAll();
                    },
                    getName: function(name){
                        //return UE.utils.unhtml(utils.trim(utils.strip_tags(name || '')).replace(/\s+?/igm, '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                        return utils.unhtml($.trim(name || '').replace(/[,，'"`~!@#\$%\^*\(\)_\+\-=\}\{\|\\\/\?\.:\[\]]/igm, '').substr(0, 20));
                    },
                    getKey: function(name){
                        return '_' + md5(name);
                    },
                    set: function(tags){
                        if(!tags || tags.length < 1) return;
                        
                        var _data = {};
                        for(var i = 0; i < tags.length; i++){
                            var tag = tags[i], name = this.getName(tag.name);
                            if(!name) continue;
                            
                            _data[this.getKey(name)] = {id: tag.id, name: name, type: tag.type, tagIcon: tag.tagIcon};
                        }
                        container = $('#sidebar-c .note-editor').data('tags', _data);
                    },
                    get: function(name){
                        var _data = $('#sidebar-c .note-editor').data('tags');
                        name = this.getName(name);
                        return (name && (typeof  _data == 'object'))? _data[this.getKey(name)] : '';
                    },
                    add: function(name){
                        var name = this.getName(name);
                        if(!name) return;
                        
                        var container = $('#sidebar-c .note-editor'), _data = {}, key = this.getKey(name);
                        _data[key] = {name: name, type: 0, tagIcon: 0};
                        container.data('tags', $.extend(container.data('tags') || {}, _data));
                        return key;
                    },
                    del: function(name){
                        var name = this.getName(name);
                        if(!name) return;
                        
                        var container = $('#sidebar-c .note-editor'), _data = container.data('tags') || {}, key = this.getKey(name);
                        if(key in _data){
                            delete _data[key];
                            container.data('tags', _data);
                        }
                    },
                    getAll: function(){
                        return $('#sidebar-c .note-editor').data('tags') || {};
                    }
                },
                /*当前笔记的附件
                 *  @attachment {resourceKeyId: {resourceKeyId, resourceLink}, resourceKeyId_1: {resourceKeyId_1, resourceLink_1}}
                 */
                attachments: {
                    clean : function(){
                        $('#sidebar-c .note-editor').removeData(['attachments', 'new_attachments']);
                    },
                    cleanNew: function(){
                        $('#sidebar-c .note-editor').removeData('new_attachments');
                    },
                    upload: function(_data, _type){
                        var info = JSON.parse(_data.info), filetype = _data.filetype || ''; ext = filetype? filetype.replace(/^\./ig, '') : '', timestamp = (new Date()).valueOf(),
                              filesize = info.executionResult[0].fileSize || _data.filesize;
                        _type = _type || 640;
                        var attachment = {
                            //title: _data.filename, name: _data.filename.replace(new RegExp(filetype + '$', 'i'), ''), size: _data.filesize, type: filetype, ext: ext,
                            title: _data.filename, name: _data.filename.replace(new RegExp(filetype + '$', 'i'), ''), size: filesize, type: filetype, ext: ext,
                            localID: utils.uuid(), keyID: info.executionResult[0].resourceKeyId, link: info.executionResult[0].resourceLink, _type: _type,
                            uploadTime: timestamp, utime: new Date(timestamp).format('yyyy-MM-dd hh:mm')
                        };
                        attachment = $.extend(attachment, {sizeof: utils.calFileSize(attachment.size), url: this.download(attachment.title, attachment.keyID, attachment.link, attachment.size)});
                        
                        this.add(attachment, true);
                        return attachment;
                    },
                    download: function(title, keyID, link, size){
                        //return '/download/?resourceKeyId=' + keyID + '&resourceLink=' + link;
                        size = size || 0;
                        return '/download/?' + $.param({resourceKeyId: keyID, resourceLink: link, fileName: title, fileSize: size});
                    },
                    getThumb: function(resource, width, height){
                        return '/download/?' + $.param({
                            resourceKeyId: resource.keyID, resourceLink: resource.link, fileName: resource.name || resource.title, fileSize: resource.size || 0, thumbnailWidth: width, thumbnailHeight: height
                        });
                    },
                    isExist: function(local_id){
                        return (new RegExp('\\skey="' + local_id + '"', 'igm')).test(lenoteDom.editor.getContent());
                    },
                    build: function(notCheck){ //notCheck: 不检查附件是否存在于内容中用于解决正在自动保存时上传附件丢失的问题
                        var _attachments = this.getAll(), resources = [];
                        for(var key in _attachments){
                            var item = _attachments[key];
                            if(!notCheck && !this.isExist(item.localID)){ //删除data中已不存在的资源信息
                                this.del(item.localID);
                                continue;
                            }
                            //重新验证资源的类型值
                            var _type = item._type;
                            try{
                                _type = lenoteTag.validType(item.title, _type);
                            }catch(e){}
                            var _attachment = {
                                name: item.title, keyID: item.keyID, link: item.link, size: item.size, uploadTime: item.uploadTime, type: _type,
                                resourceID: item.resourceID || '', local_id: item.localID, version: item.version
                            };
                            resources.push(_attachment);
                        }
                        return resources;
                    },
                    set: function(resources){ //解析成upload一样的属性-通过名称后辍名解析
                        if(!resources || resources.length < 1) return false;
                        
                        for(var i = 0; i < resources.length; i++){
                            var _data = resources[i], indexof = _data.name.lastIndexOf('.'), filetype = (indexof != -1)? _data.name.substring(indexof) : ''; 
                                 ext = filetype? filetype.replace(/^\./ig, '') : '', name = _data.name.replace(filetype, '');
                            
                            var attachment = $.extend(_data, {
                                title: _data.name, name: name, size: _data.size, type: filetype, ext: ext, resourceID: _data.resourceID, localID: _data.local_id, _type: _data.type,
                                keyID: _data.keyID, link: _data.link, uploadTime: _data.uploadTime, utime: new Date(_data.uploadTime).format('yyyy-MM-dd hh:mm')
                            });
                            attachment = $.extend(attachment, {sizeof: utils.calFileSize(attachment.size), url: this.download(attachment.title, attachment.keyID, attachment.link, attachment.size)});
                            this.add(attachment);
                        }
                    },
                    update: function(resources){ //更新resourceID
                        if(!resources || resources.length < 1) return false;
                        
                        var files = this.getAll();
                        for(var i = 0; i < resources.length; i++){
                            var resource = resources[i], key = 'key_' + resource.local_id, item = files[key];
                            if(item){
                                item['resourceID'] = resource.resourceID;
                                item['version'] = resource.resourceVersion;
                                //files[key] = item;
                            }
                        }
                        
                        //$('#sidebar-c .note-editor').data('attachments', files);
                    },
                    add: function(attachment, isNew){
                       var container = $('#sidebar-c .note-editor'), _attachment = {};
                       _attachment['key_' + attachment['localID']] = attachment;
                       container.data('attachments', $.extend(container.data('attachments') || {}, _attachment));
                       
                       if(isNew){
                           var new_attachments = container.data('new_attachments') || {}, key = 'key_' + attachment['localID'];
                           new_attachments[key] = {localID: attachment['localID'], keyID: attachment['keyID']};
                           container.data('new_attachments', new_attachments);
                       }
                    },
                    del: function(localID){
                        var container = $('#sidebar-c .note-editor'), _attachments = container.data('attachments') || {}, key = 'key_' + localID;
                        if(key in _attachments){
                            delete _attachments[key];
                            container.data('attachments', _attachments);
                        }
                    },
                    get: function(localID){
                        var _data = $('#sidebar-c .note-editor').data('attachments');
                        var attachment = (typeof  _data == 'object')? _data['key_' + localID] : '';
                        if(attachment){
                            return $.extend(attachment, {
                                sizeof: utils.calFileSize(attachment.size),
                                url: this.download(attachment.title, attachment.keyID, attachment.link, attachment.size)
                            });
                        }
                        return '';
                    },
                    getFirst: function(){
                        var _attachments = this.getAll(), result = '';
                        for(var key in _attachments){
                            var item = _attachments[key];
                            if(this.isExist(item.localID)){ //检查附件是否存在于正文内容中
                                if($.trim(item.title)){
                                    result = item;
                                    break;
                                }
                            }
                        }
                        return result;
                    },
                    //比较上传时间获取最后上传的资源
                    getLast: function(){
                        var _attachments = this.getAll(), result = '';
                        if(!_attachments) return result;
                        
                        for(var key in _attachments){
                            var item = _attachments[key];
                            //排除ln-text类型的附件
                            if(item._type == 768) continue;
                            if(this.isExist(item.localID)){ //检查附件是否存在于正文内容中
                                var uploadTime = item.uploadTime;
                                try{
                                    uploadTime = parseFloat(uploadTime) || 0;
                                }catch(e){
                                    uploadTime = 0;
                                }
                                item._timestamp = uploadTime;
                                if(result){
                                    if(item._timestamp >= result._timestamp) result = item;
                                }else{
                                    result = item;
                                }
                            }
                        }
                        return result;
                    },
                    getNew: function(){
                        var container = $('#sidebar-c .note-editor'), new_attachments = container.data('new_attachments') || {}, news = {};
                        if(new_attachments && !$.isEmptyObject(new_attachments)){
                            var res = '';
                            for(var key in new_attachments){
                                var item = new_attachments[key];
                                if(this.isExist(item.localID)){
                                    news[key] = item;
                                    res +=  item.keyID + ';';
                                }
                                //}else{
                                    //delete new_attachments[key];
                                    //continue;
                                //}
                            }
                            if($.isEmptyObject(news)){
                                container.removeData('new_attachments');
                            }else{
                                container.data('new_attachments', news);
                            }
                            return res;
                        }else{
                            return '';
                        }
                    },
                    getAll: function(){
                        return $('#sidebar-c .note-editor').data('attachments');
                    }
                }
            }
        },
        
        //下拉功能菜单
        dropdown: {
            //删除所有下拉功能菜单
            remove: function(callback){
                $('.popup-menu').slideUp('fast', function(){
                    //注销esc事件监听
                    $(document).unbind('keydown.dropdown');
                    
                    var id = $('.popup-menu').attr('data-value');
                    //将非当前选中的功能菜单箭头标志隐藏
                    //$('#' + id + ' > .item').not('.on').children('i.dropdown').removeClass('active');
                    $('#' + id + ' > .item').children('i.dropdown').removeClass('active');
                    //删除功能菜单
                    $(this).remove();
                    if(typeof callback == 'function') callback();
                });
            },
            
            /*
             *   生成功能菜单
             *   params:
             *      mark:    被点击的箭头标志(用于打开功能菜单)
             *      menu:  菜单
             */
            insert: function(mark, menu, observer){
                //因为目标元素的父层的overflow为Hidden，所以只能用定位的方式实现功能下拉菜单
                $('body').append(menu.join(''));
                mark.addClass('active');
                if(UE.browser.ie && (UE.browser.version == 8 || UE.browser.version == 9)){
                    setTimeout(function(){
                        $('.popup-menu').css({left: mark.offset().left + 5, top: mark.offset().top + 15}).slideDown('fast');
                    }, 50);
                }else{
                    $('.popup-menu').css({left: mark.offset().left + 5, top: mark.offset().top + 15}).slideDown('fast');
                }
                
                //绑定esc事件
                $(document).unbind('keydown.dropdown').bind('keydown.dropdown', function(event){
                    var key = event.which || event.keyCode;
                    if(key == 27){
                        if(event.isDefaultPrevented()) event.preventDefault();
                        lenoteDom.dropdown.remove();
                    }
                });
                
                //功能菜单的事件监听
                $('.popup-menu dd').click(observer).smartHover();
            },
            
            /*
             *   显示下拉功能菜单
             *   params:
             *      _this:        被点击的元素，这里就是打开功能菜单的箭头标志
             *     callback:   插入指定类别的功能菜单
             */
            show: function(mark, id, callback){
                if($('.popup-menu').length > 0){
                    //如果功能菜单已打开且mark就是当前打开的功能菜单的箭头标志则不做任何处理
                    if($('.popup-menu').attr('data-value') == id){
                        this.remove();
                        return false;
                    }else{
                        //如果功能菜单已打开且不是当前的则先删除已打开的功能菜单，然后再打开新的功能菜单
                        this.remove(function(){
                            callback.insert(mark, id);
                            mark = null;
                        });
                    }
                }else{
                    callback.insert(mark, id);
                }
            }
        },
        
        //HTML代码片段
        fragment: {
            getShare: function(key){
                var url = utils.getDomain() + '/shared/' + key,
                      html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:400px;"><tbody>'];
                html.push('<tr><td>粘贴此链接到电子邮件、微博、微信或聊天对话框中，把笔记分享给朋友们吧。</td></tr>');
                html.push('<tr><td>任何人都可以使用此链接查看笔记。</td></tr>');
                html.push('<tr class="sep"><td><input type="text" class="text publiclink" disabled="disabled" readonly="readonly" value="' + url + '"/></td></tr>');
                html.push('<tr><td class="btnwrap clearfix" style="width:100%;"><div class="l"><div class="btn btn-confirm btn-black">停止分享</div></div>');
                html.push('<div class="r clearfix"><span class="prompt" style="float:left;padding:0;"></span><a class="btn btn-copy btn-red" href="javascript:;" style="padding: 0 12px;">复制链接地址</a><div class="btn btn-gray btn-close">完成</div></div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            },
            getImportPrompt: function(){
                html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:400px;"><tbody>'];
                html.push('<tr><td style="line-height: 20px;padding-bottom:15px;">乐记事现已全面改版，欢迎使用新版的乐云记事。我们将把您以往的笔记数据导入到新版本中，以保证您数据的完整性。<span style="color:#be0800;">（' +
                                '将以您老版乐记事中最后一次同步的数据为准，此过程将花费几分钟时间' +
                                '）</span></td></tr>');
                html.push('<tr><td class="btnwrap clearfix" style="width:100%;">');
                html.push('<div class="r clearfix"><div class="btn btn-red btn-close" style="padding: 0 12px;">知道了</div></div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            }
        },
        
        //笔记本(组)DOM操作
        category: {
            //打开菜单组
            openMenu: function(_this){
                var elem = $(_this), target = elem.next('.' + elem.attr('target'));
                elem.find('.icon-arrow').toggleClass('open');
                target.slideToggle();
            },
            
            //获取当前笔记本(组)，如果没有则获取第一个笔记本(组)
            getCurrent: function(notFirst){
                var notebook = $('#sidebar-a .list-categories li');
                var item = notebook.find('.item.on');
                if(item.length > 0) return item.closest('li').attr('id');
                return notFirst? null : notebook.first().attr('id');
            },
            
            //获取默认笔记本(组)
            getDefault: function(norequired){
                var defaultCid = $('#sidebar-a').data('defaultCategoryID');
                if(defaultCid) defaultCid = lenoteDom.category.getDomID(defaultCid);
                return norequired? defaultCid : (defaultCid || this.getCurrent());
            },
            
            //更新笔记本(组)树的笔记数目
            count: function(id, number, isSelected, noUpdateAll, noLoop){
                if(!id && isSelected) id = this.getSelected();
                if(id){
                    try{
                        var notebook = $('#sidebar-a li#' + id);
                        if(notebook.length == 0) notebook = $('#sidebar-a li#' + lenoteDom.category.getDefault(true));
                        var count = notebook.data('num') || 0;
                        if(/^-?\d+$/.test(count)){
                            count = parseInt(count) + number;
                            if(count < 0) count = 0;
                            notebook.children('.item').find('.count .c').text(count);
                            notebook.data($.extend(notebook.data(), {num: count}));
                            
                            //更新当前选中的分类列表页的笔记数
                            if(this.isSelected(id)){
                                lenoteDom.note.setFilterDescription(id);
                            }
                            
                            //当删除笔记或添加笔记时更新所有笔记及回收站，但在星标笔记上会有一个问题：即在删除分类时如何确认其中的星标笔记数?暂时还未解决这个bug
                            if(id != 'all-notes' && !noUpdateAll){  //排除设置count时重复计算的问题
                                $('#all-notes').data($.extend($('#all-notes').data(), {num: ($('#all-notes').data('num') || 0) + number}));
                                $('#all-notes').children('.item').find('.count .c').text($('#all-notes').data('num'));
                            }
                        }
                        
                        //查找其父级是否存在，同步更新笔记数目--以后不再通过dom树来维持分类的层级关系而是将层级设置在分类的data中,这样更可靠
                        if(!noLoop){
                            var parents = notebook.parents('li[id^="' + this.getDomID() + '"]');
                            for(var i = 0; i < parents.length; i++){
                                this.count($(parents[i]).attr('id'), number, false, true, true);
                            }
                        }
                    }catch(e){}
                }
            },
            
            //计算分享的笔记数
            shared_count: function(number){
                try{
                    var notebook = $('#sidebar-a li#myshare'), count = notebook.data('num') || 0;
                    if(/^-?\d+$/.test(count)){
                        count = parseInt(count) + (parseInt(number) || 0);
                        if(count < 0) count = 0;
                        notebook.children('.item').find('.count .c').text(count);
                        notebook.data($.extend(notebook.data(), {num: count}));
                        //更新描述区的笔记数
                        if(lenoteDom.category.isSelected('myshare')) lenoteDom.note.setFilterDescription('myshare');
                    }
                }catch(e){}
            },
            
            //计算回收站的笔记数
            trash_count: function(number){
                try{
                    var trash = $('#sidebar-a li#trash'), count = trash.data('num') || 0;
                    if(/^-?\d+$/.test(count)){
                        if(number === 0){
                            count = 0;
                        }else{
                            count = parseInt(count) + (parseInt(number) || 0);
                            if(count < 0) count = 0;
                        }
                        trash.children('.item').find('.count .c').text(count);
                        trash.data($.extend(trash.data(), {num: count}));
                        //更新描述区的笔记数
                        if(lenoteDom.category.isSelected('trash')){
                            lenoteDom.note.setFilterDescription('trash');
                        }
                    }
                }catch(e){}
            },
            
            //笔记本功能菜单
            dropdown: {
                /*
                 *   生成功能菜单
                 *   params:
                 *      mark:  被点击的箭头标志(用于打开功能菜单)
                 *      id:  mark所属的笔记本(组)的元素ID
                 */
                insert: function(mark, id){
                    var notebook = $('#' + id), cid = notebook.data('id');
                    var menu = ['<dl class="popup-menu" data-value="' + id + '">'];
                    //关闭多级分类的创建
                    if(false && notebook.data('level') > 0 && notebook.data('level') < 2){
                        menu.push('<dd data-value="create" class="ellipsis"><i class="icon icon_newnotebook"></i>新建子分类</dd>');
                    }
                    menu.push('<dd data-value="rename" class="ellipsis"><span>重命名</span></dd>');
                    menu.push('<dd data-value="delete" class="ellipsis' + (notebook.data('delable')? '' : ' disabled') + '"><span>删除</span></dd>');
                    menu.push('</dl>');
                    
                    lenoteDom.dropdown.insert(mark, menu, function(){
                        switch($(this).attr('data-value')){
                            case 'rename': lenoteView.category.rename(id);break;
                            case 'create': lenoteView.category.create(cid);break;
                            //case 'createNote': lenoteView.note.create(false);break;
                            case 'delete': lenoteView.category.del(id);break;
                        }
                    });
                },
                
                /*
                 *   显示功能菜单
                 *   params:
                 *      _this:  被点击的元素，这里就是打开功能菜单的箭头标志
                 */
                show: function(_this){
                    var mark = $(_this), id = mark.closest('li').attr('id');
                    lenoteDom.dropdown.show(mark, id, lenoteDom.category.dropdown);
                },
               
               //显示星标笔记的功能菜单
               showStar: function(_this){
                   var mark = $(_this), id = mark.closest('li').attr('id');
                   lenoteDom.dropdown.show(mark, id, {insert: function(mark, id){
                       var menu = ['<dl class="popup-menu" data-value="' + id + '" style="width:100px;">'];
                       menu.push('<dd data-value="create" class="ellipsis">取消全部星标...</dd>');
                       menu.push('</dl>');                       
                       lenoteDom.dropdown.insert(mark, menu, function(){
                           switch($(this).attr('data-value')){}
                       });
                   }});
               },
               
               //标签的功能菜单
               showTags: function(_this){
                   var mark = $(_this), id = 'tags_column';
                   lenoteDom.dropdown.show(mark, id, {insert: function(mark, id){
                       var menu = ['<dl class="popup-menu" data-value="' + id + '">'];
                       menu.push('<dd data-value="create" class="ellipsis">新建标签...</dd>');
                       menu.push('<dd data-value="create" class="ellipsis">隐藏未使用的标签</dd>');
                       menu.push('<dd data-value="create" class="ellipsis">按使用频率从高到低排序</dd>');
                       menu.push('<dd data-value="create" class="ellipsis">按使用频率从低到高排序</dd>');
                       menu.push('</dl>');                       
                       lenoteDom.dropdown.insert(mark, menu, function(){
                           switch($(this).attr('data-value')){}
                       });
                   }});
               },
               
               //回收站的功能菜单
               showTrash: function(_this){
                   var mark = $(_this), id = mark.closest('li').attr('id');
                   lenoteDom.dropdown.show(mark, id, {insert: function(mark, id){
                       var menu = ['<dl class="popup-menu" data-value="' + id + '">'];
                       menu.push('<dd data-value="empty" class="ellipsis">清空废纸篓</dd>');
                       menu.push('</dl>');
                       lenoteDom.dropdown.insert(mark, menu, function(){
                           switch($(this).attr('data-value')){
                               case 'empty': lenoteView.trash.clear();break;
                           }
                       });
                   }});
               },
               
               //分类下拉列表
               showCategory: function(category, level, selectedID){
                   var menu = [], padding = 0;
                   level = level || 0, padding = level * 12;
                   for(var i = 0; i < category.length; i++){
                       var item = category[i]; //item.level
                       menu.push('<dd _id="' + item.id + '" logo="' + item.logoID + '" class="ellipsis' +
                                         (selectedID == item.id? ' selected' : '') +
                                         '" style="padding-left:' + padding + 'px;" title="' + item.name + '"><span>' +
                                         item.name + '</span></dd>');
                       if(item.children) menu.push(arguments.callee(item.children, level + 1, selectedID));
                   }
                   return menu.join('');
               }
            },
            
            //创建/重命名笔记本(组)的html
            getChtml: function(title){
                var html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:330px;"><tbody>'], title = title || '';
                html.push('<tr><th><label for="inputTitle">标题</label></th><td><input type="text" maxlength="30" placeholder="请输入笔记本名称" class="text encopy" id="inputTitle" value="' + title + '"/></td></tr>');
                html.push('<tr><th></th><td><span class="prompt"></span></td></tr>');
                html.push('<tr><th></th><td align="right" class="btnwrap clearfix"><div class="btn btn-gray btn-close">取消</div><div class="btn btn-red btn-confirm">确定</div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            },
            
            //确认对话框
            getConfirmHtml: function(content, btnName){
                btnName = btnName || '删除';
                var html = ['<table cellpadding="0" cellspacing="0" class="form" style="width:350px;"><tbody>'];
                //html.push('<tr><td style="font-size: 12px;padding: 0;padding-left: 5px;*text-align:left;*position:absolute;*padding-top:15px;"' + (utils.isSafari()? ' class="safari"' : '') + '>' + content + '</td></tr>');
                html.push('<tr><td style="font-size: 12px;padding: 0;padding-left: 5px;*text-align:left;*padding-top:15px;"' + (utils.isSafari()? ' class="safari"' : '') + '>' + content + '</td></tr>');
                html.push('<tr><td><span class="prompt"></span></td></tr>');
                //html.push('<tr><td align="right" class="btnwrap clearfix" style="*padding-top:50px;"><div class="btn btn-gray btn-close">取消</div><div class="btn btn-red btn-confirm">' + btnName + '</div></td></tr>');
                html.push('<tr><td align="right" class="btnwrap clearfix"><div class="btn btn-gray btn-close">取消</div><div class="btn btn-red btn-confirm">' + btnName + '</div></td></tr>');
                html.push('</tbody></table>');
                return html.join('');
            },
            
            //比较当前选中的笔记本(组)与传递过来的笔记本(组)ID是否相同，排除所有笔记和星标笔记
            isEqualSelected: function(id){
                var sel = this.getSelected();
                return $.inArray(sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) != -1 || this.resolveID(sel) == id;
            },
            
            //获取当前选中的笔记本(组)或回收站等其它菜单
            getSelected: function(){
                var item = $('#sidebar-a .list li .item.on');
                return (item.length > 0)? item.closest('li').attr('id') : null;
            },
            
            //将选中的笔记本(组)、回收站、所有笔记等菜单设置为高亮
            selected: function(id){
                if(id){
                    $('#sidebar-a .list li, #sidebar-a .list div.item').removeClass('on');
                    $('#' + id).addClass('on').children('div.item').addClass('on');
                }
            },
            
            isSelected: function(id){
                return $('#sidebar-a .list li#' + id).hasClass('on');
            },
            
            //解析笔记本(组)id
            resolveID: function(id){
                if(!id) return null;
                //var r = id.match(/sa-ca-\w+/i), _id;
                var r = id.match(new RegExp(this.getDomID() + '\\w+', 'i')), _id;
                if(r && r.length == 1){
                    _id = r[0].slice(6);
                }
                return _id;
            },
            
            /*
             *   在指定位置插入笔记本(组)
             *   params:
             *     id:         dom的父ID
             *     name:   dom的名称
             *     dom:    待插入的新笔记本(组)
             */
            insert: function(id, name, dom){
                var selector = '#sidebar-a .list-categories', selected, items, target, level;
                if(user.getUState('rcid') == id){
                    selected = $(selector), items = selected.children('li[id^="' + this.getDomID() + '"]'), target = selected, level = 1;
                }else{
                    var children;
                    selector += ' #' + this.getDomID(id), selected = $(selector), children = selected.children('ul'), level = selected.data().level + 1;
                    //如果没有children则插入ul并增加箭头标志
                    if(children.length == 0){
                        var _item = selected.children('div.item');
                        _item.prepend('<i class="icon icon-arrow e_arrow"></i>').end().append(children = $('<ul></ul>'));
                        //监听箭头打开/关闭事件
                        lenoteObserver.arrow(this.getDomID(id));
                        //修改添加子元素的父元素的缩进, 如果是一级元素则不添加
                        _item.css({paddingLeft: function(i, v){
                             var pl = parseInt(v);
                             //return (pl == 24)? pl : pl + 4;
                             if(pl == 24){
                                 return pl;
                             }else{
                                 //更新待插入元素的缩进
                                 dom.children('div.item').css({paddingLeft: function(i, v){return parseInt(v) + 4;}});
                                 return pl + 4;
                             }
                        }});
                    }
                    items = children.children('li[id^="' + this.getDomID() + '"]');
                    target = children;
                }
                
                dom.data($.extend(dom.data(), {'level': level}));
                
                //获取所有子元素的名称进行对比排序
                if(items.length > 0){
                    //比较名称大小智能插入笔记本(组)节点
                    for(var i = 0; i < items.length; i++){
                        var item = $(items[i]);
                        if(name.charCodeAt() < item.data('name').charCodeAt()){
                            //对于相同元素(如dom)，before会将其插入最后一个操作的元素前面
                            item.before(dom);
                            break;
                        }else if(i + 1 == items.length){
                            item.after(dom);
                        }
                    }
                }else{
                    target.append(dom);
                }
                //监听笔记本（组）及右键功能菜单
                lenoteObserver.category(this.getDomID(dom.data('id')));
                //更新笔记本（组）的版本树,这里的id是等插入笔记本(组)的父ID
                //this.updateVersion(this.getDomID(id), true);
            },
            
            //当修改、新建、删除笔记/本(组)时递归更新版本号 
            //updateVersion: function(id, andself){
            //    if(!id) return;
            //    var category = $('#' + id), pnode = category.data('pnode');
            //    if(andself === true){
            //        category.data($.extend(category.data(), {ver: category.data('ver') + 1}));
            //    }
            //    
            //    if(pnode && (pnode != user.getUState('rcid'))){
            //        var c = $('#' + this.getDomID(pnode));
            //        c.data($.extend(c.data(), {ver: c.data('ver') + 1}));
            //       this.updateVersion(this.getDomID(c.data('pnode')), true);
            //    }
            //},
            
            //仅编辑笔记本时改变:添加笔记、笔记本均不变
            //updateVersion: function(id){
            //    if(!id) return;
            //    var category = $('#' + id);
            //    category.data($.extend(category.data(), {ver: category.data('ver') + 1}));
            //},
            
            //删除笔记本（组）
            del: function(id){
                var category = $('#' + id), pnode = category.data('pnode'), delUl = false;
                //查找其父级是否存在，更新箭头标志并删除ul
                if(pnode && (pnode != user.getUState('rcid'))){
                    var selected = $('#' + this.getDomID(pnode));
                    if(selected.children('ul').children('li[id^="' + this.getDomID() + '"]').length < 2){
                        var _item = selected.children('div.item');
                        _item.removeClass('active').children('i[class*="icon-arrow"]').remove();
                        //更新父元素的缩进, 如果是一级元素则不修改
                        _item.css({paddingLeft: function(i, v){
                             var pl = parseInt(v);
                            return (pl == 24)? pl : pl - 4;
                        }});
                        delUl = true;
                    }
                    //this.updateVersion(id);
                    //this.count(this.getDomID(pnode), -parseInt(category.data('num')));
                }
                
                //总笔记数、回收站笔记数更新
                //var note_count = parseInt(category.data('num'));
                //if(pnode && (pnode != user.getUState('rcid'))){
                //    this.count(this.getDomID(pnode), -note_count);
                //}else if(pnode == user.getUState('rcid')){
                //    this.count(id,  -note_count);
                //}
                //if(note_count != 0) lenoteDom.category.trash_count(note_count);
                
                //如果删除的是当前分类则更新笔记列表及笔记
                var target_id = this.isSelected(id)? this.queryAvailable(id) : null;
                
                category.remove();
                if(delUl) selected.children('ul').remove();
                
                if(target_id){
                    try{
                        if(target_id == 'all-notes'){
                            $('#' + target_id).trigger('click');
                        }else{
                            lenoteView.note.getListByCategory(target_id);
                        }
                    }catch(e){}
                }
            },
            
            //递归查找可用的分类
            queryAvailable: function(id){
                var _current = $('#sidebar-a .list li#' + id), res = _current.next('li[id^="' + this.getDomID() + '"]');
                if(res.length == 0) res = _current.prev('li[id^="' + this.getDomID() + '"]');
                if(res.length == 0) res = _current.parent('ul').parent('li[id^="' + this.getDomID() + '"]');
                return (res.length == 0)? 'all-notes' : res.attr('id');
            },
            
            //获取笔记本(组)dom id
            getDomID: function(id){
                return id? 'sa-ca-' + id : 'sa-ca-';
            },
            
            //获取笔记本的图标样式
            iconMaps: {
                'icon_0' : 'notebook_archive', 'icon_1' : 'notebook_book', 'icon_2' : 'notebook_clock', 'icon_3' : 'notebook_work',
                'icon_4' : 'notebook_tea', 'icon_5' : 'notebook_trip', 'icon_6' : 'notebook_piggy'
            },
            getIcon: function(logoID){
                logoID = 'icon_' + (logoID || 0);
                return (logoID in this.iconMaps)? this.iconMaps[logoID] : this.iconMaps['icon_0'];
            },
            
            //检查分类是否存在，且当重命名时排除当前分类
            exists: function(name, exclude){
                if(name === exclude) return false;
                return $('#sidebar-a .list-categories .title[_title="' + md5(name) + '"]').length > 0;
            },
            
            //禁止创建的笔记本名称
            prohibited: function(name){
                var arr = ['所有笔记', '星标笔记', '我的分享'];
                return $.inArray(name, arr) !== -1;
            },
            
            /*
             *   笔记本(组)的列表HTML Dom
             *   params:
             *      category: 笔记本(组)对象
             *      isTree:  是否包含笔记本，笔记本(组)的图标是不一样的
             *     paddingLeft: 笔记本的间距
             */
            build: function(category, isTree, paddingLeft, level){
                if(!paddingLeft) paddingLeft = 24;
                var id = this.getDomID(category.id), icon = '';
                
                icon = '<i class="icon icon_notebook ' + this.getIcon(category.categoryLogoID) + '"></i>';
                if(isTree) icon = '<i class="icon icon-arrow e_arrow"></i>' + icon;
                
                var li = ['<li id="' + id + '" class="e_show_notebook">'];
                li.push('<div class="item ellipsis" style="padding-left:' + paddingLeft + 'px">' + icon);
                li.push('<span class="title" _title="' + md5(category.name) + '">' + category.name + '</span>');
                li.push('<span class="count clearfix"><span class="l"></span><span class="c">' + category.numberOfNote + '</span><span class="r"></span></span>');
                li.push('<i class="icon icon-action e_notebook_action dropdown"></i></div>');
                li.push('</li>');
                var _dom = $(li.join(''));
                level = (/^\d+$/.test(level))? parseInt(level) : -1;
                _dom.data({
                    id: category.id, ver: category.version, type: category.type, delable: category.deletable, pnode: category.parentNode,
                    name: category.name, num: category.numberOfNote, level: level, logoID: category.categoryLogoID
                });
                return _dom;
            },
            
            /*
             *   获取一个笔记本(组)及其子笔记本的dom对象
             *   params:
             *      category: 笔记本(组)对象
             *     paddingLeft: 笔记本的间距
             */
            recursiveBuild: function(category, paddingLeft, level){
                //屏蔽待办事项
                category['_name'] = category.name;
                category['name'] = utils.unhtml(category.name);
                if(category.name == '待办事项' && category.deletable == false) return '';
                level = (/^\d+$/.test(level))? parseInt(level) + 1 : 1;
                var children = category.categories || [];
                paddingLeft = (/^\d+$/.test(paddingLeft))?  parseInt(paddingLeft) + (children.length > 0? 24 : 20) : 24;
                var _dom = lenoteDom.category.build(category, children.length > 0, paddingLeft, level);
                
                if(children.length > 0){
                    var ul = $('<ul></ul>');
                    for(var i = 0; i < children.length; i++){
                        //var child = children[i];
                        //child['_name'] = child.name;
                        //child['name'] = utils.unhtml(child.name);
                        //ul.append(arguments.callee(child, paddingLeft, level));
                        ul.append(arguments.callee(children[i], paddingLeft, level));
                    }
                     _dom.append(ul);
                }
                
                return _dom;
            },
            //获取页面上的笔记本的结构数据
            getAll: function(category){
                var data = [];
                category = category || $('#sidebar-a .list-categories').children('li');
                for(var i = 0; i < category.length; i++){
                    var item = $(category[i]), _data = item.data(), son = item.children('ul').children('li');
                    if(son.length > 0) _data['children'] = arguments.callee(son);
                    data.push(_data);
                }
                return data;
            }
        },
        
        //笔记DOM操作
        note: {
            //显示笔记内容
            init: function(note){
                var selectedID = lenoteView.dom.category.getSelected();
                lenoteDom.editor.cleanUI();
                $('#sidebar-c .note-info div.title').html(UE.utils.unhtml(note.title) || '');
                this.insertDate(note.createTime, note.lastUpdateTime);
                if(selectedID != 'trash') this.insertPublicLink(note.shareLinkID);
                this.insertTags();
                this.insertCategory(note.categoryID);
                lenoteDom.editor.data.set(note);
                lenoteDom.editor.editor.setContent(lenoteAnalyze.decode(note.content, true));
                lenoteDom.editor.showUI();
                setTimeout(function(){
                    if(selectedID == 'myshare'){
                        lenoteDom.editor.insertBtn.clean().edit().share().show();
                    }else if(selectedID == 'trash'){
                        lenoteDom.editor.insertBtn.clean().trash().show();
                    }else{
                        lenoteDom.editor.insertBtn.clean().create().edit().del().share().show();
                    }
                }, 100);
                $('#sidebar-c .note-meta').show();
                $(window).trigger("editor.event.resize");
            },
            
            updateIcon: function(){
                var wrap =  $('#sidebar-b .wrap'), notes = wrap.find('.list-notes li');
                wrap.find('div.logo, div.empty').remove();
                if(notes.length > 0){
                    wrap.append('<div class="logo"></div>');
                }else{
                    var type = wrap.find('.list-notes').data('type'), html = '';
                    switch(type){
                        case 'starnotes':
                            html = '<div class="empty star"><img src="/assets/images/empty_star.png" alt=""/><p>笔记本为空<br/>对重要的笔记标记星标，更好的管理</p></div>';
                            break;
                        case 'sharenotes':
                            html = '<div class="empty share"><img src="/assets/images/empty_share.png" alt=""/><p>笔记本为空<br/>将笔记公开，分享给朋友，同事和家人</p></div>';
                            break;
                        case 'search':
                            html = '<div class="empty search"><img src="/assets/images/empty_search.png" alt=""/><p class="clearfix">笔记本为空<br/><span>没有找到包含“</span>' +
                                        '<span class="ellipsis q' + (utils.isSafari()? ' safari' : '') + '">' + utils.unhtml($('#sidebar-b .search input').val()) + '</span><span>”的笔记</span></p></div>';
                            break;
                        case 'trash':
                            html = '<div class="empty trash"><img src="/assets/images/empty_trash.png" alt=""/><p>废纸篓为空<br/>废纸篓中还没有被扔掉的笔记</p></div>';
                            break;
                        default:
                            html = '<div class="empty"><img src="/assets/images/empty.png" alt=""/><p>笔记本为空<br/>使用记事本组织管理笔记建立记忆库</p></div>';
                    }
                    wrap.append(html);
                }
            },
            
            tag: {
                observer: function(isEdit){
                    var meta = $('#sidebar-c .note-meta'), tags = meta.children('span.tags'), _this_ = this;
                    if(isEdit){
                        tags.on('click', 'a.tagname', function(){
                            $('#sidebar-c .note-meta span.tags a.tagname').removeClass('active');
                            $(this).addClass('active');
                        }).on('dblclick', 'a.tagname', function(){
                            var _this = $(this);
                            _this_.del(_this.children('.name').text());
                            _this.remove();
                        }).on('click', 'a.tagname .del', function(){
                            var _this = $(this);
                            _this.addClass('hover');
                            _this_.del(_this.prev('.name').text());
                            _this.closest('a.tagname').remove();
                        });
                        
                        tags.find('.gentag input.newtag').focus(function(){
                            var _this = $(this), gentag = _this.closest('span.gentag'), v = lenoteDom.editor.data.tags.getName(_this.val());
                            gentag.addClass('active');
                            gentag.next('.taglen').text('');
                            _this.val((v == '+标签' || v == '标签')? '' : v);
                        }).blur(function(){
                            var _this = $(this), gentag = _this.closest('span.gentag');
                            gentag.removeClass('active');
                            gentag.next('.taglen').text('');
                            _this_.add(_this.val());
                            _this.val('+标签').width(35);
                        //}).keypress(function(event){
                        //    var key = event.which || event.keyCode, _this = $(this), gentag = _this.closest('span.gentag'), taglen = gentag.next('.taglen');
                        //    taglen.text(_this.val() + String.fromCharCode(event.which));
                        //    var w = taglen.width();
                        //    _this.stop(true, true).animate({width: (w < 35? 35 : w + 5)}, 100);
                        //    
                        //    console.info(event.which + ':' + String.fromCharCode(event.which));
                        }).keydown(function(event){
                            try{
                               if(!event.isPropagationStopped()) event.stopPropagation();
                            }catch(e){}
                            
                            var key = event.which || event.keyCode, _this = $(this), gentag = _this.closest('span.gentag');
                            if(key == 8 || key == 46){
                               if(_this.val() == ''){
                                   var _t = gentag.prev('a.tagname');
                                   if(_t.length > 0){
                                       _this_.del(_t.children('.name').text());
                                       _t.remove();
                                   }
                               }
                            }else if(key == 9){
                                if(!event.isDefaultPrevented()) event.preventDefault();
                                _this.trigger('blur').trigger('focus');
                            }
                        }).keyup(function(event){
                            try{
                               if(!event.isPropagationStopped()) event.stopPropagation();
                            }catch(e){}
                            
                            var key = event.which || event.keyCode, _this = $(this), gentag = _this.closest('span.gentag'), taglen = gentag.next('.taglen');
                            //自动调整输入框宽度
                            //_this.attr('size', _this.val().length);
                            //_this.width(function(i, c){
                            //    //if(len > 3) key == 8? c - 5 : c + 5;
                            //    return len > 3? len * 7 : 35;
                            //});
                            //taglen.html(UE.utils.unhtml(_this.val()).replace(/\s/, '&nbsp;'));
                            taglen.text(_this.val().replace(/\s/igm, '#'));
                            var w = taglen.width();
                            //_this.width(w < 35? 35 : w + 5);
                            _this.stop(true, true).animate({width: (w < 35? 35 : w + 10)}, 100);
                            
                            //console.info(key + ':' + String.fromCharCode(key));
                            
                            //if($.inArray(key, [13, 188, 186]) != -1){ //Enter与,，;；生成新标签并继续创建标签
                            if(key == 13){
                                _this.trigger('blur').trigger('focus');
                            }else if(key == 27){ //esc 取消当前正在输入的标签
                                _this.val('+标签').width(35);
                                _this.trigger('blur');
                                //lenoteDom.editor.editor.focus(true);
                                setTimeout(function(){lenoteDom.editor.editor.focus(true);}, 50); //fixed: IE can't run focus function
                            }
                            //}else if(key == 8){ //Backspace
                            //}else if(key == 46){ //Del
                            //    if(_this.val() == ''){
                            //        var _t = gentag.prev('a.tagname');
                            //        if(_t.length > 0){
                            //            _this_.del(_t.children('.name').text());
                            //            _t.remove();
                            //        }
                            //    }
                            //}
                        });
                    }else{
                       //if(tags.length > 0){
                       //    tags.children('a.tagname').click(function(){
                       //        $('#sidebar-c .note-meta span.tags a.tagname').removeClass('active');
                       //        $(this).addClass('active');
                       //    });
                       //}
                    }
                },
                add: function(name){
                    //name = UE.utils.html(lenoteDom.editor.data.tags.getName(name)) || '';
                    name = utils.html(lenoteDom.editor.data.tags.getName(name)) || '';
                    if(name && name != '标签' && !lenoteDom.editor.data.tags.isExist(name)){
                        var id = lenoteDom.editor.data.tags.add(name);
                        $('#sidebar-c .note-meta span.tags .gentag').before(this.get(name, id));
                        //saved-自动保存: 增加标签时触发
                        lenoteDom.editor.saved.setPoll();
                    }
                },
                del: function(name){
                    lenoteDom.editor.data.tags.del(name);
                    //saved-自动保存: 删除标签时触发
                    lenoteDom.editor.saved.setPoll();
                },
                get: function(name, id){
                    name = lenoteDom.editor.data.tags.getName(name);
                    if(id){
                        return '<a class="tagname" _id="' + id +'" href="javascript:;"><span class="name">' + name + '</span><span class="del" title="删除">&#215;</span></a>';
                    }else{
                        return '<a class="tagname" href="javascript:;"><span class="name">' + name + '</span><span class="del" title="删除">&#215;</span></a>';
                    }
                }
            },
            
            //插入分类
            insertCategory: function(cid, isEdit){
                if(isEdit){
                    cid = cid || lenoteDom.category.resolveID(lenoteDom.category.getDefault());
                    var dom = $('#' + lenoteDom.category.getDomID(cid));
                    if(dom.length == 0) return;
                    $('#sidebar-c .note-info .extra').append(
                        btn=$('<a class="note-category clearfix"><i class="icon ' + lenoteDom.category.getIcon(dom.data('logoID')) + '"></i>' + 
                                  '<span class="title ellipsis" _id="' + cid + '" title="' + dom.data('name') + '">' + dom.data('name') + '</span></a>')
                    );
                    dom = null;
                    btn.click(function(event){
                        try{
                           if(!event.isPropagationStopped()) event.stopPropagation();
                           if(!event.isDefaultPrevented()) event.preventDefault();
                        }catch(e){}
                        
                        var popup = $('.popup-menu.category');
                        if(popup.length == 0){
                            var _this = $(this), category = lenoteDom.category.getAll();
                            if(category.length > 0){
                                var selected = _this.children('span.title').attr('_id'),
                                      menu = lenoteDom.category.dropdown.showCategory(category, 0, selected),
                                      width = $(window).outerWidth(), offset = _this.offset();
                                menu += '<dd data-value="create" class="ellipsis create"><i class="icon"></i>新建笔记本</dd>';
                                $('body').append(popup = $('<dl class="popup-menu category">' + menu + '</dl>'));
                                var left = (width - offset.left > 200)? offset.left : offset.left - popup.outerWidth() + _this.outerWidth(),
                                      top = offset.top + _this.outerHeight() - 2;
                                popup.css({left: left, top: top}).slideDown('fast');
                                popup.children('dd').click(function(){
                                    var _dd = $(this);
                                    if(_dd.attr('data-value')){
                                        switch(_dd.attr('data-value')){
                                            case 'create':
                                                lenoteView.category.createNotebook(function(item){
                                                    var ct = $('#sidebar-c .note-info .extra a.note-category');
                                                    if(ct.length == 1){
                                                        ct.children('i.icon').attr('class', 'icon ' + lenoteDom.category.getIcon(item.logoID));
                                                        //ct.children('span.title').attr({_id: item.id, title: item.name}).text(item.name);
                                                        ct.children('span.title').attr({_id: item.id, title: utils.html(item.name)}).html(item.name);
                                                        //saved-自动保存: 更改分类时触发
                                                        lenoteDom.editor.saved.setPoll();
                                                    }
                                                });
                                                break;
                                        }
                                    }else if(_dd.attr('_id') != selected){
                                        _this.children('i.icon').attr('class', 'icon ' + lenoteDom.category.getIcon(_dd.attr('logo')));
                                        _this.children('span.title').attr({_id: _dd.attr('_id'), title: _dd.attr('title')}).text(_dd.attr('title'));
                                        //saved-自动保存: 更改分类时触发
                                        lenoteDom.editor.saved.setPoll();
                                    }
                                }).smartHover();
                            }
                        }else{
                            popup.slideUp('fast', function(){
                               $(this).remove();
                            });
                        }
                    });
                }else{
                    cid = cid || lenoteDom.category.resolveID(lenoteDom.category.getDefault());
                    var dom = $('#' + lenoteDom.category.getDomID(cid));
                    if(dom.length == 0) return;
                    $('#sidebar-c .note-info .extra').append(
                        btn=$('<div class="note-category preview clearfix"><div class="wrap"><i class="icon ' + lenoteDom.category.getIcon(dom.data('logoID')) + '"></i>' + 
                                  '<span class="title ellipsis" title="' + dom.data('name') + '">' + dom.data('name') + '</span></div></div>')
                    );
                    dom = null;
                }
            },
            
            //插入tag
            insertTags: function(isEdit){
                var tags = lenoteDom.editor.data.tags.getAll(), meta = $('#sidebar-c .note-meta'), res = [];
                if(isEdit){
                    if(tags){
                        for(var key in tags){
                            //var item = tags[key], name = lenoteDom.editor.data.tags.getName(UE.utils.html(item.name));
                            var item = tags[key], name = lenoteDom.editor.data.tags.getName(utils.html(item.name));
                            if(!name) continue;
                            //res.push(this.tag.get(UE.utils.html(name), item['id']));
                            res.push(this.tag.get(utils.html(name), item['id']));
                        }
                    }
                    res.push('<span class="gentag"><input class="newtag" type="text encopy" value="+标签" maxlength="20" /></span><span class="taglen"></span>');
                    meta.append('<span class="tags editable"><span class="title">标签：</span>' + res.join('') + '</span>').show();
                    $(window).trigger("editor.event.resize");
                }else{
                    if(tags){
                        for(var key in tags){
                            //var item = tags[key], name = lenoteDom.editor.data.tags.getName(UE.utils.html(item.name));
                            var item = tags[key], name = lenoteDom.editor.data.tags.getName(utils.html(item.name));
                            if(!name) continue;
                            if(item['id']){
                                res.push('<a class="tagname" _id="' + item['id'] +'" href="javascript:;">' + name + '</a>');
                            }else{
                                res.push('<a class="tagname" href="javascript:;">' + name + '</a>');
                            }
                        }
                    }
                    res = res.length > 0? ('<span class="tags"><span class="title">标签：</span>' + res.join('') + '</span>') : '';
                    meta.append(res);
                }
                this.tag.observer(isEdit);
            },
            
            //插入公共链接
            insertPublicLink: function(key){
                if(!key){
                    lenoteDom.editor.data.remove('shareKey');
                    return;
                }
                
                var url = utils.getDomain() + '/shared/' + key, meta = $('#sidebar-c .note-meta'), publnk = meta.children('nobr.publnk');
                      text = '<nobr class="publnk"><a href="' + url + '" title="点击访问公开链接地址" target="_blank">公开链接地址</a></nobr>';
                if(publnk.length > 0)  publnk.remove();
                meta.prepend(text);
            },
            
            //插入笔记的创建时间与修改时间
            insertDate: function(ctime, utime){
                var ctime = ctime? new Date(ctime) : new Date();
                var utime = utime? new Date(utime) : new Date();
                ctime = (ctime == 'Invalid Date')? '' : ctime.format('yyyy-MM-dd hh:mm');
                utime = (utime == 'Invalid Date')? '' : utime.format('yyyy-MM-dd hh:mm');
                
                var meta = [];
                meta.push('<nobr class="createtime">创建时间：<span class="date">' + ctime + '</span></nobr>');
                meta.push('<nobr class="updatetime">修改时间：<span class="date">' + utime + '</span></nobr>');
                //$('#sidebar-c .note-meta').html(meta.join(''));
                $('#sidebar-c .note-meta').append(meta.join(''));
            },
            
            //判断当前编辑器的笔记是否为新笔记
            isNew: function(){
                var data =$('#sidebar-c .note-editor').data('note');
                return !data || !data.id;
            },
            
            /*
             *   计算笔记列表的分页
             *   根据当前笔记列表中笔记的个数计算分页的skip
             *   根据当前笔记列表窗口的高度计算每次获取的笔记数，最小为20
             */
            getPagination: function(){
                var target = $('#sidebar-b .list-notes');
                var skip = target.children('li:not(.date-sep)').length;
                skip = isNaN(skip)? 0 : skip;
                if(skip < 0) skip = 0;
                
                //每个笔记项目的高度-由CSS定义，这里直接写死了
                var perHeight = 94;
                //var height = parseInt(target.outerHeight());
                var height = parseInt($('#sidebar-b .content').outerHeight()) + perHeight;
                var size = Math.ceil(height / perHeight);
                if (size < 20) size = 20;
                
                return {skip: skip, size: size};
            },
            
            setFilterDescription: function(cid){
                if(cid === null){
                    $('#sidebar-b .easytools .description').find('.count').text('').end().find('.from').text('搜索结果');
                }else{
                    if($('#all-notes').data('searchkey')) return;
                    var target = '#sidebar-b .easytools .description', notebook = $('#' + cid);
                    if(notebook.data('num')){
                        $(target).find('.count').text(notebook.data('num') + '篇').show().end().find('.from').text(notebook.data('name'));
                    }else{
                        $(target).find('.count').hide().end().find('.from').text(notebook.data('name'));
                    }
                }
            },
            
             /**更新笔记列表缩略图*/
            //缩略图为最后上传的资源(是最后上传不是最后一个资源)
            //discard: resources不再使用，直接从attachments接口获取最后更新的附件
            updateThumb: function(id, resources){
                var item = $('#sidebar-b #' + this.getDomID(id));
                if(item.length == 0) return;
                
                //if(resources && resources.length > 0){
                //    var files = lenoteDom.editor.data.attachments.getAll(), key = 'key_' + resources[0].local_id, resource = files[key];
                //    if(resource){
                //        var media = this.getThumb(resource._type, resource);
                //        item.find('.note-entry').children('.media').remove().end().prepend(media);
                //    }
                //}else{
                //    item.find('.note-entry .media').remove();
                //}
                
                var attachment = lenoteDom.editor.data.attachments.getLast();
                if(attachment){
                    var media = this.getThumb(attachment._type, attachment);
                    item.find('.note-entry').children('.media').remove().end().prepend(media);
                }else{
                    item.find('.note-entry .media').remove();
                }
            },
           
             /*生成笔记列表缩略图*/
            getThumb: function(type, resource){
                var src = '', _class='';
                //获取小类所属的大类
                type = lenoteTag.getParentType(type);
                switch(type){
                    case -1: break; //类型未识别
                    case 128: break; //通用
                    case 768: break; //文字
                    case 896: break; //手写
                    case 1024: break; //涂鸦
                    case 1152: break; //待办
                    case 1408: break; //日期附件
                    case 1536: break; //联系人附件
                    case 1664: break; //地理位置附件
                    case 1792: break; //天气附件
                    case 1920: break; //时间附件
                    case 2048: break; //心情附件
                    case 256: src = lenoteDom.editor.data.attachments.getThumb(resource, 94, 94);break;  //图片
                    case 512: src = '/assets/images/attachment/audio_play.png';_class = 'small';break; //音频
                    case 1280: src = '/assets/images/attachment/video.png';_class = 'small';break; //视频
                    default:
                        var suffix = ['apk', 'doc', 'pdf', 'ppt', 'rar', 'xls', 'zip', 'txt'], ext = resource.ext || resource.name.substring(resource.name.lastIndexOf('.'));
                        ext = ext.replace(/x$/, '').replace(/^\./, ''); //docx, pptx, xlsx
                        switch(ext){
                            case 'txt':case 'rtf': case 'jnt': ext = 'txt';break;
                            case 'jpg':case 'jpeg':case 'bmp':case 'gif':case 'png':case 'ico':case 'pcx':case 'tiff':case 'dxf':case 'exif': ext = 'image';break;
                            case 'kk':case 'mp3':case 'amr':case 'aac':case 'ogg':case 'mid':case 'ape':case 'wav':case 'wma':case 'midi': ext = 'audio';break;
                            case 'avi':case 'rmvb':case 'mkv':case 'wmv':case 'flv':case 'mp4':case 'rm':case 'f4v':case 'mov':case 'mpeg':case '3gp': ext = 'video';break;
                            default: if($.inArray(ext, suffix) == -1) ext = 'default';
                        }
                        src = '/assets/images/attachment/' + ext + '.png'; _class = 'small';
                }
                return src? '<div class="media"><img src="' + src + '" class="' + _class + '" alt=""/></div>' : '';
            },
            
            /*
             *   在笔记列表区域插入笔记
             *   params:
             *       note:  笔记对象
             *       isprepend:  指定插入笔记的位置，如果是新建则是插在笔记列表窗口的最前面
             *       isNew: 是新建笔记插入还是加载列表插入
             */
            insert: function(note, isprepend, isNew){
                var target = '#sidebar-b .list-notes', id = this.getDomID(note.noteID);
                var li = ['<li id="' + id + '" class="e_show_note">'], utime = note.lastUpdateTime? new Date(note.lastUpdateTime): new Date();
                li.push('<div class="item note-entry clearfix">');
                
                if(note.resourceType){
                    var resources = note.resource, resource = resources[0], media = this.getThumb(note.resourceType, resource);
                    if(media) li.push(media);
                }
                
                li.push('<div class="entry">');
                //如果是搜索则高亮关键词
                if($(target).data('type') == 'search'){
                    var q = UE.utils.unhtml($.trim($('#sidebar-b .search input').val()));
                    li.push('<div class="title ellipsis">'+ utils.highlight(q, (UE.utils.unhtml(note.title) || ''))  + '</div>');
                    //li.push('<div class="summary ellipsis"><span class="text">'  + utils.highlight(q, utils.strip_tags(note.summary)) + '</span></div>');
                    li.push('<div class="summary ellipsis"><span class="text">'  + utils.highlight(q, utils.unhtml(note.summary)) + '</span></div>');
                }else{
                    li.push('<div class="title ellipsis">'+ (UE.utils.unhtml(note.title) || '')  + '</div>');
                    //li.push('<div class="summary ellipsis"><span class="text">'  + utils.strip_tags(note.summary) + '</span></div>');
                    li.push('<div class="summary ellipsis"><span class="text">'  + utils.unhtml(note.summary) + '</span></div>');
                }
                li.push('<div class="metadata ellipsis">');
                li.push('<span class="date">' + utime.format('d日 hh:mm') + '&nbsp;' + (utime.getHours() >= 12? 'PM' : 'AM') + '</span>');
                if(note.spot && note.spot.address) li.push('<span class="spot">' + note.spot.address + '</span>');
                //if(note.weather && note.weather.status !== 0) li.push('<span class="weather">' + note.weather.status + '&nbsp;' + note.weather.temperature + '&#8451;</span>'); //&#176;C
                if(note.tag && note.tag.length > 0){
                    var _tags = '';
                    for(var i = 0; i < note.tag.length; i++){
                        //var _tag = note.tag[i], name = lenoteDom.editor.data.tags.getName(UE.utils.html(_tag.name));
                        //var _tag = note.tag[i], name = isNew? lenoteDom.editor.data.tags.getName(utils.html(_tag.name)) : lenoteDom.editor.data.tags.getName(_tag.name);
                        var _tag = note.tag[i], name = isNew? _tag.name : lenoteDom.editor.data.tags.getName(_tag.name);
                        if(!name) continue;
                        //_tags += '<span>' + name + '</span>';
                        _tags += name + '&nbsp;';
                    }
                    li.push('<span class="tag">' + _tags + '</span>');
                }
                li.push('</div></div></div>');
                if(note.isMarked){
                    li.push('<a class="marked stared" title="取消星标" href="javascript:;"></a>');
                }else{
                    li.push('<a class="marked" title="添加星标" href="javascript:;"></a>');
                }
                li.push('</li>');
                var _note = $(li.join('')), separator = '_date_' + utime.format('yyyyMM'), _id = note.noteID;
                _note.data({ver: note.version, id: _id, ctime: note.createTime});
                _note.children('.marked').click(function(event){
                    try{
                       if(!event.isPropagationStopped()) event.stopPropagation();
                       if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    var _this = $(this), _isMarked = _this.hasClass('stared');
                    lenoteView._lenote.star.mark(_id, !_isMarked, {
                        success: function(respose){
                            if(_isMarked){
                                _this.attr('title', '添加星标').removeClass('stared');
                                lenoteDom.category.count('stars-notes', -1, false, true);
                                if(lenoteView.dom.category.getSelected() == 'stars-notes'){
                                    var _current = _this.closest('li:not(.date-sep)');
                                    
                                    if(lenoteView.dom.note.isEqualSelected(_current.attr('id'), true)){
                                        lenoteView.dom.editor.cleanUI();
                                        var _next = _current.nextAll('li:not(.date-sep)').first().attr('id') || _current.prevAll('li:not(.date-sep)').first().attr('id');
                                        if(_next){
                                            lenoteView.note.show(_next);
                                        }else{
                                            lenoteView.dom.editor.insertBtn.clean().create().show();
                                            $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                        }
                                    }
                                    
                                    if(_current.prev().hasClass('date-sep')){
                                            var _next_ = _current.next();
                                            if(_next_.length == 0 || _next_.hasClass('date-sep')){
                                                _current.prev().remove();
                                            }
                                    }
                                    _current.remove();
                                    if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                        $('#sidebar-b .content').trigger('scroll');
                                    }
                                    
                                    lenoteDom.note.updateIcon();
                                }
                            }else{
                                if(lenoteView.dom.category.getSelected() != 'stars-notes'){
                                    _this.attr('title', '取消星标').addClass('stared');
                                    lenoteDom.category.count('stars-notes', 1, false, true);
                                }
                            }
                            //更新笔记的版本号
                            try{
                                var note_ver = lenoteDom.editor.data.get('ver');
                                if(/^\d+$/.test(note_ver)){
                                    _note = $('#sidebar-b #' + id);
                                    if(_note.length > 0) _note.data($.extend(_note.data() || {}, {ver: note_ver + 1}));
                                    lenoteDom.editor.data.add('ver', note_ver + 1);
                                }
                            }catch(e){}
                        }
                    });
                });
                
                var sep = $('#sidebar-b .list-notes #' + separator);
                if(sep.length == 0){
                    if(isprepend){
                        $(target).prepend(sep = $('<li class="date-sep" id="' + separator + '">' + utime.format('M月 yyyy年') + '<div class="rainbow"></div></li>'));
                    }else{
                        $(target).append(sep = $('<li class="date-sep" id="' + separator + '">' + utime.format('M月 yyyy年') + '<div class="rainbow"></div></li>'));
                    }
                }
                
                //isprepend? $(target).prepend(_note) : $(target).append(_note);
                isprepend? sep.after(_note) : $(target).append(_note);
                //监听笔记列表事件
                lenoteObserver.note(id);
                return id;
            },
            
            /*
             *   在新建/删除笔记时更新笔记列表及笔记本(组)中的笔记数量
             *   params:
             *      number:  如果为负则是删除笔记，否则为新建笔记
             */
            count: function(number){
                //更新笔记列表区描述中的笔记数目
                var filter = $('#sidebar-b .easytools .description .count');
                try{
                    var c = parseInt(filter.text());
                    if(!isNaN(c)){
                        if(c < 0) c = 0;
                        c += number;
                        filter.text(c + '篇');
                    }
                }catch(e){}
                //更新笔记本(组)树中的笔记数目
                lenoteDom.category.count(null, number, true);
            },
            
            //检查id与当前高亮的笔记列表中的笔记是否一致
            isEqualSelected: function(id, noConvert){
                return (noConvert? id : this.getDomID(id)) == this.getSelected(true);
            },
            
            //获取当前选中的笔记，如果没有选中的则返回笔记列表中的第一个笔记
            getSelected: function(noFirst){
                var note = $('#sidebar-b .list-notes li'), item = note.find('.item.on');
                if(item.length > 0) return item.closest('li').attr('id');
                return noFirst? '' : note.not('.date-sep').first().attr('id');
            },
            
            //将选中的笔记列表中的笔记设置为高亮
            selected: function(id){
                if(id){
                    $('#sidebar-b .list-notes div.item').removeClass('on');
                    $('#' + id).children('div.item').addClass('on');
                }
            },
            
            //获取笔记dom id
            getDomID: function(id){
                return id? 'sb-n-' + id : 'sb-n-';
            },
            
            //解析笔记ID
            resolveID: function(id){
                //var r = id.match(/sb-n-\w+/i), _id;
                var r = id.match(new RegExp(this.getDomID() + '\\w+', 'i')), _id;
                if(r && r.length == 1){
                    _id = r[0].slice(5);
                }
                return _id;
            },
            
            //笔记列表滚动时自动加载
            autoLoading: {
                //scroll事件定时器
                timer: null,
                //popTimer: null,
                
                //当触发滚动事件时，如果已到底部则自动加载相应的内容
                scroll: function(){
                    //if(this.popTimer) clearTimeout(this.popTimer);
                    
                    var element = $('#sidebar-b .content');
                    var viewHeight = element.outerHeight();
                    var scrollHeight = element.scrollTop();
                    
                    var contentHeight = $('#sidebar-b .list-notes').outerHeight() / 2; //提前加载，不滚动到底加载，可修复滚动条突然变短动画不连贯的问题
                    //如果没有内容则不需要处理滚动事件
                    if(contentHeight == 0) return;
                    
                    var that = this;
                    if(viewHeight + scrollHeight >= contentHeight){
                        this.observer(true);
                        this.timer = setTimeout(function(){
                            that.show(scrollHeight);
                        }, 500);
                    }
                },
                
                observer: function(unbind){
                   clearTimeout(this.timer);
                   $('#sidebar-b .content').unbind('scroll'); //防止因不同分类多次绑定scroll导致无法unbind
                    if(!unbind){
                        $('#sidebar-b .content').bind('scroll', function(){
                            lenoteDom.note.autoLoading.scroll();
                        });
                    }
                },
                
                //滚动加载时的回调函数
                callback: function(scrollTop, perCount){
                    //var that = this, target = '#sidebar-b .content', isScroll = false;
                    var that = this, target = '#sidebar-b .content';
                    
                    //this.observer(true);
                    return {
                        success: function(respose){
                            var _notes = respose.searchResult? respose.searchResult.notes : respose.notes;
                            if (_notes.length > 0){
                                $.each(_notes, function(i, item){
                                    if($(target + ' li#' + lenoteDom.note.getDomID(item.id || item.noteID)).length == 0){
                                        item['_title'] = item['title'];
                                        item['title'] = utils.unhtml(item['title']);
                                        lenoteDom.note.insert(item, false);
                                    }
                                });
                                
                                //只有当返回数满足条件时才会再次绑定滚动事件
                                //if(_notes.length == perCount) isScroll = true;
                                if(_notes.length == perCount) that.observer();
                                
                                //var distance = (_notes.length > 1) ? 180 : 90;
                                //that.popTimer = setTimeout(function(){
                                //    $(target).animate({scrollTop : scrollTop + distance}, 400);
                                //}, 500);
                            }
                        }
                        //},
                        //before: function(){
                        //    $(target).smartLoading().scrollTop(scrollTop + 30);
                        //},
                        //complete: function(){
                            //$(target).smartLoading({action: 'del', callback: function(){
                                //当删除loading图标后会再次触发scroll事件，这里是取消scroll事件处理的
                                //clearTimeout(that.timer);
                                //当还有返回值时重新绑定笔记列表滚动事件
                                //if(isScroll) lenoteDom.note.autoLoading.observer();
                            //}});
                        //}
                    };
                },
                
                //自动加载自动获取的笔记类型
                show: function(scrollTop){
                    var target = $('#sidebar-b .list-notes'), type = target.data('type');
                    switch(type){
                        case 'category': lenoteView.note.scroll.getListByCategory(scrollTop);break;
                        case 'allnotes': lenoteView.note.scroll.getAll(scrollTop);break;
                        case 'starnotes': lenoteView.note.scroll.getStars(scrollTop);break;
                        case 'sharenotes': lenoteView.note.scroll.getShared(scrollTop);break;
                        case 'search': lenoteView.note.scroll.search(scrollTop);break;
                        case 'trash': lenoteView.trash.scroll.getAll(scrollTop);break;
                    }
                }
            },
            
            //获取笔记列表的回调函数
            list_callback: function(cateid, type, isMultiple, searchkey){
                var target = '#sidebar-b .list-notes';
                return {
                    success: function(respose){
                        if(cateid == 'search'){
                            var _notes = respose.searchResult.notes;
                        }else{
                            var _notes = respose.notes;
                        }
                        if(_notes.length > 0){
                            $.each(_notes, function(i, item){
                                item['_title'] = item['title'];
                                item['title'] = utils.unhtml(item['title']);
                                lenoteDom.note.insert(item);
                            });
                            //显示第一篇笔记
                            lenoteView.note.show(null, isMultiple);
                            //当有笔记时监听滚动事件, 以后20替换成pager.size，这里为了方便先定20
                            if(_notes.length >= 20){
                                lenoteDom.note.autoLoading.observer();
                            }else{ //取消上一个分类列表可能存在的scroll事件
                                lenoteDom.note.autoLoading.observer(true);
                            }
                        }else{
                            lenoteDom.note.autoLoading.observer(true);
                        }
                        
                        lenoteDom.note.updateIcon();
                        
                        $('#all-notes').removeData('searchkey');
                        if(cateid == 'all-notes'){
                            $('#all-notes').data({'name' : '所有笔记'});
                        }else if(cateid == 'stars-notes'){
                            $('#stars-notes').data({'name' : '星标笔记'});
                        }else if(cateid == 'myshare'){
                            $('#myshare').data({'name' : '我的分享'});
                        }else if(cateid == 'search'){
                            $('#all-notes').data({'name' : '搜索结果', 'searchkey': searchkey});
                        }else if(cateid == 'trash'){
                            $('#trash').data({'name': '废纸篓'});
                        }
                        
                        //设置笔记列表描述
                        if(cateid == 'search'){
                            lenoteDom.note.setFilterDescription(null);
                        }else{
                            lenoteDom.note.setFilterDescription(cateid);
                        }
                        //生成新建笔记按钮
                        if(cateid != 'myshare' && cateid != 'trash'){
                            lenoteDom.editor.insertBtn.clean().create().show();
                        }
                    },
                    before: function(){
                        $(target).smartLoading({text: (cateid == 'search'? '正在搜索笔记...' : '笔记列表加载中...')});
                    },
                    complete: function(){
                        $(target).smartLoading({action: 'del', effect: true});
                    },
                    init: function(){
                        //将笔记显示区域置为空白
                        lenoteDom.editor.cleanUI();
                        //设置笔记列表区的类型，用于滚动加载事件将在加载新笔记列表前清空之前的笔记列表
                        $(target).data('type', type).empty();
                        //将选中的菜单高亮 
                        lenoteDom.category.selected((cateid == 'search')? 'all-notes' : cateid);
                    }
                };
            }
        }
    };
})();