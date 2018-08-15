'use strict';

angular.module('sw4pspace.tools', [
    'ngRoute',
    'sw4pspace.tools.markdowneditor',
    'sw4pspace.tools.jsoneditor'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tools', {
            templateUrl: 'pages/tools/tools.html',
            controller: 'ToolsCtrl'
        });
    }])
    .controller('ToolsCtrl', function ($scope) {

        $scope.tools = [
            {
                name: "Markdown Editor",
                description: "An Editor for writing beautiful and understandable Markdown even for less experienced users.",
                href: "/#!/tools/markdowneditor"
            },
            {
                name: "JSON Editor",
                description: "A web-based tool to view, edit, format, and validate JSON.",
                href: "/#!/tools/jsoneditor"
            }
        ]

    });