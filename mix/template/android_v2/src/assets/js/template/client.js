(function(template){
    //供模板系统调用的客户端API
    //var clientAPI = window.phoneAPI, client = template.client = {
    var clientAPI = window.phoneAPI;
    template.client = {
        //全局接口，所有的结果都以json格式字符串返回。支持同步与异步的数据返回方式
        getDevice: function(){ //获取设备信息，目前仅需要返回设备的宽度、高度(单位需要换算成px)
            try{
                return template.helper.parseResult(clientAPI.getDeviceInfo());
            }catch(e){
                return {width: document.body.scrollWidth, height: document.body.scrollHeight};
            }
        },
        
        //如果接口有参数id(位置id)则android端可以使用异步的方式返回(调用模板设置模块信息的方法)、否则直接返回
        getWeather: function(id){ //获取天气，返回华氏与摄氏度、晴/阴...、污染度等
            return template.helper.parseResult(clientAPI.getWeather(id));
        },
        
        getGeoLocation: function(id){ //获取地理位置，返回国家、省、市、县、镇、街道、路等
            return template.helper.parseResult(clientAPI.getGeoLocation(id));
        },
        
        setKeyboard: function(isPopup){ //id用于弹出键盘之后回调，用来支持设置焦点。暂不需要支持回调
            try{
                clientAPI.setKeyboard(isPopup);
            }catch(e){
                //this.log('<MSG>' + e.message + '<STACK>' + e.stack);
            }
        },
        
        showToast: function(message){ //Toast接口
            clientAPI.showToast(message);
        },
        
        log: function(msg){
            try{
                var format = helper.dateTime.format,
                    t = format(null, 'y:yyyy') + '-' + format(null, 'm:m') + '-' + format(null, 'd:d') + ' ' +
                        format(null, 'h:H') + ':' + format(null, 'M:i') + ':' + format(null, 's:s');
                clientAPI.jslog(t + ': ' + msg);
            }catch(e){}
        },
        
        setResult: function(m, data){ //向客户端传递返回的数据，因为android不能直接从javascript中获取返回值。m即java调用js时的方法名，data是json数据
            clientAPI.setResult(m, helper.stringify(data));
        },
        
        //控件接口
        controls: {
            audio: { //音频控件
                /* @id: 位置id, 用于客户端回调时回传; @rid: 资源id, 即local_id
                 * 点击(click/touchStart): 如果rid为空时则直接打开录音界面录制，不为空时则播放音频
                 * 长按: rid不为空时则弹出选择菜单：替换音频、删除音频，否则什么都不做
                 * 在弹出菜单界面点击菜单外任何区域隐藏弹出的菜单
                 * 如果在录音界面，客户端需要判断无论是点击还是长按都应什么都不做
                 */
                start: function(id, rid){ //播放或继播, 如果有其它音频正在播放需要先停止正在播放的音频
                    clientAPI.audioStart(id, rid);
                },
                pause: function(id, rid){ //暂停
                    clientAPI.audioPause(id, rid);
                },
                stop: function(id, rid){ //停止
                    clientAPI.audioStop(id, rid);
                },
                record: function(id){ //录音
                    clientAPI.audioRecord(id);
                },
                recording: function(){ //是否正在录音，用于在录音时屏蔽界面上所有的事件
                    return clientAPI.isRecording(); //返回yes或no
                },
                taphold: function(id, rid){ //长按弹出菜单, rid暂时未用到
                    clientAPI.audioTaphold(id, rid);
                }
            },
            image: { //图片控件
                /*
                 * 点击(click/touchStart): rid为空时直接打开相机(因为拍照界面可以选择图库图片，所以不需要弹出菜单)，不为空时则查看大图
                 * 长按: rid不为空时弹出菜单：替换图片、删除图片，为空时啥都不做
                 */
                openCamera: function(id, width, height){ //打开相机, 宽高用于选完照片后截取指定区域(截取框可以拖动选择截取的区域)
                    clientAPI.showSelectPhotoDialog(id, width, height);
                },
                preview: function(id, rid){ //查看大图
                    clientAPI.imagePreview(id, rid);
                },
                createThumbs: function(id, rid, width, height){ //创建缩略图
                    clientAPI.createThumbs(id, rid, width, height);
                },
                taphold: function(id, rid, width, height){ //长按弹出菜单
                    clientAPI.imageTaphold(id, rid, width, height);
                }
            },
            date: { //日期控件
                /*
                 * @timestamp时间戳，单位秒，日历控件根据此值(没有则是当前值)高亮选择该日期
                 * 日期控件没有长按事件，即日期控件是始终有值的、空时即显示当前日期及时间
                 */
                select: function(id, timestamp){
                    clientAPI.dateSelect(id, timestamp); //返回{timestamp: 1394590731024}
                }
            },
            time: { //时间控件
                select: function(id, timestamp){
                    clientAPI.timeSelect(id, timestamp);
                }
            },
            contacts: function(id, members){ //联系人控件, @members是成员列表以,间隔
                clientAPI.listContacts(id, members); //返回的成员列表以,间隔
            },
            mood: function(id, content){ //心情控件, 0开心、1兴奋、2平淡、3忧愁、4生气
                clientAPI.moodSelect(id, content);
            },
            weather: function(id, content){ //天气控件, 0晴、1多云、2雨、3雪、4霾
                clientAPI.weatherSelect(id, content);
            }
        }
    };
})(lenote.template);