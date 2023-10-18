<?php
    require_once "Hilo.php";
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";

    $hilo = Hilo::obtenerPorId($_REQUEST["hilo"]);
    $hilo->obtenerMensajesConUsuario();

    headers();
    echo json_encode($hilo, JSON_UNESCAPED_UNICODE);
?>