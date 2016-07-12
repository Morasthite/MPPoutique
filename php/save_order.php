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
//print_r($_POST);
$data = $_POST['cart'][1];
print_r($data);
$id = $_SESSION["id"];
$invoice_num =intval($_POST['orderNumber']);
foreach ($data as $item) {
////////////sending data to db
$quantity = intval($item['ordered']);
$name = "'".$item['name']."'";
$query = "INSERT INTO `purchases`(`inventory_id`, `customer_id`, `quantity_purchased`, `invoice_number`) VALUES ($name,$id,$quantity,$invoice_num)";
    print_r($query);
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
   }///end of while
}///end of if
}/////end of for loop
