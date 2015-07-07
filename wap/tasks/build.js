module.exports = exports = function(grunt){
    //grunt.registerTask('server', ['express']);
    grunt.registerTask('build', function(){
        var env = grunt.option('env') || process.env.NODE_ENV || 'development';
        
        switch(env){
            case 'pro':
            case 'production':
            case 'release':
                //grunt.task.run('clean');
                //grunt.task.run('concat:app');
                //grunt.task.run(['copy:font', 'copy:img']);
                break;
            case 'test':
                break;
            case 'dev':
            case 'development':
            default:
                grunt.task.run('bowercopy');
        }
        
        grunt.log.ok(env + ' builder is successfully.');
    });
};