<?php
require_once ('mysql_connect.php');

$query =" SELECT * FROM `customer`";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        print ("<pre>");
        print_r($row);
        print ("<br>");
        print ("</pre");
    }
  }
 ?>