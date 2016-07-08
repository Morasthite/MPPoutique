/** */

//-------Click handlers for the login in buttons, onclick, animate and show the login forms ------//

$(document).ready(function() {
    $("#log-in-btn").click(function () {
        console.log("hi");
        $("#signup-form, #guestcheckout-form").removeClass("in");
    });
    $("#sign-up-btn").click(function () {
        $("#guestcheckout-form, #log-in-form").removeClass("in");
    });
    $("#guest-checkout-btn").click(function () {
        $("#signup-form, #log-in-form").removeClass("in");
    });
    // $("#signup-form-submit-btn").click(function (){
    //     $("#shipto-form").toggleClass('expand-shipto-form');
    // });
    // $("#guest-checkout-form-submit-btn").click(function (){
    //     $("#shipto-form").toggleClass('expand-shipto-form');
    // });
    $("#login-form-submit-btn").click(function (){
        console.log("hi");
        $("#shipto-form").toggleClass('expand-shipto-form');
    });
});//doc ready