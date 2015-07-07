/*
 *  author: gejian1@lenovo.com
 *  description: 帮助开发的js，用于批量加载js文件，在正式环境中会由发布脚本合并压缩这些js
 */
(function(){
    var paths = [
      'source/lib/jquery.js', 'source/lib/jquery.cookie.js', 'source/lib/jquery.lenote.js', 'source/config.js', 'source/utils.js',
      'parser/parser.js', 'parser/swfobject.js', 'source/analyze.js', 'source/user.js', 'source/lenote.js', 'source/tag.js', 'source/share.js'
    ];
    var baseURL = '/assets/js/';
    for(var i=0,file; file = paths[i++];){
        document.write('<script type="text/javascript" src="'+ baseURL + file +'?v=1.1.0"></script>');
    }
})();