<?php

if ($_POST['action'] == 'form') {
    $msg = htmlspecialchars($_POST['form_box']);

    $sql = "INSERT INTO db (msg) VALUES ('$msg')";
    $result = db_query($sql);

    if ($result) {
        $log = "ok.";
        echo $log;
    } else {
        $log = "nope.";
        echo $log;
    }
    mysqli_close($connect);

    echo("
        <script>
            location.href='./index.html';
        </script>
    ");
}

if ($_GET['action'] == 'getDB') {
    $sql = "SELECT msg FROM db";
    $result = db_query($sql);
    
    $db = array();
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($db, array('msg'=>$row['msg']));
    }
    echo json_encode(array("db"=>$db));
    mysqli_close($connect);
}

function db_query($sql) {
    $connect = mysqli_connect("localhost", "root", "bammerdb", "simple_php_post");
    return mysqli_query($connect, $sql);
}
?>
