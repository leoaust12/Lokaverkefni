<?php

if(isset($_POST["submit"])) {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $password = $_POST["Password"];
    $passwordRepeat = $_POST["RepeatPassword"];
    $gender = $_POST["Gender"];
    $errors = array();

    // Filter System
    // Empty? => Email validated? => Password longer than 8? => Passwords match? => etc
    if(empty($firstName) OR empty($lastName) OR empty($password) OR empty($email) OR empty($passwordRepeat) OR empty($gender)) {
        array_push($errors, "Error: One or more fields were not filled.");
    }
    if(!filter_var($email, FILTER_VALIDATE)) {
        array_push($errors, "Error: Incorrect Email Address");
    }
    if(strlen($password)<8) {
        array_push($errors, "Password is not over 8 characters long.");
    }
    if($passwordRepeat==$password) {
        array_push($errors, "Error: Passwords don't seem to match each other.");
    }
    if(strlen($firstName)>20 OR strlen($lastName)>20) {
        array_push($errors, "Nice try. Pick a realistic name.");
    }
    if(strlen($firstName) < 1) {
        array_push($errors, "Theres no one letter name. Try to be realistic");
    }

    if(count($errors)>0) {
        foreach ($errors as $error) {
            echo "<div class='alert alert-danger'>$error</div>";
        }
    }
    else {
        // ignore
    }
}

session_start();

session_destroy()
;?>
<!-- Insert HTML later on -->