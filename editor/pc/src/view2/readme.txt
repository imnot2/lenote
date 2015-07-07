说明
接口名(提供方)
音频播放具有排他性，即同时只能有一个音频在播放

1.window.external.getResInfo(key) (PC)
获取资源信息
返回的字段
fUrl 		文件路径
fName 		文件名
fTime 		创建时间
fullTime 	音频文件的时长
fSize 		文件大小（字符串格式， 例："20KB"）
fSuffix 	后缀名(.jpg)
key 		资源的localid
width 		图片宽度
height 		图片高度
mkey   		mix元素
startTime 	mix元素开始时间

2.window.external.openFile(key) (PC)
双击附件时调用

3.window.external.play(id:私有ID, key:资源标识, type:mix或normal) (PC)
播放音频或者继续播放

4.window.external.pause(id:私有ID, key:资源标识) (PC)
暂停

5.window.external.stop(id:私有ID, key:资源标识) (PC)
停止播放

6.window.api.show(html) (IE)
笔记解析显示

7.window.api.start(id) (IE)
在pc端点击时回调

8.window.api.pause(id) (IE)
暂停

9.window.api.stop(id) (IE)
播放结束

10.window.api.slideTo(id:回传的ID, second:当前秒, speed:速度)