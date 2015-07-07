module.exports = exports = {
    options: {
        //clean: true,
        srcPrefix: 'bower_components'
    },
    scripts: {
        options: {
            destPrefix: '<%= dirs.src.root %>public/javascripts'
        },
        files: {
            'jquery.js': 'jquery/dist/jquery.js'
        }
    }
};