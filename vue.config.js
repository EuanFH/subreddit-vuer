const path = require('path')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? "/subreddit-vuer"
    : "/",
    outputDir: "docs",
    configureWebpack: {
        devtool: 'source-map'
    },
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss',
            'patterns': [
                path.resolve(__dirname, './src/theme/dark.scss'),
            ]
        }
    }
}
