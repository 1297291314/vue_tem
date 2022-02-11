// var fs = require("fs");
//
// var data = fs.readFileSync('xx.html');
//
// console.log(data.toString());
// console.log("程序执行结束!");
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end("{'qq':132}");
}).listen(3123);
