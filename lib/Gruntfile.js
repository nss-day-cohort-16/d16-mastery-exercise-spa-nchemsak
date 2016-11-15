'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../javascripts/*.js'], //this is the folder where all JS code should be located.
      //It looks for ANY file that ends in '.js' in the 'javascripts' folder
      options: {
        predef: ["document", "console", "$"], //predefined
        esnext: true,
        globalstrict: true,
        globals: { XMLHttpRequest: true }, //put global variables here ex: {"Sandwich": true}
      }
    },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/styles.scss' //if your scss files is named something different, you’ll have to change this path.
            //this creates a file called main.css FROM sass/styles.scss
        }
      }
    },
    watch: { //this performs the tasks above automatically whenever something is changed.
      options: {
        livereload: true,
      },
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
  //now, just typing 'grunt' will run this and the watch task will take over.
};
