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
var route = false;
var userLocation = {
    lat : null,
    lng: null
} ;
var map_info={
    user: null,
    store: null,
    map: null,
    mapDiv: null
}
var map=null;
function initMap() {
    getLocation();
    var mapDiv = document.getElementById('map');
    map_info.mapDiv = mapDiv;
    var store=new google.maps.LatLng(33.532029,-117.702148);
    map_info.store = store;


    map = new google.maps.Map(mapDiv, {
        center: store,
        zoom: 7,
         mapTypeId:google.maps.MapTypeId.ROADMAP
    });
    map_info.map = map;
    var marker=new google.maps.Marker({
        position:map.center,
        animation:google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

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
    //initMap();
    var user = new google.maps.LatLng(userLocation.lat, userLocation.lng);
    map_info.user = user;
    var trip = [map_info.store, map_info.user];

    console.log("user location from inside show position: ", userLocation," map info: ",map_info);
    var usermarker = new google.maps.Marker({
        position: user,
    });
    usermarker.setMap(map_info.map);
    var infowindow = new google.maps.InfoWindow({
        content:"You are here!"
    });
    infowindow.open(map_info.map,usermarker);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: map_info.user,
        destination: map_info.store,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions( { suppressMarkers: true } );
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

};

