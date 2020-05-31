module.exports = {
    newPageFrontend: {
        files: [
            {
                src: '<%= pathAssetsFrontend %>/base/templates/_base.template.html',
                dest: '<%= pathAssetsFrontend %>/base/<%= filenamefrontend %>.html'
            }
        ]
    }
};
