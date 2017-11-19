// public/core.js
var scotchTodo = angular.module('scotchTodo', []) //Angular 1.5
.controller('mainController',['$scope','$http',function($scope,$http){
        $scope.formData = {};
    
        // when landing on the page, get all todos and show them
        /*$http.get('/api/todos')
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        */
        //Angular 1.4.3
        $http({
            method: 'GET',
            url: '/api/todos'
        }).then(function successCallback(response){
            $scope.todos = response.data;
            console.log(response); 
        },function errorCallback(response){
            console.log('Error: ' + response);
        })
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {
            /*
            $http.post('/api/todos', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
            */
            $http({
                method:'POST',
                url: '/api/todos',
                data: $scope.formData
            }).then(function successCallback(response){
                $scope.formData = {};
                $scope.todos = response.data;
                console.log(response);
            }, function errorCallback(response){
                console.log('Error: ' + response);
            })
        };
    
        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            /*
            $http.delete('/api/todos/' + id)
                .success(function(data) {
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);  
                });
            */
            console.log('id: ' + id);
            $http({
                method: 'DELETE',
                url: '/api/todos/' + id
            }).then(function successCallback(response){
                $scope.todos = response.data;
                console.log(response);
            },function errorCallback(response){
                console.log('Error: ' + response);
            })
        };
}]);