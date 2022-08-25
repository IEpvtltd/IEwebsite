<?php

$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "contact@indispensableexpress.com";

mail($recipient, $name, $message, $mailheader);

?>