var app = angular.module("mainApp", ['ngRoute']);

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
            controller: 'cartController as cac',
            controllerAs:"cartC"
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
