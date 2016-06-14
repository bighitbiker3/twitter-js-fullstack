var express = require('express');
var app = express();
var swig = require('swig');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({cache: false});



app.use(function(req, res, next){
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.use('/special/', function(req, res, next){
  console.log('youre special');
  next();
});

app.get('/', function(req, res, next){

  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get('/news', function(req, res, next){
  res.send('This is news');
});
app.get('/special/:thing', function(req, res, next){
  res.send('This is special');
});

app.listen(3000);
