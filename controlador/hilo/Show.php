<?php
    require_once "../Utilidades.php";

    $hiloId = $_REQUEST["hilo"] ?? null;

    $connection = getBdConnection();
    $statement = $connection->prepare('SELECT * FROM hilo WHERE id=?');
    $statement->execute([$hiloId]);
    $hilo = $statement->fetch(PDO::FETCH_ASSOC);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($hilo, JSON_UNESCAPED_UNICODE);
?>