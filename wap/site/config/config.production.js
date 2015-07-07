module.exports = function(root){
    return {
        domain: 'http://n.lenovo.com',
        host: 'http://n.lenovo.com/m/',
        couchbase: {
            host: '172.17.120.20:11311',
            user: 'supernote_cache',
            password: 'lenote2014',
            prefix: 'omsWeb_',
            maxAge: 86400
        },
        mariadb: {
            host: '172.17.120.12',
            port: 3306,
            user: 'oms',
            password: 'lenote2013',
            database: 'lnoms'
        },
        view: root + '/views',
        maxAge: 604800,
        secret:'*&$^*&(*&$%@#@#$@!#$@%((()*()^#$%$#%@#$%@#$%$#',
        port: 3000,
        api: 'http://localhost/supernote_api/',
        store: {
            api: 'http://localhost/store_api/',
            download: 'http://store.supernote.lenovomm.com:8000/store/download/'
        }
    };
};