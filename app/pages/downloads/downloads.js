angular.module('myApp.downloads', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/downloads', {
            templateUrl: 'pages/downloads/downloads.html',
            controller: 'DownloadsCtrl'
        });
    }])

    .controller('DownloadsCtrl', [function () {

    }]);