'use strict';

angular.module('myApp.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home/home.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', [function () {

    }]);