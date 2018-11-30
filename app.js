var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.send('Hello World!');
}).listen(8080, 'instaarts.com');
console.log('Server running at http://67.222.18.223:8080/');
/*
var app = require ('./config/server');

app.listen(8080, function(){
    console.log('Servidor online!');
})
*/