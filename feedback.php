<?php
$servername = "localhost";
$username = "root";
$password = "zeetech123.com";
$dbname = "zeetechgadgets";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $message = mysqli_real_escape_string($conn, $_POST["message"]);

    // Validate input
    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        $stmt = $conn->prepare("INSERT INTO submission (name, email, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);

        if ($stmt->execute()) {
            echo "Submission successful!";
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Invalid input data.";
    }
}

$conn->close();
?>