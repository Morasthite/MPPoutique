/** cartController takes current cart inventory from cart service (passed in from macaronController), displays to DOM
 * and:  - calculates subtotals/totals etc
 *       - (v2) allows modifications by customer(add or subtract from each item in the cart)
 *       -  when "procceed to checkout button clicked - make $http call to macaron_inventory_call.php, receive json back,
 *          use json to compare with inventory in the cart to make sure cart content is less than current inventory from
 *          database >>>>> else, display error message.
 *          **/

app.controller('cartController',["$scope","$http","config","cart", "invoice", "user", "$mdDialog", "$mdMedia", function ($scope, $http, config,cart,invoice,user,$mdDialog, $mdMedia) {
    config.banner = "assets/images/banners/cart-banner.png";
    config.menuIndice = 5;
    var self = this;
/** **********************  CART DISPLAY  ********************** **/
    self.invoice = invoice;
    self.user = user;
    self.shipping = 7;
    self.subexists = parseInt(cart.subTotal);
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

/** **********************  CHECKOUT FUNCTIONS  ********************** **/
    self.finalizedOrder = [];
    self.finalizedOrder.Cart = [];
    self.finalizedOrder.customer = [];
    self.finalizedOrder.orderNumber = "";
    self.finalizedOrder.orderTime = "";
    self.cartEmptyCheck = function () {
        console.log('cartEmptyCheck is running');
        for(var i = 0; i <cart.macaron_array.length; i++){
            if(cart.macaron_array[i].ordered > 0){
                //self.finalizedOrder.Cart.push(cart.macaron_array[i]);
                console.log('cartEmptyCheck returns true, something has been ordered');
                return true;
            }
        }
    };
    self.lowMacArray = [];
    self.lowMacList = "";
    self.lowInventoryMacarons = function(lowMacArray) {
        for(var graznech = 0; graznech < lowMacArray.length; graznech++){
            self.lowMacList += lowMacArray[graznech];
        }
        console.log("lowmaclist = ",self.lowMacList);
        return self.lowMacList;
    };

    self.proceedToCheckout = function() {
                console.log('cartC.proceedToCheckout is running');
        if(self.cartEmptyCheck() == false){
            //console.log('YouCantBuyFromAnEmptyCart');
            $scope.openAlertOffscreen($scope.login.id.emptyCart, $scope.message_emptyCart);
        }else {
            self.dbCart = [];
            $http({
                url: "php/checkout.php",
                method: "post",
                cache: false
            })
                .then(
                    function success(response) {
                        //self.displayToShipToForm(response);
                        /** cart vs current inventory comparison: find ordered items from self.cart, compare inventory to cart order, push to finalizedOrder Cart**/
                        var data = response.data;
                        self.dbCart = data[1];
                        console.log("cartC.proceedToCheckout received response from checkout.php, response = : ", data);
                        if (data === 'Login') {
                            $scope.openAlertOffscreen($scope.login.id.loginOrSignup,$scope.message_PlzLogin);
                        }
                        else {
                            if (user.isLoggedIn = true) {
                                for (var mikolajczyk = 0; mikolajczyk < self.dbCart.length; mikolajczyk++) {
                                    for (var grodezteszky = 0; grodezteszky < self.cart.macaron_array.length; grodezteszky++) {
                                        if (self.cart.macaron_array[grodezteszky].ordered > 0) {
                                            if ((self.cart.macaron_array[grodezteszky].name == self.dbCart[mikolajczyk].name) && (self.cart.macaron_array[grodezteszky].ordered > 0) && (self.cart.macaron_array[grodezteszky].ordered <= self.dbCart[mikolajczyk].amount)) {
                                                console.log("self.cart.macaron_array[grodezteszky].name and .ordered = ", self.cart.macaron_array[grodezteszky].name, self.cart.macaron_array[grodezteszky].ordered, '\n', " COMPARE self.dbCart[mikolajczyk].name and .amount = ", self.dbCart[mikolajczyk].name, self.dbCart[mikolajczyk].amount, '\n', "It's kewl, Willis, you can order ", self.cart.macaron_array[grodezteszky].ordered, " ", self.cart.macaron_array[grodezteszky].name);
                                                self.finalizedOrder.Cart.push(self.cart.macaron_array[mikolajczyk]);
                                                /*TODO: Create & Display "thanks for your order form here */
                                            }
                                            else if ((self.cart.macaron_array[grodezteszky].name == self.dbCart[mikolajczyk].name) && (self.cart.macaron_array[grodezteszky].ordered > 0) && (self.cart.macaron_array[grodezteszky].ordered > self.dbCart[mikolajczyk].amount)) {
                                                self.lowMacArray.push(self.cart.macaron_array[grodezteszky].name);
                                                //console.log("Display this to DOM: " + "We be sorry Willis. There are only " + self.dbCart[mikolajczyk].amount + " " + self.dbCart[mikolajczyk].name + " macarons left." + "\n" + "  Please go back and lower the number of " + self.dbCart[mikolajczyk].name + " macarons in your order");
                                            }
                                        }//end if(self.cart.macaron_array[grodezteszky].ordered > 0)
                                    }//end for(var grodezteszky = 0
                                }//end for(var mikolajczyk=0
                                if(self.lowMacArray.length > 0) {
                                    self.lowInventoryMacarons(self.lowMacArray);
                                    console.log("lowMacList", self.lowMacList);
                                    $scope.openAlertOffscreen($scope.login.lowInventory, $scope.message_lowInventory);
                                    return;
                                }
                                console.log("self.finalizedOrder = ", self.finalizedOrder);
                                self.showShipToForm();
                                self.displayToShipToForm(response);
                                $scope.showPlaceYourOrderButton = true;
                            }
                        }//else//if(user.isLoggedIn = true)
                    },
                    function error(response) {
                        console.log("Oops, something went wrong", response);
                    }
                );//then
        }//else
    };//end proceedToCheckOut

    self.displayToShipToForm = function(response){
        var data = response.data;
        console.log("self.displayToShipToForm is running, cartC.proceedToCheckout received successful response from checkout.php, response = : ", data);
        //self.dbCart = data[1];
        self.finalizedOrder.customer = data[0][0];
        self.finalizedOrder.customer.name = self.finalizedOrder.customer.firstName + " " +self.finalizedOrder.customer.lastName;
        self.finalizedOrder.customer.c_card_display = "************"+self.finalizedOrder.customer.c_card.slice(12,16);
        self.finalizedOrder.customer.address = self.finalizedOrder.customer.street+ " " +self.finalizedOrder.customer.city+ " " +self.finalizedOrder.customer.state+ " " +self.finalizedOrder.customer.zip;
    };//end displayToShipToForm
    self.generateOrderNumber = function(){
        var orderDay = new Date();
        var orderTime = orderDay.getTime();
        self.finalizedOrder.orderNumber = self.finalizedOrder.customer.firstName + self.finalizedOrder.customer.lastName + orderTime;
        self.finalizedOrder.orderTime = orderTime;
        //console.log("self.finalizedOrder.orderNumber",self.finalizedOrder.orderNumber);
    };//end generateOrderNumber
    self.resetInvoice = function (invoice){
        console.log("resetInvoice is running");
        invoice = {
            showContent : false,
            customer: {},
            cart: [],
            orderTime : 0,
            orderNumber : ""
        };
        console.log("invoice = ", invoice);
        return invoice;
    };//end resetInvoice

    self.placeYourOrder = function (){
            console.log('self.placeYourOrder is running');
        if(self.finalizedOrder.Cart.length == 0){
            //console.log('You Cant Buy From An Empty Cart');
        }else {
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
        self.resetInvoice(invoice);
        self.emptyCart();
        self.showProceedToCheckoutButton = true;
        }
    };//end self.placeYourOrder

/** ********************** LOGIN/SIGNUP/GUESTCHECKOUT FORMS/MESSAGES TOGGLING NG-CLICK  **/
    self.showLoginButton = function() {
        if(user.isLoggedIn) {
            $scope.showLoginButtonDefault = true;
            return false;
        }
    };
    self.showSignUpButton = function() {
        if(user.isLoggedIn) {
            $scope.showSignUpButtonDefault = true;
            return false;
        }
    };
    self.showGuestCheckoutButton = function() {
        if(user.isLoggedIn) {
            $scope.showGuestCheckoutButtonDefault = true;
            return false;
        }
    };
    self.showLogoutLink =  function() {
        if(user.isLoggedIn) {
            $scope.showLogoutLinkDefault = true;
            return false;
        }
    };

        self.showProceedToCheckoutButton = false;
        $scope.showLoginButtonDefault = false;
        $scope.showSignUpButtonDefault = false;
        $scope.showGuestCheckoutButtonDefault = false;
        $scope.showProceedToCheckoutButton = true;
        $scope.showLoginForm = false;
        $scope.showSignUpForm = false;
        $scope.showGuestCheckoutForm = false;
        $scope.showPlaceYourOrderButton = false;
        $scope.showShipToForm = false;
        $scope.showLogoutLinkDefault = false;
        $scope.showAddressUpdateForm = false;
        $scope.showcCardUpdateForm = false;
        //$scope.showPlzLoginMessage = false;
        //$scope.showThanksSigningUpMessage = false;
        //$scope.showGuestCheckOutMessage = false;
        //$scope.showThnxLoginMessage = false;
        //$scope.showLoginFailedMessage = false;
        //$scope.showLowInventoryMessage = false;
        //$scope.showYouCantBuyFromAnEmptyCartMessage = false;
        //$scope.showCurrentUserPlzLoginMessage = false;

/** **********************  LOGIN - SIGN UP - GUEST CHECKOUT - SHIP-TO FORM NG-CLICK **/
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
        $scope.showLoginFailedMessage = false;
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
    self.showShipToForm = function(){
        $scope.showShipToForm = true;
        $scope.showLoginForm = false;
        $scope.showSignUpForm = false;
        $scope.showGuestCheckoutForm = false;
        self.hideLoginButtons();
        $scope.showProceedToCheckoutButton = false;
    };
    self.showAddressUpdateFormToggle = function () {
        $scope.showAddressUpdateForm = !$scope.showAddressUpdateForm;
    };
    self.addressUpdateFormConfirm = function () {
        $scope.openAlertOffscreen($scope.login.id.addressUpdated,$scope.message_addressUpdated);
    };
    self.showcCardUpdateFormToggle = function () {
        $scope.showcCardUpdateForm = !$scope.showcCardUpdateForm;
    };
    self.cCardUpdateFormConfirm = function () {
        $scope.openAlertOffscreen($scope.login.id.cCardUpdated,$scope.message_cCardUpdated);
    };

/**  **********************  LOGIN VALIDATION  **/
    self.loginBtnValidation = function() {
        console.log('cartC.loginBtnValidation is running');
        var credentials = {
            user_name: user.user_name,
            password: user.password
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
                        console.log("response = ",response);
                    var data = response.data;
                        console.log("cartC.loginBtnValidation received  response from login.php" +"\n"+ "response.data = : ",data);
                    if(data === "Login Failed"){
                        // $scope.showLoginFailedMessage = true;
                        $scope.openAlertOffscreen($scope.login.id.fail,$scope.message_logInFail);
                        user.isLoggedIn = false;   //cart.customerLoggedIn
                    }else{
                        self.hideLoginButtons();
                        user.isLoggedIn = true;    //cart.customerLoggedIn
                        user.firstName = data['firstName'];
                        user.firstNameColored = "<span style='color: yellow'>"+user.firstName+"</span>";
                        console.log("user.isLoggedIn = ", user.isLoggedIn);
                        console.log("user.firstName = ", data['firstName']);
                        $scope.openAlertOffscreen($scope.login.id.thnx,$scope.message_logInOK);
                        //$scope.showThnxLoginMessage = true;
                        //$scope.showLoginFailedMessage = false;
                        //$scope.showPlzLoginMessage = false;
                    }
                },
                function error(response) {
                    console.log("Oops, something went wrong", response);
                    //$("body").append('<h3>' + 'Error:' + response + '</h3>');
                }
            );//then
    };//end loginBtnValidation

/** **********************  SIGN UP AND GUEST CHECKOUT FORMS TO DATABASE **/

    self.newUser = {
            first_name: "",
            last_name: "",
            street_address: "",
            city: "",
            state: "",
            zip: "",
            company: "",
            attn: "",
            phone: "",
            email: "",
            password: "",
            c_card: "",
            c_card_exp : "",
            name_on_card: "",
            card_billing_address: ""
        };
    self.guestUser = {
            first_name: "",
            last_name: "",
            street_address: "",
            city: "",
            state: "",
            zip: "",
            company: "",
            attn: "",
            phone: "",
            email: "",
            c_card: "",
            c_card_exp : "",
            name_on_card: "",
            card_billing_address: ""
        };

    self.signUpFormSubmission = function(){
        console.log('cartC.signUpFormSubmission is running');
        self.newUser.user_name = self.newUser.email;
        console.log("self.newUser.c_card_exp = ", self.newUser.c_card_exp);
        self.newUser.c_card_exp = self.newUser.c_card_exp.toString();
        console.log("card_exp", self.newUser.c_card_exp);
        self.newUser.c_card_exp = self.newUser.c_card_exp.slice(0,33);
        console.log("new self.newUser.c_card_exp = ", self.newUser.c_card_exp);


        console.log("newUser: ", self.newUser);
        console.log("sending newUser-info to db: ", self.newUser);
        $http({
            url: "php/sign_up.php",
            method: "post",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(self.newUser),
            cache: false
        })
            .then(
                function success(response){
                        console.log("response = ",response);
                    var data = response.data;
                    console.log("cartC.signUpFormSubmission received  response from sign_up.php" +"\n"+ "response.data = : ",data);
                    if (data === 'User Already Exists') {
                        // $scope.showCurrentUserPlzLoginMessage = true;
                        $scope.openAlertOffscreen($scope.login.id.plzlogin,$scope.message_currentUser_PlzLogin);
                    }else {
                        self.hideLoginButtons();
                        user.isLoggedIn = true;    //cart.customerLoggedIn
                        user.firstName = self.newUser.first_name;
                        console.log("user.isLoggedIn = ", user.isLoggedIn);
                        console.log("user.firstName = ", user.firstName);
                        $scope.openAlertOffscreen($scope.login.id.signedUp,$scope.message_thnxSigningUp);
                        //$scope.showPlzLoginMessage = false;
                        //$scope.showThanksSigningUpMessage = true;
                    }
                },
                function error(response) {
                    console.log("Oops, something went wrong", response);
                }
            );//then
    };//end signUpFormSubmission
    self.guestCheckoutFormSubmission = function(){
        console.log('cartC.guestCheckoutFormSubmission is running');
        self.guestUser.c_card_exp = self.guestUser.c_card_exp.toString();
        console.log("card_exp", self.guestUser.c_card_exp);
        self.guestUser.c_card_exp = self.guestUser.c_card_exp.slice(0,33);
        console.log("new self.guestUser.c_card_exp = ", self.guestUser.c_card_exp);
        console.log("sending guestUser-info to db: ", self.guestUser);
        $http({
            url: "php/guest_checkout.php",
            method: "post",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(self.guestUser),
            cache: false
        })
            .then(
                function success(response){
                    console.log("response = ",response);
                    var data = response.data;
                    console.log("cartC.guestCheckoutFormSubmission received  response from guest_checkout.php" +"\n"+ "response.data = : ",data);
                    self.hideLoginButtons();
                    user.isLoggedIn = true;    //cart.customerLoggedIn
                    user.firstName = self.guestUser.first_name;
                    console.log("user.isLoggedIn = ", user.isLoggedIn);
                    console.log("user.firstName = ", user.firstName);
                    $scope.openAlertOffscreen($scope.login.id.guestCheckout,$scope.message_guestCheckoutSubmit);
                    //$scope.showGuestCheckOutMessage = true;
                },
                function error(response) {
                    console.log("Oops, something went wrong", response);
                }
            );//then
    };//end guestCheckoutFormSubmission

/** **********************  CLEARING CART AND LOG OUT **/
    self.emptyCart = function (){
        console.log("self.emptyCart is running, cart.macaron_array = ", cart.macaron_array);
        self.finalizedOrder.Cart = [];
        self.finalizedOrder.orderNumber = "";
        self.finalizedOrder.orderTime = "";

        cart = {
            //customerLoggedIn: true, //cart.customerLoggedIn
            total: 0,
            subTotal : 0,
            tax : 0,
            totalCost: 0,
            inventory : $http.post("php/macaron_inventory_call.php"),
            macaron_array : [
                {
                    name: "Chocolate",
                    description: "chocolate, macaron and ...",
                    source: "assets/images/chocolate.png",
                    price : 3.5,
                    ordered : 0
                },
                {
                    name: "Almond",
                    description: "almond, macaron and ...",
                    source: "assets/images/almond.png",
                    price : 3,
                    ordered : 0
                },
                {
                    name: "Caramel",
                    description: "caramel, macaron and ...",
                    source: "assets/images/caramel.png",
                    price : 2.99,
                    ordered : 0
                },
                {
                    name: "Coconut",
                    description: "coconut, macaron and ...",
                    source: "assets/images/coconut.png",
                    price : 3,
                    ordered : 0
                },
                {
                    name: "Coffee",
                    description: "coffee, macaron and ...",
                    source: "assets/images/coffee.png",
                    price : 3.45,
                    ordered : 0
                },
                {
                    name: "Lemon",
                    description: "lemon, macaron and ...",
                    source: "assets/images/Lemon.png",
                    price : 3.5,
                    ordered : 0
                },
                {
                    name: "Passion Fruit",
                    description: "fruit, macaron and ...",
                    source: "assets/images/passion-fruit.png",
                    price : 3.23,
                    ordered : 0
                },
                {
                    name: "Pistachio",
                    description: "pistachio, macaron and ...",
                    source: "assets/images/pistachio.png",
                    price : 3,
                    ordered : 0
                },
                {
                    name: "Raspbery",
                    description: "rasbery, macaron and ...",
                    source: "assets/images/raspbery.png",
                    price : 3.45,
                    ordered : 0
                },
                {
                    name: "Rose",
                    description: "rose, macaron and ...",
                    source: "assets/images/rose.png",
                    price : 3.25,
                    ordered : 0
                },
                {
                    name: "Rose",
                    description: "rose, macaron and ...",
                    source: "assets/images/rose.png",
                    price : 3.25,
                    ordered : 0
                },
                {
                    name: "Rose",
                    description: "rose, macaron and ...",
                    source: "assets/images/rose.png",
                    price : 3.25,
                    ordered : 0
                }
            ]};
        console.log("self.finalizedOrder.orderTime = ",self.finalizedOrder.orderTime,"self.finalizedOrder.orderNumber = ",self.finalizedOrder.orderNumber,"self.finalizedOrder.Cart = ",self.finalizedOrder.Cart, "cart  = ",cart );

    };//self.emptyCart

/** **********************  ANGULAR MDL FUNCTIONS  ********************** **/

    $scope.newDate = new Date();
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
    });
    $scope.showHints = true;
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.login = {
        id: {
            thnx: 'thnx-login-message',
            fail: 'login-failed-message',
            plzlogin: 'user-exists-login-message',
            signedUp: 'signing-up-message',
            guestCheckout: 'guest-checkout-message',
            loginOrSignup: 'login-message',
            emptyCart: 'empty-cart-message',
            lowInventory: 'low-db-inventory',
            cCardUpdated: 'cCard-updated',
            addressUpdated: 'address-updated'
        }
    };
    
    $scope.openAlertFromLeft = function() {
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Opening from the left')
                .textContent('Closing to the right!')
                .ariaLabel('Left to right demo')
                .ok('Nice!')
                // You can specify either sting with query selector
                .openFrom('#left')
                // or an element
                .closeTo(angular.element(document.querySelector('#right')))
        );
    };

    $scope.openAlertOffscreen = function(loginID,loginMessage) {
        $mdDialog.show({
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            template: loginMessage
        });
    };
    $scope.message_logInOK =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="login-success-header" style="text-align: center">Thanks For Logging In {{cartC.user.firstName}} ! You\'re exceptionally good looking today!</h5>' +
        '       </div>' +
        '   </div>   ' +
        '  </md-dialog-content>' +
        '</md-dialog>';

    $scope.message_logInFail =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="login-failed-header" style="text-align: center">Login Error: Username or Password is Incorrect!</h5>' +
        '       </div>' +
        '   </div>   ' +
        '  </md-dialog-content>' +
        '</md-dialog>';

    $scope.message_currentUser_PlzLogin =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="signup-fail-header" style="text-align: center">It looks like you\'ve already registered, please log in using your email and password</h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';

    $scope.message_thnxSigningUp =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="signup-success-header" style="text-align: center">Thanks For Signing Up {{cartC.user.firstName}} ! We\'ve been waiting for you!</h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';

    $scope.message_guestCheckoutSubmit =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="guest-checkout-success-header" style="text-align: center">Thanks For Shopping with Us, {{cartC.user.firstName}} ! You\'re exceptionally good looking today!</h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';

    $scope.message_PlzLogin =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="proceed2checkout-fail-header" style="text-align: center">Please Choose Login, Sign Up, or Checkout As Guest First</h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';

    $scope.message_emptyCart =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="proceed2checkout-cartEmpty-header" style="text-align: center">Your cart is empty!!!  Put some macarons in there before checkout.</h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';
    $scope.message_lowInventory =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="proceed2checkout-lowInv-header" style="text-align: center">We\'re sorry, .  There are not enough of the following macarons left to complete your order: {{cartC.lowMacList}} . Please go back to the macarons page and adjust the number of {{cartC.lowMacList}} macarons, or complete the order without {{cartC.lowMacList}} macarons.  Thanks.</h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';
    $scope.message_addressUpdated =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="proceed2checkout-cartEmpty-header" style="text-align: center">Awesome!  Your macarons will be shipped to {{cartC.finalizedOrder.customer.address}} </h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';
    $scope.message_cCardUpdated =
        '<md-dialog>' +
        '  <md-dialog-content>' +
        '   <div class =" login-forms show-message col-sm-offset-1 col-sm-10 col-xs-12" id="{{loginID}}" >' +
        '        <div class=" col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10 col-xs-12 well">' +
        '            <h5 class="proceed2checkout-cartEmpty-header" style="text-align: center">Sweet! Your Credit Card Is Updated...Buy...Buy...Buy</h5>' +
        '       </div>' +
        '   </div>' +
        '  </md-dialog-content>' +
        '</md-dialog>';



}]);///Cart Controller