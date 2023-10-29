<?php
    require_once "../_mixto/Utilidades.php";
    require_once "_Sesion.php";

    headers();
    echo json_encode(sesionIniciada());
?>