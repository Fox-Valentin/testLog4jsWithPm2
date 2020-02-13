const log = console.log.bind(console);
const http = require('http');
var logger = require('./logger.js');
http.createServer(function(req, res) {
    logger.info(`测试日志`);
    log(`测试日志2`)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello!')
}).listen(8888);
log('server runing at 127.0.0.1:8888')