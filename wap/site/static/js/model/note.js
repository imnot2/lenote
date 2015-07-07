define(['backbone', 'helper'], function(Backbone, Helper){
    return Backbone.Model.extend({
        getNote: function(token, view){
            var _this = this;
            
            Helper.notify.show('正在加载笔记...');
            Helper.asynRequest(
                '/a/note/getNote',
                {noteID: _this.id},
                function(status, response){
                    _this.set({
                        cid: response.categoryID, version: response.noteVersion, isMarked: response.isMarked,
                        resources: response.resources, styleType: response.styleType, tags: response.tags
                    });
                    view.show(response);
                    Helper.notify.close();
                },
                {headers: {'AuthToken': token, 'Collect-Data': Helper.getCollectData(token)}}
            );
        },
        
        saveNote: function(token, view, title, content, noNotify){
            var _this = this;
            
            title = $.trim(Helper.filterXSS(title));
		   content = Helper.filterXSS(content);
            var _content = Helper.trim(Helper.strip_tags(content));
            //if(_.isEmpty(_content)) _content = $.trim(Helper.trim(content));
            _content = Helper.html(_content);
            if(_.isEmpty(title)){
                if(_.isEmpty(_content)){
                    title = '无标题笔记';
                }else{
                    title = _content.substring(0, 30);
                }
            }
            title = Helper.trim(title);
            summary = _content.substr(0, 100);
            
            var tags = this.get('tags');
            tags = _.isEmpty(tags)? [] : _.map(tags, function(o){return _.extend(_.pick(o, 'tagName'), {tagIcon: 0})});
            
            if(!noNotify) Helper.notify.show('正在保存笔记...');
            Helper.asynRequest(
                '/a/note/updateNote',
                {
                    noteID: _this.id, categoryID: this.get('cid'), title: title, content: content, noteVersion: this.get('version'),
                    summary: summary, resources: this.get('resources'), styleType: this.get('styleType'), tags: tags
                },
                function(status, response){
                    _this.set({version: response.noteVersion});
                    if(response.returnCode == 412){
                        _this.saveNote(token, view, title, content, true);
                    }else{
                        view.backDetail();
                        Helper.notify.close();
                    }
                },
                {headers: {'AuthToken': token, 'Collect-Data': Helper.getCollectData(token)}}
            );
        },
        
        markdNote: function(token, view){
            var _this = this, isMarked = !this.get('isMarked');
            
            Helper.notify.show(isMarked? '正在添加星标...' : '正在删除星标');
            Helper.asynRequest(
                '/a/note/markNote',
                {noteID: _this.id, isMarked: isMarked},
                function(status, response){
                    _this.set({isMarked: !_this.get('isMarked')});
                    $('.popup-menu').toggle();
                    $('.popup-menu dd.markd span').text(isMarked? '取消星标' : '添加星标');
                    Helper.notify.close();
                },
                {headers: {'AuthToken': token, 'Collect-Data': Helper.getCollectData(token)}}
            );
        },
        
        delNote: function(token, view, noNotify){
            var _this = this;
            
            if(!noNotify) Helper.notify.show('正在删除笔记...');
            Helper.asynRequest(
                '/a/note/deleteNote',
                {noteID: _this.id, noteVersion: this.get('version')},
                function(status, response){
                    if(response.returnCode == 412){
                        _this.set({version: response.noteVersion});
                        _this.delNote(token, view, true);
                    }else{
                        view.backList();
                        Helper.notify.close();
                    }
                },
                {headers: {'AuthToken': token, 'Collect-Data': Helper.getCollectData(token)}}
            );
        },
        
        createNote: function(token, view, title, content){
            var _this = this;
            
            title = $.trim(Helper.filterXSS(title));
		   content = Helper.filterXSS(content);
            var _content = Helper.trim(Helper.strip_tags(content));
            //if(_.isEmpty(_content)) _content = $.trim(Helper.trim(content));
            if(_.isEmpty(title)){
                if(_.isEmpty(_content)){
                    title = '无标题笔记';
                }else{
                    title = _content.substring(0, 30);
                }
            }
            title = Helper.trim(title);
            summary = _content.substr(0, 100);
            content = Helper.toHtml(Helper.unhtml(content));
            
            Helper.notify.show('正在保存笔记...');
            Helper.asynRequest(
                '/a/note/createNote',
                {title: title, content: content, summary: summary},
                function(status, response){
                    view.backList();
                    Helper.notify.close();
                },
                {headers: {'AuthToken': token, 'Collect-Data': Helper.getCollectData(token)}}
            );
        }
    });
});