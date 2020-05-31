module.exports = {
    layoutFrontend: {
        files: {
            '<%= pathAssetsFrontend %>/js/min/main.min.js': ['<%= pathAssetsFrontend %>/js/main.js'],
            '<%= pathAssetsFrontend %>/js/min/index.min.js': ['<%= pathAssetsFrontend %>/js/index.js']
        }
    }
};
