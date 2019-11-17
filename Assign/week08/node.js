const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    switch(req.url){
        case "/home":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h1>Welcome to the Home Page</h1>");
            break;

        case "/getData":
            res.writeHead(200, {"Content-Type": "application/json"});
            var jsonData = '{"name":"Ashley Loo","class":"cs313"}';
            // var obj = JSON.parse(jsonData);
            // var json = JSON.stringify(obj);
            
            // fs.writeFile("main.json", json, 'utf8', (err) => {
            //   if (err){
            //       console.log("An error occured while writing JSON Object to File.");
            //       return console.log(err);
            //   }
            // });
            console.log(jsonData);
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("Page Not Found");
            break;
    }
  res.end();
}).listen(8888);