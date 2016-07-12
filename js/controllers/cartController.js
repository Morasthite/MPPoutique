/** cartController takes current cart inventory from cart service (passed in from macaronController), displays to DOM
 * and:  - calculates subtotals/totals etc
 *       - (v2) allows modifications by customer(add or subtract from each item in the cart)
 *       -  when "procceed to checkout button clicked - make $http call to macaron_inventory_call.php, receive json back,
 *          use json to compare with inventory in the cart to make sure cart content is less than current inventory from
 *          database >>>>> else, display error message.
 *          **/

app.controller('cartController',["$scope","$http","config","cart", "invoice", function ($scope, $http, config,cart,invoice) {
    config.banner = "assets/images/contact-image.png";
    config.menuIndice = 5;
    var self = this;  //console.log("cart_service inventory = cart.macaron_array: ", cart.macaron_array);
    self.invoice = invoice;
    self.shipping = 7;
    self.subexists = parseInt(cart.subTotal); //console.log("sub exists: ", self.subexists);
    self.cart = cart;
    cart.tax = parseFloat((parseInt(cart.subTotal) * .09).toFixed(2));
    cart.totalCost = cart.subTotal + cart.tax + self.shipping;
    cart.totalCost = parseFloat((cart.totalCost).toFixed(2));
        //console.log("self.cart: ", self.cart, "cart.totalCost: ", cart.totalCost, "cart.subTotal: ", cart.subTotal, "cart.tax", cart.tax, "self.shipping", self.shipping);
    $scope.filter = function(item){
            if(item.ordered >0){
                return item.ordered > 0;
            }
    };
    self.addSubTotal = function(count, price){
        return  parseFloat((parseInt(count) * parseFloat(price)).toFixed(2)) ;
    };

    self.finalizedOrder = [];
    self.finalizedOrder.Cart = [];
    self.finalizedOrder.customer = [];
    self.finalizedOrder.orderNumber = "";
    self.finalizedOrder.orderTime = "";
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
                //self.displayToShipToForm(response);
                    /** cart vs current inventory comparison: find ordered items from self.cart, compare inventory to cart order, push to finalizedOrder Cart**/

                    var data = response.data;
                    self.dbCart = data[1];
                    console.log("cartC.proceedToCheckout received response from checkout.php, response = : ", data);
                    if(data === 'Login'){
                        //console.log("Please Choose Login, Sign Up, or Checkout As Guest First");
                        $scope.showPlzLoginMessage = true;
                        /** TODO: append to DOM ^**/
                    }
                    else {
                        for (var mikolajczyk = 0; mikolajczyk < self.dbCart.length; mikolajczyk++) {
                            for (var grodezteszky = 0; grodezteszky < self.cart.macaron_array.length; grodezteszky++) {
                                if (self.cart.macaron_array[grodezteszky].ordered > 0) {
                                    if ((self.cart.macaron_array[grodezteszky].name == self.dbCart[mikolajczyk].name) && (self.cart.macaron_array[grodezteszky].ordered > 0) && (self.cart.macaron_array[grodezteszky].ordered <= self.dbCart[mikolajczyk].amount)) {
                                        console.log("self.cart.macaron_array[grodezteszky].name and .ordered = ", self.cart.macaron_array[grodezteszky].name, self.cart.macaron_array[grodezteszky].ordered, '\n', " COMPARE self.dbCart[mikolajczyk].name and .amount = ", self.dbCart[mikolajczyk].name, self.dbCart[mikolajczyk].amount, '\n', "It's kewl, Willis, you can order ", self.cart.macaron_array[grodezteszky].ordered, " ", self.cart.macaron_array[grodezteszky].name);
                                        self.finalizedOrder.Cart.push(self.cart.macaron_array[mikolajczyk]);
                                        /*TODO: Create & Display "thanks for your order form here */
                                    }
                                    else if ((self.cart.macaron_array[grodezteszky].name == self.dbCart[mikolajczyk].name) && (self.cart.macaron_array[grodezteszky].ordered > 0) && (self.cart.macaron_array[grodezteszky].ordered > self.dbCart[mikolajczyk].amount)) {    /*TODO: Create & Display "Not enough inventory form here */
                                        console.log("Display this to DOM: " + "We be sorry Willis. There are only " + self.dbCart[mikolajczyk].amount + " " + self.dbCart[mikolajczyk].name + " macarons left." + "\n" + "  Please go back and lower the number of " + self.dbCart[mikolajczyk].name + " macarons in your order");

                                    }
                                }//end if(self.cart.macaron_array[grodezteszky].ordered > 0)
                            }//end for(var grodezteszky = 0
                        }//end for(var mikolajczyk=0
                        console.log("self.finalizedOrder = ", self.finalizedOrder);
                    }//else
                },
                function error(response) {
                    console.log("Oops, something went wrong", response);
                }
            );//then

    };//end proceedToCheckOut

    self.displayToShipToForm = function(response){
        var data = response.data;
        console.log("self.displayToShipToForm is running, cartC.proceedToCheckout received successful response from checkout.php, response = : ", data);
        self.dbCart = data[1];
        self.finalizedOrder.customer = data[0][0];
        self.finalizedOrder.customer.name = self.finalizedOrder.customer.firstName + " " +self.finalizedOrder.customer.lastName;
        // add to checkout.php customer query
        ////    $customerQuery = "SELECT `firstName`, `lastName`, `street`, `city`, `state`, `zip`, `company`, `attn`, `phone`, `email` FROM `customer` WHERE `id` = $id ";

        self.finalizedOrder.customer.c_card_display = "************"+self.finalizedOrder.customer.c_card.slice(12,16);
        self.finalizedOrder.customer.address = self.finalizedOrder.customer.street+ " " +self.finalizedOrder.customer.city+ " " +self.finalizedOrder.customer.state+ " " +self.finalizedOrder.customer.zip;
    };//end displayToShipToForm

    self.generateOrderNumber = function(){
        var orderDay = new Date();
        var orderTime = orderDay.getTime();
        self.finalizedOrder.orderNumber = self.finalizedOrder.customer.firstName + self.finalizedOrder.customer.lastName + orderTime;
        self.finalizedOrder.orderTime = orderTime;
        //console.log("self.finalizedOrder.orderNumber",self.finalizedOrder.orderNumber);
    };//end generatOrderNumber

    self.placeYourOrder = function (){
        console.log('self.placeYourOrder is running');
        self.generateOrderNumber();
        invoice.showContent = true;
        invoice.customer = self.finalizedOrder.customer;
        invoice.cart = self.finalizedOrder.Cart;
        invoice.orderNumber = self.finalizedOrder.orderNumber;
        invoice.orderTime = self.finalizedOrder.orderTime;
        console.log("invoice = ", invoice);
        $http({
            url: "php/save_order.php",
            method: "post",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(invoice),
            cache: false
        })
            .then(
                function success(response){
                    //console.log("response = ",response);
                    var data = response.data;
                    console.log("self.placeYourOrder received  response from save_order.php" +"\n"+ "response.data = : ", data);
                },
                function error(response) {
                    console.log("Oops, something went wrong", response);
                }
            );//then
    };//end placeYourOrder

    /** ng-click handler for toggling the login/signup/guestcheckout forms **/

        $scope.showLoginButton = true;
        $scope.showSignUpButton = true;
        $scope.showGuestCheckoutButton = true;
        $scope.showProceedToCheckoutButton = true;
        $scope.showLoginForm = false;
        $scope.showSignUpForm = false;
        $scope.showGuestCheckoutForm = false;
        $scope.showPlaceYourOrderButton = false;
        $scope.showPlzLoginMessage = false;
        $scope.showShipToForm = false;
        $scope.showThanksSigningUpMessage = false;
        $scope.showGuestCheckOutMessage = false;
        $scope.showThnxLoginMessage = false;


    self.hideLoginButtons = function(){
        $scope.showLoginButton = false;
        $scope.showSignUpButton = false;
        $scope.showGuestCheckoutButton = false;
    };

    self.showLoginFormToggle = function () {
        $scope.showSignUpForm = false;
        $scope.showGuestCheckoutForm = false;
        $scope.showLoginForm = !$scope.showLoginForm;
        $scope.showPlzLoginMessage = false;
    };
    self.showSignUpFormToggle = function () {
        $scope.showLoginForm = false;
        $scope.showGuestCheckoutForm = false;
        $scope.showSignUpForm = !$scope.showSignUpForm;
    };
    self.showGuestCheckoutFormToggle = function () {
        $scope.showLoginForm = false;
        $scope.showSignUpForm = false;
            //console.log("test",$scope.showGuestCheckoutForm);
        $scope.showGuestCheckoutForm = !$scope.showGuestCheckoutForm;
    };

    self.hideLoginForm = function () {
        $scope.showLoginForm = !$scope.showLoginForm;
    };
    self.hideSignUpForm = function () {
        $scope.showSignUpForm = !$scope.showSignUpForm;
        $scope.showThanksSigningUpMessage = !$scope.showThanksSigningUpMessage;
    };
    self.hideGuestCheckoutForm = function () {
        $scope.showGuestCheckoutForm = !$scope.showGuestCheckoutForm;
        $scope.showGuestCheckOutMessage = true;
    };

    /** ng-click handler for the login-forms submit buttons **/


    // self.showShipToForm_logInBtn = function(){
    //         //console.log("showShipToForm_logInBtn is running ", "$scope.showShipToForm = ",$scope.showShipToForm);
    //     $scope.showShipToForm = true;
    //     $scope.showLoginForm = false;
    //     self.hideLoginButtons();
    //     $scope.showProceedToCheckoutButton = false;
    // };
    // self.showShipToForm_signUpBtn = function(){
    //         //console.log("showShipToForm_signUpBtn is running ", "$scope.showShipToForm = ",$scope.showShipToForm);
    //     $scope.showShipToForm = true;
    //     $scope.showSignUpForm = false;
    //     self.hideLoginButtons();
    //     $scope.showProceedToCheckoutButton = false;
    // };
    // self.showShipToForm_guestCheckoutBtn = function(){
    //         //console.log("showShipToForm_guestCheckoutBtn is running ", "$scope.showShipToForm = ",$scope.showShipToForm);
    //     $scope.showShipToForm = true;
    //     $scope.showGuestCheckoutForm = false;
    //     self.hideLoginButtons();
    //     $scope.showProceedToCheckoutButton = false;
    // };

    /**  ng-click handler for login-form submit button  **/
    self.loginBtnValidation = function() {
        console.log('cartC.loginBtnValidation is running');
        var username = $("#user_name").val();
        var password = $("#password").val();
        var credentials = {
            user_name: username,
            password: password
        };
        console.log("sending name/pw: ", credentials);
        $http({
            url: "php/login.php",
            method: "post",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(credentials),
            cache: false
        })
            .then(
                function success(response){
                    //console.log("response = ",response);
                    var data = response.data;
                    console.log("cartC.loginBtnValidation received  response from login.php" +"\n"+ "response.data = : ", data, "typeof = ", typeof data, "data[0] = ", data[0]);
                    //if(data[0]['user'])
                    self.hideLoginButtons();
                    $scope.showThnxLoginMessage = true;
                },
                function error(response) {
                    console.log("Oops, something went wrong", response);
                    //$("body").append('<h3>' + 'Error:' + response + '</h3>');
                }
            );//then
    };//end proceedToCheckOut
        /**TODO: validation not correct yet, login.php sending back empty Array**/

    /** **/



 }]);


