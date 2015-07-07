/*
 * 1. 安装NodeJS
 * 2. sudo npm install -g grunt-cli
 * 3. 进入项目根目录执行npm install命令安装依赖包(npm install grunt --save-dev / npm init)
 * 4. 运行grunt命令打包SDK
 */
module.exports = function(grunt){
	grunt.initConfig({
		pkg:  grunt.file.readJSON('package.json'),
		dirs: {
			src: {
				root: 'src/',
				assets: '<%= dirs.src.root %>assets/',
				tpl:  '<%= dirs.src.root %>tpl/',
			},
			dest: {
				root: 'dist/',
				assets: '<%= dirs.dest.root %>assets/',
				tpl: '<%= dirs.dest.root %>tpl/',
			},
		},
		concat: {
			options: {
				//separator: ';',
				stripBanners: true
			},
			dist: {
				files: {
					//'<%= dirs.dest.assets %>js/1.js': ['<%= dirs.src.assets %>js/lib/hammer.js', '<%= dirs.src.assets %>js/lib/sprintf.js', '<%= dirs.src.assets %>js/lenote.js',
					'<%= dirs.dest.assets %>js/1.js': ['<%= dirs.src.assets %>js/lib/*.js', '<%= dirs.src.assets %>js/lenote.js',
													   '<%= dirs.src.assets %>js/helper.js', '<%= dirs.src.assets %>js/i18n.js',
													   '<%= dirs.src.assets %>js/template/i18n/*.js', '<%= dirs.src.assets %>js/template.js',
													   '<%= dirs.src.assets %>js/transform.js'],
					'<%= dirs.dest.assets %>js/2.js': ['<%= dirs.src.assets %>js/template/helper.js', '<%= dirs.src.assets %>js/template/client.js',
													   '<%= dirs.src.assets %>js/template/layout.js', '<%= dirs.src.assets %>js/template/controls.js',
													   '<%= dirs.src.assets %>js/template/api.js'],
					'<%= dirs.dest.assets %>js/3.js': '<%= dirs.src.assets %>js/template/controls/*.js'
				}
			},
			combine: {
				src: ['<%= dirs.dest.assets %>js/1.js', '<%= dirs.dest.assets %>js/2.js', '<%= dirs.dest.assets %>js/3.js'],
				dest: '<%= dirs.dest.assets %>js/all.js'
			}
		},
		strip: {
			built: {
				src: '<%= dirs.dest.assets %>js/all.js',
				dest: '<%= dirs.dest.assets %>js/all.built.js',
				//options : {
				//    nodes : ['console.log', 'debug'],
				//    inline : true
				//}
			}
		},
		//qunit: {
		//    files: '<%= dirs.src.tpl %>/**/*.html'
		//},
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				eqeqeq: true,
				//undef: true,
				//boss: true,
				boss: false,
				unused: true,
				noempty: true,
				//在指定文件中添加:
				/* jshint ignore:start */
				// Code here will be linted with ignored by JSHint.
				/* jshint ignore:end */
				//或者在指定文件中添加:
				/* ignoreThis(); //jshint ignore:line */
				//ignores: ['<%= dirs.src.assets %>js/lib/hammer.js'],
				ignores: ['<%= dirs.src.assets %>js/lib/**/*.js'],
				globals: {
					//window: false,
					//jQuery: true,
					console: true,
				}
			},
			//beforeconcat: ['<%= dirs.src.assets %>js/**/*.js'],
			beforeconcat: ['<%= dirs.src.root %>**/*.js'],
			afterconcat: '<%= dirs.dest.assets %>js/all.built.js'
		},
		csslint: {
			lax: {
			  options: {
				import: false
			  },
			  src: ['<%= dirs.src.root %>**/*.css']
			}
		},
		htmlhint: {
			check: {
				options: {
				  'tag-pair': true,
				  'tagname-lowercase': true,
				  'attr-lowercase': true,
				  'attr-value-not-empty': true,
				  'attr-value-double-quotes': true,
				  'doctype-first': true,
				  'tag-self-close': true,
				  'spec-char-escape': true,
				  'id-unique': true,
				  //'src-not-empty': true,
				  'head-script-disabled': true,
				  //'img-alt-require': true,
				  //'doctype-html5': true,
				  //'id-class-value': true,
				  'style-disabled': true
				},
				src: ['<%= dirs.src.root %>**/*.html']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: '<%= dirs.dest.assets %>js/all.built.js',
				dest: '<%= dirs.dest.root %>all.js'
			},
			//test: grunt uglify:afterCopy
			afterCopy: {
				options: {
					banner: ''
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.dest.root %>',
					src: ['tpl/**/*.js'],
					dest: '<%= dirs.dest.root %>'
				}]
			}
		},
		cssmin: {
			options: {
				banner: '<%= uglify.options.banner %>'
			},
			combine: {
				//src: '<%= dirs.src.assets %>css/*.css',
				src: '<%= dirs.dest.assets %>css/*.css',
				dest: '<%= dirs.dest.root %>all.css'
			},
			afterCopy: {
				options: {
					banner: ''
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.dest.root %>',
					src: ['tpl/**/*.css'],
					dest: '<%= dirs.dest.root %>'
				}]
			}
		},
		replace: {
			build: {
				src: ['<%= dirs.dest.root %>all.css'],
				overwrite: true,
				replacements: [{
					from: 'url(../',
					to: 'url(assets/'
				}]
			},
			path: {
				src: ['<%= dirs.dest.tpl %>/**/*.{js,css,html}','!<%= dirs.dest.tpl %>diary_02/**/*'],
				overwrite: true,
				replacements: [{
					from: '../../',
					to: 'file:///android_asset/template/'
				}]
			}
		},
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.src.assets %>images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '<%= dirs.dest.assets %>/images/'
				}]
			},
			afterCopy: {
				files: [{
					expand: true,
					cwd: '<%= dirs.src.root %>',
					src: ['tpl/**/*.{png,jpg,gif}'],
					dest: '<%= dirs.dest.root %>'
				}]
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: '<%= dirs.src.root %>',
					src: ['tpl/**'],
					dest: '<%= dirs.dest.root %>'
				}]
			},
			tpl:{
				files: [{
					expand: true,
					cwd: '<%= dirs.dest.root %>',
					src: ['tpl/**'],
					filter: function(src){
						return src.indexOf('diary_02') == -1
					}
				}]
			}
		},
		asset_cachebuster: {
			options: {
				buster: Date.now(),
				ignore: [],
				htmlExtension: 'html'
			},
			afterConcat: {
				files: {
					'<%= dirs.dest.assets %>js/all.js': ['<%= dirs.dest.assets %>js/all.js']
				}
			},
			beforeCssmin: {
				files: [{
					expand: true,
					cwd: '<%= dirs.src.assets %>',
					src: ['css/**/*.css'],
					dest: '<%= dirs.dest.assets %>'
				}]
			},
			build: {
				files: [{
					expand: true,
					cwd: '<%= dirs.dest.root %>',
					//src: ['tpl/**/*.html'],
					src: ['tpl/**/*.{html,css,js}'],
					dest: '<%= dirs.dest.root %>'
				}]
			}
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true,
				useShortDoctype: true
			},
			files: {
				expand: true,
				//cwd: '<%= dirs.src.root %>',
				cwd: '<%= dirs.dest.root %>',
				src: ['tpl/**/*.html'],
				dest: '<%= dirs.dest.root %>'
			}
		},
		//clean: ['<%= dirs.dest.assets %>js', '<%= dirs.dest.assets %>css'],
		clean: {
			build: ['<%= dirs.dest.assets %>js', '<%= dirs.dest.assets %>css'],
			release: ['<%= dirs.dest.root %>', 'template', 'tpl'],
			rmtpl:{
				src: ['<%= dirs.dest.root %>tpl/**/*'], 
				filter: function(src){
					return src.indexOf('diary_02') == -1;
				}
			}
		},
		//zip: {
		//    //'template.zip': ['<%= dirs.dest.root %>**/*']
		//    build: {
		//        cwd: '<%= dirs.dest.root %>',
		//        src: '<%= dirs.dest.root %>**',
		//        dest: 'template.zip',
		//        compression: 'DEFLATE'
		//    }
		//}
		zip_directories: {
			build: {
				files: [{
					expand: true,
					cwd: '<%= dirs.dest.root %>',
					src: ['**'],
					dest: 'template'
				},{
					expand: true,
					cwd: 'tpl',
					src: ['**'],
					dest: 'tpl'
				}]
			}
		}
	});

	// 载入concat和uglify插件，分别用于合并和压缩
	//grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	require('load-grunt-tasks')(grunt);

	//注册任务
	grunt.registerTask('test', ['jshint:beforeconcat', 'htmlhint']);
	//grunt.registerTask('default', ['concat', 'strip', 'jshint:afterconcat', 'uglify']);
	grunt.registerTask('default', ['concat', 'asset_cachebuster:afterConcat', 'strip', 'uglify:build', 'asset_cachebuster:beforeCssmin',
								   'cssmin:combine', 'imagemin:dynamic', 'copy:main', 'asset_cachebuster:build', 'uglify:afterCopy',
								   'cssmin:afterCopy', 'imagemin:afterCopy', 'htmlmin', 'replace', 'replace:path', 'copy:tpl', 'clean:rmtpl', 'clean:build', 'zip_directories', 'clean:release']);
};