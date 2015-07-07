1. 启动
   development：node --harmony app.js 或 supervisor --harmony app.js
   test: NODE_ENV=test supervisor --harmony app.js
   production：NODE_ENV=production supervisor --harmony app.js

2. 调试
   * node-inspector & && DEBUG=koa* supervisor --harmony --debug app.js
   * DEBUG=koa* node --harmony debug app.js并且在代码中添加debugger;

3. 测试
   * ab压力测试
     检查mysql的连接数: show full processlist; 或 select * from information_schema.processlist where user='oms' and state is not null and db='lnoms'; 刷新连接数: mysqladmin flush-hosts -h192.168.10.45 -P3316 -uoms -plenote2013

开发环境配置
    1.需要node.js 0.11.13版本
    2.安装Visual Studio 2010 Express，下载地址http://www.visualstudio.com/zh-cn/downloads/download-visual-studio-vs#DownloadFamilies_4
    3.安装python、Ruby、koala
    4.gem install sass compass
    5.npm -g install supervisor
   
生产环境部署
    node安装
        wget http://nodejs.org/dist/v0.11.13/node-v0.11.13.tar.gz
        tar -xzvf node-v0.11.13.tar.gz
        ./configure
        make && make install
        如果系统的python版本过低，需要安装python
            https://www.python.org/ftp/python/2.7.8/Python-2.7.8.tgz
            mv /usr/bin/python  /usr/bin/python2.4
            ln /usr/local/bin/python2.7 /usr/bin/python
            编辑/usr/bin/yum，将/usr/bin/python改为/usr/bin/python2.4
        安装git: 
             wget https://www.kernel.org/pub/software/scm/git/git-2.0.1.tar.gz
             ln -s /usr/local/bin/git /usr/bin/git
    安装依赖
        npm install pm2 -g
        cd projectDir/src && npm install
    启动
        pm2 startup centos / pm2 save
        NODE_ENV=test pm2 start /usr/local/nginx/html/wap/app.js -i max --node-args="--harmony"
        NODE_ENV=production pm2 start /data/website/wap/app.js -i max --node-args="--harmony"
        /etc/init.d/pm2-init.sh stop|start|restart / pm2 flush / pm2 logs
        测试: NODE_ENV=production nohup /usr/local/bin/node --harmony app.js&
    
记录
   * 添加web/wap公告及消息通知的表，用于控制是否显示消息通知，及网站的状态：维护还是其它。
     字段有:start_time(Y-m-d 00:00:00)、end_time(Y-m-d 23:59:59)、status、content、client(wap+web、web、wap)、createBy(创建者),updateBy(最后更新者) 等
     oms修改这个表时需要更新couchbase的omsWeb_message缓存
   * oms修改下载链接时需要更新couchbase的omsWeb_clients缓存
   * wap单独部署在cache-03上，因为pm2/forever不能指定运行的node.js，所以与web2的node.js分开
   * grunt打包时先压缩图片，然后使用compass+inline-image+gzip处理图片减少请求
   * note页cookie不设置通过手段将user相关的值都设置到user.js这个model中去
   * 笔记列表与笔记详情切换时添加页面转场效果
TODO
   1.不支持图片/附件显示
   2.浏览器后退定制
   3.grunt打包并压缩图片、添加版本号
   4.编辑界面键盘弹出后不能拖到底，参考m.baidu.com如何解决的、wap.soso.com/soso.com解决首页自适应问题-编辑/首页/创建使用整页滑动避免部分滑动导致的问题