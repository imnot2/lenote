(function(template){
    //var controls = template.controls, client = template.client, audio = template.controls.audio = {
    var controls = template.controls, client = template.client;
    template.controls.audio = {
        type: 512,
        
        bindEvent: function(control){
            //轻击
            Hammer(control).on('tap', function(event){
                //event.gesture.stopPropagation();
                event.stopPropagation();
                //id = this.getAttribute('id'), rid = this.getAttribute('rid'), classList = this.className;
                var id = controls.getID(this), rid = controls.getLocalID(this), classList = this.className;
                if(!id) return; //控件ID不存在时取消操作
                //需要判断有没有资源存在来决定如何响应
                if(rid){
                    if(helper.hasClass(classList, 'play')){
                        client.controls.audio.start(id, rid);
                    }else if(helper.hasClass(classList, 'stop')){
                        client.controls.audio.pause(id, rid);
                    }
                }else if(template.props.isEditing && !template.props.isExistMedia){
                    client.controls.audio.record(id);
                }
            });
            //长按
            Hammer(control).on('hold', function(event){
                event.stopPropagation();
                if(!template.props.isEditing || template.props.isExistMedia) return; //预览界面、正在播放时不允许长按事件
                var id = controls.getID(this), rid = controls.getLocalID(this);
                //还没有录制音频时不响应长按事件
                if(id && rid){
                    client.controls.audio.taphold(id, rid);
                }
            });
        },
        
        //{type: 0|1|2|3|4|5, rid:local_id, id: section_id}
        set: function(control, data){
            //检查资源的type与控件的_type是否相同，不同则不设置。用于以后支持模板套用功能
            if(data.type === this.type || data.ignoreCheck){
                if(data.rid){
                    //control.setAttribute(controls.attr_rid, data.rid);
                    control.className = 'audio play';
                }else{
                    this.unset(control);
                }
            }
            template.props.isExistMedia = false;
        },
        
        unset: function(control){
            control.className = 'audio';
        }
    };
})(lenote.template);