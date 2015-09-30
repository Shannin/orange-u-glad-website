module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/main.css': 'sass/main.scss'
        }
      }
    },
    watch: {
      styles: {
        files: ['sass/**/*.scss'], // which files to watch
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['sass', 'watch']);
};