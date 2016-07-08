<?php
session_start();
require_once('mysql_connect.php');
///dummy data
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
?>