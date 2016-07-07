app.controller('macaronController', ["$scope", "$timeout", "config","cart", function ($scope, $timeout, config,cart) {
    var self = this;
    config.banner = "assets/images/our-macarons-image.png";
    config.menuIndice = 2;
    self.inventory = cart.inventory;
    console.log("here",cart.inventory);
    cart.inventory.then(function (response) {
        var macaron_array = [];
        macaron_array.push(response.data);
        // console.log("this one: ",macaron_array);
        self.cart.macaron_array =[];
        for(var i=0; i<response.data.length-1;i++){
            self.cart.macaron_array.push(response.data[i]);
        }
        console.log("after adding: ",cart.macaron_array);
    });
    //TODO:
    // api call to get inventory
    self.cart = cart;
    console.log("cart: ",cart);
    this.add = function (macaroon) {
        if (macaroon.ordered < macaroon.amount) {
            macaroon.ordered++;
            cart.total = cart.total + 1;
            console.log("cart after add: ", cart);
        }///end of if
    };
    this.minus = function (macaron) {
        if (macaron.ordered != 0) {
            cart.total = cart.total-1;
            macaron.ordered = macaron.ordered-1;
        }
    };
}]);