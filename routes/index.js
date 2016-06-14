var express = require('express');
var router = express.Router()

var tweetBank = require('../tweetBank');

router.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render('index', {title: 'Twitter', tweets: tweets, showForm: true});
});

router.get('/users/:name', function(req, res){
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  res.render('index', {title: 'Twitter.js - Posts by '+ name, tweets: list, showForm: true, name: name});
});

router.get('/tweets/:id', function(req, res) {

  var id = parseInt(req.params.id);

  var singleTweet = tweetBank.find({id: id});

  res.render('index', {title: 'Tweet # ' + id, tweets: singleTweet});

});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
})

module.exports = router;
