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
	    	files: ['rankings.js', 'rankings-specs.js'],
	      	options: {
	        	globals: {
	          		jQuery: true,
	          		angular: true
	        	}
	      	}
	    },
		jasmine : {
			src : ['rankings.js'],
			options : {
			    specs : 'rankings-specs.js',
			    vendor: [
					'angular.min.js',
					'angular-mocks.js',
					'jquery-1.11.1.min.js'
				]
			}
		},
		sass: {
			dist: {
				files: {
					'rankings.css' : 'rankings.scss'
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