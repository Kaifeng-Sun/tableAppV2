<?php
    // $data = localStorage.data0;

    foreach ($data as $key => $value){
        echo '<tr>';
        echo '<th scope="row">'.($key+1).'</th>';
        foreach($value as $k => $v){
            echo '<td onchange="" class= "firstNum" id='.($k).'>'.$v.'</td>';
            
        }
        echo '<td><input class="numInput" type="number" id=input'.($key+1).' name="sec'.($key+1).'"></td>';
        echo '</tr>';
    }
?>
<!-- '<tr>
    <th scope="row">'+ (index + 1) + '</th>
    <td id=first'+(index+1)+'>' + value[0] + 
'</td>
<td><input class="numInput" type="number" id=second'+(index+1)+' name="sec'+(index+1)+'"></td> -->
