app.controller('welcomeController',["$scope","config",function ($scope,config) {
//     config.banner = "assets/images/welcome-image.jpg";
//     config.menuIndice = 1;
// }]);
//     config.banner = "assets/welcome/welcome-image-1.png";
    config.banner = "assets/images/welcome-image.jpg";
    config.bannerTest =
        '<div class="carousel slide" id="welcome-carousel" data-ride="carousel">' +
        '    <div class="carousel-inner" role="listbox">' +
        '       <div class="item active">' +
        '           <img src="assets/welcome/welcome-image-1.png">' +
        '           <div class="carousel-caption">' +
        '               <h3>Hi Life is like a box of macarons...</h3>' +
        '               <p>..you just never know what you gunna done get...</p>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '               <img src="assets/welcome/welcome-image-2.png">' +
        '           </div>' +
        '       <div class="item">' +
        '           <img src="assets/welcome/welcome-image-3.png">' +
        '       </div>' +
        '       <div class="item">' +
        '           <img src="assets/welcome/welcome-image-4.png">' +
        '       </div>' +
        '   </div>' +
        ' </div>';

    config.menuIndice = 1;
}]);