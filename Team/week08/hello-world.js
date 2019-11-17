var http = require("http");

http.createServer((err, res) => {
    res.write("Hello World!!!");
    res.end();
}).listen(8888);

// console.log('HELLO WORLD');