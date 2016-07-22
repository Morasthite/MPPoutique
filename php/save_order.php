<?php
session_start();
require_once ('mysql_connect.php');
//Collect all Details from Angular HTTP Request.
//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);
//print_r($request);
///////////////parse the data
print_r($_POST);
$data = $_POST['cart'];
//print_r('cart = '.$data);
$id = $_SESSION["id"];
$invoice_num ="'".$_POST['orderNumber']."'";
foreach ($data as $item) {
////////////sending data to db
    $quantity = intval($item['ordered']);
    $name = intval($item['id']);
    $query = "INSERT INTO `purchases`(`inventory_id`, `customer_id`, `quantity_purchased`, `invoice_number`) VALUES ($name,$id,$quantity,$invoice_num)";
        echo "insert invoice to db: query ="."<br>";
        print_r($query);
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
          while ($row = mysqli_fetch_assoc($result)) {
           }///end of while
        }///end of if
    $upDateInventoryQuery = "UPDATE `inventory` SET `amount` = amount-$quantity WHERE `id` = $name";

        echo "update inventory: query =";
        echo "<br>";
        print_r($query);
        echo "<br>";
        $updateInventoryResult = mysqli_query($conn, $upDateInventoryQuery);
        if(mysqli_num_rows($updateInventoryResult)>0){
            while ($row = mysqli_fetch_assoc($updateInventoryResult)) {
                echo "pdating Inventory";
            }///end of while
        }
}/////end of for loop

$street = "'".$_POST['customer']['street_address']."'";
$city = "'".$_POST['customer']['city']."'";
$zip = "'".$_POST['customer']['zip']."'";
$state = "'".$_POST['customer']['state']."'";
$phone = "'".$_POST['customer']['phone']."'";
$email = "'".$_POST['customer']['email']."'";
$c_card = "'".$_POST['customer']['c_card']."'";
//$c_card_exp_new = $_POST['customer']['c_card_exp_new'];
$c_card_exp = $_POST['customer']['c_card_exp'];
$name_on_card = "'".$_POST['customer']['name_on_card']."'";
$card_billing_address = "'".$_POST['customer']['card_billing_address']."'";
if (!empty($_POST['customer']['company'])) {
    $company = "'".$_POST['customer']['company']."'";
}else{
    $company = "'NULL'";
}
if (!empty($_POST['customer']['attn'])) {
    $attn = "'".$_POST['customer']['attn']."'";
}else{
    $attn = "'NULL'";
}
//$c_card_exp = strtotime($c_card_exp_new);
$c_card_exp = strtotime($c_card_exp);

$upDateCustomerInfoQuery = "UPDATE `customer` SET `street` = $street, `city` = $city, `state` = $state, `zip` = $zip, `company` = $company, `attn` = $attn, `phone` = $phone, `email` = $email, `c_card` = $c_card, `c_card_exp` = $c_card_exp, `name_on_card` = $name_on_card,`card_billing_address` = $card_billing_address WHERE `username` = $email";
    echo "upDateCustomerInfoQuery = ";
    echo "<br>";
    print($upDateCustomerInfoQuery);
    $updateCustomerInfoResult = mysqli_query($conn, $upDateCustomerInfoQuery);
    if(mysqli_num_rows($updateCustomerInfoResult)>0){
        while ($row = mysqli_fetch_assoc($updateCustomerInfoResult)) {
            echo "Updated Customer Info";
        }
    }///end of while
