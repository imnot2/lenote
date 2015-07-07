document.onkeydown=function(e){
	e=e||window.event;
	if((e.keyCode>=112&&e.keyCode<=123)||(e.ctrlKey && e.keyCode == 82) || (e.ctrlKey && e.keyCode == 78)){
		e.keyCode=0;
		e.returnValue=false;
	} 
}	
//屏蔽f1帮助	
window.onhelp = function() {
    return false;
};