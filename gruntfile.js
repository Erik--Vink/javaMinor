module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            js: {
                src: ['public/app/js/app.module.js'],
                dest: 'public/dist/js/bundle.js',
                options: {
                    external: ['angular'],
                    debug: true,
                    browserifyOptions: { debug: true }
                }
            }
        },
        copy: {
            all: {
                expand: true,
                cwd: 'public/app/',
                src: ['**/*.html', '**/*.css', '**/*.png'],
                dest: 'public/dist/'
            }
        },
        watch: {
            js: {
                files: "public/app/**/*.js",
                tasks: "browserify"
            },
            html: {
                files: 'public/app/**/*.html',
                tasks: 'copy'
            },
            css: {
                files: 'public/app/**/*.scss',
                tasks: 'sass'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/dist/css/style.css' : 'public/app/css/style.scss'
                }
            }
        }
    });

    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['browserify', 'copy', 'sass', 'watch']);
};