define(['backbone', 'model/user'], function(Backbone, user){
    return Backbone.View.extend({
        el: 'body',
        initialize: function(){
            this.user = new user;
        },
        events: {
            'click .close': 'closeClient',
            'click .login': 'login',
            'click .register': 'register',
            'click .logout': 'logout',
            'click .resetpwd': 'resetpwd',
            'click .openup': 'openup'
        },
        login: function(e){
            var ctx = 'login';
            this.user.connectST('uilogin', ctx);
        },
        register: function(e){
            this.user.connectST('newaccount', 'register');
        },
        resetpwd: function(e){
            this.user.connectST('resetpassword', 'resetpwd');
        },
        logout: function(e){
            this.user.logout();
        },
        openup: function(e){
            window.location.href = 'notes#list';
        },
        validLogin: function(){
            this.user.resolveST(this);
        },
        closeClient: function(e){
            e.preventDefault();
            this.$('#footer').addClass('hide');
        }
    });
});