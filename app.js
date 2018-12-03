/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.send('Hello World!');
}).listen(8080);
console.log('Server running at http://arteref.com');
*/
var app = require ('./config/server');

app.listen(8080, function(){
    console.log('Servidor online!');
})
