<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $comment = htmlspecialchars($_POST['text']);

    if (!empty($name) && !empty($email) && !empty($comment)) {
        
        $to = "dornas444@seznam.cz";
        $subject = "Nový kontakt z formuláře";
        $message = "Jméno: $name\nEmail: $email\nKomentář: $comment";
        $headers = "From: $email";
        
        if (mail($to, $subject, $message, $headers)) {
            echo "Děkujeme za vaši zprávu! Brzy se ozveme.";
        } else {
            echo "Omlouváme se, došlo k chybě při odesílání formuláře.";
        }
    } else {
        echo "Všechna pole musí být vyplněná.";
    }
}
?>

