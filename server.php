<?php 
$tasks = [
    [
        "text" => "HTML",
        "done" => true
    ],
    [
        "text" => "CSS",
        "done" => true
    ],
    [
        "text" => "Responsive design",
        "done" => true
    ],
    [
        "text" => "Javascript",
        "done" => true
    ],
    [
        "text" => "PHP",
        "done" => true
    ],
    [
        "text" => "Laravel",
        "done" => false
    ]
];
        header('Content-Type: application/json');
        echo json_encode($tasks)
?>