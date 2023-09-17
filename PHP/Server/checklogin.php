<?php
    session_start();

    if() {
        $_SESSION["loggedIn"] = true;
        header("Location: ../../");
    }
    else {
        $_SESSION["loggedIn"] = false;
        header("Location: login.php");
    }
    // Incase of an error;

    header("Location: login.php");
    session_destroy();
;?>