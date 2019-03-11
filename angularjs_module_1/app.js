(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
      $scope.name = "Yaakov";
      $scope.sayHello = function () {
        return "Hello Coursera!";
      };
    });
    
    })();

(function () {
    'use strict';
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.item_list = "";
        $scope.state = "";
 
        $scope.checkIfTooMuch = function () {
            if (!$scope.item_list) {
               $scope.state = "Please enter data first";
            } else {
                $scope.item_list = $scope.item_list.split(",");
                if ($scope.item_list.length < 4) {
                    console.log($scope.item_list.length);
                    $scope.state = "Enjoy!";
                } else {
                    $scope.state = "Too much!";
                }
            }

        };

        $scope.sayMessage = function () {
            if (!$scope.item_list)
               return "Please enter data first";
        };
      }

})();    