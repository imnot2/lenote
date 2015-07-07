/*
 *  author: gejian1@lenovo.com
 *  description: 自定义标签
 */

var lenoteTag = {};
(function(){
    //返回图片的类型值
    function getImageType(ext){
        var result = 256; //图片  TYPE_IMAGE
        switch(ext){
            case 'jpg': result = 257; break; //JPG图片  TYPE_IMAGE_JPG
            case 'bmp': result = 258; break; //BMP图片  TYPE_IMAGE_BMP
            case 'png': result = 259; break; //PNG图片  TYPE_IMAGE_PNG
            case 'gif': result = 260; break; //GIF图片  TYPE_IMAGE_GIF
            case 'jpeg': result = 261; break; //JPEG图片 TYPE_IMAGE_JPEG
        }
        return result;
    }
    //返回文档的类型值
    function getDocType(ext){
        var result = 384; //文档     TYPE_DOCUMENT
        switch(ext){
            case 'doc': result = 385; break; //DOC文档  TYPE_DOCUMENT_DOC
            case 'docx': result = 386; break; //DOCX文档 TYPE_DOCUMENT_DOCX
            case 'ppt': result = 387; break; //PPT文档  TYPE_DOCUMENT_PPT
            case 'xls': result = 388; break; //XLS文档  TYPE_DOCUMENT_XLS
            case 'txt': result = 389; break; //TXT文档  TYPE_DOCUMENT_TXT
            case 'pdf': result = 390; break; //PDF文档  TYPE_DOCUMENT_PDF
            case 'pptx': result = 391; break; //PPTX文档 TYPE_DOCUMENT_PPTX
            case 'xlsx': result = 392; break; //XLSX文档 TYPE_DOCUMENT_XLSX
        }
        return result;
    }
    //返回文件的类型值
    function getFileType(ext){
        var result = 640; //文件   TYPE_FILE
        switch(ext){
            case 'rar': result = 641; break; //RAR文件 TYPE_FILE_RAR
            case 'zip': result = 642; break; //ZIP文件 TYPE_FILE_ZIP
            case 'apk': result = 643; break; //APK文件 TYPE_FILE_APK
        }
        return result;
    }
    //返回音频的类型值
    function getAudioType(ext){
        var result = 512; //音频    TYPE_AUDIO
        switch(ext){
            case 'kk': result = 513; break; //KK音频  TYPE_AUDIO_KK
            case 'mp3': result = 514; break; //MP3音频 TYPE_AUDIO_MP3
            case 'wav': result = 515; break; //WAV音频 TYPE_AUDIO_WAV
            case 'amr': result = 516; break; //AMR音频 TYPE_AUDIO_AMR
            case 'aac': result = 517; break; //AAC音频 TYPE_AUDIO_AAC
            case 'ogg': result = 518; break; //OGG音频 TYPE_AUDIO_OGG
            case 'mid':case 'midi': result = 519; break; //MID音频 TYPE_AUDIO_MID
            case 'ape': result = 520; break; //APE音频 TYPE_AUDIO_APE
        }
        return result;
    }
    //返回视频的类型值
    function getVideoType(ext){
        var result = 1280; //视频     TYPE_VIDEO
        switch(ext){
            case 'mp4': result = 1281; break; //MP4视频  TYPE_VIDEO_MP4
            case 'avi': result = 1282; break; //AVI视频  TYPE_VIDEO_AVI
            case 'mov': result = 1283; break; //MOV视频  TYPE_VIDEO_MOV
            case 'rm': result = 1284; break; //RM视频   TYPE_VIDEO_RM
            case 'rmvb': result = 1285; break; //RMVB视频 TYPE_AUDIO_RMVB
            case 'flv': result = 1286; break; //FLV视频  TYPE_AUDIO_FLV
            case 'mpeg': result = 1287; break; //MPEG视频 TYPE_VIDEO_MPEG
            case '3gp': result = 1288; break; //3GP视频  TYPE_VIDEO_3GP
        }
        return result;
    }
    /*
     *  获取附件的类型值
     *  @name  名称
     *  @type    附件类型，image/document/file/audio/video
     *  说明： 以下类型不需要判断，因为Web端不会产生这种类型的媒体，所以只需要在保存笔记时将这些媒体的type类型数据原样上传即可、不需要做额外的判断
     *      文字 TYPE_TEXT      768
     *      手写 TYPE_HANDWRITE 896
     *      涂鸦 TYPE_DOODLE 1024
     *      待办 TYPE_TODO   1152
     */
    lenoteTag.getMediaTypeValue = function(name, type){
        var ext = utils.getSuffix(name).ext,
             result = 128; //通用类型 TYPE_GENERAL
        if(!type) type = this.getMediaType(name); //当类型为空时验证后辍名
        switch(type){
            case 'image': result = getImageType(ext); break;
            case 'document': result = getDocType(ext); break;
            case 'file': result = getFileType(ext); break;
            case 'audio': result = getAudioType(ext); break;
            case 'video': result = getVideoType(ext); break;
        }
        return result;
    };
    
    /*
     *  当类型值为大类时，重新检查其类型值：一是修复之前的错误附件类型数据、二是在以后添加新类型值时可以重新识别出来
     *  @name 文件名称
     *  @value 当前的类型值
     */
    lenoteTag.validType = function(name, value){
        var ext = utils.getSuffix(name).ext,
             general = [128, 256, 384, 512, 640, 1280];
        if($.inArray(value, general) !== -1){
            return this.getMediaTypeValue(name);
        }else{
            return value;
        }
    };
    
    //根据小类判断其大类，用于判断范围显示缩略图
    lenoteTag.getParentType = function(value){
        if($.inArray(value, [256, 257, 258, 259, 260, 261]) !== -1) return 256; //仅支持的图片显示
        if($.inArray(value, [384, 385, 386, 387, 388, 389, 390, 391, 392, 640, 641, 642, 643]) !== -1) return 384; //文件、文档等
        if($.inArray(value, [512, 513, 514, 515, 516, 517, 518, 519, 520, 521]) !== -1) return 512; //音频
        if($.inArray(value, [1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288]) !== -1) return 1280; //视频
        if($.inArray(value, [128, 768, 896, 1024, 1152, 1408, 1536, 1664, 1792, 1920, 2048]) !== -1) return value; //通用、文字、手写、涂鸦、待办、日期、联系人、地理位置、天气、时间、心情
        return -1; //未识别
    };
    
    //判断附件的类型是否是：image/document/file/audio/video
    lenoteTag.getMediaType = function(name){
        var ext = utils.getSuffix(name).ext, suffix = '';
        switch(ext){
            case 'jpg':case 'jpeg':case 'bmp':case 'gif':case 'png':case 'ico':case 'pcx':case 'tiff':case 'dxf':case 'exif': suffix = 'image';break;
            case 'doc':case 'docx':case 'ppt':case 'pptx':case 'pdf':case 'xls':case 'xlsx':case 'txt':case 'rtf':case 'jnt': suffix = 'document';break;
            case 'rar':case 'zip':case 'apk': suffix = 'file';break;
            case 'kk':case 'mp3':case 'amr':case 'aac':case 'ogg':case 'mid':case 'midi':case 'ape':case 'wav':case 'wma': suffix = 'audio';break;
            case 'avi':case 'rm':case 'rmvb':case 'mkv':case 'wmv':case 'flv':case 'mp4':case 'f4v':case 'mov':case 'mpeg':case '3gp': suffix = 'video';break;
            default: suffix = 'file';
        }
        return suffix;
    };
    
    //判断该类型的媒体对应的自定义标签Web是否支持、如不支持的类型值都显示为附件形式，但在保存时却还需要转成其原来的自定义标签-因为其它设备是支持这些格式的
    lenoteTag.isSupportForWeb = function(value){
        if($.inArray(value, [257, 258, 259, 260, 261]) !== -1) return 'image'; //图片
        if($.inArray(value, [513, 514, 521]) !== -1) return 'audio'; //音频: 目前播放器仅支持mp3、kk音频格式
        return 'attachment';
    };
    
    //通过附件接口上传的媒体需要根据后辍判断其标签是什么，目前除了ln-text/ln-audio/ln-photo，其它都是ln-attachment
    //将音频及附件标签使用button实现，显示模式还是a标签不用改、仅编辑时需要修改为button
    lenoteTag.getTag = function(info, key, noseparate){
        info._type = this.validType(info.title, info._type);
        var type = this.isSupportForWeb(info._type), localID = key || info.clientResourceID, tag = '';
        switch(type){
            case 'image':
                tag = '<img resource="image" key="' + localID + '" src="' + info.url + '" onerror="this.src=\'/assets/images/img404.png\'" title="' + info.title + '" _src="' + info.url + '"/>';
                break;
            case 'audio':
                //tag = '<div class="audio noselect" resource="audio" key="' + localID +'" onselectstart="return false;" unselectable="on" contenteditable="false" ondragstart="return false">' +
                //           '<div class="audio-play" play="0" id="' + utils.uuid('_audio_') + '_' + localID + '" _id="' + localID + '" url="' + info.url + '">' +
                //             '<div class="info">' +
                //               '<div class="title ellipsis clearfix" title="' + info.title + '">' +
                //                  '<span class="name ellipsis">' + info.name + '</span><span class="ext">' + info.type + '</span>' +
                //               '</div>' +
                //               '<div class="desc ellipsis">' +
                //                 '<span class="size">' + info.sizeof + '</span>' +
                //                 (info.fullTime? ('<span class="duration">' + utils.playTimeFormat(info.fullTime) + '</span>') : '') +
                //               '</div>' +
                //             '</div>' +
                //           '</div>' +
                //         '</div>';
                
                tag = (noseparate? '' : '&#8203;') + '<span class="attachskin audioskin" contentEditable="false">' +
                            '<button type="button" class="btnattact" contentEditable="false" onclick="return false;">' +
                                '<div class="audio" resource="audio" key="' + localID +'" contenteditable="false">' +
                                    '<div class="audio-play" play="0" id="' + utils.uuid('_audio_') + '_' + localID + '" _id="' + localID + '" url="' + info.url + '" contenteditable="false">' +
                                       '<div class="info" contentEditable="false">' +
                                         '<div class="title ellipsis clearfix" title="' + info.title + '" contentEditable="false">' +
                                            '<span class="name ellipsis" contentEditable="false">' + info.name + '</span><span class="ext" contentEditable="false">' + info.type + '</span>' +
                                         '</div>' +
                                         '<div class="desc ellipsis" contentEditable="false">' +
                                           '<span class="size" contentEditable="false">' + info.sizeof + '</span>' +
                                           (info.fullTime? ('<span class="duration" contentEditable="false">' + utils.playTimeFormat(info.fullTime) + '</span>') : '') +
                                         '</div>' +
                                       '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</button>' +
                         '</span>' + (noseparate? '' : '&#8203;');
                break;
            default:
                //tag = '<a class="attachment noselect ' + info.ext + '" key="' + localID + '" href="' + info.url + '" resource="attachment" title="' + info.title +
                //          '" onselectstart="return false;" unselectable="on" contentEditable="false" ondragstart="return false" target="_blank">' +
                //          '<span class="info">' +
                //          '<span class="title"><span class="name">' + info.name + '</span><span class="ext">' + info.type + '</span><span class="c"></span></span>' +
                //          //'<span class="desc"><span class="ctime">' + ci.utime + '</span>,<span class="size">' + ci.sizeof + '</span></span>' +
                //          '<span class="desc">' + info.sizeof + '</span>' +
                //          '</span></a><br/>';
                //          //'</span></a>';
                
                //使用span包裹button是为了在使用contentEditable属性后使光标可定位在button后
                tag = (noseparate? '' : '&#8203;') + '<span class="attachskin" contentEditable="false">' +
                //tag = '&nbsp;<span class="attachskin" contentEditable="false">' +
                            //'<button type="button" class="btnattact" onclick="window.open(\'' + info.url + '\', \'_top\');return false;" contentEditable="false">' +
                            '<button type="button" class="btnattact" onclick="window.open(\'' + info.url + '\');return false;" contentEditable="false">' +
                                (UE.browser.ie && UE.browser.version < 10?
                                '<span class="attachment ' + info.ext + '" key="' + localID + '" resource="attachment" title="' + info.title + '" contentEditable="false">'
                                :
                                '<a class="attachment ' + info.ext + '" key="' + localID + '" href="' + info.url + '" resource="attachment" title="' + info.title + '" contentEditable="false" target="_blank">'
                                ) +
                                    '<span class="info" contentEditable="false">' +
                                        '<span class="title" contentEditable="false">' +
                                            '<span class="name" contentEditable="false">' + info.name + '</span>' +
                                            '<span class="ext" contentEditable="false">' + info.type + '</span><span class="c" contentEditable="false"></span>' +
                                        '</span>' +
                                        '<span class="desc" contentEditable="false">' + info.sizeof + '</span>' +
                                    '</span>' +
                                (UE.browser.ie && UE.browser.version < 10? '</span>' : '</a>') +
                            '</button>' +
                         '</span>' + (noseparate? '' : '&#8203;');
                         //'</span>&nbsp;';
        }
        return tag;
    };
    
    //在保存时根据type值检查自定义标签是否需要替换成支持的自定义标签，而不总是显示为ln-attachment
    lenoteTag.validTag = function(info, key){
        var type = this.getParentType(info._type), tag = '';
        switch(type){
            case 256: tag = '<ln-photo key="' + (key || info.clientResourceID) + '"></ln-photo>'; break;
            case 512: tag = '<ln-audio key="' + (key || info.clientResourceID) + '"></ln-audio>'; break;
        }
        return tag;
    };
    
    //获取笔记类型: 根据最后一个非ln-text上传的附件判断笔记类型
    lenoteTag.getNoteStyle = function(){
        var attachment = lenoteDom.editor.data.attachments.getLast(),
              _type = this.getParentType(attachment._type),
              type = 500; //纯文本笔记
        if(attachment){
            switch(_type){
                case 256: type = 400; break; //图片
                case 512: type = (attachment._type == 513 ||attachment._type == 521)? 201 : 200; break; //kk音频、音频
                case 1280: type = 1100; break; //视频
                case 128:case 768: type = 500; break; //纯文本
                case 896: type = 800; break; //手写笔记
                case 1024: type = 900; break; //涂鸦
                case 1152: type = 1000; break; //待办
                case 1408:case 1536:case 1664:case 1792:case 1920:case 2048: type = 500; break; //日期、联系人、地理位置、天气、时间、心情
                default:
                    switch(attachment._type){
                        case 385:case 386: type = 600; break; //doc(x)
                        case 387:case 391: type = 601; break; //ppt(x)
                        case 388:case 392: type = 602; break; //xls(x)
                        case 389: type = 603; break; //txt
                        case 390: type = 604; break; //pdf
                        case 641: type = 700; break; //rar
                        case 642: type = 701; break; //zip
                        case 643: type = 702; break; //apk
                        case 384:case 640: type = 799; break; //其它附件
                    }
            }
        }
        return type;
    };
})();