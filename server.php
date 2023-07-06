<?php 
    $string = file_get_contents('data/todolist.json');
    $array = json_decode($string, true);

    if(isset($_POST['text']) && ($_POST['done'])){
        array_push($array, $_POST['text'] && $_POST['done']);
        file_put_contents('data/todolist.json', json_encode($array));
    }

    header('Content-Type: application/json');
    echo json_encode($array)
?>