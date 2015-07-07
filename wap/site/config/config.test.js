module.exports = function(root){
    return {
        domain: 'http://test2.lenote.com',
        host: 'http://test2.lenote.com/m/',
        couchbase: {
            host: '192.168.1.103:11311',
            user: 'supernote_cache',
            password: 'lenote2014',
            prefix: 'omsWeb_',
            maxAge: 86400
        },
        mariadb: {
            host: '192.168.1.101',
            port: 3316,
            user: 'oms',
            password: 'lenote2013',
            database: 'lnoms'
        },
        view: root + '/views',
        maxAge: 604800,
        secret:'*&$^*&(*&$%@#@#$@!#$@%((()*()^#$%$#%@#$%@#$%$#',
        port: 3000,
        api: 'http://192.168.1.102:8080/supernote/v2/',
        store: {
            api: 'http://192.168.1.102:8080/supernote-store/',
            download: 'http://192.168.1.102:81/store/download/'
        }
    };
};