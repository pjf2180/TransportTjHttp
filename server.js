var express = require('express');
var app = express();
var routes = require('./routes.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/routes/:id', function (req, res) {
  //res.send({name:`Ruta ${req.params.id}`,color:'',coords:routes[req.params.id-1]});
  res.send(routes[(req.params.id)-1]);
});
app.get('/test', function (req, res) {
  res.send({m:'hello world'});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});
