<?php
    $field_name = $_POST['name'];
    $field_email = $_POST['email'];
    $field_message = $_POST['message'];

    $mail_to = 'alex.k.stamatis@gmail.com';

    $subject = "Message from " . $field_name;

    $body_message = 'From ' .$field_name."\n";
    $body_message .= 'E-mail' .$field_email."\n";
    $body_message .= 'Message: ' .$field_message;

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: " .$field_message; 

    $mail_status = mail($mail_to, $subject, $body_message, $headers);
    // . concatenates

    if($mail_status){ ?>
        <script language="javascript" type="text/javascript">
            alert('Message has been sent!');
        </script>
    <?php

    }
?>