var express = require('express');
var app = express();

app.use(function(req, res, next){
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.use('/special/', function(req, res, next){
  console.log('youre special');
  next();
});

app.get('/', function(req, res, next){
  res.send('Hello World');
});

app.get('/news', function(req, res, next){
  res.send('This is news');
});
app.get('/special/:thing', function(req, res, next){
  res.send('This is special');
});

app.listen(3000);
