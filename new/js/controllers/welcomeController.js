app.controller('welcomeController',["$scope",function ($scope) {
    $scope.banner = "assets/images/welcome-image.png";
    console.log("welcome controller: ", $scope.banner);
}]);