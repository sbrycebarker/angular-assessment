angular.module('assessment').controller('prodCtrl', function($scope, $stateParams, shopService) {

  $scope.getProd = function() {
    shopService.getProd($stateParams.id).then(function(results){
      console.log(results);
      $scope.product = results.data
    })
  }

  $scope.getProd();


})
