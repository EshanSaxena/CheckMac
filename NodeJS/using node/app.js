var http = require("http");
var port = 5000;
var server = http.createServer(function(req, res) {
    console.log("Server Start");
    res.write("<html><body><h1>" + req.url + "</h1></body></html>");
    res.end();
});
server.listen(5000);