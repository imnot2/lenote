var telreg=/^(13|14|15|18)\d{9}$/;
var mailreg = /^[a-z0-9-_\\.]+@([a-z0-9-]+[\\.]{1})+[a-z0-9-]+$/;
var pwdreg=/^(?!.*[^A-Za-z0-9-_]).{4,20}$/;
function getT(){
	var tt = "";
	var now= new Date();
	var day=now.getDate();
	var hour=now.getHours();
	var minute=now.getMinutes();
	var second=now.getSeconds();
	var milSecond = now.getMilliseconds();
	
	var ss = day +"" + hour + "" + minute + "" + second + "" + milSecond;
	for( var i=0;i<8;i++ ){
		tt = tt + Math.floor(Math.random()*10+1);
	}
	var token = ss + "" + tt;
	if(token.length > 20){
        token = token.substring(0, 20);
	}
	return token;
}
function hasAt(str){
	var patrn=/^[.]*@[.]*$/;  
	if (!patrn.exec(str)){
		return false;
	}
	return true;
}

function isEmail(str){
	var patrn=/^[a-z0-9-_\.]+@([a-z0-9-]+[\.]{1})+[a-z0-9-]+$$/;  
	if (!patrn.exec(str)){
		return false;
	}
	return true;
}

function isPhone(str){
	var patrn=/^(13|14|15|18)\d{9}$/;  
	if (!patrn.exec(str)){
		return false;
	}
	return true;
}

function checkPwd(str){
	var patrn=/^(?!.*[^A-Za-z0-9-_]).{4,20}$/;  
	if (!patrn.exec(str)){
		return false;
	}
	return true;
}
