<?php
    require_once "Categoria.php";
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";

    $categoria = Categoria::obtenerPorId($_REQUEST["categoria"]);
    $categoria->obtenerHilosConUsuario();

    headers();
    echo json_encode($categoria, JSON_UNESCAPED_UNICODE);
?>