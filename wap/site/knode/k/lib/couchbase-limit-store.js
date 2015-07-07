'use strict';

/*
 * TODO
 *  1.添加freeze冻结选项：当开始新周期时，不直接删除原来的hashKey数组，而是将其中的已冻结的ip添加到黑名单1天、其它有效的ip数据删除并重新统计计数
 *  2.支持黑名单与冻结ip的消息定制，状态分别是403、429
 *  3.通过参数配置决定X-RateLimit-Limit等头是否显示
 * Docs
 *  https://github.com/tunnckoCore/koa-better-ratelimit
 *  https://github.com/koajs/ratelimit
 *  https://github.com/cnpm/koa-limit
 */
var CouchbaseStore = module.exports = function(connect){
    if(!(this instanceof CouchbaseStore)){
        return new CouchbaseStore(connect);
    }
    
    this.client = connect;
};

CouchbaseStore.prototype.hget = function *(hashKey, field){
    var data = null;
    try{
        data = yield this.client.Get(hashKey);
    }catch(e){}
    
    if(data && data.length > 1) data = data.shift();
    
    if(field === null){
        return !data? null : data;
    }else{
        return !data? 0 : (data[field] || 0);
    }
};

CouchbaseStore.prototype.hincrby = function *(hashKey, field, value){
    var ttl = 18000, //5小时
        data = yield this.hget(hashKey, null);
    
    if(data === null){
        data = {};
        data[field] = 0;
    }else if(!data[field]){
        data[field] = 0;
    }
    
    data[field] += value;
    
    //yield this.client.Set(hashKey, data);
    yield this.client.Set(hashKey, data, null, ttl);
};

CouchbaseStore.prototype.del = function *(hashKey){
    try{
        yield this.client.Del(hashKey);
    }catch(e){}
};