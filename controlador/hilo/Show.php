<?php
    require_once "Hilo.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    echo json_encode(Hilo::obtenerPorId($_REQUEST["hilo"]), JSON_UNESCAPED_UNICODE);
?>