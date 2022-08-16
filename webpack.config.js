const path = require('path');

module.exports = {
    mode: "development",
    entry: ['./src/index.js', './src/string.js'],
    output: {
        filename: "main.js",
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