/** Main controller functions:  check date for predefined holidays and changes stylesheets accordingly **/

app.controller('mainController',["$log","$scope","config","cart", "user", '$sce',function ($log,$scope, config,cart, user, $sce) {
    var self = this;
    // banner
    self.config = config;
    // self.banner = "assets/images/welcome-image.png";

    // nav active class
    self.menuIndice = 1;


    // $scope.carousel = $sce.trustAsHtml(config.bannerWelcome);
   // $scope.carousel = $sce.trustAsHtml(config.bannerWelcome); //if config.menuIndice == 1, else if ==2 $sce.trustAsHtml(config.bannerWelcome)
    //$scope.bannerJuly4th = $sce.trustAsHtml(config.bannerJuly4th);

    // cart service
    self.cart = cart;
    self.user = user;
    //console.log("user in mainC:  user.isLoggedIn",user.isLoggedIn);
    
// holiday stylesheets:  define href for ng-href="{{style}}", index.html/ line 16, stylesheets based on the holiday.
    var d = new Date();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var today = month+"/"+date;
    var holidays = {
        "12/25" : "css/christmas.css",
        "7/4" : "css/july4th.css",
        "1/1" : "css/newyear.css"
    };
    //console.log("today: "+month+" "+date);
    for(var index in holidays) {
        if (index == today) {
            $scope.style = holidays[index];
            //$log.log("style: ",$scope.style);
            break;
        } else {
            $scope.style = "css/style.css";
            //$log.log("style: ",$scope.style);
        }
    }
   if ($scope.style == "css/christmas.css") {
       $scope.carousel = $sce.trustAsHtml(config.bannerChristmas);
   }else if ($scope.style == "css/july4th.css") {
       $scope.carousel = $sce.trustAsHtml(config.bannerJuly4th);
   }else if ($scope.style == "css/newyear.css") {
       $scope.carousel = $sce.trustAsHtml(config.bannerNewyear);
   }else {
       $scope.carousel = $sce.trustAsHtml(config.bannerWelcome);
   }
    /////footer
    $scope.isOpen = false;

    $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
    };
    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];

    this.isOpen = false;

    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';

    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'up';
}]);