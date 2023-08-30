<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $userId = $_GET["userId"];
    $password = $_GET["password"];
    
    echo "<!--Form data was:\nuserId=" . $userId . "&password=" . $password . "\n-->\n";
    
    if ($userId=="bob" && $password=="bobcat") {
        echo "You have successfully logged in!";
    } else {
        echo "Invalid Username.Please try again.";
    }
}
?>