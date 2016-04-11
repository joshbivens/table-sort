angular.module("App", [])
  .controller("SortCtrl", function($scope) {
    
    $scope.methods = [
      {
        name: "First Name",
        clicked: false,
        up: false
      },
      {
        name: "Last Name",
        clicked: false,
        up: false
      },
      {
        name: "Views",
        clicked: false,
        up: false
      },
      {
        name: "ID Number",
        clicked: false,
        up: false
      }
    ];

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

    $scope.sortBy = function(method) {

      if (method.name == 'First Name') {
        method.up = !method.up;
        method.clicked = true;
        
        $scope.methods[1].clicked = false;
        $scope.methods[1].up = false;
        $scope.methods[2].clicked = false;
        $scope.methods[2].up = false;
        $scope.methods[3].clicked = false;
        $scope.methods[3].up = false;
        
        if (method.up) {
          $scope.users.sort(function(a, b) {
            if (a.firstName < b.firstName) return -1;
            if (a.firstName > b.firstName) return 1;
            0;
          });
        } else if (!method.up) {
          $scope.users.sort(function(a, b) {
            if (a.firstName < b.firstName) return 1;
            if (a.firstName > b.firstName) return -1;
            0;
          });
        }
      }

      if (method.name == 'Last Name') {
        method.up = !method.up;
        method.clicked = true;
        
        $scope.methods[0].clicked = false;
        $scope.methods[0].up = false;
        $scope.methods[2].clicked = false;
        $scope.methods[2].up = false;
        $scope.methods[3].clicked = false;
        $scope.methods[3].up = false;
        
        if (method.up) {
          $scope.users.sort(function(a, b) {
            if (a.lastName < b.lastName) return 1;
            if (a.lastName > b.lastName) return -1;
            0;
          });
        } else if (!method.up) {
          $scope.users.sort(function(a, b) {
            if (a.lastName < b.lastName) return -1;
            if (a.lastName > b.lastName) return 1;
            0;
          });
        }
      }

      if (method.name == 'Views') {
        method.up = !method.up;
        method.clicked = true;
        
        $scope.methods[0].clicked = false;
        $scope.methods[0].up = false;
        $scope.methods[1].clicked = false;
        $scope.methods[1].up = false;
        $scope.methods[3].clicked = false;
        $scope.methods[3].up = false;
        
        if (method.up) {
          $scope.users.sort(function(a, b) {
            return a.viewCount - b.viewCount;
          });
        } else if (!method.up) {
          $scope.users.sort(function(a, b) {
            return b.viewCount - a.viewCount;
          });
        }
      }

      if (method.name == 'ID Number') {
        method.up = !method.up;
        method.clicked = true;
        
        $scope.methods[0].clicked = false;
        $scope.methods[0].up = false;
        $scope.methods[1].clicked = false;
        $scope.methods[1].up = false;
        $scope.methods[2].clicked = false;
        $scope.methods[2].up = false;
        
        if (method.up) {
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