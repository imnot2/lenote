//命名空间
var _tool = {};
(function(){
	var Util=_tool.Util=function(id){
		this.ue=null;	
		this.arrKey={};
		this.doc=document;
	}
	Util.prototype={
		isIE:function(){
			var ie;
			return function(){
				return ie||(ie=/(msie\s|trident.*rv:)([\w.]+)/.test(navigator.userAgent.toLowerCase()));
			}
		}(),
		toDom:function(str){
			var div=this.doc.createElement('div');
			$(div).html(str);
			return div;
		},
        filterXSS: function(html){
            return filterXSS(html, {
               allowCommentTag: false,
               whiteList: $.extend(filterXSS.whiteList, {
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
        },
		setConvertForIE:function(str){
			return str.replace(/<ln-text|ln-text>/ig,function(a){
				return {
					'<ln-text':'<p',
					'<LN-TEXT':'<p',
					'ln-text>':'p>',
					'LN-TEXT>':'p>'
				}[a]
			})
		},
		setFilter:function(str){
			return str.replace(/(<img[^>]+>)<br\/?>/ig,"$1&nbsp;<br/>");
		},
		getFilter:function(str){
			return str.replace(/(<img[^>]+>)&nbsp;<br\/?>/ig,'$1<br/>');
		},
		setCont:function(str){
            str = this.filterXSS(str);
			//alert("a");
			this.arrKey={};
			var _div=this.isIE() ? this.toDom(' '+this.setConvertForIE(str)) : this.toDom(str);
			var tags = $(_div).find('[key]'),node;
			for (var i = 0; i < tags.length; i++) {	
				var tag=tags.eq(i);
				this.arrKey[tag.attr('key')]=1;
				if(tag[0].tagName=='LN-TEXT'){
					node=$("<p></p>");
					node.html(tag.html());
					node.attr('key',tag.attr('key'));
				}else{
					node = tag[0].tagName != 'P' ? this.setBuild(tag.attr('key'),tag[0]) : null;
				}
				node && tag.replaceWith(node);				
			}
			this.ue=UE.getEditor('editor');
			var ue=this.ue,height=ue.iframe.offsetHeight-10;
			ue.body.style.cssText="padding:5px; height:"+height+"px";
			//ue.removeListener('contentchange',this.contentchange);			
			this.reset();//重置undo、redo栈
			ue.setContent(this.setFilter(_div.innerHTML));
			//ue.undoManger.save(true);//创建撤销undo栈。
			ue.focus(false);
			//this.scrollToBottom();
			this.ue.body.scrollTop=0;
			//ue.addListener('contentchange',this.contentchange);
		},
		scrollToBottom:function(){
			var body=this.ue.body,doc=this.ue.document,doch=doc.height,bodyh=body.offsetHeight,hd=doch-bodyh;
			if(hd>0)body.scrollTop=hd;
		},
		contentchange:function(){
			window.external.contentChange();
		},
		getCont:function(str){
			if(!str){
				for(var key in this.arrKey){
					this.arrKey[key]=0;
				}
				return;
			}
			var div=this.toDom(this.getFilter($.trim(str))),tags=$(div).find('[key]'),tag,key,checkTextKey={},type=null,node;
			for(var i=0;i<tags.length;i++){
				tag=tags.eq(i);
				key=tag.attr('key');
				type=tag.attr('type');
				if(!type){					
					//mix文字最前面插入附件时，移到mix外面去。
					if(tag[0].childNodes.length>1 && $(tag[0].childNodes[0]).attr('key')){
						var child=tag[0].childNodes[0];
						tag[0].parentNode.insertBefore(child.cloneNode(true),tag[0]);
						tag[0].removeChild(child);
					}
					if(tag.html().length<1||/^\s*$/g.test(tag.html())||checkTextKey[key]){
						tag.removeAttr('key');
						continue;
					}
					checkTextKey[key]=1;
					node='<ln-text key='+key+'>'+tag.html()+'</ln-text>';
					// node=document.createElement("ln-text");
					// node.innerHTML=tag.html();
				}else{
					type=type.toLowerCase();
					node=document.createElement("ln-"+type+"");
					if(type=='photo'){
						var _data='';										
			            if(tag.attr('style')) _data += 'style=' + tag.attr('style') + ' ';
			            if(tag.attr('title')) _data += 'title=' + tag.attr('title') + ' ';
			            //宽高是0不计入_data
			            if(parseInt(tag.attr('width'))) _data += 'width=' + tag.attr('width') + ' ';
			            if(parseInt(tag.attr('height'))) _data += 'height=' + tag.attr('height') + ' ';
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
					node=null;
				}				
			}
			//检查节点的key是否添加。
			this.checkKey(div);
			//替换mix元素节点外层的p(mix文本里有附件key时，如果替换掉外层p会变成非mix，所以只替换mix元素外层的p)
			tags = $(div).find('[key]');
			for (var i = 0; i < tags.length; i++) {
				var tag = tags.eq(i);
				if(this.isMix(tag))this.unTags(tag,'p');
			}				
			//去掉编辑器残留书签
			$(div).find('span[id*=_baidu_bookmark]').remove();
			return this.filterXSS(this.handle_text_tag(div.innerHTML));	
		},
		checkKey:function(oDiv){
			for(var key in this.arrKey){
				var node=$(oDiv).find('[key="'+key+'"]');
				if(node.length<1)this.arrKey[key]=0;
			}
			var tags=$(oDiv).find('[key],img:not([key])');
			for(var i=0;i<tags.length;i++){
				var tag = tags.eq(i),key=tag.attr('key'),src=tag.attr('src');
				//从别的笔记复制进来的。
				if(key && (!this.arrKey[key]||this.arrKey[key]==2)){
					try{
						var newKey=window.external.getNewKeyByKey(key);
						if(!newKey)continue;						
						tag.attr('key',newKey);
						$(this.ue.body).find('[key='+key+']').eq(0).attr('key',newKey);
						this.arrKey[newKey]=1;
					}catch(e){}
				}
				if(key && this.arrKey[key])this.arrKey[key]=2;
				if(!key && src && /^file:/ig.test(src)){
					try{
						var newKey=window.external.getNewKeyBySrc(decodeURI(src.replace(/^file:\/\/\//g,''))),newNode=document.createElement("ln-photo");
						if(!newKey)continue;						
						$(newNode).attr('key',newKey);
						// var picName=src.match(/[^\/]+$/g)[0],suffix=src.match(/[^\.]+$/g)[0];					
						// $(this.ue.body).find('img[src*='+picName.replace(/\.[^\.]+$/g,'')+'][src*='+suffix+']').eq(0).attr('key',newKey);
						var img=$(this.ue.body).find('img[_tag='+tag.attr("_tag")+']').eq(0);
						img.attr('key',newKey);
						img.attr('type','photo');
						tag.replaceWith(newNode);
						this.arrKey[newKey]=1;
					}catch(e){}					
				}					
			}			
			for(var i in this.arrKey){
				if(this.arrKey[i])this.arrKey[i]=1;				
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
			return source&&source['mkey'];
		},
		setBuild:function(key,node){
			var nodeName = node.nodeName.toLowerCase(),
				res = this.getResource(key),
				type = nodeName.match(/[^-]+$/g) ? nodeName.match(/[^-]+$/g)[0] : '',
				_data = node.getAttribute('_data'),
				img;
			if(_data){
				_data = UE.utils.html(Base64.decode(_data));
				img = $('<img '+_data+' />');
			}else{
				img = $('<img />');
			}			
			img.attr({				
				'key':key,
				'type':type,
				'src':res.fUrl ? res.fUrl : '',
				'width':res.width > this.viewWidth ? this.viewWidth : res.width,
				'maxwidth' : res.width
			});
			//如果资源没加载完。
			if(!res.fUrl){
				img.attr({
					'width':'0',
					'height':'0'
				});	
				img.removeAttr("src");
			}		
			return img;
		},
		replaceSrc:function(key){
			var node=$(this.ue.body).find('[key="'+key+'"]').eq(0),
				res = this.getResource(key);
			if(!node)return;
			node.removeAttr('width height');
			node.attr({
				'src':res.fUrl ? res.fUrl : '',
				'width':res.width > this.viewWidth ? this.viewWidth : res.width
			});
		},
		replaceKey:function(oldkey,newKey){
			var node=$(this.ue.body).find('[key="'+oldkey+'"]').eq(0);
			if(!node)return;
			if(!newKey){
				node.remove();
				return
			}
			var res = this.getResource(newKey);
			node.attr('key',newKey);			
			this.arrKey[newKey]=1;
			if(res.fUrl)node.attr('src',res.fUrl);	
		},
		insertfile:function(key,src,type,clientX,clientY){
			//if(!src)return;
			var img = document.createElement('img'),
				res = this.getResource(key),
				ue = this.ue,
				range;

			$(img).attr({'src':res.fUrl,'key':key,'type':type,'maxwidth' : res.width,'width':res.width > this.viewWidth ? this.viewWidth : res.width});
			
			if(clientX && clientY){
				
				//文件插入之前创建堆栈。
				ue.undoManger.save();

				clientY -= 31;//减去工具栏高度。
				range = ue.document.caretRangeFromPoint(clientX,clientY);
				range.insertNode(img);
				range.collapse(false);
				var sel = ue.window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);

				//文件插入之后创建堆栈。				
				ue.undoManger.save();
			}else{
				range = ue.selection.getRange();
				range.deleteContents();
				range.insertNode(img).setCursor(true);
			}			
			this.arrKey[key]=1;		
			ue.fireEvent('contentchange');	
			ue.fireEvent('selectionchange');
		},
		getDescription:function(num){
			//str = this.getCont(str);
			var body = this.ue.body;
			return $(body).text() ? $(body).text().replace(/\u200B/g,'').substring(0, num ? num : 1024) : '';
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
		},
		adjustimages:function(){
			var node = this.ue.body,
				imgs = node.querySelectorAll("img");
			for(var i=0;i<imgs.length;i++){
				var img = imgs[i],
					width = img.getAttribute("width"),
					maxwidth = img.getAttribute("maxwidth");
				if(this.viewWidth > maxwidth && width != maxwidth){
					img.setAttribute("width",maxwidth);
				}
				if(this.viewWidth > width && this.viewWidth < maxwidth ){
					img.setAttribute("width",this.viewWidth);
				}
				if(this.viewWidth < width){
					img.setAttribute("width",this.viewWidth);
				}
			}
		}
	}
})();
(function(){

	//记录初始宽度，以便判断用户是放大还是缩小，每次操作完毕更新这个初始值，方便下次操作判断。
	var preW;	
	function getWidth(node){
        if(!node) return 0;
        //宽度字典。
        var widthObj = {"fontfamily":85,"fontsize":60,"forecolor":36,"backcolor":36},
        classname = node.className.replace(/-default|-colorbutton|edui|box|button|split|combox|for-|-|\s/ig,'');
        return widthObj[classname] ? widthObj[classname] : 26               
    }
    //获取子节点整体宽度。
    function getChildWidth(parent){
    	if(!parent || !parent.childNodes.length)return 0;
    	var val=0;
    	for(var i=0;i<parent.childNodes.length;i++){
    		val += getWidth(parent.childNodes[i]);
    	}
    	return val;
    }
    //单例，避免每次resize时都查找节点。
    var getNode = function(){
    	var node;
    	return function(){
    		return node || (node = {'button':document.querySelector(".edui-for-moretool"),
    								'wrap':document.querySelector("#moretoolbox"),
    								 morebox: function(){
    									return this.wrap.querySelector(".edui-toolbar");
    								},
    								'showbox':document.querySelector(".edui-editor-toolbarboxinner").querySelector(".edui-toolbar")})
    	}
    }();
    _tool.AdjustToolbar = function(width){ 
    	var node = getNode(),
    	morebutton = node.button,
    	morewrap = node.wrap,
    	morebox = node.morebox(),
    	showbox = node.showbox,
    	showChildW = getChildWidth(showbox);

		width -= (4 + 2 + 26);

    	if(!preW)preW = width;

    	var dif = width - preW;
    	if(dif>0){
			//放大					
            while(morebox.childNodes.length && (width - showChildW) > getWidth(morebox.childNodes[0])){
                var node = morebox.removeChild(morebox.childNodes[0]);
                if(!morebox.childNodes.length){
                	morewrap.classList.remove("edui-moretoolbox-show");
                	morebutton.classList.remove("edui-button-show");
                	morebutton.classList.remove("edui-button-checked");		                	
                }
                showbox.appendChild(node);
                //showtoolChildW += getWidth(morebox.childNodes[0]);
                showChildW = getChildWidth(showbox);
            }
		}else if(dif<0){
			//缩小
			while(showbox.childNodes.length && (showChildW - width) > 0){
                var node = showbox.removeChild(showbox.lastChild);
                morebox.childNodes.length ? morebox.insertBefore(node,morebox.firstChild) : morebox.appendChild(node);
				//moretool.style.cssText = "display:block";
				morebutton.classList.add("edui-button-show");	  
                //showtoolChildW -= getWidth(showbox.lastChild);
                showChildW = getChildWidth(showbox);
            }			
		}
		preW = width;
    }
})()
