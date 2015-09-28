var express = require('express');
var app = express();
var path = require('path');

var assetDir = 'public';
var port = 8080;

app.use(express.static(assetDir));

app.get('/api/hello', function(req, res) {
    console.log('Hello World');
    res.send('hello');
});

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/' + assetDir + '/'));
});

app.listen(port);
console.log('Running on port: ' + port);