(function (le) {
    le.listener = function () {
        var opt = le.options,
            oldh,
            rng;
        // Hammer(opt.node,{behavior: {userSelect: true}}).on("tap", function(e) {
        //     var target=e.target,
        //      ePageX=e.gesture.center.pageX;  
        //  if(target.tagName == 'IMG'){
        //      //le.options.node.appendChild(le.doc.createTextNode(le.options.keyBoradIsShow));    
        //      if(le.options.keyBoradIsShow){  
        //          le.controls.adjustCaret(target,ePageX-target.offsetLeft > target.offsetWidth/2);
        //      }else{
        //          le.doc.location.href='http://400?'+target.getAttribute('key');
        //          e.stopPropagation();
        //          e.preventDefault();
        //      }
        //  }
        //  // if(target.tagName != 'IMG' && !le.options.keyBoradIsShow){
        //  //  le.doc.location.href='http://401?text';
        //  // } 
        // });

        //通知客户端工具栏命令的状态。
        function selChange() {
            var jsn = {};
            for (var i = 0; i < le.options.cmds.length; i++) {
                var cmd = le.options.cmds[i];
                jsn[cmd] = le.doc.queryCommandState(cmd);
            }
            le.doc.location.href = 'http://500?' + le.utils.parseString(jsn);
            //console.log(jsn);
        }
        le.extendEvent.addEvent('selChange', selChange);
        le.doc.addEventListener('selectionchange', function (e) {
            le.utils.throttle(selChange);
        })

        opt.node.addEventListener('focus', function () {
            if (!le.controls.hasContent()) {
                opt.node.innerText = '';
            }
            opt.node.classList.add("active");
            opt.timenode.classList.remove("show");
        });

        opt.node.addEventListener('blur', function () {
            var html = opt.bookmark ? opt.node.innerHTML.replace(opt.bookmark.outerHTML, '') : opt.node.innerHTML;
            html = html.replace(/<div>/, '').replace(/<br\/?>/, '').replace(/<\/div>/, '');
            if (!html) {
                opt.node.innerText = le.I18N[le.options.language].writesometing;
                opt.node.classList.remove("active");
            }
            if (!le.options.isNew) opt.timenode.classList.add("show");
            //le.controls.createBookmark();         
        });

        //轻触事件。
        Hammer(opt.node, {
            behavior: {
                userSelect: true
            }
        }).on("tap", function (e) {
            var target = e.target,
                x = e.gesture.center.pageX,
                y = e.gesture.center.pageY;
            if (target.tagName == 'IMG') {
                if (le.options.keyBoradIsShow) { //如果键盘是显示的，则认为是编辑状态。
                    //调整光标
                    le.controls.adjustCaret(target, x - target.offsetLeft > target.offsetWidth / 2);
                }
                else {
                    //预览
                    le.doc.location.href = 'http://400?' + target.getAttribute('key');
                }
            }
            else {
                if (!le.options.keyBoradIsShow) {
                    if (le.options.isdefault) return; //默认笔记不能编辑
                    if (target.tagName == 'A') {
                        le.doc.location.href = target.getAttribute("href");
                        return;
                    }
                    le.options.node.setAttribute('contenteditable', 'true');
                    rng = le.doc.caretRangeFromPoint(x, y);
                    le.controls.select(rng);
                }
            }
        });

        //调整文字输入自动换行时滚动到光标处。
        function adjustScroll() {
            var view = le.controls.inView();
            if (view.position == 'top') {
                window.scrollTo(0, view.y - 10);
            }
            if (view.position == 'bottom') {
                window.scrollTo(0, view.y - le.options.height + le.options.lineheight);
            }
        }
        opt.node.addEventListener('keyup', function (e) {
            // var bookmark = le.controls.getBookmark();
            // if(bookmark){
            //  bookmark.scrollIntoView();
            //  le.controls.cancelBookmark();
            // }else{
            //  var lineHeight = parseInt(le.utils.getStyle(opt.node,'lineHeight')) + 2,
            //      newh = le.utils.getStyle(opt.node,'height');
            //     if (typeof oldh === 'undefined')
            //         oldh = newh;
            //     if(oldh != newh)
            //     {      
            //         window.scrollBy(0,(oldh > newh ? -1 : 1) * lineHeight);
            //         oldh = newh;
            //     }
            // }
            if (e.keyCode == 13) {
                var rng = le.controls.getRange(),
                    start = rng.startContainer;
                start = start.nodeType == 3 ? start.parentNode : start;
                if (start.tagName == 'DIV' && start.getAttribute('key') && start.getAttribute('type')) {
                    start.removeAttribute('key');
                    start.removeAttribute('type');
                }
            }

            //节流
            //throttle(adjustScroll);           
            adjustScroll();
        });
        opt.node.addEventListener('keydown', function (e) {
            //退格键处理
            if (e.keyCode == 8) {
                var node = opt.node;
                rng = le.controls.getRange();
                if (rng.collapsed && ((rng.startContainer.nodeType == 3 && rng.startOffset == 0) || rng.startContainer.nodeType == 1)) {
                    var bookmark = le.controls.createBookmark(),
                        del = le.controls.findPre(bookmark);

                    if (del && del.tagName && del.hasAttribute('key') && !le.utils.inSelection(del)) {
                        rng.selectNode(del)
                        le.controls.select(rng);
                        e.preventDefault();
                    }
                    le.controls.cancelBookmark();
                }
            }
        })
    }
})(editor);