app.controller('macaronController', ["$scope", "$timeout", "config", function ($scope, $timeout, config) {

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
        
    }
}]);