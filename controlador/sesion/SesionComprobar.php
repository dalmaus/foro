<?php
    require_once "../_mixto/Utilidades.php";
    require_once "_Sesion.php";

    headers();

    if(siSesionIniciada()){
        echo json_encode(true);
    }else{
        $logueado = siSesionNoIniciada(file_get_contents('php://input'));//bool
        echo json_encode($logueado);
    }
?>