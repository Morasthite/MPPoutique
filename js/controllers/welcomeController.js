app.controller('welcomeController',["$scope","config", "$sce", function ($scope,config,$sce) {
    // config.banner = "assets/images/welcome-image.jpg";
    config.menuIndice = 1;
    $scope.carousel = $sce.trustAsHtml(config.bannerWelcome);
    $scope.banner = $sce.trustAsHtml(config.bannerWelcome);
}]);
// //     config.banner = "assets/welcome/welcome-image-1.png";
//     config.banner = "assets/images/welcome-image.jpg";
//     //config.bannerTest = $sce.trustAsHtml(config.bannerTest2);
//     config.menuIndice = 1;
// }]);