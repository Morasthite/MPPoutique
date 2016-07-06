<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/6/2016
 * Time: 12:19 AM
 */
session_start();
require_once ('mysql_connect.php');
$query = "SELECT * FROM `inventory`";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        
      } ///end of while
    }///end of if

?>