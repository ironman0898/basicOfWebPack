const path = require('path')
module.exports = {
    mode : "development",
    entry: './src/App.js',
    devServer : {
        static : path.join(__dirname, 'dist'),
        compress:true,
        port: 3500
    }
}