<?php
$hostname = '127.0.0.1';
$username = 'root';
$password = '';
$dbname = 'booking';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$no_of_persons = $_POST['no_of_persons'];
$date = $_POST['date-picker'];
$time = $_POST['time-picker'];
$preferred_food = $_POST['preferred-food'];
$ocassion   = $_POST['ocassion'];

// database connection
$conn = new mysqli('127.0.0.1','root','','booking');
if ($conn->connect_error) {
    die('connection failed: ' . $conn->connect_error);
}
$username = $_POST['root'];
$password = $_POST[''];

$sql = "INSERT INTO users (username, password) VALUES('$username','$password')";

if (mysqli_query($conn, $sql)) {
    echo "new record created successfully"
}
else{
    $stmt = $conn->prepare("insert into registration(name, email, phone, no. of persons, date, time, food, ocassion)
     values(?, ?, ?, ?, ?, ?, ?, ?);");
     $stmt->bind_param("ssiisiss", $name , $email , $phone , $no_of_persons , $date, $time , $food , $ocassion);
     $stmt->execute();
     echo "registered successfully";
     $stmt->close();
     $conn->close();
}
else{
    echo "Error registering" .$sql . "<br>" .mysqli_error($conn);
}
mysqli_close($conn);
?>