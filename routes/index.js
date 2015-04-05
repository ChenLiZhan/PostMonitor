var express = require('express');
var https = require('https');

exports.index = function(req, res, next) {
  res.render('index', {title: 'PostsMonitor'});
}

exports.partials = function(req, res, next) {
  var name = req.params.name;
  res.render(name, {title: name + ' Posts'});
}

exports.getDcardPosts = function(req, res, next) {
  https.get('https://www.dcard.tw/api/forum/all/1/', function(response) {
    var body = '';
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      res.json(body);
    });
  }).on('error', function(e) {
    console.log('Got error: ', e.message);
  });
}
