<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/10/2016
 * Time: 9:05 PM
 */
require_once ('mysql_connect.php');
////Collect all Details from Angular HTTP Request.
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
///////////////parse the data


////////////sending data to db
$query = "INSERT INTO `purchases`(`id`, `inventory_id`, `customer_id`, `quantity_purchased`, `date`, `note`, `invoice_number`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7])";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
    }///end of while
}///end of if

