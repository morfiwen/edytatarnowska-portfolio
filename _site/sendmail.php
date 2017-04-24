<?php

if($_POST["submit"]) {
    $recipient="edyta.tarnowska@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Imię: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "Od: $sender <$senderEmail>");

    $thankYou="<p>Twoja wiadomość została wysłana. Miłego dnia!</p>";
}

?>
