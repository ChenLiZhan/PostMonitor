var postsApp = angular.module('postsApp', []);
var REDDIT_API_ALL_NEW = 'http://www.reddit.com/r/all/new.json'

postsApp.controller('RedditPostsController', ['$scope', '$http', function($scope, $http) {
  $http.get(REDDIT_API_ALL_NEW)
    .success(function(data) {
      $scope.posts = data['data']['children'];
      $scope.test = 'test string';
    })
}]);