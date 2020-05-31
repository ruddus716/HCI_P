module.exports = {
    layoutFrontend: {
        files: [{
            expand: true,
            cwd: '<%= pathAssetsFrontend %>/css',
            src: ['**/*.css', '!**/*.min.css'],
            dest: '<%= pathAssetsFrontend %>/css',
            ext: '.min.css'
        },
        {
            '<%= pathAssetsFrontend %>/fonts/clip-font.min.css': ['<%= pathAssetsFrontend %>/fonts/clip-font.css']
        }]
    }
};