var editor = window.editor = {};
(function(le){
	le.init = function(editorid,createtimeid){
		le.doc = document;		
		le.options = {
			'id' : editorid,
			'node' : le.doc.querySelector('#'+editorid),
			'timenode' : le.doc.querySelector('#'+createtimeid),	//创建时间节点
			'json' : {},	//客户端在setContent时传进来的资源字典
			'keys' : {},	//当前笔记存在的资源
			'newkeys' : [],		//当前笔记新添加的资源
			'bookmark' : null,		//书签
			'textNodes' : {},		//文本资源节点，用于保存笔记时，客户端更新文本修改后的内容。
			'top' : 0,		//编辑器距离webview顶部的距离。
			'width' : 210,	//编辑器默认宽度
			'lineheight' : 0,	//用于判断光标是否处于可视区里。以便输入文字自动换行时实时检测并滚动到光标处。
			'indentcount' : 3,		//允许缩进的次数。
			'keyBoradIsShow' : false,	
			'language' : 'zh-cn',	//语言
			'isdefault' : false,	//是否为默认笔记
			'isNew' : true,		//是否为新建笔记
			'isLoaded' : false,		//笔记是否加载成功，客户端根据此参数来判断是否需要更新笔记。
			mrgalign : function(){
				// 用于获取编辑器左内边距用于调整图片宽度。
				return parseInt(getComputedStyle(this.node,false)["padding-left"]);
			},
			// cmds数组,及时更新数组中命令的状态，便于客户端同学操作对应按钮的ui展现，是高亮还是变灰
			'cmds':['Bold','Italic','Underline','InsertOrderedList','InsertUnorderedList',/*'Outdent','Indent',*/'JustifyLeft','JustifyCenter','JustifyRight','Undo','Redo'/*,'FontSize'*/]
		};
	}
})(editor);
(function(le){
	le.api = {
		setHeight:function(val){
			le.options.height = val;
			le.options.node.style.cssText += "min-height:"+val+"px";
		},

        //调整编辑框距离webview顶部的高度，needscroll参数为是否动画调整。
		adjustTop:function(val,needScroll){
			le.options.top = val;
			if(!needScroll){
				le.options.node.style['margin-top'] = val+'px';
				return;
			}
			function tween(pos){
                return Math.pow(pos, 2);
				//return Math.sqrt(1 - Math.pow((pos-1), 2))
			}
			var begin =  le.options.node.offsetTop,
                duration = 300,
                startTime = new Date().getTime(),
                timer = setInterval(function(){
	                var newTime = new Date().getTime(),
	                    timestamp = newTime - startTime,
	                    delta = tween(timestamp / duration),
                        //delta = timestamp / duration,
	                    res = delta * (val - begin);
	                if(duration <= timestamp){
	                    le.options.node.style['margin-top'] = val+'px';
	                    clearInterval(timer);
	                }else{
	                    le.options.node.style['margin-top'] = Math.ceil(begin + res) + "px";
	                }
            },10)
		},
		getSummary:function(num) {
            var textNodes, text= '', i, temp= document.createElement('div');
            if(!le.controls.hasContent()) return;
            textNodes = le.options.node.querySelectorAll('div[key]');
            if(!textNodes.length){       // 普通笔记
                text = le.options.node.innerText;
                text = text ? text.substring(0,num ? num : 1024) : '';
            }else{      // 语音笔记
                for(i= 0; i< (textNodes.length > 3 ? 3 : textNodes.length); i++){
                    text += textNodes[i].innerText+ '\\n'; 
                    //temp.appendChild(textNodes[i].cloneNode(true));
                }
            }            
            return text;
            //return temp.innerText;
        },

        //获取文本资源节点
        getTextNode:function(){
        	return le.utils.parseString(le.options.textNodes);
        },
        getAllKeys:function(){
        	var keyNodes = le.options.node.querySelectorAll('[key]'),
        		arr = [];
        	for(var i=0;i<keyNodes.length;i++){
        		var node = keyNodes[i];
        		arr.push(node.getAttribute('key'));
        	}
        	return arr.join(",");
        },

        //告知键盘是否为隐藏或者显示。
        keyBoardStatuses:function(bool){
        	le.options.keyBoradIsShow = bool;
        	if(!bool)le.options.node.setAttribute('contenteditable','false');
        }, 

        //重置图片       
        resetPhoto:function(key,src,width){
        	var node = le.options.node.querySelector('[key="'+key+'"]');
        	if(!node)return;
        	node.setAttribute('src',src);
        	le.controls.setImgWidth(node,width);
        },

        //告知是否为默认笔记
        isDefaultNote:function(bool){
        	le.options.isdefault = bool;
        },

        //告知手机当前使用的语言类型。
        setLanguage:function(str){
            if(!str || /[\u4E00-\u9FA5]/g.test(str)){
                le.options.language = "zh-cn";  //中文简体
                return;
            }
            if(/[a-zA-Z]/g.test(str)){
                le.options.language = "en-us";  //美式英语
            }
        },

        //告知笔记是否加载成功。
        isLoaded:function(){
            return le.options.isLoaded;
        }
	}
})(editor);
(function(le){
	le.cmd = function(cmdName,val){
		var name = cmdName.toLowerCase(), temp,		
			rng = le.controls.getRange(),
			start = rng.startContainer,
			end = rng.endContainer;
		if(name == 'indent'){
			temp = 0;
			while(start.parentNode){
				if(start.parentNode.tagName == 'BLOCKQUOTE' || start.parentNode.tagName == 'OL' || start.parentNode.tagName == 'UL'){
					temp++;
				}
				start = start.parentNode;
			}
			if(temp >= le.options.indentcount) return;
		}

		//文本资源标签禁止插入列表。
		if(name == 'insertorderedlist' || name == 'insertunorderedlist'){
			if(start.parentNode.getAttribute('key') || end.parentNode.getAttribute('key')){
				return false;
			}
		}
		
		le.doc.execCommand(cmdName,false,val || false);
		le.extendEvent.fireEvent('adjustimages');	//每次执行命令后执行adjustimages事件。
		le.extendEvent.fireEvent('selChange');		//每次执行命令后执行selChange事件。
	}
})(editor);

(function(le){
	le.controls = {
		toDom:function(html){			
			var div=le.doc.createElement('div');
			div.innerHTML=html;
			return div;
		},

		//转换成标准标签。
		setParse:function(node){
			var type = node.tagName.toLowerCase().match(/[^-]+$/)[0],
				key = node.getAttribute('key'),
				el = le.doc.createElement(type == 'text' ? 'div' : 'img'),
				res = le.options.json[key],
				_data = node.getAttribute('_data'),
				temp;
			if(el.tagName == 'DIV'){
				if(_data){
					temp = le.doc.createElement('div');
					temp.innerHTML = '<div '+Base64.decode(_data)+'></div>'
					el = temp.firstChild;
				}
				//el.innerHTML = node.innerHTML;
				el.innerHTML = le.options.json[key]['fName'];
			}else{
				el.src = le.options.json[key]['fUrl'];
				this.setImgWidth(el,res.width);
				//el.setAttribute('width',res.width > maxw ? maxw : res.width);
			}
			le.utils.setAttrs(el,{type:type,key:key});
			return el;
		},

		//转换成资源标签。
		getParse:function(node){
			var type = node.getAttribute('type'),
				key = node.getAttribute('key'),
				style = node.getAttribute('style'),
				el = le.doc.createElement('ln-'+type),
				_data='';
			if(type == 'text'){							
	            if(style) _data += 'style="' + style + '" ';
	            if(_data.length>0) el.setAttribute('_data',Base64.encode(_data));		
				//el.innerHTML = node.innerHTML;
			}
			el.setAttribute('key',key);
			return el;
		},

		//设置笔记内容
		setContent:function(html,width,json,createtime){

            html = le.utils.filterXSS(html);
            
			le.options.isLoaded = false;
			le.options.keyBoradIsShow = false;
			le.options.width = width || 210;
			//注册图片调整事件。			
			function adjustImages(){
				var imgs = le.options.node.querySelectorAll('img');
				for(var i=0;i<imgs.length;i++){
					var img = imgs[i],
						left = le.utils.getOffset(img,'Left')- le.options.mrgalign(),
						width = img.offsetWidth,
						pagew = le.options.width - le.options.mrgalign()*2,
						imgmaxw = img.getAttribute('maxw');
					if(left + width > pagew || (left + width < pagew && width < imgmaxw)){
						img.setAttribute('width',pagew - left);
					}
				}
			}
			le.extendEvent.addEvent('adjustimages',adjustImages);

			if(!html || /^\s*$/g.test(html)){
				le.options.node.innerText = le.I18N[le.options.language].writesometing;
				le.options.isLoaded = true;
				return ;
			}
			// if(html && !/^\s*$/g.test(html) && !json){
			// 	le.options.node.innerHTML=html;
			// 	return;
			// };

			json = le.utils.isString(json) ? le.utils.parseJSON(json) : json;
			le.options.json = json || {};

			var div = this.toDom(html),
				tags = div.querySelectorAll('[key]');

			for(var i = 0; i < tags.length; i++){				
				var tag = tags[i],
					parent = tag.parentNode;

				le.options.keys[tag.getAttribute('key')] = 1;
				parent.replaceChild(this.setParse(tag),tag);
			}

			le.doc.querySelector("body").style.cssText +="width:"+ le.options.width+"px;";
			le.options.node.innerHTML = div.innerHTML;	
			if(createtime){
				//如果传入创建时间，表示为旧笔记。新（即未保存过）的笔记不显示创建时间UI.
				le.options.isNew = false;
				le.options.timenode.classList.add("show");
				le.options.timenode.innerText = le.I18N[le.options.language].createBy + createtime;
			}
			le.extendEvent.fireEvent('adjustimages');
			le.options.isLoaded = true;
			//le.extendEvent.fireEvent('selChange');	
		},

		//获取笔记内容
		getContent:function(){
			
			var html, div, tags;

			if(!this.hasContent()) return;

			this.cancelBookmark();

			le.options.textNodes = {}; //每次获取内容，清空文本节点对象。

			html = le.options.node.innerHTML;
			div = this.toDom(html);
			tags = div.querySelectorAll('[key]');

			for(var i = 0; i < tags.length; i++){				
				var tag = tags[i],
					key = tag.getAttribute('key'),
					parent = tag.parentNode;

				if(tag.tagName == 'DIV'){
					// if(/^\s*<br\/?>\s*$/ig.test(tag.innerHTML)){
					// 	//空文本标签，去掉key跟type属性。
					// 	var _tag = le.options.node.querySelector('[key="'+key+'"]');
					// 	_tag.removeAttribute('key');
					// 	_tag.removeAttribute('type');
					// 	tag.removeAttribute('key');
					// 	tag.removeAttribute('type');
					// 	continue;
					// }else{
					// 	le.options.textNodes[tag.getAttribute('key')] = tag.innerHTMl;
					// }
					if(/^\s*(<br\/?>)?\s*$/ig.test(tag.innerHTML)){
						var _tag = le.options.node.querySelector('[key="'+key+'"]');
						_tag.parentNode.removeChild(_tag);
						tag.parentNode.removeChild(tag);
						continue;
					}
					le.options.textNodes[tag.getAttribute('key')] = tag.innerHTML;					
				}

				parent.replaceChild(this.getParse(tag),tag);

				if(!le.options.keys[key] || le.options.keys[key] == 2){
					le.options.newkeys.push(key);
				}
				le.options.keys[key] = 2;
			}
			return le.utils.filterXSS(div.innerHTML.replace(/<br>/ig,'<br/>'));
		},

		//插入附件。
		insertFile:function(json){
			if(!this.hasContent()){
				le.options.node.innerText = '';
			}
			var bookmark = this.getBookmark(),
				el;
			json = le.utils.isString(json) ? le.utils.parseJSON(json) : json;
			if(json.type == 'text'){
				el = le.doc.createElement('div');
				el.innerHTML = json.fName;
			}else{
				var maxw = le.options.width - le.options.mrgalign()*2;
				el = le.doc.createElement('img');					
				el.setAttribute('src',json.fUrl);
				el.setAttribute('width',json.width > maxw ? maxw : json.width);
			}
			le.utils.setAttrs(el,{type:json.type,key:json.key});
			le.options.keys[json.key] = 1;
			bookmark && bookmark.parentNode ? bookmark.parentNode.insertBefore(el,bookmark) : le.options.node.appendChild(el);
			this.cancelBookmark(bookmark);			
		},

		//保存光标位置。
		createBookmark:function(){	
			var rng = this.getRange();

			if(rng.customer) return this.getBookmark();

			var bookmark = le.doc.createElement('span');			
			bookmark.setAttribute('id','leNote_bookMark');

			this.cancelBookmark();
			rng.insertNode(bookmark);			
			le.options.bookmark = bookmark;
			return bookmark;
		},

		//删除保存的光标位置。
		cancelBookmark:function(bookmark){
			var bookmark = bookmark ? bookmark : this.getBookmark();
			if(bookmark && bookmark.parentNode){
				bookmark.parentNode.removeChild(bookmark);
				le.options.bookmark = null;
			}
		},

		//获取保存的光标位置
		getBookmark:function(){
			return le.options.bookmark || le.options.node.querySelector("#leNote_bookMark");
		},

		//获取选区
		getRange:function(){
			var sel = getSelection(),rng;
			if(sel && sel.rangeCount){
				rng = sel.getRangeAt(0);
			}else{
				rng = le.doc.createRange();
				var child = le.options.node.firstChild;
                if ( !child ) {
                    rng.setStart( le.options.node, 0 );
                }
                while ( child ) {
                    rng.setStart( child, 0 );
                    child = child.firstChild;
                }
                rng.customer = 1;
			}
			return rng;
		},

		//高亮选区
		select:function(rng){
			var sel = getSelection();
			sel.removeAllRanges();
			sel.addRange(rng);
		},

		//找到上一个带key的兄弟节点。
		findPre:function(node){
			while(node){
				if(!node)break;
				if(node.tagName && node.hasAttribute('key'))return node;
				node = node.previousSibling;
			}
		},

		//调整光标位置
		adjustCaret:function(node,after){
			var rng=this.getRange();
			if(!after){				
				rng.setEndBefore(node);	
				rng.collapse(false);	
			}else{
				rng.setStartAfter(node);
				rng.collapse(true);		
			}	
			this.select(rng);
		},

		//获取光标所处的X,Y
		getPointformRange:function(){
			var rng = this.getRange(),
				span = le.doc.createElement('span'),
				x = 0,
				y = 0,
				temp = null;
			rng.insertNode(span);
			temp = span;
			while(span.offsetParent){
				x += span.offsetLeft;
				y += span.offsetTop;
				span = span.offsetParent;
			}
			temp.parentNode.removeChild(temp);
			return {'x':x,'y':y};
		},

		//获取光标相对于可视区在哪个位置。
		inView:function(){
			var position = null,
				val = null,
				y = this.getPointformRange().y,
				viewh = le.options.height || 240,
				scrolltop = le.doc.body.scrollTop,
				top = le.options.top || 80,
				lineHeight = le.options.lineheight || (le.options.lineheight = parseInt(le.utils.getStyle(le.options.node,'lineHeight')));
			
			val = y;
			scrolltop -= top;
			y -= top;
			if(scrolltop)position = "middle";
			if( y - scrolltop < lineHeight)position = "top";
			if( y + lineHeight - (viewh + scrolltop) > 0)position = "bottom";

			return {
				"position" : position,
				'y' : val
			};
		},
		setImgWidth:function(img,width){
			var maxw = le.options.width - le.options.mrgalign()*2;
			width = parseInt(width);
			img.setAttribute('width',width > maxw ? maxw : width);
		},

		//判断笔记是否有内容。
		hasContent:function(){
			return le.options.node.innerText != le.I18N[le.options.language].writesometing;
		}
	}
})(editor);

(function(le){
	//扩展事件
	le.extendEvent = {
		fireEvent:function(fnName){
			var fns = le.extendEvent.events[fnName] || [];
			for(var i=0; i<fns.length;i++){
				var fn = fns[i];
				fn.apply(this,arguments);
			}
		},
		addEvent:function(fnName,fn){
			if(typeof le.extendEvent.events == 'undefined')le.extendEvent.events = {};
			var fnArr = le.extendEvent.events[fnName] || (fnArr = le.extendEvent.events[fnName] = []);
			fnArr.push(fn);
		}
	}
	// le.extendEvent = {};	
	// le.extendEvent.events = {};

	// le.extendEvent.fireEvent = function(fnName){
	// 	var fns = le.extendEvent.events[fnName] || [];
	// 	for(var i=0; i<fns.length;i++){
	// 		var fn = fns[i];
	// 		fn.apply(this,arguments);
	// 	}
	// }
	// le.extendEvent.addEvent = function(fnName,fn){
	// 	var fnArr = le.extendEvent.events[fnName] || (fnArr = le.extendEvent.events[fnName] = []);
	// 	fnArr.push(fn);
	// }
})(editor);
(function(le){
	le.listener = function(){
		var opt = le.options,
			oldh,
			rng;
		// Hammer(opt.node,{behavior: {userSelect: true}}).on("tap", function(e) {
		//     var target=e.target,
		//     	ePageX=e.gesture.center.pageX;	
		// 	if(target.tagName == 'IMG'){
		// 		//le.options.node.appendChild(le.doc.createTextNode(le.options.keyBoradIsShow));	
		// 		if(le.options.keyBoradIsShow){	
		// 			le.controls.adjustCaret(target,ePageX-target.offsetLeft > target.offsetWidth/2);
		// 		}else{
		// 			le.doc.location.href='http://400?'+target.getAttribute('key');
		// 			e.stopPropagation();
		// 			e.preventDefault();
		// 		}
		// 	}
		// 	// if(target.tagName != 'IMG' && !le.options.keyBoradIsShow){
		// 	// 	le.doc.location.href='http://401?text';
		// 	// } 
		// });

		//通知客户端工具栏命令的状态。
		function selChange(){
			var jsn = {};
			for(var i=0;i<le.options.cmds.length;i++){
				var cmd = le.options.cmds[i];
				jsn[cmd] = le.doc.queryCommandState(cmd);
			}
			le.doc.location.href='http://500?'+le.utils.parseString(jsn);
			//console.log(jsn);
		}
		le.extendEvent.addEvent('selChange',selChange);
		le.doc.addEventListener('selectionchange',function(e){
			le.utils.throttle(selChange);		
		})

		opt.node.addEventListener('focus',function(){
			if(!le.controls.hasContent()){
				opt.node.innerText = '';
			}
			opt.node.classList.add("active");
			opt.timenode.classList.remove("show");
		});

		opt.node.addEventListener('blur',function(){
			var html = opt.bookmark ? opt.node.innerHTML.replace(opt.bookmark.outerHTML,'') : opt.node.innerHTML;
			html = html.replace(/<div>/,'').replace(/<br\/?>/,'').replace(/<\/div>/,'');
			if(!html){
				opt.node.innerText = le.I18N[le.options.language].writesometing;
				opt.node.classList.remove("active");
			}
			if(!le.options.isNew)opt.timenode.classList.add("show");		
            //le.controls.createBookmark();			
		});

		//轻触事件。
		Hammer(opt.node,{behavior: {userSelect: true}}).on("tap", function(e) {
		    var target = e.target,
		    	x = e.gesture.center.pageX,
		    	y = e.gesture.center.pageY;	
			if(target.tagName == 'IMG'){
				if(le.options.keyBoradIsShow){		//如果键盘是显示的，则认为是编辑状态。
					//调整光标
					le.controls.adjustCaret(target,x-target.offsetLeft > target.offsetWidth/2);
				}else{
					//预览
					le.doc.location.href='http://400?'+target.getAttribute('key');
				}
			}else{
				if(!le.options.keyBoradIsShow){
					if(le.options.isdefault) return;  //默认笔记不能编辑
					if(target.tagName == 'A'){
						le.doc.location.href= target.getAttribute("href");
						return;
					}
					le.options.node.setAttribute('contenteditable','true');
					rng = le.doc.caretRangeFromPoint(x,y);
					le.controls.select(rng);
				}				
			}
		});		
		
		//调整文字输入自动换行时滚动到光标处。
		function adjustScroll(){
			var view = le.controls.inView();
			if( view.position == 'top'){
				window.scrollTo(0,view.y - 10);
			}
			if( view.position == 'bottom'){
				window.scrollTo(0,view.y - le.options.height + le.options.lineheight);
			}
		}
		opt.node.addEventListener('keyup',function(e){
			// var bookmark = le.controls.getBookmark();
			// if(bookmark){
			// 	bookmark.scrollIntoView();
			// 	le.controls.cancelBookmark();
			// }else{
			// 	var lineHeight = parseInt(le.utils.getStyle(opt.node,'lineHeight')) + 2,
			// 		newh = le.utils.getStyle(opt.node,'height');
			//     if (typeof oldh === 'undefined')
			//         oldh = newh;
			//     if(oldh != newh)
			//     {      
			//         window.scrollBy(0,(oldh > newh ? -1 : 1) * lineHeight);
			//         oldh = newh;
			//     }
			// }
			if(e.keyCode == 13){
				var rng = le.controls.getRange(),
					start = rng.startContainer;
				start = start.nodeType == 3 ? start.parentNode : start;
				if(start.tagName == 'DIV' && start.getAttribute('key') && start.getAttribute('type')){
					start.removeAttribute('key');
					start.removeAttribute('type');
				}
			}
			
			//节流
			//throttle(adjustScroll);			
			adjustScroll();
		});
		opt.node.addEventListener('keydown',function(e){			
			//退格键处理
			if(e.keyCode == 8){
				var node = opt.node;
				rng = le.controls.getRange();
				if(rng.collapsed && ((rng.startContainer.nodeType == 3 && rng.startOffset == 0) || rng.startContainer.nodeType == 1)){
					var bookmark = le.controls.createBookmark(),
						del = le.controls.findPre(bookmark);

					if(del && del.tagName && del.hasAttribute('key') && !le.utils.inSelection(del)){
						rng.selectNode(del)
						le.controls.select(rng);
						e.preventDefault();
					}
					le.controls.cancelBookmark();
				}
			}
		})
	}
})(editor);

//工具类
(function(le){
	le.utils = {
		//设置节点属性
		setAttrs:function(node,attrs){
			for(var i in attrs){
				node.setAttribute(i,attrs[i]);
			}
		},
		parseJSON:function(str){
			return JSON.parse(str);
		},
		parseString:function(json){
			return JSON.stringify(json);
		},		
		isString:function(str){
			return typeof(str) === 'string';
		},

		//获取节点样式
		getStyle:function(node,style){
			return getComputedStyle(node,false)[style];
		},

		//判断节点是否在选区里。
		inSelection:function(node){
			var rng = le.controls.getRange(),
				frag = rng.cloneContents();
			return frag.querySelector('[key="'+node.getAttribute("key")+'"]');
		},

		//节流 禁止事件重复频繁执行。
		throttle:function(method, context){
			clearTimeout(method.tId);
		    method.tId = setTimeout(function(){
		        method.call(context);
		    },100);
		},

		//获取偏移值。node是节点，way为 top || bottom || left || right ...
		getOffset:function(node,way){
			var way = 'offset'+way,
				res = node[way];
			while(node = node.offsetParent){
				res += node[way];
			}
			return res;
		},

		//合并对象。
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

        //xss过滤
        filterXSS: function(html){
            return filterXSS(html, {
               allowCommentTag: false,
               whiteList: this.extend(filterXSS.whiteList, {
                    'ln-photo': ['key', '_data'],
                    'ln-attachment': ['key'],
                    'ln-audio': ['key'],
                    'ln-text': ['key', '_data'],
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
	}
})(editor);
