var views = require('koa-views'),
    staticCache = require('koa-static-cache'),
    path = require('path'),
    logger = require('koa-logger'),
    fs = require('co-fs'),
    csrf = require('koa-csrf'),
    sess = require('koa-sess'),
    sessionStore = require('./lib/couchbase-session-store'),
    flash = require('koa-flash'),
    limit = require('koa-limit'),
    limitStore = require('./lib/couchbase-limit-store'),
    etag = require('koa-etag'),
    conditional = require('koa-conditional-get'),
    coBody = require('co-body'),
    useragent = require('useragent');
    
//如果是静态文件则不打印日志
function ignoreAssets(mw){
    return function *(next){
        if(/(\.js|\.css|\.ico|\.jpg|\.png|\.gif)$/.test(this.path)){
          yield next;
        }else{
          yield mw.call(this, next);
        }
    }
}

function before_dispatch(app){
    if(global.F.lastIndexOf(['test', 'development'], app.env) !== -1){
        //统计response耗时
        app.use(function *_xResponseTime(next){
            var start = new Date;
            yield next;
            var ms = new Date - start;
            this.set('X-Response-Time', ms + 'ms');
            console.log('Time Consuming: %s %s %s - %sms', this.host, this.method, this.url, ms);
        });
        
        //添加输出日志
        app.use(logger());
    }else{
        app.use(ignoreAssets(logger()));
    }
    
    //捕获下级生成器的异常
    app.use(function *_captureException(next){
        try{
            yield next;
        }catch(err){
            this.status = err.status || 500;
            this.app.emit('error', err, this);
        }
    });
    
    //防ddos
    app.use(limit({
        interval: 1000 * 60 * 60 * 3, //3小时, 单位ms
        //whiteList: ['127.0.0.1'],
        //blackList: [],
        token: C.config.couchbase.prefix + 'limit',
        limit: 1800, //相当于6s/次
        message: '(429)Too Many Requests.',
        store: new limitStore(M.couchbase)
    }));
    
    //处理IP
    app.use(function *(next){
        this._ip = this.ip || ''; //this.request.ip
        if(this._ip){
            var _ip = this._ip.match(/\d+\.\d+\.\d+\.\d+$/);
            this._ip = _ip? _ip.shift() : '';
        }
        yield next;
    });
}

function dispatch(app){
    before_dispatch(app);
    
    app.use(function *(next){
        if(this.path != '/collect'){
            yield *next;
        }else{
            var clipper = new (D('clipper'))(yield coBody.json(this), this._ip, useragent.parse(this.req.headers['user-agent']));
            this.body = yield clipper.run();
            this.status = clipper.status || 403;
        }
    });
    
    if('production' === app.env){
        app.use(function *(next){
            yield *next;
            //this.set('X-Powered-By', global.C.config.domain);
            //删除ddos的头
            this.remove('X-RateLimit-Limit');
            this.remove('X-RateLimit-Remaining');
            this.remove('X-RateLimit-Reset');
            this.remove('Retry-After');
        });
    }
    
    //静态文件缓存, better koa-static
    app.use(staticCache(path.join(global.C.root, 'static'), {
        maxAge: global.C.config.maxAge,
        gzip: true,
        buffer: true
        //prefix: '/static' //hidden static in path, it. /html/404.html not. /static/html/404.html
    }));
    
    app.use(function *_favicon(next){
        //非favicon直接跳过
        if('/favicon.ico' != this.path) return yield next;
        //头部定义防止404
        if('GET' !== this.method && 'HEAD' !== this.method){
            this.status = 'OPTIONS' == this.method ? 200 : 405;
            this.set('Allow', 'GET, HEAD, OPTIONS');
            return;
        }
        //读取配置文件是否存在favicon
        var path = global.C.config.favicon || global.C.root + '/static/images/favicon.ico',
            icon = yield fs.readFile(path);
        this.set('Cache-Control', 'public, max-age=' + (global.C.config.maxAge / 1000 | 0));
        this.type = 'image/x-icon';
        this.body = icon;
    });
    
    app.use(sess({
        store: new sessionStore(M.couchbase),
        cookie: { //https://github.com/expressjs/cookies#cookiesset-name--value---options--
            maxage: C.config.maxAge * 1000, //ms
            signed: true
        },
        key: 'sess.sid',
        //defer: true,
        //ttl: C.config.maxAge * 1000,
        prefix: C.config.couchbase.prefix + 'sess:'
    }));
    
    //验证浏览器类型
    app.use(function *_browserDetect(next){
        var md = new global.F.detect(this.req.headers['user-agent']),
            from = (this.query['from'] || this.session.from || '').trim();
        
        if(from) this.session.from = from;
        this.browserDetect = {os: (md.os() || '').toLowerCase(), isTablet: !!md.tablet(), isMobile: !!md.mobile()};
        //轻应用不需要检测客户端设备类型
        if(F.lastIndexOf(['siteapp'], from) === -1 && !/^\/store\/?/i.test(this.path) && F.lastIndexOf(['test', 'production'], this.app.env) !== -1){
            if(!this.browserDetect.isMobile){ //include phone and tablet
                this.redirect(C.config.domain);
                return;
            }
        }
        yield next;
    });
    
    //即时消息
    app.use(flash({key: 'flash'}));
    
    //csrf
    csrf(app);
    app.use(csrf.middleware);
    
    //添加缓存
    app.use(conditional());
    app.use(etag());
    
    //检查是否需要登录
    app.use(function *(next){
        if(!this.session.user && /^\/(notes?|logout)\/?/i.test(this.path)){
            this.flash = {warn: '请先登录'};
            this.session.forward = this.path;
            this.redirect(C.config.host);
        }else{
            this.cookies.expires = new Date(Date.now() + C.config.maxAge * 1000);
            yield *next;
        }
    });
    
    //查询客户端下载信息
    app.use(function *queryClient(next){
        try{
            var clients = yield D('getClients')(C.config.couchbase), client;
            switch(this.browserDetect.os){
                case 'androidos': client = clients['android'];break; //Todo: isTablet
                case 'blackberryos': client = clients['blackberry'];break;
                case 'palmos': client = clients['palm'];break;
                case 'symbianos': client = clients['symbian'];break;
                case 'windowsmobileos':
                case 'windowsphoneos': client = clients['windowsphone'];break;
                case 'ios': client = clients['iphone'];break;
                case 'meegoos': client = clients['meego'];break;
                case 'webos': client = clients['webos'];break;
                default:
                    if(this.browserDetect.isMobile)
                        client = null;
                    else
                        client = clients['windows'];
            }
            
            this.client = client;
            
            yield next;
        }catch(err){
            this.status = err.status || 500;
            this.app.emit('error', err, this);
        }
    });
    
    //加载视图
    app.use(views(C.config.view, {
        //default: 'jade',
        //cache: true,
        map: {html: 'jade', md: 'underscore'}
    }));
    
    //加载路由
    require('./router')(app);
}

module.exports = dispatch;