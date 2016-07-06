<?php
session_start();
require_once ('mysql_connect.php');
//////dumy data

$_POST['first_name'] = "paul";
$_POST['last_name'] = "balali";
$_POST['password']= "paul";
$_POST['street_address'] = "unjaha";
$_POST['city'] = "beach";
$_POST['zip'] = 12345;
$_POST['state'] = "ca";
$_POST['phone_number'] = 12345654556;
$_POST['email'] = "paul@yahoo.com";

///end of dumy data
if (!empty ($_POST)){
    $fname = "'".$_POST['first_name']."'";
    $lname = "'".$_POST['last_name']."'";
    $password ="'".sha1($_POST['password'])."'";
    $street ="'". $_POST['street_address']."'";
    $city = "'".$_POST['city']."'";
    $zip = $_POST['zip'];
    $state ="'". $_POST['state']."'";
    $phone = $_POST['phone_number'];
    $email ="'". $_POST['email']."'";
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
    //print_r($_POST);
    //echo  "<br>, $email,$password,$fname,$lname,$street,$city,$state,$zip,$company,$attn,$phone,$email";
    $query = "INSERT INTO `customer`( `username`, `password`, `firstName`, `lastName`, `street`, `city`, `state`, `zip`, `company`, `attn`, `phone`, `email`) VALUES ($email,$password,$fname,$lname,$street,$city,$state,$zip,$company,$attn,$phone,$email)";
    if (mysqli_query($conn, $query)) {
        $last_id = mysqli_insert_id($conn);
        //echo "<br> last id: ".$last_id;
        $_SESSION["id"] = $last_id;
        }////end of if
}////end of if $_POST empty

?>