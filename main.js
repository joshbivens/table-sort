angular.module("App", [])
.controller("SortCtrl", function($scope) {
  $scope.users = [
    {
      fname: "Mark",
      lname: "Howard",
      id: 4345421777
    },
    {
      fname: "Josh",
      lname: "Bivens",
      id: 5423444710
    },
    {
      fname: "Robert",
      lname: "Öberg",
      id: 1234523456
    }
    
  ];
})