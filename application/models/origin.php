<?php
    $data = array(
        array(1),
        array(2),
        array(3),
        array(4),
        array(5)
    );
    echo '<script>';
    echo 'localStorage.setItem("myData",JSON.stringify('.json_encode($data).'))';
    echo '</script>';

    session_start();
    $_SESSION["myData"] = $data;
    

?>