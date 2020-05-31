module.exports = function (grunt) {

    //It returns the time of each task
    require('time-grunt')(grunt);
    

    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt, {
        // data passed into config.  Can use with <%= pathAssetsFrontend %>
        data: {
            pathAssetsFrontend: "frontend-v2/clip-one/assets",
            pathBowerComponents: "bower_components",
            filenamefrontend: ""
        }
    });

    // FRONTEND version
    grunt.registerTask('buildfrontend', ['cssmin:layoutFrontend', 'uglify:layoutFrontend', 'htmlbuild:frontend']);
    grunt.registerTask('buildpagefrontend', ['prompt:setNamePageFrontend', 'copy:newPageFrontend', 'htmlbuild:frontend']);
};
