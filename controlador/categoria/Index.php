<?php
    require_once "../Utilidades.php";

    $connection = getBdConnection();
    $statement = $connection->prepare('SELECT * FROM categoria');
    $statement->execute();
    $categorias = $statement->fetchAll(PDO::FETCH_ASSOC);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($categorias, JSON_UNESCAPED_UNICODE);
?>