'use strict';

angular.module('sw4pspace', [
    'ngRoute',
    'sw4pspace.home',
    'sw4pspace.projects',
    'sw4pspace.tools'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);