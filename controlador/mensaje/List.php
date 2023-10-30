<?php
    require_once "../_sesion/_Sesion.php";
    require_once "Mensaje.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if(sesionIniciada()){
        echo json_encode(Mensaje::obtenerTodos(), JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }
?>
