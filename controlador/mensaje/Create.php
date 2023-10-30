<?php
    require_once "../_sesion/_Sesion.php";
    require_once "Mensaje.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if(sesionIniciada()){
        $usuario_id = $_SESSION["id"];
        $hilo_id = $_REQUEST["hilo_id"];
        $contenido = $_REQUEST["contenido"];

        $mensaje = Mensaje::eliminar($usuario_id, $hilo_id, $contenido);
        $mensaje->obtenerUsuario();

        echo json_encode($mensaje, JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }
?>