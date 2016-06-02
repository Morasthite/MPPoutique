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
<article class="main-content index-main-content">
    <img title="macarons-image" src="assets/images/macarons-image.png">
    <section class="section-main-content-para">
        <h1 class="section-title  <?=$today2;?>" id="index-welcome-para-title">Welcome to MBoutique!</h1>
        <p class="para-style para-welcome"> We're a home-based baking business that specializes in the making of French macarons,
            a glutenfree pastry item made from ground almonds. Our business began at the West Reading Farmers
            Market in 2011. Last year (2013) marked our third and final season of participation at the market.
            MBoutique was established to pay homage to the delicate French confectionery, the macaron. Our
            shop has been recognized as the connoisseurs of this delicious French pastry because of the
            wonderful variety of flavors from our great master chefs.
        </p>
        <h1 class="section-title  <?=$today2;?>" id="index-we-love-para-title">We Love Macacrons!</h1>
        <p class="para-style para-we-love-macaron">
            Renowned macarons, French delights of the moment can be met in a variety of flavors and colors
            and are brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose blanket
            jam, chocolate butter cream is spread inviting.<br>
            <br>
            Macarons combines perfectly with champagne or white wine,
            tea or hot chocolate, fresh juices and natural fruit flavored coffee and guarantee that these little
            delights soon become friend that you can
            not break.
        </p>
    </section>
    <section class="section-main-content-samples">
        <h1 class="section-title  <?=$today2;?>" id="index-samples-title" >Find the flavor that you like.  Try a sample everyday.</h1>
        <div class="wrapper">
            <div class="day">
                <div class="day-label">Monday</div>
                <div class="time">15:00 - 16:00</div>
                <div class="flavor-top">chocolate
                    <img class="flavor-top-img" src="assets/images/chocolate.png">
                </div>
                <div class="flavor-bottom flavor-bottom-mon">coconut
                    <img  class="flavor-bottom-img" src="assets/images/coconut.png">
                </div>
            </div>
            <div class="day">
                <div class="day-label">Tuesday</div>
                <div class="time">14:00 - 15:00</div>
                <div class="flavor-top">violet cassis
                    <img class="flavor-top-img" src="assets/images/violet-cassis.png">
                </div>
                <div class="flavor-bottom ">green tea
                    <img  class="flavor-bottom-img" src="assets/images/green-tea.png">
                </div>
            </div>
            <div class="day">
                <div class="day-label">Wednesday</div>
                <div class="time">09:00 - 10:00</div>
                <div class="flavor-top">passion fruit
                    <img class="flavor-top-img" src="assets/images/passion-fruit.png">
                </div>
                <div class="flavor-bottom flavor-bottom-wed">vanilla
                    <img  class="flavor-bottom-img" src="assets/images/vanilla.png">
                </div>
            </div>
            <div class="day">
                <div class="day-label">Thursday</div>
                <div class="time">18:00 - 19:00</div>
                <div class="flavor-top">coffee
                    <img class="flavor-top-img" src="assets/images/coffee.png">
                </div>
                <div class="flavor-bottom">pistachio
                    <img  class="flavor-bottom-img" src="assets/images/pistachio.png">
                </div>
            </div>
            <div class="day">
                <div class="day-label">Friday</div>
                <div class="time">11:00 - 12:00</div>
                <div class="flavor-top">raspbery
                    <img class="flavor-top-img" src="assets/images/raspbery.png">
                </div>
                <div class="flavor-bottom flavor-bottom-fri">lemon
                    <img  class="flavor-bottom-img" src="assets/images/lemon.png">
                </div>
            </div>
            <div class="day"><div class="day-label">Saturday</div>
                <div class="time">13:00 - 14:00</div>
                <div class="flavor-top">rose
                    <img class="flavor-top-img" src="assets/images/rose.png">
                </div>
                <div class="flavor-bottom">tiffany blue
                    <img  class="flavor-bottom-img" src="assets/images/tiffany-blue.png">
                </div></div>
            <div class="day">
                <div class="day-label">Sunday</div>
                <div class="time">10:00 - 11:00</div>
                <div class="flavor-top">caramel
                    <img class="flavor-top-img" src="assets/images/caramel.png">
                </div>
                <div class="flavor-bottom flavor-bottom-sun">almond
                    <img  class="flavor-bottom-img" src="assets/images/almond.png">
                </div>
            </div>
        </div>
        <!--Close Wrapper-->
    </section>

</article>
<!--End main-content-->