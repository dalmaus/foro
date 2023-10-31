<?php
    require_once "Usuario.php";
    require_once "../_mixto/Utilidades.php";

    $nombre = $_REQUEST["nombre"] ?? null;
    $correo = $_REQUEST["correo"] ?? null;
    $contrasenna = $_REQUEST["contrasenna"] ?? null;
    $bio = $_REQUEST["bio"] ?? null;
    $lugar = $_REQUEST["lugar"] ?? null;

    headers();
    if($nombre && $correo && $contrasenna){
        echo json_encode(Usuario::crear($nombre, $correo, $contrasenna, $bio, $lugar), JSON_UNESCAPED_UNICODE);

    }else{
        echo json_encode(null);
    }
?>