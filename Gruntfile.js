
module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},

			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/<%= pkg.name %>.debug.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.debug.js']
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

 	// Default task(s).
	grunt.registerTask('default', ['uglify', 'concat']);

}

