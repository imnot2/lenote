var lenoteTemplate = {};
/*
 * 测试
 * lenoteTemplate.init(true)
 * lenoteTemplate.setContent([{type: 2, rid:'xxx', id: 'image_1', src:'http://www.baidu.com/img/bdlogo.gif'}])
 * 将浏览器窗口放大缩小模拟不同的手机屏幕大小测试图片等控件自动适应大小的功能
 */
(function(){
    "use strict"
    
    document.body.setAttribute('style','background:none;');
    
    //是否在录音、设备信息(宽与高)、默认图片地址、编辑|预览
    //var editable = true, deviceInfo = {}, isEditUI = false,
    var isRecording = false, deviceInfo = {}, isEditUI = false,
        checkPlaceholder = true,
        default_img = 'images/image_edit.png',
        default_img_loading = '../../assets/images/image_loading.png',placeContent,startPlaceContent,endPlaceContent;
    
    //显示|隐藏正在加载UI
    var loadingUI = function(isRemove){
        var body = document.querySelector('body'),
            loading = document.querySelector('.loading');
        if(isRemove){
            body.removeAttribute('style');
            if(loading) loading.parentNode.removeChild(loading);
        }else if(!loading){
            body.setAttribute('style','background:none;');
            var div = document.createElement('div');
            div.className = 'loading light-timeline'; //div.classList.add('loading')
            //div.innerHTML = '加载中..';
            div.innerText = '加载中..';
            body.appendChild(div);
        }
        //body.style.display = 'block';
        body.style.visibility = 'visible';
    };
    
    //解析客户端返回的结果为json
    var parseResult = function(data){
        data = data || {};
        return utils.parseJSON(data, function(msg, stack){
            clientAPI.reportException(msg, stack);
        });
    };
    
    //计算高度与宽度, 缩放比例,从0.1-1。例如zoom="0.4", zoom="0.4|0.4",第一个是宽度，第二个定义高度
    var domSizeCal = function(dom, info){
        var zoom = dom.getAttribute('zoom');
        if(zoom){
            var size = zoom.split('|'), scale_w = parseFloat(size[0] || 0), scale_h = parseFloat(size[1] || 0);
            if(!isNaN(scale_w) && (scale_w > 0)) dom.style.width = (info.width * scale_w) + 'px'
            if(!isNaN(scale_h) && (scale_h > 0)) dom.style.height = (info.height * scale_h) + 'px'
        }
    };
    
    //模板初始化
    var TemplateInit = function(){
        loadingUI(); //初始化页面
        
        //获取设备宽度用于计算各控件的大小自动适配屏幕
        deviceInfo = clientAPI.getDevice();
        //计算普通元素的大小
        var items = document.querySelectorAll('[zoom]:not([_type])');
        for(var i = 0; i < items.length; i++){
            domSizeCal(items[i], deviceInfo);
        }
        
        //为控件添加同名的class、文本控件设置为可编辑的
        var controls = document.querySelectorAll('[_type]');
        for(var i = 0; i < controls.length; i++){
            var control = controls[i], type = control.getAttribute('_type');
            domSizeCal(control, deviceInfo);
            control.classList.add(type);
            switch(type){
                case 'audio': break;
                case 'image':
                    control.setAttribute('src', isEditUI? default_img : './images/image.png');
                    break;
                case 'date':
                case 'time':
                    lenoteTemplate.sections.set(control.getAttribute('id'), {timestamp: (new Date).getTime(), ignoreCheck: true});
                    break;
                case 'text':
                    //在这里设置默认值检查placehold，然后在事件中绑定检查focus/blur
                    //var placeholder = control.getAttribute('placeholder');
                    //if(placeholder) control.innerText = utils.stripTags(placeholder);
                    var placeholder = utils.stripTags(control.getAttribute('placeholder') || '');
                    if(placeholder) control.innerText = placeholder;
                    break;
                case 'contacts': break;
                case 'weather': break;
                case 'place': break;
                case 'moods':
                    control.setAttribute('src', './images/moods/0.png?'+ (new Date()).getTime());
                break;
            }
        }
        if(isEditUI) transformRespond(true, controls);
        eventBinding();
        if(typeof lenoteTemplate.api.init === 'function') lenoteTemplate.api.init(deviceInfo.width, deviceInfo.height);
    };
    
    //各种控件的事件绑定，单击、长按等
    var eventBinding = function(){
        //label监听
        var labels = document.querySelectorAll('label');
        for(var i = 0; i < labels.length; i++){
            var label = labels[i];
            label.addEventListener('click', function(event){
            //Hammer(label).on('tap', function(event){
                if(!isEditUI) return;
                var target = utils.stripTags(this.getAttribute('for'));
                if(target){
                    var t = document.querySelector('#' + target);
                    if(t){
                        var placeholder = utils.stripTags(t.getAttribute('placeholder') || '');
                        if(placeholder && utils.stripTags(t.innerHTML) == placeholder) t.innerHTML = '';
                        var content = utils.stripTags(t.innerHTML || '');
                        if(content){
                            //setTimeout(function(){ //--当有内容时label不支持自动获取焦点，因为先设置t.focus时会导致键盘闪现的问题
                            //    t.innerHTML = '';
                            //    t.focus();
                            //    //t.innerHTML = content;
                            //    //t.appendChild(document.createTextNode(content))
                            //    var txtNode = document.createTextNode(content);
                            //    //t.insertBefore(txtNode);
                            //    var sel = document.getSelection(), range = sel.getRangeAt(),
                            //        nativeRange = document.createRange();
                            //    //range.selectNode(t);
                            //    range.insertNode(txtNode);
                            //    //document.activeElement //当前焦点所在元素
                            //    //document.activeElement.id //当前焦点所在元素ID
                            //    //return range.setStart(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
                            //    //range.setEnd(txtNode, txtNode.nodeValue.length)
                            //    nativeRange.setStart(range.startContainer, range.startOffset);
                            //    nativeRange.setEnd(range.endContainer, range.endOffset);
                            //    sel.addRange(nativeRange); //选中选区
                            //    //sel.collapseToStart();
                            //    sel.collapseToEnd(); //取消选中并将光标定位到最后
                            //}, 20);
                        }else{
                            t.focus();
                        }
                    }
                }
            });
        }
        
        window.addEventListener('resize', function(event){
            //if(!isEditUI) return;
            var currentElem = document.activeElement;
            if(currentElem && currentElem.getAttribute('_type') == 'text'){ //仅处理文本控件
                //document.documentElement.scrollTop
                //document.body.scrollTop = 200;
                //var domHeight = currentElem.offsetHeight, top = currentElem.offsetTop;
                //document.querySelector('#from').innerHTML = utils.getPosition(currentElem).top;
                //offsetTop + 控件高度以保证控件全部可见
                //document.body.scrollTop = utils.getPosition(currentElem).top + currentElem.offsetHeight;
                document.body.scrollTop = utils.getPosition(currentElem).top - 5;
            }
        });
        
        //控件事件监听
        var controls = document.querySelectorAll('[_type]');
        for(var i = 0; i < controls.length; i++){
            var control = controls[i], type = control.getAttribute('_type');
            switch(type){
                case 'audio':
                    //control.addEventListener('click', function(event){
                    Hammer(control).on('tap', function(event){
                       //检查是否在录音或播放界面，界面不允许响应-现已修改为可以拍照可以录音
                       //if(!isRecording) return;
                       var id = this.getAttribute('id'), rid = this.getAttribute('rid'), classList = this.className;
                       if(!id) return;
                       if(rid){ //需要判断有没有资源存在来决定如何响应
                            if(utils.hasClass(classList, 'play')){
                                //var result = clientAPI.controls.audio.start(id, rid);
                                //if(result == 'success') this.className = 'audio stop';
                                //java不再返回值
                                clientAPI.controls.audio.start(id, rid);
                            }else if(utils.hasClass(classList, 'stop')){
                                //var result = clientAPI.controls.audio.pause(id, rid);
                                //if(result == 'success') this.className = 'audio play';
                                clientAPI.controls.audio.pause(id, rid);
                            }
                       }else if(isEditUI && !isRecording){
                            clientAPI.controls.audio.record(id);
                       }
                    });
                    Hammer(control).on('hold', function(event){
                        if(!isEditUI || isRecording) return; //预览界面、正在播放时不允许长按事件
                        var id = this.getAttribute('id'), rid = this.getAttribute('rid');
                        if(id && rid){ //还没有录制音频时不响应长按事件
                            clientAPI.controls.audio.taphold(id, rid);
                        }
                    });
                    break;
                case 'image':
                    //control.addEventListener('click', function(event){
                    Hammer(control).on('tap', function(event){
                        var id = this.getAttribute('id'), rid = this.getAttribute('rid');
                        if(!id) return;
                        if(rid){
                            clientAPI.controls.image.preview(id, rid);
                        }else if(isEditUI){
                            //clientAPI.controls.image.openCamera({id: id, width: this.getAttribute('w'), height: this.getAttribute('h')});
                            clientAPI.controls.image.openCamera(id, utils.getDomWidth(this), utils.getDomHeight(this));
                        }
                    });
                    Hammer(control).on('hold', function(event){
                        if(!isEditUI) return;
                        var id = this.getAttribute('id'), rid = this.getAttribute('rid');
                        if(id && rid){
                            clientAPI.controls.image.taphold(id, rid, utils.getDomWidth(this), utils.getDomHeight(this));
                        }
                    });
                    break;
                case 'date':
                    //control.addEventListener('click', function(event){
                    Hammer(control).on('tap', function(event){
                       if(!isEditUI) return;
                       var id = this.getAttribute('id');
                       if(id){
                            clientAPI.controls.date.select(id, this.getAttribute('timestamp'));
                       }
                    });
                    break;
                case 'time':
                    //control.addEventListener('click', function(event){
                    Hammer(control).on('tap', function(event){
                       if(!isEditUI) return;
                       var id = this.getAttribute('id');
                       if(id){
                            clientAPI.controls.time.select(id, this.getAttribute('timestamp'));
                       }
                    });
                    break;
                case 'text':
                    control.addEventListener('focus', function(event){
                        if(!isEditUI) return;
                        this.classList.add('active');
                        //var placeholder = this.getAttribute('placeholder');
                        var placeholder = utils.stripTags(this.getAttribute('placeholder') || '');
                        if(placeholder && this.innerHTML != '' && utils.stripTags(this.innerHTML) == placeholder){
                            this.innerHTML = '';
                            checkPlaceholder = false; //当blur时不检查placeholder时，用于解决当点击placeholder文字中间时无法获取光标的bug
                            this.blur();
                            this.focus();
                            //var _id = this.getAttribute('id');
                            //setTimeout(function(){
                            //    var c = document.querySelector('#' + _id);
                            //    c && c.focus(true);
                            //}, 50);
                        }
                        //clientAPI.setKeyboard(true); //弹出键盘
                    });
                    control.addEventListener('blur', function(event){
                        if(!isEditUI) return;
                        if(!checkPlaceholder){
                            checkPlaceholder = true;
                            return;
                        }
                        //clientAPI.setKeyboard(false); //隐藏键盘
                        if(!utils.stripTags(this.innerHTML)){
                            this.classList.remove('active'); //如果没有内容则颜色恢复为灰色
                            //var placeholder = this.getAttribute('placeholder');
                            //if(placeholder) this.innerText = utils.stripTags(placeholder);
                            var placeholder = utils.stripTags(this.getAttribute('placeholder') || '');
                            if(placeholder) this.innerText = placeholder;
                        }
                    });
                    control.addEventListener('keydown', function(event){ //keydown可以禁止输入中文而keypress不能监听到中文输入
                        if(!isEditUI) return;
                        var maxlength = this.getAttribute('maxlength');
                        if(maxlength){
                            if(event.keyCode == 13 || (utils.stripTags(this.innerHTML).length >= maxlength && event.keyCode != 8 && event.keyCode != 46)){
                                event.returnValue = false; //有长度限制的控件禁止输入回车符
                                return false;
                            }
                        }
                    });
                    break;
                case 'contacts':
                    control.addEventListener('keydown', function(event){
                        if(!isEditUI) return;
                        var maxlength = this.getAttribute('maxlength');
                        if(maxlength){
                            if(event.keyCode == 13 || (utils.stripTags(this.innerHTML).length >= maxlength && event.keyCode != 8 && event.keyCode != 46)){
                                event.returnValue = false; //有长度限制的控件禁止输入回车符
                                return false;
                            }
                        }
                    });
                    break;
                case 'weather': 
                    Hammer(control).on('tap', function(event){
                       if(!isEditUI) return;
                       var id = this.getAttribute('id'),weather=this.getAttribute('weather');
                       clientAPI.editWeather(id,weather ? weather : 0);
                    }); 
                    break;
                case 'place':
                    // Hammer(control).on('tap', function(event){
                    //    if(!isEditUI) return;
                    //    var id = this.getAttribute('id');
                    //    clientAPI.getGeoLocation(id);
                    // }); 
                    break;
                case 'moods':
                    Hammer(control).on('tap', function(event){
                       if(!isEditUI) return;
                       var id = this.getAttribute('id'), content=this.getAttribute('content');
                       clientAPI.getMoods(id, content ? content : 0);
                    });                   
                    break;

            }
        }
    };
    
    //更新页面中所有控件可编辑状态
    var transformRespond = function(state, controls){
        if(!controls) controls = document.querySelectorAll('[_type]');
        if(state && isEditUI){ //使页面上所有控件响应操作
            for(var i = 0; i < controls.length; i++){
                var control = controls[i], type = control.getAttribute('_type');
                switch(type){
                    case 'audio': break;
                    case 'image': break;
                    case 'date': break;
                    case 'time': break;
                    case 'text':
                    case 'contacts':
                    case 'place':
                        control.setAttribute('contenteditable', true);
                        break;
                    case 'weather': break;
                    //case 'place': break;
                }
            }
        }else{ //使页面上所有的控件不响应操作，如录音时、文本控件应不能获取焦点弹出键盘
            for(var i = 0; i < controls.length; i++){
                var control = controls[i], type = control.getAttribute('_type');
                switch(type){
                    case 'audio': break;
                    case 'image': break;
                    case 'date': break;
                    case 'time': break;
                    case 'text':
                    case 'contacts':
                    case 'place':
                        control.setAttribute('contenteditable', false);
                        break;
                    case 'weather': break;
                    //case 'place': break;
                }
            }
        }
    };
    
    //填充控件的数据
    var fillData = function(id, data){
        id = utils.stripSpace(id);
        var control = id && document.querySelector('#' + id);
        if(!control) return;
        data = data || {};
        var _type = control.getAttribute('_type');
        //需要检查资源的type与控件的_type是否相同，不同则不设置。用于以后支持模板套用功能
        switch(_type){
            case 'audio': //{type: 0|1|2|3|4|5, rid:local_id, id: section_id}
                if(data.type == getControlType(_type)){ //检查资源的type
                    if(data.rid){
                        control.setAttribute('rid', data.rid);
                        //control.classList.remove('stop');
                        //control.classList.add('play');
                        control.className = 'audio play';
                    }else{
                        clearData(id);
                    }
                }
                //音频录制完成后需要重置模板控件的状态
                //if(!isRecording){
                //    transformRespond(true);
                //    isRecording = false;
                //}
                isRecording = false;
                break;
            case 'image': //{type: 0|1|2|3|4|5, rid:local_id, id: section_id, src:xxx}
                if(data.type == getControlType(_type)){
                    //if(data.rid && data.src){
                    if(data.rid){
                        control.setAttribute('rid', data.rid);
                        control.classList.add('active');
                        //control.setAttribute('src', data.src + '?' + (new Date()).getTime()); //添加版本控制
                        //var image = document.createElement('img');
                        //image.setAttribute('src', data.src + '?' + (new Date()).getTime());
                        //control.innerHTML = '<img src="' + (data.src + '?' + (new Date()).getTime()) + '" style="width:' + control.getAttribute('w') + 'px;height:' + control.getAttribute('h') + 'px;"/>';
                        if(data.src){
                            control.setAttribute('src', data.src + '?' + (new Date()).getTime());
                        }else{
                            control.setAttribute('src', default_img_loading + '?' + (new Date()).getTime());
                            clientAPI.controls.image.createThumbs(id, data.rid, utils.getDomWidth(control), utils.getDomHeight(control));
                        }
                    }else{
                        clearData(id);
                    }
                }
                break;
            //case 'date': //{type: 0|1|2|3|4|5, rid:local_id, id: section_id, timestamp:xxx, content:xxx}
            case 'date': //{type: 0|1|2|3|4|5, rid:local_id, id: section_id, timestamp:xxx}
            case 'time':
                if(data.type == getControlType(_type) || data.ignoreCheck){
                    //if(data.rid && data.timestamp && data.content){
                    if(data.rid || data.ignoreCheck){
                        data.timestamp = utils.dateTime.getTimestamp(data.timestamp); //检验时间戳并获取正确的时间戳
                        if(data.rid) control.setAttribute('rid', data.rid);
                        control.setAttribute('timestamp', data.timestamp);
                        //control.innerHTML = utils.stripTags(data.content);
                        var children = control.querySelectorAll('[format]');
                        for(var i = 0; i < children.length; i++){
                            var child = children[i], result = utils.dateTime.format(data.timestamp, child.getAttribute('format'));
                            child.innerText = result;
                        }
                    }
                }
                break;
            case 'text': //{type: 0|1|2|3|4|5, rid:local_id, id: section_id, content:xxx}
            case 'contacts':
                if(data.rid){
                    control.setAttribute('rid', data.rid);
                    //control.innerHTML = utils.stripTags(data.content || '');
                    //control.innerText = utils.stripTags(data.content || '');
                    if(data.content) control.innerHTML = data.content || '';
                }
                break;
            case 'weather': 
                if(data.type == getControlType(_type)){
                    var weatherCode = typeof(data.content) == 'string' ? data.content : data.content.weatherCode;
                    //control.setAttribute('rid', data.rid); 
                    control.setAttribute('weather', weatherCode); 
                    control.setAttribute('src', 'images/weather/'+weatherCode+'.png?' + (new Date()).getTime());   
                }
                break;
            case 'place':
                if(data.rid)control.setAttribute('rid', data.rid);
                var address = '';
                if(typeof(data.content) == 'string'){
                    address = utils.stripTags(data.content);
                }else{
                    startPlaceContent = utils.Place.getPlace(control.getAttribute("info"),data.content);
                    address = startPlaceContent;
                }
                placeContent = address;
                //var address = typeof(data.content) == 'string' ? data.content : utils.Place.getPlace(control.getAttribute("info"),data.content);
                control.innerHTML = address;
                if(isEditUI)control.setAttribute('contenteditable','true');
                break;
            case 'moods':
                if(data.type == getControlType(_type)){
                    if(data.rid){
                        control.setAttribute('rid', data.rid);
                        control.setAttribute('content', data.content);
                        control.setAttribute('src', 'images/moods/'+data.content+'.png?' + (new Date()).getTime());        
                    }else{
                        clearData(id);
                    }
                }
                break;
        }
        //模板的回调
        if(typeof lenoteTemplate.api.callbacks.controlSetData === 'function'){
            lenoteTemplate.api.callbacks.controlSetData(id, data);
        }
    };
    
    //清空控件数据
    var clearData = function(id){
        id = utils.stripSpace(id);
        var control = id && document.querySelector('#' + id);
        if(!control) return;
        var _type = control.getAttribute('_type');
        //根据控件不同需要清理不同的数据
        switch(_type){
            case 'audio':
                control.removeAttribute('rid');
                control.className = 'audio';
                break;
            case 'image':
                control.removeAttribute('rid');
                //control.innerHTML = '';
                control.setAttribute('src', default_img);
                control.classList.remove('active');
                break;
            case 'date':
            case 'time':
                control.removeAttribute('rid');
                //var currentDate = clientAPI.controls.date.format(control.getAttribute('format'));
                //control.seAttribute('timestamp', currentDate.timestamp);
                //control.innerHTML = currentDate.result;
                control.removeAttribute('timestamp');
                //control.innerHTML = '';
                //设置为当前时间
                lenoteTemplate.sections.set(id, {timestamp: (new Date).getTime(), ignoreCheck: true});
                break;
            case 'text':
            case 'contacts':
                control.setAttribute('rid', data.rid);
                control.innerText = '';
                //var placeholder = control.getAttribute('placeholder');
                var placeholder = utils.stripTags(control.getAttribute('placeholder') || '');
                //if(placeholder) control.innerHTML = placeholder;
                //if(placeholder) control.innerText = utils.stripTags(placeholder);
                if(placeholder) control.innerText = placeholder;
                break;
            case 'weather': 
                control.removeAttribute('rid');
                control.removeAttribute('weather');
                control.setAttribute('src', 'weather_0.png?' + (new Date()).getTime());   
                break;
            case 'place':
                control.removeAttribute('rid');
                control.removeAttribute('content');
                break;
            case 'moods':
                control.setAttribute('src', default_img);
                control.removeAttribute('rid');
                control.removeAttribute('content');
                break;
        }
        //模板的回调
        if(typeof lenoteTemplate.api.callbacks.controlClearData === 'function'){
            lenoteTemplate.api.callbacks.controlClearData(id);
        }
    };
    
    //返回控件类型。用于以后支持模板套用功能
    var getControlType = function(_type){
        var result = 128; //通用类型
        _type = _type || '';
        //模板页面上所有用户可操作的数据都是一种控件类型。天气及地理位置的控件有种不同，在初始化时需要像日期控件一样要显示正在获取信息的提示并自动填充
        switch(_type){
            case 'audio': result = 512;break;
            case 'image': result = 256;break;
            case 'date': result = 1408;break;
            case 'text': result = 768;break;
            case 'contacts': result = 1536;break;
            case 'weather': result = 1792;break; //天气控件
            case 'place': result = 1664;break; //地理位置控件
            case 'moods': result = 2048;break; //心情控件
            case 'time': result = 1920;break;
        }
        return result;
    };
    
    //供模板系统调用的客户端API
    var clientAPI = {
        //全局接口，所有的结果都以json格式字符串返回。支持同步与异步的数据返回方式
        getDevice: function(){ //获取设备信息，目前仅需要返回设备的宽度、高度(单位需要换算成px)
            //如果有参数id(位置id)则android端可以使用异步的方式返回(调用模板设置模块信息的方法)、否则直接返回给我
            try{
                return parseResult(window.phoneAPI.getDeviceInfo());
            }catch(e){
                //return {width: document.body.clientWidth, height:  document.body.clientHeight};
                //return {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight};
                return {width: document.body.scrollWidth, height: document.body.scrollHeight};
            }
        },
        getMoods:function(id,content){
            return parseResult(window.phoneAPI.moodSelect(id,content));
        },
        getWeather: function(id){ //获取天气，返回华氏与摄氏度、晴/阴...、污染度等
            return parseResult(window.phoneAPI.getWeather(id));
        },  
        editWeather:function(id,content){
            return parseResult(window.phoneAPI.weatherSelect(id,content));
        },
        getGeoLocation: function(id){ //获取地理位置，返回国家、省、市、县、镇、街道、路等
            return parseResult(window.phoneAPI.getGeoLocation(id));
        },
        setKeyboard: function(isPopup){
            //id用于弹出键盘之后回调，用来支持设置焦点。暂不需要支持回调
            try{
                window.phoneAPI.setKeyboard(isPopup);
            }catch(e){
                this.reportException(e.message, e.stack);
            }
        },
        reportException: function(msg, stack){ //报告异常
            try{
                window.phoneAPI.throwTemplateException(msg, stack);
            }catch(e){}
        },
        setResult: function(m, data){ //向客户端传递返回的数据，因为android不能直接从javascript中获取返回值。m即java调用js时的方法名，data是json数据
            window.phoneAPI.setResult(m, JSON.stringify(data));
        },
        //控件接口
        controls: {
            audio: { //音频控件
                /* @id: 位置id, 用于客户端回调时回传; @rid: 资源id, 即local_id
                 * 点击(click/touchStart): 如果rid为空时则直接打开录音界面录制，不为空时则播放音频
                 * 长按: rid不为空时则弹出选择菜单：替换音频、删除音频，否则什么都不做
                 * 在弹出菜单界面点击菜单外任何区域隐藏弹出的菜单
                 * 如果在录音界面，客户端需要判断无论是点击还是长按都应什么都不做
                 */
                start: function(id, rid){ //播放或继播, 如果有其它音频正在播放需要先停止正在播放的音频
                    //返回success或failure表示操作成功与否, 只有当success时才改变本地的图标状态，用于点击webview时使用、这样避免了phone端还要再回调一次改状态的接口
                    //return window.phoneAPI.audioStart(id, rid);
                    window.phoneAPI.audioStart(id, rid);
                },
                pause: function(id, rid){ //暂停
                    //return window.phoneAPI.audioPause(id, rid);
                    window.phoneAPI.audioPause(id, rid);
                },
                stop: function(id, rid){ //停止
                    //return window.phoneAPI.audioStop(id, rid);
                    window.phoneAPI.audioStop(id, rid);
                },
                record: function(id){ //录音
                    //返回success或failure表示操作成功与否，成功时则设置变量isRecording为false，这时模板自动将页面中可编辑区域变为不可编辑区域，停止录音后再调用接口恢复
                    //var result =  window.phoneAPI.audioRecord(id);
                    //if(result === 'success' && isRecording){
                    //    transformRespond(false);
                    //    isRecording = false;
                    //}
                    window.phoneAPI.audioRecord(id);
                },
                recording: function(){ //是否正在录音，用于在录音时屏蔽界面上所有的事件
                    return window.phoneAPI.isRecording(); //返回yes或no
                },
                taphold: function(id, rid){ //长按弹出菜单, rid暂时未用到
                    window.phoneAPI.audioTaphold(id, rid);
                }
            },
            image: { //图片控件
                /*
                 * 点击(click/touchStart): rid为空时直接打开相机(因为拍照界面可以选择图库图片，所以不需要弹出菜单)，不为空时则查看大图
                 * 长按: rid不为空时弹出菜单：替换图片、删除图片，为空时啥都不做
                 */
                //openCamera: function(data){ //{id:xx, width: 80, height: 80}, 宽高用于选完照片后截取指定区域(截取框可以拖动选择截取的区域)
                //    window.phoneAPI.openCamera(JSON.stringify(data));
                //},
                openCamera: function(id, width, height){ //打开相机
                    window.phoneAPI.openCamera(id, width, height);
                },
                preview: function(id, rid){ //查看大图
                    window.phoneAPI.imagePreview(id, rid);
                },
                createThumbs: function(id, rid, width, height){ //创建缩略图
                    window.phoneAPI.createThumbs(id, rid, width, height);
                },
                taphold: function(id, rid, width, height){ //长按弹出菜单
                    window.phoneAPI.imageTaphold(id, rid, width, height);
                }
            },
            date: { //日期控件
                /*
                 * @timestamp时间戳，单位秒，日历控件根据此值(没有则是当前值)高亮选择该日期
                 * @format需要返回的日期格式,以java中的日期格式化定义为准
                 * 日期控件没有长按事件，即日期控件是始终有值的、空时即显示当前日期及时间
                 */
                //select: function(id, format, timestamp){ //日期选择, timestamp为空则使用当前时间值、format为空则默认使用2014年03月01日 10:26am格式
                //    window.phoneAPI.dateSelect(id, format, timestamp); //返回{timestamp: 1394590731024, result: '2013-03-12 10:26am'}
                //},
                //format: function(format, timestamp){ //日期格式化, timestamp为空则使用当前时间值、format为空则默认使用2014年03月01日 10:26am格式
                //    return parseResult(window.phoneAPI.dateFormat(format, timestamp)); //返回{timestamp: 1394590731024, result: '2013-03-12 10:26am'}
                //}
                //由于需要将年、月等信息拆分处理(如需要年与月的显示样式不一样)不再作为一个整体的日期格式处理，且考虑到各端统一的问题，所以不再使用传递format的方式格式化整个日期字符串、改由JS自己处理
                select: function(id, timestamp){
                    window.phoneAPI.dateSelect(id, timestamp); //返回{timestamp: 1394590731024}
                }
            },
            time: { //时间控件
                select: function(id, timestamp){
                    window.phoneAPI.timeSelect(id, timestamp);
                }
            },
            contacts: function(id, members){ //联系人控件, @members是成员列表以,间隔
                window.phoneAPI.listContacts(id, members); //返回的成员列表以,间隔
            }
        }
    };
    
    //供客户端调用的模板系统API
    lenoteTemplate.init = function(_isEditUI){
        isEditUI = _isEditUI === true || _isEditUI === 'true';
        var tplWrapper = document.querySelector('#lenoteTemplate');
        if(tplWrapper){
            if(isEditUI){
                tplWrapper.classList.remove('view');
                tplWrapper.classList.add('edit');
            }else{
                tplWrapper.classList.remove('edit');
                tplWrapper.classList.add('view');
            }
            //根据是否是预览界面修改图片控件的默认图片
            //var images = document.querySelector('[_type=image]:not([rid])');
            //for(var i = 0; i < images.length; i++){
            //    var image = images[i];
            //    image.setAttribute('src', './images/image.png');
            //}
        }
        //初始化模板
        TemplateInit();
    };
    lenoteTemplate.setUIState = function(_isEditUI){ //设置模板是编辑还是预览状态
        isEditUI = _isEditUI === true || _isEditUI === 'true';
        var tplWrapper = document.querySelector('#lenoteTemplate');
        if(tplWrapper){
            var texts = document.querySelectorAll('[_type=text]');
            for(var i = 0; i < texts.length; i++){
                var text = texts[i], v = utils.stripTags(text.innerHTML);
                if(isEditUI){
                    var placeholder = utils.stripTags(text.getAttribute('placeholder') || '');
                    if(v != '' && v != placeholder){
                        text.classList.add('active');
                    }else if(v == '' && placeholder){
                        text.innerText = placeholder;
                    }
                    //text.scrollLeft = 0;
                }else{
                    text.scrollLeft = 0;
                }
            }
            if(isEditUI){
                tplWrapper.classList.add('edit');
                tplWrapper.classList.remove('view');
            }else{
                tplWrapper.classList.add('view');
                tplWrapper.classList.remove('edit');
            }
            var images = document.querySelectorAll('[_type=image]:not([rid])');
            for(var i = 0; i < images.length; i++){
                var image = images[i];
                image.setAttribute('src', isEditUI? default_img : './images/image.png');
            }
        }
        transformRespond(isEditUI);
    };
    lenoteTemplate.isVisible = function(isDisplay){ //模板加载后，使模板可视并隐藏正在加载的提示
        isDisplay = isDisplay === true || isDisplay === 'true';

        var autoGet = document.querySelectorAll("[auto=true]");
        for(var i=0; i<autoGet.length;i++){
            var node = autoGet[i],type = node.getAttribute("_type");
            switch(type){
                case 'weather':
                    if(isEditUI && !node.getAttribute("src"))clientAPI.getWeather(node.getAttribute("id"));                   
                break;
                case 'place':
                    if(isEditUI && /^\s*(<br\/?>)?\s*$/ig.test(node.innerHTML)){
                        if(placeContent){
                            node.innerText = placeContent;
                        }else{
                            node.innerText = "地理位置获取中...";
                            node.setAttribute('contenteditable','false');
                            clientAPI.getGeoLocation(node.getAttribute('id'));
                        }  
                    }
                break;
            }
        }
        var title = document.querySelector("#title");
        title.oninput= function(){
            if(title.innerText.length > 30)window.phoneAPI.showToast("最多只能输入30个字符。");
        }
        var tplWrapper = document.querySelector('#lenoteTemplate');
        loadingUI(isDisplay);
        //if(tplWrapper) tplWrapper.style.display = isDisplay? 'block' : 'none';
        if(tplWrapper) tplWrapper.style.visibility = isDisplay? 'visible' : 'hidden';
    };
    lenoteTemplate.getContent = function(){ //获取模板内容以保存笔记
        //仅返回文本控件的信息，其它控件的信息包括正文内容、笔记的ID由客户端自己维护保存。
        //当有local_id时表示这是一个已经存在的资源，否则就是新的资源
        var controls = document.querySelectorAll('[_type="text"],[_type="contacts"],[_type="place"]'), result = [];
        for(var i = 0; i < controls.length; i++){
            //这里之所有用control.innerHTML是为了将来支持文本控件的格式化：如加粗、颜色等。
            //实现文本格式化的原理是：选中文字后，调用客户端弹出格式化工具条，然后选择加粗工具，客户端回调模板的api，模板根据工具名及当前选区进行加粗操作
            //保存笔记时，在getContent中将支持的格式标签转换成固定格式，然后再stripTags，然后再转为标准html格式
            //var control = controls[i], content = utils.stripTags(control.innerHTML || ''),
            var control = controls[i], content = utils.stripTags(control.innerText || ''),
                placeholder = utils.stripTags(control.getAttribute('placeholder') || '');
            //if(placeholder && content == placeholder) continue;
            //if(!content) continue; //内容为空的文本控件不保存
            if(!content || (placeholder && content == placeholder)) content = '';
            if(control.getAttribute('_type') == 'place')endPlaceContent = content;
            result.push({
                rid: control.getAttribute('rid'), 
                id: control.getAttribute('id'),
                type: getControlType(control.getAttribute('_type')),
                content: content //control.innerText
            });           
        }
        for(var i=0; i<result.length;i++){
            var obj=result[i];
            //placeContentIsChange只针对第一次新建的时候判断地理位置是否修改，因为fillData的时候 地理位置都默认添加了一个空格，所以这里对比时去掉。
            if(obj.id == 'place') obj.placeContentIsChange = typeof(startPlaceContent) != 'undefined' && startPlaceContent.replace(/\s?/ig,'') !== endPlaceContent;
        } 
        //var isBlank = true;
        // for(var i=0; i<result.length;i++){
        //     var obj=result[i];
        //     if(obj.id != 'place' && !!obj.content)isBlank = false;
        // }        
        // if(isBlank){
        //     for(var i=0; i<result.length;i++){
        //         var obj=result[i];
        //         if(obj.id == 'place')obj.content = '';
        //     } 
        // }
        //return JSON.stringify(result);
        clientAPI.setResult('getContent', result); //java不支持javascript直接返回结果
    };
    lenoteTemplate.setContent = function(data){ //传递数据初始化模板内容
        /*
         * data的格式同getContent接口，如"[{rid:null,id:title,type:4,content:''},...]" 
         * 音频：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID}
         * 图片：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, src:图片地址}
         * 日期：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, timestamp:时间戳}
         * 文本：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, content:内容}
         * 联系人：{type: 0|1|2|3|4|5, rid:local_id, id: 控件ID, content:成员列表字符串,以,号间隔}
         */
        data = parseResult(data);
        if(!data || !data.length){ //检查是否是数组
            this.isVisible(true);return;
        }
        for(var i = 0; i < data.length; i++){
            var d = data[i];
            if(typeof d == 'string') d = parseResult(d);
            this.sections.set(d.id, d);
        }
        this.isVisible(true); //数据填充完成后使模板可视
    };
    lenoteTemplate.sections = { //控件数据操作
        set: function(id, data){ //填充section, 支持查看图片时本地如果不存在，手机端下载成功后通知模板刷新界面
            //id = utils.stripSpace(id);
            data = parseResult(data);
            //id && data && fillData(id, data);
            fillData(id, data);
        },
        del: function(id){ //删除section内容
            //id && clearData(id);
            clearData(id);
        }
        //get: function(id){}
    };
    lenoteTemplate.audio = { //音频控制
        play: function(id){ //更新状态为播放
            id = utils.stripSpace(id);
            var control = id && document.querySelector('#' + id);
            if(!control) return;
            if(utils.hasClass(control.className, 'play')) control.className = 'audio stop';
            this.isRecording(id, true);
        },
        pause: function(id){ //更新状态为暂停
            id = utils.stripSpace(id);
            var control = id && document.querySelector('#' + id);
            if(!control) return;
            if(utils.hasClass(control.className, 'stop')) control.className = 'audio play';
        },
        stop: function(id){ //更新状态为停止
            this.pause(id);
            this.isRecording(id, false);
        },
        isRecording: function(id, _isRecording){
            id = utils.stripSpace(id);
            var control = id && document.querySelector('#' + id);
            if(!control) return;
            _isRecording = _isRecording === true || _isRecording === 'true';
            if(_isRecording){
                //transformRespond(false);
                isRecording = true;
                if(control.className == 'audio') control.classList.add('active');
            }else{
                //if(isEditUI){
                    //transformRespond(true);
                    isRecording = false;
                //}
                if(control.className == 'audio') control.classList.remove('active');
            }
        }
    };
    
    //供模板开发使用的API
    lenoteTemplate.api = {
        //提供各个系统接口的回调函数以供模板开发使用
        callbacks : {
            //设置模板数据时回调，用于模板中显示不同的控件数据，如有的模板需要显示音频的时长、大小等
            controlSetData: function(id, data){},
            controlClearData: function(id){}
            //audioStart: function(){} //音频播放的回调, 以后可以开放类似的接口给第三方开发者
        },
        image: {
            setDefaultImage: function(src){ //更改默认的相机图片
                if(src) default_img = src;
            }
        },
        //device: {
        //    getWidth: function(){return deviceInfo.width;},
        //    getHeight: function(){return deviceInfo.height;}
        //},
        init: function(deviceWidth, deviceHeight){},
        helper: {
            getDomWidth: function(dom){
                return utils.getDomWidth(dom);
            },
            getDomHeight: function(dom){
                return utils.getDomHeight(dom);
            }
        }
    };
})();