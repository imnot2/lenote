var i18n = lenote.i18n = {
    languages: ['zh', 'zh-cn', 'zh-tw', //中文、简体中文、繁體中文
                'en', 'en-us', 'en-gb', 'en-au', 'en-ca', //英语、美式英语、英式英语、英语-澳大利亚、英语-加拿大
                'ru', 'cs', 'da', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt' //俄语、捷克语、丹麦语、德语、西班牙语、法语、意大利语、日语、朝鲜语、葡萄牙语
               ],
    
    langs: {},
    
    language: 'zh-cn',
    
    setLang: function(lang){
        if(lang && helper.isString(lang) && this.isSupport(lang)) this.language = lang.toLowerCase();
        return this.language;
    },
    
    getLang: function(){
        return this.langs[this.language];
    },
    
    isSupport: function(lang){
        return helper.inArray(lang.toLowerCase(), this.languages) !== -1;
    },
    
    getValue: function(key){
        var lang = this.getLang(),
            args = Array.prototype.slice.call(arguments);
        if(lang){
            args.shift();
            return vsprintf(lang[key] || key || '', args) || key;
        }
        return key;
    },
    
    setValue: function(key, value){
        var lang = this.getLang();
        if(lang){
            lang[key] = value;
        }
    },
    
    //初始化，生成i18n.langs['zh'] = {}
    init: function(){
        for(var i = 0; i < this.languages.length; i++){
            this.langs[this.languages[i].toLowerCase()] = {};
        }
    },
    
    defined: function(lang, items){
        if(this.isSupport(lang)){
            this.langs[lang] = this.langs[lang] || {};
            helper.extend(this.langs[lang], items);
        }
    }
};

i18n.init();