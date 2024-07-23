// url: http://localhost:8080/?year=2017&month=July

//To include a module, use the require() function with the name of the module
var http = require('http');
var url = require('url');

// create a server on port 8080
http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text/html'});

  var queryString = url.parse(request.url, true).query;
  var txt = queryString.year + " " + queryString.month;
  response.end(txt);

}).listen(8080);