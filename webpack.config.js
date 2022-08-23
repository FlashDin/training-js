const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        string: './src/string.js',
        parentChildExample: './src/parentChildExample.js',
        arrayToHtml: './src/arrayToHtml.js',
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: false,
        port: 3000
    }
};