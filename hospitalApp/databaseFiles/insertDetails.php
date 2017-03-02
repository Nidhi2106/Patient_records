<?php 
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from submitting data & storing in new variables.
$firstname = mysqli_real_escape_string($con, $data->firstname);
$lastname = mysqli_real_escape_string($con, $data->lastname);
$age = mysqli_real_escape_string($con, $data->age);
$dob = mysqli_real_escape_string($con, $data->dob);
$gender = mysqli_real_escape_string($con, $data->gender);
$phone = mysqli_real_escape_string($con, $data->phone);
if (isset($data->free_text)){
$free_text = mysqli_real_escape_string($con, $data->free_text);
} else {
	$free_text = '';
}
//
// mysqli insert query
$query = "INSERT into patient (firstname, lastname, age, dob, gender, phone,free_text)" .
			"VALUES ('$firstname','$lastname', $age, '$dob', '$gender',$phone, '$free_text')";
// Inserting data into database
mysqli_query($con, $query);
echo true;
?>