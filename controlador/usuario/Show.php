<?php
    require_once "Usuario.php";
    require_once "../_mixto/Utilidades.php";

    if(sesionIniciada()) {
        $usuario = Usuario::obtenerPorId($_REQUEST["usuario"]);
        $usuario->getMensajes();
        $usuario->getHilos();

        headers();
        echo json_encode($usuario, JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }



?>