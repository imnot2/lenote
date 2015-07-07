define(['backbone', 'model/user', 'model/search', 'collection/note', 'gmu', 'helper'], function(Backbone, user, search, notes, gmu, Helper){
    return Backbone.View.extend({
        el: 'body',
        initialize: function(){
            this.toolbar = new gmu.Toolbar('.toolbar .wrap', {
                title: '',
                leftBtns: ['<a href="javascript:void(0)" class="menuBtn"><span>LENOTE</span></a>'],
                rightBtns: ['<a href="javascript:void(0)" class="searchBtn"><span>Search</span></a>'],
                fixed: true
            });
            
            this.toolbarSub = new gmu.Toolbar('.toolbarsub .wrap', {
                title: '',
                leftBtns: ['<a href="javascript:void(0)" class="menuBtn close"><span>LENOTE</span></a>'],
                rightBtns: ['<a href="javascript:void(0)" class="logoutBtn"><span>注销</span></a>']
            });
            
            //iscoll兼容问题，解决页面整体滑动与点击
            document.addEventListener('touchmove', function (e) {e.preventDefault();}, false);
            //$('#content ul').off('touchstart mousedown', 'li:not(.sep)').on('touchstart mousedown', 'li:not(.sep)', function(e){
            //    e.stopPropagation();
            //});
            
            this.template = _.template($('#note').html());
            this.user = new user(true);
            this.notes = new notes(null, {view: this});
            this.notes.getList(this.user);
            this.iscroll = null;
            this.allowScrollLoading = true;
        },
        
        events: {
            'click .toolbar .menuBtn': 'showMenu',
            'click .seachWrap .seachBtn': 'search',
            'click .toolbar .searchBtn:not(.closeSearch)': 'seachWrapShow',
            'click .toolbar .searchBtn.closeSearch': 'closeSearch',
            'click .toolbar .ui-toolbar-right a': 'toggleClose',
            'click .toolbarsub .menuBtn.close': 'close',
            'click .toolbarsub .logoutBtn': 'logout',
            'click #content ul li.item:not(.sep)': 'show',
            'click #new': 'create'
        },
        
        showMenu: function(e){
            e.stopPropagation();
            $('.toolbarsubcontainer').show();
        },
        
        seachWrapShow: function(e){
            $('.seachWrap .entertBox').attr({'placeholder':'搜索','maxlength':20});
            $('.seachWrap').show();
            console.info(this.toolbarSub);
        },

        search: function(e){
            var val = $('.seachWrap .entertBox').attr('value');
            if(val){                
                var q = new search(null, {view: this});
                q.getList(val,this.user);
            }
        },

        clearNotes: function(){
            $("#content>ul.list").empty();
        },

        selectSearch: function(){
            var input = $('.seachWrap input.entertBox').get(0);
            input.select();
            input.focus();
        },

        toggleClose: function(e){
            $('.toolbar .ui-toolbar-right a').toggleClass('closeSearch');
        },

        closeSearch: function(e){
            $('.seachWrap').hide();
        },

        close: function(e){
            $('.toolbarsubcontainer').hide();
        },
        
        logout: function(e){
            e.stopPropagation();
            this.user.logout();
        },
        
        //scroll: {
        //    bind: function(view){
        //        $('#content').on('scroll', function(e){
        //            var element = $(this),
        //                viewHeight = element.height(),
        //                scrollHeight = element.scrollTop(),
        //                contentHeight = element.children('ul.list').height();
        //            if(contentHeight == 0) return;
        //            if(viewHeight + scrollHeight >= contentHeight){
        //                view.notes.getList(view.user);
        //            }
        //        });
        //    },
        //    unbind: function(){
        //        $('#content').off('scroll');
        //    }
        //},
        
        show: function(e){
            e.stopPropagation();
            var id = this.$(e.currentTarget).attr('_id');
            window.location.href = 'note/' + id + '#~/' + id;
        },
        
        create: function(e){
            window.location.href = 'note/create#new';
        },
        
        getPagination: function(){
            var skip = this.$('#content>ul').children('li.item:not(.sep)').length;
            skip = isNaN(skip)? 0 : skip;
            if(skip < 0) skip = 0;
            if(skip === 0){
                //每个笔记项目的高度-由CSS定义，这里直接写死了
                var perHeight = 95;
                var height = parseInt($('#content').height()) + perHeight;
                var size = Math.ceil(height / perHeight);
                if (size < 20) size = 20;
            }else{
                size = 20;
            }
            return {skip: skip, size: size};
        },
        
        add: function(model){
            //console.warn(model.get('name'));
            var sepDate = dateFormat(model['lastUpdateTime'] || new Date, 'yyyymm'),
                sep = $('#sep_' + sepDate),
                ul = this.$('#content>ul'),
                todos = model.styleType == 1000;
            if(sep.length == 0){
                ul.append(this.template({note: {
                    isSep: true,
                    datetime: sepDate,
                    date: dateFormat(model['lastUpdateTime'] || new Date, 'm月 yyyy年')
                }}));
            };
            
            model['title'] = Helper.unhtml(Helper.filterXSS(model['title']));
            //如果是待办
            if(todos){
                var todosSummaryList = model.summary.paragraphStyle ? model.summary.paragraphStyle == 1 ? $("<ul class='disc'></ul>") : $("<ol class='decimal'></ol>") : $("<ul></ul>"),
                    contents = model.summary.contents,
                    len = contents && contents.length ? contents.length : 0,
                    todosWray = $("<div></div>");

                todosSummaryList.addClass("sumlist ellipsis");

                for(var n= 0; n< (len < 3 ? len : 3); n++){
                    var cont = contents[n],
                        todoStyle = cont.style ? cont.style == 1 ? 'lineThrough' : 'bold' : '';
                    todosWray.append(todosSummaryList.append($("<li "+(todoStyle ? 'class="'+todoStyle+'"':'')+">"+Helper.filterXSS(cont.content)+"</li>")));
                }
                model['summary'] = todosWray.html();
            }else{
                model['summary'] = Helper.unhtml(Helper.filterXSS(model['summary']));
            }         
            ul.append(this.template({note: model}));
        },
        
        bindScroll: function(){
            if(this.iscroll !== null) this.iscroll.destroy();
            var _this = this;
            //this.iscroll = new iScroll('content', {
            //    hScroll: false,
            //    //scrollbars: true,
            //    //mouseWheel: true,
            //    //interactiveScrollbars: true,
            //    //shrinkScrollbars: 'scale',
            //    //fadeScrollbars: true,
            //    onRefresh: function(){
            //        if(this.y != 0){
            //            this.scrollTo(0, 200, 1200, true);
            //        }
            //    },
            //    onScrollMove:function(){
            //        //console.info(this.y);
            //    },
            //    onScrollEnd: function(){
            //        if(_this.allowScrollLoading && this.y < 0 && this.y <= this.maxScrollY){
            //            _this.allowScrollLoading = false;
            //            _this.notes.getList(_this.user);
            //        }
            //    }
            //});
            this.iscroll = new IScroll({
                wrapper: $('#content'),
                scroller: $('#content>ul.list'),
                onRefresh: function(){
                    if(this.y != 0){
                        if(this.y - 200 >= this.maxScrollY){
                            this.scrollTo(0, this.y - 200, 1200);
                        }else{
                            this.scrollTo(0, this.y - 95, 600);
                        }
                    }
                },
                onScrollEnd:function(){
                    if(_this.allowScrollLoading && this.y < 0 && this.y <= this.maxScrollY){
                        _this.allowScrollLoading = false;
                        this.indicator.fade(0, false, true);
                        _this.notes.getList(_this.user);
                    }
                },
                onBeforeScrollStart: function(e){
                    var tag = e.explicitOriginalTarget? e.explicitOriginalTarget : (e.target ? e.target : ''),
                        isClick = $(tag).closest('li.item').length > 0;
                    if(!isClick){
                        e.preventDefault();
                    }
                }
            });
        }
    });
});