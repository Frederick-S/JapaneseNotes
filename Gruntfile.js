var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        'gh-pages': {
            options: {
                base: '_book'
            },
            src: ['**']
        }
    });

    grunt.registerTask('publish', [
        'gh-pages'
    ]);
};
