<?php
    require_once "../_sesion/_Sesion.php";
    require_once "../_mixto/Utilidades.php";
    require_once "Hilo.php";

    headers();
    if(sesionIniciada()){
        echo json_encode(Hilo::obtenerTodos(), JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }

?>