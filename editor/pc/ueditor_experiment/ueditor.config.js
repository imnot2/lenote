(function () {    
    var URL = "";
    
    window.UEDITOR_CONFIG = {
        UEDITOR_HOME_URL : URL
        
        ,catchRemoteImageEnable: false
        
        , toolbars:[
                    ['undo','redo','addimage', 'addfile', '|','source',
                     'fontfamily', 'fontsize', 'forecolor', 'backcolor', 'bold', 'italic', 'underline',
                     'justifyleft', 'justifycenter', 'justifyright',
                      'removeformat', 'formatmatch'
                    ]
                ]
       
        ,allowDivTransToP: false
        ,charset:"utf-8"
        ,autoClearEmptyNode : true
        ,focus:false
        ,allHtmlEnabled:false
        ,wordCount: false
        ,tabSize:4
        ,tabNode:'&nbsp;'
        ,elementPathEnabled : false
        ,maxUndoCount:20
        ,maxInputCount:1
        ,autoHeightEnabled:false
        ,serialize: {
           blackList: {script : 1, meta : 1, iframe : 1, embed : 1, object : 1}
        }
    };
})();