// url: http://localhost:8080/summer.html
// url: http://localhost:8080/winter.html

//Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) 
{
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  
  fs.readFile(filename, function(err, data) 
  {
    if (err) 
    {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);