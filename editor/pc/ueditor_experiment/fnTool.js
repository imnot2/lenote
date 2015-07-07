//命名空间
var _tool = {};
(function(){
	var Util=_tool.Util=function(id){
		this.ue=null;	
		this.arrKey={};
		this.doc=document;
	}
	Util.prototype={
		toDom:function(str){
			var div=this.doc.createElement('div');
			$(div).html(str);
			return div;
		},
		setCont:function(str){
			this.arrKey={};
			var _div=this.toDom(' '+str);			
			var tags = $(_div).find('ln-photo[key],ln-audio[key],ln-attachment[key],ln-text[key]'),node;
			for (var i = 0; i < tags.length; i++) {	
				var tag=tags.eq(i);
				this.arrKey[tag.attr('key')]=1;
				if(tag[0].tagName=='LN-TEXT'){
					node=$("<p></p>");
					node.html(tag.html());
					node.attr('key',tag.attr('key'));
				}else{
					node=this.setBuild(tag.attr('key'),tag[0]);					
				}
				node&&tag.replaceWith(node);				
			}
			this.ue=UE.getEditor('editor');
			var ue=this.ue;
			ue.removeListener('contentchange',this.contentchange);
			ue.setContent($(_div).html());
			this.reset();//重置undo、redo栈
			ue.undoManger.save(true);//创建撤销undo栈。
			ue.focus(true);
			ue.addListener('contentchange',this.contentchange);
		},
		contentchange:function(){
			window.external.contentChange();
		},
		getCont:function(str){
			var div=this.toDom(str),tags=$(div).find('[key]'),tag,key,checkTextKey={},type=null,node;
			for(var i=0;i<tags.length;i++){
				tag=tags.eq(i);
				key=tag.attr('key');
				type=tag.attr('type');
				if(!type){
					//mix文字最前面插入附件时，移到mix外面去。
					if(tag[0].childNodes.length>1&&tag[0].childNodes[0].hasAttribute('key')){
						var child=tag[0].childNodes[0];
						tag[0].parentNode.insertBefore(child.cloneNode(true),tag[0]);
						tag[0].removeChild(child);
					}
					if(tag.html().length<1||/^\s*$/g.test(tag.html())||checkTextKey[key]){
						tag.removeAttr('key');
						continue;
					}
					checkTextKey[key]=1;
					node=document.createElement("ln-text");
					node.innerHTML=tag.html();
				}else{
					type=tag.attr('type').toLowerCase();
					node=document.createElement("ln-"+type+"");
					if(type=='photo'){
						var _data='';										
			            if(tag.attr('style')) _data += 'style=' + tag.attr('style') + ' ';
			            if(tag.attr('title')) _data += 'title=' + tag.attr('title') + ' ';
			            if(tag.attr('width')) _data += 'width=' + tag.attr('width') + ' ';
			            if(tag.attr('height')) _data += 'height=' + (tag).attr('height') + ' ';
			            if(tag.attr('border')) _data += 'border=' + tag.attr('border') + ' ';
			            if(tag.attr('hspace')) _data += 'hspace=' + tag.attr('hspace') + ' ';
			            if(tag.attr('vspace')) _data += 'vspace=' + tag.attr('vspace') + ' ';
			            if(tag.attr('alt')) _data += 'alt=' + tag.attr('alt') + ' ';
			            if(_data.length>0)$(node).attr('_data',Base64.encode(UE.utils.unhtml(_data)));			           
					}
				}
				if(node){
					$(node).attr('key',key);
					//替换
					tag.replaceWith(node);		
				}				
			}
			this.checkKey(div);
			//替换mix元素节点外层的p(mix文本里有附件key时，如果替换掉外层p会变成非mix，所以只替换mix元素外层的p)
			tags = $(div).find('[key]');
			for (var i = 0; i < tags.length; i++) {
				var tag = tags.eq(i);
				if(this.isMix(tag))this.unTags(tag,'p');
			}				
			//去掉编辑器残留书签
			$(div).find('span[id*=_baidu_bookmark]').remove();	
			return this.handle_text_tag(div.innerHTML);	
		},	
		findParent:function(node){
            if(node.tagName=='BODY')return false;
            if(node.tagName=="A")return node;
            return arguments.callee(node.parentNode);
        },
		checkKey:function(oDiv){
			var tags=$(oDiv).find('[key],img');
			for(var i=0;i<tags.length;i++){
				var tag = tags.eq(i),key=tag.attr('key'),src=tag.attr('src');
				//从别的笔记复制进来的。
				if((key&&!this.arrKey[key])||this.arrKey[key]==2){
					try{
						var newKey=window.external.getNewKeyByKey(key);
						if(!newKey)continue;						
						tag.attr('key',newKey);
						$(this.ue.body).find('[key='+key+']').eq(0).attr('key',newKey);
						this.arrKey[newKey]=1;
					}catch(e){}
				}
				if(key&&this.arrKey[key])this.arrKey[key]=2;
				if(src&&/^file:/ig.test(src)){
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
			return source['mkey'];
		},
		setBuild:function(key,node){
			var nodeName=node.nodeName.toLowerCase(),src=window.external.getSrcByKey(key),type=nodeName.match(/[^-]+$/g)[0],_data=node.getAttribute('_data'),img;
			if(_data){
				_data=UE.utils.html(Base64.decode(_data));
				img=$('<img '+_data+' />');
			}else{
				img=$('<img />');
			}			
			img.attr({
				'contenteditable':'false',
				'key':key,
				'type':type,
				'src':src?src:''
			});			
			return img;
		},
		loadBuild:function(key,src){
			var node=this.doc.find('[key='+key+']').eq(0);
			if(node)node.attr('src',src);
		},
		insertfile:function(key,src,type){
			if(!src)return;
			var img=document.createElement('img');
			$(img).attr({'contenteditable':'false','src':src,'key':key,'type':type});
			var ue=this.ue,range = ue.selection.getRange();
			range.insertNode(img).setCursor(true);
			// var html=source,ue=this.ue,range = ue.selection.getRange();			
			// if (typeof(source) === 'string') {
			// 	source = eval('(' + source + ')');
			// }			
			// html=this.setBuild(source['key']);
			// var oDiv=this.toDom(html);
			// if (!range) {
			// 	ue.focus(true);
			// } else {
			// 	var rangParentStart,rangParentEnd,start=range.startContainer,end=range.endContainer;
			// 	if (start.nodeType==1&&range.startOffset==0) {
			// 		rangParentStart = UE.dom.domUtils.findParent(start,
			// 		function(node) {
			// 			return node.key;
			// 		},
			// 		true);							
			// 	}
			// 	if(end.nodeType==1&&range.endOffset==3||range.endOffset==4){
			// 		rangParentEnd = UE.dom.domUtils.findParent(end,
			// 		function(node) {
			// 			return node.key;
			// 		},
			// 		true);
			// 	}
			// 	if(rangParentStart)range.setStartBefore(rangParentStart);
			// 	if(rangParentEnd)range.setEndAfter(rangParentEnd);				
			// 	range.deleteContents();	
			// }
			//range.collapse(false);
			//ue.execCommand('inserthtml',html);
			//alert(oDiv.childNodes.length);
			// if(/^\s*$/gi.test(oDiv.firstChild.nodeValue)&&oDiv.childNodes[1]){
			// 	range.insertNode(oDiv.childNodes[1]).setCursor(true);
			// }else{
			// 	range.insertNode(oDiv.firstChild).setCursor(true);
			// }	
			this.arrKey[key]=1;		
			ue.fireEvent('contentchange');
		},
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
	        return _doc.html();
		}
	}
})();
_tool.print = function() {
	window.print();
};