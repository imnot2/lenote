(function(template){
    //var controls = template.controls, client = template.client, date = template.controls.date = {
    var controls = template.controls, client = template.client;
    template.controls.date = {
        type: 1408,
        
        parser: function(control){
            /*jslint supernew: true */
            //this.set(control, {timestamp: (new Date).getTime(), ignoreCheck: true});
            control.setAttribute('auto', '');
        },
        
        autoSet: function(control){
            /*jslint supernew: true */
            var content = control.getAttribute('timestamp');
            if(!content) this.set(control, {timestamp: (new Date).getTime(), ignoreCheck: true});
        },
        
        bindEvent: function(control){
            Hammer(control).on('tap', function(event){
               event.stopPropagation();
               if(!template.props.isEditing) return;
               var id = controls.getID(this);
               if(id){
                    client.controls.date.select(id, this.getAttribute('timestamp'));
               }
            });
        },

        //{type: 0|1|2|3|4|5, rid:local_id, id: section_id, timestamp:xxx}
        set: function(control, data){
            if(data.type === this.type || data.ignoreCheck){
                if(data.rid || data.ignoreCheck){
                    data.timestamp = helper.dateTime.getTimestamp(data.timestamp); //检验时间戳并获取正确的时间戳
                    //if(data.rid) control.setAttribute(controls.attr_rid, data.rid);
                    control.setAttribute('timestamp', data.timestamp);
                    var children = control.querySelectorAll('[format]');
                    for(var i = 0; i < children.length; i++){
                        var child = children[i], result = helper.dateTime.format(data.timestamp, child.getAttribute('format'));
                        child.innerText = result;
                    }
                }
            }
        },
        
        unset: function(control){
            //control.removeAttribute(controls.attr_rid);
            control.removeAttribute('timestamp');
            //设置为当前时间
            /*jslint supernew: true */
            this.set(control, {timestamp: (new Date).getTime(), ignoreCheck: true});
        }
    };
})(lenote.template);