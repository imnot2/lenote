var helper = lenote.helper = {
    //判断字符串是否为true
    isTrue: function(v){
        return v === true || v === 'true';
    },
    
    //判断是否为对象
    isObject: function(v){
        return typeof v === 'object';
    },
    
    //判断是否是函数
    isFunction: function(v){
        return typeof v === 'function';
    },
    
    isString: function(v){
        return typeof v === 'string';
    },
    
    isArray: function(v){
        //return v instanceof Array;
        //return Object.prototype.toString.call(v) == '[object Array]';
        return this.type(v) === 'array';
    },
    
    isNumeric: function(v){
        return !isNaN(parseFloat(v)) && isFinite(v);
    },
    
    type: function(v){
        if(v === null) return String(v);
        //type: Boolean Number String Function Array Date RegExp Object Error, etc
        return this.isObject(v) || this.isFunction(v)? this.toString.call(v).slice(8, -1).toLowerCase() || 'object' : typeof v;
    },
    
    isEmptyObject: function(v){
        /*jslint unused: false */
        for(var i in v) return false;
        return true;
    },
    
    //检查数组中是否存在该元素，i表示从哪个index开始查找。如果存在则返回index、否则返回-1
    inArray: function(item, array, i){
        if(this.isArray(array)){
            try{
                return [].indexOf.call(array, item, i);
            }catch(e){
                var len = array.length;
                //i = i? i < 0? Math.max(0, len + i) : i : 0;
                i = i? (i < 0? Math.max(0, len + i) : i) : 0; //支持逆向查找-从数组末尾
                for(; i < len; i++){
                    if(i in array && array[i] === item) return i;
                }
            }
        }
        return -1;
    },
    
    //阻止事件冒泡
    stopPropagation: function(e){
        e = e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true; //IE
        }
    },
    
    //扩展对象
    extend: function(){
        var target = arguments[0], n = 1, source;
        //如果只有一个参数则扩展lenote.helper自身
        if(arguments.length === 1){
            target = this;
            n = 0;
        }
        /* jshint boss: true */
        while(source = arguments[n++]){
            for(var prop in source) target[prop] = source[prop];
        }
        return target;
    },
    
    //@e是否保留原值仅扩展, @o是否仅替换已有值, @d是否深扩展
    extend2: function(target, source, e, o, d){
        function assign(_this, prop){
            //if(d && _this.isObject(source[prop]) && (!target[prop] || _this.isObject(target[prop]))){
            if(d && _this.isObject(source[prop]) && _this.isObject(target[prop])){
                target[prop] = _this.extend2(target[prop] || {}, source[prop], e, o, d);
            }else{
                target[prop] = source[prop];
            }
        }
        
        for(var prop in source){
            if(e){
                if(!target.hasOwnProperty(prop) || (d && this.isObject(source[prop]))) assign(this, prop);
            }else if(!o || target.hasOwnProperty(prop)){
                assign(this, prop);
            }
        }
        return target;
    },
    
    //创建函数实例
    createInstance: function(o){
        /*jslint evil: true */
        var f = new Function();
        f.prototype = o;
        /*jslint supernew: true */
        o = new f;
        f.prototype = null;
        return o;
    },
    
    //对象继承
    inherits: function(subClass, superClass){
        var sub = subClass.prototype,
            _super = this.createInstance(superClass.prototype);
        this.extend(_super, sub);
        subClass.prototype = _super;
        return (_super.constructor = subClass);
    },
    
    //深度克隆对象
    clone: function(source, target){
        var temp;
        target = target || {};
        for(var i in source){
            if(source.hasOwnProperty(i)){
                temp = source[i];
                if(this.isObject(temp)){
                    target[i] = this.isArray(temp)? [] : {};
                    //arguments.callee(temp, target[i]);
                    this.clone(temp, target[i]);
                }else{
                    target[i] = temp;
                }
            }
        }
        return target;
    },
    
    //将json字符串转为json对象
    parseJSON: function(data, callback){
        if(this.isObject(data)) return data;
        var result = {};
        try{
            result = JSON.parse(data);
            if(!this.isObject(result)) throw new Error('Illegal JSON String');
        }catch(e){
            result = {};
            if(this.isFunction(callback)) callback(e.message, e.stack);
        }
        return result;
    },
    
    //将json对象转换成字符串
    stringify: function(data){
        return JSON.stringify(data);
    },
    
    //删除标签
    stripTags: function(content){
        //content = (content || '').replace(/<[^>]+>/igm, '').replace(/&nbsp;/igm, ' ').replace(/\r?\n/igm, '<br/>');
        //return content.replace(/<br\/?>|\s/ig, '') === ''? '' : content.replace(/\s/igm, '&nbsp;');
        content = (content || '').replace(/<[^>]+>/igm, '').replace(/\r?\n/igm, '<br/>');
        return content.replace(/<br\/?>|\s/ig, '') === ''? '' : content.trim();
    },
    
    //删除空白
    stripSpace: function(content){
        return (content || '').replace(/\s+/igm, '');
    },
    
    trim: function(content){
        return (content || '').trim();
    },
    
    getPlain: function(content){
        return this.stripTags(content).trim();
    },
    
    html: function(content){
        content = (content || '').replace(/&nbsp;/igm, ' ').trim();
        return content? content.replace(/&((g|l|quo)t|amp|#39);/g, function(m){
            return {
                '&lt;':'<',
                '&amp;':'&',
                '&quot;':'"',
                '&gt;':'>',
                '&#39;':"'"
            }[m];
        }) : '';
    },
    
    unhtml: function(content, reg){
        content = this.trim(content);
        return content? content.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a, b){
            if(b){
                return a;
            }else{
                return {
                    '<':'&lt;',
                    '&':'&amp;',
                    '"':'&quot;',
                    '>':'&gt;',
                    "'":'&#39;'
                }[a];
            }
        }) : '';
    },
    
    unhtml2: function(content, reg){
       content = this.trim(content);
       content = content? content.replace(/&((g|l|quo)t|amp|#39);/g, function(m){
            return {
                '&lt;':'&amp;lt;',
                '&amp;':'&amp;amp;',
                '&quot;':'&amp;quot;',
                '&gt;':'&amp;gt;',
                '&#39;':"&amp;#39;"
            }[m];
        }) : '';
        return this.unhtml(content.replace(/&nbsp;/igm, '&amp;nbsp;'), reg).replace(/\s/igm, '&nbsp;');
    },
    
    //判断元素是否包含指定的class
    hasClass: function(dom, className){
        if(!dom || (this.isObject(dom) && dom.nodeType !== 1)) return false;
        var classList = this.isString(dom)? dom : dom.className,
            rclass = /[\t\r\n\f]/g;
        classList = ' ' + classList.replace(rclass, ' ') + ' ';
        className = ' ' + this.stripSpace(className) + ' ';
        return classList.indexOf(className) >= 0;
    },
    
    insertAfter: function(newDom, targetDom){
        var parentDom = targetDom.parentNode;
        if(parentDom.lastChild === targetDom){
            parentDom.appendChild(newDom);
        }else{
            parentDom.insertBefore(newDom, targetDom.nextSibling);
        }
    },
    
    getStyle: function(dom, key){
        if(dom.style[key]){
            return dom.style[key];
        }else if(dom.currentStyle){
            return dom.currentStyle[key];
        }else if(document.defaultView && document.defaultView.getComputedStyle){
            key = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            return document.defaultView.getComputedStyle(dom, null).getPropertyValue(key);
        }
        return null;
    },
    
    getRandomLetters: function(len){
        var tmp = '';
        for(var i = 0; i < len; i++) tmp += String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
        return tmp;
    },
    
    setVisible: function(dom, isDisplay){
        dom.style.visibility = isDisplay? 'visible' : 'hidden';
    },
    
    //判断是否给定的标签
    isTagNode: function(node, name){
        //return new RegExp('^' + node.tagName + '$','i').test(name);
        return node.nodeType === 1 && new RegExp('^' + node.nodeName + '$', 'i').test(name);
    },
    
    //获取元素的位置
    getPosition: function(dom){
        var left = dom.offsetLeft,
            top = dom.offsetTop,
            current = dom.offsetParent;
        while(current !== null){
        　　left += current.offsetLeft;
            top += current.offsetTop;
            current = current.offsetParent;
        }
        return {left: left, top: top};
    },
    
    //获取元素宽度
    getWidth: function(dom){
        var w = parseFloat(dom.style.width) || dom.width || dom.offsetWidth;
        if(w && w > 0) return w;
        return Math.max(dom.scrollWidth, dom.clientWidth, parseFloat(dom.style.width) || 0);
    },
    
    //获取元素高度
    getHeight: function(dom){
        var h = parseFloat(dom.style.height) || dom.height || dom.offsetHeight;
        if(h > 0) return h;
        return Math.max(dom.scrollHeight, dom.clientHeight, parseFloat(dom.style.height) || 0);
    },
    
    //滑动到指定位置
    slideTo: function(target, speed){
        //var pos = target.offsetTop - 5, current_pos = document.body.scrollTop, distance = pos - current_pos, duration = Math.abs(distance) / speed;
        if(!speed) speed = 100;
        if(target < 5) target = 5;
        var pos = target - 5, current_pos = document.body.scrollTop, distance = pos - current_pos, duration = Math.abs(distance) / speed;
        var it = setInterval(function(){
          if(distance > 0){
            current_pos = current_pos + duration;
            if(current_pos >= pos){
              current_pos = pos;
              clearInterval(it);
            }
          }else{
            current_pos = current_pos - duration;
            if(current_pos <= pos){
              current_pos = pos;
              clearInterval(it);
            }
          }
          document.body.scrollTop = current_pos;
        }, 1);
    },
    
    //获取中文的数字
    getCHNumber: function(v, addUnit){
        function convert(n){
            if(addUnit && n === 0) return '零';
            return n? n.replace(/\d/g, function(m){
                return {
                    0: 'O', 1: '一', 2: '二', 3: '三', 4: '四',
                    5: '五', 6: '六', 7: '七', 8: '八', 9: '九', 10: '十'
                }[m];
            }) : '';
        }
        v = parseInt(v) + '';
        if(addUnit){
            var unit = ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿'], len = v.length, result = '';
            for(var i = 0; i < len; i++){
               if(v[i] === 0 && v > 100 && len -1 !== i){
                    result += convert(v[i]);
               }else if(v[i] !== 0){
                    result += convert(v[i]) + unit[len - i - 1];
               }
            }
            return result.replace(/^一十(.*?)$/, '十$1');
        }else{
            return convert(v);
        }
    },
    
    //日期格式化
    dateTime: {
        getTimestamp: function(timestamp){ //检验时间戳是否合法，不合法则直接返回当前的时间戳
            /*jslint supernew: true */
            if(!timestamp || !/^-?\d+$/.test(timestamp) || (new Date(parseFloat(timestamp)) === 'Invalid Date')) timestamp = (new Date).getTime();
            return parseFloat(timestamp);
        },
        format: function(timestamp, format){
            timestamp = this.getTimestamp(timestamp);
            var f = format.split(':'),
                type = helper.stripSpace(f[0] || ''),
                _format = helper.stripSpace(f[1] || ''),
                result = '',
                _date = new Date(timestamp);
            switch(type){
                case 'y': //年
                    result = this.getYear(_date, _format);
                    break;
                case 'm': //月、季度
                    result = this.getMonth(_date, _format);
                    break;
                case 'd': //日、星期
                    result = this.getDay(_date, _format);
                    break;
                case 'h': //时、am/pm
                    result = this.getHour(_date, _format);
                    break;
                case 'M': //分
                    result = this.getMinute(_date, _format);
                    break;
                case 's': //秒
                    result = this.getSecond(_date, _format);
                    break;
                default:
                    result = '';
            }
            return result;
        },
        getYear: function(_date, format){ //得到格式化后的年, format为空或不合法则使用默认格式2014
            var result;
            switch(format){ //format参考PHP及JAVA中的通用写法
                case 'yyyy': result = _date.getFullYear();break; //2014
                case 'YYYY': result = helper.getCHNumber(_date.getFullYear());break;//二O一四
                case 'yy': result = (_date.getFullYear() + '').substr(-2, 2);break; //14
                case 'YY': result = helper.getCHNumber((_date.getFullYear() + '').substr(-2, 2));break; //一四
                default:
                    result = _date.getFullYear(); //getYear返回1900到目前的年数
            }
            return result;
        },
        getMonth: function(_date, format){ //月、季度
            var m = _date.getMonth() + 1, result; //0-11
            switch(format){
                case 'F': //月份，完整的文本格式，January 到 December
                    result = {
                        1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
                        7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
                    }[m];
                    break;
                case 'm': //数字表示的月份，有前导零, 01 到 12
                    result = m < 10? '0' + m : m;
                    break;
                case 'M': //三个字母缩写表示的月份, Jan 到 Dec
                    result = {
                        1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
                        7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
                    }[m];
                    break;
                case 'n': //数字表示的月份，没有前导零, 1 到 12
                    result = m;
                    break;
                case 't': //给定月份所应有的天数, 28 到 31
                    result = new Date(_date.getFullYear(), m, 0).getDate();
                    break;
                case 'N': //大写的月份, 一到十二
                    result = helper.getCHNumber(m, true);
                    break;
                case 'q':  //季度, 1到4, 第一季度：1月－3月/第二季度：4月－6月/第三季度：7月－9月/第四季度：10月－12月
                    result = m < 4? 1 : (m < 7? 2 : (m < 10? 3 : 4));
                    break;
                case 'Q': //季度, 一到四
                    result = helper.getCHNumber(m < 4? 1 : (m < 7? 2 : (m < 10? 3 : 4)));
                    break;
                case 'QN': //季度，Q1到Q4
                    result = m < 4? 1 : (m < 7? 2 : (m < 10? 3 : 4));
                    result = {1: 'Q1', 2: 'Q2', 3: 'Q3', 4: 'Q4'}[result];
                    break;
                case 's': //季节, 3－5月（春季）6－8月（夏季）9－11月（秋季）12－2月（冬季）
                    switch(m){
                        case 3:case 4:case 5: result = 'Spring'; break;
                        case 6:case 7:case 8: result = 'Summer'; break;
                        case 9:case 10:case 11: result = 'Autumn'; break;
                        default:
                            result = 'Winter';
                    }
                    break;
                default:
                    result = m;
            }
            return result;
        },
        getDay: function(_date, format){ //日、星期
            var result, d = _date.getDate(); //1-31
            switch(format){
                case 'd': //月份中的第几天，有前导零的 2 位数字, 01 到 31
                    result = d < 10? '0' + d : d;
                    break;
                case 'D': //星期中的第几天，文本表示，3 个字母, Mon 到 Sun
                    result = {
                        0: 'Sun', 1: 'Mon', 2: 'Tues',
                        3: 'Wed', 4: 'Thur', 5: 'Fri', 6: 'Sat'
                    }[_date.getDay()]; //0-6
                    break;
                case 'j': //月份中的第几天，没有前导零, 1 到 31
                    result = d;
                    break;
                case 'l': //星期中的第几天，完整格式, Sunday 到 Saturday
                    result = {
                        0: 'Sunday', 1: 'Monday', 2: 'Tuesday',
                        3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'
                    }[_date.getDay()];
                    break;
                case 'w': //星期中的第几天，数字表示, 0（表示星期天）到 6（表示星期六）
                    result = _date.getDay();
                    break;
                default:
                    result = d;
            }
            return result;
        },
        getHour: function(_date, format){ //时、am/pm
            var result, h = _date.getHours(); // 0-23
            switch(format){
                case 'a': //小写的上午和下午值, am 或 pm
                    result = (h >= 0 && h <= 12)? 'am' : 'pm';
                    break;
                case 'A': //大写的上午和下午值, AM 或 PM
                    result = (h >= 0 && h <= 12)? 'AM' : 'PM';
                    break;
                case 'g': //小时，12 小时格式，没有前导零, 1 到 12, 0-12为上午、13-23为下午
                    result = h === 0 ? 0 : (h <= 12? h : h - 12);
                    break;
                case 'G': //小时，24 小时格式，没有前导零, 0 到 23
                    result = h;
                    break;
                case 'h': //小时，12 小时格式，有前导零, 01 到 12
                    result = h === 0 ? 0 : (h <= 12? h : h - 12);
                    result = result < 10? '0' + result : result;
                    break;
                case 'H': //小时，24 小时格式，有前导零, 00 到 23
                    result = h < 10? '0' + h : h;
                    break;
                default:
                    result = h;
            }
            return result;
        },
        getMinute: function(_date, format){ //分
            var result, m = _date.getMinutes(); //0 ~ 59
            switch(format){
                case 'i': //有前导零的分钟数, 00 到 59
                    result = m < 10? '0' + m : m;
                    break;
                case 'I': //没前导零的分钟数, 0 到 59
                    result = m;
                    break;
                default:
                    result = m;
            }
            return result;
        },
        getSecond: function(_date, format){ //秒
            var result, s = _date.getSeconds(); //0 ~ 59
            switch(format){
                case 's': //秒数，有前导零, 00 到 59
                    result = s < 10? '0' + s : s;
                    break;
                case 'S': //没前导零的秒数, 0 到 59
                    result = s;
                    break;
                default:
                    result = s;
            }
            return result;
        }
    },
    
    filterXSS: function(html){
        return filterXSS(html, {
           allowCommentTag: false,
           whiteList: this.extend(filterXSS.whiteList, {
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
    }
};