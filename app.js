/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.send('Hello World!');
}).listen(8080);
console.log('Server running at http://arteref.com');
*/
var app = require ('./config/server');

var port = process.env.PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.listen(port, "67.222.18.223", function(){
    console.log('Servidor online! ' + port + ", IP " + server_ip_address);
})
