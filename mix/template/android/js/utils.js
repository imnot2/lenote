var utils;
(function(){
    "use strict"
    
    utils = {
        //删除标签
        stripTags: function(content){
            content = content || '';
            // content = content.replace(/<[^>]+>/igm, '').replace(/&nbsp;/igm, ' ').replace(/^\s+/igm, '').replace(/\s+$/igm, '');
            // return content == ''? '' : content.replace('/\r/igm', '').replace(/\n/igm, '<br/>').replace(/\s/igm, '&nbsp;');
            content = content.replace(/<[^>]+>/igm, '').replace(/&nbsp;/igm, ' ').replace(/\r?\n/igm, '<br/>');
            return content.replace(/<br\/?>|\s/ig, '') == ''? '' : content.replace(/\s/igm, '&nbsp;');
        },
        
        //删除空白
        stripSpace: function(content){
            return (content || '').replace(/\s+/igm, '');
        },
        
        //获取元素宽度
        getDomWidth: function(dom){
            var w = parseFloat(dom.style.width) || dom.width || dom.offsetWidth;
            if(w && w > 0) return w;
            return Math.max(dom.scrollWidth, dom.clientWidth, parseFloat(dom.style.width) || 0);
        },
        
        //获取元素高度
        getDomHeight: function(dom){
            var h = parseFloat(dom.style.height) || dom.height || dom.offsetHeight
            if(h > 0) return h;
            return Math.max(dom.scrollHeight, dom.clientHeight, parseFloat(dom.style.height) || 0);
        },
        
        //将json字符串转为json对象
        parseJSON: function(data, callback){
            if(typeof data == 'object') return data;
            var result = {};
            try{
                //eval('(' + data + ')');
                result = JSON.parse(data);
            }catch(e){
                result = {};
                if(typeof callback == 'function') callback(e.message, e.stack);
            }
            return result;
        },
        
        //判断是否包括class
        hasClass: function(classList, className){
            var rclass = /[\t\r\n\f]/g;
            classList = ' ' + classList.replace(rclass, ' ') + ' ';
            className = ' ' + this.stripSpace(className) + ' ';
            return classList.indexOf(className) >= 0;
        },
        
        //获取元素的位置(兼容position: relative的情况), dom.offsetTop不能获取已定位元素的位置信息，除非同时计算document.body.scrollTop
        //dom.getBoundingClientRect().top + document.body.scrollTop或dom.offsetTop + document.body.scrollTop
        getPosition: function(dom){
            var left = dom.offsetLeft, top = dom.offsetTop, current = dom.offsetParent; // 取得元素的offsetParent
            //一直循环直到根元素
            while(current !== null){
            　　left += current.offsetLeft;
                top += current.offsetTop;
                current = current.offsetParent;
            }
            //返回包含left、top坐标的对象
            return {left: left, top: top};
        },
        
        //获取中文的数字
        getCHNumber: function(v, addUnit){
            function convert(n){
                if(addUnit && n == 0) return '零';
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
                   if(v[i] == 0 && v > 100 && len -1 != i){
                        result += convert(v[i]);
                   }else if(v[i] != 0){
                        result += convert(v[i]) + unit[len - i - 1];
                   }
                }
                return result.replace(/^一十(.*?)$/, '十$1'); //一十二转为十二
            }else{
                return convert(v);
            }
        },
        
        //日期格式化:英文格式(简写/全称月、星期、季度)、年月日数字大小写、pm/am的12小时制等时间格式
        dateTime: {
            getTimestamp: function(timestamp){ //检验时间戳是否合法，不合法则直接返回当前的时间戳
                if(!timestamp || !/^-?\d+$/.test(timestamp) || (new Date(parseFloat(timestamp)) == 'Invalid Date')) timestamp = (new Date).getTime();
                return parseFloat(timestamp);
            },
            format: function(timestamp, format){ //format为空时则啥都不返回
                timestamp = this.getTimestamp(timestamp);
                //var f = format.split(':'), type = (f[0] || '').toLowerCase(), _format = f[1] || '', result = '';
                var f = format.split(':'), type = utils.stripSpace(f[0] || ''), _format = utils.stripSpace(f[1] || ''), result = '',
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
                    case 'YYYY': result = utils.getCHNumber(_date.getFullYear());break;//二O一四
                    case 'yy': result = (_date.getFullYear() + '').substr(-2, 2);break; //14
                    case 'YY': result = utils.getCHNumber((_date.getFullYear() + '').substr(-2, 2));break; //一四
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
                        result = utils.getCHNumber(m, true);
                        break;
                    case 'q':  //季度, 1到4, 第一季度：1月－3月/第二季度：4月－6月/第三季度：7月－9月/第四季度：10月－12月
                        result = m < 4? 1 : (m < 7? 2 : (m < 10? 3 : 4));
                        break;
                    case 'Q': //季度, 一到四
                        result = utils.getCHNumber(m < 4? 1 : (m < 7? 2 : (m < 10? 3 : 4)));
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
                        result = h == 0 ? 0 : (h <= 12? h : h - 12);
                        break;
                    case 'G': //小时，24 小时格式，没有前导零, 0 到 23
                        result = h;
                        break;
                    case 'h': //小时，12 小时格式，有前导零, 01 到 12
                        result = h == 0 ? 0 : (h <= 12? h : h - 12);
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
        Place:{
            getInfo:function(info){
                return info.split(":");
            },
            getPlace:function(info,data){
                var arrAddress=info && this.getInfo(info),
                addjson={
                    co:'country',
                    pr:'province',
                    ci:'city',
                    di:'district',
                    st:'street',
                    num:'streetNumber'
                },
                result='';
                for(var i=0;i<arrAddress.length;i++){
                    var add=arrAddress[i];
                    result += addjson[add] && data[addjson[add]] ? data[addjson[add]]+' ' : '';                    
                }
                return result;
            }
        }
    };
})();