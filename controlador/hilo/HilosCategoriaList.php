<?php
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";

    $hilos = DAO::hiloObtenerPorCategoria($_REQUEST["categoria"]);

    headers();
    echo json_encode($hilos, JSON_UNESCAPED_UNICODE);
?>