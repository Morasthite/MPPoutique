/**
 * Created by morvarid on 7/11/2016.
 */
app.controller('invoiceController',["$scope","config","invoice","$location","cart",function ($scope,config,invoice,$location,cart) {
    config.banner = "assets/images/contact-image.png";
    config.menuIndice = 12;
    //console.log("invoice controller");
    $scope.date = new Date();
    this.invoice = invoice;
    this.shipping = 7;
    this.cart = cart;
    console.log("show content in invoice: ",invoice);
    this.addSubTotall = function(count, price){
        return  parseFloat((parseInt(count) * parseFloat(price)).toFixed(2)) ;
    };
    /////////////if invoice in empty
    if (!invoice.showContent){
        $location.path('/cart');
    } /////////////end of if

}]);