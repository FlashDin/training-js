const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        string: './src/string.js'
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