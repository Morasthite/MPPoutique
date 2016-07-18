<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/17/2016
 * Time: 3:56 PM
 */
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
////Collect all Details from Angular HTTP Request.
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
print_r($request);
$cart = $request -> cart;
//echo "<br> cart: <br> ";
//print_r($cart);
//foreach ($cart as $mac) {
//    echo "<br>new<br>";
//    print_r($mac);
//    echo "hi: ".$mac -> name;
//}
//php mailer
$mail = new PHPMailer;
$mail->SMTPDebug = 0;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication

$mail->Username = "mozafarian.mo@gmail.com";                 // SMTP username
$mail->Password = "Morvarid86";                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = "MPoutique.com";//your email sending account
$mail->FromName = "MPoutique";//your email sending account name
$mail->addAddress($request -> customer -> email);     // Add a recipient
$mail->isHTML(true);

$mail->Body ="<style type='text/css'>
.letramenu5 {
    font-family: arial;
font-size: 12px;
color: #000000;
text-decoration: none;
}
.letrachicablbold {
    font-family: arial;
font-size: 12px;
font-weight: bold;
text-decoration: none;
}
</style>
<span class='letramenu5'>
Dear <strong>".$request -> customer -> firstName." ".$request -> customer -> lastName."</strong>, Thank you for buying at <A HREF='www.MPoutique.com'>MPoutique.com</A>. Your order will be shipped as soon as possible.
</span><BR><BR>
<table border='0' cellpadding='0' cellspacing='0'>
<tr>
<td width='432' height='99' valign='top' bgcolor='#FFFFFF'><span class='letramenu5'>
Order ID:</strong> ".$request -> orderNumber."<br>
<strong>Date and Time :</strong> ".$request -> date."<br>
</p>
<br>
<br>
<table width='433' border='0' cellpadding='0' cellspacing='1' bordercolor='#FFFFFF' bgcolor='#FFFFFF'>
<tr bgcolor='#999999'>
<td width='80' height='21'><div align='center'><span class='letrachicablbold'>QTY</span></div></td>
<td width='117'><div align='center'><span class='letrachicablbold'>NAME</span></div></td>
<td width='93'><div align='center'><span class='letrachicablbold'>PRICE</span></div></td>
<td width='98'><div align='center'><span class='letrachicablbold'>TOTAL</span></div></td>
</tr>";

foreach ($cart as $mac) {
    $mail->Body .= "<tr bgcolor='#EAEAEA'>
       <td height='21'><span class='letramenu5'>&nbsp; ".$mac -> ordered."</span></td>
       <td><span class='letramenu5'>&nbsp;".$mac -> name."</span></td>
      <td><span class='letramenu5'> &nbsp;$&nbsp;".number_format($mac -> price,2,'.',',')."</span></td>
        <td><span class='letramenu5'>&nbsp;&nbsp;$ ".number_format($mac -> id,2,'.',',')."</span></td>
   </tr>";
}

$mail->Body .= "</table>
</form>
<table width='199' border='0' align='right' cellpadding='0' cellspacing='1'>
   <tr><BR>
       <td width='89' height='20' bgcolor='#999999'><div align='center'><span class='letrachicablbold'>SUBTOTAL</SPAN></div></td>
       <td width='107' bgcolor='#EAEAEA'><span class='letramenu5'>&nbsp;$ ".number_format($request -> subtotal,2,'.',',')."</span></td>
   </tr>
    <br>
    <tr>
       <td height='20' bgcolor='#999999'><div align='center'><span class='letrachicablbold'>TAX</SPAN></div></td>
       <td bgcolor='#EAEAEA'><span class='letramenu5'>&nbsp;$ ".$request -> tax."</span></td>
    </tr>
    <tr>
        <td height='20' bgcolor='#999999'><div align='center'><span class='letrachicablbold'>SHIPPING</SPAN></div></td>
       <td bgcolor='#EAEAEA'><span class='letramenu5'>&nbsp;$ ".$request -> shipping."</SPAN></td>
    </tr>
    <tr>
        <td height='20' bgcolor='#999999'><div align='center'><span class='letrachicablbold'>TOTAL</SPAN></div></td>
        <td bgcolor='#EAEAEA'><span class='letramenu5'>&nbsp;$&nbsp;<strong>".number_format($request -> total,2,'.',',')."</strong></span></td>
    </tr>
</table>
<p>&nbsp; </p>
<p align='center' class='letramenu5'> &nbsp;&nbsp;&nbsp;&nbsp;</p></td>
</tr>

</table>
";



$mail->name = "MPoutique";
$mail->email  ="MPoutique/2yahoo.com";
$mail->message = "message";
$mail->addReplyTo("MPoutique.com");
$mail->Subject = "MPoutique Invoice";

if (empty($mail->name)) {
    $mail->name = 'Message from your website.';
}

if(!$mail->send()) {
    echo 'Message could not be sent.';
}
else {
    echo 'send';
}
?>