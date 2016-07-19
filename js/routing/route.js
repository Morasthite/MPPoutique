/**  **/
var app = angular.module("mainApp", ['ngRoute', 'ngAnimate', 'ngMaterial','ngSanitize', 'ngMessages', 'material.svgAssetsCache']);

app.config (["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'welcome.html',
            controller: 'welcomeController',
            controllerAs:"wc"
        })
        .when('/macarons',{
            templateUrl: 'our-macarons.html',
            controller: 'macaronController',
            controllerAs:"mc"
        })
        .when('/gifts',{
            templateUrl: 'gifts_parties.html',
            controller: 'giftController',
            controllerAs:"gc"
        })
        .when('/contact',{
            templateUrl: 'contact.html',
            controller: 'contactController',
            controllerAs:"contactC"
        })
        .when('/cart',{
            templateUrl: 'cart.html',
            controller: 'cartController',
            controllerAs:"cartC"
        })
        .when('/invoice',{
            templateUrl: 'invoice.html',
            controller: 'invoiceController',
            controllerAs:"invoiceC"
        })
        .when('/logout',{
        templateUrl: 'logout.html',
        controller: 'logoutController',
        controllerAs:"logoutC"
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
