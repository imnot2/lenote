(function(template){
    var setMoodImage = function(control, type){
            /*jslint scripturl: true, sub: true */
            control.setAttribute('onerror', "javascript:this.removeAttribute('onerror');this.src='" + template._options.path['mood'] + "/" + type + ".png'");
            control.setAttribute('src', mood.path + '/' + type + '.png?' + (new Date()).getTime());
            control.setAttribute(mood.valueProp, type);
        }, controls = template.controls, client = template.client, mood = template.controls.mood = {
            type: 2048,
            
            valueProp: '_value',
            
            defaultMood: '0',
            
            parser: function(control){
                if(this.path === template._options.path.mood) this.path = './images/mood';
                setMoodImage(control, this.defaultMood);
            },
            
            bindEvent: function(control){
                Hammer(control).on('tap', function(event){
                   event.stopPropagation();
                   if(!template.props.isEditing) return;
                   var id = controls.getID(this), value = mood.get(this);
                   client.controls.mood(id, value);
                });
            },
            
            get: function(control){
                var value = control.getAttribute(this.valueProp);
                return value? value : this.defaultMood;
            },
            
            set: function(control, data){
                if(data.type === this.type || data.ignoreCheck){
                    setMoodImage(control, data.content);
                }
            }
        };
})(lenote.template);