var postsApp = angular.module('postsApp', []);

// postsApp.config(function config($stateProvider) {
//   $stateProvider.state("reddit", {
//     url: "/reddit",
//     controller: "RedditPostsController",
//     templateUrl: "views/reddit-post.ejs"
//   })
// })

postsApp.controller('RedditPostsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://www.reddit.com/r/all/new.json')
    .success(function(data) {
      $scope.posts = data['data']['children'];
      $scope.test = 'test string';
    })
}]);