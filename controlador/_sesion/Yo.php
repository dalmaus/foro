<?php

require_once "../_mixto/Utilidades.php";
require_once "_Sesion.php";
require_once "../usuario/Usuario.php";

    headers();
    if(sesionIniciada()){
        $yo = Usuario::obtenerPorId($_SESSION["id"]);
        echo json_encode($yo);
    }else{
        echo json_encode(null);
    }
?>