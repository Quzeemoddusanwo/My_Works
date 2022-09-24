<?php
#Connecting tothe host and database
$conn = mysqli_connect("localhost","root","","schoolpage");
if(isset($_POST['submit'])){

   $fullName = $_POST['fullName'];
   $number = $_POST['number'];
   $email_address = $_POST['email_address'];
   $school = $_POST['school'];
   $programme = $_POST['programme'];
   $level = $_POST['level'];
   $session = $_POST['session'];
   $semester = $_POST['semester'];


   $query = "INSERT INTO details(fFullName,MatricNo,Email,School,Level,Session,Semester,Programme) VALUES ('$fullName'
   ,'$number','$email_address','$school','$programme','$level','$session','$semester')";
 $result = mysqli_query($conn,$query);

 if($result){
 echo "Registration Successfully..."; 
 }
}
?>