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
app.controller('mainController',function ($scope) {
    $scope.banner = "../assets/images/welcome-image.png";
}).controller('macaronController',function ($scope) {
    $scope.banner = "../assets/images/our-macarons-image.png";
    console.log("macarons");
}).controller('giftController',function ($scope) {
    $scope.banner = "../assets/images/gifts-parties-image.png";
}).controller('contactController',function ($scope) {
    $scope.banner = "../assets/images/contact-image.png";
}).controller('cartController',function ($scope) {
    $scope.banner = "../assets/images/welcome-image.png";
}).controller('signinController',function ($scope) {
    $scope.banner = "../assets/images/welcome-image.png";
});

