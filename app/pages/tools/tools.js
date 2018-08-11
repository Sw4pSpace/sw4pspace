'use strict';

angular.module('myApp.tools', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tools', {
            templateUrl: 'pages/tools/tools.html',
            controller: 'ToolsCtrl'
        });
    }])
    .controller('ToolsCtrl', function ($scope) {
        if(!$scope.simplemde) {
            $scope.simplemde = new SimpleMDE({element: document.getElementById('markdownEditor')});
        }
    });