var http = require('http');

http.createServer(function (req, res) {
  console.log('Server Port: 3000');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Session #2 - Deep Dive into AWS EC2');
}).listen(3000);
