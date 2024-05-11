<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="database123";

$conn=mysqli_connect($server_name,$username,$password,$database_name);
//now check the connection
if(!$conn)
{
	die("Connection Failed:" . mysqli_connect_error());

}

if(isset($_POST['save']))
{	
	 $first_name = $_POST['name'];
	 $resturentname = $_POST['resturentname'];
	 $email = $_POST['email'];
	 $contactno = $_POST['contactno'];
	 $noofpersons = $_POST['noofpersons'];
	 $dates = $_POST['date'];
	 $timepref = $_POST['time'];
	 $prefferedfood = $_POST['prefferedfood'];
	 $occasion = $_POST['occasion'];
	 $lastname = $_POST['lastname'];

	 $sql_query = "INSERT INTO entry_details (first_name.resturantname,email,contactno,dates,timepref,prefferedfood,occasion,lastname)
	 VALUES ('$first_name','$resturentname','$email','$contactno','$noofpersons','$dates','$timepref','$prefferedfood','$occasion','$lastname')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		echo "New Details Entry inserted successfully !";
	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>