var express = require('express');
var https = require('https');

exports.index = function(req, res, next) {
  res.render('index', {title: 'PostsMonitor'});
}

exports.getDcardPosts = function(req, res, next) {
  https.get('https://www.dcard.tw/api/forum/all/1/', function(response) {
    var body = '';
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      var dcardPosts = JSON.parse(body);
      res.render('dcard', {
        title: 'PostsMonitor',
        posts: dcardPosts
      });
    });
  }).on('error', function(e) {
    console.log("Got error: ", e.message);
  });
}