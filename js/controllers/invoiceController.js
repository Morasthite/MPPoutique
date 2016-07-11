/**
 * Created by morvarid on 7/11/2016.
 */
app.controller('invoiceController',["$scope","config","invoice",function ($scope,config,invoice) {
    config.banner = "assets/images/contact-image.png";
    console.log("invoice controller");
    this.invoice = invoice;
}]);
