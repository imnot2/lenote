function *exec(cache_config){
    try{
        var cb = M.couchbase, cache = null, key = cache_config['prefix'] + 'clients';
        
        try{
            cache = yield cb.Get(key);
            if(cache && cache.length > 1){
                cache = JSON.parse(new Buffer(cache.shift(), 'base64').toString());
            }else{
                cache = null;
            }
        }catch(e){}
        
        if(F.isObject(cache) && !F.isEmpty(cache)) return cache;
        
        var db = M.mysql,
            sql = 'select c.id, ct.name, ct.summary, c.link, c.version, c.sizeof, c.publish_time, c.summary as `desc` from client c ' +
                  ' inner join `client_type` ct on c.tid = ct.id where exists(select 1 from client b where b.status=1 and ' +
                  ' unix_timestamp(b.`publish_time`) * 1000 <= ' + F.date.getDayEnd() + ' group by b.tid having max(b.publish_time)=c.publish_time)',
            clients = {},
            result = yield db.query(sql);
        
        result && result.length > 1 && result[0].forEach(function(o){
            clients[o['name']] = o;
        });
        
        if(!F.isEmpty(clients)){
            //fix chinese garbled when save into couchbase
            var _clients = new Buffer(JSON.stringify(clients)).toString('base64');
            yield cb.Set(key, _clients, null, cache_config['maxAge']);
        }
        
        return clients;
    }catch(e){
        throw new Error(e.message);
    }
}

module.exports = exec;