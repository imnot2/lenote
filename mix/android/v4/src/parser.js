var analyze = {},
    helper = {
        extend: function(){
            var target = arguments[0], n = 1, source;
            if(arguments.length === 1){
                target = this;
                n = 0;
            }
            while(source = arguments[n++]){
                for(var prop in source) target[prop] = source[prop];
            }
            return target;
        },
        filterXSS: function(html){
            return filterXSS(html, {
               allowCommentTag: false,
               whiteList: this.extend(filterXSS.whiteList, {
                    'ln-photo': ['key', '_data'],
                    'ln-attachment': ['key'],
                    'ln-audio': ['key'],
                    'ln-text': ['key'],
                    'ln-video': ['key']
               }),
               onIgnoreTagAttr: function(tag, name, value, isWhiteAttr){
                    if(name === 'style'){
                        value = filterXSS.safeAttrValue(tag, name, value);
                        return value? name + '="' + value + '"' : name;
                    }
               }
            });
        }
    };
(function(){
    "use strict"
    
    //默认样式数据
    var data = {main_padding: 10, content_margin: 5};
    
    //解析器
    var Parser = function(){
        this.data = data;
        this.width = parseInt(this.data.deviceWidth) - this.data.main_padding - this.data.content_margin;
    }
    
    Parser.prototype = {
        getResource: function(key){
            var resource = window.View.getResourceInfoByResourceId(key);
            //if(typeof resource === 'object') return resource;
            try{
                //eval('(' + resource + ')');
                resource = JSON.parse(resource);
            }catch(e){}
            return resource;
        },
        getID: function(tag){
            return tag.getAttribute('key') + '_' + Date.parse(new Date()) + (new Date).getMilliseconds() + Math.ceil(Math.random() * 100);
        },
        getSuffix: function(suffix){
            var _suffix = 'default';
            switch(suffix.toLowerCase()){
                case 'apk': _suffix = 'apk';break;
                case 'doc':case 'docx': _suffix = 'doc';break;
                case 'jpg':case 'jpeg':case 'bmp':case 'gif':case 'png':case 'ico':case 'pcx':case 'tiff':case 'dxf':case 'exif': _suffix = 'image';break;
                case 'ppt':case 'pptx': _suffix = 'ppt';break;
                case 'pdf': _suffix = 'pdf';break;
                case 'kk':case 'mp3':case 'amr':case 'aac':case 'ogg':case 'mid':case 'ape':case 'wav':case 'wma':case 'midi': _suffix = 'audio';break;
                case 'avi':case 'rmvb':case 'mkv':case 'wmv':case 'flv':case 'mp4':case 'rm':case 'f4v':case 'mov':case 'mpeg':case '3gp': _suffix = 'video';break;
                case 'rar': _suffix = 'rar';break;
                case 'txt':case 'rtf':case 'jnt': _suffix = 'txt';break;
                case 'xls':case 'xlsx': _suffix = 'xls';break;
                case 'zip': _suffix = 'zip';break;
            }
            return _suffix;
        },
        filter: function(html){
            html = html.replace(/<\s*ln-text[^>]*?>(&nbsp;|<[\s\/]*br[\s\/]*>|\r|\n|\s*)*<\/ln-text>/igm, '').replace(/\r|\n/igm, '');
            return html.replace(/(<\/ln-[^>]+?>)(&(amp;)?nbsp;)+?\s*?<br\s*?\/?>/igm, '$1');
        },
        dispose: function(){
            //检查元素的mkey值
            var tags = document.querySelectorAll('ln-photo, ln-audio, ln-text, ln-attachment');
            for(var i = 0; i < tags.length; i++) this.build(tags[i]);
        },
        build: function(tag){
            var result = null;
            switch(tag.nodeName.toLowerCase()){
                case 'ln-text': result = this.buildText(tag);break;
                case 'ln-photo': result = this.buildPhoto(tag);break;
                case 'ln-audio': result = this.buildAudio(tag);break;
                case 'ln-attachment': result = this.buildAttachment(tag);break;
            }
            if(result){
                tag.parentNode.replaceChild(result, tag);
            }else{
                try{
                    tag.parentNode.removeChild(tag);
                }catch(e){}
            }
        },
        buildAttachment: function(tag){
            var resource = this.getResource(tag.getAttribute('key')),
                attachment = document.createElement('div');
            //if(typeof resource != 'object') return false;
            
            if(typeof resource == 'object'){
                attachment.id = '_attachment_' + this.getID(tag);
                attachment.setAttribute('_id', tag.getAttribute('key'));
                attachment.className = 'attachment ' + resource.suffix;
                //attachment.style.width = this.width * 0.8 + 'px';
                
                attachment.innerHTML = '<img class="filetype" src="images/files/' + this.getSuffix(resource.suffix) + '.png"/><div class="info"><div class="title">' + resource.title + '</div><div class="size">' + resource.size + '</div></div><div class="arrow"></div>';
                return attachment;
            }
            return null;
        },
        //ln-text中可能存在其它自定义标签需要迭代处理
        buildText: function(tag){
            var text = document.createElement('span');
            text.innerHTML = tag.innerHTML;
            text.id = '_text_' + this.getID(tag);
            text.setAttribute('_id', tag.getAttribute('key'));
            
            var tags = text.querySelectorAll('ln-photo, ln-audio, ln-text, ln-attachment');
            for(var i = 0; i < tags.length; i++) this.build(tags[i]);
            
            return text;
        },
        buildPhoto: function(tag, resource, width){
            resource = resource || this.getResource(tag.getAttribute('key')), width = width || this.width;
            var photo = document.createElement('img'),
                src = (typeof resource == 'object')? (resource.src + '?' + (new Date()).getTime()) : 'images/img404.png';
            
            photo.setAttribute('src', src);
            photo.id = '_photo_' + this.getID(tag);
            //photo.setAttribute('_id', '_' + tag.getAttribute('key'));
            photo.setAttribute('_id', tag.getAttribute('key'));
            //photo.className = 'photo';
            photo.classList.add('photo');
            
            var w = parseInt(width - 25);
            //if(typeof resource == 'object'){
            //设置图片的高宽
            if(typeof resource == 'object' && resource.width){
                if(resource.width > w){
                    var h = w * (resource.height / resource.width);
                    photo.style.width = w + 'px', photo.style.height = h + 'px';
                }else{
                    photo.style.width = resource.width + 'px', photo.style.height = resource.height + 'px';
                }
            }else if(src != 'images/img404.png'){
                var image_temp = new Image(), h = w * (4 / 3);
                image_temp.src = src;
                //image_temp.onload = function(){
                //    if(this.width > w) if(this.width == this.height) h = w;
                //    photo.style.width  = w + 'px', photo.style.height = h + 'px';
                //}
                if(image_temp.width > w || image_temp.width == 0){
                    if((image_temp.width != 0) && (image_temp.width == image_temp.height)) h = w;
                    photo.style.width = w + 'px', photo.style.height = h + 'px';
                }
                image_temp = null;
            }
            //}
            
            //photo.width = size, photo.height = size; //设置width、height属性
            //photo.setAttribute('style', 'width:' + size + 'px;height:' + size + 'px;') //会覆盖掉原来img上的sytle
            //photo.style.width = w + 'px', photo.style.height = h + 'px';
            
            return photo;
        },
        buildAudio: function(tag){
            //var resource = this.getResource(tag.getAttribute('key')), audio = document.createElement('div');
            var resource = this.getResource(tag.getAttribute('key'));
            if(typeof resource != 'object') return document.createElement('span');
            
            var audio = document.createElement('div'),
                bw = this.width, bh = parseInt(bw / 3.2), pwh = parseInt(bw / 5.1),
                pt = parseInt(pwh / 3.3), il = pwh + 25, it = parseInt(bh / 2 - 18), tw = bw - il - 50;
            
            var res = ['<div class="audio-play" style="width:' + bw + 'px;height:' + bh + 'px;" id="' + '_audio_' + this.getID(tag) + '" _id="' + tag.getAttribute('key') + '">'];
            res.push('<img style="width:' + bw + 'px;height:' + bh + 'px" class="board" src="images/player_bg.png"/>');
            res.push('<img class="play" play="0" src="images/play_normal.png" style="width:' + pwh + 'px;height:' + pwh + 'px;top:' + pt + 'px"/>');
            res.push('<div class="info" style="left:' + il + 'px;top:' + it + 'px;">');
            res.push('<div class="title" style="width:' + tw + 'px">' + resource.title + '</div>');
            res.push('<div class="desc" style="width:' + tw + 'px">');
            //res.push('<span class="size">' + resource.size + '</span><span class="duration">' + resource.fulltime + '</span>');
            res.push('<span class="size">' + resource.size + '</span>');
            if(resource.fulltime && resource.fulltime != '00:00') res.push('<span class="duration">' + resource.fulltime + '</span>');
            res.push('</div></div></div>');
            
            audio.setAttribute('style', 'position: relative;left: -6px;');
            audio.innerHTML = res.join('');
            //audio.id = '_audio_' + this.getID(tag);
            //audio.setAttribute('_id', tag.getAttribute('key'));
            audio.className = 'audio';
            
            return audio;
        },
        resetPhoto: function(key, deviceWidth){
            var photos = document.querySelectorAll('[_id="' + key + '"]');
            if(photos.length > 0){
                var resource = this.getResource(key);
                if(typeof resource == 'object'){
                    for(var i = 0; i < photos.length; i++){
                        var photo = photos[i], width = this.width - 25;
                        if(!resource.src) continue;
                         photo.style.width = '0';
                         photo.style.height = '0';
                       
                        //添加时间戳解决有时间图片无法显示的问题：由于手机端使用多进程生成缩略图且缩略图地址在第一次加载时就已存在，所以在缩略图生成后调用resetPhoto重置图片地址时
                        //由于该图片已加载过一次，webview就会使用缓存中的图片，除非图片地址不一样才可以避免使用错误的图片缓存数据
                        photo.setAttribute('src', resource.src + '?' + (new Date()).getTime());
                        photo.onload = function(){
                            if(resource.width > 0){
                                if(resource.width > width){
                                    var h = width * (resource.height / resource.width);
                                    this.style.width = width + 'px', this.style.height = h + 'px';
                                }else{
                                    this.style.width = resource.width + 'px', this.style.height = resource.height + 'px';
                                }
                            }else{
                                var h = width * (4 / 3);
                                this.style.width = width + 'px', this.style.height = h + 'px';
                            }
                        }
                    }
                }
            }
        }
    };
    
    //行为
    var behavior = {
        listener: function(){
            //图片预览
            var photos = document.querySelectorAll('img.photo');
            for(var i = 0; i < photos.length; i++){
                photos[i].addEventListener('click', function(e){
                    try{
                       //回调android方法
                       window.View.viewResource(this.getAttribute('_id'), this.id);
                     }catch(e){}
                }, false);
            }
            
            //附件预览
            var attachments = document.querySelectorAll('div.attachment');
            for(var i = 0; i < attachments.length; i++){
                attachments[i].addEventListener('click', function(e){
                    try{
                       //回调android方法
                       window.View.viewResource(this.getAttribute('_id'), this.id);
                     }catch(e){}
                }, false);
            }
            
            //音频播放
            var audios = document.querySelectorAll('div.audio-play');
            for(var i = 0; i < audios.length; i++){
                audios[i].addEventListener('click', function(e){
                    try{
                      //回调android方法
                      window.View.viewResource(this.getAttribute('_id'), this.id);
                    }catch(e){}
                }, false);
            }
        }
    };
    
    //初始化UI
    function resolve(html, deviceWidth){
        var loading = document.createElement('div');
        loading.className = 'loading light-timeline';
        loading.innerHTML = '加载中..';
        document.body.appendChild(loading);
        
        data.deviceWidth = parseInt(deviceWidth);
        
        var _parser = new Parser(),
            main = document.querySelector('#main');
        main.innerHTML = _parser.filter(html);
        _parser.dispose();
        behavior.listener();
        loading.parentNode.removeChild(loading);
        main.style.visibility = 'visible';
    }
    
    function updateAudioStatus(id, isPlay){
        var play = typeof id === 'object'? id : document.querySelector('#' + id + '.audio-play .play');
        if(play){
            if(isPlay){
                play.setAttribute('play', 1);
                play.setAttribute('src', 'images/play_pause.png');
            }else{
                play.setAttribute('play', 0);
                play.setAttribute('src', 'images/play_normal.png');
            }
        }
    }
    
    /*
     * Public Analyze API
     *   analyze.loading  预加载
     *   analyze.init     解析文档
     *   analyze.start    播放: 将播放与暂停接口剥离开来, 是防止在触发android事件后、android事件会重复调用这个接口从而导致显示与播放器的状态不一致的问题
     *   analyze.pause    暂停
     *   analyze.stop     停止或停止所有: 用于页面上有多个音频文件时, 在点击其它音频时要停止正在播放的音频
     *   analyze.slideTo  滑动
     */
    analyze.init = function(html, deviceWidth){      
      try{
          resolve(helper.filterXSS(html), deviceWidth);
      }catch(e){}
    },
    
    /*
     * 重置图片的src并计算其大小
     * @key 图片key
     * @deviceWidth 设备宽度
     */
    analyze.resetPhoto = function(key, deviceWidth){
        data.deviceWidth = parseInt(deviceWidth);
        var _parser = new Parser();
        _parser.resetPhoto(key, deviceWidth);
    },
    
    //播放音频
    analyze.start = function(id){
        updateAudioStatus(id, true);
    },
    
    //暂停播放
    analyze.pause = function(id){
        this.stop(id);
    },
    
    //停止播放
    analyze.stop = function(id){
        if(id){
            updateAudioStatus(id, false);
        }else{
            var plays = document.querySelectorAll('div.audio-play .play');
            for(var i = 0; i < plays.length; i++){
                var play = plays[i];
			    updateAudioStatus(play, false);
            }
        }
    }
})();