<?php
    require_once "../_sesion/_Sesion.php";
    require_once "Hilo.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if(sesionIniciada()){
        $usuario_id = $_SESSION["id"];
        $hilo_id = $_REQUEST["hilo"];

        echo json_encode(Hilo::eliminar($hilo_id, $usuario_id), JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }
?>