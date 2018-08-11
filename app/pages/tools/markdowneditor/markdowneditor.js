'use strict';

angular.module('sw4pspace.tools.markdowneditor', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tools/markdowneditor', {
            templateUrl: 'pages/tools/markdowneditor/markdowneditor.html',
            controller: 'MarkdownEditorCtrl'
        });
    }])
    .controller('MarkdownEditorCtrl', function ($scope) {
        if(!$scope.simplemde) {
            $scope.simplemde = new SimpleMDE({element: document.getElementById('markdownEditor')});
        }
    });