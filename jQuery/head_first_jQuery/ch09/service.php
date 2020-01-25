<?php
$connect = mysqli_connect("localhost", "root", "bammerdb", "hfjq_race_info");

if (!$connect) {
    echo "ERROR:)" . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    exit;
} 
echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL . "<br>";
echo "Host information: " . mysqli_get_host_info($connect) . PHP_EOL . "<br>";

$sql = "SELECT * FROM runners";
echo $sql . "<br>";

$result = mysqli_query($connect, $sql);
if ($result) {
    echo "Success to insert the record!" . "<br>";
} else {
    echo "Fail to select:)" . "<br>";
}

mysqli_close($connect);
