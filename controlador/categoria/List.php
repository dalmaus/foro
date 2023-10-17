<?php
    require_once "Categoria.php";
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    echo json_encode(Categoria::obtenerTodas(), JSON_UNESCAPED_UNICODE);
?>