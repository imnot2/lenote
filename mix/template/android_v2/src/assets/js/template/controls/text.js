(function(template){
    var setPlaceholder = function(dom, isFocus){
            template.helper.setPlaceholder(text, dom, isFocus);
        }, setMaxlength = function(dom){
            return template.helper.setMaxlength(text, dom);
        }, controls = template.controls, text = template.controls.text = {
            type: 768,
            
            //是否检查Placeholder属性
            checkPlaceholder: true,
            //是否禁一次focus，解决循环触发focus问题
            forbidFocus: false,

            //是否为富文本
            isRichText: false,

            init:function(control){
                this.isRichText = control.getAttribute("isRichText");
            },

            parser: function(control){
                control = setMaxlength(control);
                setPlaceholder(control);
                return control;
            },
            
            //设置控件状态：可用或不可用
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
            
            //处理界面上的状态
            //var texts = document.querySelectorAll('[_type=text]');
            setUIState: function(control){
                if(template.props.isEditing){
                    var placeholder = template.helper.getPlaceholder(control),
                        v = this.get(control);
                    if(v !== '' && v !== placeholder){
                        control.classList.add('active');
                    }else if(v === '' && placeholder){
                        this.set(control, {content: placeholder, ignoreCheck: true});
                    }
                    //control.scrollLeft = 0;
                }else{
                    control.scrollLeft = 0;
                }
            },
            
            //控件获取焦点时的处理
            focus: function(control){
                setPlaceholder(control, true);
                if(!this.get(control)) control.focus();
            },
            
            bindEvent: function(control){
                control.addEventListener('focus', function(event){
                    helper.stopPropagation(event);
                    if(text.forbidFocus){
                        text.forbidFocus = false;
                        return;
                    }
                    if(!template.props.isEditing) return;
                    this.classList.add('active');
                    var placeholder = template.helper.getPlaceholder(this),
                        content = text.get(this);
                    if(placeholder && content !== '' && content === placeholder){
                        text.set(this, {content: '', ignoreCheck: true});
                        text.checkPlaceholder = false; //当blur时不检查placeholder时，用于解决当点击placeholder文字中间时无法获取光标的bug
                        text.forbidFocus = true;
                        this.blur();
                        this.focus();
                    }
                });
                control.addEventListener('blur', function(event){
                    helper.stopPropagation(event);
                    if(!template.props.isEditing) return;
                    this.scrollLeft = 0;
                    if(!text.checkPlaceholder){
                        text.checkPlaceholder = true;
                        return;
                    }
                    if(!text.get(this)){
                        this.classList.remove('active'); //如果没有内容则颜色恢复为灰色
                        setPlaceholder(this);
                    }
                });
                // if(this.isRichText){
                //     control.addEventListener('keydown', function(e){
                //         var keycode = e.keyCode, node, sel, rng;
                //         if(keycode == 13){
                //             node = document.createElement('br');
                //             sel = getSelection();
                //             rng = sel.getRangeAt(0);
                //             rng.insertNode(node);
                //             rng.setStartAfter(node);
                //             //rng.collapse();
                //             sel.removeAllRanges();
                //             sel.addRange(rng);
                //             e.preventDefault();
                //             //e.stopPropagation();
                //         }
                //     });
                // }
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
            },
            
            //该允许此控件返回内容给模板: 在客户端调用getContent时
            getContent: function(control){
                /*
                 * 改进: 用control.innerHTML在将来支持文本控件的格式化：如加粗、颜色等。
                 * 实现文本格式化的原理是：选中文字后，调用客户端弹出格式化工具条，然后选择加粗工具，客户端回调模板的api，模板根据工具名及当前选区进行加粗操作
                 * 保存笔记时，在getContent中将支持的格式标签转换成固定格式，然后再stripTags，然后再转为标准html格式
                 */
                var content = this.get(control),
                    placeholder = template.helper.getPlaceholder(control);
                if(!content || (placeholder && content === placeholder)) content = '';
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
                }else if(this.isRichText){
                    return control.innerHTML;
                }else{                    
                    //result = control.innerText || '';
                    if(isOrigin) return control.innerText;
                    result = control.innerHTML || '';
                    result = helper.getPlain(result); //暂不支持标签定义：粗体等
                    if(result !== control.innerHTML) this.set(control, {content: result, ignoreCheck: true});
                    return result;
                }
                //return isOrigin? result : helper.getPlain(result);
            },
            
            //{type: 0|1|2|3|4|5, rid:local_id, id: section_id, content:xxx}
            set: function(control, data){
                if(data.type === this.type || data.ignoreCheck){
                    //if(data.rid) control.setAttribute(controls.attr_rid, data.rid);
                    ////data.content = helper.getPlain(data.content);
                    //data.content = helper.html(helper.unhtml2(helper.getPlain(data.content)));
                    if(data.content || data.ignoreCheck){
                        if(helper.isTagNode(control, 'textarea')){
                            control.value = helper.trim(helper.html(helper.filterXSS(data.content)));
                        }else if(this.isRichText){
                            control.innerHTML = helper.filterXSS(data.content);
                        }else{
                            //data.content = helper.html(helper.unhtml2(helper.getPlain(data.content)));
                            //control.innerText = data.content;
                            data.content = helper.unhtml(helper.getPlain(data.content));
                            control.innerHTML = data.content;
                        }
                    }
                }
            },
            
            unset: function(control){
                this.set(control, {content: '', ignoreCheck: true});
                setPlaceholder(control);
            }
    };
})(lenote.template);