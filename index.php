<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" value="NOT Micah Pham">

    <link rel="stylesheet" href="style.css">
    <title>Welcome</title>
</head>
<body>
<header>
    <?php
        $holidayArray = [
            '5/27'=>'christmas',
            '7/4'=>'july4th',
            '12/25'=>'christmas'
        ];
        $date = date('n/j');
            $date = '7/4';
        foreach($holidayArray as $key=>$value){
            if($date == $key)
                $today = $value;
        }
    //print(time());
    ?>

    <nav class="<?=$today;?>">
        <img class="logo" src="assets/images/logo.png" alt="logo" title="logo">
        <?php $navArray = [
            'page'=>['url'=>'index.php','description'=>'welcome','text'=>'WELCOME'],
            'macarons'=>['url'=>'index.php','description'=>'macarons','text'=>'OUR MACARONS'],
            'gifts'=>['url'=>'index.php','description'=>'gifts','text'=>'GIFTS & PARTIES'],
            'contact'=>['url'=>'index.php','description'=>'contact','text'=>'CONTACT']
        ];
        ?>
        <ul>
            <?php
                foreach($navArray as $key=>$value) {
            ?>
                    <li><a href="<?=$value['url'];?>?page=<?=$value['description'];?>"><?=$value['text'];?></a></li>

            <?php
            }
            ?>
        </ul>
    </nav>

    <?php
    if(!empty($_GET)){
        foreach($_GET as $key=>$value){
            switch($value){
                case 'welcome':
                    echo('<img class="header-img" src="assets/images/welcome-image.png">');
                    break;
                case 'macarons':
                    echo('<img class="header-img" src="assets/images/our-macarons-image.png">');
                    break;
                case 'gifts':
                    echo('<img class="header-img" src="assets/images/gifts-parties-image.png">');
                    break;
                case 'contact':
                    echo('<img class="header-img" src="assets/images/contact-image.png">');
                    break;
                default: include_once('404baby.php');
            }
        }
    }

        ?>
</header>

    <?php
    if(!empty($_GET)){
        foreach($_GET as $key=>$value){
            switch($value){
                case 'welcome':
                    include_once('main_content_index.php');
                    break;
                case 'macarons':
                    include_once('main_content_our_macarons.php');
                    break;
                case 'gifts':
                    include_once('main_content_gifts.php');
                    break;
                case 'contact':
                    include_once('main_content_contact.php');
                    break;
                default: include_once('404baby.php');
            }
        }
    }
    else {
        include_once('main_content_index.php');
    }
    ?>

<footer class="<?=$today;?>">
    <ul>
        <li class="footer-mail"><img src="assets/images/mail.png"> order@mboutique.com</li>
        <li class="footer-phone"><img src="assets/images/phone.png"> 949.800-3111</li>
        <li class="footer-copyright">Copyright © 2014 MBoutique. All rights reserved.</li>
        <li class="footer-facebook">Follow us <img src="assets/images/facebook.png"></li>
        <li class="footer-twitter"><img src="assets/images/twitter.png"></li>
    </ul>
</footer>

</body>
</html>