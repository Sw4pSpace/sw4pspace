'use strict';

angular.module('sw4pspace.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', function($scope, $sce) {

        $scope.trustSrc = function(src) {
          return $sce.trustAsResourceUrl(src);
        };

        $scope.team = [
            {
                name: 'Jack DeSive',
                avatar: 'https://avatars0.githubusercontent.com/u/31785177?s=460&v=4',
                links: '@jdesive | sw4pspace.com',
                title: 'Software Engineer/Architect',
                bio: 'Open Source - Java - C# - C++ - Python - Coffeescript - GWT - Polymer - Angular'
            }
        ];

    });