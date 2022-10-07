<?php
if ($_POST) {
    $to = "mymail@gmail.com";
    $subject = 'Subj';
    $data = json_decode(file_get_contents('php://input'), true);
    $message = 'Name: '.$data['name'].' Phone: '.$data['phone'];
    $success = mail($to, $subject, $message);
    if ($success) {
        echo "Success!";
    }
    else {
        echo "Fail";
    }
}
?>