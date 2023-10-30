<?php
    require_once "../_mixto/Utilidades.php";
    require_once "_Sesion.php";

    headers();
    if(sesionIniciada()){
        echo json_encode(cerrarSesion());
    }else{
        echo json_encode(null);
    }
?>