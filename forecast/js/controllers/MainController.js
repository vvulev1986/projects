/**
 * Created by user on 13.12.2015 �..
 */
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
        $scope.fiveDay = data;
    });
}]);
