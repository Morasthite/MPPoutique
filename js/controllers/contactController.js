/**  **/
app.controller('contactController',["$scope","config","$http",function ($scope,config,$http) {
    config.banner = "assets/images/contact-image.png";
    config.menuIndice = 4;
    //////////////submit button for contact form
    this.submit = function() {
        $http({
            method: 'POST',
            
            url: 'php/contact-form.php'
        }).then(function successCallback(response) {
            console.log("contact response: ",response);
        }, function errorCallback(response) {
            console.log("contact error");
        });
    };
}]);