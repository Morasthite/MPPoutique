/**
 * Created by Qzxtzrtz on 6/29/2016.
 */

//-------Click handlers for the login in buttons, onclick, animate and show the login forms ------//
$(document).ready (function() {

    $("#log-in-btn").click(function () {
        $("#login-form").toggleClass('expand-form-login');
    });
    $("#sign-up-btn").click(function () {
        $("#signup-form").toggleClass('expand-form-signup');
    });
    $("#guest-checkout-btn").click(function () {
        $("#guestcheckout-form").toggleClass('expand-form-guest-checkout');
    });
});//doc ready