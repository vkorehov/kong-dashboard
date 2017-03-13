angular.module('app').controller("ConfigController", ["$scope", "Kong", "Alert", "$location", function ($scope, Kong, Alert, $location) {
    $scope.config = angular.copy(Kong.config);

    var first_setup = !$scope.config.url;

    $scope.update = function() {
        if (!$scope.config.url) {
            $scope.config.url = "http://127.0.0.1:8001/api";
        }
        if ($scope.config.url.toLowerCase().indexOf("http") == -1) {
            $scope.config.url = "http://" + $scope.config.url;
        }

        Kong.setConfig($scope.config).then(function() {
            if (first_setup) {
                $location.path('/');
                first_setup = false;
            } else {
                // celebrate
                Alert.success('Saved!');
            }
        });
    }
}]);
