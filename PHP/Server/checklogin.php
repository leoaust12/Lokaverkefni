<?php
    session_start();

    if() {
        header("Location: ../../");
    }
    else {
        $_SESSION["loggedIn"] = false;
        header("Location: login.php");
    }
;?>