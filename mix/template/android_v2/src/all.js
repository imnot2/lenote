(function(){
    var files = ['lib/hammer.js',
                 'lib/sprintf.js',
                 'lib/xss.js',
                 'lenote.js',
                 'helper.js',
                 'i18n.js',
                 'template/i18n/zh-cn.js',
                 'template/i18n/en-us.js',
                 'template.js',
                 'transform.js',
                 'template/helper.js',
                 'template/client.js',
                 'template/layout.js',
                 'template/controls.js',
                 'template/api.js',
                 'template/controls/audio.js',
                 'template/controls/contacts.js',
                 'template/controls/date.js',
                 'template/controls/image.js',
                 'template/controls/mood.js',
                 'template/controls/place.js',
                 'template/controls/text.js',
                 'template/controls/time.js',
                 'template/controls/weather.js'],
        baseURL = '../../assets/js/';
    /*jslint evil: true, boss: true */
    for(var i = 0, file; file = files[i++];) document.write('<script type="text/javascript" src="'+ baseURL + file +'?v=0.0.1"></script>');
})();