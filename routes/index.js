exports.index = function(req, res, next) {
  res.render('index', {title: 'PostsMonitor'});
}

exports.partials = function(req, res, next) {
  var name = req.params.name;
  res.render(name, {title: name + ' Posts'});
}
