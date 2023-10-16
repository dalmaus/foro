<?php
    require_once "../mixto/DAO.php";

    $categorias = DAO::categoriaObtenerTodas();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($categorias, JSON_UNESCAPED_UNICODE);
?>