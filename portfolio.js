var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("portfolio on 8000\n");
});
server.listen(8000);
console.log("listening on 8000");
