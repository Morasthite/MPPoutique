/**
 * Created by Qzxtzrtz on 6/29/2016.
 */

//-------Click handlers for the login in buttons, onclick, animate and show the login forms ------//
$(document).ready (function() {
    $("#signup-form, #guestcheckout-form, #log-in-form").hide();
    $("#log-in-btn").click(function () {
        $("#log-in-form").toggle();
        $("#signup-form, #guestcheckout-form").hide();
    });
    $("#sign-up-btn").click(function () {
        $("#signup-form").toggle();
        $("#guestcheckout-form, #log-in-form").hide();
    });
    $("#guest-checkout-btn").click(function () {
        $("#guestcheckout-form").toggle();
        $("#signup-form, #log-in-form").hide();
    });
    // $("#signup-form-submit-btn").click(function (){
    //     $("#shipto-form").toggleClass('expand-shipto-form');
    // });
    // $("#guest-checkout-form-submit-btn").click(function (){
    //     $("#shipto-form").toggleClass('expand-shipto-form');
    // });
    // $("#login-form-submit-btn").click(function (){
    //     $("#shipto-form").toggleClass('expand-shipto-form');
    // });
});//doc ready