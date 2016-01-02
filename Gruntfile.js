
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['src/*.js']
    },
    uglify: {
      options: {
        banner: '/*! \n <%= pkg.name %> v<%= pkg.version %> built on <%= grunt.template.today("yyyy-mm-dd") %> - (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n Available under MIT license. - <%= pkg.homepage %> \n*/\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.js'
      }
    }
  });

  grunt.registerTask('default', [
      'uglify',
      'jshint'
    ]);
};
