const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode : "development",
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'output.js'
    },
    devServer : {
        static : path.join(__dirname, 'dist'),
        compress:true,
        port: 3500,
        headers: {
            'Access-Control-Allow-Origin': '*',
          }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './dist/index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/                
            }
        ]
    }
}