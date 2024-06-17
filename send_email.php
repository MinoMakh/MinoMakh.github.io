<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'alimakhloufj@gmail.com';
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for contacting us. We will get back to you soon.';
    } else {
        echo 'There was a problem sending your message. Please try again.';
    }
} else {
    echo 'Invalid request';
}
?>
