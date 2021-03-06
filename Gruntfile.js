'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require( 'connect-livereload' )({ port: LIVERELOAD_PORT });
var mountFolder = function ( connect, dir ) {
  return connect.static( require( 'path' ).resolve( dir ) );
};

module.exports = function(grunt) {
	grunt.initConfig({
	    watch: {
	    	options: {
					nospawn: true,
					livereload: LIVERELOAD_PORT
				},
			css: {
				files: 'src/css/*.scss',
				tasks: ['sass']
			},
			livereload: {
		        files: [
		          'index.html',
		          'src/**/*'
		        ],
		        tasks: [ 'build' ]
		      }
	    },
	    jshint: {
	    	files: ['src/js/**/*.js', 'src/js/*.js'],
	      	options: {
	        	globals: {
	          		//jQuery: true,
	          		//angular: true
	        	}
	      	}
	    },
		jasmine : {
			src : ['dist/slideshow.js'],
			options : {
			    specs : 'src/js/tests/slideshow-specs.js'
			}
		},
		sass: {
			dist: {
				files: {
					'dist/slideshow.css' : 'src/css/compiled/compiled-sass.scss'
				}
			}
		},
		concat: {
			js: {
				src: ['src/js/slideshow.js', 'src/js/second.js'],
				dest: 'dist/slideshow.js'
			},
			css: {
				src: ['src/css/template.scss', 'src/css/!(template)*.scss'],
				dest: 'src/css/compiled/compiled-sass.scss'
			}
		},
	    open: { //not added to dependencies yet <<<<<<<<<<<<<<<<<<<<<<<<<<
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
   		},
		connect: { //not added to dependencies yet <<<<<<<<<<<<<<<<<<<<<<<<<<
			options: {
					port: 9000,
					// change this to '0.0.0.0' to access the server from outside
					hostname: 'localhost'
				},
			livereload: {
				options: {
					middleware: function ( connect ) {
						return [
							lrSnippet,
							mountFolder( connect, '.' )
						];
					}
				}
			}
		},
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('');

	// Default task(s).
	grunt.registerTask('build', [ 'jshint', 'concat', 'sass' ]);
	grunt.registerTask('server', ['connect:livereload', 'open', 'watch' ] );
	grunt.registerTask('default', ['build']);


};