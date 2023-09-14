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
;?>