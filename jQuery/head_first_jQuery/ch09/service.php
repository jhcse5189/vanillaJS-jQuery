<?php
$connect = mysqli_connect("localhost", "root", "bammerdb", "hfjq_race_info");

if (!$connect) {
    echo "ERROR:)" . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    exit;
}

$sql = "SELECT first_name, last_name, gender, finish_time FROM runners ORDER BY finish_time";
$result = mysqli_query($connect, $sql);

while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    print_r($row);
};

mysqli_close($connect);
