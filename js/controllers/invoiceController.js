/**
 * Created by morvarid on 7/11/2016.
 */
app.controller('invoiceController',["$scope","config","invoice","$location",function ($scope,config,invoice,$location) {
    config.banner = "assets/images/contact-image.png";
    config.menuIndice = 12;
    console.log("invoice controller");
    this.invoice = invoice;
    console.log("show content in invoice: ",invoice);
    if (!invoice.showContent){
        $location.path('/cart');
    } 

}]);