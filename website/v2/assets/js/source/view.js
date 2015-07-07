/*
 *  author: gejian1@lenovo.com
 *  description: 页面显示及操作
 */
(function(){
    lenoteView = {
        //初始化布局方法
        init: function(_lenote){
            this._lenote = _lenote;
            this.dom = lenoteDom;
            this.observer = lenoteObserver;
            //初始化界面元素
            this.dom.init(this);
        },
        
        //笔记本(组)相关的交互
        category: {
            //页面笔记本(组)初始化，初始化完成后会自动调用默认笔记本(组)的笔记列表
            init: function(){
                var target = '#sidebar-a .list-categories';
                lenoteView._lenote.category.getAll(user.getUState('rcid'), true, {
                    success: function(respose){
                        var categories = respose.categories, tree = $(target);
                        for(var i = 0; i < categories.length; i++){
                            tree.append(lenoteView.dom.category.recursiveBuild(categories[i]));
                        }
                        
                        //查找默认分类的笔记列表--默认加载所有笔记
                        //lenoteView.note.getListByCategory(null, true);
                        $('#all-notes').trigger('click');
                        
                        //监听分类事件
                        lenoteView.observer.categories();
                    },
                    init: function(){
                         //先清空分类树
                        $(target).empty();
                    },
                    before: function(){
                        $(target).smartLoading({isappend: false, text: '笔记本加载中...'});
                    },
                    complete: function(){
                        $(target).smartLoading({action: 'del', effect: true});
                    }
                }, true);
            },
            
            //创建笔记本组
            createNotebook: function(_callback_){
                this.create(user.getUState('rcid'), true, _callback_);
            },
            
            //创建笔记本(组)
            create: function(id, isRoot, _callback_){
                // if(!id){
                //     $.lebox.error('网络异常，请刷新后重试！', 800);
                //     return false;
                // }
                if(isRoot){
                    var paddingleft = 24;
                }else{
                    var paddingleft = parseInt($('#' + lenoteView.dom.category.getDomID(id)).children('div.item').css('padding-left'));
                    if(isNaN(paddingleft)) paddingleft = 24;
                    paddingleft += 20;
                }
                $.lebox.modalbox('新建笔记本', lenoteView.dom.category.getChtml(), function(){
                    //var title = UE.utils.unhtml(utils.trim($('#lebox-wrap #inputTitle').val(), true)).replace(/\s/igm, '&nbsp;');
                    var title = utils.unhtml($('#lebox-wrap #inputTitle').val());
                    utils.setFocus('#lebox-wrap #inputTitle');
                    if(title){
                        //检查笔记本名称是否合法
                        if(lenoteDom.category.prohibited(title)){
                            $('#lebox-wrap .prompt').text('请输入有效地笔记本名称');
                            return false;
                        }
                        //检查笔记本名称是否已存在
                        if(lenoteDom.category.exists(title)){
                            $('#lebox-wrap .prompt').text('笔记本名称已存在');
                            return false;
                        }
                        
                        $('#lebox-wrap .prompt').text('');
                        var type = 1;  //1表示自定义
                        lenoteView._lenote.category.add(id, title, type, {
                            success: function(respose){
                                lenoteView.dom.category.insert(id, title, lenoteView.dom.category.build({
                                   categoryID: respose.categoryID, categoryName: title, categoryType: type, categoryNoteCount: 0, categoryVersion: respose.categoryVersion, parentNode: id,
                                   categoryLogoID: 0
                                }, false, paddingleft));
                                if(typeof _callback_ == 'function') _callback_({id: respose.categoryID, name: title, logoID: 0});
                                $('#lebox-wrap .prompt').addClass('success').text('笔记本创建成功');
                                $.lebox.modalbox.close();
                            },
                            before: function(){
                                //$('#lebox-wrap .prompt').smartLoading({text: '正在提交...'});
                                $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在提交...</div>');
                            },
                            failure: function(respose){
                                $('#lebox-wrap .prompt').text('应用出现故障，请稍候再试！');
                            },
                            error: function(msg){
                                $('#lebox-wrap .prompt').text('不能创建新笔记本！');
                            }
                        });
                    }else{
                        $('#lebox-wrap .prompt').text('请输入笔记本名称！');
                    }
                });
            },
            
            //删除笔记本(组)
            del: function(id){
                var category = $('#' + id);
                if(!category.data('type')) return false;
                
                $.lebox.modalbox('删除笔记本', lenoteView.dom.category.getConfirmHtml('确定删除笔记本"<span class="keyword ellipsis">' + category.data('name') + '</span>"？'), function(){
                    lenoteView._lenote.category.del(category.data('id'), category.data('ver'), {
                        success: function(respose){
                            //更新笔记数、回收站笔记数、星标笔记数、共享笔记数
                            try{
                                lenoteDom.category.count(id, -respose.categoryNoteCount.noteCount);
                                if(respose.noteCount != 0) lenoteDom.category.trash_count(respose.categoryNoteCount.noteCount);
                                lenoteDom.category.count('stars-notes', -respose.categoryNoteCount.markedCount, false, true, true);
                                lenoteDom.category.shared_count(-respose.categoryNoteCount.sharedCount);
                            }catch(e){}
                            
                            lenoteView.dom.category.del(id);
                            $('#lebox-wrap .prompt').css('padding-left', '5px').addClass('success').text('笔记本已删除');
                            $.lebox.modalbox.close();
                        },
                        before: function(){
                            //$('#lebox-wrap .prompt').smartLoading({text: '正在删除...'});
                            $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在删除...</div>');
                        },
                        failure: function(respose){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('应用出现故障，请稍候再试！');
                        },
                        error: function(msg){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('不能删除该笔记本，请重试！');
                        }
                    });
                });
            },
            
            //重命名笔记本(组)
            rename: function(id){
                var category = $('#' + id);
                $.lebox.modalbox('重命名笔记本', lenoteView.dom.category.getChtml(category.data('name')), function(){
                    //var title = $.trim($('#lebox-wrap #inputTitle').val());
                    //var title = UE.utils.unhtml(utils.trim($('#lebox-wrap #inputTitle').val(), true)).replace(/\s/igm, '&nbsp;');
                    var title = utils.unhtml($('#lebox-wrap #inputTitle').val());
                    utils.setFocus('#lebox-wrap #inputTitle');
                    if(title){
                        //检查笔记本名称是否合法
                        if(lenoteDom.category.prohibited(title)){
                            $('#lebox-wrap .prompt').text('请输入有效地笔记本名称');
                            return false;
                        }
                        //检查笔记本名称是否已存在
                        if(lenoteDom.category.exists(title, category.data('name'))){
                            $('#lebox-wrap .prompt').text('笔记本名称已存在');
                            return false;
                        }
                        
                        lenoteView._lenote.category.update(category.data('id'), title, category.data('pnode'), category.data('ver'), {
                            success: function(respose){
                                category.data($.extend(category.data(), {'ver': respose.categoryVersion, name: title})).children('.item').children('.title').html(title).attr('_title', md5(title));
                                //更新笔记本的版本
                                //lenoteView.dom.category.updateVersion(id);
                                $('#lebox-wrap .prompt').addClass('success').text('笔记本已更新');
                                $.lebox.modalbox.close();
                            },
                            before: function(){
                                //$('#lebox-wrap .prompt').smartLoading({text: '正在提交...'});
                                $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在提交...</div>');
                            },
                            failure: function(respose){
                                $('#lebox-wrap .prompt').text('应用出现故障，请稍候再试！');
                            },
                            error: function(msg){
                                $('#lebox-wrap .prompt').text('不能更新新笔记本名称！');
                            }
                        });
                    }else{
                        $('#lebox-wrap .prompt').text('请输入笔记本名称！');
                    }
                });
            }
        },
        
        //笔记相关的交互
        note: {
            /*
             *   获取笔记本(组)下的所有笔记
             *   params:
             *      cateid:  笔记本(组)ID，如果为null则为默认笔记本(组)
             *      isMultiple: 表示该请求是否允许与其它同类型的请求共存
             */
            getListByCategory: function(cateid, isMultiple){
                if(!cateid) cateid = lenoteView.dom.category.getDefault();
                if(!cateid) return false;
                
                var cid = lenoteView.dom.category.resolveID(cateid);
                //这里之所以将skip覆盖为0是因为从笔记本(组)获取笔记列表总是会清空上一个笔记列表的
                lenoteView._lenote.note.getListByCategory(
                  cid, $.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, 
                  lenoteView.dom.note.list_callback(cateid, 'category', isMultiple), isMultiple
                );
            },
            
            search: function(q){
                if(q == ''){
                    var allnotes = $('#all-notes');
                    if(allnotes.data('searchkey')) allnotes.trigger('click');
                }else{
                    lenoteView._lenote.note.query(q, $.extend(lenoteView.dom.note.getPagination(), {skip: 0}), lenoteView.dom.note.list_callback('search', 'search', true, q));
                }
            },
            
            //所有笔记列表
            getAll: function(){
                lenoteView._lenote.note.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('all-notes', 'allnotes', true));
            },
            
            getStars: function(){
                lenoteView._lenote.star.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('stars-notes', 'starnotes', true));
            },
            
            getShared: function(){
                lenoteView._lenote.share.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('myshare', 'sharenotes', true));
            },
            
            scroll: {
                getListByCategory: function(scrollTop){
                    var cid = lenoteView.dom.category.getSelected();
                    if(!cid) return false;
                    
                    cid = lenoteView.dom.category.resolveID(cid);
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.note.getListByCategory(cid, pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                getAll: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.note.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                getStars: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.star.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                getShared: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.share.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                },
                search: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination(), q = $.trim($('#all-notes').data('searchkey'));
                    if(q != '') lenoteView._lenote.note.query(q, pager, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                }
            },
            
            /*
             *   加载笔记并显示
             *   params:
             *       noteid:  需要显示的笔记ID，如果noteid为空则默认显示笔记列表中的第一篇笔记
             *       isMultiple:  指明是否允许多个请求笔记的同时发送
             *       reflash:  是否检查isEqualSelected
             */
            show: function(noteid, isMultiple, reflash){
                //如果笔记相同则不再发送请求
                if(!reflash && lenoteView.dom.note.isEqualSelected(noteid, true)) return false;
                //检查笔记是否正在提交
                if(lenoteView.dom.editor.checkIsOpr()) return false;
                
                //如果当前笔记列表中没有笔记则显示空白的编辑区域
                lenoteView.dom.editor.cleanUI();
                lenoteView.dom.editor.data.attachments.clean();
                lenoteDom.editor.data.tags.clean();
                if(!noteid) noteid = lenoteView.dom.note.getSelected();
                if(!noteid) return false;
                
                var id = lenoteView.dom.note.resolveID(noteid);
                lenoteView._lenote.note.get(id, {
                    success: function(respose){
                        //检查当前加载的笔记与选中的笔记是否一样，如不一样则忽略
                        if(!lenoteView.dom.note.isEqualSelected(respose.noteID)) return false;
                        
                        //检查将要显示的笔记与当前选中的菜单项ID是否一致，如果不一致则丢弃笔记的显示，用于防止点击分类过快时先加载的分类note闪显问题
                        if(!lenoteView.dom.category.isEqualSelected(respose.categoryID)) return false;
                        lenoteView.dom.editor.data.attachments.set(respose.resources);
                        lenoteView.dom.editor.data.tags.set(respose.tags);
                        
                        respose['_title'] = respose['title'];
                        respose['title'] = utils.unhtml(respose['title']);
                        lenoteView.dom.note.init(respose);
                    },
                    before: function(){
                        $('#sidebar-c .note-loading').smartLoading({text: '正在加载笔记...'});
                    },
                    complete: function(status){
                        $('#sidebar-c .note-loading').smartLoading({action: 'del'});
                    },
                    init: function(){
                        lenoteView.dom.note.selected(noteid);
                    }
                }, isMultiple);
            },
            
            //删除当前笔记
            del: function(){
                //检查笔记区域是否正在加载笔记/提交笔记
                if(lenoteView.dom.editor.checkIsOpr(['del'])) return false;
                
                lenoteDom.editor.saved.clean();
                
                var that = this, target = $('#sidebar-c .note-editor'), noteData = target.data('note');
                if(noteData && noteData.id){
                    $.lebox.modalbox('删除笔记', lenoteView.dom.category.getConfirmHtml('确定删除笔记"<span class="keyword ellipsis">' + lenoteView.dom.editor.getTitle() + '</span>"？'), function(){
                        $.lebox.modalbox.close();
                        lenoteView._lenote.note.del(noteData.id, noteData.ver, {
                            success: function(respose){
                                var note = $('#sidebar-b .list-notes li#' + lenoteView.dom.note.getDomID(respose.noteID)), cid = lenoteDom.category.getDomID(noteData.cid);
                                //查看是否是已分享或加星标的笔记，如果是则更新相应的笔记数
                                try{
                                    if($.trim(lenoteDom.editor.data.get('shareToken') || '')){
                                        lenoteDom.category.shared_count(-1);
                                    }
                                    if(note.children('a.marked.stared').length == 1){
                                        lenoteDom.category.count('stars-notes', -1, false, true);
                                    }
                                    //增加回收站笔记数
                                    lenoteDom.category.trash_count(1);
                                }catch(e){}
                                
                                //检查当前选中笔记与被删除笔记是否一样，不一样则不操作
                                if(lenoteView.dom.note.isEqualSelected(respose.noteID)){
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    //在笔记列表中自动加载被删除笔记的前一个或后一个笔记
                                    var next = note.nextAll('li:not(.date-sep)').first().attr('id') || note.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(next){
                                        that.show(next);
                                    }else{
                                        lenoteView.dom.editor.insertBtn.clean().create().show();
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(note.prev().hasClass('date-sep')){
                                    var _next = note.next();
                                    if(_next.length == 0 || _next.hasClass('date-sep')){
                                        note.prev().remove();
                                    }
                                }
                                note.remove();
                                
                                //更新被删除笔记的笔记列表及分类中的数量
                                lenoteView.dom.note.count(-1);
                                //如果当前选择的是所有笔记、星标笔记需要更新笔记对应的分类笔记数
                                if(lenoteView.dom.category.getSelected() == 'all-notes') lenoteDom.category.count(cid, -1, false, true);
                                if(lenoteView.dom.category.getSelected() == 'stars-notes') lenoteDom.category.count(cid, -1, false, true);
                                
                                $.smartDoing({action: 'del', text: '笔记已删除'});
                                //更新笔记本的版本树
                                //lenoteView.dom.category.updateVersion(lenoteView.dom.category.getCurrent(true), true);
                                
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                    $('#sidebar-b .content').trigger('scroll');
                                }
                                
                                lenoteDom.note.updateIcon();
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'del');
                                $.smartDoing({text: '请稍候，正在删除...'});
                            }
                        });
                    });
                }else{
                    $.lebox.error('网络异常，请刷新后重试！', 800);
                }
            },
            
            //创建新笔记-显示新建笔记时的UI
            create: function(){
                //检查笔记区域是否正在加载笔记/提交笔记
                if(!lenoteView.dom.editor.checkIsOpr()){
                    lenoteView.dom.editor.data.attachments.clean();
                    lenoteDom.editor.data.tags.clean();
                    lenoteView.dom.editor.createUI();
                    lenoteDom.note.insertTags(true);
                    var cid = lenoteView.dom.category.getCurrent(true);
                    cid = cid? lenoteDom.category.resolveID(cid) : null;
                    lenoteDom.note.insertCategory(cid, true);
                    //lenoteDom.editor.focus();
                }
            },
            
            //编辑笔记-显示编辑笔记时的UI
            edit: function(){
                 //检查笔记区域是否正在加载笔记/提交笔记或处于编辑模式
                if(lenoteView.dom.editor.checkIsOpr()) return false;
                
                var target = $('#sidebar-c .note-editor');
                if(target.data('note') && target.data('note').id){
                    lenoteView.dom.editor.editUI();
                    lenoteDom.note.insertTags(true);
                    lenoteDom.note.insertCategory(target.data('note').cid, true);
                }else{
                    $.lebox.warning('网络异常，请刷新后重试！', 800);
                }
            },
            
            //保存笔记
            save: function(){
                //检查笔记区域是否正在加载笔记/提交笔记
                if(lenoteView.dom.editor.checkIsOpr(['update', 'save'])) return false;
                
                lenoteDom.editor.saved.clean();
                
                var that = this, target = $('#sidebar-c .note-editor');
                var title = lenoteView.dom.editor.getTitle(), content = lenoteAnalyze.encode(lenoteView.dom.editor.getContent()), noteData = target.data('note'),
                      summary = utils.html(utils.strip_tags(content)).substr(0, 100);
                if(!title) title = '无标题笔记';
                if(noteData && noteData.id){
                    //编辑笔记
                    if(noteData.ver){
                        var cid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id') || noteData.cid;
                        lenoteView._lenote.note.update(cid, noteData.id, title, content, noteData.ver, lenoteView.dom.editor.data.attachments.build(), {
                            success: function(respose){
                                lenoteView.dom.editor.data.attachments.cleanNew();
                                //更新笔记列表项
                                var cnote = $('#' + lenoteView.dom.note.getDomID(noteData.id));
                                if(cnote.length > 0){
                                    cnote.data($.extend(cnote.data(), {ver: respose.noteVersion}));
                                    //cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.strip_tags(content))
                                    cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.unhtml(summary))
                                    .end().find('.entry .metadata .date').html(new Date().format('d日 hh:mm') + '&nbsp;' + (new Date().getHours() >= 12? 'PM' : 'AM'));
                                    var _tags = lenoteDom.editor.data.tags.build(true);
                                    if(_tags.length > 0){
                                        var _tagwrap = cnote.find('.entry .metadata .tag'), taglist = [];
                                        if(_tagwrap.length == 0) cnote.find('.entry .metadata').append(_tagwrap = $('<span class="tag"></span>'));
                                        for(var i = 0; i < _tags.length; i++){
                                            //var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(UE.utils.html(_tag.name));
                                            var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(utils.html(_tag.tagName));
                                            if(!name) continue;
                                            //taglist.push('<span>' + name + '</span>');
                                            taglist.push(name + '&nbsp;');
                                        }
                                        _tagwrap.html(taglist.join(''));
                                    }else{
                                        cnote.find('.entry .metadata .tag').remove();
                                    }
                                }
                                
                                //检查分类是否有修改
                                if(noteData.cid != cid){ //说明未自动保存过
                                    lenoteDom.category.count(lenoteView.dom.category.getDomID(noteData.cid), -1, false, true);
                                    lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false, true);
                                }
                                
                                $.smartDoing({action: 'del', text: '笔记更新成功'});
                                
                                var _sel = lenoteDom.category.getSelected();
                                if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) >= 0 || _sel == lenoteDom.category.getDomID(cid)){
                                    lenoteView.dom.note.init({title: title, content: content, categoryID: cid, noteID: noteData.id, noteVersion: respose.noteVersion, createTime: cnote.data.ctime, shareToken: noteData.shareToken});
                                    //lenoteView.dom.editor.data.attachments.clean();
                                    lenoteView.dom.editor.data.attachments.update(respose.resources);
                                    lenoteView.dom.note.updateThumb(noteData.id, respose.resources);
                                }else{
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    if(cnote.length > 0){
                                        var next = cnote.nextAll('li:not(.date-sep)').first().attr('id') || cnote.prevAll('li:not(.date-sep)').first().attr('id');
                                    }else{
                                        var next = lenoteDom.note.getSelected(true);
                                    }
                                    if(next){
                                        (cnote.length > 0)? that.show(next) : that.show(next, false, true);
                                    }else{
                                        lenoteView.dom.editor.insertBtn.clean().create().show();
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                    if(cnote.prev().hasClass('date-sep')){
                                        var _next = cnote.next();
                                        if(_next.length == 0 || _next.hasClass('date-sep')){
                                            cnote.prev().remove();
                                        }
                                    }
                                    cnote.remove();
                                    lenoteDom.note.updateIcon();
                                }
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            fail: function(respose){
                                lenoteDom.editor.saved.monitorTitle();
                                lenoteDom.editor.saved.listen();
                                //保存失败后设置为true，让用户不可离开编辑界面
                                lenoteDom.editor.saved.is_need = true;
                                //如果是因为版本问题导致保存失败则更新新版本号
                                if(typeof respose == 'object'){
                                    if(respose.noteVersion) lenoteDom.editor.data.add('ver', respose.noteVersion);
                                }
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'update');
                                $.smartDoing({text: '正在更新笔记...'});
                            }
                        }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                    }else{
                        $.lebox.warning('网络异常，请刷新后重试！', 800);
                    }
                }else{
                    //保存新笔记
                    //var cateid = lenoteView.dom.category.getCurrent(true) || lenoteView.dom.category.getDefault();
                    var cateid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id');
                    cateid = cateid? lenoteView.dom.category.getDomID(cateid) : (lenoteView.dom.category.getCurrent(true) || lenoteView.dom.category.getDefault());
                    if(cateid){
                        var cid = lenoteView.dom.category.resolveID(cateid), isMarked = false;
                        if(lenoteView.dom.category.getSelected() == 'stars-notes') isMarked = true;
                        lenoteView._lenote.note.add(cid, title, content, isMarked, lenoteView.dom.editor.data.attachments.build(), {
                                success: function(respose){
                                    lenoteView.dom.editor.data.attachments.cleanNew();
                                    //更新笔记列表
                                    var _sel = lenoteDom.category.getSelected();
                                    if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) >= 0 || _sel == lenoteDom.category.getDomID(cid)){
                                        lenoteView.dom.note.selected(lenoteView.dom.note.insert({
                                            noteID: respose.noteID, noteVersion: respose.noteVersion,
                                            //title: title, summary: content, isMarked: isMarked, tag: lenoteDom.editor.data.tags.build(true)
                                            title: title, summary: summary, isMarked: isMarked, tags: lenoteDom.editor.data.tags.build(true)
                                        }, true, true));
                                        
                                        lenoteDom.note.updateIcon();
                                        
                                        //设置笔记为显示UI
                                        lenoteView.dom.note.init({title: title, content: content, categoryID: cid, noteID: respose.noteID, noteVersion: respose.noteVersion});
                                        lenoteView.dom.note.count(1);
                                        //lenoteView.dom.editor.data.attachments.clean();
                                        lenoteView.dom.editor.data.attachments.update(respose.resources);
                                        lenoteView.dom.note.updateThumb(respose.noteID, respose.resources);
                                        //如果当前选择的是所有笔记、星标笔记需要更新笔记对应的分类笔记数
                                        if(lenoteView.dom.category.getSelected() == 'all-notes') lenoteDom.category.count(cateid, 1, false, true);
                                        if(lenoteView.dom.category.getSelected() == 'stars-notes') lenoteDom.category.count(cateid, 1, false, true);
                                    }else{
                                        lenoteDom.category.count(cateid, 1, false);
                                        lenoteView.dom.editor.cleanUI();
                                        lenoteView.dom.editor.data.attachments.clean();
                                        lenoteDom.editor.data.tags.clean();
                                        var next = lenoteDom.note.getSelected(true);
                                        if(next){
                                            that.show(next, false, true);
                                        }else{
                                            lenoteView.dom.editor.insertBtn.clean().create().show();
                                            $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                        }
                                    }
                                    
                                    $.smartDoing({action: 'del', text: '笔记已保存'});
                                },
                                complete: function(status){
                                    lenoteView.dom.editor.data.remove('mark');
                                },
                                fail: function(){
                                    lenoteDom.editor.saved.monitorTitle();
                                    lenoteDom.editor.saved.listen();
                                    //保存失败后设置为true，让用户不可离开编辑界面
                                    lenoteDom.editor.saved.is_need = true;
                                },
                                before: function(){
                                    lenoteView.dom.editor.data.add('mark', 'save');
                                    $.smartDoing({text: '正在保存笔记...'});
                                }
                        }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                    }else{
                        $.lebox.error('请先选择一个笔记本后再保存！', 800);
                    }
                }
                //更新笔记本的版本树
                //lenoteView.dom.category.updateVersion(lenoteView.dom.category.getCurrent(true), true);
            },
            
            //自动保存
            saved: function(callback){
                callback.init();
                
                //检查笔记是否处在编辑状态，否则不保存
                if($('#note_title_input').length == 1){
                    if(lenoteView.dom.editor.checkIsOpr(['update', 'save', 'del'])){
                        lenoteDom.editor.saved.init();
                    }else{
                        var target = $('#sidebar-c .note-editor');
                        var title = lenoteView.dom.editor.getTitle(), content = lenoteAnalyze.encode(lenoteView.dom.editor.getContent()), noteData = target.data('note'),
                              summary = utils.html(utils.strip_tags(content)).substr(0, 100);
                        if(!title) title = '无标题笔记';
                        if(noteData && noteData.id){ //编辑
                            if(noteData.ver){
                                var cid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id') || noteData.cid;
                                lenoteView._lenote.note.update(cid, noteData.id, title, content, noteData.ver, lenoteView.dom.editor.data.attachments.build(true), {
                                    success: function(respose){
                                        lenoteView.dom.editor.data.attachments.cleanNew();
                                        
                                        //更新笔记列表项
                                        var cnote = $('#' + lenoteView.dom.note.getDomID(noteData.id));
                                        if(cnote.length > 0){
                                            cnote.data($.extend(cnote.data(), {ver: respose.noteVersion}));
                                            //cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.strip_tags(content))
                                            cnote.find('.item.note-entry').find('.entry .title').html(title).end().find('.entry .summary .text').html(utils.unhtml(summary))
                                            .end().find('.entry .metadata .date').html(new Date().format('d日 hh:mm') + '&nbsp;' + (new Date().getHours() >= 12? 'PM' : 'AM'));
                                            //笔记列表标签
                                            var _tags = lenoteDom.editor.data.tags.build(true);
                                            if(_tags.length > 0){
                                                var _tagwrap = cnote.find('.entry .metadata .tag'), taglist = [];
                                                if(_tagwrap.length == 0) cnote.find('.entry .metadata').append(_tagwrap = $('<span class="tag"></span>'));
                                                for(var i = 0; i < _tags.length; i++){
                                                    //var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(UE.utils.html(_tag.name));
                                                    var _tag = _tags[i], name = lenoteDom.editor.data.tags.getName(utils.html(_tag.tagName));
                                                    if(!name) continue;
                                                    //taglist.push('<span>' + name + '</span>');
                                                    taglist.push(name + '&nbsp;');
                                                }
                                                _tagwrap.html(taglist.join(''));
                                            }else{
                                                cnote.find('.entry .metadata .tag').remove();
                                            }
                                        }
                                        
                                        var hasChange = noteData.cid != cid;
                                        //修改分类后需要更新笔记数
                                        if(noteData.cid != cid){
                                            //var _sel = lenoteDom.category.getSelected();
                                            //if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1){
                                            //    lenoteView.dom.note.count(-1); //旧分类数-1
                                            //    lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false);
                                            //}else{
                                            //    lenoteDom.category.count(lenoteView.dom.category.getDomID(noteData.cid), -1, false, true);
                                            //    lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false, true);
                                            //}
                                            lenoteDom.category.count(lenoteView.dom.category.getDomID(noteData.cid), -1, false, true);
                                            lenoteDom.category.count(lenoteView.dom.category.getDomID(cid), 1, false, true);
                                        }
                                        
                                        //更新笔记项
                                        $('#note_title_input').val(lenoteDom.editor.filterTitle(title)).trigger('keypress');
                                        target.data('note', $.extend(target.data('note'), {cid: cid, ver: respose.noteVersion, content: content}));
                                        lenoteView.dom.editor.data.attachments.update(respose.resources);
                                        lenoteView.dom.note.updateThumb(noteData.id, respose.resources);
                                        
                                        $.smartDoing({action: 'del', text: '笔记更新成功', _callback: function(){
                                            callback.success(function(_callback_){
                                                /*
                                                 * 自动保存不跳转到笔记修改后分类列表，只有在点击完成按钮后才会跳转到相应的分类笔记列表上去
                                                 * * 如果当前选中的分类不是所有分类、星标分类、我的分享、回收站且笔记更新的分类与当前选中的分类不同时，要
                                                 * * 设置saved.is_need始终为true, 让其不能点击原分类笔记列表中的其它笔记导致列表中笔记分类不一致
                                                 */
                                                var _sel = lenoteDom.category.getSelected();
                                                //if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1 && _sel != lenoteDom.category.getDomID(cid) && hasChange && cnote.length > 0){
                                                if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1 && _sel != lenoteDom.category.getDomID(cid) && cnote.length > 0){
                                                    lenoteDom.editor.saved.is_hold = lenoteView.dom.note.getDomID(noteData.id);
                                                }else{
                                                    lenoteDom.editor.saved.is_hold = null;
                                                }
                                                if(typeof _callback_ == 'function') _callback_();
                                            });
                                        }});
                                    },
                                    complete: function(status){
                                        lenoteView.dom.editor.data.remove('mark');
                                        callback.complete();
                                    },
                                    before: function(){
                                        lenoteView.dom.editor.data.add('mark', 'update');
                                        $.smartDoing({text: '正在更新笔记...'});
                                    },
                                    error: function(msg){
                                        callback.error(msg);
                                    },
                                    fail: function(respose){
                                        //如果是因为版本问题导致保存失败则更新新版本号
                                        if(typeof respose == 'object'){
                                            if(respose.businessData) lenoteDom.editor.data.add('ver', respose.businessData);
                                        }
                                    }
                                }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                            }else{
                                callback.complete();
                            }
                        }else{ //新笔记
                            var cateid = $('#sidebar-c .note-info .extra .note-category span.title').attr('_id');
                            cateid = cateid? lenoteView.dom.category.getDomID(cateid) : (lenoteView.dom.category.getCurrent(true) || lenoteView.dom.category.getDefault());
                            if(cateid){
                                var cid = lenoteView.dom.category.resolveID(cateid), isMarked = false;
                                if(lenoteView.dom.category.getSelected() == 'stars-notes') isMarked = true;
                                lenoteView._lenote.note.add(cid, title, content, isMarked, lenoteView.dom.editor.data.attachments.build(true), {
                                    success: function(respose){
                                        lenoteView.dom.editor.data.attachments.cleanNew();
                                        
                                        //更新笔记列表
                                        var _sel = lenoteDom.category.getSelected();
                                        if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) >= 0 || _sel == lenoteDom.category.getDomID(cid)){
                                            lenoteView.dom.note.selected(lenoteView.dom.note.insert({
                                                noteID: respose.noteID, noteVersion: respose.noteVersion,
                                                title: title, summary: summary, isMarked: isMarked, tags: lenoteDom.editor.data.tags.build(true)
                                            }, true, true));
                                            lenoteDom.note.updateIcon();
                                            lenoteView.dom.note.count(1);
                                            //如果当前选择的是所有笔记、星标笔记需要更新笔记对应的分类笔记数
                                            if(lenoteView.dom.category.getSelected() == 'all-notes') lenoteDom.category.count(cateid, 1, false, true);
                                            if(lenoteView.dom.category.getSelected() == 'stars-notes') lenoteDom.category.count(cateid, 1, false, true);
                                        }else{
                                            lenoteDom.category.count(cateid, 1, false);
                                        }
                                        
                                        //更新笔记项
                                        $('#note_title_input').val(lenoteDom.editor.filterTitle(title)).trigger('keypress');
                                        target.data('note', {cid: cid, id: respose.noteID, ver: respose.noteVersion, content: content, shareToken: undefined});
                                        lenoteView.dom.editor.data.attachments.update(respose.resources);
                                        lenoteView.dom.note.updateThumb(respose.noteID, respose.resources);
                                        
                                        $.smartDoing({action: 'del', text: '笔记已保存', _callback: function(){
                                            //callback.success(function(_callback_){
                                                //var _sel = lenoteDom.category.getSelected();
                                                //if($.inArray(_sel, ['all-notes', 'stars-notes', 'myshare', 'trash']) == -1 && _sel != lenoteDom.category.getDomID(cid) && hasChange){
                                                //    lenoteDom.editor.saved.is_hold = true;
                                                //}else{
                                                //    lenoteDom.editor.saved.is_hold = false;
                                                //}
                                                //if(typeof _callback_ == 'function') _callback_();
                                            //});
                                            callback.success();
                                        }});
                                    },
                                    complete: function(status){
                                        lenoteView.dom.editor.data.remove('mark');
                                        callback.complete();
                                    },
                                    before: function(){
                                        lenoteView.dom.editor.data.add('mark', 'save');
                                        $.smartDoing({text: '正在保存笔记...'});
                                    },
                                    error: function(msg){
                                        callback.error(msg);
                                    }
                                }, lenoteDom.editor.data.tags.build(), lenoteTag.getNoteStyle());
                            }else{
                                callback.complete();
                            }
                        }
                    }
                }else{
                    lenoteDom.editor.saved.init();
                }
            },
            
            share: function(isClose){
                if(isClose === true){
                    lenoteView._lenote.share.del(lenoteDom.editor.data.get('id'), {
                        success: function(respose){
                           if(respose.returnCode != 200 || $.inArray(respose.status, [4, 6]) != -1){
                                $.lebox.error('链接删除失败，请稍候再试', 800);
                                return false;
                            }
                            
                            lenoteDom.editor.data.remove('shareToken');
                            $('#sidebar-c .note-meta nobr.publnk').remove();
                            lenoteDom.category.shared_count(-1);
                            $.lebox.success('链接已删除', 800);
                            
                            if(lenoteView.dom.category.getSelected() == 'myshare'){
                                var _current = $('li#' + lenoteDom.note.getDomID(lenoteDom.editor.data.get('id')) + ':not(.date-sep)');
                                if(lenoteView.dom.note.isEqualSelected(lenoteDom.editor.data.get('id'))){
                                    lenoteView.dom.editor.cleanUI();
                                    var _next = _current.nextAll('li:not(.date-sep)').first().attr('id') || _current.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(_next){
                                        lenoteView.note.show(_next);
                                    }else{
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(_current.prev().hasClass('date-sep')){
                                    var _next_ = _current.next();
                                    if(_next_.length == 0 || _next_.hasClass('date-sep')) _current.prev().remove();
                                }
                                _current.remove();
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10) $('#sidebar-b .content').trigger('scroll');
                                lenoteDom.note.updateIcon();
                            }
                        },
                        before: function(){$.lebox.notify('正在删除链接，请稍候');},
                        failure: function(){$.lebox.error('链接删除失败，请稍候再试', 1200);},
                        error: function(){$.lebox.error('网络异常，请稍候再试', 1200);}
                    });
                }else{
                    //获取公开链接
                    lenoteView._lenote.share.create(lenoteDom.editor.data.get('id'), {
                        success: function(respose){
                            var key = respose.shareToken;
                            if(!key || respose.returnCode != 200 || $.inArray(respose.status, [4, 6]) != -1){
                                $.lebox.error('公共链接创建失败，请稍候再试', 1200);
                                return false;
                            }
                            
                            lenoteDom.note.insertPublicLink(key);
                            lenoteDom.editor.data.add('shareToken', key);
                            lenoteDom.category.shared_count(1);
                            
                            $.lebox.close(function(){
                                $.lebox.modalbox('公开链接', lenoteDom.fragment.getShare(key), function(){
                                    $.lebox.modalbox.close(function(){
                                        //停止分享
                                        lenoteView._lenote.share.del(lenoteDom.editor.data.get('id'), {
                                            success: function(respose){
                                                if(respose.returnCode != 200 || $.inArray(respose.status, [4, 6]) != -1){
                                                    $.lebox.error('链接删除失败，请稍候再试', 800);
                                                    return false;
                                                }
                                                
                                                lenoteDom.editor.data.remove('shareToken');
                                                $('#sidebar-c .note-meta nobr.publnk').remove();
                                                lenoteDom.category.shared_count(-1);
                                                $.lebox.success('链接已删除', 800);
                                            },
                                            before: function(){$.lebox.notify('正在删除链接，请稍候');},
                                            failure: function(){$.lebox.error('链接删除失败，请稍候再试', 1200);},
                                            error: function(){$.lebox.error('网络异常，请稍候再试', 1200);}
                                        });
                                    });
                                }, true, 'liner', false, function(){
                                    var btn_copy = $('#lebox-wrap .btn-copy');
                                    btn_copy.zclip({
                                        path: '/assets/js/zclip/ZeroClipboard.swf',
                                        copy:function(){
                                            return $('#lebox-wrap input.shareToken').val();
                                        },
                                        afterCopy: function(){
                                            var prompt = $('#lebox-wrap .prompt');
                                            prompt.text('复制成功').show();
                                            setTimeout(function(){
                                                prompt.fadeOut(function(){
                                                    $(this).text('');
                                                });
                                            }, 800);
                                        }
                                    });
                                    //$('.zclip').offset({left: btn_copy.offset().left, top: btn_copy.offset().top});
                                });
                            }, true);
                        },
                        before: function(){
                            $.lebox.notify('正在创建链接，请稍候');
                        },
                        failure: function(){
                            $.lebox.error('链接创建失败，请稍候再试', 1200);
                        },
                        error: function(){
                            $.lebox.error('网络异常，请稍候再试', 1200);
                        }
                    });
                }
            }
        },
        
        //回收站操作
        trash: {
            getAll: function(){
                lenoteView._lenote.trash.getAll($.extend(lenoteView.dom.note.getPagination(), {skip: 0}), 100, lenoteView.dom.note.list_callback('trash', 'trash', true));
            },
            scroll: {
                getAll: function(scrollTop){
                    var pager = lenoteView.dom.note.getPagination();
                    lenoteView._lenote.trash.getAll(pager, 100, lenoteView.dom.note.autoLoading.callback(scrollTop, pager.size));
                }
            },
            del: function(){
                if(lenoteView.dom.editor.checkIsOpr(['del'])) return false;
                var noteData = $('#sidebar-c .note-editor').data('note');
                if(noteData && noteData.id){
                    $.lebox.modalbox('彻底删除笔记', lenoteView.dom.category.getConfirmHtml('确定彻底删除笔记"<span class="keyword ellipsis">' + lenoteView.dom.editor.getTitle() + '</span>"？'), function(){
                        $.lebox.modalbox.close();
                        lenoteView._lenote.trash.del([{noteID: noteData.id, noteVersion: noteData.ver}], {
                            success: function(respose){
                                var note = $('#sidebar-b .list-notes li#' + lenoteView.dom.note.getDomID(noteData.id)), cid = lenoteDom.category.getDomID(noteData.cid);
                                
                                //检查当前选中笔记与被删除笔记是否一样，不一样则不操作
                                if(lenoteView.dom.note.isEqualSelected(noteData.id)){
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    //在笔记列表中自动加载被删除笔记的前一个或后一个笔记
                                    var next = note.nextAll('li:not(.date-sep)').first().attr('id') || note.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(next){
                                        lenoteView.note.show(next);
                                    }else{
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(note.prev().hasClass('date-sep')){
                                    var _next = note.next();
                                    if(_next.length == 0 || _next.hasClass('date-sep')){
                                        note.prev().remove();
                                    }
                                }
                                note.remove();
                                
                                $.smartDoing({action: 'del', text: '笔记已彻底删除'});
                                
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                    $('#sidebar-b .content').trigger('scroll');
                                }
                                
                                lenoteDom.category.trash_count(-1);
                                lenoteDom.note.updateIcon();
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'del');
                                $.smartDoing({text: '请稍候，正在删除笔记...'});
                            }
                        });
                    });
                }else{
                    $.lebox.error('网络异常，请刷新后重试！', 800);
                }
            },
            restore: function(){
                if(lenoteView.dom.editor.checkIsOpr(['restore'])) return false;
                var noteData = $('#sidebar-c .note-editor').data('note');
                if(noteData && noteData.id){
                    $.lebox.modalbox('还原笔记', lenoteView.dom.category.getConfirmHtml('确定还原笔记"<span class="keyword ellipsis">' + lenoteView.dom.editor.getTitle() + '</span>"？', '还原'), function(){
                        $.lebox.modalbox.close();
                        lenoteView._lenote.trash.restore([{noteID: noteData.id, noteVersion: noteData.ver}], {
                            success: function(respose){
                                var note = $('#sidebar-b .list-notes li#' + lenoteView.dom.note.getDomID(noteData.id)), cid = lenoteDom.category.getDomID(noteData.cid);
                                
                                //查看是否是已分享或加星标的笔记，如果是则更新相应的笔记数
                                try{
                                    if($.trim(lenoteDom.editor.data.get('shareToken') || '')){
                                        lenoteDom.category.shared_count(1);
                                    }
                                    if(note.children('a.marked.stared').length == 1){
                                        lenoteDom.category.count('stars-notes', 1, false, true);
                                    }
                                }catch(e){}
                                
                                //检查当前选中笔记与被还原笔记是否一样，不一样则不操作
                                if(lenoteView.dom.note.isEqualSelected(noteData.id)){
                                    lenoteView.dom.editor.cleanUI();
                                    lenoteView.dom.editor.data.attachments.clean();
                                    lenoteDom.editor.data.tags.clean();
                                    //在笔记列表中自动加载被还原笔记的前一个或后一个笔记
                                    var next = note.nextAll('li:not(.date-sep)').first().attr('id') || note.prevAll('li:not(.date-sep)').first().attr('id');
                                    if(next){
                                        lenoteView.note.show(next);
                                    }else{
                                        $('#sidebar-b .list-notes').animate({scrollTop: 0}, 500);
                                    }
                                }
                                
                                if(note.prev().hasClass('date-sep')){
                                    var _next = note.next();
                                    if(_next.length == 0 || _next.hasClass('date-sep')){
                                        note.prev().remove();
                                    }
                                }
                                note.remove();
                                
                                //设置被还原笔记分类的笔记数
                                for(var i = 0; i < (respose.note ? respose.note.length : 0); i++){
                                    var _note = respose.note[i],
                                        _category_domid = lenoteDom.category.getDomID(_note.categoryID),
                                        categoryDom = $('#' + _category_domid);
                                    if(categoryDom.length > 0){
                                        //categoryDom.data('ver', _category.categoryVersion);
                                        if(user.getUState('rcid') != _category_domid) lenoteView.dom.category.count(_category_domid, 1, false);
                                    }
                                }
                                
                                $.smartDoing({action: 'del', text: '笔记已还原'});
                                
                                if($('#sidebar-b .list-notes li:not(.date-sep)').length <= 10){
                                    $('#sidebar-b .content').trigger('scroll');
                                }
                                
                                lenoteDom.category.trash_count(-1);
                                lenoteDom.note.updateIcon();
                            },
                            complete: function(status){
                                lenoteView.dom.editor.data.remove('mark');
                            },
                            before: function(){
                                lenoteView.dom.editor.data.add('mark', 'restore');
                                $.smartDoing({text: '请稍候，正在还原笔记...'});
                            }
                        });
                    });
                }else{
                    $.lebox.error('网络异常，请刷新后重试！', 800);
                }
            },
            clear: function(){
                $.lebox.modalbox('清空废纸篓', lenoteView.dom.category.getConfirmHtml('确定清空废纸篓？', '清空'), function(){
                    lenoteView._lenote.trash.clear({
                        success: function(respose){
                            if(lenoteDom.category.isSelected('trash')){
                                lenoteDom.editor.cleanUI();
                                $('#sidebar-b .list-notes').empty();
                                lenoteDom.note.updateIcon();
                            }
                            
                            lenoteDom.category.trash_count(0);
                            $('#lebox-wrap .prompt').css('padding-left', '5px').addClass('success').text('废纸篓已清空！');
                            $.lebox.modalbox.close();
                        },
                        before: function(){
                            //$('#lebox-wrap .prompt').smartLoading({text: '正在清空废纸篓...'});
                            $('#lebox-wrap .prompt').css('padding', '0px').html('<div class="loading" style="margin:5px 0 0 2px;">正在清空废纸篓...</div>');
                        },
                        failure: function(respose){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('应用出现故障，请稍候再试！');
                        },
                        error: function(msg){
                            $('#lebox-wrap .prompt').css('padding-left', '5px').text('清空废纸篓失败，请稍候重试！');
                        }
                    });
                });
            }
        }
    };
})();