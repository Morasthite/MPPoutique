<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/10/2016
 * Time: 9:05 PM
 */
session_start();
require_once ('mysql_connect.php');
//Collect all Details from Angular HTTP Request.
//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);
//print_r($request);
///////////////parse the data
$data = $_POST['data'];
print_r($data);
$id = $_SESSION["id"];
foreach ($data as $item) {
////////////sending data to db
$quantity = $item['orderd'];
$query = "INSERT INTO `purchases`(`inventory_id`, `customer_id`, `quantity_purchased`, `date`, `note`, `invoice_number`) VALUES ([value-2],$id,[value-4],[value-5],[value-6],[value-7])";
//$result = mysqli_query($conn, $query);
//if (mysqli_num_rows($result) > 0) {
//    while ($row = mysqli_fetch_assoc($result)) {
//    }///end of while
//}///end of if
}/////end of for loop
