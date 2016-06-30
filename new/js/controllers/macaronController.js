app.controller('macaronController', ["$scope", "$timeout", "config","cart", function ($scope, $timeout, config,cart) {
    var self = this;
    config.banner = "assets/images/our-macarons-image.png";
    config.menuIndice = 2;
    this.macaron_array = [
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        },
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        },
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        },
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        },
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        },
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        },
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        },
        {
            name: "chocolate",
            description: "chocolate, macaron and ...",
            source: "assets/images/almond.png"
        }
    ];
    
    this.add = function (obj) {
        cart.total = cart.total+1;
    }
    this.minus = function (obj) {
        if (cart.total != 0) {
            cart.total = cart.total-1;
        }
    }
}]);