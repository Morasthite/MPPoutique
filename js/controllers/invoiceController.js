
app.controller('invoiceController',["$scope","config","invoice","$location","cart","$http",function ($scope,config,invoice,$location,cart,$http) {
    config.banner = "assets/images/banners/contact-image.png";
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
    this.invoice.customer.phoneDisplay = ((invoice.customer.phone).toString()).slice(0,3)+"-"+
    ((invoice.customer.phone).toString()).slice(3,6)+"-"+((invoice.customer.phone).toString()).slice(6,10);
    if (!invoice.showContent){
        $location.path('/cart');
    } /////////////end of if

    var invoice_mail = {
        cart: invoice.cart,
        customer: invoice.customer,
        orderNumber: invoice.orderNumber,
        date: $scope.date,
        subtotal: cart.subTotal,
        tax: cart.tax,
        shipping: 7,
        total: cart.totalCost
    };
  console.log("invoice_mail info : ", invoice_mail);
    $http({
        method: 'POST',
        data : invoice_mail,
        url: 'php/invoice_mail.php'
    })
}]);///end of controller