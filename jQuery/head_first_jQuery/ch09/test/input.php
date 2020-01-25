<!DOCTYPE html>
<html>
    <body>
        <h3>in php</h3>
        <div id="php">
        </div>
    </body>
</html>

<?php

$sql = "SELECT msg FROM db";
$result = db_query($sql);

$db = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    array_push($db, array('msg'=>$row['msg']));
}
echo json_encode(array("db"=>$db));

mysqli_close($connect);

function db_query($sql) {
    $connect = mysqli_connect("localhost", "root", "bammerdb", "simple_php_post")
    return mysqli_query($connect, $sql);
}
?>
