<?php
session_start();
require_once('mysql_connect.php');
$_SESSION["id"] = 1;
if (empty($_SESSION["id"])) {
    print "You need to login first";
}else {
    $id = 1;                             //"'". $_SESSION["id"]."'";
    $array = array();
    $inventory = array();
    $user = array();
    $customerQuery = "SELECT `firstName`, `lastName`, `street`, `city`, `state`, `zip`, `company`, `attn`, `phone`, `email` FROM `customer` WHERE `id` = $id ";
    $result2 = mysqli_query($conn, $customerQuery);
    if (mysqli_num_rows($result2) > 0) {
        while ($row1 = mysqli_fetch_assoc($result2)) {
            array_push($user, $row1);
        } ///end of while
    }
        array_push($array, $user);

        $inventoryQuery = "SELECT * FROM `inventory`";
        $result = mysqli_query($conn, $inventoryQuery);
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
?>