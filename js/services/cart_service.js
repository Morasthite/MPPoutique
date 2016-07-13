
/** Cart service is shared by controllers.  It receives inventory from database w/ $http call to macaron_inventory_call.php
 *  and sends to macaronController for display in the DOM @ our-macarons.html
 *  It gets updated by macaronController when customer adds/minus items to cart.  Same with giftController
 *  It also passes cart content to the cartController @ checkout page @cart.hmtl**/

app.factory("cart",["$http",function ($http) {
    var self = this;
    var inventory = {};
    inventory.get = function () {

    };
        return {
            customerLoggedIn: false,
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
            ]
        };///end of return

}]);////end of factory
