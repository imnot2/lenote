//命名空间
var _tool = {};
(function(){
	var Util=_tool.Util=function(id){
		this.ue=null;	
		this.arrKey={};
		this.doc=document;
	}
	Util.prototype={
		filter:function(str,operation){
			if(operation){
				//set过滤
				return str.replace(/<ln-text([^>]+)>/igm, '<p$1>').replace(/<\/ln-text>/img, '</p>');
			}else{
				//get过滤
				//str=str.replace(/<BR>/gi,'<br/>').replace(/LN/img,'ln').replace(/AUDIO/img,'audio').replace(/PHOTO/img,'photo').replace(/TEXT/img,'text').replace(/ATTACHMENT/img,'attachment');	
				return str?str.replace(/<BR>|LN-(AUDIO|PHOTO|TEXT|ATTACHMENT)>|\u200B|\u200D/ig,function(str){
					return {
						'\u200B':'',
						'\u200D':'',
						'<BR>':'<br/>',
						'LN-PHOTO>':'ln-photo>',
						'LN-AUDIO>':'ln-audio>',
						'LN-TEXT>':'ln-text>',
						'LN-ATTACHMENT>':'ln-attachment>'
					}[str]
				}):''
			}			
		},
		toDom:function(str){
			var div=this.doc.createElement('div');
			$(div).html(str);
			return div;
		},
		setCont:function(str){
			var _div=this.toDom(this.filter(' '+str,true));			
			var tags = $(_div).find('ln-photo[key],ln-audio[key],ln-attachment[key],p[key]');
			this.arrKey={};
			for(var i=0;i<tags.length;i++){
				this.arrKey[tags[i].getAttribute('key')]=1;
			}
			for (var i = 0; i < tags.length; i++) {				
				var outNode = tags[i].tagName=='P'?null:this.setBuild(tags[i].getAttribute('key'),tags[i]);
				//alert( tags[i].getAttribute('key')+'||'+window.external.getResInfo(tags[i].getAttribute('key'))+'||'+str+'||'+outNode);
				outNode&&$(tags[i]).replaceWith(outNode);
			}
			this.ue=UE.getEditor('editor');
			var ue=this.ue;
			ue.removeListener('contentchange',this.contentchange);
			ue.setContent($.trim($(_div).html()));
			this.reset();//重置undo、redo栈
			ue.undoManger.save(true);//创建撤销undo栈。
			ue.focus(true);
			ue.addListener('contentchange',this.contentchange);
			
		},
		contentchange:function(){			
	    	//alert("a");
			window.external.contentChange();
		},
		getCont:function(str){
			var oDiv=this.toDom(str);	
			//替换p空白节点（mix文本节点在回车是会自动生成）
			var tags = $(oDiv).find('p');
			for (var i = 0; i < tags.length; i++) {
				var tag = tags.eq(i);
				if($.trim(tag.html())=='&nbsp;') tag.replaceWith('<p><br/></p>');
			}
			//去掉文本节点因编辑器加的p
			// tags = $(oDiv).find('p');
			// for(var i=0;i<tags.length;i++){
			// 	var tag=tags[i];	
			// 	if(tag.childNodes.length==1&&tag.firstChild.nodeName=='#text'&&!$(tag).attr('key')){
			// 		$(tag).before($(tag).html());
			// 		$(tag).remove();
			// 	}
			// }			
			// tags=$(oDiv).find('[key]');
			// for(var i=0;i<tags.length;i++){
			// 	var tag = tags.eq(i);
			// 	//stripTag($(tag),'span,strong,em');
			// 	this.unTags(tag,'a');
			// 	this.unTags(tag,'span');
			// 	this.unTags(tag,'strong');
			// 	this.unTags(tag,'em');
			// }			
			
			//移除后面的mix文本的key属性
			tags = $(oDiv).find('p[key]'),obj = {};
			for (var i = 0; i < tags.length; i++) {
				var tag = tags.eq(i),key = tag.attr('key');
				if(obj[key]){					
					//tag.html(tag.html().replace(/<area\/?>/ig,'<br/>'))
					tag[0].removeAttribute('key');
				}
				obj[key] = true;
			}	
			//mix文本前插入附件时，放到mix文本节点前面去
			tags=$(oDiv).find('p[key]');
			for(var i=0;i<tags.length;i++){
				var tag=tags.eq(i),keyChild=tag.get(0).firstChild;
				if(keyChild&&keyChild.nodeName.toLowerCase()!='#text'&&keyChild.getAttribute('key')){
					$(keyChild).clone().insertBefore(tag);
					$(keyChild).remove();
				}
			}							
			//替换
			tags = $(oDiv).find('[key]');
			for (var i = 0; i < tags.length; i++) {
				var tag = tags[i];
				$(tag).replaceWith(this.getBuild(tag));
			}
			this.checkKey(oDiv);
			//替换mix元素节点外层的p(mix文本里有附件key时，如果替换掉外层p会变成非mix，所以只替换mix元素外层的p)
			tags = $(oDiv).find('[key]');
			for (var i = 0; i < tags.length; i++) {
				var tag = tags.eq(i);
				if(this.isMix(tag))this.unTags(tag,'p');
			}				
			//去掉编辑器残留书签
			$(oDiv).find('span[id*=_baidu_bookmark],p.for_ie').remove();				
			//alert(oDiv.innerHTML);
			return this.filter(this.handle_text_tag(oDiv.innerHTML));				
		},	
		findParent:function(node){
            if(node.tagName=='BODY')return false;
            if(node.tagName=="A")return node;
            return arguments.callee(node.parentNode);
        },
		checkKey:function(oDiv){
			var tags=$(oDiv).find('[key]');
			for(var i=0;i<tags.length;i++){
				var tag = tags.eq(i),key=tag.attr('key');
				//从别的笔记复制进来的。
				if(!this.arrKey[key]||this.arrKey[key]==2){
					try{
						var newKey=window.external.getNewKeyByKey(key);
						if(!newKey)continue;						
						tag.attr('key',newKey);
						$(this.ue.body).find('[key='+key+']').eq(0).attr('key',newKey);
						this.arrKey[newKey]=1;
					}catch(e){}
				}
				if(this.arrKey[key])this.arrKey[key]=2;					
			}
			tags=$(oDiv).find('img');
			for(var i=0;i<tags.length;i++){
				var tag = tags.eq(i),src=tag.attr('src');
				if(/^file:/ig.test(src)){
					try{
						var newKey=window.external.getNewKeyBySrc(src.replace(/^file:\/\/\//g,'')),newNode=document.createElement("ln-photo");
						if(!newKey)continue;						
						$(newNode).attr('key',newKey);
						var picName=src.match(/[^\/]+$/g)[0],suffix=src.match(/[^\.]+$/g)[0];					
						$(this.ue.body).find('img[src*='+picName.replace(/\.[^\.]+$/g,'')+'][src*='+suffix+']').eq(0).attr('key',newKey);
						tag.replaceWith(newNode);
						this.arrKey[newKey]=1;
					}catch(e){}					
				}
			}
			for(i in this.arrKey){
				this.arrKey[i]=1;
			}
		},		
		unTags:function(node,tagname){
			var parent = node.parent();
			if(parent&&parent.size()){
				if(parent.is(tagname)){
					node.unwrap()
				}else{
					node = node.parent();
				}
				arguments.callee(node,tagname)
			}
		},
		isMix:function(tag){
			var source=this.getResource(tag.attr('key'));
			return source?source['mkey']:false;
		},
		setBuild:function(key,node){
			var source=this.getResource(key);
			if (!source){
				if($(node).index()==0)$(node).before('<p class="for_ie" style="display:none;line-height:0px;">\u200B</p>');
				//ie下<ln-photo></ln-photo>为两个节点。
				if(!this.hasNext(node.nextSibling))$(node.nextSibling).after('<p class="for_ie" style="display:none;line-height:0px;">\u200B</p>');
				$(node).attr('broken','true');
				return;
			} 
			var fSuffix = source['fSuffix'].toLowerCase().substring(1);
			switch(fSuffix){
				case 'jpg':case 'jpeg':case 'png':case 'gif':case 'bmp':return this.setBuildImg(source,node);break;
				case 'kk':return this.setBuildAudio(source);break;
				case 'null':break;
				default:return this.setBuildAttach(source);
			}			
		},
		hasNext:function(node){
			node=node.nextSibling;
			if(!node)return false;
			if(node.tagName||node.nodeValue.length>0)return true;
			return arguments.callee(node);
		},
		setBuildImg:function(source,node){
			var fUrl = source['fUrl'],key = source['key'],height= source['height'],fSuffix = source['fSuffix'].toLowerCase().substring(1),_data=$(node).attr('_data'),_img;
			if(_data){
				_data=UE.utils.html(Base64.decode(_data));
				_img=this.toDom("<img "+_data+"/>").firstChild;
			}else{
				_img=this.toDom("<img />").firstChild;
			}	
			$(_img).attr({
				'src': fUrl,
				'key': key,
				'fSuffix': fSuffix,
				'contentEditable': 'false',
				'unselectable':'on'
			});
			var _div=this.doc.createElement('div');
			_div.appendChild(_img);
			return _div.innerHTML;
		},
		setBuildAudio:function(source){
			var fName = source['fName'],key = source['key'],fSize = source['fSize'],fSuffix = source['fSuffix'].substring(1),fullTime=this.playTimeFormat(source['fullTime']);			
			var str="<a class='audio_box'><form class='inputwrap'><input type='text' class='name btn fl ellipsis'/><input type='text' class='suffix btn fl'/><input type='text' class='size btn'/><input type='text' class='date btn'/></form></a>"
			var oDiv=this.toDom(str);

			var playbox = $(oDiv).children('.audio_box'),
			nameSpan = $(oDiv).find('.name'),
			suffixSpan = $(oDiv).find('.suffix'),
			dateSpan = $(oDiv).find('.date'),
			sizeSpan = $(oDiv).find('.size');

			var namelength = fName.replace(/[^\.]+$/g, '').replace(/[^\u0000-\u00ff]/g,"aa").length-fName.replace(fSuffix, '').match(/\.|\s|-/g).length/2;
			
			if(namelength>=18)nameSpan.css({'width':'118px','overflow':'hidden'});

			nameSpan.attr('value',fName.replace(/[^\.]+$/g, ''));
			suffixSpan.attr('value',fSuffix);
			dateSpan.attr('value',fullTime);
			sizeSpan.attr('value',fSize);

			$(oDiv).find('.inputwrap,.inputwrap input').attr({
				'readonly':'true',
				'unselectable': 'on',
				'contentEditable': 'false',
				'onfocus':'this.blur()'
			});
			
			playbox.attr({
				'contentEditable': 'false',
				'unselectable': 'on',
				'onmouseup': 'document.selection.empty()'
			});
			//设置节点属性，便于fnGetCont操作	
			playbox.attr('key', key).attr('fSuffix', fSuffix);

			return oDiv.innerHTML;
		},
		setBuildAttach:function(source){				
			var fName = source['fName'],key = source['key'],fSize = source['fSize'],fSuffix = source['fSuffix'].substring(1);		
			var str="<a class='attach_box'><form class='inputwrap'><input type='text' class='name btn fl ellipsis'/><input type='text' class='suffix fl btn'/><input type='text' class='size btn'/></form></a>"
			var oDiv=this.toDom(str);

			var attachbox = $(oDiv).find('.attach_box'),
			nameSpan = $(oDiv).find('.name'),
			suffixSpan = $(oDiv).find('.suffix'),
			sizeSpan = $(oDiv).find('.size');

			var namelength = fName.replace(/[^\.]+$/g, '').replace(/[^\u0000-\u00ff]/g,"aa").length-(/\.|\s|-/g.test(fName.replace(fSuffix, ''))?fName.replace(fSuffix, '').match(/\.|\s|-/g).length/2:0);
			//alert(fName.replace(fSuffix, '').match(/\.|\s|-/g).length);
			if(namelength>=18)nameSpan.css({'width':'118px','overflow':'hidden'});

			nameSpan.attr('value',fName.replace(/[^\.]+$/g, ''));
			suffixSpan.attr('value',fSuffix);
			sizeSpan.attr('value',fSize);
			
			$(oDiv).find('.inputwrap,.inputwrap input').attr({
				'readonly':'true',
				'unselectable': 'on',
				'contentEditable': 'false',
				'onfocus':'this.blur()'
			});
			
			attachbox.attr({
				'contentEditable': 'false',
				'unselectable': 'on',
				'onmouseup': 'document.selection.empty()'
			});	
			var picName;
			switch(fSuffix.toLowerCase()){
				case 'apk': picName = 'apk';break;
                case 'doc':case 'docx': picName = 'doc';break;
                case 'jpg':case 'jpeg':case 'bmp':case 'gif':case 'png':case 'ico':case 'pcx':case 'tiff':case 'dxf':case 'exif': picName = 'image';break;
                case 'ppt':case 'pptx': picName = 'ppt';break;
                case 'pdf': picName = 'pdf';break;
                case 'kk':case 'mp3':case 'amr':case 'aac':case 'ogg':case 'mid':case 'ape':case 'wav':case 'wma':case 'midi': picName = 'audio';break;
                case 'avi':case 'rmvb':case 'mkv':case 'wmv':case 'flv':case 'mp4':case 'rm':case 'f4v':case 'mov':case 'mpeg':case '3gp': picName = 'video';break;
                case 'rar': picName = 'rar';break;
                case 'txt':case 'rtf':case 'jnt': picName = 'txt';break;
                case 'xls':case 'xlsx': picName = 'xls';break;
                case 'zip': picName = 'zip';break;
                default:picName = 'other';
			}			
			attachbox.css('background-image', 'url(themes/default/images/attach_type_'+picName+'.png)');			
			//设置节点属性，便于fnGetCont操作	
			attachbox.attr('key', key).attr('fSuffix', fSuffix);
			return oDiv.innerHTML;
		},
		getBuild:function(tag){
			var $tag=$(tag),fSuffix=$tag.attr('fSuffix'),key=$tag.attr('key'),_data='',broken=$tag.attr('broken');
			if (fSuffix === 'jpg' || fSuffix === 'jpeg' || fSuffix === 'gif' || fSuffix === 'png'|| fSuffix === 'bmp') {				
	            if($tag.attr('style')) _data += 'style=' + $tag.attr('style') + ' ';
	            if($tag.attr('title')) _data += 'title=' + $tag.attr('title') + ' ';
	            if($tag.attr('width')) _data += 'width=' + $tag.attr('width') + ' ';
	            if($tag.attr('height')) _data += 'height=' + $(tag).attr('height') + ' ';
	            if($tag.attr('border')) _data += 'border=' + $tag.attr('border') + ' ';
	            if($tag.attr('hspace')) _data += 'hspace=' + $tag.attr('hspace') + ' ';
	            if($tag.attr('vspace')) _data += 'vspace=' + $tag.attr('vspace') + ' ';
	            if($tag.attr('alt')) _data += 'alt=' + $tag.attr('alt') + ' ';
	            return  _data.length>0?'<ln-photo _data='+Base64.encode(UE.utils.unhtml(_data))+' key='+key+'></ln-photo>':'<ln-photo key='+key+'></ln-photo>';          
	            //return '<ln-photo _data=' + Base64.encode(UE.utils.unhtml(_data)) + ' key='+key+'></ln-photo>';
			} else if (fSuffix === 'kk') {
				return '<ln-audio key='+key+'></ln-audio>';
			} else if (!fSuffix && tag.nodeName.toLowerCase() === 'p') {
				if (/^\s*<br\s*\/?>\s*$/.test($(tag).html())) return '<br/>';
				//如果文本节点里嵌套其他节点，迭代处理
				var tags = $(tag).find('[key]');
				for (var i = 0; i < tags.length; i++) {
					var inNode = this.getBuild(tags[i]);
					$(tags[i]).replaceWith(inNode);
				}
				return '<ln-text key='+key+'>'+tag.innerHTML+'</ln-text>';
			} else if(broken){
				$tag.removeAttr('broken');
				return;
			} else {
				return '<ln-attachment key='+key+'></ln-attachment>';
			}
		},
		parseDate:function(timestamp){
			var d = new Date(parseInt(timestamp));
			return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
		},
		playTimeFormat:function(msec){
			var sec = parseFloat(msec) / 1000;
			var minute = 0;
			minute = parseInt(sec / 60);
			sec -= minute * 60;
			sec = parseInt(sec);
			return ((minute > 9) ? minute: '0' + minute) + ':' + ((sec > 9) ? sec: '0' + sec);
		},
		insertfile:function(source,paste){
			var html=source,ue=this.ue,range = ue.selection.getRange();			
			if (typeof(source) === 'string') {
				source = eval('(' + source + ')');
			}			
			html=this.setBuild(source['key']);
			var oDiv=this.toDom(html);
			if (!range) {
				ue.focus(true);
			} else {
				var rangParentStart,rangParentEnd,start=range.startContainer,end=range.endContainer;
				if (start.nodeType==1&&range.startOffset==0) {
					rangParentStart = UE.dom.domUtils.findParent(start,
					function(node) {
						return node.key;
					},
					true);							
				}
				if(end.nodeType==1&&range.endOffset==3||range.endOffset==4){
					rangParentEnd = UE.dom.domUtils.findParent(end,
					function(node) {
						return node.key;
					},
					true);
				}
				if(rangParentStart)range.setStartBefore(rangParentStart);
				if(rangParentEnd)range.setEndAfter(rangParentEnd);				
				range.deleteContents();	
			}
			//range.collapse(false);
			//ue.execCommand('inserthtml',html);
			//alert(oDiv.childNodes.length);
			if(/^\s*$/gi.test(oDiv.firstChild.nodeValue)&&oDiv.childNodes[1]){
				range.insertNode(oDiv.childNodes[1]).setCursor(true);
			}else{
				range.insertNode(oDiv.firstChild).setCursor(true);
			}	
			this.arrKey[source['key']]=1;		
			ue.fireEvent('contentchange');
		},
		// filterTextNode:function(node){
		// 	if(!node)return;
		// 	for(var i=0;i<node.childNodes.length;i++){
		// 		var tag=node.childNodes[i];
		// 		if(tag.tagName=='IMG')continue;
		// 		if(!tag.tagName){
		// 			var text=$(tag).text();
		// 			$(tag).text(text.replace(/[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/igm, function (a, b) {
		//                 if (b) {
		//                     return a;
		//                 } else {
		//                     return {
		//                         '<':'&lt;',
		//                         '&':'&amp;',
		//                         '"':'&quot;',
		//                         '>':'&gt;',
		//                         "'":'&#39;'
		//                     }[a];
		//                 }
		//             }));	
		//             continue;	        
		// 		}
		// 		arguments.callee(tag);
		// 	}
		// },
		getDescription:function(str,num){
			str = this.getCont(str);
			var oDiv = this.toDom(str);
			return $(oDiv).text().substring(0, num);
		},		
		getResource:function(key){
			var source = window.external.getResInfo(key);
			if(!source)return;
			if (typeof(source) === 'string') {
				source = eval('(' + source + ')');
			}
			return source;
		},
		reset:function(){
			var ue=this.ue;
			ue.reset();
		},
		handle_text_tag:function(html){
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
	                arguments.callee();
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
	               case 'photo': var _data = tag.attr('_data')?' _data='+tag.attr('_data'):'';tag.replaceWith('<ln-photo key="' + key + '"' + _data + '></ln-photo>');break;
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
		},
		getAllKey:function(){

		}
		// unTags:function(target,str) {
	 //        var parent = target.parent(),nodeName=str.split(',');
	 //        if(parent&&parent.size()&&!parent.is('body')){
	 //            for(i in nodeName){
	 //                parent = target.parent();
	 //                arguments.callee(parent.is(nodeName[i])?target.unwrap():parent,nodeName[i]);
	 //            }           
	 //        }
	 //    } 
	}
})();


_tool.print = function() {
	window.print();
};

