app.controller('mainController',["$log","$scope",function ($log,$scope) {
    var self = this;
    $log.log("main controller");
    $scope.banner = "assets/images/welcome-image.png";
    $log.log("banner: ",$scope.banner);
// holiday style
    var d = new Date();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var today = month+"/"+date;
    var holidays = {
        "12/25" : "css/christmas.css",
        "7/4" : "css/july4th.css",
        "1/1" : "css/newyear.css"
    };
    console.log("today: "+month+" "+date);
    for(var index in holidays) {
        if (index == today) {
            $scope.style = holidays[index];
            $log.log("style: ",$scope.style);
            break;
        } else {
            $scope.style = "css/style.css";
            $log.log("style: ",$scope.style);
        }
    }
    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.url());
        return active;
    };
}]);