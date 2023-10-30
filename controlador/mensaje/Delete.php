<?php
    require_once "../_sesion/_Sesion.php";
    require_once "Mensaje.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if (sesionIniciada()) {
        $usuario_id = $_SESSION["id"];
        $mensaje_id = $_REQUEST["mensaje"];

        echo json_encode(Mensaje::eliminar($mensaje_id, $usuario_id), JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(null);
    }
?>
