<?php
    require_once "../Utilidades.php";

    $categoriaId = $_REQUEST["categoria"] ?? null;

    $connection = getBdConnection();
    $statement = $connection->prepare('SELECT * FROM categoria WHERE id=?');
    $statement->execute([$categoriaId]);
    $categoria = $statement->fetch(PDO::FETCH_ASSOC);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($categoria, JSON_UNESCAPED_UNICODE);
?>