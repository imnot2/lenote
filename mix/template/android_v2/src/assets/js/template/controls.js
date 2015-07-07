(function(template){
    var client = template.client, controls = template.controls = {
        type: 128,  //通用类型
        attr_type: '_type',
        attr_id: 'id',
        attr_rid: 'rid',
        startX: 0,
        
        //初始化控件的placeholder、编辑状态、事件绑定、添加同名class、自动触发需要默认值的控件方法
        init: function(entity){
            var _type = this.getType(entity), control;
            entity.classList.add(_type);
            if(template.helper.hasMaxLength(entity)) entity.classList.add('ellipsis');
            /* jshint boss: true */
            if(control = controls[_type]){
                var r = null;
                if(control.parser) r = control.parser(entity);
                //控件初始化时可能发生替换
                if(r) entity = r;
                //if(template.props.isEditing){
                //    if(control.state) control.state(true, entity);
                //}
                if(control.init) control.init(entity);
                if(control.state) control.state(template.props.isEditing, entity);
                if(control.bindEvent) control.bindEvent(entity); //控件的事件绑定: 单击、长按等
                //if(control.ended) control.ended(entity);
            }
            //this.bindEvent();
        },
        
        //获取控件类型
        getType: function(entity){
            return entity.getAttribute(this.attr_type);
        },
        
        //获取控件ID
        getID: function(entity){
            return entity.getAttribute(this.attr_id);
        },
        
        //获取local_id
        getLocalID: function(entity){
            return entity.getAttribute(this.attr_rid);
        },
        
        isText: function(entity){
            return this.getType(entity) === 'text';
        },
        
        //绑定全局事件
        bindEvent: function(){
            //弹出键盘时自动定位
            window.addEventListener('resize', function(event){
                helper.stopPropagation(event);
                var currentElem = document.activeElement;
                if(currentElem && controls.isText(currentElem)){ //仅处理文本控件
                    //document.body.scrollTop = helper.getPosition(currentElem).top + currentElem.offsetHeight;
                    document.body.scrollTop = helper.getPosition(currentElem).top - 5;
                }
            });
            
            //label监听
            var labels = document.querySelectorAll('label');
            for(var i = 0; i < labels.length; i++){
                var label = labels[i];
                //jslint的注释语句的作用域与js定义一样，以{}区分; 多个属性设置时以,间隔。属性列表参考jshint.js文件boolOptions定义。
                /*jslint loopfunc: true */
                label.addEventListener('click', function(event){
                    helper.stopPropagation(event);
                    if(!template.props.isEditing) return;
                    var target = helper.stripTags(this.getAttribute('for')),
                        t = target && document.querySelector('#' + target);
                    if(t){
                        var _type = controls.getType(t), control;
                        /* jshint boss: true */
                        if(control = controls[_type]){
                            if(control.focus){
                                control.focus(t);
                            }
                        }
                    }
                });
            }
            
            //监听maxlength
            var entities = document.querySelectorAll('[maxlength]');
            for(var j = 0; j < entities.length; j++){
                var entity = entities[j];
                /*jslint loopfunc: true */
                //监听oninput字数超出限制时提示用户
                entity.addEventListener('keydown', function(event){
                    helper.stopPropagation(event);
                    if(!template.props.isEditing) return;
                    if(event.keyCode === 13){
                        event.returnValue = false; //有长度限制的控件禁止输入回车符
                        client.setKeyboard(false); //隐藏键盘
                        this.blur();
                        return false;
                    }else{
                        var _type = controls.getType(this), control;
                        /* jshint boss: true */
                        if(control = controls[_type]){
                            var max = template.helper.getMaxLength(this);
                            if(max){
                                var len = control.get(this, true).length;
                                len += (event.keyCode === 8? -1 : 1);
                                if(len > max) client.showToast(i18n.getValue('Range_Overflow', max));
                            }
                        }
                    }
                });
                //Hammer(entity).on('tap', function(event){
                entity.addEventListener('click', function(event){
                    event.stopPropagation();
                    if(this.hasAttribute('readonly')){ //预览界面阻止有readonly属性的textarea弹出键盘-这是android webview的一个bug
                        this.blur();
                        return false;
                    }
                    if(this.scrollWidth > this.clientWidth){
                        var _type = this.getAttribute(controls.attr_type),
                            control, len, half, minus, start, end, x = 3;
                        /* jshint boss: true */
                        if(control = controls[_type]){
                            len = this.scrollWidth / control.get(this, true).length;
                            half = this.clientWidth / x;
                            //start = event.gesture.target.selectionStart;
                            //end = event.gesture.target.selectionEnd;
                            start = event.target.selectionStart;
                            end = event.target.selectionEnd;
                            if(start === end){
                               minus = start * len - this.scrollLeft;
                               if(minus < half){
                                  this.scrollLeft -= half - minus;
                               }else if(minus > (x - 1) * half){
                                  this.scrollLeft += minus - (x - 1) * half;
                               }
                            }
                        }
                    }
                });
                //滑动事件
                entity.addEventListener('touchstart', function(event){
                    if(event.targetTouches.length === 1 && this.scrollWidth > this.clientWidth){
                        event.preventDefault();
                        controls.startX = this.scrollLeft + event.targetTouches[0].pageX;
                    }
                });
                entity.addEventListener('touchmove', function(event){
                    if(event.targetTouches.length === 1 && this.scrollWidth > this.clientWidth){
                        helper.stopPropagation(event);
                        event.preventDefault();
                        this.scrollLeft = controls.startX - event.targetTouches[0].pageX;
                        //检查..
                        var next = this.nextSibling;
                        if(next && helper.hasClass(next, 'ells')){
                            if(this.scrollLeft + this.clientWidth === this.scrollWidth){
                                next.style.visibility = 'hidden';
                            }else{
                                next.style.visibility = 'visible';
                            }
                        }
                        next = null;
                    }
                }, false);
                
            }
        },
        
        //对于天气和地理位置等控件来说，需要自动获取-当设置内容后且控件内容为空时
        autoSet: function(){
            var entities = document.querySelectorAll('[auto]');
            for(var i = 0; i < entities.length; i++){
                var entity = entities[i],
                    _type = this.getType(entity),
                    control;
                /* jshint boss: true */
                if(control = controls[_type]){
                    if(control.autoSet) control.autoSet(entity);
                }
            }
        },
        
        set: function(id, data){
            if(!id || !data) return false;
            id = helper.stripSpace(id);
            var entity = id && document.querySelector('#' + id);
            if(!entity) return;
            data = data || {};
            var _type = this.getType(entity), control;
            /* jshint boss: true */
            if(control = controls[_type]){
                if((data.type === control.type || data.ignoreCheck) && data.rid) entity.setAttribute(this.attr_rid, data.rid);
                if(control.set) control.set(entity, data);
                if(helper.isFunction(template.api.hooks.control.set)) template.api.hooks.control.set(id, data);
            }
        },
        
        unset: function(id){
            if(!id) return false;
            id = helper.stripSpace(id);
            var entity = id && document.querySelector('#' + id);
            if(!entity) return;
            var _type = this.getType(entity), control;
            /* jshint boss: true */
            if(control = controls[_type]){
                entity.removeAttribute(this.attr_rid);
                if(control.unset) control.unset(entity);
                if(helper.isFunction(template.api.hooks.control.unset)) template.api.hooks.control.unset(id);
            }
        },
        
        //获取控件的内容提交保存
        getContent: function(entity){
            //当有local_id时表示这是一个已经存在的资源，否则就是新的资源
            if(!entity) return;
            var _type = this.getType(entity), control;
            /* jshint boss: true */
            if(control = controls[_type]){
                if(control.getContent) return control.getContent(entity);
            }
            return null;
        },
        
        //批量更新控件的状态
        state: function(isDo, entities){
            if(!entities) entities = document.querySelectorAll('[' + this.attr_type + ']');
            for(var i = 0; i < entities.length; i++){
                var entity = entities[i], _type = this.getType(entity), control;
                /* jshint boss: true */
                if(control = controls[_type]){
                    if(control.state) control.state(isDo, entity);
                }
            }
        },
        
        //预览界面与编辑界面切换时的操作
        setUIState: function(){
            var entities = document.querySelectorAll('[' + this.attr_type + ']');
            for(var i = 0; i < entities.length; i++){
                var entity = entities[i], _type = this.getType(entity), control;
                /* jshint boss: true */
                if(control = controls[_type]){
                    if(control.setUIState) control.setUIState(entity);
                    if(control.state) control.state(template.props.isEditing, entity);
                }
            }
        },
        
        //设置options
        setOptions: function(options){
            for(var prop in options){
                var option = options[prop];
                if(helper.isObject(option)){
                    for(var _type in option){
                        var control = this[_type];
                        if(control) control[prop] = option[_type];
                    }
                }else{
                    this[prop] = option;
                }
            }
        }
    };
})(lenote.template);