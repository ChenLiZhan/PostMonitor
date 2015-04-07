var https = require('https');

exports.getDcardPosts = function(req, res, next) {
  category = req.params.category;
  https.get('https://www.dcard.tw/api/forum/' + category + '/1/', function(response) {
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

exports.getDcardCategories = function(req, res, next) {
  https.get('https://www.dcard.tw/api/forum', function(response) {
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