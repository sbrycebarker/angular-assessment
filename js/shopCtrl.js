angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

  $scope.getData = function() {
    shopService.getData().then(function(results){
      console.log(results)
      $scope.shop = results.data
    })
  }
  $scope.getData();

})

.directive('logo', function() {

return {
  restrict: 'E',
  templateUrl: './views/logo.html'
}

});
