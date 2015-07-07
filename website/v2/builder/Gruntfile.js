module.exports = function(grunt){
    grunt.initConfig({
        pkg:  grunt.file.readJSON('package.json'),
        dirs: {
            src: {
                root: '../',
                assets: '<%= dirs.src.root %>assets/'
            },
            dest: {
                root: 'package/',
                assets: '<%= dirs.dest.root %>assets/'
            },
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.src.assets %>',
                    src: ['images/**/*.{png,jpg,gif}'],
                    dest: '<%= dirs.dest.assets %>'
                }]
            }
        },
        clean: ['<%= dirs.dest.root %>', 'web'],
        //options: grunt-zipstream
        zip_directories: {
            build: {
              files: [{
                //filter: 'isDirectory',
                expand: true,
                cwd: '<%= dirs.dest.root %>',
                src: ['**'],
                dest: 'web'
              }]
            }
        }
    });
    
    //载入插件
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-zip-directories');
    
    //注册任务
    grunt.registerTask('default', ['imagemin', 'zip_directories', 'clean']);
};