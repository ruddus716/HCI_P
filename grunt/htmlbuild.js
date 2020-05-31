module.exports = {
    frontend: {
        src: [
            '<%= pathAssetsFrontend %>/base/*.html'
        ],
        dest: 'frontend-v2/clip-one',
        options: {
            beautify: true,
            relative: true,
            scripts: {
                bundle: [
                        '<%= pathBowerComponents %>/bootstrap/dist/js/bootstrap.min.js',
                        '<%= pathBowerComponents %>/blockUI/jquery.blockUI.js',
                        '<%= pathBowerComponents %>/jquery.transit/jquery.transit.js',
                        '<%= pathBowerComponents %>/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js',
                        '<%= pathBowerComponents %>/jquery_appear/jquery.appear.js',
                        '<%= pathBowerComponents %>/jquery.cookie/jquery.cookie.js'
                ],
                resurces: {
                    jQuery: '<%= pathBowerComponents %>/jquery/dist/jquery.min.js'
                },
                main: '<%= pathAssetsFrontend %>/js/min/main.min.js'
            },
            styles: {
                bundle: [
                   '<%= pathBowerComponents %>/bootstrap/dist/css/bootstrap.min.css',
                   '<%= pathBowerComponents %>/font-awesome/css/font-awesome.min.css',
                   '<%= pathBowerComponents %>/animate.css/animate.min.css'                   
                ],
                main: [
                    '<%= pathAssetsFrontend %>/fonts/clip-font.min.css',
                    '<%= pathAssetsFrontend %>/css/main.min.css',
                    '<%= pathAssetsFrontend %>/css/main-responsive.min.css'                    
                ],
                theme: '<%= pathAssetsFrontend %>/css/theme_blue.min.css'
            },
            sections: {
                layout: {
                    meta: '<%= pathAssetsFrontend %>/base/layout/meta.html',
                    slidingBar: '<%= pathAssetsFrontend %>/base/layout/sliding-bar.html',
                    topBar: '<%= pathAssetsFrontend %>/base/layout/top-bar.html',
                    navigation: '<%= pathAssetsFrontend %>/base/layout/navigation.html',
                    footer: '<%= pathAssetsFrontend %>/base/layout/footer.html',
                    styleSelector: '<%= pathAssetsFrontend %>/base/layout/styleselector.html',
                    revolutionSlider: '<%= pathAssetsFrontend %>/base/layout/revolution-slider.html'
                }
            },
            data: {
                version: "2.0.0",
                title: "Clip-One - Front End",
                author: "ClipTheme",
                description: "Clip-One - Frontend | Build with Twitter Bootstrap 3",
                pathFavicon: "favicon.ico"
            }
        }
    }
}