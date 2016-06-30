var app = angular.module("mainApp", ['ngRoute']);

app.config (["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'welcome.html',
            controller: 'welcomeController as wc'
        })
        .when('/macarons',{
            templateUrl: 'our-macarons.html',
            controller: 'macaronController as mc'
        })
        .when('/gifts',{
            templateUrl: 'gifts_parties.html',
            controller: 'giftController as gc'
        })
        .when('/contact',{
            templateUrl: 'contact.html',
            controller: 'contactController as coc'
        })
        .when('/cart',{
            templateUrl: 'cart.html',
            controller: 'cartController as cac'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
