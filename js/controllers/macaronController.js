/** Macaron Controller calls database to retrieve macaron inventory and displays to the DOM@ our-macarons.html,
 * $timeout makes sure that config gets transfered back here correctly,
 * Scope is being passed in in case we use it later for another functionality,
 * cart is coming from cart_service.js, it passes in the total inventory, gets updated by this controller when add or minus is run
 **/
app.controller('macaronController', ["$scope", "$timeout", "config","cart", "user","invoiceDisplay", function ($scope, $timeout, config, cart, user, invoiceDisplay) {
    var self = this;
    self.user = user;
    config.banner = "assets/images/banners/our-macarons-banner.png";
    config.menuIndice = 2;
    self.inventory = cart.inventory;
    self.invoiceDisplay = invoiceDisplay;
    console.log("cart inventory @ beginning of macaronController: ",cart.inventory);
    console.log("invoice_sent = ", invoiceDisplay.invoice_sent);

    cart.inventory.then(function (response) {
        console.log("inside cart.inventory.then");
        self.cart = cart; console.log("self.cart", self.cart);

        var macaron_array = [];
        macaron_array.push(response.data);
        self.cart.macaron_array =[];
        for(var i=0; i<response.data.length;i++){
            self.cart.macaron_array.push(response.data[i]);
            if(invoiceDisplay.invoice_sent){
                //console.log("inside invoiceDisplay.invoice_sent");
                //console.log("self.cart.macaron_array", self.cart.macaron_array);
                self.cart.macaron_array[i].ordered = 0;
            }
        }
         console.log("cart.macaron_array after adding: ",cart.macaron_array);
    });
    self.cart = cart;
    console.log("cart: ",self.cart);
    this.add = function (macaron) {
        if (macaron.ordered < macaron.amount) {
            macaron.ordered++;
            cart.total = cart.total+ 1;
            cart.subTotal += parseFloat(macaron.price);
            cart.subTotal = parseFloat((cart.subTotal).toFixed(2));
            //console.log("subtotal: ",cart.subTotal);
                //console.log("cart after add: ", cart);
        }///end of if
    };
    this.minus = function (macaron) {
        if (macaron.ordered != 0) {
            macaron.ordered = macaron.ordered-1;
            cart.total = cart.total-1;
            cart.subTotal -= parseFloat(macaron.price);
            cart.subTotal = parseFloat((cart.subTotal).toFixed(2));
            //console.log("sub total: ",cart.subTotal);
        }
    };
}]);
