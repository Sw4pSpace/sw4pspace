'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.projects',
    'myApp.tools',
    'myApp.tools.markdowneditor',
    'myApp.tools.jsoneditor'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/home'});
}]);