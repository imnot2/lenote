'use strict';

var debug = require('debug')('couchbase-session-store'),
    util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _ = require('underscore');

var CouchbaseStore = module.exports = function(connect){
    if(!(this instanceof CouchbaseStore)){
        return new CouchbaseStore(connect);
    }
    
    EventEmitter.call(this);
    this.client = connect;
};

util.inherits(CouchbaseStore, EventEmitter);

CouchbaseStore.prototype.get = function *(sid){
    var data = null;
    try{
        data = yield this.client.Get(sid);
    }catch(e){}
    
    if(data && data.length > 1){
        data = JSON.parse(new Buffer(data.shift(), 'base64').toString());
    }else{
        data = null;
    }
    debug('get session: %s', data || 'none');
    
    if(!data){
        return null;
    }
    
    try{
        return data;
    }catch(err){
        debug('parse session error: %s', err.message);
    }
};

//warn: 当ttl不合法或超过30天时(不能超过30天24*60*60*30 = 2592000)，记录会直接被couchbase删除。如果ttl为0则永不失效。
CouchbaseStore.prototype.set = function *(sid, sess, ttl){
    if(!_.isNumber(ttl)) ttl = 86400000;
    ttl = ttl / 1000;
    
    sess = new Buffer(JSON.stringify(sess)).toString('base64');
    debug('SETEX %s %s %s', sid, ttl, sess);
    yield this.client.Set(sid, sess, null, ttl);
    debug('SET %s complete', sid);
};

CouchbaseStore.prototype.destroy = function *(sid, sess){
    debug('DEL %s', sid);
    //yield this.client.Set(sid, {}, null, 1);
    try{
        yield this.client.Del(sid);
    }catch(e){}
    debug('DEL %s complete', sid);
};