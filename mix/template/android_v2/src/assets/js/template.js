/*
 * Demo
 * lenote.template.init(true)
 * lenote.template.setContent([{type: 2, rid:'xxx', id: 'image_1', src:'http://www.baidu.com/img/bdlogo.gif'}])
 */
(function(){
    var assetsPath = '../../assets',
        imagePath = assetsPath + '/images',
        tplID = 'ln-tpl',
        interval = null,
        times = 0,
        UISwitch = function(isEditable){ //编辑与预览界面切换
            var tplWrapper = document.querySelector('#' + tplID);
            if(tplWrapper){
                if(isEditable){
                    tplWrapper.classList.remove('view');
                    tplWrapper.classList.add('edit');
                }else{
                    tplWrapper.classList.remove('edit');
                    tplWrapper.classList.add('view');
                }
            }
        };
    
    var template = lenote.template = {
    //lenote.template = {
        //控件默认设置，模板可以自定义该值从而改变音频/图片等控件的默认值
        options: {
            path: {
                audio: imagePath + '/audio',
                //image: imagePath + '/image',                
                image: {
                    url: imagePath + '/image',
                    edit: 'default.png',
                    edit_hover: 'default_hover.png',
                    view: 'image.png',
                    load: 'loading.gif' 
                },
                mood: imagePath + '/mood',
                weather: imagePath + '/weather'
            }
        },
        //模板属性
        props: {
            deviceInfo: {},        //设备信息(如设备的宽、高)
            isExistMedia: false,   //是否在录音或播放媒体文件
            isEditing: false,      //是否是编辑界面，否则为预览界面
            lang: 'zh-cn'          //简体中文
        },
        
        //模板自定义配置
        setOptions: function(options){
            if(!this._options) this._options = helper.clone(this.options);            
            if(helper.isObject(options) && !helper.isEmptyObject(options)) helper.extend2(this.options, options || {}, false, true, true);            
            this.controls.setOptions(this.options);
        },
        
        getLang: function(){
            return this.props.lang;
        },
        
        setLang: function(language){
            this.props.lang = i18n.setLang(language);
            this.layout.translate();
        },
        
        //模板初始化, @isEditable 表示是否可编辑、@options 自定义模板配置、@language指定模板当前语言
        init: function(isEditable, language){
            var tplWrapper = document.querySelector('#' + tplID);
            if(tplWrapper.hasAttribute('init')) return false;
            if(!this._options) this._options = helper.clone(this.options);
            this.setLang(language);
            this.props.isEditing = helper.isTrue(isEditable);
            UISwitch(this.props.isEditing);
            this.layout.init();
            if(tplWrapper) tplWrapper.setAttribute('init', true);
        },
        
        //模板加载后，使模板可视并隐藏正在加载的提示
        isVisible: function(isDisplay){
            function handle(){
                isDisplay = helper.isTrue(isDisplay);
                if(isDisplay){
                    template.layout.showLoading(isDisplay);
                    helper.setVisible(tplWrapper, isDisplay);
                    //触发需要初始化数据的控件
                    template.controls.autoSet();
                }else{
                    helper.setVisible(tplWrapper, isDisplay);
                    template.layout.showLoading(isDisplay);
                    document.body.scrollTop = 0;
                }
            }
            
            clearInterval(interval);
            interval = null;
            times = 0;
            var tplWrapper = document.querySelector('#' + tplID);
            if(tplWrapper && tplWrapper.getAttribute('init') === 'true'){
                handle();
                tplWrapper = null;
            }else if(tplWrapper){
                interval = setInterval(function(){
                    times++;
                    if(tplWrapper && tplWrapper.getAttribute('init') === 'true'){
                        handle();
                        times = 100;
                    }
                    if(times > 10){
                        clearInterval(interval);
                        tplWrapper = interval = null;
                    }
                }, 200);
            }
        },
        
        //设置模板是编辑还是预览状态
        setUIState: function(isEditable){
            this.props.isEditing = helper.isTrue(isEditable);
            //var tplWrapper = document.querySelector('#' + tplID);
            //if(tplWrapper){
                this.controls.setUIState();
                UISwitch(this.props.isEditing);
            //}
        },
        
        //获取模板内容以保存笔记
        getContent: function(isPrint){
            //仅返回文本控件的信息，其它控件的信息包括正文内容、笔记的ID由客户端自己维护保存
            //controls = document.querySelectorAll('[_type="text"],[_type="contacts"]')
            var controls = document.querySelectorAll('[' + this.controls.attr_type + ']'), result = [];
            for(var i = 0; i < controls.length; i++){
                var content = this.controls.getContent(controls[i]);
                if(content && helper.isObject(content)) result.push(content);
            }
            if(isPrint) console.info(helper.stringify(result));
            this.client.setResult('getContent', result); //java不支持javascript直接返回结果
        },
        
        /*
         * 传递数据初始化模板内容
         *  @data的格式同getContent接口，如"[{rid:null,id:title,type:4,content:''},...]" 
         *  音频：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID}
         *  图片：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, src:图片地址}
         *  日期：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, timestamp:时间戳}
         *  文本：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, content:内容}
         *  联系人：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, content:成员列表字符串,以,号间隔}
         */
        setContent: function(data){
            data = this.helper.parseResult(data);
            //检查是否是数组
            //if(data && data.length > 0){
            if(helper.isArray(data)){
                for(var i = 0; i < data.length; i++){
                    var d = data[i];
                    if(helper.isString(d)) d = this.helper.parseResult(d);
                    this.sections.set(d.id, d);
                }
            }
            var _this = this;
            setTimeout(function(){                
                _this.isVisible(true); //数据填充完成后使模板可视
                _this.setUIState(_this.props.isEditing); 
            },1);         
        },
        
        sections: {
            //填充section
            set: function(id, data){
                if(!helper.isObject(data)) data = template.helper.parseResult(data);
                //id && data && template.controls.set(id, data);
                template.controls.set(id, data);
            },
            //删除section内容
            del: function(id){
                //id && template.controls.unset(id);
                template.controls.unset(id);
            }
        },
        
        //音频控制
        audio: {
            play: function(id){ //更新状态为播放
                id = helper.stripSpace(id);
                var control = id && document.querySelector('#' + id);
                if(!control) return;
                if(helper.hasClass(control, 'play')) control.className = 'audio stop';
                this.isRecording(id, true);
            },
            pause: function(id){ //更新状态为暂停
                id = helper.stripSpace(id);
                var control = id && document.querySelector('#' + id);
                if(!control) return;
                if(helper.hasClass(control, 'stop')) control.className = 'audio play';
            },
            stop: function(id){ //更新状态为停止
                this.pause(id);
                this.isRecording(id, false);
            },
            isRecording: function(id, _isRecording){
                id = helper.stripSpace(id);
                var control = id && document.querySelector('#' + id);
                if(!control) return;
                _isRecording = helper.isTrue(_isRecording);
                if(_isRecording){
                    template.props.isExistMedia = true;
                    if(control.className === 'audio') control.classList.add('active');
                }else{
                    template.props.isExistMedia = false;
                    //if(control.className === 'audio') control.classList.remove('active');
                    control.classList.remove('active');
                }
            }
        }
    };
})();