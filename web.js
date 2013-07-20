var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

/*app.get(/\/public\/(.*)$/, function(request, response) {
  	response.send(fs.readFileSync("public/" + request.params[0]).toString());
});*/

app.configure(function(){
	app.use('/public', express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
  	response.send(fs.readFileSync("index.html").toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
