<?php
    require_once "../_sesion/_Sesion.php";
    require_once "Hilo.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if(sesionIniciada()){
        echo json_encode(Hilo::obtenerPorId($_REQUEST["hilo"]), JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }


?>