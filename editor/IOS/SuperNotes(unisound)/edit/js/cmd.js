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
