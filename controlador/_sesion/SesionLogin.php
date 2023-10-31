<?php
    require_once "../_mixto/Utilidades.php";
    require_once "_Sesion.php";

    $nombre = $_REQUEST["nombre"] ?? null;
    $contrasenna = $_REQUEST["contrasenna"] ?? null;

    $usuarioJson = file_get_contents('php://input');

    headers();
    if($nombre && $contrasenna){ //via GET
        echo json_encode(login($nombre, $contrasenna));
    }else if($usuarioJson){ //via POST
        echo json_encode(loginJson(file_get_contents('php://input')));
    }else{
        echo json_encode(null);
    }

?>