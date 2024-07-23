// url: http://localhost:8080/someWords

//To include a module, use the require() function with the name of the module
var http = require('http');

// include the custom module
var dt = require('./myfirstmodule');

// create a server on port 8080
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("The date and time are currently: " + dt.myDateTime() + "<br/>");
    response.write("Requested URL: " + request.url + "<br/>");
    response.end();
}).listen(8080);