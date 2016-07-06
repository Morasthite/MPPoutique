<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/6/2016
 * Time: 12:19 AM
 */
session_start();
require_once ('mysql_connect.php');
///dummy data

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
$query = "SELECT * FROM `inventory`";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<br>";
        print_r($row);
      } ///end of while
    }///end of if

?>