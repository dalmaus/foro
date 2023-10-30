<?php
    require_once "../_sesion/_Sesion.php";
    require_once "../_mixto/Utilidades.php";
    require_once "Mensaje.php";

    headers();
    if(sesionIniciada()){
        echo json_encode(Mensaje::obtenerTodosPorIdUsuario($_SESSION["id"]));
    }else{
        echo json_encode(null);
    }
?>