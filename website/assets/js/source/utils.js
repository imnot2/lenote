/*
 *  author: gejian1@lenovo.com
 *  description: 工具函数
 */
var utils = {};

(function($){
   /*
    *  日期格式转换，为Date类添加format方法
    *  new Date().format('yyyy-MM-dd hh:mm:ss') -> 2013-07-12 18:33:30
    */
   Date.prototype.format = function(format){ 
      var o = { 
         "M+" : this.getMonth()+1,
         "d+" : this.getDate(),
         "h+" : this.getHours(),
         "m+" : this.getMinutes(),
         "s+" : this.getSeconds(),
         "q+" : Math.floor((this.getMonth()+3)/3), //quarter 
         "S" : this.getMilliseconds() //millisecond 
      };
      
      if(/(y+)/.test(format)){
         format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
      }
    
      for(var k in o){
         if(new RegExp("("+ k +")").test(format)){
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
         }
      }
      return format;
   };
   
   Number.prototype.toFixed = function(d){
          var s = this + ""; if(!d) d = 0;
          if(s.indexOf(".") == -1) s += "."; s += new Array(d + 1).join("0");
          if(new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+ (d+1) +"})?)\\d*$").test(s)){
              var s = "0" + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;
              if(a == d + 2){
                  a = s.match(/\d/g);
                  if(parseInt(a[a.length - 1]) > 4){
                    for(var i = a.length - 2; i >= 0; i--){
                      a[i] = parseInt(a[i])+1;
                      if(a[i] == 10){
                        a[i] = 0; b = i != 1;
                      }else break;
                    }
                 }
                 s = a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
             }
             if(b) s = s.substr(1);
             return (pm + s).replace(/\.$/, "");
          }
          return this + "";
    };
   
   //地址跳转
   utils.redirect = function(url){
      if(url) location.href = url;
   };
   
   utils.calFileSize = function(size, fractionDigits){
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
   },
   
   //计算音频播放时间
   utils.playTimeFormat = function(msec){
      var sec = parseFloat(msec) / 1000;
      //sec = parseFloat(sec);
      var minute = 0;
      minute = parseInt(sec / 60);
      sec -= minute * 60;
      //sec = sec.toFixed(2);
      sec = parseInt(sec);
      return ((minute > 9)? minute : '0' + minute) + ':' + ((sec > 9)? sec : '0' + sec);
   },
   
   /*
    *  根据当前视窗的高度计算出元素的高度
    *  params:
    *     elem: 目标元素
    *     minHeight: 目标元素的最小高度
    *     sub: 修正高度
    *     isReturn: 是否返回计算后的目标元素高度
    */
   utils.calElemHeight = function(elem, minHeight, sub, isReturn){
      var height = $(window).height() - $(elem).offset().top;
      if(typeof sub == 'number') height -= sub;
      if(typeof minHeight == 'number' && height < minHeight) height = minHeight;
      if(isReturn){
          return height;
      }else{
          $(elem).height(height);
      }
   };
   
   //解析指定或当前的url地址
   utils.componentizeUrl = function(url){
      if(!url) url = window.location.href;
      var data = {protocol: null, domain: null, domainNoWww: null, port: null, path: null, queryString: null};
      var urlMatcher = /^(.*?):\/\/((www\.)?(.*?))(:\d+)?(\/.*?)(\?.*)?$/;
      var matches = urlMatcher.exec(url);
      data.protocol = matches[1];
      data.domain = matches[2];
      data.domainNoWww = matches[4];
      data.port = matches[5];
      data.path = matches[6];
      data.queryString = matches[7];
      return data;
   };
   
   //获取域名
   utils.getDomain = function(url){
       var url_parts = utils.componentizeUrl(url);
       var cb = url_parts.protocol + '://' + url_parts.domain;
       if(url_parts.port) cb += ':' + url_parts.port;
       return cb;
   };
   
   //通过解析URL地址获取Get参数
   utils.parseQueryParams = function(url){
       if(!url) url = window.location.href;
       var data = utils.componentizeUrl(url), queryString = data.queryString, params = {};
       if (!queryString) return params;
       queryString = queryString.substr(1).split("#")[0];
       var pairs = queryString.split("&"), i;
       for(i = 0; i < pairs.length; i++){
         var item = pairs[i].split("=");
         if(item[1]){
            item[1] = item[1].replace(/\+/g, " ");
         }
         params[item[0].toLowerCase()] = item[1];
      }
      return params;
   };
   
   //过滤HTML标签
   utils.strip_tags = function(html){
      html = html || '';
      return html.replace(/<[^>]+>/igm, '');
   };
   
   utils.trim = function(content, noMerge){
       var res = content.replace(/&nbsp;/igm, ' ');
       if(!noMerge) res.replace(/\s+/igm, ' ');
       return $.trim(res);
   };
   
   //隐藏目标元素
   utils.hide = function(target, ishide){
      if(ishide){
          $(target).css('visibility', 'hidden').hide();
      }else{
          $(target).css('visibility', 'hidden');
      }
      return this;
   };
   
   //显示目标元素
   utils.show = function(target, isshow){
      if(isshow){
          $(target).css('visibility', 'visible').show();
      }else{
          $(target).css('visibility', 'visible');
      }
      return this;
   };
   
   //生成uuid: 36位
   utils.uuid = function(prefix){
     prefix = prefix || 'wid_';
     var key = uuid.v1() + (new Date()).valueOf().toString(16) + uuid.v4() + (navigator.userAgent || ''),
           value = uuid.v4() + (navigator.appVersion || '') + uuid.v1() + Date.parse(new Date()).toString(2);
     return prefix + md5(key, value);
   };
   
   //判断是否是safari
   utils.isSafari = function(){
       var agent = navigator.userAgent.toLowerCase();
       if(agent.indexOf( ' applewebkit/' ) > -1){
           return !/chrome\//.test(agent);
       }
       return false;
   };
   
   //过滤功能按键(未包含Mac键盘上的功能键、大写键、win键、打印翻页键、小键盘开关键等)，排除: 退格8、回车13、Delete46
   utils.isFunctionKey = function(keyCode){
       switch(keyCode){
           case 9: //Tab
           case 16: case 17: case 18: //Shift、Ctrl、Alt
           case 20: case 27: //大小写切换、esc
           case 37: case 38: case 39: case 40: //左上右下
           case 33: case 34: case 35: case 36: case 45: //PageUp、PageDown、End、Home、Insert
           case 44: case 145: case 19: case 144: //PrintSc、Scroll Lock、Pause Break、NumLock
           case 91: case 92: //左右win键
              return true; break;
           default:
              if(keyCode >= 112 && keyCode <= 123) return true; //F1-F12
              return false;
       }
   };
   
   //高亮指定的文本
   utils.highlight = function(keyword, text, style){
       keyword = $.trim(keyword);
       text = $.trim(text);
       if(keyword == '' || text == '') return text;
       style = style || 'background-color:#89bce0;';
       //以空格切分关键词组分别高亮
       var kws = keyword.replace(/\s+/g, ' ').split(' ');
       for(var i = 0; i < kws.length; i++){
           var kw = $.trim(kws[i]);
           if(kw == '') continue;
           text = text.replace(new RegExp('(' + utils.unhtml(kw) + ')', 'igm'), '<span style="' + style + '">$1</span>');
       }
       return text;
   };
   
   //获取后辍名
   utils.getSuffix = function(name){
       if(!name) return {ext: '', name: ''};
       var indexof = name.lastIndexOf('.'),
            filetype = (indexof != -1)? name.substring(indexof) : '',
            ext = filetype? filetype.replace(/^\./ig, '') : '',
            _name = name.replace(filetype, '');
       return {ext: ext.toLowerCase(), name: _name};
   };
   
   //递归查找其父元素是否有紧邻的某兄弟元素，如有则直接返回
   utils.getSibling = function(node, selector, isPrev){
       var elem = isPrev? node.prev(selector) : node.next(selector);
       if(elem && elem.length == 0){
           var _parent = node.parent();
           if(_parent && !UE.dom.domUtils.isBody(_parent.get(0))){
               return utils.getSibling(_parent, selector, isPrev);
           }else{
               return '';
           }
       }else{
           return elem;
       }
   };
   
   //设置焦点
   utils.setFocus = function(selector){
       var input = $(selector).first();
       if(input.length > 0){
           setTimeout(function(){ //fixed: chrome can't run focus function
               input.focus().val(input.val());
           }, 50);
       }
   };
   
   utils.html = function(str){
        return $.trim(UE.utils.html(str.replace(/&nbsp;/igm, ' ')));
   };
   
   utils.unhtml = function(str){
       str = $.trim(str);
       str = str? str.replace(/&((g|l|quo)t|amp|#39);/g, function(m){
            return {
                '&lt;':'&amp;lt;',
                '&amp;':'&amp;amp;',
                '&quot;':'&amp;quot;',
                '&gt;':'&amp;gt;',
                '&#39;':"&amp;#39;"
            }[m];
        }) : '';
       return UE.utils.unhtml(str.replace(/&nbsp;/igm, '&amp;nbsp;')).replace(/\s/igm, '&nbsp;');
   };
}(jQuery));