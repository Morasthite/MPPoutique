/**  **/
app.factory("config",function () {
    return {
        banner:"assets/images/welcome-image.jpg",
        menuIndice : 1,
        bannerWelcome:
            '<div class="carousel slide" id="welcome-carousel" data-ride="carousel">' +
            '    <div class="carousel-inner" role="listbox">' +
            '       <div class="item active">' +
            '           <img src="assets/welcome/welcome-image-1.png">' +
            '           <div class="carousel-caption">' +
            '               <h3>Life is like a box of macarons...</h3>' +
            '               <p>..you just never know what you gunna done get...</p>' +
            '           </div>' +
            '       </div>' +
            '       <div class="item">' +
            '               <img src="assets/welcome/welcome-image-2.png">' +
            '       </div>' +
            '       <div class="item">' +
            '           <img src="assets/welcome/welcome-image-3.png">' +
            '       </div>' +
            '       <div class="item">' +
            '           <img src="assets/welcome/welcome-image-4.png">' +
            '       </div>' +
            '   </div>' +
            ' </div>',
        bannerMacarons:
            '<div class="carousel slide" id="macarons-carousel" data-ride="carousel">' +
            '    <div class="carousel-inner" role="listbox">' +
            '       <div class="item active">' +
            '           <img src="assets/images/our-macarons-image.png">' +
            '           <div class="carousel-caption">' +
            '               <h3>Life is like a box of macarons...</h3>' +
            '               <p>..you just never know what you gunna done get...</p>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            ' </div>',
        bannerGifts:
        '<div class="carousel slide" id="gifts-carousel" data-ride="carousel">' +
        '    <div class="carousel-inner" role="listbox">' +
        '       <div class="item active">' +
        '           <img src="assets/images/gifts-parties-image.jpg">' +
        '           <div class="carousel-caption">' +
        '               <h3>Life is like a box of macarons...</h3>' +
        '               <p>..you just never know what you gunna done get...</p>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        ' </div>',
    }
});