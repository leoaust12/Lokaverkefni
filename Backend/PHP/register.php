<?php

session_start();

if(isset($_SESSION["user"])) {
    header("Location: index.php");
}

require_once "database.php"

if(isset($_POST["submit"])) {
    $firstName = $_POST["FirstName"];
    $lastName = $_POST["LastName"];
    $Username = $_POST["User"];
    $email = $_POST["Mail"];
    $password = $_POST["Password"];
    $passwordRepeat = $_POST["RePass"];
    $gender = $_POST["GenderSelection"];
    $errors = array();

    // Filter System
    // Empty? => Email validated? => Password longer than 8? => Passwords match? => etc
    if(empty($firstName) OR empty($lastName) OR empty($password) OR empty($email) OR empty($passwordRepeat) OR empty($gender) OR empty($Username)) {
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
    if(strlen($Username)<4) {
        array_push($errors, "Username is too short.");
    }
    if(strlen($Username)>16) {
        array_push($errors, "Username is too long.");
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
;?>
<!DOCTYPE html>
<html lang="is">
<head>
    <title>Register your Account today! | SiteSpeak</title>
    <link rel="stylesheet" href="../../FrontEnd/CSS/register.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../../Images/Logo_favicon.png">
</head>
<body>
<div class="Top">
    <div class="NavBar">
                <span id="Logo">
                    <img src="../../Images/Logo_favicon.png" width="200px" height="100px" alt="This is not ready at the moment">
                </span>
        <span id="Title">
                    <h1>SiteSpeak Registration</h1>
                </span>
        <span id="Bar">
                    <!-- Interactive bar, when clicked they should 2 anchors appear, and they can choose where to go instead -->
                    <a href="./home.html">Home (for test purposes)</a>
                </span>
    </div>
</div>
<div class="Form">
    <h2>Register today!</h2>
    <form method="post" action="er.php">
        <label for="Mail" class="Email">Insert Email Address</label>
        <input name="Mail" placeholder="pro@pornhub.com" id="Mail" type="email">
        <!-- Names -->
        <div class="Names">
                    <span id="FirstNames">
                        <label for="firstN" class="NameFirst">Name</label>
                        <input id="firstN" name="FirstName" placeholder="Ben" type="text">
                    </span>
            <span id="LastNames">
                        <label for="lastN" class="NameLast">Last name</label>
                        <input id="lastN" name="FirstName" placeholder="Dover" type="text">
                    </span>
        </div>
        <!-- Username  -->
        <label for="User" class="Username">Insert Username</label>
        <input name="User" placeholder="EpicLover69420" type="text" id="User">
        <!-- Password -->
        <label for="Pass" class="Password">Insert Password</label>
        <input name="Password" placeholder="password1" id="Pass" type="password">
        <!-- Repeat Password -->
        <label for="rePass" class="RePass">Repeat the password</label>
        <input name="RePass" placeholder="Repeat password" id="rePass" type="password">
        <!-- Gender -->
        <label for="gender" class="Gender">Define your gender</label>
        <select id="gender" name="GenderSelection">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Other">None of the above / Not listed</option>
        </select>
        <div class="Buttons">
            <input id="Reset" type="reset" value="Reset">
            <button>Register</button>
        </div>
    </form>
</div>
<div class="Bottom">
    <div class="Information-Layer">
                <span id="Code">
                    <h2>Codespace</h2>
                    <a target="_blank" href="https://github.com/leoaust12/Lokaverkefni">Github</a>
                </span>
        <span id="About_Us">
                    <h2>About the creators</h2>
                    <a href="../../FrontEnd/HTML/aboutUs.html">Creators</a>
                </span>
        <span id="PDF">
                    <h2>Project Document</h2>
                    <a href="../../FrontEnd/HTML/registerForm.html">Project PDF Document</a>
                </span>
    </div>
</div>
</body>
</html>