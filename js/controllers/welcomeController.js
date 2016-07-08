/**  **/
app.controller('welcomeController',["$scope","config",function ($scope,config) {
    config.banner = "assets/images/welcome-image.jpg";
    config.menuIndice = 1;
}]);