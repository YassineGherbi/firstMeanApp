angular
.module('UserService', [])
.factory('User', function($http){
  var userFactory = {};

  userFactory.create = function(userData){
    return $http.post('/api/signup', userData);
  }

  userFactory.all = function(){
    return $http.get('/api/user/all');
  }

  return userFactory;

});
