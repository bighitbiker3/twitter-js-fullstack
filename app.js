var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');

app.use(express.static('public'));

app.use('/', routes);

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({cache: false});

app.use(function(req, res, next){
  console.log(req.method, req.url, res.statusCode);
  next();
});


app.listen(3000);
