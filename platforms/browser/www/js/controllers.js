var vinoteamMobileApp = angular.module('vinoteamMobileApp', []);

vinoteamMobileApp.controller('WineListCtrl', function($scope, $http) {
  $http.get('http://localhost:8000/vins/').success(function(data) {
   $scope.wines = data;
  });

  // $scope.wines = [
  //   {'appellation': 'Château ChienDoux',
  //   'year': 1985},
  //   {'appellation': 'Cuvee Apolline',
  //   'year': 2015},
  // ];
});
