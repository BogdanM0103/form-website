<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = $_POST["firstName"];
    $secondName = $_POST["secondName"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $fileName = $_FILES["file"]["name"];

    // Print the submitted information
    echo "<h2>Submitted Information:</h2>";
    echo "<p>First Name: " . $firstName . "</p>";
    echo "<p>Last Name: " . $secondName . "</p>";
    echo "<p>Email: " . $email . "</p>";
    echo "<p>Phone: " . $phone . "</p>";
    echo "<p>File Name: " . $fileName . "</p>";
}
?>
