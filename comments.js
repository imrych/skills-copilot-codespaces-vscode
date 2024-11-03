// Create web server with Node.js

// Import the http module
var http = require('http');
var fs = require('fs');

// Create a server
http.createServer(function (req, res) {
    // Read the file
    fs.readFile('comments.html', function(err, data) {
        // Write the file to the response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3000);

// Print message to console
console.log('Server running at http:// 
    )