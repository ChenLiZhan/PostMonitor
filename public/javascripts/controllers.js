var REDDIT_API_ALL_NEW = 'http://www.reddit.com/r/all/new.json'
var DCARD_API_ALL_NEW  = 'http://localhost:3000/api/dcard'

angular.module('PostsMonitorController', [])
  .controller('RedditPostsController', ['$scope', '$http', function($scope, $http) {
    $http.get(REDDIT_API_ALL_NEW)
      .success(function(data) {
        var redditPosts = [];
        post_info = data['data']['children'];

        post_info.forEach(function(input) {
          tmp = {
            'url'   : input['data']['url'],
            'title' : input['data']['title']
          };
          redditPosts.push(tmp);
        });
        console.log(redditPosts);
        $scope.posts = redditPosts;
      })
  }])

  .controller('DcardPostsController', ['$scope', '$http', function($scope, $http) {
    $http.get(DCARD_API_ALL_NEW)
      .success(function(data) {
        var dcardPosts = [];
        data_json = JSON.parse(data);

        data_json.forEach(function(input) {
          tmp = {
            'id'    : input['id'],
            'title' : input['version'][0]['title'] 
          };
          dcardPosts.push(tmp);
        });

        $scope.posts = dcardPosts;
      })
  }]);