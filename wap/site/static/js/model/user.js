define(['backbone', 'helper'], function(Backbone, Helper){
    return Backbone.Model.extend({
        defaults: {
            st: {
                url: 'https://passport.lenovo.com/wauthen/gateway',
                realm: 'supernote.lenovo.com',
                display: 'small',
                vp: 7200
            }
        },
        
        initialize: function(checkCookie){
            if(checkCookie === true){
                var id = $.fn.cookie('token');
                if(id) this.id = id;
            }
        },
        
        connectST: function(action, ctx, options){
            var url_parts = Helper.componentizeUrl();
            var cb = url_parts.protocol + '://' + url_parts.domain;
            if(url_parts.port) cb += ':' + url_parts.port;
            cb += '/m/';
            
            var params = {
                'lenovoid.realm': this.get('st').realm, 'lenovoid.cb': cb,
                'lenovoid.vp': this.get('st').vp, 'lenovoid.display': this.get('st').display
            };
            Helper.redirect(this.get('st').url + '?' + $.param(
                $.extend(params, {
                    'lenovoid.action': action, 'lenovoid.ctx': ctx},  options || {}
                )
            ));
        },
        
        cleanUState: function(){
            $.fn.cookie('token', '', {expires: -1, path: '/'});
            $.fn.cookie('UState', '', {expires: -1, path: '/'});
            this.id = null;
        },
        
        resolveST: function(view){
            var params = Helper.parseQueryParams();
            if(!params['lenovoid.ctx']) params['lenovoid.ctx'] = 'login'; //解决异常情况下，ctx为空时无法登录的问题
            if(params['lenovoid.action'] && params['lenovoid.ctx'] && params['lenovoid.realm']){
                var ctx = $.trim((typeof decodeURIComponent == 'function')? decodeURIComponent(params['lenovoid.ctx']) : params['lenovoid.ctx']),
                    _ctx = ctx.split('|');
                ctx = _ctx[0];
                var feedback = _ctx[1] || '';
                if(feedback && typeof encodeURI == 'function') feedback = encodeURI(feedback);
                
                if(ctx == 'login' || ctx == 'register'){
                    if(this.id && feedback){
                        Helper.redirect(feedback);
                    }else if(!this.id){
                        Helper.notify.show();
                        Helper.asynRequest(
                            '/account/auth/login',
                            {LenovoToken:params['lenovoid.wust'], realm:params['lenovoid.realm'], skipCloud: true}, function(status, respose){
                                if(status && respose.loginStatus != -1){
                                    Helper.asynRequest(
                                        'login',
                                        $.extend({wust: params['lenovoid.wust']}, respose),
                                        function(status, respose){
                                            if(status){
                                                $.fn.cookie('token', respose.cookie.t, {expires: 7, path: '/'});
                                                $.fn.cookie('UState', JSON.stringify(respose.cookie), {expires: 7, path: '/'});
                                                this.id = respose.cookie.t;
                                                Helper.redirect(respose.feedback || 'notes#list');
                                            }
                                        },
                                        {headers: {'x-csrf-token': $('#csrf').val()}}
                                    );
                                }else{
                                    
                                }
                            }, {headers: {'Collect-Data': Helper.getCollectData()}}
                        );
                    }
                }else if(ctx == 'resetpwd'){
                    
                }else{
                    Helper.notify.show('正在清理痕迹...');
                    if(window.history.pushState) window.history.pushState({}, 0, location.protocol + '//' + location.host + location.pathname);
                    setTimeout(function(){
                        Helper.notify.close();
                    }, 400);
                }
            }
        },
        
        logout: function(title, message){
            var _this = this;
            Helper.notify.show(title || '安全退出...', message);
            Helper.asynRequest(
                '/account/auth/logout', {}, function(status, respose){
                    Helper.asynRequest(
                        'logout', {}, function(status, respose){
                            _this.cleanUState();
                            _this.connectST('uilogout', 'logout');
                        },
                        {headers: {'x-csrf-token': $('#csrf').val()}},
                        'GET'
                    );
                }, {headers: {AuthToken: this.id, 'Collect-Data': Helper.getCollectData(this.id)}}
            );
        }
    });
});