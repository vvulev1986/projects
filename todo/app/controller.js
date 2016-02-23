/**
 * Created by user on 21.11.2015 ã..
 */
angular.module('todoApp.controller',[])
    .controller('todoController',["$scope", "$filter", function($scope, $filter){

        $scope.newTask = "";

        $scope.taskList = [
            {description:"Buy Airplane tickets", done:false},
            {description:"Make Hotel Reservation", done:false},
            {description:"Chill", done:false}
        ]

        $scope.addTodo = function(){
             $scope.taskList.push({description: $scope.newTask, done:false});
             $scope.newTask = "";
        };
        $scope.deleteTodo = function(index) {
            $scope.taskList.splice(index, 1);
        };
        $scope.$watch('taskList',function(){
           $scope.pendingCount = $filter('filter')($scope.taskList,{done : false}).length;
        }, true)

        $scope.clearCompleted = function () {
            $scope.taskList = $filter('filter')($scope.taskList, {done: false});
        };
    }]);