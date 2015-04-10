module.exports = function(grunt) {
    // Конфигурация проекта
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            dev: {
                src: 'css/all.css'
            }
        },
        less: { 
            options: {
                expand: true,
                sourceMap: true
            },
            dev: {
                files: {
                    'css/all.css': ['less/all.less']
                }
            }
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less', 'autoprefixer']
            }
        },
        browserSync: {
            files: {
                src: ['*.html', 'css/all.css']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: '.'
                }
            }
        },
        wiredep: {

            dev: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: '*.html'
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less', 'autoprefixer', 'browserSync', 'watch']);
};
