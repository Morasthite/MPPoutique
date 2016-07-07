<?php
session_start();
require_once('mysql_connect.php');
///dummy data

if (empty($_SESSION["id"])) {
    print "You need to login first";
}else {

    $_POST = array(
        0 => array(
            'cost' => 10.00,
            'name' => 'item1',
            'part_number' => 'zyz-100',
            'item_count' => 15
        ),
        1 => array(
            'cost' => 34.00,
            'name' => 'item2',
            'part_number' => 'abc-230',
            'item_count' => 42
        )
    );

//end of dummy data
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