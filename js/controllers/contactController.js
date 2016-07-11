/**  **/
app.controller('contactController',["$scope","config","$http",function ($scope,config,$http) {
    config.banner = "assets/images/contact-image.png";
    config.menuIndice = 4;
    /////////////variable to show the form
    var self = this;
    this.show_form = true;
    this.show_thank = false;
   ///////////two way data binding with input values in the form
    this.user = {
        contact_name : "",
        contact_email : "",
        contact_comment : ""
    };
    //console.log("contact_email: ",$scope.user);
    //////////////submit button for contact form
    this.submit = function() {
        $http({
            method: 'POST',
            data : $scope.user,
            url: 'php/contact-form.php'
        }).then(function successCallback(response) {
            if (response.data == "send") {
                console.log("condition is true");
              self.show_form = false;
              self.show_thank = true;
            }
            console.log("contact response: ",response.data);
        }, function errorCallback(response) {
            console.log("contact error");
        });
    };
}]);