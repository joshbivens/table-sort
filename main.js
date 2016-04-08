angular.module("App", [])
.controller("SortCtrl", function($scope) {
  $scope.users = [
    {
      name: "Mark Howard"
    },
    {
      name: "Josh Bivens"
    }
  ];
})