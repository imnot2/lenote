(function () {    
    var URL= "/assets/js/ueditor/";
    
    window.UEDITOR_CONFIG = {
        UEDITOR_HOME_URL : URL
        
        ,imageUrl: '/uploads/'
        ,fileUrl: '/uploads/'
        ,iframeCssUrl: '/assets/css/lib/editor_expand.css'
        ,catchRemoteImageEnable: false
        
        , toolbars:[
            ['undo', 'redo', 'insertimage', 'attachment', '|',
             'fontfamily', 'fontsize', 'forecolor', 'backcolor', 'bold', 'italic', 'underline',
             'justifyleft', 'justifycenter', 'justifyright',
             'insertunorderedlist', 'insertorderedlist',
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
        ,autotypeset:{
            mergeEmptyline : true,
            removeEmptyline : true,
            removeEmptyNode : true,
            removeTagNames : {script: 1, link: 1, html: 1, header: 1, body: 1, meta: 1, style: 1}
        }
    };
})();