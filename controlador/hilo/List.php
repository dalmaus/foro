<?php
    require_once "../_mixto/Utilidades.php";
    require_once "Hilo.php";

    headers();
    echo json_encode(Hilo::obtenerTodos(), JSON_UNESCAPED_UNICODE);
?>