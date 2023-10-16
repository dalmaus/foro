<?php
    //CAMBIAR A FICHERO HILO

    require_once "../mixto/DAO.php";

    $categoriaId = $_REQUEST["categoria"] ?? null;

    $hilos = DAO::hiloObtenerPorCategoria($categoriaId);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($hilos, JSON_UNESCAPED_UNICODE);
?>