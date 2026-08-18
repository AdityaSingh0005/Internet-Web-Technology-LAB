<?php

$conn = new mysqli(
    "localhost",
    "root",
    "rootpassword@45",
    "employee_db"
);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

echo "Database connected successfully!";

?>