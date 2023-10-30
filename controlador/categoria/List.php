<?php
    require_once "Categoria.php";
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";
    require_once "../_sesion/_Sesion.php";

    headers();
    if(sesionIniciada()){
        echo json_encode(Categoria::obtenerTodas(), JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }
?>