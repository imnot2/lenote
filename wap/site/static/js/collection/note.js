define(['backbone', 'helper', 'model/note'], function(Backbone, Helper, note){
    return Backbone.Collection.extend({
        model: note,
        
        initialize: function(models, options){
            this.bind('add', options.view.add);
            this.view = options.view;
        },
        
        getList: function(user){
            var _this = this,
                pagination = this.view.getPagination();
            
            Helper.notify.show('正在加载列表...');
            Helper.asynRequest(
                '/a/note/getAllNotes',
                {start: pagination.skip, size: pagination.size},
                function(status, response){
                    if(status){
                        var notes = response.notes;
                        
                        //_this.view.scroll.unbind();
                        _this.view.allowScrollLoading = false;
                        if(notes){
                            if(notes.length === pagination.size){
                                //_this.view.scroll.bind(_this.view);
                                _this.view.allowScrollLoading = true;
                            }
                            
                            if(notes.length > 0){
                                $.each(notes, function(i, item){
                                    //_this.view.add(new note(item));
                                    //_this.add(new note(item));
                                    _this.view.add(item);
                                });
                                if(_this.view.iscroll === null){
                                    _this.view.bindScroll();
                                }else{
                                    _this.view.iscroll.refresh();
                                }
                            }
                        }
                        
                        Helper.notify.close();
                    }else{
                        user.logout('会话过期', '您的会话已过期，需要重新登录哦~');
                    }
                },
                {headers: {'AuthToken': user.id, 'Collect-Data': Helper.getCollectData(user.id)}}
            );
        }
    });
});