module.exports = function(grunt) {
	grunt.initConfig({
	    watch: {
	      files: ['*.js'],
	      tasks: ['jshint', 'jasmine'],
	      css: {
				files: '**/*.scss',
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
					'dist/css/rankings.css' : 'src/css/rankings.scss'
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
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};