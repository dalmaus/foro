<?php
    require_once "Mensaje.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    echo json_encode(Mensaje::obtenerTodos(), JSON_UNESCAPED_UNICODE);
?>
