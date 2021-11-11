<?php
    $data = array(
        array("first1"=>1,"second1"=>2,"third1"=>3),
        array("first2"=>2,"second2"=>3,"third2"=>4),
        array("first3"=>3,"second3"=>4,"third3"=>5),
        array("first4"=>4,"second4"=>5,"third4"=>6),
        array("first5"=>5,"second5"=>7,"third5"=>8)
    );
    echo '<script>';
    echo 'localStorage.setItem("myData",JSON.stringify('.json_encode($data).'))';
    echo '</script>';
?>