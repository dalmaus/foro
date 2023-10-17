<?php
    require_once "../_mixto/DAO.php";

    $categoriaId = $_REQUEST["categoria"] ?? null;

    $categoria = DAO::categoriaObtenerPorId($categoriaId);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($categoria, JSON_UNESCAPED_UNICODE);
?>