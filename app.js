/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.send('Hello World!');
}).listen(8080);
console.log('Server running at http://arteref.com');

var app = require ('./config/server');

var port = 60000;
var server_ip_address = "67.222.18.223";

app.listen(port, function(){
    console.log('Servidor online! ' + port);
})
*/
const http = require('http')
const port = 3000
const ip = 'instaarts.com'

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>')
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})

