module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					transform: [
						['babelify', {
							'presets': ['es2015']
						}],
						['jstify']
					]
				},
				files: {
					'./public/app.js': ['./app/initialize.js']
				}
			}
		},
		sass: {
			'app/styles/app.css': 'app/styles/app.sass'
		},
		copy: {
			main: {
				files: [
					// includes files within path
					{expand: true, cwd: 'app/assets/', src: ['**'], dest: './public/', filter: 'isFile'},
					{expand: true, cwd: 'app/styles/', src: ['**'], dest: './public/', filter: 'isFile'},
                    {expand: true, cwd: './node_modules', src: ['./bootstrap/dist/css/bootstrap.min.css'], dest: './public/css/', flatten: true, filter: 'isFile'}
				]
			}
		},
		browserSync: {
			bsFiles: {
				src : './public/**'
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./public"
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 8080,
					base: 'public'
				}
			}
		},
		watch: {
			scripts: {
				files: ["./app/**"],
				tasks: ["build"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");

	grunt.registerTask('start', ['build', 'browserSync', 'watch']);
	grunt.registerTask("build", ["browserify", "copy:main"]);
};