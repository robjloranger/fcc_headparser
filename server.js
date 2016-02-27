var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.get('/', function(req, res){
  var userAgent = req.headers['user-agent'];
  var headerInfo = {
    ip: req.ip.slice(req.ip.lastIndexOf(':')+1,req.ip.length),
    "ip-alt": req.connection.remoteAddress,
    "ip-fwd": req.header['x-forwarded-for'],
    language: req.get("Accept-Language").slice(0,5),
    'operating system': userAgent.slice(userAgent.indexOf('(')+1,userAgent.indexOf(')'))
  };
  console.log("Sending header info:\n"+ JSON.stringify(headerInfo));
  res.json(headerInfo);
});

app.listen(PORT, function(){
  console.log("Server running on %s", PORT);
});
