<?php
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
<article class="gifts-party-main-content">
    <section class="section-main-content-lets-eat">
        <h1 class="section-title  <?=$today2;?>" id="lets-eat-para-title">Let's eat macarons!</h1>
        <p class="para-style para-lets-eat">We make it easy to share la passion du macaron with your friends, family
            and colleagues. Choose from our array of premium gift options, or we can create a custom solution.
            Contact us when you need help planning your celebration! <span class="email-style">orders@mboutique.com</span>
        </p>
    </section>
    <!--End section main content -lets eat-->
    <div class="background-wrapper">
        <section class="section-main-content-gift-boxes">
            <h1 class="section-title  <?=$today2;?>" id="gift-boxes-para-title">Gift boxes</h1>
            <p  class="para-style gift-box-para">Our signature gift boxes make macarons the perfect gift for any occasion.</p>
            <ul class="para-style gift-box-list">
                <li>gift box of 6 macarons in raspberrywhite - $ 10</li>
                <li>gift box of 12 macarons in white, pistachio, or violet – $20</li>
                <li>gift box of 24 macarons in violet – $40</li>
                <li>gift box of 36 macarons in silver – $60</li>
                <li>gift box à la ronde of 60 macarons in violet or silver – $120</li>
            </ul>
        </section>
        <!--End section main content -gift-boxes-->
        <section class="section-main-content-party-tower">
            <h1 class="section-title  <?=$today2;?>" id="party-tower-para-title">Party tower</h1>
            <p class="para-style para-party-tower">Our 5-tiered party tower becomes the centerpiece of any special event
                or private celebration, elegantly presenting your unique selection of sixty macarons.</p>
            <ul class="para-style party-tower">
                <li>tower of 60 macarons – $120</li>
            </ul>
        </section>
        <!--End section main content -party-tower-->
    </div>
    <!--Closing background-wrapper- testing using wrapper for background image and container for
    gift-boxes & party-tower sections, using z-index?, result: works-->
</article>
<!--End main content-->