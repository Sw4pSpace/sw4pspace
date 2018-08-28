'use strict';

angular.module('sw4pspace.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', function($scope, $sce) {
        $scope.websiteTitle = 'Sw4pSpace';

        $scope.team = [
            {
                name: 'Jack DeSive',
                avatar: 'https://avatars0.githubusercontent.com/u/31785177?s=460&v=4',
                links: '@jdesive | sw4pspace.com',
                title: 'Software Engineer/Architect',
                bio: 'Open Source - Java - C# - C++ - Python - Coffeescript - GWT - Polymer - Angular'
            }
        ];

        $scope.menuButtons = [
            {name: 'Home', link: '/#!/home'},
            {name: 'Tools', link: '/#!/tools'},
            {name: 'Projects', link: '/#!/projects'},
            {name: 'Docs', link: 'http://docs.sw4pspace.com'}
        ];

        $scope.scripts = [
            {src: 'bower_components/angular/angular.js'},
            {src: 'bower_components/angular-route/angular-route.js'},
            {src: 'sw4pspace.js'},
            {src: 'pages/home/home.js'},
            {src: 'pages/projects/projects.js'},
            {src: 'pages/tools/tools.js'},
            {src: 'pages/tools/markdowneditor/markdowneditor.js'},
            {src: 'pages/tools/jsoneditor/jsoneditor.js'}
        ];

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

    });