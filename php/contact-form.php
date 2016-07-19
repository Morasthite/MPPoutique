<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/10/2016
 * Time: 1:28 PM
 */
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
////Collect all Details from Angular HTTP Request.
///info: POST method which angular uses send data using JSON. So in PHP Script if we use $_POST directly we will not be able to receive POST data.
/// Here is how to read POST data in PHP sent from Angular:
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//print_r($request);
if (isset ($request -> orderNumber)) {
    $ordernum = $request->orderNumber;
}else {
    $ordernum = "no orderNumber";
}
////php mailer
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
$mail->From = $request -> contactEmail;//your email sending account
$mail->FromName = $request -> contactName;//your email sending account name
$mail->addAddress('mozafarian.mo@gmail.com', $request -> contactName);     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Body    = ("ORDER NUMBER: ".$ordernum."<br> MESSAGE: ".$request -> contactComment);
$mail->name = trim($request ->contactName);
$mail->email  =trim($request -> contactEmail);
$mail->message = trim($request -> contactComment);
$mail->addReplyTo($request -> contactEmail);
$mail->Subject = "MPoutique message";

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