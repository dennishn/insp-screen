// Generated on 2014-09-06 using generator-nodes 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('assemble');

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      assemble_all: {
        files: ['!<%= yeoman.app %>/styleguide/layouts/angular.html', '<%= yeoman.app %>/styleguide/{includes,layouts}/**/*.html'],
        tasks: ['assemble']
      },
      assemble_pages: {
        files: ['<%= yeoman.app %>/styleguide/pages/**/*.{html,md}'],
        tasks: ['assemble']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: [
          '<%= yeoman.app %>/common/**/*.js',
          '<%= yeoman.app %>/modules/**/*.js'
        ],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      sass: {
        files: [
          '<%= yeoman.app %>/styles/**/*.{scss,sass}',
          '<%= yeoman.app %>/common/**/*.{scss,sass}',
          '<%= yeoman.app %>/modules/**/*.{scss,sass}'
        ],
        tasks: ['sass:server', 'autoprefixer']
      },
      styleguideSass: {
        files: [
          '<%= yeoman.app %>/styleguide/assets/**/*.{scss,sass}',
        ],
        tasks: ['sass:styleguide', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/index.html',
          '<%= yeoman.app %>/common/**/*.html',
          '<%= yeoman.app %>/modules/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    assemble: {
      options: {
        marked: {
          highlight: function(code, lang) {
            return require('highlight.js').highlightAuto(code).value;
          }
        },
        collections: [
          {
            name: 'component',
            sortby: 'sort',
            sortorder: 'ascending'
          }
        ]
      },
      dist: {
        options: {
          flatten: false,
          assets: '<%= yeoman.app %>/styleguide/assets',
          projectassets: '..',
          data: ['<%= yeoman.app %>/styleguide/data/*.json'],
          helpers: ['<%= yeoman.app %>/styleguide/helpers/*.js', '*-helpers', '*-helper'],
          partials: ['<%= yeoman.app %>/styleguide/partials/**/*.{html,scss}'],
          layoutdir: '<%= yeoman.app %>/styleguide/layouts',
          layout: 'angular.html'
        },
        expand: true,
        cwd: '<%= yeoman.app %>/styleguide',
        src: ['pages/**/*.{html,md}'],
        dest: '<%= yeoman.app %>/styleguide',
        flatten: true
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect, options, middlewares) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/common/**/*.js',
          '<%= yeoman.app %>/modules/**/*.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      styleguide: '<%= yeoman.app %>/styleguide/*.html'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      options: {
        cwd: '<%= yeoman.app %>'
      },
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/main.scss'],
        // ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
        // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        sourcemap: true,
        imagePath: '<%= yeoman.app %>/assets/images/'
      },
      server: {
        options: {
          debugInfo: true
        },
        files: {
          '.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
        }
      },
      styleguide: {
          files: {
            '<%= yeoman.app %>/styleguide/assets/css/docs.css': '<%= yeoman.app %>/styleguide/assets/docs.scss'
          }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/assets/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/assets/images']
      }
    },

    uncss: {
      dist: {
        options: {
          csspath: '../.tmp',
          stylesheets: ['../.tmp/styles/main.css']
        },
        files: {
          '.tmp/styles/main.css': ['<% yeoman.dist %>/**/*.html']
        }
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },
    ngtemplates: {
      dist: {
        src: [
          '<%= yeoman.app %>/common/**/*.tpl.html',
          '<%= yeoman.app %>/modules/**/*.tpl.html'
        ],
        dest: '<%= yeoman.dist %>/scripts/templates.js'
      }
    },

    grunticon: {
      icons: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/icons/raw',
          src: ['*.svg', '*.png'],
          dest: '<%= yeoman.app %>/assets/icons'
        }]
      }
    },

    pageres: {
      app: {
        options: {
          url: '127.0.0.1:9000',
          sizes: ['1280x960', '1024x768', '640x480', '320x480'],
          dest: ['screenshots', 'styleguide']
        }
      },
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'assets/images/{,*/}*.{webp}',
            'assets/fonts/*',
            '!assets/icons/raw',
            'assets/icons/*.{svg,png}'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'sass:server'
      ],
      dist: [
        'sass:server',
        'imagemin',
        'svgmin'
      ],
      styleguide: [
        'sass:styleguide'
      ]
    }

  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'assemble',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'ngAnnotate',
    'ngtemplates',
    'uncss',
    'copy:dist',
    'cssmin',
    'uglify',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);
};
