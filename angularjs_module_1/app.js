(function () {
    'use strict';
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.item_list = "";
        $scope.message = "";
 
        $scope.checkIfTooMuch = function () {
            if (!$scope.item_list) {
               $scope.message = "Please enter data first";
            } else {
                $scope.item_list = $scope.item_list.split(",");
                if ($scope.item_list.length < 4) {
                    console.log($scope.item_list.length);
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }

        };
      }

})();    