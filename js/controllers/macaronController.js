/** Macaron Controller calls database to retrieve macaron inventory and displays to the DOM@ our-macarons.html,
 * $timeout makes sure that config gets transfered back here correctly,
 * Scope is being passed in in case we use it later for another functionality,
 * cart is coming from cart_service.js, it passes in the total inventory, gets updated by this controller when add or minus is run
 **/
app.controller('macaronController', ["$scope", "$timeout", "config","cart", function ($scope, $timeout, config,cart) {
    var self = this;
    config.banner = "assets/images/our-macarons-image.png";
    config.menuIndice = 2;
    self.inventory = cart.inventory;
    // console.log("cart inventory @ beginning of macaronController: ",cart.inventory);
    cart.inventory.then(function (response) {
        var macaron_array = [];
        macaron_array.push(response.data);
        // console.log("this one: ",macaron_array);
        self.cart.macaron_array =[];
        for(var i=0; i<response.data.length;i++){
            self.cart.macaron_array.push(response.data[i]);
        }
        // console.log("cart.macaron_array after adding: ",cart.macaron_array);
    });
    //TODO:
    // api call to get inventory
    self.cart = cart;
    //console.log("cart: ",cart);
    this.add = function (macaron) {
        if (macaron.ordered < macaron.amount) {
            macaron.ordered++;
            cart.total = cart.total+ 1;
            // cart.subTotal += parseFloat(macaron.price) * parseInt(macaron.ordered);
            //     console.log("cart.subTotal: ",cart.subTotal);
            // cart.tax = Math.round(((cart.subTotal * .09) * 100) /100);
            //     console.log("cart.tax: ", cart.tax);
            // cart.shipping = 7;
            // cart.totalCost = cart.subTotal + cart.tax + cart.shipping;
            //     console.log("cart.totalCost: ", cart.totalCost);
        }///end of if
    };
    this.minus = function (macaron) {
        if (macaron.ordered != 0) {
            macaron.ordered = macaron.ordered-1;
            cart.total = cart.total-1;
            // cart.subTotal += parseFloat(macaron.price) * parseInt(macaron.ordered);
            //     console.log("cart.subTotal= parseFloat(macaron.price) * parseInt(macaron.ordered) =  ",parseFloat(macaron.price)," * ",parseInt(macaron.ordered), " = ",cart.subTotal);
            // cart.tax = Math.round(((cart.subTotal * .09) * 100) /100);
            //     console.log("cart.tax: ", cart.tax);
            // cart.shipping = 7;
            // cart.totalCost = cart.subTotal + cart.tax + cart.shipping;
            //     console.log("cart.totalCost: ", cart.totalCost);
        }
    };
}]);
