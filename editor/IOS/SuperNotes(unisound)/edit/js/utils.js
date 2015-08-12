//工具类
(function (le) {
    le.utils = {
        //设置节点属性
        setAttrs: function (node, attrs) {
            for (var i in attrs) {
                node.setAttribute(i, attrs[i]);
            }
        },
        parseJSON: function (str) {
            return JSON.parse(str);
        },
        parseString: function (json) {
            return JSON.stringify(json);
        },
        isString: function (str) {
            return typeof (str) === 'string';
        },

        //获取节点样式
        getStyle: function (node, style) {
            return getComputedStyle(node, false)[style];
        },

        //判断节点是否在选区里。
        inSelection: function (node) {
            var rng = le.controls.getRange(),
                frag = rng.cloneContents();
            return frag.querySelector('[key="' + node.getAttribute("key") + '"]');
        },

        //节流 禁止事件重复频繁执行。
        throttle: function (method, context) {
            clearTimeout(method.tId);
            method.tId = setTimeout(function () {
                method.call(context);
            }, 100);
        },

        //获取偏移值。node是节点，way为 top || bottom || left || right ...
        getOffset: function (node, way) {
            var way = 'offset' + way,
                res = node[way];
            while (node = node.offsetParent) {
                res += node[way];
            }
            return res;
        },

        //合并对象。
        extend: function () {
            var target = arguments[0],
                n = 1,
                source;
            if (arguments.length === 1) {
                target = this;
                n = 0;
            }
            while (source = arguments[n++]) {
                for (var prop in source) target[prop] = source[prop];
            }
            return target;
        },

        //xss过滤
        filterXSS: function (html) {
            return filterXSS(html, {
                allowCommentTag: false,
                whiteList: this.extend(filterXSS.whiteList, {
                    'ln-photo': ['key', '_data'],
                    'ln-attachment': ['key'],
                    'ln-audio': ['key'],
                    'ln-text': ['key', '_data'],
                    'ln-video': ['key']
                }),
                onIgnoreTagAttr: function (tag, name, value, isWhiteAttr) {
                    if (name === 'style') {
                        value = filterXSS.safeAttrValue(tag, name, value);
                        return value ? name + '="' + value + '"' : name;
                    }
                }
            });
        }
    }
})(editor);