var http = require("http")

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'})

   response.end('Repeated Exposure Over Time\n')
}).listen(4444)

console.log('Server running')