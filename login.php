<?php

$server="localhost";
$username="root";
$password="";
$dbname="login_info"

$conn=mysqli_connect($server,$username,$password,$dbname);

if(!conn){
    echo "connect"
}
else{
    echo "not connected"
}
?>