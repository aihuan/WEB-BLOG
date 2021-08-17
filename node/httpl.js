'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function(request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world This is a node applicaton !</h1>');
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

// 解析URL需要找到Node.js对应的url模块，它使用起来非常简单，通过parse解析一个url对象

var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// 处理本地目录文件需要用node的path模块
var path = require('path');
var workDir = path.resolve('.');
// 组合当前的path + index.html
var filePath = path.join(workDir, 'pub', 'index.html');
// workDir/pub/index.html

// 实现一个文件服务器 在另一个文件中 file_serve.js