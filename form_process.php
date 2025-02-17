<?php
if (isset($_POST['email'])) {

    // REPLACE THIS 2 LINES AS YOU DESIRE
    $email_to = "beaumont.dan@gmail.com";
    $email_subject = "Website Form Submission";

    function problem($error)
    {
        echo "Oh looks like there is some problem with your form data: <br><br>";
        echo $error . "<br><br>";
        echo "Please fix those to proceed.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['firstName']) ||
        !isset($_POST['secondName']) ||
        !isset($_POST['email']) ||
        !isset($_POST['tel']) ||
        !isset($_POST['message'])
        !isset($_POST['heardAbout'])
    ) {
        problem('Oh no! There looks like there is a problem with your form data.');
    }

    $firstName = $_POST['firstName']; // required
    $secondName = $_POST['LastName']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'Email address does not seem valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $firstName)) {
        $error_message .= 'Name invalid.<br>';
    }
    if (!preg_match($string_exp, $secondName)) {
        $error_message .= 'Name invalid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Message should not be less than 2 characters<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details following:\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($firstName + " " + $secondName) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Tel: " . clean_string($tel) . "\n";
    $email_message .= "Subject: " . clean_string($subject) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";
    $email_message .= "How they eard about you: " . clean_string($heardAbout) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- Replace this as your success message -->

    Thank you for your message, I'll be in touch as soon as possible.

<?php
}
?>