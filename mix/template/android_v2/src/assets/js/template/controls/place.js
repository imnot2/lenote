(function(template){
    var setPlaceholder = function(dom, isFocus){
            template.helper.setPlaceholder(place, dom, isFocus);
        }, setMaxlength = function(dom){
            return template.helper.setMaxlength(place, dom);
        }, controls = template.controls, client = template.client, place = template.controls.place = {
            type: 1664,
            
            //是否检查Placeholder属性
            checkPlaceholder: true,
            //是否禁一次focus，解决循环触发focus问题
            forbidFocus: false,
            
            initContentProp: 'content',
            
            formatProp: 'format',
            
            parser: function(control){
                control = setMaxlength(control);
                setPlaceholder(control);
                control.setAttribute('auto', '');
                return control;
            },
            
            state: function(isDo, control){
                isDo = isDo && template.props.isEditing;
                if(helper.isTagNode(control, 'textarea')){
                    template.helper.checkEllipsis(control, isDo);
                    if(isDo){
                        control.removeAttribute('readonly');
                    }else{
                        control.setAttribute('readonly', 'readonly');
                    }
                }else{
                    if(isDo){
                        control.setAttribute('contenteditable', true);
                    }else{
                        control.setAttribute('contenteditable', false);
                    }
                }
            },
            
            setUIState: function(control){
                if(template.props.isEditing){
                    var placeholder = template.helper.getPlaceholder(control),
                        v = this.get(control);
                    if(v !== '' && v !== placeholder){
                        control.classList.add('active');
                    }
                }else{
                    control.scrollLeft = 0;
                }
            },
            
            bindEvent: function(control){
                control.addEventListener('focus', function(event){
                    helper.stopPropagation(event);
                    if(place.forbidFocus){
                        place.forbidFocus = false;
                        return;
                    }
                    if(!template.props.isEditing) return;
                    this.classList.add('active');
                    var placeholder = template.helper.getPlaceholder(this),
                        content = place.get(this);
                    if(content === '' || content === placeholder){
                        place.set(this, {content: '', ignoreCheck: true});
                        place.checkPlaceholder = false; //当blur时不检查placeholder时，用于解决当点击placeholder文字中间时无法获取光标的bug
                        place.forbidFocus = true;
                        this.blur();
                        this.focus();
                    }
                });
                control.addEventListener('blur', function(event){
                    helper.stopPropagation(event);
                    if(!template.props.isEditing) return;
                    this.scrollLeft = 0;
                    if(!place.checkPlaceholder){
                        place.checkPlaceholder = true;
                        return;
                    }
                    if(!place.get(this)){
                        this.classList.remove('active'); //如果没有内容则颜色恢复为灰色
                    }
                });
            },
            
            autoSet: function(control){
                var content = this.get(control);
                if(!content){
                    this.state(false, control);
                    //this.set(control, {content: i18n.getValue('place_loading'), ignoreCheck: true});
                    try{
                        client.getGeoLocation(controls.getID(control));
                    }catch(e){}
                }
            },
            
            getContent: function(control){
                var content = this.get(control),
                    isChange = content !== control.getAttribute(this.initContentProp);
                //if(!content) return;
                return {
                    rid: controls.getLocalID(control), id: controls.getID(control),
                    type: this.type, content: helper.filterXSS(content), placeContentIsChange: isChange
                };
            },
            
            get: function(control, isOrigin){
                var result = '', placeholder = template.helper.getPlaceholder(control);
                if(helper.isTagNode(control, 'textarea')){
                    result = control.value;
                    result = isOrigin? result : helper.trim(result);
                }else{
                    if(isOrigin) return control.innerText;
                    result = helper.getPlain(control.innerHTML || '');
                    if(result !== control.innerHTML) this.set(control, {content: result, ignoreCheck: true});
                }
                //return result === i18n.getValue('place_loading')? '' : result;
                return result === placeholder? '' : result;
            },
            
            set: function(control, data){
                if(data.type === this.type || data.ignoreCheck){
                    if(data.content || data.ignoreCheck){
                        if(helper.isObject(data.content)){
                            data.content = template.helper.getPlace(control.getAttribute(this.formatProp), data.content);
                        }
                        
                        if(helper.isTagNode(control, 'textarea')){
                            control.value = helper.trim(helper.html(helper.filterXSS(data.content)));
                        }else{
                            data.content = helper.unhtml(helper.getPlain(data.content));
                            control.innerHTML = data.content;
                        }
                        
                        var placeholder = template.helper.getPlaceholder(control);
                        //if(!control.hasAttribute(this.initContentProp) && data.content !== i18n.getValue('place_loading')){
                        if(!control.hasAttribute(this.initContentProp) && data.content !== placeholder){
                            control.classList.add('active');
                            control.setAttribute(this.initContentProp, data.content);
                            this.state(true, control);
                        }
                    }
                }
            }
        };
})(lenote.template);