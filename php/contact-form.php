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
$mail->From = $request -> contact_email;//your email sending account
$mail->FromName = $request -> contact_name;//your email sending account name
$mail->addAddress('mozafarian.mo@gmail.com', $request -> contact_name);     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Body    = $request -> contact_comment;
$mail->name = trim($request ->contact_name);
$mail->email  =trim($request -> contact_email);
$mail->message = trim($request -> contact_comment);
$mail->addReplyTo($request -> contact_email);
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