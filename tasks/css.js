module.exports = function (grunt) {

    var config = grunt.file.readJSON('config.json');
    
    grunt.config('cssmin', {
        minify: {
            expand: true,
            cwd: 'content/<%= config.services.default %>/css/',
            src: ['*.css'],
            dest: 'content/<%= config.services.default %>/css/'
        }
    });

    grunt.config('uglify', {
        options: {
            mangle: true
        },
        my_target: {
            files: {
                'content/<%= config.services.default %>/js/lib/news_special/iframemanager__host.js': ['source/js/lib/news_special/iframemanager__host.js']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('css', ['clean:sasscache', 'sass:main', 'sass:inline', 'csslint', 'cssmin']);
};