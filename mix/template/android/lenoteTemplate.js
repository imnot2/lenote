(function(){
    var files = ['hammer.js', 'utils.js', 'core.js'],
        baseURL = '../../js/';
    for(var i = 0, file; file = files[i++];) document.write('<script type="text/javascript" src="'+ baseURL + file +'?v=0.0.1"></script>');
})();