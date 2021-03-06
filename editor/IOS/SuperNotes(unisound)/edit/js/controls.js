(function (le) {
    le.controls = {
        toDom: function (html) {
            var div = le.doc.createElement('div');
            div.innerHTML = html;
            return div;
        },

        //转换成标准标签。
        setParse: function (node) {
            var type = node.tagName.toLowerCase().match(/[^-]+$/)[0],
                key = node.getAttribute('key'),
                el = le.doc.createElement(type == 'text' ? 'div' : 'img'),
                res = le.options.json[key],
                _data = node.getAttribute('_data'),
                temp;
            if (el.tagName == 'DIV') {
                if (_data) {
                    temp = le.doc.createElement('div');
                    temp.innerHTML = '<div ' + Base64.decode(_data) + '></div>'
                    el = temp.firstChild;
                }
                //el.innerHTML = node.innerHTML;
                el.innerHTML = le.options.json[key]['fName'];
            }
            else {
                el.src = le.options.json[key]['fUrl'];
                this.setImgWidth(el, res.width);
                //el.setAttribute('width',res.width > maxw ? maxw : res.width);
            }
            le.utils.setAttrs(el, {
                type: type,
                key: key
            });
            return el;
        },

        //转换成资源标签。
        getParse: function (node) {
            var type = node.getAttribute('type'),
                key = node.getAttribute('key'),
                style = node.getAttribute('style'),
                el = le.doc.createElement('ln-' + type),
                _data = '';
            if (type == 'text') {
                if (style) _data += 'style="' + style + '" ';
                if (_data.length > 0) el.setAttribute('_data', Base64.encode(_data));
                //el.innerHTML = node.innerHTML;
            }
            el.setAttribute('key', key);
            return el;
        },

        //设置笔记内容
        setContent: function (html, width, json, createtime) {

            html = le.utils.filterXSS(html);

            le.options.isLoaded = false;
            le.options.keyBoradIsShow = false;
            le.options.width = width || 210;
            //注册图片调整事件。         
            function adjustImages() {
                var imgs = le.options.node.querySelectorAll('img');
                for (var i = 0; i < imgs.length; i++) {
                    var img = imgs[i],
                        left = le.utils.getOffset(img, 'Left') - le.options.mrgalign(),
                        width = img.offsetWidth,
                        pagew = le.options.width - le.options.mrgalign() * 2,
                        imgmaxw = img.getAttribute('maxw');
                    if (left + width > pagew || (left + width < pagew && width < imgmaxw)) {
                        img.setAttribute('width', pagew - left);
                    }
                }
            }
            le.extendEvent.addEvent('adjustimages', adjustImages);

            if (!html || /^\s*$/g.test(html)) {
                le.options.node.innerText = le.I18N[le.options.language].writesometing;
                le.options.isLoaded = true;
                return;
            }
            // if(html && !/^\s*$/g.test(html) && !json){
            //  le.options.node.innerHTML=html;
            //  return;
            // };

            json = le.utils.isString(json) ? le.utils.parseJSON(json) : json;
            le.options.json = json || {};

            var div = this.toDom(html),
                tags = div.querySelectorAll('[key]');

            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i],
                    parent = tag.parentNode;

                le.options.keys[tag.getAttribute('key')] = 1;
                parent.replaceChild(this.setParse(tag), tag);
            }

            le.doc.querySelector("body").style.cssText += "width:" + le.options.width + "px;";
            le.options.node.innerHTML = div.innerHTML;
            if (createtime) {
                //如果传入创建时间，表示为旧笔记。新（即未保存过）的笔记不显示创建时间UI.
                le.options.isNew = false;
                le.options.timenode.classList.add("show");
                le.options.timenode.innerText = le.I18N[le.options.language].createBy + createtime;
            }
            le.extendEvent.fireEvent('adjustimages');
            le.options.isLoaded = true;
            //le.extendEvent.fireEvent('selChange');    
        },

        //获取笔记内容
        getContent: function () {

            var html, div, tags;

            if (!this.hasContent()) return;

            this.cancelBookmark();

            le.options.textNodes = {}; //每次获取内容，清空文本节点对象。

            html = le.options.node.innerHTML;
            div = this.toDom(html);
            tags = div.querySelectorAll('[key]');

            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i],
                    key = tag.getAttribute('key'),
                    parent = tag.parentNode;

                if (tag.tagName == 'DIV') {
                    // if(/^\s*<br\/?>\s*$/ig.test(tag.innerHTML)){
                    //  //空文本标签，去掉key跟type属性。
                    //  var _tag = le.options.node.querySelector('[key="'+key+'"]');
                    //  _tag.removeAttribute('key');
                    //  _tag.removeAttribute('type');
                    //  tag.removeAttribute('key');
                    //  tag.removeAttribute('type');
                    //  continue;
                    // }else{
                    //  le.options.textNodes[tag.getAttribute('key')] = tag.innerHTMl;
                    // }
                    if (/^\s*(<br\/?>)?\s*$/ig.test(tag.innerHTML)) {
                        var _tag = le.options.node.querySelector('[key="' + key + '"]');
                        _tag.parentNode.removeChild(_tag);
                        tag.parentNode.removeChild(tag);
                        continue;
                    }
                    le.options.textNodes[tag.getAttribute('key')] = tag.innerHTML;
                }

                parent.replaceChild(this.getParse(tag), tag);

                if (!le.options.keys[key] || le.options.keys[key] == 2) {
                    le.options.newkeys.push(key);
                }
                le.options.keys[key] = 2;
            }
            return le.utils.filterXSS(div.innerHTML.replace(/<br>/ig, '<br/>'));
        },

        //插入附件。
        insertFile: function (json) {
            if (!this.hasContent()) {
                le.options.node.innerText = '';
            }
            var bookmark = this.getBookmark(),
                el;
            json = le.utils.isString(json) ? le.utils.parseJSON(json) : json;
            if (json.type == 'text') {
                el = le.doc.createElement('div');
                el.innerHTML = json.fName;
            }
            else {
                var maxw = le.options.width - le.options.mrgalign() * 2;
                el = le.doc.createElement('img');
                el.setAttribute('src', json.fUrl);
                el.setAttribute('width', json.width > maxw ? maxw : json.width);
            }
            le.utils.setAttrs(el, {
                type: json.type,
                key: json.key
            });
            le.options.keys[json.key] = 1;
            bookmark && bookmark.parentNode ? bookmark.parentNode.insertBefore(el, bookmark) : le.options.node.appendChild(el);
            this.cancelBookmark(bookmark);
        },

        //保存光标位置。
        createBookmark: function () {
            var rng = this.getRange();

            if (rng.customer) return this.getBookmark();

            var bookmark = le.doc.createElement('span');
            bookmark.setAttribute('id', 'leNote_bookMark');

            this.cancelBookmark();
            rng.insertNode(bookmark);
            le.options.bookmark = bookmark;
            return bookmark;
        },

        //删除保存的光标位置。
        cancelBookmark: function (bookmark) {
            var bookmark = bookmark ? bookmark : this.getBookmark();
            if (bookmark && bookmark.parentNode) {
                bookmark.parentNode.removeChild(bookmark);
                le.options.bookmark = null;
            }
        },

        //获取保存的光标位置
        getBookmark: function () {
            return le.options.bookmark || le.options.node.querySelector("#leNote_bookMark");
        },

        //获取选区
        getRange: function () {
            var sel = getSelection(),
                rng;
            if (sel && sel.rangeCount) {
                rng = sel.getRangeAt(0);
            }
            else {
                rng = le.doc.createRange();
                var child = le.options.node.firstChild;
                if (!child) {
                    rng.setStart(le.options.node, 0);
                }
                while (child) {
                    rng.setStart(child, 0);
                    child = child.firstChild;
                }
                rng.customer = 1;
            }
            return rng;
        },

        //高亮选区
        select: function (rng) {
            var sel = getSelection();
            sel.removeAllRanges();
            sel.addRange(rng);
        },

        //找到上一个带key的兄弟节点。
        findPre: function (node) {
            while (node) {
                if (!node) break;
                if (node.tagName && node.hasAttribute('key')) return node;
                node = node.previousSibling;
            }
        },

        //调整光标位置
        adjustCaret: function (node, after) {
            var rng = this.getRange();
            if (!after) {
                rng.setEndBefore(node);
                rng.collapse(false);
            }
            else {
                rng.setStartAfter(node);
                rng.collapse(true);
            }
            this.select(rng);
        },

        //获取光标所处的X,Y
        getPointformRange: function () {
            var rng = this.getRange(),
                span = le.doc.createElement('span'),
                x = 0,
                y = 0,
                temp = null;
            rng.insertNode(span);
            temp = span;
            while (span.offsetParent) {
                x += span.offsetLeft;
                y += span.offsetTop;
                span = span.offsetParent;
            }
            temp.parentNode.removeChild(temp);
            return {
                'x': x,
                'y': y
            };
        },

        //获取光标相对于可视区在哪个位置。
        inView: function () {
            var position = null,
                val = null,
                y = this.getPointformRange().y,
                viewh = le.options.height || 240,
                scrolltop = le.doc.body.scrollTop,
                top = le.options.top || 80,
                lineHeight = le.options.lineheight || (le.options.lineheight = parseInt(le.utils.getStyle(le.options.node, 'lineHeight')));

            val = y;
            scrolltop -= top;
            y -= top;
            if (scrolltop) position = "middle";
            if (y - scrolltop < lineHeight) position = "top";
            if (y + lineHeight - (viewh + scrolltop) > 0) position = "bottom";

            return {
                "position": position,
                'y': val
            };
        },
        setImgWidth: function (img, width) {
            var maxw = le.options.width - le.options.mrgalign() * 2;
            width = parseInt(width);
            img.setAttribute('width', width > maxw ? maxw : width);
        },

        //判断笔记是否有内容。
        hasContent: function () {
            return le.options.node.innerText != le.I18N[le.options.language].writesometing;
        }
    }
})(editor);