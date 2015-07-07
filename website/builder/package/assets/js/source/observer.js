/*
 *  author: gejian1@lenovo.com
 *  description: 页面事件监听
 */
(function($){
    //事件分配函数
    function dispatch(options){
        //新事件需要在此注册，否则将不被分配
        var defaults = {_event: 'click', monitor: '', actions: ['_show_notebook', '_arrow', '_show_note',
        '_notebook_action', '_notebooks_action', '_stars_action', '_tags_action', '_trash_action']};
        options = $.extend(defaults, options);
        
        if(options.monitor){
            $(options.monitor).unbind(options._event).bind(options._event, function(event){
                //因为阻止了事件冒泡，所以event.target等同于this对象
                //if(event.isPropagationStopped) event.stopPropagation();
                //if(event.isDefaultPrevented()) event.preventDefault();
                try{
                   if(!event.isPropagationStopped()) event.stopPropagation();
                   if(!event.isDefaultPrevented()) event.preventDefault();
                }catch(e){}
                
                //当点击了除body外的其它元素时自动移除弹出的菜单，当被点击的目标元素有dropdown时不移除事件交由被点击元素自己去处理
                if(event.type == 'click' && !$(event.target).hasClass('dropdown')){
                   lenoteDom.dropdown.remove();
                }
                
                var _class = $(this).attr('class'), _c = null;
                if(_class){
                    _class = _class.match(/e_\w+/i);
                    if (_class && _class.length == 1){
                        _c = _class[0].slice(1).toLowerCase();
                        if(_c && $.inArray(_c, options.actions) != -1){
                            lenoteEvent[_c](this);
                        }
                    }
                }
                return false;
            });
        }
    }
    
    //事件监听函数
    lenoteObserver = {
        //笔记本（组）的相关事件
        categories: function(){
            //展开与收起笔记本（组）
            dispatch({monitor: '#sidebar-a .list .icon-arrow, #sidebar-a .list .icon-arrow-gray'});
            
            //监听笔记本（组）之笔记列表加载及边栏side-bar所有菜单的右键功能菜单(笔记本(组)、标签、星标笔记等)
            dispatch({monitor: '#sidebar-a .list-categories li, #sidebar-a .icon-action'});
            $('#sidebar-a li, #sidebar-a li .item').smartHover();
        },
        
        //指示箭头相关事件
        arrow: function(id){
            dispatch({monitor: '#' + id + ' .icon-arrow, #' + id + ' .icon-arrow-gray'});
        },
        
        //监听笔记本（组）及右键功能菜单
        category: function(id){
            var li = '#' + id;
            dispatch({monitor: li + ', ' + li + ' .icon-action'});
            $(li + ',' + li + ' .item').smartHover();
        },
        
        //笔记列表单篇笔记监听
        note: function(id){
            var li = '#sidebar-b .list-notes li#' + id;
            dispatch({monitor: li});
            $(li + ',' +  li + ' .item').smartHover();
        }
    };
})(jQuery);