require.config({
    //baseUrl: 'js/lib',
    paths: {
        'jquery': 'lib/zepto',
	    'xss': 'lib/xss',
        'cookie': 'lib/zepto.cookie',
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'domReady': 'lib/domReady',
        'gmu': 'lib/gmu/gmu',
        'dateformat': 'lib/dateformat',
        'iscroll': 'lib/iscroll'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery', 'xss', 'cookie'],
            exports: 'Backbone'
        },
        underscore: {
             exports: '_'
        },
        jquery: {
            exports: '$'
        },
        cookie: {
            deps: ['jquery'],
            exports: '$.cookie'
        },
        gmu: {
            deps: ['jquery', 'dateformat', 'iscroll'],
            exports: 'gmu'
        },
        dateformat: {
            exports: 'dateFormat'
        }
    }
});

require(['app'], function(App){
    App.start();
});