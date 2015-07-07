var request = require('request'),
    _ = require('underscore'),
    config = {
        secret: '9eb4ee1e614eb2aad4323a82b59314fd'
    },
    params = {
        from: 'web-gt',
        //  http://hao.lenovo.com/new/
        //  http://hao123.com
        //  http://m.hao123.com/
        //  http://hao.lenovo.com/
        //  http://tieba.baidu.com/p/3188323352
        //  http://www.28.com/
        //  http://www.iteye.com/news/29195
        url: 'http://hao.lenovo.com/new/'
    };
    
_.extend(_, require(__dirname + '/../knode/k/functions/import')());

var args = process.argv.splice(2);
if(args.shift() === 'production'){
    _.extend(config, {url: 'http://n.lenovo.com/m/collect'});
    _.extend(params, {token: 'b01a95bb-badd-4104-ac1c-e146def775fca518185a-3803-4576-abb7-8f45'});
}else{
    _.extend(config, {url: 'http://demo2.lenote.com/m/collect'});
    _.extend(params, {token: '4f0b5119-8b81-4c64-9ce3-45fbb83474fa6e7fbc78-d293-424b-b484-4d99'});
}

var _params = 'from=' + params.from + '&token=' + params.token + '&url=' + params.url,
    m = _.encrypt.md5(_params + config.secret),
    s1 = m.split(''),
    s2 = config.secret.split(''),
    sign = '';

_.each(s1, function(c, i){sign += i % 2 == 0? s2[i] : c});

request(config.url, {
    method: 'POST',
    encoding: 'utf8',
    timeout: 10000,
    body: JSON.stringify(_.extend({sign: sign}, params)),
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
}, function(error, response, body){
    if(!error && response.statusCode == 200){
        try{
            var body = JSON.parse(body);
            console.info(body);
        }catch(e){}
    }else{
        console.error(error);
    }
});