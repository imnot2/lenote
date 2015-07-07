//解析器
var analyze = {};
(function(){
    var Parser = function(html){
        function setup(wrap_name, html){
            var _doc = $('<div></div>');
            _doc.addClass(wrap_name);
            //_doc.html(html.replace(/\r|\n/igm, ''));
            _doc.append(html.replace(/\r|\n/igm, ''));
            return _doc;
        }
        
        this.wrap_name = 'parserDocWrap';
        this.html = html;
        this.doc = setup(this.wrap_name, this.filter(html));
        this.data = {width: 360, main_padding: 10, timeline_icon: 62, content_margin: 5};
        this.width = this.data.width - this.data.main_padding - this.data.content_margin - this.data.timeline_icon;
        this.dispose = function(){
            this.pretreatment();
            this.analyzeMix();
            return this.doc.html();
        };
    };
    
    Parser.prototype = {
        //资源获取
        playTimeFormat: function(msec){
            var sec = parseFloat(msec) / 1000;
            //sec = parseFloat(sec);
            var minute = 0;
            minute = parseInt(sec / 60);
            sec -= minute * 60;
            sec = parseInt(sec);
            return ((minute > 9)? minute : '0' + minute) + ':' + ((sec > 9)? sec : '0' + sec);
        },
        getMkey: function(key){
            var resource = this.getResource(key);
            return resource? resource['mixLocalID'] : '';
        },
        getResource: function(key){
            return lenoteDom.editor.data.attachments.get(key);
        },
        isNesting: function(tag){
            return tag.parent().attr('class') != this.wrap_name;
        },
        isAcross: function(tag, last_mkey){
            //+表示紧邻, ~表示后面的兄弟
            return this.doc.find('[key="' + tag.attr('key') + '"] ~ [mkey="' + last_mkey + '"]').length > 0;
        },
        isSingle: function(tag){
            var tags = [], mkey = tag.attr('mkey');
            switch(tag.get(0).nodeName.toLowerCase()){
                case 'lntext': tags = this.doc.find('lnphoto[mkey="' + mkey + '"], lnaudio[mkey="' + mkey + '"]');break;
                case 'lnphoto': tags = this.doc.find('lntext[mkey="' + mkey + '"], lnaudio[mkey="' + mkey + '"]');break;
                case 'lnaudio': tags = this.doc.find('lnphoto[mkey="' + mkey + '"], lntext[mkey="' + mkey + '"]');break;
            }
            return (tags.length > 0)? false : true;
        },
        getID: function(tag){
            return tag.attr('key') + '_' + Date.parse(new Date()) + (new Date).getMilliseconds() + Math.ceil(Math.random() * 100);
        },
        //解决手机端插入附件时间隙过大的问题
        filter: function(str){
            //return str.replace(/&nbsp; <br\/>/igm, '');
            return str.replace(/&(amp;)?nbsp;\s*?<br\s*?\/?>/igm, '');
        },
        //预处理
        pretreatment: function(){
            //检查元素的mkey值
            var tags = this.doc.find('lnphoto, lnaudio, lntext');
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]), mkey = this.getMkey(tag.attr('key'));
                if(mkey){
                    //替换掉嵌套在其它标签里的mix元素
                    if(this.isNesting(tag)){
                        this.build(tag);
                    }else{
                        tag.attr('mkey', mkey);
                    }
                }else{
                    //替换非mix的自定义元素为普通元素
                    this.build(tag);
                }
            }
            
            //替换掉ln-attachment标签
            tags = this.doc.find('lnattachment');
            for(var i = 0; i < tags.length; i++){
                this.buildAttachment($(tags[i]));
            }
            
            //替换掉不符合规则的mix元素
            //替换掉交叉的mix元素
            tags = this.doc.find('[mkey]');
            var last_mkey = null;
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]);
                if(last_mkey == tag.attr('mkey')){
                    continue;
                }else if(last_mkey === null){
                    last_mkey = tag.attr('mkey');
                }else if(this.isAcross(tag, last_mkey)){
                    this.build(tag);
                }else{
                    last_mkey = tag.attr('mkey');
                }
            }
            
            //替换单(种类)mix元素为普通元素
            tags = this.doc.find('[mkey]'), last_mkey = null;
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]);
                if(last_mkey == tag.attr('mkey')) continue;
                if(this.isSingle(tag)){
                    this.build(tag);
                }else{
                    last_mkey = tag.attr('mkey');
                }
            }
        },
        build: function(tag){
            switch(tag.get(0).nodeName.toLowerCase()){
                case 'lntext': tag.replaceWith(this.buildText(tag));break;
                case 'lnphoto': tag.replaceWith(this.buildPhoto(tag, null, -1));break;
                case 'lnaudio': tag.replaceWith(this.buildAudio(tag));break;
            }
        },
        buildAttachment: function(tag){
            var attachment = this.getResource(tag.attr('key'));
            tag.replaceWith('<a class="attachment noselect ' + attachment.ext + '" _id="' + tag.attr('key') + '" href="' + attachment.url + '" resource="attachment" title="' +
                      attachment.title + '" onselectstart="return false;" unselectable="on">' +
                      '<span class="info" contentEditable="false">' +
                      '<span class="title"><span class="name">' + attachment.name + '</span><span class="ext">' + attachment.type + '</span><span class="c"></span></span>' +
                      '<span class="desc"><span class="ctime">' + attachment.utime + '</span>,<span class="size">' + attachment.sizeof + '</span></span>' +
                      '</span></a>');
        },
        //ln-text中可能存在其它自定义标签需要迭代处理
        buildText: function(tag){
            if(/^\s*<br\s*\/?>\s*$/igm.test(tag.html())) return '<br/>';
            var id = '_text_' + this.getID(tag), tags = tag.find('lnphoto, lnaudio, lntext');
            for(var i = 0; i < tags.length; i++) this.build($(tags[i]));
            return '<span resource="text" _id="' + tag.attr('key') + '" id="' + id + '">' + tag.html() + '</span>';
        },
        buildPhoto: function(tag, resource, width){
            resource = resource || this.getResource(tag.attr('key')), width = width || this.width;
            var id = '_photo_' + this.getID(tag);
            
            if((typeof resource == 'object' && resource.url)){
                var _data = tag.attr('_data'), src = resource.url;
                _data = _data? UE.utils.html(_data) : '';
                //if(width != -1){
                //    //设置图片的高宽
                //    var w = parseInt(width - 25), h = w * (4 / 3), doc = this.doc;
                //    try{
                //        var image_temp = new Image();
                //        image_temp.onload = function(){
                //            if(this.width > w || this.width == 0){
                //                if((this.width != 0) && (this.width == this.height)) h = w;
                //            }else{
                //                w = this.width, h = this.height;
                //            }
                //            //doc.find('#' + id).css({width: w + 'px', height: h + 'px'});
                //            $('#' + id).css({width: w + 'px', height: h + 'px'});
                //        };
                //        image_temp.src = src;
                //        if(image_temp.width > w || image_temp.width == 0){
                //            if((image_temp.width != 0) && (image_temp.width == image_temp.height)) h = w;
                //        }
                //        image_temp = null;
                //    }catch(e){}
                //}
                var img = '<img resource="image" id="' + id + '" _id="' + tag.attr('key') + '" class="photo" src="' + src + '"' +
                          //' style="width:' + w + 'px;height:' + h + 'px;"' +
                          //((width != -1)? (' style="width:' + w + 'px;height:' + h + 'px;"') : '') +
                          ((width != -1)? (' _w="' + parseInt(width - 25) + '"') : '') +
                          ' onerror="this.src=\'/assets/images/img404.png\'" ' + _data + '/>';
            }else{
                var img = '<img resource="image" id="' + id + '" _id="' + tag.attr('key') + '" class="photo" src="images/img404.png"/>';
            }
            return img;
        },
        buildAudio: function(tag){
            var resource = this.getResource(tag.attr('key')), audio = $('<div class="audio"></div>'), _url = utils.getDomain() + resource.url,
                res = ['<div class="audio-play noselect" play="0" resource="audio" id="' + '_audio_' + this.getID(tag) + '" _id="' + tag.attr('key') + '" url="' + _url + '" onselectstart="return false;" unselectable="on">'];
            res.push('<div class="info">');
            res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            res.push('<div class="desc ellipsis">');
            res.push('<span class="size">' + resource.sizeof + '</span><span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            res.push('</div></div></div>');
            
            return audio.html(res.join(''));
        },
        
        buildMixText: function(tag){
            if(/^\s*<br\s*\/?>\s*$/igm.test(tag.html())) return this.buildMixPlain($(tag.html()));
            var resource = this.getResource(tag.attr('key')), text = $('<div class="item clearfix text" time="' + resource.startTime + '"></div>');
            text.html('<div class="timeline"><img class="icon" src="images/text_normal.png"/></div>' + 
                      '<div class="content" style="width:' + this.width + 'px;">' + tag.html() + '</div>');
            
            //修改内部img的宽高
            this.resetSize(text, this.width);
            return text;
        },
        resetSize: function(tag, width){
            var imgs = tag.find('img.photo');
            for(var i = 0; i < imgs.length; i++){
                this.setImgSize($(imgs[i]), width);
            }
        },
        setImgSize: function(img, width){
            //var image_temp = new Image(), w = parseInt(width - 25), h = w * (4 / 3), doc = this.doc;
            ////$(image_temp).load(function(){img.attr('abc', 11)});
            //image_temp.onload = function(){
            //    if(this.width > w || this.width == 0){
            //        if((this.width != 0) && (this.width == this.height)) h = w;
            //    }else{
            //        w = this.width, h = this.height;
            //    }
            //    //img.css({width: w + 'px', height: h + 'px'});
            //    //doc.find('#' + img.attr('id')).css({width: w + 'px', height: h + 'px'});
            //    $('#' + img.attr('id')).css({width: w + 'px', height: h + 'px'});
            //};
            //image_temp.src = img.attr('src');
            //if(image_temp.width > w || image_temp.width == 0){
            //    if((image_temp.width != 0) && (image_temp.width == image_temp.height)) h = w;
            //    img.css({width: w + 'px', height: h + 'px'});
            //}
            //image_temp = null;
            img.attr('_w', parseInt(width - 25));
        },
        buildMixPlain: function(tag){
            var plain = $('<div class="item clearfix plain"></div>');
            plain.html('<div class="content" style="width:' + this.width + 'px;"></div>');
            plain.find('.content').append(tag.clone());
            //plain.find('.content').append($('<div></div>').append(tag.clone()).html());
            
            //修改内部img的宽高
            this.resetSize(plain, this.width);
            return plain;
        },
        buildMixPhoto: function(tag){
            var resource = this.getResource(tag.attr('key')), img = this.buildPhoto(tag, resource, this.width),
                photo = $('<div class="item clearfix photo" time="' + resource.startTime + '"></div>');
            photo.html('<div class="timeline"><img class="icon" src="images/image_normal.png"/></div>' + 
                       '<div class="content" style="width:' + this.width + 'px;">' + img + '</div>');
            return photo;
        },
        buildPhotoGroup: function(photos, phototime){
            var photo = $('<div class="item clearfix photo" time="' + phototime + '"></div>'), res = '';
            
            for(var i in photos){
                //res += $('<div></div>').append(this.buildPhoto(photos[i], null, this.width).clone()).html();
                res += this.buildPhoto(photos[i], null, this.width);
            }
            
            photo.html('<div class="timeline"><img class="icon" src="images/image_normal.png"/></div>' + 
                       '<div class="content" style="width:' + this.width + 'px;">' + res + '</div>');
            return photo;
        },
        buildMixAudio: function(tag, mix_id){
            var resource = this.getResource(tag.attr('key'));
            if(!resource) return tag.clone();
            
            var id = '_audio_' + tag.attr('mkey') + '_' + this.getID(tag), _id = tag.attr('key'), _url = utils.getDomain() + resource.url,
                audio = $('<div class="item clearfix audio" time="0" audio="' + id + '"></div>');
            
            var bw = this.mix_tag_width, bh = parseInt(bw / 3.2), pwh = parseInt(bw / 5.1),
                pt = parseInt(pwh / 3.3), il = pwh + 20, it = parseInt(bh / 2 - 18), tw = bw - il - 30;
            
            var res = ['<div class="timeline"><img class="icon" src="images/audio_normal.png"/></div>'];
            res.push('<div class="content">');
            res.push('<div class="audio-play noselect" play="0" belong="' + mix_id + '" id="' + id + '" _id="' + _id + '" url="' + _url + '" onselectstart="return false;" unselectable="on">');
            res.push('<div class="info">');
            res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            res.push('<div class="desc ellipsis">');
            res.push('<span class="size">' + resource.sizeof + '</span><span class="duration">' + this.playTimeFormat(resource.fullTime) + '</span>');
            res.push('</div></div></div></div>');
            
            audio.html(res.join(''));
            return audio;
        },
        
        buildMix: function(tag, mix_id){
            if(!tag.get(0).tagName || tag.get(0).nodeName.toLowerCase() == '#text'){
                var _wrap = $('<div></div>').append($('<div></div>').append(tag.clone()));
            }else{
                var _wrap = $('<div></div>').append(tag.clone());
            }
            var _tag = _wrap.children().first();
            switch(tag.get(0).nodeName.toLowerCase()){
                case 'lntext': _tag.replaceWith(this.buildMixText(tag));break;
                case 'lnphoto': _tag.replaceWith(this.buildMixPhoto(tag));break;
                case 'lnaudio': _tag.replaceWith(this.buildMixAudio(tag, mix_id));break;
                default: _tag.replaceWith(this.buildMixPlain(tag));
            }
            return _wrap.html();
        },
        
        //解析mix元素
        analyzeMix: function(){
             var tags = this.doc.find('[mkey]'), last_mkey = null, mix = null, result = [];
             for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]);
                if(last_mkey == tag.attr('mkey')) continue;
                
                //创建mix元素
                last_mkey = tag.attr('mkey'), mix = $('<div id="' + '_mix_' + this.getID(tag) + '" _id="' + last_mkey + '" class="mix"></div>');
                mix.html('<div class="top-bg"></div><div class="wrap"></div><div class="bottom-bg"></div>');
                var mixWrap = mix.find('.wrap');
                
                var photos = [], phototime = 0;
                
                if(tag.get(0).nodeName.toLowerCase() == 'lnphoto'){
                    photos.push(tag);
                    phototime = this.getResource(tag.attr('key')).startTime;
                }else{
                    mixWrap.append(this.buildMix(tag.clone(), mix.attr('id')));
                }
                
                //var _tag = tag.next();
                var _tag = $(tag.get(0).nextSibling || tag.get(0).nextElementSibling);
                while(true){
                    if(_tag && _tag.length > 0){
                        var the_double = _tag.clone(), _key = Date.parse(new Date()) + Math.ceil(Math.random() * 100) + '' + i,
                            tagName = the_double.get(0).nodeName.toLowerCase();
                        
                        //通过人为的为普通元素添加key属性方便查找其后是否有last_mkey的兄弟元素
                        if(!_tag.get(0).tagName || _tag.get(0).nodeName.toLowerCase() == '#text'){
                            _tag.replaceWith($('<div _text_node_identifying="note_identifying_for_text_node"></div>').append(_tag.clone()));
                            _tag = this.doc.find('div[_text_node_identifying="note_identifying_for_text_node"]');
                            //if(!_tag) continue;
                            if(!_tag || _tag.length == 0) continue;
                        }
                        //if(_tag && !_tag.attr('key')) _tag.attr('key', _key);
                        //if(_tag && _tag.length > 0 && !_tag.attr('key')) _tag.attr('key', _key);
                        if(_tag && _tag.length > 0 && !_tag.attr('key')) _tag.attr({key: _key, tmpkey: 1});
                    }
                    
                    //查看是否还有同类mix元素
                    if(_tag && _tag.length > 0 && (!_tag.attr('mkey') || _tag.attr('mkey') == last_mkey) && (_tag.attr('mkey') || this.isAcross(_tag, last_mkey))){
                        _tag.removeAttr('_text_node_identifying');
                        if(tagName == 'lnphoto'){
                            var _phototime = this.getResource(the_double.attr('key')).startTime;
                            if(phototime == 0 || phototime == _phototime){
                                photos.push(the_double);
                                if(phototime == 0) phototime = _phototime;
                            }else{
                                if(photos.length > 0){
                                    mixWrap.append(this.buildPhotoGroup(photos, phototime));
                                }
                                photos = [the_double], phototime = _phototime;
                            }
                        }else{
                            if(photos.length > 0){
                                mixWrap.append(this.buildPhotoGroup(photos, phototime));
                                photos = [], phototime = 0;
                            }
                            
                            mixWrap.append(this.buildMix(the_double, mix.attr('id')));
                        }
                        _tag.attr('delete', true);
                        _tag = $(_tag.get(0).nextSibling || _tag.get(0).nextElementSibling);
                    }else{
                        if(photos.length > 0){
                            mixWrap.append(this.buildPhotoGroup(photos, phototime));
                            photos = [], phototime = 0;
                        }
                        if(_tag && _tag.length > 0 && _tag.attr('_text_node_identifying')){
                            _tag.replaceWith(the_double);
                        }else if(_tag && _tag.length > 0 && _tag.attr('tmpkey')){
                            _tag.removeAttr('tmpkey');
                            _tag.removeAttr('key');
                        }
                        break;
                    }
                }
                
                mix = $('<div></div>').append('<div class="c"><br/></div>', mix, '<div class="c"><br/></div>').html();
                result.push({tag: tag, mix: mix});
                
                mix = null, _tag = null;
             }
             
             //删除原始的mix元素
             tags = this.doc.find('[delete="true"]');
             for(var i = 0; i < tags.length; i++) $(tags[i]).remove();
             
             for(var i in result){
                 var item = result[i];
                 item.tag.replaceWith(item.mix);
             }
             
             result = null;
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
     * 2. 普通元素的事件: 音频播放、附件下载
     */
    //初始化UI
    analyze.resolve = function(html){
        //兼容IE将ln-photo等自定义标签中的-删除
        html = html.replace(new RegExp('(ln)-(attachment|photo|text|audio|video)', 'gim'), '$1$2');
        //html = html.replace(new RegExp('(<ln-(attachment|photo|text|audio|video))', 'gim'), '<span class="iecompatible"></span>$1').replace(new RegExp('(ln)-(attachment|photo|text|audio|video)', 'gim'), '$1$2');
        
        var _parser = new Parser(html);
        return _parser.dispose();
    };
})();