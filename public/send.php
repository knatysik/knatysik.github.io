<?php
header("Access-Control-Allow-Origin: http://localhost:8080");

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

sleep(10);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'natmihkr@gmail.com';
$mail->Password = 'rfqrmmlzuiarnonv';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setLanguage('en');
$mail->setFrom('robot@devreadwrite.com', 'Robot');
$mail->addAddress('natmihkr@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Резюме почта';
$mail->Body    = '<p>Name: ' . $_POST['name'] . '</p>
                  <p>Company: ' . $_POST['company'] . '</p>
                  <p>Message: ' . $_POST['message'] . '</p> ';

if(!$mail->send()) {
    echo 'Ошибка при отправке. Ошибка: ' . $mail->ErrorInfo;
} else {
    echo 'Сообщение успешно отправлено';
}

