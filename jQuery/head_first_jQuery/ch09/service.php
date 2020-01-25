<?php

if ($_POST['action'] == 'addRunner') {
    $fname = htmlspecialchars($_POST['txtFirstName']);
    $lname = htmlspecialchars($_POST['txtLastName']);
    $gender = htmlspecialchars($_POST['ddlGender']);
    $minutes = htmlspecialchars($_POST['txtMinutes']);
    $seconds = htmlspecialchars($_POST['txtSeconds']);

    // prevent to input special characters and numbers for name
    if (preg_match('/[^a-zA-Z\s]/g', $fname) || preg_match('/[^a-zA-Z\s]/g', $lname)) {
        fail('Invalid name provided.');
    }

    // only numbers for finish time
    if (preg_match('/^[0-9]*/g', $minutes) || preg_match('/^[0-9]*/g', $seconds)) {
        fail('Invaild finish time provided.');
    }

    // not allow any empty input
    if (empty($fname) || empty($lname) || empty($gender) || empty($minutes) || empty($seconds)) {
        fail('There are empty input on your form.');
    }

    $time = $minutes . ":" . $seconds;
    $sql = "INSERT INTO runners (first_name, last_name, gender, finish_time)
            VALUES ($fname, $lname, $gender, $time);";
    $result = db_query($sql);

    if ($result) {
        $msg = "Runner: " . $fname . " " . $lname . " added successfully.";
        success($msg);
    } else {
        fail('Insert failed.');
    }

} else if ($_GET['action'] == 'getRunners') {
    $sql = "SELECT first_name, last_name, gender, finish_time FROM runners ORDER BY finish_time";
    $result = db_query($sql);
    
    $runners = array();
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($runners, array('fname'=>$row['first_name'], 'lname'=>$row['last_name'], 'gender'=>$row['gender'], 'time'=>$row['finish_time']));
    };
    echo json_encode(array("runners"=>$runners));
}

mysqli_close($connect);

function db_query($sql) {
    $connect = mysqli_connect("localhost", "root", "bammerdb", "hfjq_race_info")
    OR die(fail('Disconnected to MariaDB'));

    return mysqli_query($connect, $sql);
}

function fail($message) {
    die(json_encode(array('status'=>'fail', 'message'=>$message)));
}

function success($message) {
    die(json_encode(array('status'=>'success', 'message'=>$message)));
}
