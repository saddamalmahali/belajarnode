var express = require('express')
var app = express()
app.get('/', function(req, res){
	console.log("request from client");
	res.send('Hello World!');
})

app.listen(2000)