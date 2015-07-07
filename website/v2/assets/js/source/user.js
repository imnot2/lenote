/*
 *  author: gejian1@lenovo.com
 *  description: 用户对象
 */
(function(){
   //LPS-统一认证平台配置
   var st = {
       url: 'https://passport.lenovo.com/wauthen/gateway',
       realm: 'supernote.lenovo.com',
       vp: 7200
   };
   
   /*
    * 向LPS发送认证请求
    * params:
    *   action: 指定请求的动作类型，如登录、退出等
    *   ctx: LPS的自定义回传参数，用于回调时识别请求的类型
    *  options: 扩展参数
    */
   var connectST = function(action, ctx, options){
       var isLogin = user.checkLogin();
       if(action == 'login' && action == 'register' && isLogin){
           user.redirect();
           return;
       }else if(action == 'resetpwd' && !isLogin){
           user.redirect('/');
           return;
       }
       
       url_parts = utils.componentizeUrl();
       var cb = url_parts.protocol + '://' + url_parts.domain;
       if(url_parts.port) cb += ':' + url_parts.port;
       var params = {'lenovoid.realm': st.realm, 'lenovoid.cb': cb, 'lenovoid.vp': st.vp};
       user.redirect(st.url + '?' + $.param($.extend(params, {'lenovoid.action': action, 'lenovoid.ctx': ctx},  options || {})));
   };
   
   /*
    * 向NS发送请求
    * params:
    *   url: 请求地址
    *   data: 请求参数
    *   callback: 回调函数
    *   is_valid: 处理请求时指示是否需要验证返回的code和status
    */
   var asynRequest = function(url, data, callback, is_valid, header){
       is_valid = (is_valid === false)? false : true;
       header = header || {};
       $.ajax('/account/' + url, $.extend({
           type: "POST", dataType: "json", cache: false,
           contentType:'application/json; charset=utf-8',
           data:  JSON.stringify(data),
           success: function(respose, status){           		
               var s = is_valid? (status == 'success' && respose.loginStatus != -1 && respose.returnCode == '200') : status;
               callback(s, respose);
           },
           error: function(xhr, msg, eThrow){
               callback(false, msg);
           }
       }, header));
   };
   
   user = {
       import_interval: null,
       user_interval: null,
       
       //检查cookie是否过期
       checkUserStatus: function(){
           if(this.user_interval === null){
               this.user_interval = setInterval(function(){
                   if(!user.getUState('t')){
                       lenoteDom.editor.saved.init();
                       clearInterval(user.user_interval);
                       user.user_interval = null;
                       user.logout();
                   }
               }, 1000 * 60 * 5);
           }
       },
       
       //检查导数据的状态
       importStatus: function(callback, source){
          source = source || 'mk';
          $.ajax('/import/status', {
              type: "POST", dataType: "json", cache: false,
              contentType:'application/json; charset=utf-8',
              headers: {'AuthToken': user.getUState('t'), 'Collect-Data': utils.getCollectData(user.getUState('t'))},
              data:  JSON.stringify({source: source, AuthToken: user.getUState('t')}),
              success: function(respose){callback(respose);},
              error: function(xhr, msg, eThrow){}
          });
       },
       
       importData: function(callback, source){
          source = source || 'mk';
          $.ajax('/import/capture', {
              type: "POST", dataType: "json", cache: false,
              contentType:'application/json; charset=utf-8',
              headers: {'AuthToken': user.getUState('t'), 'Collect-Data': utils.getCollectData(user.getUState('t'))},
              data:  JSON.stringify({source: 'mk', tactics: 'task', AuthToken: user.getUState('t')}),
              success: function(respose){callback(respose);},
              error: function(xhr, msg, eThrow){}
          });
       },
       
       checkImportStatus: function(){
           if(this.import_interval === null){
               this.import_interval = setInterval(function(){
                   user.importStatus(function(respose){
                       if(respose.status === 1) return;
                       clearInterval(user.import_interval);
                       user.import_interval = null;
                       if(respose.status === 2){
                           $.smartDoing({action: 'del', text: '数据导入成功', hold: true});
                       }else{
                           $.smartDoing({action: 'del', text: '数据导入失败，点击<a href="/migrate/mk.html" target="_blank"> 这里 </a>重新导入', statusClass: 'error', hold: true, delay: 5000});
                       }
                   });
               }, 10000);
           }
       },
       
       //获取当前登录用户的相关状态信息
       getUState: function(key){
           var ustate = $.getCookie('UState', true);
           if(ustate && (typeof ustate == 'object')){
               try{
                   return ustate[key];
               }catch(error){
                   return false;
               }
           }else{
               return false;
           }
       },
       
       //clean登录用户的状态信息
       cleanUState: function(isRedir, callback){
          $.removeCookie('UState', {path: '/'});
          $.removeCookie('token', {path: '/'});
          if(typeof callback == 'function'){
              callback();
              if(isRedir){
                  setTimeout(function(){user.redirect('/');}, 800);
              }
          }else if(isRedir){
              this.redirect('/');
          }
       },
       
       /*
        * 检查是否已登录
        * params:
        *   isValid 如果为true将通过向后台发送请求来确认已登录，否则只会检查用户的状态信息来确认是否登录
        *   callback 当isValid为true时的回调函数
        */
       checkLogin: function(isValid, callback){
          if(this.getUState('t')){
              if(isValid){
                  this.getUserInfo(callback);
              }
              return true;
          }
          return false;
       },
       
       /*
        *  获取用户的详细信息
        *  params:
        *     callback  如果传递了回调函数，将在获取用户详情成功后调用该函数
        */
       getUserInfo: function(callback){
          var t = this.getUState('t');
          if(!t){
              if(typeof callback == 'function'){
                  callback(false, 'LenoteToken Not Found');
              }
              return false;
          }
          
          asynRequest('user/info', {}, function(status, respose){
              var isOk = status == 'success' && respose.returnCode == '200';
              if(typeof callback == 'function'){
                  callback(isOk, respose);
              }
          }, false, {headers: {'AuthToken': user.getUState('t'), 'Collect-Data': utils.getCollectData(user.getUState('t'))}});
       },
       
       //url跳转
       redirect: function(url){
          utils.redirect(url? url : '/notes');
       },
       
       //处理从LPS返回后的回调
       resolveST: function(){
           var params = utils.parseQueryParams();
           if(!params['lenovoid.ctx']) params['lenovoid.ctx'] = 'login'; //解决异常情况下，ctx为空时无法登录的问题
           if(params['lenovoid.action'] && params['lenovoid.ctx'] && params['lenovoid.realm']){
               var ctx = $.trim((typeof decodeURIComponent == 'function')? decodeURIComponent(params['lenovoid.ctx']) : params['lenovoid.ctx']),
                    _ctx = ctx.split('|');
               ctx = _ctx[0];
               var feedback = _ctx[1] || '';
               if(feedback && typeof encodeURI == 'function') feedback = encodeURI(feedback);
               
               if(ctx == 'login' || ctx == 'register'){
                   if(this.checkLogin()){
                       this.redirect(feedback);
                   }else{
                       $.lebox.notify('正在登录，请稍候...');
                       asynRequest('auth/login', {LenovoToken:params['lenovoid.wust'], realm:params['lenovoid.realm'], skipCloud: true}, function(status, respose){
                           if(status){
                               $.setCookie('UState', {
                                  aid: respose.lenovoAccountID, t: respose.leNoteToken,
                                  rcid: respose.rootCategoryID, wust: params['lenovoid.wust'],
                                  on: respose.openAuthName, un: respose.userName,
                                  uid: respose.uid
                               }, true);
                               $.setCookie('token', respose.leNoteToken);
                               user.redirect(feedback);
                           }else{
                               $.lebox.error('登录失败，请刷新后重试！', 800);
                               if(typeof window.listenPageEvent == 'function') window.listenPageEvent();
                           }
                       }, false, {headers: {'Collect-Data': utils.getCollectData()}});
                   }
                   return false;
               }else if(ctx == 'resetpwd'){
                   $.lebox.success('密码已修改！', 800);
               }else{
                   $.lebox.notify('正在退出，请稍候...');
                   //this.redirect('/');
                   setTimeout(function(){user.redirect('/');}, 400);
               }
           }
           return true;
       },
       
       //注册
       register: function(){
           connectST('newaccount', 'register');
       },
       
       //登录
       login: function(feedback){
           var ctx = 'login';
           if(feedback){
               ctx += '|' + feedback; 
               ctx = (typeof encodeURIComponent == 'function')? encodeURIComponent(ctx) : ctx;
           }
           connectST('uilogin', ctx);
       },
       
       //重置密码
       resetpwd: function(){
           connectST('resetpassword', 'resetpwd');
       },
       
       /*
        * 退出
        */
       logout: function(){
           var t = this.getUState('t');
           //if(!t) return;
           asynRequest('auth/logout', {}, function(status, respose){
               user.cleanUState();
               connectST('uilogout', 'logout');
           }, true, {headers: {accountToken: t, 'Collect-Data': utils.getCollectData(t)}});
       }
   };
}());