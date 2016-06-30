var app = angular.module("mainApp", ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'index.html',
                controller: 'mainController'
            })
            .when('/macarons',{
                templateUrl: 'our-macarons.html',
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
    console.log($scope.banner);
});
app.controller('macaronController',function ($scope) {
    $scope.banner = "../assets/images/our-macarons-image.png";
});
app.controller('giftController',function ($scope) {
    $scope.banner = "../assets/images/logo.png";
});
app.controller('contactController',function ($scope) {
    $scope.banner = "../assets/images/contact-image.png";
});
// app.controller('cartController',function () {
//
// });
// app.controller('signinController',function () {

// });
