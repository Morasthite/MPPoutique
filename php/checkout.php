<?php
session_start();
require_once('mysql_connect.php');
///dummy data
<<<<<<< HEAD
    $_SESSION["id"]= "micah@lfz.com";
    $_SESSION["password"] = "password123";
    if (empty($_SESSION["id"])) {
        print "You need to login first";
    }else {

        $array = array();
        $query = "SELECT * FROM `inventory`";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($array, $row);
            } ///end of while
            $array = json_encode($array);
            print $array;
        }///end of if
    /**  **/
    }////end of else when session has the id
=======
if (empty($_SESSION["id"])) {
    print "You need to login first";
}else {
    $id = $_SESSION["id"];
    $array = array();
    $inventory = array();
    $user = array();
    $customerQuery = "SELECT `firstName`, `lastName`, `street`, `city`, `state`, `zip`, `company`, `attn`, `phone`, `email` FROM `customer` WHERE `id` = $id ";
    $result2 = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($user, $row);
        } ///end of while
    }
        array_push($array, $user);

    $query = "SELECT * FROM `inventory`";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($inventory, $row);
        } ///end of while
        array_push($array, $inventory);
        $array = json_encode($array);
        print $array;
    }///end of if
/**  **/
}////end of else when session has the id
>>>>>>> 127dc874c0d68ae02781f9e42aeebc86fdbe597f
?>