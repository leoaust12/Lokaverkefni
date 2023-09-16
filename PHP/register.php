<?php

session_start();

if($_SESSION["loggedIn"] == false) {
    if($_SESSION["Password"] != "123" && $_SESSION["Username"] == "gunnar") {
        echo '<script>alert("Error. Invalid Password")';
    }
    else if($_SESSION["Username"] != "gunnar" && $_SESSION["Password"] == "123") {
        echo '<script>alert("Error. Incorrect username. Insert an valid username")';
    }
    else if($_SESSION["Username"] != "gunnar" && $_SESSION["Password"] != "123") {
        echo '<script>alert("Invalid Account.")';
    }
}

session_destroy()
;?>
<!-- Insert HTML later on -->