angular
.module('StoryService', [])
.factory('Story', function($http){
  var storyFactory = {};

  storyFactory.create = function(storyData){
    return $http.post('/api', storyData);
  }

  storyFactory.all = function(){
    return $http.get('/api');
  }

  return storyFactory;

});
