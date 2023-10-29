<?php
    require_once "Hilo.php";
    require_once "../_mixto/Utilidades.php";
    session_start();
    echo $_SESSION["id"];
    headers();
    echo json_encode(Hilo::obtenerPorId($_REQUEST["hilo"]), JSON_UNESCAPED_UNICODE);
?>