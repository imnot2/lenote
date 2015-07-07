define(['backbone'], function(Backbone){
    var router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'list': 'list',
            'search': 'search',
            'new': 'create',
            '~/:id': 'show'
        }
    });
    
    return new router;
});