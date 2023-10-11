<?php
    require_once "../Utilidades.php";

    $connection = getBdConnection();
    $statement = $connection->prepare('SELECT * FROM hilo');
    $statement->execute();
    $hilos = $statement->fetchAll(PDO::FETCH_ASSOC);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($hilos, JSON_UNESCAPED_UNICODE);
?>