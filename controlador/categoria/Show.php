<?php
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";

    $categoriaId = $_REQUEST["categoria"] ?? null;
    $categoria = DAO::categoriaObtenerPorId($categoriaId);

    headers();
    echo json_encode($categoria, JSON_UNESCAPED_UNICODE);
?>