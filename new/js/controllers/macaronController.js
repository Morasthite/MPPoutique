app.controller('macaronController', ["$scope", "$timeout", "config","cart", function ($scope, $timeout, config,cart) {
    var self = this;
    config.banner = "assets/images/our-macarons-image.png";
    config.menuIndice = 2;
    //TODO:
    // api call to get inventory
    self.cart = cart;
    this.add = function (macaroon) {
        macaroon.ordered++;
        cart.total = cart.total+1;
    };
    this.minus = function (macaron) {
        if (macaron.ordered != 0) {
            cart.total = cart.total-1;
            macaron.ordered = macaron.ordered-1;
        }
    };
}]);