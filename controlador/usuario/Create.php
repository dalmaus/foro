<?php
    require_once "Usuario.php";
    require_once "../_mixto/Utilidades.php";

    $nombre = $_REQUEST["nombre"];
    $correo = $_REQUEST["correo"];
    $password = $_REQUEST["password"];
    $bio = $_REQUEST["bio"] ?? null;
    $lugar = $_REQUEST["lugar"] ?? null;

    headers();
    echo json_encode(Usuario::crear($nombre, $correo, $password, $bio, $lugar), JSON_UNESCAPED_UNICODE);
?>