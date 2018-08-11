'use strict';

angular.module('myApp.tools.jsoneditor', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tools/jsoneditor', {
            templateUrl: 'pages/tools/jsoneditor/jsoneditor.html',
            controller: 'JSONEditorCtrl'
        });
    }])
    .controller('JSONEditorCtrl', function ($scope) {
        $scope.jsonEditor = Polymer.dom(this.root).querySelector('#jsonEditor');
        $scope.jsonElement = Polymer.dom(this.root).querySelector('#json');
        $scope.minified = Polymer.dom(this.root).querySelector('#minifiedJson');

        $scope._setJSON = function () {
            $scope.jsonElement.value = JSON.stringify($scope.jsonEditor.get(), null, 2);
            $scope.minified.value = JSON.stringify($scope.jsonEditor.get());
        };

        $scope._reset = function () {
            $scope.jsonEditor.setText('{}');
            $scope.jsonElement.value = "";
            $scope.minified.value = "";
        };

    });