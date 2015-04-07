var REDDIT_API_ALL_NEW = 'http://www.reddit.com/r/all/new.json';
var DCARD_API_POSTS_NEW  = 'http://localhost:3000/api/dcard/posts';
var DCARD_API_CATEGORIES = 'http://localhost:3000/api/dcard/categories';

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
        $scope.posts = redditPosts;
      })
  }])

  .controller('DcardPostsController', ['$scope', '$http', function($scope, $http) {
    $http.get(DCARD_API_CATEGORIES).success(function(data) {
      var dcardCategories = [];
      data_json = JSON.parse(data);
      categories_json = data_json['forum'];

      categories_json.forEach(function(cat) {
        tmp = {
          'id'      : cat['alias'],
          'name'    : cat['name']
        }
        dcardCategories.push(tmp);
      });

      $scope.selected = 'default';
      $scope.categories = dcardCategories;

      $scope.getPosts = function(cat) {
        $http.get(DCARD_API_POSTS_NEW + '/' + cat)
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
      };
    })
  }]);