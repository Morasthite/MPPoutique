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

///////////////////////////////////google map/////////////////////////
var userLocation = {
    lat : null,
    lng: null
} ;
function initMap() {
    getLocation();
    console.log("user location1: ",userLocation);
    var mapDiv = document.getElementById('map');
    var store=new google.maps.LatLng(33.532029,-117.702148);
    var user = new google.maps.LatLng(userLocation.lat,userLocation.lng);
    console.log("userLocation.lat: ", userLocation.lat, "userLocation.long: ", userLocation.lng);
    console.log("store: ", store, "user", user);

    var trip = [store, user];
    var map = new google.maps.Map(mapDiv, {
        center: store,
        zoom: 8,
         mapTypeId:google.maps.MapTypeId.ROADMAP
    });
    var marker=new google.maps.Marker({
        position:map.center,
        animation:google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
    var usermarker=new google.maps.Marker({
        position: user,
    });
    usermarker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content:"You are here!"
    });
    infowindow.open(map,usermarker);
    var flightPath=new google.maps.Polyline({
        path:trip,
        strokeColor:"#0000FF",
        strokeOpacity:0.8,
        strokeWeight:2
    });
    flightPath.setMap(map);
};
function getLocation() {
    console.log("hello from inside getLocation()");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        alert("Geolocation is not supported by this browser.");
    }
};
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    userLocation = {
        lat: lat,
        lng: lon
    };
    initMap();
    //return userLocation;
    console.log("user location: ",userLocation);
};