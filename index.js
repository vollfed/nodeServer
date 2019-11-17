var express = require('express');
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.3.11')


var app = express();
app.use(express.static(__dirname +'/nodeHTTP/'));
app.use(express.static(__dirname +'/node_modules/'));

var mqttMessage ="";
var elem =  {};
var elemArr = [];
var flag = true;  

//MQTT settings
client.on('connect', function () {
    client.subscribe('/f/outTopic');
    console.log("Connected");
});
	
client.on('message', function (topic, message) {
    mqttMessage = message.toString();
    console.log(topic + "_" + mqttMessage);
});

//client.publish('/f/inTopic', (flag)? '1' : '0');


//HTTP settings
app.get('/', function (req, res) {
   res.send('root');
 });

app.get('/root', function (req, res) {
   console.log("returning chart");

   res.sendFile( __dirname + "/nodeHTTP/index.html" );
})

app.get('/getSensorData', function (req, res) {
   res.send(mqttMessage);
})

// app.get('/up', function (req, res) {
//    elem.count = (elem.count) ? elem.count+1 : 1;
//    console.log("count:"+ elem.count);
//    res.send(elem);
// })

// app.get('/get', function (req, res) {
//    console.log("get count:"+ elem.count);
//    res.send(elem);
// })

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})