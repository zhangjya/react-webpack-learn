/* 
* @Author: zjy
* @Date:   2016-10-20 15:37:59
* @Last Modified by:   zjy
* @Last Modified time: 2016-10-25 16:40:39
*/

'use strict';
var webpack = require('webpack');
var path = require('path');
module.exports = (port) =>  ({
    // 页面入口文件配置
    devtool: 'source-map',
    entry:[
        `webpack-dev-server/client?http://localhost:${port}`,
        'babel-polyfill',
        './client/app/index.js'
    ],
    // 入口文件输出配置
    output : {
        publicPath: '/assets/',
        path: path.resolve(__dirname,"optput"),
        filename : 'bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]        
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    // 插件项
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        new webpack.NoErrorsPlugin(),
    ]
})