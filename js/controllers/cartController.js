/** cartController takes current cart inventory from cart service (passed in from macaronController), displays to DOM
 * and:  - calculates subtotals/totals etc
 *       - (v2) allows modifications by customer(add or subtract from each item in the cart)
 *       -  when "procceed to checkout button clicked - make $http call to macaron_inventory_call.php, receive json back,
 *          use json to compare with inventory in the cart to make sure cart content is less than current inventory from
 *          database >>>>> else, display error message.
 *          **/

app.controller('cartController',["$scope","$timeout","config","cart",function ($scope, $timeout, config,cart) {
   config.banner = "assets/images/contact-image.png";
   config.menuIndice = 5;
    var self = this;
            console.log("cart_service inventory = cart.macaron_array: ", cart.macaron_array);
    self.currentOrderArray = [];
    self.subTotalArray = [];

    for(var i = 0; i < cart.macaron_array.length; i++){
        if(cart.macaron_array[i].ordered > 0){
                console.log(cart.macaron_array[i].ordered+ " of this item has been added to the cart: ",cart.macaron_array[i]);
            self.currentOrderArray.push(cart.macaron_array[i]);

            var itemSubTotal = cart.macaron_array[i].ordered * cart.macaron_array[i].price;
                console.log("itemSubTotal :", itemSubTotal);
            self.subTotalArray.push(itemSubTotal);

            console.log("currentOrderArray", self.currentOrderArray);
            console.log("subTotalArray", self.subTotalArray);
        }
    }

    //calculations//
    self.subTotal = function() {
        for (var i = 0; i < self.subTotalArray.length; i++) {
            var subTotal = 0;
            subTotal = self.subTotalArray[i] + subTotal;
            console.log("finalSubTotal = ", subTotal);
            return subTotal;
        }
    };
    self.subTotal();
    function shipping (distance){

    }
    function taxes (subtotal) {

    }
    function total (subtotal,shipping,taxes) {

    }
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


