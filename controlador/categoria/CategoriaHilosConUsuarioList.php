<?php
    require_once "Categoria.php";
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";
    require_once "../_sesion/_Sesion.php";

    headers();
    if(sesionIniciada()) {
        $categoria = Categoria::obtenerPorId($_REQUEST["categoria"]);
        $categoria->obtenerHilosConUsuario();

        echo json_encode($categoria, JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(salirSiSesionFalla());
    }
?>