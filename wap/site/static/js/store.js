require.config({
    paths: {
        'zepto': 'lib/zepto',
	    'xss': 'lib/xss',
        'underscore': 'lib/underscore',
        'domReady': 'lib/domReady',
        'flipsnap': 'lib/flipsnap'
    },
    shim: {
        underscore: {
             deps: ['zepto', 'xss', 'domReady'],
             exports: '_'
        },
        zepto: {
            exports: '$'
        }
    }
});

var store = {
    helper: {
        tplBtn: {
            set: function(target, type, isShow){
                var _template = _.template($('#btnTPL').html()), targetObj = $(target);
                targetObj.html(_template({type: type || 'free'}));
                if(isShow === true) targetObj.children('.btn').show();
            },
            update: function(tids, type){
                tids = $.trim(tids || '');
                if(!tids) return;
                tids = tids.split(',');
                type = type || 'free';
                if(_.isArray(tids)){
                    for(var i = 0; i < tids.length; i++){
                        var tid = (tids[i]).trim();
                        if(!tid) continue;
                        this.set('._' + tid + ' .additional', type);
                    }
                    $('.additional > .btn').show();
                }
            },
            listen: function(target){
                $(target).on('click', '.btn:not(.progress)', function(event){
                    event.stopPropagation();
                    var _this = $(this), parent = _this.closest('.datasource');
                    if(parent.length !== 1) return;
                    var tid = parent.attr('data-tid'), url = parent.attr('data-dw');
                    if(_this.hasClass('open')){
                        store.client.open(tid);
                    }else{
                        var progressStatus = parent.hasClass('btn-progress-text')? 'progress.text' : 'progress';
                        store.helper.tplBtn.set('._' + tid + ' .additional', progressStatus, true);
                        store.client.download(tid, url);
                    }
                });
            }
        }
    },
    client: {
        download: function(tid, url){
            window.phoneAPI.onDownloadClick(tid, url);
        },
        open: function(tid){
            window.phoneAPI.openTemplate(tid);
        },
        preview: function(tid){
            window.phoneAPI.onPreviewClick(tid);
        },
        getTplStatus: function(tid){
            try{
                window.phoneAPI.getTplStatus(tid || '');
            }catch(e){}
        },
        sendUrl: function(url){
            try{
                window.phoneAPI.sendUrl(url || '');
            }catch(e){}
        }
    },
    api: {
        updateProgress: function(tid, percent){
            //$('._' + tid + ' .additional .btn.progress .used').width(percent + '%');
            $('._' + tid + ' .additional .btn.progress .used').animate({width: percent + '%'}, 300);
        },
        updateStatus: function(tids, type){
            //store.helper.tplBtn.set('._' + tid + ' .additional', type);
            store.helper.tplBtn.update(tids, type || 'open');
        }
    }
};

require(['underscore', 'flipsnap'], function(_, Flipsnap){
    require(['domReady!'], function(doc){
        if($('#container.list').length == 1){
            store.helper.tplBtn.listen('.additional');
            store.helper.tplBtn.set('.additional');
            store.client.getTplStatus();
            
            var img = $('.col-3 > .thumbnail img').first();
            if(img.length === 1){
                var width = img.width(), scale = 0.54, height = width / scale;
                $('.col-3 > .thumbnail img').height(height);
            }
            
            $('.grid').on('click', '.thumbnail', function(event){
                event.stopPropagation();
                var _this = $(this), parent = _this.closest('.datasource');
                if(parent.length !== 1) return;
                store.client.preview(parent.attr('data-tid'));
            });
        }else{
            store.client.sendUrl($('.datasource').attr('data-dw'));
            
            var width = $('.slider-wrap').width(), slider = $('.slider'), thumbs = slider.find('.thumb'), scale = 0.58,
                _width = width * (2 / 3), thumbW = _width - 16, sliderW = thumbs.length * _width;
            slider.width(sliderW);
            thumbs.width(thumbW).height(thumbW / scale);
            
            var distance = ((thumbs.length * width) / (thumbs.length + 1)) - (width - _width), flipsnap = Flipsnap('.slider', {
                distance: distance
            });
            $(flipsnap.element).on('fstouchmove, fstouchend', function(ev){
                var left = Math.abs($('.slider').offset().left || 0), page = Math.floor(left / width);
                if((left % width) >= (_width / 4)) page += 1;
                $('.sliderNav a').removeClass('active').filter('[rel="' + page + '"]').addClass('active');
            }, false);
        }
    });
});