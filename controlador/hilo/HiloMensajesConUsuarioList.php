<?php
    require_once "Hilo.php";
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";
    require_once "../_sesion/_Sesion.php";

    headers();
    if(sesionIniciada()) {
        $hilo = Hilo::obtenerPorId($_REQUEST["hilo"]);
        $hilo->obtenerMensajesConUsuario();

        echo json_encode($hilo, JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(salirSiSesionFalla());
    }
?>