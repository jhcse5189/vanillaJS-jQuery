<?php

$sql = "SELECT first_name, last_name, gender, finish_time FROM runners ORDER BY finish_time";
$result = db_query($sql);

$runners = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    array_push($runners, array('fname'=>$row['first_name'], 'lname'=>$row['last_name'], 'gender'=>$row['gender'], 'time'=>$row['finish_time']));
};
echo json_encode(array("runners"=>$runners));

mysqli_close($connect);

function db_query($sql) {
    $connect = mysqli_connect("localhost", "root", "bammerdb", "hfjq_race_info")
    OR die(fail('disconnected.'));

    return mysqli_query($connect, $sql);
}

function fail($message) {
    die(json_encode(array('status'=>'fail', 'message'=>$message)));
}

function success($message) {
    die(json_encode(array('status'=>'success', 'message'=>$message)));
}
