<?php
require_once ('mysql_connect.php');

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
?>