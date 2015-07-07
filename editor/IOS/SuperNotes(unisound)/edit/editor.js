(function(){
    var paths = [
        'script/hammer.min.js',
        'script/xss.js',
        'js/editor.js',
        'js/init.js',
        'js/api.js',
        'js/cmd.js',
        'js/controls.js',
        'js/extendevent.js',
        'js/listener.js',
        'js/utils.js',
        'script/I18N.js'
    ];
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ pi +'"></script>');
    }
})()