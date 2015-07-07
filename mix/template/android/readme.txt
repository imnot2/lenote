代码结构
assets  默认的系统级资源目录，如图片等
js   	javascript源代码目录，包括模板系统的核心库及第三方模板引擎
tpl  	模板目录
lenoteTemplate.css
lenoteTemplate.js

打包后的代码结构
assets
tpl
lenoteTemplate.css
lenoteTemplate.js

模板安装
android读取模板zip包中的install.ini文件安装模板，安装时需要将模板包重命名为惟一存在的文件夹名称并记录到数据库
提供测试环境给用户：不需要install.ini文件即可调试

模板的内部结构
images 图片资源
icon.jpg 模板列表使用的缩略图
index.html 模板主文件
install.ini 安装文件，由系统在作者提交模板审核时自动生成(需执行代码安全检查)、通过后将其与模板文件一起压缩打包成zip安装包。
	    系统会在该文件中自动添加开发者等信息；定制的信息由用户上传模板包时在上传界面选择定制即可，如分类。
	    系统在打包时将这些定制的信息同时打包到其中即可。
thumbnail_0.jpg 预览图，由thumbnail_开头，允许有多张，从0开始
main.css 模板自定义的样式文件
main.js  模板自定义的脚本文件