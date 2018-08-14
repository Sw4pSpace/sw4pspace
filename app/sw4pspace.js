'use strict';

// Declare app level module which depends on views, and components
angular.module('sw4pspace', [
    'ngRoute',
    'sw4pspace.home',
    'sw4pspace.projects',
    'sw4pspace.tools',
    'sw4pspace.tools.markdowneditor',
    'sw4pspace.tools.jsoneditor'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/home'});
}]);