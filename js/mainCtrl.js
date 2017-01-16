angular.module('myApp')
.controller('mainCtrl', function($scope){
  $scope.name = 'Daniel';
  $scope.friends = [
    'Indiana',
    'Ollie',
    'Finn',
  ];
});
