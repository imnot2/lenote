(function(template){
	var weatherTxtObj = {
            0:"晴",
            1:"多云",
            2:"阴",
            3:"阵雨",
            4:"雷阵雨",
            5:"雷阵雨伴有冰雹",
            6:"雨夹雪",
            7:"小雨",
            8:"中雨",
            9:"大雨",
            10:"暴雨",
            11:"大暴雨",
            12:"特大暴雨",
            13:"阵雪",
            14:"小雪",
            15:"中雪",
            16:"大雪",
            17:"暴雪",
            18:"雾",
            19:"冻雨",
            20:"沙尘暴",
            21:"小雨-中雨",
            22:"中雨-大雨",
            23:"大雨-暴雨",
            24:"暴雨-大暴雨",
            25:"大暴雨-特大暴雨",
            26:"小雪-中雪",
            27:"中雪-大雪",
            28:"大雪-暴雪",
            29:"浮尘",
            30:"扬沙",
            31:"强沙尘暴",
            32:"霾"
        }
        ,setWeatherImage = function(control, type, noSetProp){
            /*jslint scripturl: true, sub: true */
            control.setAttribute('onerror', "javascript:this.removeAttribute('onerror');this.src='" + template._options.path['weather'] + "/" + type + ".png'");
            control.setAttribute('src', weather.path + '/' + type + '.png?' + (new Date()).getTime());
            needShowTxt = control.getAttribute("txt"),
            txtWray = control.parentNode.querySelector("span");
            if(needShowTxt && txtWray) txtWray.innerText = weatherTxtObj[""+type+""];
            if(!noSetProp) control.setAttribute(weather.valueProp, type);
        }, controls = template.controls, client = template.client, weather = template.controls.weather = {
            type: 1792,
            
            valueProp: '_value',
            
            defaultWeather: '0',
            
            parser: function(control){
                if(this.path === template._options.path.weather) this.path = './images/weather';
                setWeatherImage(control, this.defaultWeather, true);
                control.setAttribute('auto', '');
            },
            
            autoSet: function(control){
                if(template.props.isEditing && !control.hasAttribute(this.valueProp)){
                    try{
                        client.getWeather(controls.getID(control));
                    }catch(e){}
                }
            },
            
            bindEvent: function(control){
                Hammer(control).on('tap', function(event){
                    event.stopPropagation();
                    if(!template.props.isEditing) return;
                    var id = controls.getID(this), value = weather.get(this);
                    client.controls.weather(id, value);
                });
            },
            
            get: function(control){
                var value = control.getAttribute(this.valueProp);
                return value? value : this.defaultWeather;
            },
            
            set: function(control, data){
                if(data.type === this.type || data.ignoreCheck){
                    if(helper.isObject(data.content)) data.content = data.content.weatherCode;
                     setWeatherImage(control, data.content);
                }
            }
        };
})(lenote.template);