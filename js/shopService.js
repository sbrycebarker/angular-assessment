angular.module('assessment').service('shopService', function($http) {

  this.getData = function() {
    return $http ({
      method: 'GET',
      url: "http://practiceapi.devmounta.in/products"
    });
  }

  this.getProd = function(id) {
    return $http ({
      method: 'GET' ,
      url: "https://practiceapi.devmounta.in/products/" +id
    })
  }
})
