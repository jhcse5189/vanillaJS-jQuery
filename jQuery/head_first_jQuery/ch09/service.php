<?php

$sql = "SELECT first_name, last_name, gender, finish_time FROM runners ORDER BY finish_time";
$result = db_query($sql);

while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    print_r($row);
};

mysqli_close($connect);

function db_query($sql) {
    $connect = mysqli_connect("localhost", "root", "bammerdb", "hfjq_race_info")
    OR die ('disconnected.');

    return mysqli_query($connect, $sql);
}
