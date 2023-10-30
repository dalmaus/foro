<?php
    require_once "../_sesion/_Sesion.php";
    require_once "Usuario.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if(sesionIniciada()){
        $usuario = Usuario::obtenerPorId($_SESSION["id"]);
        $usuario->setBio($_REQUEST["bio"]);
        $usuario->setLugar($_REQUEST["lugar"]);
        $usuario->setCorreo($_REQUEST["correo"]);

        echo json_encode($usuario->actualizar(), JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }
?>