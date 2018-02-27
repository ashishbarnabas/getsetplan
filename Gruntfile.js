module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['static_raw/css']
        },
        files: {
          'static_raw/css/styles.css': 'static_raw/less/*.less'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'static_raw/css',
          src: ['*.css', '!*.min.css'],
          dest: 'static_my_proj/css',
          ext: '.min.css'
        }]
      }
    },
    concat: {
      js: {
        src: ['static_raw/js/**/*.js'],
        dest: 'static_my_proj/js/built.js'
      },
      css: {
        src: ['static_raw/css/**/*.css'],
        dest: 'static_raw/css/styles.css'
      },
      less: {
        src: ['static_raw/less/**/*.less'],
        dest: 'static_raw/less/styles.less'
      }
    },
    shell: {
      django: {
        options: {
          stdout: true,
          stdin: true,
          stderr: true
        },
        command: 'cd api_proj && python manage.py runserver 127.0.0.1:8000 --insecure'
      },
      collectStatic: {
        options: {
            stdout: true
        },
        command: 'cd api_proj && echo yes | python manage.py collectstatic'
      }
    },
    watch: {
      js: {
        files: ['static_raw/js/**/*.js'],
        tasks: ['concat:js', 'shell:collectStatic']
      },
      css: {
        files: ['static_raw/css/**/*.css'],
        tasks: ['concat:css', 'shell:collectStatic']
      },
      less: {
        files: ['static_raw/less/**/*.less'],
        tasks: ['less:development', 'concat:css', 'cssmin', 'clean', 'shell:collectStatic']
      }
    },
    concurrent: {
      dev: {
        tasks: ['shell:django', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    clean: {
      folder: ['static_raw/css']
    },
    "bower-install-simple": {
      options: {
          color: true,
          directory: "static_my_proj/bower_components"
      },
      "prod": {
          options: {
              production: true
          }
      },
      "dev": {
          options: {
              production: false
          }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks("grunt-bower-install-simple");
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['bower-install-simple:dev', 'shell:collectStatic', 'concat', 'concurrent']);

};
