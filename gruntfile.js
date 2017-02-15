module.exports = function (grunt) {

    // Initialising
    grunt.initConfig({
        //Import package.json
        pkg: grunt.file.readJSON('package.json'),
		
		// Clean destion folder
		clean: {
			folder: ['dest']
		},
		
		//Compress images
		imagemin: {
			dist: {
				options: {
					optimizeationLevel: 5
				},
				files: [
				{
					expand: true,
					cwd: 'img',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dest/img/'
				},
				{
					expand: true,
					cwd: 'views/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dest/views/images/'
				}
				]
			}
		},
        //Minify js files
        uglify: {
            //Output package information as banner
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
					'dest/views/js/main.min.js': ['views/js/main.js'],
					'dest/js/perfmatters.min.js': ['js/perfmatters.js']
				}
            }
        },

        //Minify CSS files
        cssmin: {
            //Output package information as banner
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
					'dest/css/print.min.css': ['css/print.css'],
					'dest/css/style.min.css': ['css/style.css'],
					'dest/views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
					'dest/views/css/style.min.css': ['views/css/style.css']
				}
            }
        },
		
		//Inline minified CSS file
		//Reference https://github.com/eruizdechavez/grunt-string-replace
		'string-replace': {
			inline: {
				files: {
					'dest/': ['*.html', 'views/*.html'],
				},
				options: {
					replacements: [
					{
						pattern: '<link href="css/style.css" rel="stylesheet">',
						replacement: '<style><%= grunt.file.read("dest/css/style.min.css") %></style>'
					},
					{
						pattern: '<link href="css/print.css" media="print" rel="stylesheet">',
						replacement: '<link href="css/print.min.css" media="print" rel="stylesheet">'
					},
					{
						pattern: '<!-- @import Pizza stylesheet -->',
						replacement: '<style><%= grunt.file.read("dest/views/css/style.min.css") %></style>'
					},
					{
						pattern: '<link rel="stylesheet" href="css/bootstrap-grid.css">',
						replacement: '<link rel="stylesheet" href="css/bootstrap-grid.min.css">'
					},
					{
						pattern: '<script src="js/perfmatters.js"></script>',
						replacement: '<script><%= grunt.file.read("dest/js/perfmatters.min.js") %></script>'
					},
					{
						pattern: '<script type="text/javascript" src="js/main.js"></script>',
						replacement: '<script type="text/javascript" src="js/main.min.js"></script>'
					}]
				}
			}
		}
    });

    // Load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-string-replace');

    // Run tasks
    grunt.registerTask('default', ['clean', 'imagemin', 'uglify', 'cssmin', 'string-replace']);

};