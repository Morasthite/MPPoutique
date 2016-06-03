var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'home.html',
            controller: 'mainController'
        })
        .when('/macarons',{
                templateUrl: 'macarons.html',
                controller: 'macaronController'
        })
        .when('/gifts',{
                templateUrl: 'gifts_parties.html',
                controller: 'giftController'
        })
        .when('/contact',{
                templateUrl: 'contact.html',
                controller: 'contactController'
        })
        .when('/cart',{
                templateUrl: 'cart.html',
                controller: 'cartController'
        })
        .when('/sign_in',{
                templateUrl: 'sign_in.html',
                controller: 'signinController'
        })
        .otherwise({
                redirectTo: '/'
        });
});
app.controller('mainController',function () {

});
app.controller('macaronController',function () {

});
app.controller('giftController',function () {

});
app.controller('contactController',function () {

});
app.controller('cartController',function () {

});
app.controller('signinController',function () {

});

