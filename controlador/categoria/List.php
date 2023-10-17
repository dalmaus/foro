<?php
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";

    $categorias = DAO::categoriaObtenerTodas();

    headers();
    echo json_encode($categorias, JSON_UNESCAPED_UNICODE);
?>