var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

app.use(express.static('public'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({cache: false});

app.use(function(req, res, next){
  console.log(req.method, req.url, res.statusCode);
  next();
});


var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', routes(io));
