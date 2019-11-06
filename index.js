var express = require('express');
var app = express();
var elem =  {};
var elemArr = [];

app.use(express.static('dist'));
app.get('/index.html', function (req, res) {
   console.log("here");
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/test', function (req, res) {
   res.send('Hello World');
})

app.get('/up', function (req, res) {
   elem.count = (elem.count) ? elem.count+1 : 1;
   console.log("count:"+ elem.count);
   res.send(elem);
})

app.get('/get', function (req, res) {
   console.log("get count:"+ elem.count);
   res.send(elem);
})

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})