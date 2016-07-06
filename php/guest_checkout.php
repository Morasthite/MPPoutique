<?php
session_start();
require_once('mysql_connect.php');

$_POST['first_name'] = "Micah";
$_POST['last_name'] = "Blah";
$_POST['password'] = "password123";
$_POST['street_address'] = "123 stonehurst #133";
$_POST['city'] = "Huntington Beach";
$_POST['state'] = "CA";
$_POST['zip'] = "92647";
$_POST['company'] = "LFZ";
$_POST['attn'] = "Dan";
$_POST['phone_number'] = "1234453345";
$_POST['email'] = "micah@lfz.com";

// if form is filled, set variables, check if email exists as username in db, if not, create a new customer in database with INSERT

if(!empty($_POST)){

    $first_name = "'".$_POST['first_name']."'";
    $last_name  = "'".$_POST['last_name']."'";
    $password  = "'".sha1($_POST['password'])."'" ;
    $street_address  = "'".$_POST['street_address']."'";
    $city = "'".$_POST['city']."'";
    $state  = "'".$_POST['state']."'";
    $zip  = "'".$_POST['zip']."'";
    $phone_number  = "'".$_POST['phone_number']."'";
    $email = "'".$_POST['email']."'";
    $username = $email;
    if (!empty($_POST['company'])) {
        $company = "'".$_POST['company']."'";
    }else{
        $company = "'NULL'";
    }
    if (!empty($_POST['attn'])) {
        $attn = "'".$_POST['attn']."'";
    }else{
        $attn = "'NULL'";
    }
    //echo "<br> $email,$phone_number,$attn,$company,$zip,$state,$city,$street_address,$password,$last_name,$first_name";

    //$query = "SELECT * FROM `customer` WHERE `username` = $username";
    //$result = mysqli_query($conn, $query);
    //if (mysqli_num_rows($result) > 0) {
      //  while ($row = mysqli_fetch_assoc($result)) {
//            print($row);
//            echo "It looks like you've already purchased from us before, please log in using the login button";
//        }
//    }
//    else {
        $query = "INSERT INTO `customer`(`username`, `password`, `firstName`, `lastName`, `street`, `city`, `state`, `zip`, `company`, `attn`, `phone`, `email`) VALUES ($email,$password,$first_name,$last_name,$street_address,$city,$state,$zip,$company,$attn,$phone_number,$email)";
        mysqli_query($conn,$query);
        if(mysqli_affected_rows($conn) > 0){
            echo"Guest User created in database";
        }
//    }//end of else
} //end of if(!empty($_POST))
