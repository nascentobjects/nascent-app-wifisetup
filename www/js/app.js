// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

var kProductId = 'com.nascentobjects.NascentWifi';
app.run(function ($ionicPlatform, $rootScope) {
    $rootScope.kProductId = kProductId;

    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        /*
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        */
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.alexa', {
        url: '/alexa',
        views: {
            'menuContent': {
                templateUrl: 'templates/alexa.html',
                controller: 'AlexaCtrl'
            }
        }
    })

    .state('app.wifisetup', {
        url: '/wifisetup',
        views: {
            'menuContent': {
                templateUrl: 'templates/wifisetup.html',
                controller: 'WifiSetupCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/wifisetup');
});
