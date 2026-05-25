const http = require('http');

http.createServer((req, res) => {
    res.write("Hello from Node App, Change 1");
    res.end();
}).listen(3000);
