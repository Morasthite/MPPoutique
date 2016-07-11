/**
 * Created by morvarid on 7/11/2016.
 */
app.controller('invoiceController',["$scope","config","invoice",function ($scope,config,invoice) {
    config.banner = "";
    console.log("invoice controller");
    this.invoice = invoice;
    if (!invoice.showContent){
        $location.path('/cart');
    } 

}]);


// function Ctrl2($scope, $location) {
//     $scope.doSomethingAndChangeRoute = function() {
//         alert('You\'re about to go back to page 1...');
//         $location.path('/page1');
//     }
