'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require( 'connect-livereload' )({ port: LIVERELOAD_PORT });
var mountFolder = function ( connect, dir ) {
  return connect.static( require( 'path' ).resolve( dir ) );
};

module.exports = function(grunt) {
	grunt.initConfig({
	    watch: {
	      files: ['src/js/*.js',
	      			'index.html'
	      		],
	      tasks: ['jshint', 'jasmine'],
	      css: {
				files: 'src/css/*.scss',
				tasks: ['sass']
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
			src : ['src/js/slideshow.js'],
			options : {
			    specs : 'slideshow-specs.js',
			    vendor: [
					//'angular.min.js',
					//'angular-mocks.js',
					//'jquery-1.11.1.min.js'
				]
			}
		},
		sass: {
			dist: {
				files: {
					'dist/slideshow.css' : 'src/css/slideshow.scss'
				}
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
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	//grunt.loadNpmTasks('');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask( 'server', ['connect:livereload', 'open', 'watch' ] );


};