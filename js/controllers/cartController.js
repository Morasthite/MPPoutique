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
            //console.log("cart_service inventory = cart.macaron_array: ", cart.macaron_array);
    self.cart = cart.macaron_array;
    self.totalCost = cart.totalCost;
    self.subTotal = cart.subTotal;
    self.tax = cart.tax;
    self.shipping = cart.shipping;
        console.log("self.cart: ", self.cart, "self.totalCost: ", self.totalCost, "self.subTotal: ", self.subTotal, "self.tax", self.tax, "cart.shipping", cart.shipping);


    $scope.filter = function(item){
        // for(var i = 0; i < cart.macaron_array.length; i++) {
        //     if (cart.macaron_array[i].ordered > 0) {
        //         self.currentOrderArray.push(item[i]);
        //         console.log("self.currentOrderArray", self.currentOrderArray);
        //     }
        //     //return item.ordered > 0;
        //     //add send to order array
            if(item.ordered >0){
                return item.ordered > 0;
            }
    };
    self.currentOrderArray = [];
    self.addSubTotal = function(count, price){
            console.log("Count", count, "Price", price);
        self.subTotal += parseInt(count) * parseFloat(price);
    };


    // for(var i = 0; i < cart.macaron_array.length; i++){
    //     if(cart.macaron_array[i].ordered > 0){
    //             console.log(cart.macaron_array[i].ordered+ " of this item has been added to the cart: ",cart.macaron_array[i]);
    //         self.currentOrderArray.push(cart.macaron_array[i]);
    //         self.currentOrderArray.itemsSubTotal = 0;
    //         self.currentOrderArray.itemsSubTotal += parseFloat(cart.macaron_array[i].ordered) * parseFloat(cart.macaron_array[i].price);
    //             console.log("self.currentOrderArray.itemsSubTotal :", self.currentOrderArray.itemsSubTotal);
    //         //self.subTotalArray.push(self.currentOrderArray.itemsSubTotal);
    //     }
    // }
    // for(var j = 0; j < self.subTotalArray.length; j++) {
    //     var subTotal = 0;
    //     subTotal += self.subTotalArray[j];
    // }
    //self.currentOrderArray.subTotal = subTotal;
    //console.log("currentOrderArray", self.currentOrderArray);
    //console.log("subTotalArray", self.subTotalArray);
    //console.log("currentOrderArray.subTotal = ", self.currentOrderArray.subTotal);

    //calculations//var myNumbers = [1,2,3,4,5]
    // function shipping (distance){
    //
    // }
    // function taxes (subtotal) {
    //
    // }
    // function total (subtotal,shipping,taxes) {
    //
    // }
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


