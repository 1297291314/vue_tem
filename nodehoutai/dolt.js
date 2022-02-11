var mysql      = require('mysql');
const http = require("http");
var url = require('url');
var util = require('util');
const {json} = require("express");
// localhost:3306"|U="root"|P=""|T="28800000"|R="fa
// lse"|L="info
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '',
    database    :'firs_test'
});

connection.connect();

connection.query("SELECT * From user", function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0]);
    http.createServer(function(req, res){
        res.writeHead(200, {
            'Content-Type': 'text/plain ; charset=utf-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':'true'
        });
        res.end(JSON.stringify(results));
    }).listen(3123);
});

