module.exports = function(root){
    var koa = require('koa'),
        app = koa(),
        _ = require('underscore'),
        log4js = require('koa-log4js'),
        mysqlClient = require('mysql-co'),
        couchbaseClient = require('./k/lib/couchbase-co'),
        gzip = require('koa-gzip');
        
    app.poweredBy = false;
    app.proxy = true;
    
    /*
     * 全局自定义变量
     * C全局静态配置
     * M全局外部模块调用
     * F全局辅助函数
     * D全局数据模型
     */
    global.C = {};
    global.M = {};
    global.F = {};
    
    //公共配置
    C.root = root;
    C.config = require(C.root + '/config/config.' + app.env)(C.root);
    
    //公共函数, 合并至underscore
    var fns = require('./k/functions/import')();
    F = _;
    F.extend(F, fns);
    
    //模型
    D = require(C.root + '/model/' + 'db');
    
    //公共模块
    //--Mysql
    //function connectMysql(){
    //    var config = C.config.mariadb,
    //        mysql = mysqlClient.createConnection({
    //            host: config.host, port: config.port, user: config.user, connectTimeout: 20,
    //            password: config.password, database: config.database
    //        }).on('error', function(error){
    //            try{
    //                M.mysql.end(function(){
    //                    console.warn('Mysql connnect closed.');
    //                });
    //            }catch(e){}
    //            console.error('An error occured width Mysql:', error);
    //            console.warn('Re-connecting lost connection with Mysql: ');
    //            //if(error.code === 'PROTOCOL_CONNECTION_LOST') connectMysql();
    //            setTimeout(connectMysql, 100);
    //        }).once('connect', function(){
    //            console.info('Connected Mysql is ok.');
    //        });
    //    M.mysql = mysql;
    //}
    function connectMysql(){
        var config = C.config.mariadb;
        //    mysql = mysqlClient.createPool({ //https://github.com/felixge/node-mysql
        //        host: config.host, port: config.port, user: config.user, connectTimeout: 20,
        //        password: config.password, database: config.database,
        //        connectionLimit: 80, waitForConnections: true, queueLimit: 0
        //    }).on('error', function(error){
        //        console.error('An error occured width MysqlPool:', error);
        //        //if(error.code === 'ECONNREFUSED') connectMysql();
        //        console.warn('Re-connecting lost connection with MysqlPool: ');
        //        setTimeout(connectMysql, 100);
        //    }).once('connection', function(){
        //        console.info('Connected MysqlPool is ok.');
        //    });
        
        var mysql = mysqlClient.simplePool({
            host: config.host, port: config.port, user: config.user, connectTimeout: 20,
            password: config.password, database: config.database,
            connectionLimit: 80, waitForConnections: true, queueLimit: 0
        });
        M.mysql = mysql;
    }
    connectMysql();
    
    //--Couchbase
    function connectCouchbase(){
        var config = C.config.couchbase,
            couchbase = new couchbaseClient(
                [config.host], config.user, config.password
            ).on('connected', function(){
                console.log('Connected and authenticated couchbase...ok');
                //this.Get('test', function(p_Error, p_Data, p_Meta){console.info(p_Data)});
            }).on('error', function(p_Error){
                console.error('An error occured width couchbase:', p_Error);
                console.warn('Re-connecting Couchbase: ');
                setTimeout(connectCouchbase, 100);
            });
            
        M.couchbase = couchbase;
    }
    connectCouchbase();
    
    app.name = 'n.lenovo.com\'s wap site';
    app.keys = ['keys', C.config.secret]; //encryption cookie, only this.cookies.set('name', 'tobi', { signed: true });
    
    //日志记录
    var _log4js = log4js({file: C.root + '/log/access.log'});
    _log4js._name = 'log4js';
    app.use(_log4js);
    
    app.use(gzip());
    
    require('./k/dispatch')(app);
    
    app.listen(C.port = process.env.PORT || C.config.port || 3000);
    console.info('listening on port ' + C.port);
    
    app.on('error', function(err, ctx){
        if(_.lastIndexOf(['test', 'production'], this.env) !== -1){
            console.error('WAP Internal Server Error: ', err, ctx);
        }else{
            console.error('WAP Internal Server Error: ', err);
        }
        
        try{
            ctx.redirect(C.config.host + 'html/500.html');
        }catch(e){}
    });
    
    return app;
};