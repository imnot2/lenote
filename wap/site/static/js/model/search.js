define(['backbone', 'helper'], function(Backbone, Helper, note){
    return Backbone.Collection.extend({
        
        initialize: function(models, options){
            this.bind('add', options.view.add);
            this.view = options.view;
        },
        
        getList: function(val,user){
            var _this = this,
                pagination = this.view.getPagination();

            Helper.notify.show('正在加载列表...');
            Helper.asynRequest(
                '/q/?q='+val,
                {start: pagination.skip, size: pagination.size},
                function(status, response){                       
                    Helper.notify.close();
                    if(status){
                        var notes = response.searchResult.notes;                        
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
                        }else{
                            Helper.notify.show('未找到相关笔记...');
                        } 
                    }else{
                        Helper.notify.show('笔记搜索失败，请稍后重试...');
                    };
                    setTimeout(function(){
                        Helper.notify.close();
                        _this.view.selectSearch();
                    }, 2000);
                },
                //false
                {headers: {'AuthToken': user.id, 'Collect-Data': Helper.getCollectData(user.id)}}
            );
        }
    });
});