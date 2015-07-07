var urlencode = require('urlencode'),
    coRequest = require('co-request'),
    store = function(){};

store.prototype = {
    getAll: function *(){
        var response = yield coRequest({
            url: C.config.store.api + 'goods/list',
            method: 'POST',
            encoding: 'utf8',
            timeout: 10000,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }), result = [];
        if(response.statusCode == 200){
            try{
                var body = JSON.parse(response.body);
                if(body.returnCode == 200){
                    result = body.goods;
                }else{
                    console.warn(body.returnMessage);
                }
            }catch(e){
                console.error(e);
            }
        }
        return result;
    },
    
    get: function *(tid){
        tid = (tid || '').trim();
        if(!tid) return null;
        var response = yield coRequest({
            url: C.config.store.api + 'goods/info',
            method: 'POST',
            encoding: 'utf8',
            timeout: 10000,
            body: JSON.stringify({tid: urlencode(tid)}),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }), result = null;
        if(response.statusCode == 200){
            try{
                var body = JSON.parse(response.body);
                if(body.returnCode == 200){
                    result = body;
                }else{
                    console.warn(body.returnMessage);
                }
            }catch(e){
                console.error(e);
            }
        }
        return result;
    }
};

module.exports = store;