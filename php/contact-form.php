<?php
/**
 * Created by PhpStorm.
 * User: morvarid
 * Date: 7/10/2016
 * Time: 1:28 PM
 */
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
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
$mail->From = $_POST['contact_email'];//your email sending account
$mail->FromName = $_POST['contact_name'];//your email sending account name
$mail->addAddress('mozafarian.mo@gmail.com', $_POST['contact_name']);     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Body    = $_POST['contact_comment'];
$mail->name = trim($_POST['contact_name']);
$mail->email  =trim($_POST['contact_email']);
$mail->message = trim($_POST['contact_comment']);
$mail->addReplyTo($_POST['contact_email']);
$mail->Subject = "MPoutique message";

if (empty($mail->name)) {
    $mail->name = 'Message from your website.';
}

if(!$mail->send()) {
  $respon = [
    'success' => false,
           'message' => 'Mailer Error: ' . $mail->ErrorInfo
     ];
//   echo 'Message could not be sent.';
  }
 else {
   $respon = [
     'success' => true,
   'message' => 'Message has been sent'
 ];
//echo 'Message has been sent';
}
$respon = json_encode($respon);
print $respon;
header('Location: ../index.html#/contact');
?>