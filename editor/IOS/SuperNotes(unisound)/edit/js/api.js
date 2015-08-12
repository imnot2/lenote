(function (le) {
    le.api = {
        setHeight: function (val) {
            le.options.height = val;
            le.options.node.style.cssText += "min-height:" + val + "px";
        },

        //调整编辑框距离webview顶部的高度，needscroll参数为是否动画调整。
        adjustTop: function (val, needScroll) {
            le.options.top = val;
            if (!needScroll) {
                le.options.node.style['margin-top'] = val + 'px';
                return;
            }

            function tween(pos) {
                return Math.pow(pos, 2);
                //return Math.sqrt(1 - Math.pow((pos-1), 2))
            }
            var begin = le.options.node.offsetTop,
                duration = 300,
                startTime = new Date().getTime(),
                timer = setInterval(function () {
                    var newTime = new Date().getTime(),
                        timestamp = newTime - startTime,
                        delta = tween(timestamp / duration),
                        //delta = timestamp / duration,
                        res = delta * (val - begin);
                    if (duration <= timestamp) {
                        le.options.node.style['margin-top'] = val + 'px';
                        clearInterval(timer);
                    }
                    else {
                        le.options.node.style['margin-top'] = Math.ceil(begin + res) + "px";
                    }
                }, 10)
        },
        getSummary: function (num) {
            var textNodes, text = '',
                i, temp = document.createElement('div');
            if (!le.controls.hasContent()) return;
            textNodes = le.options.node.querySelectorAll('div[key]');
            if (!textNodes.length) { // 普通笔记
                text = le.options.node.innerText;
                text = text ? text.substring(0, num ? num : 1024) : '';
            }
            else { // 语音笔记
                for (i = 0; i < (textNodes.length > 3 ? 3 : textNodes.length); i++) {
                    text += textNodes[i].innerText + '\\n';
                    //temp.appendChild(textNodes[i].cloneNode(true));
                }
            }
            return text;
            //return temp.innerText;
        },

        //获取文本资源节点
        getTextNode: function () {
            return le.utils.parseString(le.options.textNodes);
        },
        getAllKeys: function () {
            var keyNodes = le.options.node.querySelectorAll('[key]'),
                arr = [];
            for (var i = 0; i < keyNodes.length; i++) {
                var node = keyNodes[i];
                arr.push(node.getAttribute('key'));
            }
            return arr.join(",");
        },

        //告知键盘是否为隐藏或者显示。
        keyBoardStatuses: function (bool) {
            le.options.keyBoradIsShow = bool;
            if (!bool) le.options.node.setAttribute('contenteditable', 'false');
        },

        //重置图片       
        resetPhoto: function (key, src, width) {
            var node = le.options.node.querySelector('[key="' + key + '"]');
            if (!node) return;
            node.setAttribute('src', src);
            le.controls.setImgWidth(node, width);
        },

        //告知是否为默认笔记
        isDefaultNote: function (bool) {
            le.options.isdefault = bool;
        },

        //告知手机当前使用的语言类型。
        setLanguage: function (str) {
            if (!str || /[\u4E00-\u9FA5]/g.test(str)) {
                le.options.language = "zh-cn"; //中文简体
                return;
            }
            if (/[a-zA-Z]/g.test(str)) {
                le.options.language = "en-us"; //美式英语
            }
        },

        //告知笔记是否加载成功。
        isLoaded: function () {
            return le.options.isLoaded;
        }
    }
})(editor);