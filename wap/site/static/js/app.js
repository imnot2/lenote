define(['backbone', 'router'], function(Backbone, Router){
    var app = {
        checkHash: function(r){
            if(/\/m\/#/.test(location.href)){
                r.navigate('', {trigger: true, replace: true});
                return false;
            }
            return true;
        },
        
        start: function(){
            Router.on('route:index', function(){
                require(['domReady!', 'view/home'], function(doc, view){
                    var view = new view;
                    view.validLogin();
                });
            }).on('route:list', function(){
                var r = this;
                require(['domReady!', 'view/list'], function(doc, view){
                    if(app.checkHash(r)){
                        var view = new view;
                    }
                });
            }).on('route:create', function(){
                var r = this;
                require(['domReady!', 'view/create'], function(doc, view){
                    if(app.checkHash(r)){
                        var view = new view;
                    }
                });
            }).on('route:show', function(id){
                var r = this;
                require(['domReady!', 'view/show'], function(doc, view){
                    if(app.checkHash(r)){
                        var view = new view({noteID: id});
                    }
                });
            });
            
            Backbone.history.start();
        }
    };
    
    _.extend(app, Backbone.Events);
    
    return app;
});