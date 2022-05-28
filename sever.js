const http = require('http');
//make virtual sever with http link
const server = http.createServer((req, res) => {//req:request, res: respon
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world! </h3>');
    res.write('<h2>from HieuPm </h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.JS server is running on port: 3000');
})
