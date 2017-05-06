var express = require('express');
var app = express();
var path = require('path');
// viewed at http://localhost:8080
var clientDir = __dirname + '/';
app.use(express.static(clientDir));

app.get('*', function(req, res) {
    res.sendFile(path.join(clientDir + '/index.html'));
});
var port = 8080;
app.listen(port, function(){
	console.log('Server Started at Port : ', port);
});