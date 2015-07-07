var xss = require('xss'),
    xssoptions = {
        allowCommentTag: false,
        stripIgnoreTag: true,
        stripIgnoreTagBody: ['script', 'applet', 'embed', 'object', 'textarea', 'button', 'style', 'title', 'noframes', 'noscript', 'param'],
    },
    myxss = new xss.FilterXSS(xssoptions),
    dateFormat = require('dateformat');

module.exports = {
    //check fun for thunkify
    methodQualified: function(name, func){
        var funcStr = func.toString();
        // Only public methodds (i.e. methods that do not start with '_') which have
        // 'callback' as last parameter are qualified for thunkification.
        return (/^[^_]/.test(name) && /function.*\(.*,?.*callback\)/.test(funcStr));
    },
    
    //删除中文标点符号
    replaceCHPunctuation: function(str){
        var ch = ["“", "”", "‘", "’", "。", "，", "；", "：", "？", "！", "……", "—", "～", "（", "）", "《", "》", "、"],
            en = ["\"", "\"", "'", "'", ".", ",", ";", ":", "?", "!", "…", "-", "~", "(", ")", "<", ">", "/"];
        for(var i = 0; i < ch.length; i++){
            str = str.replace(new RegExp(ch[i], 'g'), en[i]);
        }
        return str;
    },
    
    strip_tags: function(str){
         str = (str || '').trim();
         return str.replace(/<[^>]+>/igm, '');
    },
    
    getHome: function(url){
        var host = url,
            regex = /(.*\:\/\/)?([^\/|:]*).*/;
        if(!url) url = window.location.href;
        var match = url.match(regex);
        if(match) host = match[2];
        if(match && host){
            var strAry = host.split('.');
            if(strAry.length > 1){
                host = strAry[strAry.length - 2] + '.' + strAry[strAry.length - 1];
            }
            host = match[1]? match[1] + host : 'http://' + host;
        }
        return host;
    },
    
    getHost: function(url){
        if(!url) return '';
        var res = require('url').parse(url);
        if(!res.hostname) return '';
        return res.protocol + '//' + res.host;
    },
    
    filterXSS: function(content){
        return myxss.process(content || '').trim();
    },
    
    dateFormat: function(timestamp, format){
        return dateFormat(timestamp, format || 'yyyy-mm-dd');
    },
    
    calFileSize: function(size, fractionDigits){
       if(size && /^\d+$/.test(size)){
           if(!fractionDigits) fractionDigits = 2;
           size = parseFloat(size);
           var i = 0, units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
           //for(i = 0; size >= 1024 && i < 5; i++) size /= 1024;
           for(; size >= 1024 && i < 5; i++) size /= 1024;
           if(typeof Math == 'object'){
               size = Math.round(size * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
           }else{
               size = size.toFixed(fractionDigits);
           }
           return size + units[i]; 
       }
       return '0B';
    }
};