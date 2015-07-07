/*
 *  author: gejian1@lenovo.com
 *  description: lenote API
 */
(function(){
   /*
    *   全局变量定义
    *      caches:  缓存存储
    *      prefix:   api地址前辍，由服务器中反向代理配置定义
    *      doing:   用于控制同类的ajax请求状态
    */
   var caches = {}, prefix = '/a/', doing = {};
   
   /*
    *   向lenote API请求数据
    *   params:
    *       url:            远程地址
    *       data:         lenote api参数
    *       callback:   请求发送前/返回后的回调参数
    *       useCache: 是否将请求的结果缓存
    *       isMultiple: 是否允许同类请求同时存在，如果为false则同一类请求只能有一个，后面的一个请求会直接被放弃，不会使用队列
    *       key:           ajax请求状态的key，默认是url
    */
   var sendRequest = function(url, data, callback, useCache, isMultiple, key){
       key = key || url;
       if(doing[key] === true && !isMultiple) return;
       
       //调用回调函数中的初始化函数
       if(typeof callback.init == 'function'){
           callback.init();
       }
       
       //缓存处理
       if(useCache && caches[url]){
           return caches[url];
       }else if(caches[url]){
           delete caches[url];
       }
       
       doing[key] = true;
       
       $.ajax((key == 'note/search'? '' : prefix) + url, {
           data:  JSON.stringify(data),
           beforeSend: function(xhr){
               if(typeof callback.before == 'function') callback.before();
           },
           success: function(respose, status){
                if(status == 'success' && respose.returnCode == '200'){
                    if(useCache) caches[url] = respose;
                    if(typeof callback.success == 'function') callback.success(respose);
                }else{
                    if(typeof callback.failure == 'function'){
                        callback.failure(respose);
                    }else{
                        $.lebox.error('数据请求失败，请稍后重试！');
                    }
                }
           },
           complete: function(xhr, status){
               delete doing[key];
               if(typeof callback.complete == 'function') callback.complete(status);
           },
           error: function(xhr, msg){
               if(typeof callback.error == 'function'){
                   callback.error(msg);
               }else{
                   $.lebox.error('数据请求异常，请稍后重试！');
               }
           }
       });
   };
   
   /*
    *   lenote api对象
    *   params:
    *       token:    lenote api token
    */
   lenote = function(token, header){
       //this.token = token;
       //lenote.token = token;
       //ajax全局变量定义
        $.ajaxSetup({
           type: "POST", dataType: "json", cache: false,
           contentType: 'application/json; charset=utf-8',
           headers: $.extend({'AuthToken': token, 'Collect-Data': 'v1/web///web///' + token + '/web'}, header || {})
        });
   };
   
   //lenote api prototype
   lenote.prototype = {       
       //缓存操作
       cache: {
           clean: function(){
               caches = {};
           },
           del: function(key){
               if(caches[key]) delete caches[key];
           },
           get: function(key){
               return caches[key];
           }
       },
       
       //笔记本(组)相关API
       category: {
           //获取所有笔记本(组)列表
           getAll: function(id, isRecursive, callback, useCache){
               if(!id) return;
               //是否递归检索笔记本(组)
               isRecursive = isRecursive? isRecursive : false;
               sendRequest('note/getCategoryList', {categoryID: id, isRecursive: isRecursive}, callback, useCache);
           },
           //添加新笔记本(组)
           add: function(parentId, title, callback){
               /*
                *  params:
                *     categoryLogoId: 用户自选笔记本(组)图标ID
                */
               title = utils.html(title);
               sendRequest('note/addCategory', {categoryName: title, parentCategoryID: parentId, categoryLogoID: 0}, callback);
           },
           //更新笔记本(组)
           update: function(id, title, parentId, version, callback){
               title = utils.html(title);
               sendRequest('note/editCategory', {categoryID: id, categoryName: title, parentCategoryID: parentId, version: version, categoryLogoID: 0}, callback);
           },
           //删除笔记本(组)
           del: function(id, version, callback){
               //version = parseInt(version);
               sendRequest('note/delCategory', {categoryID: id, version: version}, callback);
           }
       },
       
       //星标相关API
       star: {
           /* 设置星标或取消星标 */
          mark: function(id, isMarked, callback){
              if(!id) return false;
              sendRequest('note/mark', {noteID: id, isMarked: isMarked || false}, callback, false, true, 'note/mark/' + id); //同一篇笔记只允许有一个请求存在
          },
           /*
            *   获取所有星标笔记
            *   params:
            *      pagination: 分页
            *      summaryCount: 获取的笔记摘要长度
            *      callback:  回调函数
            */
           getAll: function(pagination, summaryCount, callback){
               if(typeof summaryCount != 'number') summaryCount = 100;
               //note/getNoteList用于将请求状态标识为与获取笔记列表一样，以防星标笔记列表和笔记列表的请求冲突导致页面布局不一致
               sendRequest('note/getMarkedNote', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           }
       },
       
       //笔记分享相关API
       share: {
           //创建外链分享
           create: function(id, callback, type, expire){
               if(!id) return;
               type = type || 1, expire = expire || 0;
               sendRequest('share/creatShareLink', {nodeID: id, nodeType: type, expireTime: expire}, callback);
           },
           del: function(key, callback){
               if(!key) return;
               sendRequest('share/deleteShareLink', {linkID: key}, callback);
           },
           get: function(id, callback, type){
               if(!id) return;
               sendRequest('share/getShareLinkId', {nodeID: id, nodeType: type || 1}, callback);
           },
           getContent: function(key, callback, path){
               if(!key) return;
               sendRequest('share/getShareLinkContent', {shareLinkID: key, idPath: path || '.'}, callback);
           },
           getAll: function(pagination, summaryCount, callback){
               if(typeof summaryCount != 'number') summaryCount = 100;
               sendRequest('note/getAllShareNote', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           }
       },
       
       //笔记相关API
       note: {
           //获取所有笔记
           getAll: function(pagination, summaryCount, callback){
               if(typeof summaryCount != 'number') summaryCount = 100;
               //同note/getMarkedNote接口，用于标识同类的接口不能同时请求
               sendRequest('note/getAllNote', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           },
           //获取笔记本(组)的笔记列表
           getListByCategory: function(cid, pagination, summaryCount, callback, isMultiple){
               if(!cid) return;
               if(typeof summaryCount != 'number') summaryCount = 100;
               sendRequest('note/getNoteList', {categoryID: cid, start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, isMultiple);
           },
           //搜索
           query: function(q, pagination, callback){
               sendRequest('/q/?' + $.param({q: q}), {start: pagination.skip, size: pagination.size}, callback, false, false, 'note/search');
           },
           //获取笔记
           get: function(id, callback, isMultiple){
               if(!id) return false;
               sendRequest('note/getNote', {noteID: id}, callback, false, isMultiple);
           },
           //增加新笔记
           add: function(cid, title, content, isMarked, attachments, callback, tags, styleType){
               title = $.trim(utils.html(title));
               tags = tags || [];
               styleType = styleType || 0;
               if(!cid || !title) return;
               
               var error_callback = function(respose){
                   if(typeof callback.fail == 'function') callback.fail(respose);
                   //$.lebox.error('不能保存笔记，请手动复制后重试！', 2000);
                   $.smartDoing({action: 'del', text: '保存失败，请手动复制后重试！', statusClass: 'error'});
               };
               var summary = utils.html(utils.strip_tags(content)).substr(0, 100);
               sendRequest('note/addNote', {categoryID: cid, title: title, content: content, isMarked: isMarked, resource: attachments, tagRelation: tags, styleType: styleType, summary: summary}, $.extend({
                   failure: error_callback,
                   error: error_callback
               }, callback));
           },
           //更新笔记
           update: function(cid, id, title, content, version, attachments, callback, tags, styleType){
               title = $.trim(utils.html(title));
               tags = tags || [];
               styleType = styleType || 0;
               if(!cid || !id || !title) return;
               
               var error_callback = function(respose){
                   if(typeof callback.fail == 'function') callback.fail(respose);
                   //$.lebox.error('不能更新笔记，请手动复制后重试！', 2000);
                   $.smartDoing({action: 'del', text: '更新失败，请手动复制后重试！', statusClass: 'error'});
               };
               var summary = utils.html(utils.strip_tags(content)).substr(0, 100);
               sendRequest('note/editNote', {categoryID: cid, noteID: id, title: title, content: content, version: version, resource: attachments, tagRelation: tags, styleType: styleType, summary: summary}, $.extend({
                   failure: error_callback,
                   error: error_callback
               }, callback));
           },
           //删除笔记
           del: function(id, version, callback){
               var error_callback = function(){
                   //$.lebox.error('删除笔记失败，请刷新后重试！', 2000);
                   $.smartDoing({action: 'del', text: '删除笔记失败，请刷新后重试！', statusClass: 'error'});
               };
               sendRequest('note/delNote', {noteID: id, version: version}, $.extend({
                   failure: error_callback,
                   error: error_callback
               }, callback));
           }
       },
       
       //回收站相关API
       trash: {
           //回收站笔记列表
           getAll: function(pagination, summaryCount, callback){
                if(typeof summaryCount != 'number') summaryCount = 100;
                //同note/getAllNote接口，用于标识同类的接口不能同时请求
                sendRequest('note/getRecycleNoteList', {start: pagination.skip, size: pagination.size, summaryCharCount: summaryCount}, callback, false, false, 'note/getNoteList');
           },
           //彻底删除笔记
           del: function(notes, callback){
               sendRequest('note/deleteNoteForever', {notes: notes}, callback);
           },
           //清空回收站
           clear: function(callback){
               sendRequest('note/cleanRecycle', {}, callback);
           },
           //还原/恢复笔记:notes: [{noteID: id, version: version},]
           restore:function(notes, callback){
               sendRequest('note/recoverNote', {notes: notes}, callback);
           }
       }
   };
})();