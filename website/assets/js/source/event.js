/*
 *  author: gejian1@lenovo.com
 *  description: 事件处理
 */
(function(){
    lenoteEvent = {
        //监听全局事件
        init: function(){
            //window.onbeforeunload = this.leave_warn;
            //window.onunload = this.leave_warn;
            $(window).on('beforeunload unload', this.leave_warn);
            
            //帐户信息
            //$('.accountinfo').click(function(){location.href = '/user/account.html';});
            
            //退出
            $('.logout').click(function(){
                //user.logout();
                lenoteEvent.check_note(function(){
                    user.logout();
                });
            });
            
            //监听星标笔记与所有笔记列表事件
            $('#all-notes').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                //lenoteView.note.getAll();
                lenoteEvent.check_note(function(){
                    lenoteView.note.getAll();
                });
            });
            $('#stars-notes').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                //lenoteView.note.getStars();
                lenoteEvent.check_note(function(){
                    lenoteView.note.getStars();
                });
            });
            $('#myshare').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                //lenoteView.note.getShared();
                lenoteEvent.check_note(function(){
                    lenoteView.note.getShared();
                });
            });
            $('#trash').click(function(){
                $('#sidebar-b .toolbar .search input').val('').blur();
                lenoteEvent.check_note(function(){
                    lenoteView.trash.getAll();
                });
            });
            
            //监听笔记本(组)栏的菜单组-收起/打开侧边栏子菜单，如打开笔记本(组)、标签组等
            $('#sidebar-a .wrap .header').click(function(){lenoteDom.category.openMenu(this);});
            
            //页面级事件监听：body(主要用于隐藏dropdown菜单)
            $('body').click(function(event){
                //当用户正在操作笔记时延长cooke有效期
                try{
                    $.refreshCookie('UState', true);
                    $.refreshCookie('token', true);
                }catch(e){}
                
                event = event || window.event;
                //当点击了body时自动移除弹出的菜单，当被点击的目标元素有dropdown时不移除事件交由被点击元素自己去处理
                if(event.type == 'click' && !$(event.target).hasClass('dropdown')){
                    lenoteDom.dropdown.remove();
                }
                try{
                   if(!UE.browser.ie && !$(event.target).is('input')) 'getSelection' in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                }catch(e){}
                //lenoteDom.editor.editor.selection.clearRange();
                
               //更多工具隐藏/显示事件注册-去掉更多工具的选中状态
               //var checked = $(".edui-button-checked");
               //if(checked.length > 0){
               //    checked.removeClass("edui-button-checked");
                   //$(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                  //$(".edui-moretoolbox-show").slideUp('fast', function(){
                  //      $(this).removeClass("edui-moretoolbox-show");
                  //});
               //   $("#moretoolbox").slideUp('fast');
               //}
               $("#moretoolbox").slideUp('fast');
            }).on('keydown', function(event){ //Ctrl + S保存
                event = event || window.event;
                var keyCode = event.keyCode || event.which;
                if(event.ctrlKey && keyCode == 83){
                    try{
                       if(!event.isPropagationStopped()) event.stopPropagation();
                       if(!event.isDefaultPrevented()) event.preventDefault();
                    }catch(e){}
                    
                    //保存前检查内容是否有变化(is_need是否为true)，有变化则立即保存、没有则不做任何处理
                    //lenoteDom.editor.saved.setPoll(true);
                    lenoteDom.editor.saved.check();
                    return false;
                }
            }).on('mouseup mousedown', function(event){
                //lenoteDom.dropdown.remove();
                try{
                    //event.type == 'mousedown' && 'getSelection' in window ? window.getSelection().removeAllRanges() : window.document.selection.empty();
                    var win = $('#iframeNodeView').get(0).contentWindow;
                    if(typeof win == 'object'){
                        'getSelection' in win ? win.getSelection().removeAllRanges() : win.document.selection.empty();
                    }
                }catch(e){}
                
                //if($(event.target).is('body')){
                if($(event.target).parents('#moretoolbox').length === 0){
                    //更多工具隐藏/显示事件注册-去掉更多工具的选中状态
                    //var checked = $(".edui-button-checked");
                    //if(checked.length > 0){
                    //    checked.removeClass("edui-button-checked");
                        //$(".edui-moretoolbox-show").removeClass("edui-moretoolbox-show");
                        //$(".edui-moretoolbox-show").slideUp('fast', function(){
                        //    $(this).removeClass("edui-moretoolbox-show");
                        //});
                    //    $("#moretoolbox").slideUp('fast');
                    //}
                    $("#moretoolbox").slideUp('fast');
                }
            }).on('click', '.popup-menu dd', function(event){
                //删除选区时弹出框保持光标
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   lenoteDom.dropdown.remove();
                }catch(e){}
            });
            //$('#sidebar-b .toolbar .search, #sidebar-c, #lebox-wrap').on('click', '.encopy, input', function(event){
            $('#sidebar-b .toolbar .search, #sidebar-c').on('click', '.encopy', function(event){
                //使.encopy始终可选
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   //if(!event.isDefaultPrevented()) event.preventDefault();
                   lenoteDom.dropdown.remove();
                }catch(e){}
            });
            
            //当是IE时监听只有encopy的元素才可以被选择
            if(UE.browser.ie){
                $(document).on('selectstart', function(event){
                    var _target = $(event.target);
                    if(_target.hasClass('.encopy') || _target.closest('.encopy').length > 0){
                        return true;
                    }else{
                        return false;
                    }
                });
            }
            
            $('#sidebar-b .search').find('a.submit').click(function(e){
                //$.lebox.info('正在紧锣密鼓地准备中，敬请期待！', 2000);
                //var q = UE.utils.unhtml($.trim($('#sidebar-b .search input').val()));
                var q = $.trim($('#sidebar-b .search input').val());
                //saved-自动保存: 搜索时检查是否需要保存
                lenoteDom.editor.saved.check(function(){
                    //切换笔记时重置saved状态
                    lenoteDom.editor.saved.clean();
                    lenoteView.note.search(q);
                }, true);
            }).end().find('input').keydown(function(event){
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                }catch(e){}
                
                var key = event.which || event.keyCode;
                if(key == 13){
                    var q = $.trim($(this).val());
                    //saved-自动保存: 搜索时检查是否需要保存
                    lenoteDom.editor.saved.check(function(){
                        //切换笔记时重置saved状态
                        lenoteDom.editor.saved.clean();
                        lenoteView.note.search(q);
                    }, true);
                }
            });
        },
        
        //当笔记有变化时，阻止F5、Ctrl+F5、关闭浏览器、后退/前进按钮等
        leave_warn: function(event){
            try{
                //if(lenoteDom && lenoteDom.editor.saved.is_need === true){
                if(lenoteDom.editor.isEditable()){
                    var a = lenoteDom.editor.data.attachments.build(true),
                          b = lenoteDom.editor.data.attachments.build(),
                          c = a.length !== b.length;                    
                }else{
                    var c = false;
                }
                if(lenoteDom && (lenoteDom.editor.saved.is_need === true || c)){
                    //如果是因为附件数不对，则自动触发保存
                    if(c) lenoteDom.editor.saved.setPoll(true);
                    
                    var msg = '点击"离开此页"，最近修改的笔记将不会被保存。点击"留在此页"，您将有机会保存此笔记。';
                    event = event || window.event;
                    if(event) event.returnValue = msg;
                    return msg;
                }
                //return;
            }catch(e){}
        },
        
        //检查笔记是否需要保存
        check_note: function(callback){
            //saved-自动保存: 切换星标、分享、所有笔记及退出时检查是否需要保存
            lenoteDom.editor.saved.check(function(){
                //切换笔记时重置saved状态
                lenoteDom.editor.saved.clean();
                if(typeof callback == 'function') callback();
            }, true);
        },
        
        //加载笔记本(组)的笔记列表
        _show_notebook: function(_this){
            $('#sidebar-b .toolbar .search input').val('').blur();
            var _id = $(_this).attr('id');
            //saved-自动保存: 切换分类时检查是否需要保存
            lenoteDom.editor.saved.check(function(){
                //切换笔记时重置saved状态
                lenoteDom.editor.saved.clean();
                lenoteView.note.getListByCategory(_id);
            }, true);
        },
        
        //箭头的展开与收起：笔记本组的打开与收起
        _arrow: function(_this){
            $(_this).parent('div.item').toggleClass('active').parent('li').children('ul').toggle();
        },
        
        //显示笔记
        _show_note: function(_this){
            var _id = $(_this).attr('id');
            //saved-自动保存: 切换笔记时检查是否需要保存
            lenoteDom.editor.saved.check(function(){
                //检查有没有改变笔记的分类
                if(lenoteDom.editor.saved.is_hold){
                    //lenoteDom.editor.saved.is_hold = false;
                    //var nid = lenoteDom.note.getSelected(true);
                    //if(nid) $('#sidebar-b .list-notes li#' + nid).remove();
                    $('#sidebar-b .list-notes li#' + lenoteDom.editor.saved.is_hold).remove();
                    lenoteDom.editor.saved.is_hold = null;
                }
                //切换笔记时重置saved状态
                lenoteDom.editor.saved.clean();
                lenoteView.note.show(_id);
            }, true);
        },
        
        //笔记本(组)的功能菜单
        _notebook_action: function(_this){
            lenoteDom.category.dropdown.show(_this);
        },
        //笔记本栏目的功能菜单
        _notebooks_action: function(_this){
            lenoteView.category.createNotebook();
        },
        
        //星标笔记的功能菜单
        _stars_action: function(_this){
            lenoteDom.category.dropdown.showStar(_this);
        },
        
        //标签栏目的功能菜单
        _tags_action: function(_this){
            lenoteDom.category.dropdown.showTags(_this);
        },
        
        //回收站的功能菜单
        _trash_action: function(_this){
            lenoteDom.category.dropdown.showTrash(_this);
        }
    };
})();