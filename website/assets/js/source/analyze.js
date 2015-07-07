/*
 *  author: gejian1@lenovo.com
 *  description: 笔记内容过滤及转换
 */

var lenoteAnalyze = {};
(function(){
    var image = {
        encode: function(dom){
            var _data = '';
            if(dom.attr('style')) _data += 'style="' + dom.attr('style') + '" ';
            if(dom.attr('title')) _data += 'title="' + dom.attr('title') + '" ';
            if(dom.attr('width')) _data += 'width="' + dom.attr('width') + '" ';
            if(dom.attr('height')) _data += 'height="' + dom.attr('height') + '" ';
            if(dom.attr('border')) _data += 'border="' + dom.attr('border') + '" ';
            if(dom.attr('hspace')) _data += 'hspace="' + dom.attr('hspace') + '" ';
            if(dom.attr('vspace')) _data += 'vspace="' + dom.attr('vspace') + '" ';
            if(dom.attr('alt')) _data += 'alt="' + dom.attr('alt') + '" ';
            _data = _data? ' _data="' + Base64.encode(UE.utils.unhtml(_data)) + '"' : '';
            return '<ln-photo key="' + dom.attr('key') + '"' + _data + '></ln-photo>';
        },
        decode: function(dom){
            var attachment = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            //if(!attachment) return dom;
            if(attachment){
                if(lenoteTag.isSupportForWeb(attachment._type) == 'image'){
                    var _data = dom.attr('_data');
                    try{
                        _data = _data? UE.utils.html(Base64.decode(_data)) : '';
                    }catch(e){
                        _data = '';
                    }
                    return '<img resource="image" key="' + dom.attr('key') + '" src="' + attachment.url + '" onerror="this.src=\'/assets/images/img404.png\'" ' + _data + '/>';
                }else{
                    return lenoteTag.getTag(attachment, dom.attr('key'));
                }
            }else{
                return '<img resource="image" key="' + dom.attr('key') + '" src="/assets/images/img404.png"/>';
            }
        }
    };
    var attachment = {
        encode: function(dom){
            //dom.nextAll('br').remove();
            dom.next('br').remove();
            //根据附件的_type类型来将其它设备(android)支持的附件标签转为相应自定义标签，如图片形式的附件或wav的音频附件等
            //保存时需要判断该附件在其它设备上是否支持，如支持则需要转成相应的自定义标签(如wav的音频android是支持这种格式的，所以保存时需要转成ln-audio，但在web上却不支持需要显示成附件形式)
            var attachment = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            if(attachment){
                var tag = lenoteTag.validTag(attachment, dom.attr('key'));
                if(tag) return tag;
            }
            return '<ln-attachment key="' + dom.attr('key') + '"></ln-attachment>';
        },
        decode: function(dom){
            var attachment = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            //if(!attachment) return dom;
            if(!attachment) return '';
            //return '<a class="attachment noselect ' + attachment.ext + '" key="' + dom.attr('key') + '" href="' + attachment.url + '" resource="attachment" title="' +
            //          attachment.title + '" onselectstart="return false;" unselectable="on" contentEditable="false" ondragstart="return false" target="_blank">' +
            //          '<span class="info">' +
            //          '<span class="title"><span class="name">' + attachment.name + '</span><span class="ext">' + attachment.type + '</span><span class="c"></span></span>' +
            //          //'<span class="desc"><span class="ctime">' + attachment.utime + '</span>,<span class="size">' + attachment.sizeof + '</span></span>' +
            //          '<span class="desc">' + attachment.sizeof + '</span>' +
            //          //'</span></a><br/>';
            //          '</span></a>';
           return lenoteTag.getTag(attachment, dom.attr('key'));
        }
    };
    var audio = {
        encode: function(dom){
            return '<ln-audio key="' + dom.attr('key') + '"></ln-audio>';
        },
        decode: function(dom){
            var resource = lenoteDom.editor.data.attachments.get(dom.attr('key'));
            //if(!resource) return dom;
            if(!resource) return '';
            //var audio = $('<div class="audio noselect" resource="audio" key="' + dom.attr('key') + '" onselectstart="return false;" unselectable="on" contentEditable="false" ondragstart="return false"></div>'),
            //      res = ['<div class="audio-play" play="0" id="' + utils.uuid('_audio_') + '_' + resource.local_id + '" _id="' + resource.local_id + '" url="' + resource.url + '">'];
            //res.push('<div class="info">');
            //res.push('<div class="title ellipsis clearfix" title="' + resource.title + '"><span class="name ellipsis">' + resource.name + '</span><span class="ext">' + resource.type + '</span></div>');
            //res.push('<div class="desc ellipsis">');
            ////res.push('<span class="size">' + resource.sizeof + '</span><span class="duration">' + utils.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('<span class="size">' + resource.sizeof + '</span>');
            //if(resource.fullTime) res.push('<span class="duration">' + utils.playTimeFormat(resource.fullTime) + '</span>');
            //res.push('</div></div></div>');
            //return audio.html(res.join(''));
            
            return lenoteTag.getTag(resource, dom.attr('key'));
        }
    };
    //需要递归处理-包含其它自定义标签时
    var text = {
        encode: function(dom){
            if(/^\s*<br\s*\/?>\s*$/.test(dom.html())) return '<br/>';
            return '<ln-text key="' + dom.attr('key') + '">' + dom.html() + '</ln-text>';
        },
        decode: function(dom){
            if(/^\s*<br\s*\/?>\s*$/.test(dom.html())) return '<br/>';
            //解决ie下不能查找带-的自定义标签
            if(UE.browser.ie){
                var resources = dom.find('[key]');
            }else{
                var resources = dom.find('ln-attachment, ln-photo, ln-text, ln-audio');
            }
            
            $.each(resources, function(i, r){
               tags_decode(r);
            });
            return '<span resource="text" key="' + dom.attr('key') + '">' + dom.html() + '</span>';
        }
    };
    
    //转换自定义标签为普通标签
    var tags_decode = function(dom){
        var _r = $(dom), tagName = dom.tagName.toLowerCase();
        switch(tagName){ //r.nodeName.toLowerCase()
            case 'ln-attachment': _r.replaceWith(attachment.decode(_r));break;
            case 'ln-photo': _r.replaceWith(image.decode(_r));break;
            case 'ln-text': _r.replaceWith(text.decode(_r));break;
            case 'ln-audio': _r.replaceWith(audio.decode(_r));break;
            case 'ln-video': break;
        }
    };
    
    //过滤onclick及javascript:
    var filterTo = function(html){
        //删除禁止的标签、属性/事件、成对的空标签、多余的空格/tab符
        var inhibitTag = 'script|applet|html|frame|frameset|head|iframe|link|meta|marquee|noframes|noscript|object|param|xml';
        //html = html.replace(new RegExp('<(' + inhibitTag + ').*?>.*?</(' + inhibitTag + ')>', 'igm'), '')
        //           .replace(/(<[^>]*?\s)on[^>\s'"=]*?\s*=\s*(["'\s]?[^>/"'\s]*["'\s]?)?([^>]*?>)/igm, '$1$3')
        //           .replace(/<[^>]+?>(\s|&nbsp;)*?<\s*\/[^>]+?>/igm, '');
        //var pattern = /(<[^>]*?\s)(on|dynsrc|data|accesskey|tabindex)[^>\s'"=]*?\s*=\s*(["'\s]?[^>\/"'\s]*["'\s]?)?([^>]*?>)/igm;
        var pattern = /(<[^>]*?\s)(on|dynsrc|data|accesskey|tabindex)[^>\s'"=]*?\s*=[^>]*?(?="\s|\/?>)/igm;
        while(pattern.test(html)){
            //html = html.replace(pattern, '$1$4');
            html = html.replace(pattern, function(){
                if(arguments.length > 1){
                    //return arguments[1].replace(/\s+"$/, '');
                    return arguments[1] + '!DELMark!';
                }else{
                    return arguments[0];
                }
            });
        }
        html = html.replace(/!DELMark!(\s?")?/, '')
                   .replace(new RegExp('<(' + inhibitTag + ').*?>.*?</(' + inhibitTag + ')>', 'igm'), '')
                   //.replace(/<[^>\/]+?>(\s|&nbsp;)*?<\s*\/[^>]+?>/igm, '').replace(/\s+/igm, ' ');
                   //.replace(/<(?!\s*\/)[^>]+?>(\s|&nbsp;)*?<\s*\/[^>]+?>/igm, '').replace(/\s+/igm, ' '); //删除空标签时暂时无法分辨<img src=...></p>不同标签的空标签情况
                   .replace(/\s+/igm, ' ');
        
        var dom = $('<div id="domwrap">' + html + '</div>');
        dom.find('[href*=javascript], [href*=vbscript]').not('[href="javascript:;"]').removeAttr('href');
        //dom.find('[onclick], [onload], [onunload], [onchange], [onsubmit], [onreset], [onselect], [onblur], [onfocus], [onabort], [ondblclick], [onmousedown], [onmousemove], [onselectstart]' +
        //               '[onmouseout], [onmouseover], [onmouseup], [onerror], [onresize], [onscroll]').not('[onselectstart="return false;"]').removeAttr('onclick').removeAttr('onload')
        //               .removeAttr('onsubmit').removeAttr('onreset').removeAttr('onselect').removeAttr('onblur').removeAttr('onfocus').removeAttr('onabort').removeAttr('ondblclick')
        //               .removeAttr('onmousemove').removeAttr('onmousemove').removeAttr('onmouseout').removeAttr('onmouseover').removeAttr('onmouseup').removeAttr('onerror')
        //               .removeAttr('onresize').removeAttr('onscroll').removeAttr('onselectstart').removeAttr('onunload').removeAttr('onchange');
        return dom;
    };
    
    var handle_text_tag = function(html){
        //将ln-text转换成系统标签
        var types = 'attachment|photo|text|audio|video',
            html = html.replace(new RegExp('<\s*?(ln)-(' + types + ')', 'gim'), function(str){
                return '<span type_="' + arguments[2].toLowerCase() + '"';
            }).replace(new RegExp('<\/(ln)-(' + types + ')>', 'gim'), '</span>');
        
        var _doc = $('<div></div>');
        _doc.append(html);
        
        //将ln-text中的自定义标签及img移至ln-text后面
        function sortout_text(){
            var tags = _doc.children('span[type_="text"]'), isRecursion = false;
            
            for(var i = 0; i < tags.length; i++){
                var tag = $(tags[i]), tmp = tag.find('[type_="attachment"], [type_="photo"], [type_="text"], [type_="audio"], [type_="video"], img');
                
                if(tmp.length > 0){
                    isRecursion = true;
                    for(var j = tmp.length - 1; j >= 0; j--){
                        $(tmp[j]).insertAfter(tag);
                    }
                }
            }
            
            if(isRecursion){
                return arguments.callee();
            }else{
                return _doc;
            }
        }
        
        sortout_text();
        
        //恢复被替换的ln-text/ln-photo等标签并删除空白或只包含&nbsp;、<br>、空标签的ln-text
        var tags = _doc.find('[type_="attachment"], [type_="photo"], [type_="text"], [type_="audio"], [type_="video"]');
        for(var i = 0; i < tags.length; i++){
            var tag = $(tags[i]), key = tag.attr('key');
            if(!key){
                tag.remove();
                continue;
            }
            switch(tag.attr('type_').toLowerCase()){
               case 'attachment': tag.replaceWith('<ln-attachment key="' + key + '"></ln-attachment>');break;
               case 'photo': var _data = tag.attr('_data')? (' _data="' + tag.attr('_data') + '"') : ''; tag.replaceWith('<ln-photo key="' + key + '"' + _data + '></ln-photo>');break;
               case 'text':
                  var _content = tag.html().replace(/<[^>]+>/igm, '');
                 if(/^(&nbsp;|<[\s\/]*br[\s\/]*>|\s*)*$/igm.test(_content)){
                    tag.remove();
                 }else{
                    tag.replaceWith('<ln-text key="' + key + '">' + tag.html() + '</ln-text>');
                 }
                 break;
               case 'audio': tag.replaceWith('<ln-audio key="' + key + '"></ln-audio>');break;
               case 'video': tag.replaceWith('<ln-video key="' + key + '"></ln-video>');break;
            }
        }
        
        //return _doc.html().replace(/<\s*ln-text[^>]*?>(&nbsp;|<[\s\/]*br[\s\/]*>|\s*)*<\/ln-text>/igm, '');
        return _doc.html();
    };
    
    var handle_attachskins = function(dom){
        var attachskins = dom.find('span.attachskin'), isRecursion = false;
        for(var i = 0; i < attachskins.length; i++){
            var attachskin = $(attachskins[i]), isRecursion = attachskin.children('span.attachskin').length > 0,
                 _content = $.trim(attachskin.html().replace(/&nbsp;/igm, ''));
            _content? attachskin.replaceWith(_content) : attachskin.remove();
            if(isRecursion) break;
        }
        if(isRecursion){
            arguments.callee(dom);
        }else{
            return true;
        }
    };
    
    lenoteAnalyze.encode = function(html){
       var dom = filterTo(html);
        //test: lenoteAnalyze.encode(lenoteDom.editor.editor.getContent())
        var resources = dom.find('[resource]');
        $.each(resources, function(i, r){
           var _r = $(r);
           switch(_r.attr('resource')){
               case 'attachment': _r.replaceWith(attachment.encode(_r));break;
               case 'image': _r.replaceWith(image.encode(_r));break;
               case 'text': _r.replaceWith(text.encode(_r));break;
               case 'audio': _r.replaceWith(audio.encode(_r));break;
               case 'video': break;
           }
        });
        
        //删除附件外包装：attachskin
        var attachskins = dom.find('span.attachskin');
        if(attachskins.length > 0){
            //for(var i = 0; i < attachskins.length; i++){
            //    var attachskin = $(attachskins[i]), btnattact =attachskin.children('button.btnattact'),
            //         _content = $.trim(btnattact.html());
            //    if(_content){
            //        //attachskin.replaceWith(_content);
            //        btnattact.replaceWith(_content);
            //    }else{
            //        attachskin.remove();
            //    }
            //}
            //递归处理附件外包装
            handle_attachskins(dom);
            var btnattacts = dom.find('button.btnattact');
            for(var i = 0; i < btnattacts.length; i++){
                var btnattact = $(btnattacts[i]), _content = $.trim(btnattact.html());
                _content? btnattact.replaceWith(_content) : btnattact.remove();;
            }
            dom.find('span.attachskin, button.btnattact').remove();
        }
        
        //删除baidu自定义标签:baidu_bookmarks
        var baidu_bookmarks = dom.find('[id^=_baidu_bookmark_]');
        if(baidu_bookmarks.length > 0){
            for(var i = 0; i < baidu_bookmarks.length; i++){
                //var baidu_bookmark = $(baidu_bookmarks[i]), _contect = $.trim(baidu_bookmark.html());
                //_content? baidu_bookmark.replaceWith(_content) : baidu_bookmark.remove();
                //不使用上面的判断是为了解决在ie下编辑器书签是有内容的: &zwj;
                $(baidu_bookmarks[i]).remove();
            }
        }
        
        //还原顶级自定义标签元素的层级关系
        var all_p = dom.children('p');
        if(all_p.length > 0){
            for(var i = 0; i < all_p.length; i++){
                var p = $(all_p[i]), tags = p.children('[key]');
                if(tags.length > 0){
                    var isReplace = false;
                    for(var j = 0; j < tags.length; j++){
                        var tag = $(tags[j]), resource = lenoteDom.editor.data.attachments.get(tag.attr('key'));
                        //if(resource && resource.mixLocalID){ //仅mix元素才提升其等级
                        if(resource){
                            isReplace = true;
                            break;
                        }
                    }
                    
                    if(isReplace) p.replaceWith(p.html());
                }
            }
        }
        
        //return dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        var _html = handle_text_tag(dom.html());
        //return _html.replace(/(<p><br\s*?\/?><\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        //_html = _html.replace(/(<p><br\s*?\/?><\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        _html = _html.replace(/(<p>(<br\s*?\/?>)*<\/p>)+$/igm, '').replace(/[^<\s]*?=""/igm, '');
        //删除自定义标签后面的紧跟的br
        _html = _html.replace(/(<\/ln-[^>]+?>)(<br\s*?\/?>)+/igm, '$1').replace(/(<br\s*?\/?>)+(<ln-[^>]+?>)/igm, '$2').replace(/&#8203;/igm, '');
        
        //IE下需要特殊处理的
        if(UE.browser.ie && UE.browser.version < 11){
            if(UE.browser.version == 7) _html = _html.replace(/&nbsp;<\/button><\/span>&nbsp;/igm, '');
            var _types = 'attachment|audio|video';
            _html = _html.replace(new RegExp('(<\/ln-(' + _types + ')[^>]*?>)(&nbsp;)+', 'gim'), '$1').replace(new RegExp('(&nbsp;)+(<ln-(' + _types + ')[^>]*?>)'), '$2');
        }
        return _html;
    };
    
    lenoteAnalyze.decode = function(html, isEdit){
        //编辑与预览时都需要删除空白的ln-text，包括但不限于&nbsp;、空格、tab、br、回车等
        html = html.replace(/<\s*ln-text[^>]*?>(&nbsp;|<[\s\/]*br[\s\/]*>|\r|\n|\s*)*<\/ln-text>/igm, '');
        
        var dom = filterTo(html);
        dom.find('img').attr('onerror', "this.src='/assets/images/img404.png'");
        
        //删除baidu自定义标签:baidu_bookmarks
        var baidu_bookmarks = dom.find('[id^=_baidu_bookmark_]');
        baidu_bookmarks.remove();
        
        //编辑自定义标签需要转换成普通格式
        if(isEdit){
            //解决ie下不能查找带-的自定义标签
            if(UE.browser.ie){
                var resources = dom.find('[key]');
            }else{
                var resources = dom.find('ln-attachment, ln-photo, ln-text, ln-audio, ln-video');
            }
            
            $.each(resources, function(i, r){
               tags_decode(r);
            });
            //var res = dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, '') + '<p><br/></p>';
            var res = dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, '');
            res = res.replace(/<ln-[^>]+?>\s*<\/ln-[^>]+?>/igm, ''); //删除解析失败的自定义标签
        }else{
            //显示时的自定义标签转换(含mix)
            //var res = '<div id="flashcontent" name="flashcontent"></div>' + analyze.resolve(dom.html());
            var res = analyze.resolve(dom.html().replace(/(<p><br\s*?\/?><\/p>)+$/igm, ''))+ '<p><br/></p>';
        }
        return res.replace(/[^<\s]*?=""/igm, '');
    };
})();