(function(template){
    var setMaxlength = function(dom){
            return template.helper.setMaxlength(contacts, dom);
        //}, controls = template.controls, client = template.client;
        //template.controls.contacts = {
        }, controls = template.controls, contacts = template.controls.contacts = {
            type: 1536,
            
            parser: function(control){
                control = setMaxlength(control);
                return control;
            },
            
            state: function(isDo, control){
                isDo = isDo && template.props.isEditing;
                if(helper.isTagNode(control, 'textarea')){
                    template.helper.checkEllipsis(control, isDo);
                    if(isDo){
                        control.removeAttribute('readonly');
                        //control.removeAttribute('disabled');
                    }else{
                        control.setAttribute('readonly', 'readonly');
                        //control.setAttribute('disabled', 'disabled');
                    }
                }else{
                    if(isDo){
                        control.setAttribute('contenteditable', true);
                    }else{ //使控件不响应操作，如录音时、文本控件应不能获取焦点弹出键盘
                        control.setAttribute('contenteditable', false);
                    }
                }
            },
            
            setUIState: function(control){
                if(!template.props.isEditing){
                    control.scrollLeft = 0;
                }
            },
            
            bindEvent: function(control){
                //control.addEventListener('keydown', function(event){
                //    helper.stopPropagation(event);
                //    if(!template.props.isEditing) return;
                //    if(template.helper.hasMaxLength(this) && event.keyCode === 13){
                //        event.returnValue = false; //有长度限制的控件禁止输入回车符
                //        client.setKeyboard(false); //隐藏键盘
                //        this.blur();
                //        return false;
                //    }
                //});
                control.addEventListener('blur', function(event){
                    helper.stopPropagation(event);
                    if(!template.props.isEditing) return;
                    this.scrollLeft = 0;
                });
            },
            
            getContent: function(control){
                var content = this.get(control);
                if(!content) return '';
                return {
                    rid: controls.getLocalID(control), id: controls.getID(control),
                    type: this.type, content: helper.filterXSS(content)
                };
            },
            
            get: function(control, isOrigin){
                var result = '';
                if(helper.isTagNode(control, 'textarea')){
                    result = control.value;
                    return isOrigin? result : helper.trim(result);
                }else{
                    if(isOrigin) return control.innerText;
                    result = control.innerHTML || '';
                    result = helper.getPlain(result); //暂不支持标签定义：粗体等
                    if(result !== control.innerHTML) this.set(control, {content: result, ignoreCheck: true});
                    return result;
                }
            },
            
            set: function(control, data){
                if(data.type === this.type || data.ignoreCheck){
                    if(data.content || data.ignoreCheck){
                        if(helper.isTagNode(control, 'textarea')){
                            control.value = helper.trim(helper.html(helper.filterXSS(data.content)));
                        }else{
                            data.content = helper.unhtml(helper.getPlain(data.content));
                            control.innerHTML = data.content;
                        }
                    }
                }
            },
            
            unset: function(control){
                this.set(control, {content: '', ignoreCheck: true});
            }
    };
})(lenote.template);