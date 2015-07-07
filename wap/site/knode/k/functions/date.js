module.exports = {
    time:function(datetime){
        var date = (datetime)?new Date(datetime):new Date();
        var time = Math.round(date.getTime()/1000);
        return time;
    },
    
    getTimestamp: function(timestamp){
        timestamp = parseInt(timestamp);
        if(!timestamp || (new Date(timestamp) === 'Invalid Date')){
            timestamp = (new Date).getTime();
        }else if((timestamp + '').length === 10){
            timestamp *= 1000; //兼容无毫秒数的10位时间戳
        }
        return timestamp;
    },
    
    //2014.06.19 00:00:00
    getDayStart: function(timestamp){
        var d = new Date(this.getTimestamp(timestamp));
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        return d.getTime();
    },
    
    //2014.06.19 23:59:59
    getDayEnd: function(timestamp){
        var d = new Date(this.getDayStart(timestamp));
        d.setDate(d.getDate() + 1);
        d.setMilliseconds(d.getMilliseconds() - 1);
        return d.getTime();
    },

    format: function (date, format) {
        date = new Date(parseInt(date) * 1000);

        var o = {
            "m+": date.getMonth() + 1, //month
            "d+": date.getDate(),    //day
            "h+": date.getHours(),   //hour
            "i+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
            "S": date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    },

    dgm: function (date, format) {
        format = format||'yyyy-mm-dd';
        var timestr = parseInt(date);
        date = new Date(parseInt(date) * 1000);

        var o = {
            "m+": date.getMonth() + 1, //month
            "d+": date.getDate(),    //day
            "h+": date.getHours(),   //hour
            "i+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
            "S": date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)if (new RegExp("(" + k + ")").test(format))format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

        var now = new Date();
        now = now.getTime() / 1000;
        var time = now - timestr;
        var day = new Date(parseInt(now) * 1000).getDate() - new Date(parseInt(timestr) * 1000).getDate();
        var strtime = 0;
        if (timestr == 0){
            format = '--';
        }
        else if (day ==0) {
            if (time > 3600) {
                strtime = parseInt(time / 3600);
                format = strtime + ' 小时前';
            }
            else if (time > 1800) {
                format = '半小时前';
            } else if (time > 60) {
                strtime = parseInt(time / 60);
                format = strtime + ' 分钟前';
            } else if (time > 0) {
                format = strtime + ' 秒前';
            } else if (time == 0) {
                format = '刚刚';
            }
        }

        else if (day > 0 && day < 7) {
            if (day == 1) {
                format = '昨天 ' + o['h+'] + ':' + o['i+'] + ':' + o['s+'] + '';
            } else if (day == 2) {
                format = '前天 ' + o['h+'] + ':' + o['i+'] + ':' + o['s+'] + '';
            } else {
                format = o['d+'] + ' 天前';
            }
        }

        return format;
    }
}