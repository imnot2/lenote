/*
 *  author: gejian1@lenovo.com
 *  description: 首页初始化及事件监听
 */

//监听登录和注册按钮
var listenPageEvent = function(){
    $('.signin').click(function(){
        user.login();
    });
    $('.register').click(function(){
        user.register();
    });
};

//页面加载完成后执行
$(function(){
    //检查是否支持JSON，如不支持则导入json2.json
    if(typeof(JSON) == 'undefined'){
        $('body').append('<script type="text/javascript" src="/assets/js/json/json2.js"></script>');
    }
    
    $('#header ul.links').smartNavHover();
    $('#surface .slider').nivoSlider();
    
    if(user.resolveST()){
        if(user.checkLogin()){
            user.redirect();
        }else{
            window.listenPageEvent();
        }
    }
});