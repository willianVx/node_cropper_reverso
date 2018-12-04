/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.send('Hello World!');
}).listen(8080);
console.log('Server running at http://arteref.com');

*/
var app = require ('./config/server');

//var port = process.env.PORT || 8080;
//app.set(process.env.PORT || 8080);

var port = 80;

var server_ip_address = "67.222.18.224";

app.listen(port, '67.222.18.224', function(){  
    console.log('Servidor online! ' + port);
})
