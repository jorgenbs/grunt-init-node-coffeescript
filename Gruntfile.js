'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'coffee-script'
        },
        src: ['test/**/*.coffee'],
      }
    },
    watch: {
      all: {
        files: ['<%= coffeelint.all %>'],
        tasks: ['default']
      }
    },
    coffee: {
      compile: {
        files: {
          'lib/grunt-init.js': 'src/**/*.coffee' 
        }
      }
    },
    coffeelint: {
      all: ['src/**/*.coffee', 'test/**/*.coffee']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['coffeelint', 'coffee', 'mochaTest']);
  grunt.registerTask('test', ['mochaTest']);

};
