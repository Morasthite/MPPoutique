<?php
session_start();
require_once ('mysql_connect.php');

if (!empty ($_POST)){
    $fname = "'".$_POST['first_name']."'";
    $lname = "'".$_POST['last_name']."'";
    $password = "'".sha1($_POST['password'])."'";
    $street = "'".$_POST['street_address']."'";
    $city = "'".$_POST['city']."'";
    $zip = "'".$_POST['zip']."'";
    $state = "'".$_POST['state']."'";
    $phone = "'".$_POST['phone_number']."'";
    $email = "'".$_POST['email']."'";
    $c_card = "'".$_POST['c_card']."'";
    $c_card_exp = "'".$_POST['c_card_exp']."'";
    $name_on_card = "'".$_POST['name_on_card']."'";
    $card_billing_address = "'".$_POST['card_billing_address']."'";
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
    print_r($_POST);

    $userExistsQuery = "SELECT * FROM  `customer` WHERE `username` = $email";
    $result = mysqli_query($conn, $userExistsQuery);
    if (mysqli_num_rows($result) > 0) {
        print"User Already Exists";
    }else {
        $CreateUserQuery = "INSERT INTO `customer`(`username`, `password`, `firstName`, `lastName`, `street`, `city`, `state`, `zip`, `company`, `attn`, `phone`, `email`, `c_card`, `c_card_exp`, `name_on_card`,`card_billing_address`) VALUES ($email,$password,$fname,$lname,$street,$city,$state,$zip,$company,$attn,$phone,$email,$c_card,$c_card_exp,$name_on_card, $card_billing_address)";
        if (mysqli_query($conn, $CreateUserQuery)) {
            $last_id = mysqli_insert_id($conn);
            //echo "<br> last id: ".$last_id;
            $_SESSION["id"] = $last_id;
            print "User Created";
            }////end of if
    }//end of else 
}////end of if $_POST !empty
/**  **/
?>