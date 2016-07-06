<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/5/2016
 * Time: 8:05 PM
 */
session_start();
require_once ('mysql_connect.php');
if (!empty ($_POST)){
    $fname = $_POST[''];
    $lname = $_POST[''];
    $street = $_POST[''];
    $city = $_POST[''];
    $zip = $_POST[''];
    $state = $_POST[''];
    $phone = $_POST[''];
    $email = $_POST[''];
    if (!empty($_POST[''])) {
        $company = $_POST[''];
    }else{
        $company = 'NULL';
    }
    if (!empty($_POST[''])) {
        $attn = $_POST[''];
    }else{
        $attn = 'NULL';
    }
    $query = "INSERT INTO `customer`( `username`, `password`, `firstName`, `lastName`, `street`, `city`, `state`, `zip`, `company`, `attn`, `phone`, `email`) VALUES ($email,LATER,$fname,$lname,$street,$city,$state,$zip,$company,$attn,$phone,$email)";
    $result = mysqli_query($conn, $query);
    //////////CHECKKKKKKKK
    $query2 = "SELECT * FROM `customer` WHERE `id`= LAST_INSERT_ID()";
}////end of if $_POST empty

?>