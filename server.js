//
// Tic-Tac-Toe server
//
var http = require('http');
var fs   = require('fs');

// Return index.html
function index(req, res){
  // Set the content type for the response
  res.writeHead(200, {'Content-Type':'text/html'});
  // Create and send the filestream
  var fileStream = fs.createReadStream('index.html');
  fileStream.pipe(res);
}

// Start server
http.createServer(function (req, res) {
  // Make '/' point to index.html
  if(req.url === '/'){
    index(req, res);
  }
}).listen('8888', '0.0.0.0');
