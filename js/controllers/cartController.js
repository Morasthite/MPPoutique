/**  **/
app.controller('cartController',["$scope","$timeout","config","cart",function ($scope, $timeout, config,cart) {
   config.banner = "assets/images/contact-image.png";
   config.menuIndice = 5;
    var self = this;
    console.log("cart_service inventory = cart.macaron_array: ", cart.macaron_array);
    var current_order_array = [];
    for(var i = 0; i < cart.macaron_array.length-1; i++){
        if(cart.macaron_array[i].ordered > 0){
            console.log(cart.macaron_array[i].ordered+ " of this item has been added to the cart: ",cart.macaron_array[i]);
            current_order_array.push(cart.macaron_array[i]);
        }
        console.log("current_order_array = ",current_order_array);
    }


}]);