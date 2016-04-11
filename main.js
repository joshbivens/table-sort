angular.module("App", [])
  .controller("SortCtrl", function($scope) {
    
      $scope.users = [{
        firstName: "Mark",
        lastName: "Howard",
        id: 4345421777,
        viewCount: 47
      }, {
        firstName: "Josh",
        lastName: "Bivens",
        id: 5423444710,
        viewCount: 34
      }, {
        firstName: "Robert",
        lastName: "Öberg",
        id: 1234523456,
        viewCount: 11125476
      }, {
        firstName: "Emma",
        lastName: "Blackery",
        id: 4534455433,
        viewCount: 925476
      }];
      
      $scope.firstNameClicked = false;
      $scope.lastNameClicked = false;
      $scope.viewCountClicked = false;
      $scope.idClicked = false;

      $scope.sortBy = function(category) {
        
        if (category == 'firstName') {
          $scope.firstNameClicked = !$scope.firstNameClicked;
          if ($scope.firstNameClicked) {
            $scope.users.sort(function(a, b) {
              if (a.firstName < b.firstName) return -1;
              if (a.firstName > b.firstName) return 1;
              0;
            });
          } else {
            $scope.users.sort(function(a, b) {
              if (a.firstName < b.firstName) return 1;
              if (a.firstName > b.firstName) return -1;
              0;
            });
          }
        }
        
        if (category == 'lastName') {
          $scope.lastNameClicked = !$scope.lastNameClicked;
          if ($scope.lastNameClicked) {
            $scope.users.sort(function(a, b) {
              if (a.lastName < b.lastName) return 1;
              if (a.lastName > b.lastName) return -1;
              0;
            });
          } else {
            $scope.users.sort(function(a, b) {
              if (a.lastName < b.lastName) return -1;
              if (a.lastName > b.lastName) return 1;
              0;
            });
          }
        }
        
        if (category == 'viewCount') {
          $scope.viewCountClicked = !$scope.viewCountClicked;
          if ($scope.viewCountClicked) {
            $scope.users.sort(function(a, b) {
              return a.viewCount - b.viewCount;
            });
          } else {
            $scope.users.sort(function(a, b) {
              return b.viewCount - a.viewCount;
            });
          }
        }
        
       if (category == 'id') {
          $scope.idClicked = !$scope.idClicked;
          if ($scope.idClicked) {
            $scope.users.sort(function(a, b) {
              return a.id - b.id;
            });
          } else {
            $scope.users.sort(function(a, b) {
              return b.id - a.id;
            });
          }
        }
        
      }

  });