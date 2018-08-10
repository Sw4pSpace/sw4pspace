angular.module('myApp.projects', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'pages/projects/projects.html',
            controller: 'ProjectsCtrl'
        });
    }])

    .controller('ProjectsCtrl', function($scope) {

        $scope.projects = [
            'Sw4pSpace/sw4pspace',
            'Sw4pSpace/Log',
            'Sw4pSpace/sw4p-elements'
        ]

    });