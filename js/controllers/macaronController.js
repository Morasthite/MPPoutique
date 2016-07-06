/** Macaron Controller calls database to retrieve macaron inventory and displays to the DOM@ our-macarons.html,
 * $timeout makes sure that config gets transfered back here correctly,
 * Scope is being passed in in case we use it later for another functionality,
 * cart is coming from cart_service.js, it passes in the total inventory, gets updated by this controller when add or minus is run
**/

app.controller('macaronController', ["$scope", "$timeout", "config","cart", function ($scope, $timeout, config, cart) {
    var self = this;
    config.banner = "assets/images/our-macarons-image.png";
    config.menuIndice = 2;
    //TODO:
    // api call to get inventory @ cart_service.js
    self.cart = cart;
    this.add = function (macaron) {
        macaron.ordered++;
        cart.total = cart.total+1;
    };
    this.minus = function (macaron) {
        if (macaron.ordered != 0) {
            cart.total = cart.total-1;
            macaron.ordered = macaron.ordered-1;
        }
    };
}]);