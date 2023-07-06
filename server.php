<?php 
    $string = file_get_contents('data/todolist.json');
    $array = json_decode($string, true);

    if(isset($_POST['obj'])){
        $newObj = [
            "text" => $_POST['obj']['text'],
            "done" => true
        ];

        array_push($array, $newObj);
        file_put_contents('data/todolist.json', json_encode($array));
    }
    header('Content-Type: application/json');
    echo json_encode($array)
?>