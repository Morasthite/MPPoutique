/** cartController takes current cart inventory from cart service (passed in from macaronController), displays to DOM
 * and:  - calculates subtotals/totals etc
 *       - (v2) allows modifications by customer(add or subtract from each item in the cart)
 *       -  when "procceed to checkout button clicked - make $http call to macaron_inventory_call.php, receive json back,
 *          use json to compare with inventory in the cart to make sure cart content is less than current inventory from
 *          database >>>>> else, display error message.
 *          **/

app.controller('cartController',["$scope","$http","config","cart", function ($scope, $http, config,cart) {
    config.banner = "assets/images/contact-image.png";
    config.menuIndice = 5;
    var self = this;
            //console.log("cart_service inventory = cart.macaron_array: ", cart.macaron_array);
    self.cart = cart;
    self.shipping = 7;
    self.subexists = parseInt(cart.subTotal);
        //console.log("sub exists: ", self.subexists);
    cart.tax = parseFloat((parseInt(cart.subTotal) * .09).toFixed(2));
    cart.totalCost = cart.subTotal + cart.tax + self.shipping;
    cart.totalCost = parseFloat((cart.totalCost).toFixed(2));
        //console.log("self.cart: ", self.cart, "cart.totalCost: ", cart.totalCost, "cart.subTotal: ", cart.subTotal, "cart.tax", cart.tax, "self.shipping", self.shipping);
    $scope.filter = function(item){
            if(item.ordered >0){
                return item.ordered > 0;
            }
    };
        //self.currentOrderArray = [];
    self.addSubTotal = function(count, price){
            //console.log("Count", count, "Price", price);
        return  parseFloat((parseInt(count) * parseFloat(price)).toFixed(2)) ;
    };

    self.proceedToCheckout = function() {
        console.log('cartC.proceedToCheckout is running');
        self.dbCart = [];
        $http({
            url: "php/checkout.php",
            method: "post",
            cache: false
        })
            .then(
                function success(response){
                    console.log(response);
                    var data = response.data;
                    console.log("cartC.proceedToCheckout received successful response from checkout.php, response = : ", data);
                },
                function error(response) {
                    console.log("Oops, something went wrong", response);
                }
            );//then
    };//end proceedToCheckOut
    $scope.showLoginForm = false;
    $scope.showSignUpForm = false;
    $scope.showGuestCheckoutForm = false;
    self.showLoginFormToggle = function () {
        console.log('scope loginform:',$scope.showLoginForm);
        superglobal = $scope;
        $scope.showSignUpForm = false;
        $scope.showGuestCheckoutForm = false;
        $scope.showLoginForm = !$scope.showLoginForm;
        console.log('scope loginform:',$scope.showLoginForm);
    };
    self.showSignUpFormToggle = function () {
        $scope.showLoginForm = false;
        $scope.showGuestCheckoutForm = false;
        $scope.showSignUpForm = !$scope.showSignUpForm;

    };
    self.showGuestCheckoutFormToggle = function () {
        $scope.showLoginForm = false;
        $scope.showSignUpForm = false;
        console.log("test",$scope.showGuestCheckoutForm);
        $scope.showGuestCheckoutForm = !$scope.showGuestCheckoutForm;

    };
}]);




































//// Old snippets////

// self.currentOrderArray = [{
//     amount: "",
//     description: "",
//     id: "",
//     name: "",
//     ordered:"",
//     price: "",
//     source:""
// }];


