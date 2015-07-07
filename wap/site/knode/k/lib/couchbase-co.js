'use strict';

/*
 * Usage:
 *  Command:
 *   node --harmony
 *  Demo1:
 *   co = require('co');
 *   thunk = require('thunkify');
 *   couchbaseClient = require('node-couchbase');
 *   couchbase = new couchbaseClient(['192.168.1.100:11311'], 'supernote_cache', 'lenote2014');
 *   couchbase.Get = thunk(couchbase.Get);
 *   co(function *(){abc=yield couchbase.Get('test')})(); console.info(abc);
 *   co(function *(){abc = yield function(done){done(null, 8)}})();
 *  Demo2:
 *   co = require('co');
 *   couchbaseClient = require('./knode/k/lib/couchbase-co');
 *   couchbase = new couchbaseClient(['192.168.1.100:11311'], 'supernote_cache', 'lenote2014');
 *   co(function *(){a=yield couchbase.Get('omsWeb_clients')})();
 *   co(function *(){yield couchbase.SetMulti([{ Key: 'someKey', Value: { some: 'value' } }, { Key: 'ohLawd', Value: 'WOOOOOOOOOPS', Expire: 10 }])})(); //Expire单位为秒
 *   co(function *(){abc=yield couchbase.Set('wap1', 'wap1', null, 30)})();
 *   co(function *(){abc=yield couchbase.Del('test')})();
 */

var cbClient = require('node-couchbase/lib/cbClient');
var mcClient = require('node-couchbase/lib/mcClient');
var thunk = require('thunkify');

mcClient.prototype.Del = function(p_Key, p_Callback, p_vBucketID){
    this.SendRequest(0x04, {
        Key: p_Key,
        vBucketID: p_vBucketID
    }, function(p_Error, p_Data){
        if(p_Callback === undefined || typeof(p_Callback) != 'function') return;
        if(p_Error != 0x0000){ p_Callback(p_Error); return; }
        
        p_Callback(p_Error, p_Data.Value, p_Data.Meta);
    });
};
mcClient.prototype.FilterDelete = function(p_Packet){
    //return {Error: 0, Data: p_Packet.Header.CAS}; //ignore error if data not exists
    return {Error: p_Packet.Header.Status, Data: p_Packet.Header.CAS};
};

cbClient.prototype._Set = cbClient.prototype.Set;
cbClient.prototype.Set = function(p_Key, p_Value, p_Meta, p_Expiration, p_Callback){
    this._Set(p_Key, p_Value, p_Callback, p_Meta, p_Expiration);
};
cbClient.prototype.Del = function(p_Key, p_Callback){
    var s_Self = this;
    this.GetClientForKey(p_Key, function(p_Identifier, p_Client){
        if(p_Client === null){
            p_Callback(0xBEE5);
            return;
        }
        p_Client.Del(p_Key, p_Callback, s_Self.GetvBucketIDForKey(p_Key));
    });
};

var methods = [
    'Get',
    'Set',
    'Del',
    'GetMulti',
    'SetMulti'
];

methods.forEach(function(prop){
    if(!cbClient.hasOwnProperty(prop)){
        cbClient.prototype[prop] = thunk(cbClient.prototype[prop]);
    }
});

module.exports = require('node-couchbase');