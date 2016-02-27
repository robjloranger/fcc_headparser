var express = require('express');
var app = express();

app.get('/', function(req, res){
  var userAgent = req.headers['user-agent'];
  var headerInfo = {
    ip: req.ip,
    language: req.get("Accept-Language").slice(0,5),
    'operating system': userAgent.slice(userAgent.indexOf('(')+1,userAgent.indexOf(')'))
  };
  console.log("Sending header info:\n"+ JSON.stringify(headerInfo));
  res.json(headerInfo);
});

app.listen(8080, function(){
  console.log("Server running");
});
