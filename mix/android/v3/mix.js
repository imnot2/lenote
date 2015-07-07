/*
 * 注意事项
 * 1. id需要以字母或_开头, 否则document.querySelector将不可用
 */

var analyze = {};
(function(){
    "use strict"

    //默认样式数据
    var data = {main_padding: 10, timeline_icon: 32, content_margin: 5};
    
    //解析器
    var Parser = function(html){
        function setup(wrap_name, html){
            var _doc = document.createElement('div');
            _doc.setAttribute('class', wrap_name);
            _doc.innerHTML = html;
            return _doc;
        }
        
        this.wrap_name = 'parser-doc-wrap';
        this.html = html;
        this.doc = setup(this.wrap_name, this.filter(html));
        this.data = data;
        this.width = parseInt(this.data.deviceWidth) - this.data.main_padding - this.data.content_margin;
        this.mix_tag_width = this.width - this.data.timeline_icon;
        this.dispose = function(){
            this.pretreatment();
            this.analyzeMix();
            this.ending();
            return this.doc.innerHTML;
        };
    }
    
    Parser.prototype = {
        //资源获取
        getMkey: function(key){
            return window.View.getMixIdByResourceId(key);
        },
        getResource: function(key){
            var resource = window.View.getResourceInfoByResourceId(key);
            //if(typeof resource == 'object') return resource;
            try{
                //eval('(' + resource + ')');
                resource = JSON.parse(resource);
            }catch(e){}
            return resource;
        },
        isNesting: function(tag){
            return tag.parentNode.getAttribute('class') != this.wrap_name;
        },
        isAcross: function(tag, last_mkey){
            //+表示紧邻, ~表示后面的兄弟
            return this.doc.querySelector('[key="' + tag.getAttribute('key') + '"] ~ [mkey="' + last_mkey + '"]');
        },
        inArray: function(value, arr){
            var len = arr.length;
            for(var i = 0; i < len; i++){
                if(value == arr[i]) return true;
            }
            return false;
        },
        isSingle: function(tag){
            var tags = [], mkey = tag.getAttribute('mkey');
            switch(tag.nodeName.toLowerCase()){
                case 'ln-text': tags = this.doc.querySelectorAll('ln-photo[mkey="' + mkey + '"], ln-audio[mkey="' + mkey + '"]');break;
                case 'ln-photo': tags = this.doc.querySelectorAll('ln-text[mkey="' + mkey + '"], ln-audio[mkey="' + mkey + '"]');break;
                case 'ln-audio': tags = this.doc.querySelectorAll('ln-photo[mkey="' + mkey + '"], ln-text[mkey="' + mkey + '"]');break;
            }
            return (tags.length > 0)? false : true;
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
        filter: function(str){
            //return str.replace(/(&(amp;)?nbsp;)*?\s*?<br\s*?\/?>/igm, '');
            //return str.replace(/(<\/ln-[^>]+?>)(&(amp;)?nbsp;)*?\s*?<br\s*?\/?>/igm, '$1');
            return str.replace(/(<\/ln-[^>]+?>)(&(amp;)?nbsp;)+?\s*?<br\s*?\/?>/igm, '$1');
        },
        //预处理
        pretreatment: function(){
            //检查元素的mkey值
            var tags = this.doc.querySelectorAll('ln-photo, ln-audio, ln-text');
            for(var i = 0; i < tags.length; i++){
                var tag = tags[i], mkey = this.getMkey(tag.getAttribute('key'));
                if(mkey){
                    //替换掉嵌套在其它标签里的mix元素
                    if(this.isNesting(tag)){
                        this.build(tag);
                    }else{
                        tag.setAttribute('mkey', mkey);
                    }
                }else{
                    //替换非mix的自定义元素为普通元素
                    this.build(tag);
                }
            }
            
            //删除附件标签
            tags = this.doc.querySelectorAll('ln-attachment');
            for(var i = 0; i < tags.length; i++){
                //this.doc.removeChild(tags[i]);
                this.buildAttachment(tags[i]);
            }
            
            //替换掉不符合规则的mix元素
            //替换掉交叉的mix元素
            tags = this.doc.querySelectorAll('[mkey]');
            var last_mkey = null;
            for(var i = 0; i < tags.length; i++){
                var tag = tags[i];
                if(last_mkey == tag.getAttribute('mkey')){
                    continue;
                }else if(last_mkey === null){
                    last_mkey = tag.getAttribute('mkey');
                }else if(this.isAcross(tag, last_mkey)){
                    this.build(tag);
                }else{
                    last_mkey = tag.getAttribute('mkey');
                }
            }
            
            //替换单(种类)mix元素为普通元素
            tags = this.doc.querySelectorAll('[mkey]'), last_mkey = null;
            for(var i = 0; i < tags.length; i++){
                var tag = tags[i];
                if(last_mkey == tag.getAttribute('mkey')) continue;
                if(this.isSingle(tag)){
                    this.build(tag);
                }else{
                    last_mkey = tag.getAttribute('mkey');
                }
            }
        },
        buildAttachment: function(tag){
            var resource = this.getResource(tag.getAttribute('key')), res = [],
                attachment = document.createElement('div');
            //if(typeof resource != 'object') return false;
            
            if(typeof resource == 'object'){
                attachment.id = '_attachment_' + this.getID(tag);
                attachment.setAttribute('_id', tag.getAttribute('key'));
                attachment.className = 'attachment ' + resource.suffix;
                //attachment.style.width = this.width * 0.8 + 'px';
                
                attachment.innerHTML = '<img class="filetype" src="images/files/' + this.getSuffix(resource.suffix) + '.png"/><div class="info"><div class="title">' + resource.title + '</div><div class="size">' + resource.size + '</div></div><div class="arrow"></div>';
                tag.parentNode.replaceChild(attachment, tag);
            }else{
                try{
                    tag.parentNode.removeChild(tag);
                }catch(e){}
            }
        },
        build: function(tag){
            switch(tag.nodeName.toLowerCase()){
                case 'ln-text': tag.parentNode.replaceChild(this.buildText(tag), tag);break;
                case 'ln-photo': tag.parentNode.replaceChild(this.buildPhoto(tag), tag);break;
                case 'ln-audio': tag.parentNode.replaceChild(this.buildAudio(tag), tag);break;
            }
        },
        //ln-text中可能存在其它自定义标签需要迭代处理
        buildText: function(tag){
            var text = document.createElement('span');
            text.innerHTML = tag.innerHTML;
            text.id = '_text_' + this.getID(tag);
            text.setAttribute('_id', tag.getAttribute('key'));
            
            var tags = text.querySelectorAll('ln-photo, ln-audio, ln-text');
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
        
        buildMixText: function(tag){
            var resource = this.getResource(tag.getAttribute('key')), text = document.createElement('div'),
                starttime = -1;
            if(typeof resource == 'object') starttime = resource.starttime;
            
            text.className = 'item clearfix text', text.setAttribute('time', starttime);
            text.innerHTML = '<div class="timeline"><img class="icon" src="images/timeline/text_normal.png"/></div>' + 
                             '<div class="content" style="width:' + this.mix_tag_width + 'px;">' + tag.innerHTML + '</div>';
            
            //修改内部img的宽高
            this.resetSize(text, this.mix_tag_width);
            
            return text;
        },
        
        resetSize: function(tag, width){
            var imgs = tag.querySelectorAll('img.photo');
            for(var i = 0; i < imgs.length; i++){
                //this.setImgSize(imgs[i], width);
                var img = imgs[i];
                img.setAttribute('inmix', 1);
                this.setImgSize(img, width);
            }
            
            var audios = tag.querySelectorAll('div.audio-play');
            for(var i = 0; i < audios.length; i++){
                this.setAudioSize(audios[i], width);
            }
        },
        setAudioSize: function(audio, width){
            var bw = width, bh = parseInt(bw / 3.2), pwh = parseInt(bw / 5.1),
                pt = parseInt(pwh / 3.3), il = pwh + 25, it = parseInt(bh / 2 - 18), tw = bw - il - 60;
            
            audio.style.width = bw + 'px', audio.style.height = bh + 'px';
            var board = audio.querySelector('.board');
            if(board){
                board.style.width = bw + 'px', board.style.height = bh + 'px';
            }
            var play = audio.querySelector('.play');
            if(play){
                play.style.width = play.style.height = pwh + 'px', play.style.top = pt + 'px';
            }
            var info = audio.querySelector('.info');
            if(info){
                info.style.left = il + 'px', info.style.top = it + 'px';
                var items = info.querySelector('.title, .desc');
                for(var i; i < items.length; i++){
                    item[i].style.width = tw + 'px';
                }
            }
        },
        setImgSize: function(img, _width){
            //var image_temp = new Image(), w = parseInt(_width - 25), h = w * (4 / 3);
            //image_temp.src = img.src;
            //if(image_temp.width > w || image_temp.width == 0){
            //    if((image_temp.width != 0) && (image_temp.width == image_temp.height)) h = w;
            //    img.style.width = w + 'px', img.style.height = h + 'px';
            //}
            //image_temp = null;
            
            var width = parseInt(img.style.width), height = parseInt(img.style.height), w = parseInt(_width - 25);
            if(width > w){
                var h = w * (height / width);
                img.style.width = w + 'px', img.style.height = h + 'px';
            }
        },
        
        buildMixPlain: function(tag){
            var plain = document.createElement('div');
            plain.className = 'item clearfix plain';
            //plain.innerHTML = '<div class="content" style="width:' + this.mix_tag_width + 'px;">' + tag.outerHTML + '</div>';
            plain.innerHTML = '<div class="content" style="width:' + this.mix_tag_width + 'px;"></div>';
            plain.querySelector('.content').appendChild(tag.cloneNode(true));
            //plain.style.width = this.mix_tag_width;
            //plain.appendChild(tag);
            
            //修改内部img的宽高
            this.resetSize(plain, this.mix_tag_width);
            
            return plain;
        },
        
        buildMixPhoto: function(tag){
            var resource = this.getResource(tag.getAttribute('key')), img = this.buildPhoto(tag, resource, this.mix_tag_width),
                photo = document.createElement('div'), starttime = -1;
            if(typeof resource == 'object') starttime = resource.starttime;
            
            img.setAttribute('inmix', 1);
            photo.className = 'item clearfix photo', photo.setAttribute('time', starttime);
            photo.innerHTML = '<div class="timeline"><img class="icon" src="images/timeline/image_normal.png"/></div>' + 
                              '<div class="content" style="width:' + this.mix_tag_width + 'px;">' + img.outerHTML + '</div>';
            return photo;
        },
        
        buildPhotoGroup: function(photos, phototime){
            var photo = document.createElement('div'), res = '';
            photo.className = 'item clearfix photo', photo.setAttribute('time', phototime);
            
            for(var i in photos){
                //res += this.buildPhoto(photos[i], null, this.mix_tag_width).outerHTML;
                var img = this.buildPhoto(photos[i], null, this.mix_tag_width);
                img.setAttribute('inmix', 1);
                res += img.outerHTML;
            }
            
            photo.innerHTML = '<div class="timeline"><img class="icon" src="images/timeline/image_normal.png"/></div>' + 
                              '<div class="content" style="width:' + this.mix_tag_width + 'px;">' + res + '</div>';
            return photo;
        },
        
        buildMixAudio: function(tag, mix_id){
            var resource = this.getResource(tag.getAttribute('key')), audio = document.createElement('div');
            if(!resource) return tag.cloneNode(true);
            
            var bw = this.mix_tag_width, bh = parseInt(bw / 3.2), pwh = parseInt(bw / 5.1),
                pt = parseInt(pwh / 3.3), il = pwh + 25, it = parseInt(bh / 2 - 18), tw = bw - il - 35,
                id = '_audio_' + tag.getAttribute('mkey') + '_' + this.getID(tag), _id = tag.getAttribute('key');
            
            audio.className = 'item clearfix audio';
            audio.setAttribute('time', 0);
            audio.setAttribute('audio', id);
            audio.style.minHeight = bh + 'px';
            
            var res = ['<div class="timeline"><img class="icon" src="images/timeline/audio_normal.png"/></div>'];
            res.push('<div class="content">');
            res.push('<div class="audio-play" style="width:' + bw + 'px;height:' + bh + 'px;" id="' + id + '" _id="' + _id + '">');
            res.push('<img style="width:' + bw + 'px;height:' + bh + 'px" class="board" src="images/player_bg.png"/>');
            res.push('<img class="play" play="0" belong="' + mix_id + '" src="images/play_normal.png" style="width:' + pwh + 'px;height:' + pwh + 'px;top:' + pt + 'px"/>');
            res.push('<div class="info" style="left:' + il + 'px;top:' + it + 'px;">');
            res.push('<div class="title" style="width:' + tw + 'px">' + resource.title + '</div><div class="desc" style="width:' + tw + 'px">');
            //res.push('<span class="size">' + resource.size + '</span><span class="duration">' + resource.fulltime + '</span>');
            res.push('<span class="size">' + resource.size + '</span>');
            if(resource.fulltime && resource.fulltime != '00:00') res.push('<span class="duration">' + resource.fulltime + '</span>');
            res.push('</div></div></div></div>');
            
            audio.innerHTML = res.join('');
            return audio;
        },
        
        buildMix: function(tag, mix_id){
            var tmp = document.createElement('div');
            tmp.appendChild(tag);
            switch(tag.nodeName.toLowerCase()){
                case 'ln-text': tmp.replaceChild(this.buildMixText(tag), tag);break;
                case 'ln-photo': tmp.replaceChild(this.buildMixPhoto(tag), tag);break;
                case 'ln-audio': tmp.replaceChild(this.buildMixAudio(tag, mix_id), tag);break;
                default: tmp.replaceChild(this.buildMixPlain(tag), tag);
            }
            
            return tmp.firstChild;
        },
        
        //解析mix元素
        analyzeMix: function(){
             //document.querySelectorAll('#main > *')
             var tags = this.doc.querySelectorAll('[mkey]'), last_mkey = null, mix = null, result = [];
             for(var i = 0; i < tags.length; i++){
                var tag = tags[i];
                if(last_mkey == tag.getAttribute('mkey')) continue;
                
                //创建mix元素
                last_mkey = tag.getAttribute('mkey'), mix = document.createElement('div');
                mix.className = 'mix', mix.id = '_mix_' + this.getID(tag), mix.setAttribute('_id', last_mkey);
                mix.innerHTML = '<div class="top-bg"></div><div class="wrap"></div><div class="bottom-bg"></div>';
                var mixWrap = mix.querySelector('.wrap');
                
                var photos = [], phototime = 0;
                
                if(tag.nodeName.toLowerCase() == 'ln-photo'){
                    photos.push(tag);
                    try{
                        phototime = this.getResource(tag.getAttribute('key')).starttime;
                    }catch(e){
                        phototime = -1;
                    }
                }else{
                    mixWrap.appendChild(this.buildMix(tag.cloneNode(true), mix.id));
                }
                var _tag = tag.nextSibling;
                while(true){
                    if(_tag){
                        var the_double = _tag.cloneNode(true), _key = Date.parse(new Date()) + Math.ceil(Math.random() * 100) + '' + i, tmp = null,
                            tagName = the_double.nodeName.toLowerCase();
                        
                        //通过人为的为普通元素添加key属性方便查找其后是否有last_mkey的兄弟元素
                        if(!_tag.tagName || _tag.nodeName.toLowerCase() == '#text'){
                            tmp = document.createElement('div');
                            //tmp.id = '_tmp_' + _key;
                            tmp.insertBefore(_tag.cloneNode(true));
                            _tag.parentNode.replaceChild(tmp, _tag);
                            //_tag = this.doc.querySelector('#' + tmp.id)
                            _tag = tmp;
                        }
                    }
                    
                    if(_tag && !_tag.hasAttribute('key')){
                        _tag.setAttribute('tmpkey', 1);
                        _tag.setAttribute('key', _key);
                    }
                    
                    //查看是否还有同类mix元素
                    if(_tag && (!_tag.hasAttribute('mkey') || _tag.getAttribute('mkey') == last_mkey) && (_tag.hasAttribute('mkey') || this.isAcross(_tag, last_mkey))){
                    //if(_tag && this.isAcross(_tag, last_mkey)){
                        //图片组
                        if(tagName == 'ln-photo'){
                            try{
                                var _phototime = this.getResource(the_double.getAttribute('key')).starttime;
                            }catch(e){
                                var _phototime = -1;
                            }
                            if(phototime == 0 || phototime == _phototime){
                                photos.push(the_double);
                                if(phototime == 0) phototime = _phototime;
                            }else{
                                if(photos.length > 0){
                                    mixWrap.appendChild(this.buildPhotoGroup(photos, phototime));
                                }
                                photos = [the_double], phototime = _phototime;
                            }
                        }else{
                            if(photos.length > 0){
                                mixWrap.appendChild(this.buildPhotoGroup(photos, phototime));
                                photos = [], phototime = 0;
                            }
                            
                            mixWrap.appendChild(this.buildMix(the_double, mix.id));
                        }
                        _tag.setAttribute('delete', true);
                        _tag = _tag.nextSibling;
                    }else{
                        if(photos.length > 0){
                            mixWrap.appendChild(this.buildPhotoGroup(photos, phototime));
                            photos = [], phototime = 0;
                        }
                        if(tmp && _tag){
                            _tag.parentNode.replaceChild(the_double, _tag);
                        }else if(_tag){
                            if(_tag.hasAttribute('tmpkey')){
                                _tag.removeAttribute('tmpkey');
                                _tag.removeAttribute('key');
                            }
                        }
                        break;
                    }
                }
                
                //console.info(mix)
                result.push({tag: tag, mix: mix});
                
                mix = null, _tag = null;
             }
             
            //删除原始的mix元素
            tags = this.doc.querySelectorAll('[delete="true"]');
            //for(var i = 0; i < tags.length; i++) tags[i].remove();
            //for(var i = 0; i < tags.length; i++) this.doc.removeChild(tags[i]);
            for(var i = 0; i < tags.length; i++){
                try{
                    tags[i].parentNode.removeChild(tags[i]);
                }catch(e){}
            }
            
            for(var i in result){
                var item = result[i];
                this.doc.replaceChild(item.mix, item.tag);
            }
            
            result = null;
        },
        ending: function(){
            var plain = this.doc.querySelectorAll('.mix .item.plain .content');
            for(var i = 0; i < plain.length; i++){
                var item = plain[i];
                //if(item.innerHTML == '' || /^\s*<br\s*\/?>\s*$/igm.test(item.innerHTML)) item.parentNode.remove();
                if(item.innerHTML == '' || /^\s*<br\s*\/?>\s*$/igm.test(item.innerHTML)){
                    try{
                        var _parent = item.parentNode;
                        _parent.parentNode.removeChild(_parent);
                    }catch(e){}
                }
            }
        },
        resetPhoto: function(key, deviceWidth){
            var photos = document.querySelectorAll('[_id="' + key + '"]');
            if(photos.length > 0){
                var resource = this.getResource(key);
                if(typeof resource == 'object'){
                    for(var i = 0; i < photos.length; i++){
                        var photo = photos[i], width = (photo.hasAttribute('inmix')? this.mix_tag_width : this.width) - 25;
                        if(!resource.src) continue;
                         photo.style.width = '0';
                         photo.style.height = '0';
                       
                        //添加时间戳解决mix中有时间图片无法显示的问题：由于手机端使用多进程生成缩略图且缩略图地址在第一次加载时就已存在，所以在缩略图生成后调用resetPhoto重置图片地址时
                        //由于该图片已加载过一次，webview就会使用缓存中的图片，除非图片地址不一样才可以避免使用错误的图片缓存数据
                        photo.setAttribute('src', resource.src + '?' + (new Date()).getTime());
                        photo.onload=function(){
                            if(resource.width > 0){
                                if(resource.width > width){
                                    var h = width * (resource.height / resource.width);
                                    photo.style.width = width + 'px', photo.style.height = h + 'px';
                                }else{
                                    photo.style.width = resource.width + 'px', photo.style.height = resource.height + 'px';
                                }
                            }else{
                                var h = width * (4 / 3);
                                photo.style.width = width + 'px', photo.style.height = h + 'px';
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
                    var play_img = this.querySelector('img.play'), id = this.id;
                    
                    if(play_img.hasAttribute('belong')){
                        id = play_img.getAttribute('belong');
                        var icon = document.querySelector('#' + id + ' [audio="' + this.id + '"] .timeline .icon');
                        behavior.updateIconState(icon);
                        if(play_img.getAttribute('play') == 1){
                            icon.classList.remove('light-timeline');
                            icon.setAttribute('src', icon.getAttribute('src').replace(/_active/i, '_normal'));
                        }
                    }
                    
                    if(play_img.getAttribute('play') == 0){
                      //play_img.setAttribute('play', 1);
                      //play_img.setAttribute('src', 'images/play_pause.png');
                      if(play_img.hasAttribute('belong')) behavior.slide(id, 0, 50);
                    }else{
                      play_img.setAttribute('play', 0);
                      play_img.setAttribute('src', 'images/play_normal.png');
                    }
                    
                    try{
                      //回调android方法
                      window.View.viewResource(this.getAttribute('_id'), id);
                    }catch(e){}
                }, false);
            }
        },
        cleanIconState: function(id){
            if(!id) return;
            var icons = document.querySelectorAll('#' + id + ' .item .timeline .icon[status=active]');
            for(var i = 0; i < icons.length; i++) behavior.updateIconState(icons[i]);
        },
        updateIconState: function(icon){
            if(!icon) return;
            var src = icon.getAttribute('src');
            if(src){
              var res = src.replace(new RegExp('_normal|_active', 'gim'), function(s){
                  if(s == '_normal'){
                    icon.setAttribute('status', 'active');
                    //icon.className = 'light-timeline';
                    icon.classList.add('light-timeline');
                    return  '_active';
                  }else{
                    icon.removeAttribute('status');
                    //icon.className = '';
                    icon.classList.remove('light-timeline');
                    return '_normal';
                  }
              }, false);
              icon.setAttribute('src', res);
            }
        },
        slide: function(id, second, speed, ignoreUpdateIcon){
            var clientHeight = document.documentElement.clientHeight;
            var scrollHeight = document.documentElement.scrollHeight;
            if(clientHeight >= scrollHeight) return false;
            if(!speed) speed = 100;
            
            var target = document.querySelector('#' + id + ' .item[time="' + second + '"]');
            if((target)){
                if(!ignoreUpdateIcon){
                  behavior.cleanIconState(id);
                  behavior.updateIconState(target.querySelector('.timeline .icon'));
                }
                
                var pos = target.offsetTop - 5, current_pos = document.body.scrollTop, distance = pos - current_pos, duration = Math.abs(distance) / speed;
                var it = setInterval(function(){
                  if(distance > 0){
                    current_pos = current_pos + duration;
                    if(current_pos >= pos){
                      current_pos = pos;
                      clearInterval(it);
                    }
                  }else{
                    current_pos = current_pos - duration;
                    if(current_pos <= pos){
                      current_pos = pos;
                      clearInterval(it);
                    }
                  }
                  document.body.scrollTop = current_pos;
                }, 1);
            }
        }
    };
    
    /*
     * 解析策略
     * 1. 如果在普通元素中存在mix(即mix元素嵌套在普通元素中)则当成普通元素解析, 防止因时间轴的原因破坏了文档格式
     * 2. 如果两个mix元素交叉，则交叉的部分将被当成普通元素解析
     * 3. 单种类的mix元素将当成普通标签解析, 如全部是ln-photo标签的mix将当成普通元素
     * 解析步骤
     * 1. 检查自定义标签是否是mix元素
     * 2. 将不符合mix解析策略的自定义标签替换成普通元素
     * 3. 按顺序解析各mix
     * 4. 设置mix之间的普通元素的样式：内容宽度及其中图片的样式
     * 事件监听
     * 1. mix事件
     * 2. 普通元素的事件: 音频播放、图片预览
     */
    //初始化UI
    function resolve(html, deviceWidth){
        data.deviceWidth = parseInt(deviceWidth);
        var _parser = new Parser(html);
        return _parser.dispose();
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
    
    //预加载UI
    analyze.loading = function(){
        var main = document.querySelector('#main');
        main.innerHTML = '<div class="loading"></div>';
    };
    
    /*
     * 初始化
     * @html  笔记内容
     * @deviceWidth 设备宽度
     */
    //analyze.init = function(html, deviceWidth, isMarked){
    analyze.init = function(html, deviceWidth){
      this.loading();
      
      var main = document.querySelector('#main');
      //main.innerHTML = resolve(html.replace(/\r|\n/igm, '') + (isMarked? '<img src="images/marked.png" alt="" class="marked"/>' : ''), deviceWidth);
      //main.innerHTML = resolve(html.replace(/["']/igm, function(a, b){
      //  if(a === b) return a;
      //  return {
      //      '"': '&quot;',
      //      "'": '&#39;'
      //  }[a];
      //}).replace(/\r|\n/igm, ''), deviceWidth);
      //先将所有标签内属性的'换成"，然后替换所有'为&#39;
      //main.innerHTML = resolve(html.replace(/<[^>]+?>/igm, function(a){
      //  return a.replace(/'/igm, '"');
      //}).replace(/'/igm, function(a, b){
      //  if(a === b) return a;
      //  return {"'": '&#39;'}[a];
      //}).replace(/\r|\n/igm, ''), deviceWidth);
      
      //替换空白的ln-text
      html = html.replace(/<\s*ln-text[^>]*?>(&nbsp;|<[\s\/]*br[\s\/]*>|\r|\n|\s*)*<\/ln-text>/igm, '');
      try{
        main.innerHTML = resolve(html.replace(/\r|\n/igm, ''), deviceWidth);
      }catch(e){
        main.innerHTML = html.replace(/\r|\n/igm, '');
      }
      
      //document.querySelector('body').style.width = deviceWidth + 'px'
      //document.body.style.width = deviceWidth + 20 + 'px';
      
      //事件监听
      behavior.listener();
    },
    
    /*
     * 重置图片的src并计算其大小
     * @key 图片key
     * @deviceWidth 设备宽度
     */
    analyze.resetPhoto = function(key, deviceWidth){
        data.deviceWidth = parseInt(deviceWidth);
        var _parser = new Parser('');
        _parser.resetPhoto(key, deviceWidth);
    },
    
    /*
     *  播放音频
     *  @id mix id
     */
    analyze.start = function(id){
        var play = document.querySelector('#' + id + (/^_mix_/igm.test(id)? ' .audio-play .play[belong]' : '.audio-play .play'));
        if(play){
            if(play.getAttribute('play') == 0){
                play.setAttribute('play', 1);
                play.setAttribute('src', 'images/play_pause.png');
            }
        }
    },
    
    /*
     *  暂停播放
     *  @id mix id
     */
    analyze.pause = function(id){
        var play = document.querySelector('#' + id + (/^_mix_/igm.test(id)? ' .audio-play .play[belong]' : '.audio-play .play'));
        if(play){
            if(play.getAttribute('play') == 1){
			    play.setAttribute('play', 0);
				play.setAttribute('src', 'images/play_normal.png');
            }
        }
    },
    
    /*
     * 停止播放
     * @id mix id
     */
    analyze.stop = function(id){
        if(id){
            behavior.cleanIconState(id);
            var play = document.querySelector('#' + id + (/^_mix_/igm.test(id)? ' .audio-play .play[belong]' : '.audio-play .play'));
            if(play){
                play.setAttribute('play', 0);
                play.setAttribute('src', 'images/play_normal.png');
            }
            if(/^_mix_/igm.test(id)) this.slideTo(id, 0, 50, true);
        }else{
            var icons = document.querySelectorAll('.mix .item .timeline .icon[status=active]');
            for(var i = 0; i < icons.length; i++) behavior.updateIconState(icons[i]);
            
            var plays = document.querySelectorAll('div.audio-play .play');
            for(var i = 0; i < plays.length; i++){
                var play = plays[i];
			    play.setAttribute('play', 0);
				play.setAttribute('src', 'images/play_normal.png');
            }
        }
    },
    
    /*
     * 滑动
	 * @id mix ID
	 * @second 当前播放的秒数
	 * @speed  在指定的时间内完成动画，默认为100ms
     */
    analyze.slideTo = function(id, second, speed, ignoreUpdateIcon){
        behavior.slide(id, second, speed, ignoreUpdateIcon);
    }
})();