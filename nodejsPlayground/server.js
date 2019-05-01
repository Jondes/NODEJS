const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hey guys');
});

server.listen(3000, '127.0.0.1');
console.log('yeah we are doing fine');