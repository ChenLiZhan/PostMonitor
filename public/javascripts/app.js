angular.module('postsApp', [
  'ui.router',
  'PostsMonitorController'
])
  .config(function config($stateProvider) {
    $stateProvider.state("dcard", {
      url: "/dcard",
      controller: "DcardPostsController",
      templateUrl: "partials/dcard"
    })

    $stateProvider.state("reddit", {
      url: "/reddit",
      controller: "RedditPostsController",
      templateUrl: "partials/reddit"
    })
  })
