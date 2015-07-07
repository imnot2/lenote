(function(lenote){
    //元素的zoom属性计算, 缩放比例从0.1-1。例如zoom="0.4", zoom="0.4|0.4",第一个是宽度，第二个定义高度
    function setZoom(dom){
        var zoom = dom.getAttribute('zoom');
        if(zoom){
            var size = zoom.split('|'), scale_w = parseFloat(size[0] || 0), scale_h = parseFloat(size[1] || 0);
            if(!isNaN(scale_w) && (scale_w > 0)) dom.style.width = (template.props.deviceInfo.width * scale_w) + 'px';
            if(!isNaN(scale_h) && (scale_h > 0)) dom.style.height = (template.props.deviceInfo.height * scale_h) + 'px';
        }
    }
    
    var template = lenote.template, layout = template.layout = {
        //预处理
        pre: function(){
            document.body.setAttribute('style','background:none;');
        },
        
        //初始化
        init: function(){
            this.showLoading();
            
            //获取设备宽度用于计算各控件的大小自动适配屏幕
            template.props.deviceInfo = template.client.getDevice();
            
            //控件初始化
            var controls = document.querySelectorAll('[' + template.controls.attr_type + ']');
            for(var i = 0; i < controls.length; i++){
                var control = controls[i];
                setZoom(control);
                template.controls.init(control);
            }
            
            //绑定全局事件
            template.controls.bindEvent();
            
            //设置普通元素的大小
            var items = document.querySelectorAll('[zoom]:not([' + template.controls.attr_type + '])');
            for(var j = 0; j < items.length; j++) setZoom(items[j]);
            
            //模板初始化结束后的回调
            if(helper.isFunction(template.api.hooks.init)) template.api.hooks.init(template.props.deviceInfo.width, template.props.deviceInfo.height);
            //if(helper.isFunction(template.api.hooks.init)) template.api.hooks.init(900, 800);
        },
        
        //显示加载界面 @isRemove 是否隐藏加载界面
        showLoading: function(isRemove){
            var loading = document.querySelector('.loading');
            if(isRemove){
                if(loading) loading.parentNode.removeChild(loading);
                document.body.removeAttribute('style');
            }else if(!loading){
                document.body.setAttribute('style','background:none;');
                var div = document.createElement('div');
                div.className = 'loading light-timeline';
                //div.innerHTML = '加载中..';
                div.innerHTML = i18n.getValue('loading');
                document.body.appendChild(div);
            }
            document.body.style.visibility = 'visible';
        },
        
        //html页面文字国际化
        translate: function(){
            var items = document.querySelectorAll('span[_t]'); //<span _t="loading.."></span>
            for(var i = 0; i < items.length; i++){
                var item = items[i], t = helper.trim(item.getAttribute('_t'));
                if(t) item.innerHTML = i18n.getValue(t);
            }
        }
    };
    
    layout.pre();
})(window.lenote || {});