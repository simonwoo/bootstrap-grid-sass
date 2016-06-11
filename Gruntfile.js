'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    var appConfig = {
        src: 'src',
        release: 'release'
    };

    //init config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        app: appConfig,

        watch: {
            sass: {
                files: ['<%= app.src %>/*.scss'],
                tasks: ['sass:dev']
            }
        },

        sass: {
            dev: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    '<%= app.release %>/main.css': '<%= app.src %>/main.scss'
                }
            }
        }
    });

    // register task
    grunt.registerTask('default', ['sass:dev', 'watch']);
};