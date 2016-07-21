<?php
session_start();
require_once ('mysql_connect.php');
//Collect all Details from Angular HTTP Request.
//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);
//print_r($request);
///////////////parse the data
//print_r($_POST);
$data = $_POST['cart'];
print_r($data);
$id = $_SESSION["id"];
$invoice_num ="'".$_POST['orderNumber']."'";
foreach ($data as $item) {
////////////sending data to db
    $quantity = intval($item['ordered']);
    $name = intval($item['id']);
    $query = "INSERT INTO `purchases`(`inventory_id`, `customer_id`, `quantity_purchased`, `invoice_number`) VALUES ($name,$id,$quantity,$invoice_num)";
    $upDateInventoryQuery = "UPDATE `inventory` SET `amount` = amount-$quantity WHERE `id` = $name";
        echo "query:";
        print_r($query);
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_assoc($result)) {
       }///end of while
    }///end of if
    $updateInventoryResult = mysqli_query($conn, $upDateInventoryQuery);
    if(mysqli_num_rows($updateInventoryResult)>0){
        while ($row = mysqli_fetch_assoc($updateInventoryResult)) {
        }///end of while
    }
}/////end of for loop
