(function(template){
    var setDefaultImage = function(control){
        //control.setAttribute('onerror', "javascript:this.src='" + image.path + "/' + (lenote.template.api.template.editable()? '" + image.path.edit + "' : '" + image.path.view + "')");
        //control.setAttribute('src', './images/' + (template.props.isEditing? image.path.edit : image.path.view));
        /*jslint scripturl: true, sub: true, -W014: false */
        control.setAttribute('onerror',
                             "javascript:this.removeAttribute('onerror');this.src='" + template._options.path.image.url
                             + "/' + (lenote.template.api.template.editable()? '" + template._options.path.image.edit
                             + "' : '" + template._options.path.image.view + "')");
        control.setAttribute('src', image.path.url + '/' + (template.props.isEditing? image.path.edit : image.path.view));
    }, setDefaultHoverImage = function(control){
        /*jslint scripturl: true, sub: true */
        control.setAttribute('onerror', "javascript:this.removeAttribute('onerror');this.src='" + template._options.path.image.url + "/" + template._options.path.image.edit_hover + "'");
        control.setAttribute('src', image.path.url + '/' + image.path.edit_hover);
    }, setLoadImage = function(control){
        //control.setAttribute('onerror', "javascript:this.src='" + image.path + "/" + image.path.load + "'");
        //control.setAttribute('src', './images/' + image.path.load + '?' + (new Date()).getTime());
        /*jslint scripturl: true, sub: true */
        //control.setAttribute('onerror', "javascript:this.removeAttribute('onerror');this.src='" + template._options.path.image.url + "/" + template._options.path.image.load + "'");
        //control.setAttribute('src', image.path.url + '/' + image.path.load + '?' + (new Date()).getTime());
        control.removeAttribute('src');
        control.style.background = 'url('+template._options.path.image.url + "/" + template._options.path.image.load+') no-repeat center scroll';        
    }, controls = template.controls, client = template.client, image = template.controls.image = {
        type: 256,
        
        parser: function(control){
            if(this.path.url === template._options.path.image.url) this.path.url = './images/image';
            //当模板图片不存在时用系统默认的
            setDefaultImage(control);
        },
        
        //var images = document.querySelectorAll('[_type=image]:not([rid])');
        setUIState: function(control){
            var rid = controls.getLocalID(control);
            if(!rid){
                setDefaultImage(control);
            }
        },
        
        bindEvent: function(control){
            Hammer(control).on('tap', function(event){
                event.stopPropagation();
                var id = controls.getID(this), rid = controls.getLocalID(this);
                if(!id) return;
                if(rid){
                    client.controls.image.preview(id, rid);
                }else if(template.props.isEditing){
                    setDefaultHoverImage(this);
                    client.controls.image.openCamera(id, helper.getWidth(this), helper.getHeight(this));
                    var _this = this;
                    setTimeout(function(){
                        setDefaultImage(_this);
                        _this = null;
                    }, 200);
                }
            });
            Hammer(control).on('hold', function(event){
                event.stopPropagation();
                if(!template.props.isEditing) return;
                var id = controls.getID(this), rid = controls.getLocalID(this);
                if(id && rid){
                    client.controls.image.taphold(id, rid, helper.getWidth(this), helper.getHeight(this));
                }
            });
        },
        
        //{type: 0|1|2|3|4|5, rid:local_id, id: section_id, src:xxx}
        set: function(control, data){
            if(data.type === this.type || data.ignoreCheck){
                if(data.rid){
                    //control.setAttribute(controls.attr_rid, data.rid);
                    control.classList.add('active');
                    if(data.src){
                        control.removeAttribute('onerror');
                        control.setAttribute('src', data.src + '?' + (new Date()).getTime());
                    }else{
                        //图片不存在时，通知客户端生成，并且在成功后调用section.set方法通知模板刷新该图片
                        setLoadImage(control);
                        client.controls.image.createThumbs(controls.getID(control), data.rid, helper.getWidth(control), helper.getHeight(control));
                    }
                }else{
                    this.unset(control);
                }
            }
        },
        
        unset: function(control){
            //control.removeAttribute(controls.attr_rid);
            control.classList.remove('active');
            setDefaultImage(control);
        }
    };
})(lenote.template);