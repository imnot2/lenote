$(function() {
	//禁掉默认右键
	document.oncontextmenu = function() {
		return false;
	};
	//禁掉F1
	window.onhelp = function() {
		return false
	};
	$(document).on('keydown',
	function(event) {
		if (event.which == 116 || event.which == 123 || event.ctrlKey && event.which == 82 || event.which == 122 || event.ctrlKey && event.which == 78) {
			window.event.which = 0;
			window.event.returnValue = false;
			return false;
		}
	});
	
});

var ue = UE.getEditor('editor');
ue.ready(function(){
	window.external.editorLoadSuccess();
    $(ue.document).bind('click',function(e){
	    var target=$(e.target);
	    if(target.is('img')&&_tool.Util.prototype.isIE()){
	    	var oRange = ue.body.createTextRange();		
			oRange.moveToElementText(target.get(0));		
			oRange.select();
			e.stopPropagation();
			e.preventDefault();
	    }   
	});			
	$(ue.document).bind('dblclick',function(e){
		var target=$(e.target);			
	    if(target.is('img')){
	        try{
	            window.external.openfile(target.attr('key'));
	        }catch(e){           
	        }        
	    }		    
	});		
	//屏蔽右键菜单
	// $(ue.document).bind('contextmenu',function(){
	// 	return false;
	// });	
	
	/*
	*	右键菜单。
	*/
	ue.document.addEventListener('mouseup',function(e){
		if(e.button == 2){
			ue.body.style.cursor="default";
			var target=e.target,
				nodeName=target.nodeName.toLowerCase(),
				range= ue.selection.getRange(),
				key=target.getAttribute("key"),
				type=target.getAttribute("type"),
				undo=ue.queryCommandState('undo') == -1 ? false : true,//-1,0
				redo=ue.queryCommandState('redo') == -1 ? false : true,//-1,0
				bold=ue.queryCommandState('bold') == 1 ? true : false,//0,1
				italic=ue.queryCommandState('italic') == 1 ? true : false,//0,1
				underline=ue.queryCommandValue("underline") == 'underline' ? true : false,//none,underline
				justify=ue.queryCommandValue('justify'),//left,center,right
				orderedlist=ue.queryCommandState('insertorderedlist') == 1 ? true : false,//1,0
				unorderedlist=ue.queryCommandState('insertunorderedlist') == 1 ? true : false,//1,0
				arg='{"key":"'+key+'","undo":"'+undo+'","redo":"'+redo+'","justify":"'+justify+'","bold":"'+bold+'","italic":"'+italic+'","underline":"'+underline+'","orderedlist":"'+orderedlist+'","unorderedlist":"'+unorderedlist+'"}';
			//console.log('{"key":"'+key+'","undo":"'+undo+'","redo":"'+redo+'"}');	   			
			//console.log(target.nodeName);
			function imgForNoSelection(target,type){
				range.selectNode(target).select();
				if(type == 'photo') window.external.showMenuForPhoto(arg);
				if(type == 'attachment') window.external.showMenuForAttachment(arg);
				if(type == 'audio') window.external.showMenuForAudio(arg);
			}
			if(range.collapsed){
				switch(nodeName){
	   				case 'img':
	   					imgForNoSelection(target,type);
	   					break;
	   				case 'body':
	   					window.external.showMenuForBlank(arg);
	   					break;
	   				default : 
	   					if(/^(\s*|\s*<br\/?>\s*)$/ig.test(target.innerHTML)){
	   						window.external.showMenuForBlank(arg);
	   					}else{
	   						window.external.showMenuForText(arg);		   						
	   					}
   				} 
			}else{
				if(nodeName == 'img'){
					var tmp=document.createElement("div"),fragment=range.cloneContents();
					tmp.appendChild(fragment);	   					
					if(!tmp.querySelector('[key="'+key+'"]')||(tmp.childNodes.length == 1)){
						imgForNoSelection(target,type);
						return ;
					}
				}
				if(nodeName == 'body'){
					range.collapse(false).select();
				}
   			//window.external.leftButtonForMouseClick();
				window.external.showMenuForSelection(arg);   				
			}				
		}
	});

	/*
	 *	更多工具事件注册。
	 */
	ue.body.addEventListener('click',function(){
		//去掉更多工具的选中状态。
        var checked = document.querySelector(".edui-button-checked"),show = document.querySelector(".edui-moretoolbox-show");
        if(checked){
            checked.classList.remove("edui-button-checked");
            show.classList.remove("edui-moretoolbox-show");
        }
	})

	var moretool = document.querySelector(".edui-for-moretool"),moretoolbox = document.querySelector("#moretoolbox");
	moretool.addEventListener("mouseover",function(){
		moretool.classList.add("edui-button-hover");
	})
	moretool.addEventListener("mouseout",function(){
		moretool.classList.remove("edui-button-hover");
	})
	moretool.addEventListener("click",function(e){
		moretool.classList.toggle("edui-button-checked");
		moretoolbox.classList.toggle("edui-moretoolbox-show");
	})
	if(moretoolbox.childNodes.length){
		moretool.classList.add("edui-button-show");
	}
	/*
	*	拖拽事件
	*/
	ue.document.addEventListener('dragstart',function(e){
		ue.undoManger.save();
		ue.fireEvent('selectionchange');
	});
	ue.document.addEventListener('dragend',function(e){
		ue.undoManger.save();
		ue.fireEvent('selectionchange');
	});
});