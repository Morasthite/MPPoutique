<?php
session_start();
    if(!empty($_POST)) {
        print('<h3 style="color: red"> Thanks for contacting us, we ain\'t gonna read it,<br> 
but in case you don\'t know your own information, <br> here\'s what you submitted:</h3>');
        print('Your Name: '.print_r($_POST['name'],true).'<br>');
        print('Your Email: '.print_r($_POST['email'],true).'<br>');
        print('Your Phone Number: '.print_r($_POST['phone'],true).'<br>');
        print('Your Message: '.print_r($_POST['message'],true).'<br>');
        $hidden = 'hidden';
    }
    else {
        $hidden = 'show';
    }

$holidayArray = [
    '5/27'=>'christmas',
    '7/4'=>'july4th',
    '12/25'=>'christmas'
];
$date = date('n/j');
//$date = '12/25';
foreach($holidayArray as $key=>$value){
    if($date == $key)
        $today2 = $value.'_heading';
}
?>
<div class="body-wrapper">
    <div class="contact-main-content">
        <div class="section-main-content-hours">
            <h1 class="section-title  <?=$today;?>" id="biz-hours-para-title">Visit us!</h1>
            <p class="para-style para-business-hours">
                Monday – Friday | 10am – 9pm<br>
                Saturday | 10am – 8pm<br>
                Sunday | 11am – 7pm<br>
                Closed Thanksgiving Day, Christmas Day<br>
                and Easter Day<br>
                <br id="br-1625">
                1625 Post St<br>
                San Francisco, CA 94115<br>
                <br id="br-949">
                949.800-3111<br>
                <br id="br-order">
                <span class="email-style">order@mboutique.com</span><br>
                <br id="br-send-questions">
                Send your questions, comments and flavor<br>
                suggestions or place an order!
            </p>
            <!--Testing using br and p elements instead of ul li-->
        </div>

        <div class="form <?=$hidden?>">
            <form action="index.php?contact=contact" method="post">
                <h3 class="section-title contact-form-title">Contact Form</h3>
                <input class="input-text para-style" type="text" name="name" value="<?= !empty($_SESSION) ? $_SESSION['name'] : '';?>" placeholder="Name">
                <input class="input-text para-style" type="email" name="email" value="<?= !empty($_SESSION) ? $_SESSION['email'] : '';?>" placeholder="Email">
                <input class="input-text para-style" type="text" name="phone" value="<?= !empty($_SESSION) ? $_SESSION['phone'] : '';?>" placeholder="Phone">
                <input class="input-text para-style" type="text" name="subject" value="<?= !empty($_SESSION) ? $_SESSION['subject'] : '';?>" placeholder="Subject">
                <textarea class="input-text para-style message-text-area" rows="4" cols="40" name="message" value="<?= !empty($_SESSION) ? $_SESSION['message'] : '';?>" placeholder="Message"></textarea>
                <input class="submit-button" type="submit" value="SEND">
            </form>

        </div>
        <div class="img-container">
            <img title="contact-macarons-img" src="assets/images/macarons-image.png">
        </div>
</div><!--Closing wrapper-->