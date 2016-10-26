/* 
* @Author: zjy
* @Date:   2016-10-20 15:33:56
* @Last Modified by:   zjy
* @Last Modified time: 2016-10-26 08:58:36
*/

'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig  = require('./webpack.config.js');

var port = 8080;

var config = webpackConfig(port);
var server = new WebpackDevServer(webpack(config), {
    contentBase:'',
    publicPath: '/assets/'
});
server.listen(port);

/*var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.get('/',function(req,res){
    res.render('index');
});

app.set('views','client');
app.set('view engine','html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/client', express.static(path.join(__dirname, 'client')));

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); */