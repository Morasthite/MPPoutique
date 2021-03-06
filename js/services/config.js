/**  **/
app.factory("config",function () {
    return {
        banner:"assets/images/banners/welcome-image.png",
        menuIndice : 1,
        bannerWelcome:
            '<div class="carousel" id="welcome-carousel" data-ride="carousel">' +
            '    <div class="carousel-inner" role="listbox">' +
            '       <div class="item active">' +
            '           <img id="welcome-img-1" src="assets/welcome/welcome-image-1.png">' +
            '           <div class="carousel-caption-div">' +
            '               <h3 class="carousel-caption-text1">Welcome...Kick back, relax, enjoy some macarons, you deserve it.</h3>' +
            '           </div>' +
            '       </div>' +
            '       <div class="item">' +
            '               <img id="welcome-img-2" src="assets/welcome/welcome-image-2.png">' +
            '           <div class="carousel-caption-div">' +
            // '               <h3 class="carousel-caption-text2">..is like a box of macarons...</h3>' +
            '           </div>' +
            '       </div>' +
            '       <div class="item">' +
            '           <img id="welcome-img-3" src="assets/welcome/welcome-image-3.png">' +
            '           <div class="carousel-caption-div">' +
            // '               <h3 class="carousel-caption-text3">..sweet, delicious...</h3>' +
            '           </div>' +
            '       </div>' +
            '       <div class="item">' +
            '           <img id="welcome-img-4" src="assets/welcome/m2.jpg">' +
            '           <div class="carousel-caption-div">' +
            // '               <h3 class="carousel-caption-text4">..and...</h3>' +
            '           </div>' +
            '       </div>' +
            '       <div class="item">' +
            '           <img id="welcome-img-5" src="assets/welcome/welcome-image-5.png">' +
            '           <div class="carousel-caption-div">' +
            // '               <h3 class="carousel-caption-text5">..the more, the merrier...</h3>' +
            '           </div>' +
            '       </div>' +
            '       <div class="item">' +
            '           <img id="welcome-img-6" src="assets/welcome/m3.jpg">' +
            '           <div class="carousel-caption-div">' +
            // '               <h3 class="carousel-caption-text5">..So, eat macarons...</h3>' +
            '           </div>' +
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
        bannerJuly4th:
        '<div class="carousel slide" id="welcome-carousel" data-ride="carousel">' +
        '    <div class="carousel-inner" role="listbox">' +
        '       <div class="item active">' +
        '           <img id="welcome-img-1" src="assets/images/holidays/n6.jpg">' +
        '           <div class="carousel-caption-div">' +
        // '               <h3 class="carousel-caption-text1">Life...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '               <img id="welcome-img-2" src="assets/images/holidays/n7.jpg">' +
        '           <div class="carousel-caption-div">' +
        // '               <h3 class="carousel-caption-text2">..is like a box of macarons...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-3" src="assets/images/holidays/n8.jpg">' +
        '           <div class="carousel-caption-div">' +
        // '               <h3 class="carousel-caption-text3">..it makes no sense...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-4" src="assets/images/holidays/n4.jpg">' +
        '           <div class="carousel-caption-div">' +
        // '               <h3 class="carousel-caption-text4">..it tastes no good...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-5" src="assets/images/holidays/n5.jpg">' +
        '           <div class="carousel-caption-div">' +
        // '               <h3 class="carousel-caption-text5">..but apparently, all the hipsters love it...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-6" src="assets/images/holidays/n12.png">' +
        '           <div class="carousel-caption-div">' +
        // '               <h3 class="carousel-caption-text5">..So, eat macarons, it\'s what life is all aboot...</h3>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        ' </div>',
        bannerNewyear:
        '<div class="carousel slide" id="welcome-carousel" data-ride="carousel">' +
        '    <div class="carousel-inner" role="listbox">' +
        '       <div class="item active">' +
        '           <img id="welcome-img-1" src="assets/welcome/welcome-image-1.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text1">Life...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '               <img id="welcome-img-2" src="assets/welcome/welcome-image-2.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text2">..is like a box of macarons...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-3" src="assets/welcome/welcome-image-3.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text3">..it makes no sense...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-4" src="assets/welcome/m2.jpg">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text4">..it tastes no good...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-5" src="assets/welcome/welcome-image-5.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text5">..but apparently, all the hipsters love it...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-6" src="assets/welcome/m3.jpg">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text5">..So, eat macarons, it\'s what life is all aboot...</h3>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        ' </div>',
        bannerChristmas:
        '<div class="carousel slide" id="welcome-carousel" data-ride="carousel">' +
        '    <div class="carousel-inner" role="listbox">' +
        '       <div class="item active">' +
        '           <img id="welcome-img-1" src="assets/welcome/welcome-image-1.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text1">Life...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '               <img id="welcome-img-2" src="assets/welcome/welcome-image-2.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text2">..is like a box of macarons...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-3" src="assets/welcome/welcome-image-3.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text3">..it makes no sense...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-4" src="assets/welcome/m2.jpg">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text4">..it tastes no good...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-5" src="assets/welcome/welcome-image-5.png">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text5">..but apparently, all the hipsters love it...</h3>' +
        '           </div>' +
        '       </div>' +
        '       <div class="item">' +
        '           <img id="welcome-img-6" src="assets/welcome/m3.jpg">' +
        '           <div class="carousel-caption-div">' +
        '               <h3 class="carousel-caption-text5">..So, eat macarons, it\'s what life is all aboot...</h3>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        ' </div>',
    }
});