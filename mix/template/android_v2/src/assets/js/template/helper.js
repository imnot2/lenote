lenote.helper.extend(lenote.template, {helper: {
    //解析客户端返回的结果
    parseResult: function(data){
        return helper.parseJSON(data || {}, function(msg, stack){
            try{
                lenote.template.client.log('<MSG>' + msg + '<STACK>' + stack);
            }catch(e){
                //console.info(msg, stack);
            }
        });
    },
    
    //是否有内容长度限制
    hasMaxLength: function(dom){
        return dom.hasAttribute('maxlength');
    },
    
    //获取内容长度的限制
    getMaxLength: function(dom){
        if(this.hasMaxLength(dom)){
            var maxlength = parseInt(dom.getAttribute('maxlength'));
            return isNaN(maxlength)? null : maxlength;
        }
        return null;
    },
    
    setMaxlength: function(control, dom, callback){
        var maxlength = this.getMaxLength(dom);
        //检查有没有限制长度，如果有则替换为textarea
        if(maxlength && maxlength > 0){
            //数据控件不掺和定位布局的事情
            //var wrapper = document.createElement('div'),
            var textarea = document.createElement('textarea'),
                attributes = dom.attributes;
            //wrapper.className = 'wrapper';
            textarea.setAttribute('maxlength', maxlength);
            for(var i = 0; i < attributes.length; i++){
                var attribute = attributes[i];
                if(attribute.nodeName !== 'maxlength'){
                    var name = attribute.nodeName === 'placeholder'? '_placeholder' : attribute.nodeName;
                    textarea.setAttribute(name, attribute.nodeValue);
                }
            }
            //wrapper.appendChild(textarea);
            //dom.parentNode.replaceChild(wrapper, dom);
            dom.parentNode.replaceChild(textarea, dom);
            //if(helper.isFunction(callback)) callback({wrapper: wrapper, textarea: textarea});
            if(helper.isFunction(callback)) callback({textarea: textarea});
            //wrapper = dom = null;
            dom = null;
            return textarea;
        }
        return dom;
    },
    
    getPlaceholder: function(dom){
        var placeholder = '';
        if(helper.isTagNode(dom, 'div')){
            placeholder = dom.getAttribute('placeholder');
        }else{
            placeholder = dom.getAttribute('_placeholder');
        }
        return i18n.getValue(helper.stripTags(placeholder || ''));
    },
    
    setPlaceholder: function(control, dom, isFocus){
        var placeholder = this.getPlaceholder(dom);
        if(!placeholder) return;
        var content = control.get(dom);
        if(isFocus){
            if(content === placeholder) control.set(dom, {content: '', ignoreCheck: true});
        }else{
            if(content === '') control.set(dom, {content: placeholder, ignoreCheck: true});
        }
    },
    
    //检查省略号
    checkEllipsis: function(dom, isRemove){
        var next = dom.nextSibling, className = 'ells';
        if(isRemove === true){
            if(next && helper.hasClass(next, className)){
                dom.style.width = parseFloat(helper.getStyle(dom, 'width')) + next.offsetWidth + 'px';
                next.parentNode.removeChild(next);
            }
        }else if(!helper.hasClass(next, className)){
            if(dom.scrollWidth > dom.clientWidth){
                var span = document.createElement('span'),
                    id = helper.getRandomLetters(5),
                    color = helper.getStyle(dom, 'color'),
                    fontSize = helper.getStyle(dom, 'font-size');
                if(!color) color = '#fff';
                if(!fontSize) fontSize = '16px';
                span.id = id;
                span.className = className;
                span.innerText = '..';
                span.style.color = color;
                span.style.fontSize = fontSize;
                span.style.visibility = 'hidden';
                helper.insertAfter(span, dom);
                span = null;
                
                span = document.querySelector('#' + id);
                var times = 0,
                    interval = setInterval(function(){
                        if(span.offsetHeight > 0){
                            clearInterval(interval);
                            var position = helper.getPosition(dom),
                                position2 = helper.getPosition(span);
                            //position.left -= position2.left;
                            //position.top -= position2.top - dom.offsetHeight;
                            //position.top  = position.top + (dom.clientHeight - parseInt(helper.getStyle(dom, 'paddingTop')) - parseInt(helper.getStyle(dom, 'paddingBottom'))) - 
                            //                (position2.top + span.offsetHeight);
                            position.top  = position.top + (dom.offsetHeight - parseInt(helper.getStyle(dom, 'borderBottomWidth')) - parseInt(helper.getStyle(dom, 'paddingBottom'))) - 
                                            (position2.top + (span.offsetHeight - parseInt(helper.getStyle(span, 'borderBottomWidth')) - parseInt(helper.getStyle(span, 'paddingBottom')))) - 1;
                            span.style.top = position.top + 'px';
                            //span.style.left = position.left + 'px';
                            span.style.visibility = 'visible';
                            dom.style.width = parseFloat(helper.getStyle(dom, 'width')) - span.offsetWidth + 'px';
                            span = dom = null;
                            times = 0;
                        }else if(times++ > 5){
                            clearInterval(interval);
                            span.parentNode.removeChild(span);
                            span = dom = null;
                            times = 0;
                        }
                    }, 200);
            }
        }
    },
    
    getPlace: function(format, item){
        if(!format) return '';
        format = format.split(':');
        var dict = {
                co:'country',
                pr:'province',
                ci:'city',
                di:'district',
                st:'street',
                num:'streetNumber'
            },
            filter = {
                "北京市":1,
                "上海市":1,
                "天津市":1,
                "重庆市":1
            },
            result = '';
        
        for(var i = 0; i < format.length; i++){
            var f = format[i],
                pla = item[dict[f]];
            if(f == 'pr' && pla && filter[pla]) pla = '';
            //result += dict[f] && item[dict[f]] ? item[dict[f]] + ' ' : '';
            result += pla ? pla + ' ' : '';
        }
        return helper.trim(result);
    }
}});