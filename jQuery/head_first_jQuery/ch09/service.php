<?php

if ($_POST['action'] == 'addRunner') {
    $fname = htmlspecialchars($_POST['txtFirstName']);
    $lname = htmlspecialchars($_POST['txtLastName']);
    $gender = htmlspecialchars($_POST['ddlGender']);
    $minutes = htmlspecialchars($_POST['txtMinutes']);
    $seconds = htmlspecialchars($_POST['txtSeconds']);

    //echo $fname . " " . $lname;
    // regex.

    $time = $minutes . ":" . $seconds;
    $sql = "INSERT INTO runners (first_name, last_name, gender, finish_time)
            VALUES ('$fname', '$lname', '$gender', '$time');";
    $result = db_query($sql);

    if ($result) {
        $msg = "Runner: " . $fname . " " . $lname . " added successfully.";
        echo $msg;
        //success($msg);
    } else {
        $msg = "nope...";
        echo $msg;
        //fail('Insert failed.');
    }

    echo("
    <script>
        location.href='./service.php';
    </script>
    ");
    exit;
}

if ($_GET['action'] == 'getRunners') {
    $sql = "SELECT first_name, last_name, gender, finish_time FROM runners ORDER BY finish_time";
    $result = db_query($sql);
    
    $runners = array();
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($runners, array('fname'=>$row['first_name'], 'lname'=>$row['last_name'], 'gender'=>$row['gender'], 'time'=>$row['finish_time']));
    };
    echo json_encode(array("runners"=>$runners));
    exit;
}

function db_query($sql) {
    $connect = mysqli_connect("localhost", "root", "bammerdb", "hfjq_race_info");
    return mysqli_query($connect, $sql);
}

function fail($message) {
    echo "fail";
    die(json_encode(array('status'=>'fail', 'message'=>$message)));
}

function success($message) {
    echo "sccuess";
    die(json_encode(array('status'=>'success', 'message'=>$message)));
}
