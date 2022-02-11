var http = require('http');
const express = require("express")

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');



// let db = require('mysql')
// let express = require('express')
//
// let app = express()
//
// app.all('*',function(req,res,next){
//
//     res.header('Access-Control-Allow-Origin','*')
//
//     next()
// })
//
// let connection = db.createConnection({
//     host:'https://www.dolthub.com/api/v1alpha1/1297291314/firs_test/main?q=SELECT%20*%20FROM%20%60test%60',
//     user:'1297291314',
//     password:'hjj19951229',
//     database:'web'
// })
//
// connection.connect();
//
// let  sql = 'SELECT * FROM myweb_user';
//
// connection.query(sql,  (error, results, fields)=> {
//     if (!error) {
//         app.get('/',(req,res)=>{
//             //将数据库信息返回前台
//             res.json(results)
//
//             console.log('正在访问接口……')
//             // 打印前台数据
//             // console.log(req.query)
//             console.log(req.query)
//         }).listen(3002)
//     }
// });
