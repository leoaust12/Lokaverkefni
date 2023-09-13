<?php

session_start()

var strikes = 0;

if[$_SESSION["loggedIn"] == false] {
    if[$_SESSION["Password"] != "123" && $_SESSION["Username"] == "gunnar"] {
        echo '<script>alert("Error. Invalid Password")'
    }
    else if[$_SESSION["Username"] != "gunnar" && $_SESSION["Password"] == "123"] {
        echo '<script>alert("Error. Incorrect username. Insert an valid username")';
    }
    else if[$_SESSION["Username"] != "gunnar" && $_SESSION["Password"] != "123"] {
        echo '<script>alert("Invalid Account.")'
    }
}

if(strike == 3) {
    echo "<h2>Your access will be denied for timebeing</h2>"
    header("youtube.com");
    strike = 0;
}
else {
    strike++;
}

session_stop();
;?>
<!-- Insert HTML later on -->