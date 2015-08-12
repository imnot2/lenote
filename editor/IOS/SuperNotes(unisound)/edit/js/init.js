(function (le) {
    le.init = function (editorid, createtimeid) {
        le.doc = document;
        le.options = {
            'id': editorid,
            'node': le.doc.querySelector('#' + editorid),
            'timenode': le.doc.querySelector('#' + createtimeid), //创建时间节点
            'json': {}, //客户端在setContent时传进来的资源字典
            'keys': {}, //当前笔记存在的资源
            'newkeys': [], //当前笔记新添加的资源
            'bookmark': null, //书签
            'textNodes': {}, //文本资源节点，用于保存笔记时，客户端更新文本修改后的内容。
            'top': 0, //编辑器距离webview顶部的距离。
            'width': 210, //编辑器默认宽度
            'lineheight': 0, //用于判断光标是否处于可视区里。以便输入文字自动换行时实时检测并滚动到光标处。
            'indentcount': 3, //允许缩进的次数。
            'keyBoradIsShow': false,
            'language': 'zh-cn', //语言
            'isdefault': false, //是否为默认笔记
            'isNew': true, //是否为新建笔记
            'isLoaded': false, //笔记是否加载成功，客户端根据此参数来判断是否需要更新笔记。
            mrgalign: function () {
                // 用于获取编辑器左内边距用于调整图片宽度。
                return parseInt(getComputedStyle(this.node, false)["padding-left"]);
            },
            // cmds数组,及时更新数组中命令的状态，便于客户端同学操作对应按钮的ui展现，是高亮还是变灰
            'cmds': ['Bold', 'Italic', 'Underline', 'InsertOrderedList', 'InsertUnorderedList', /*'Outdent','Indent',*/ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'Undo', 'Redo' /*,'FontSize'*/ ]
        };
    }
})(editor);