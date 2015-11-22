/**
 * Created by debasis on 12/9/15.
 */

var voortal = angular.module('voortal', ['ui.router']);


voortal.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('/', {
            url: '/',
            templateUrl: 'partial-home.html'
        })

        .state('/home1', {
            url: '/home1',
            templateUrl: 'partial-home1.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        });

   // $locationProvider.html5Mode(true).hashPrefix('!');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix:'!'
    });

});
