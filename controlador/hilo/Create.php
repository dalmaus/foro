<?php
    require_once "Hilo.php";
    require_once "../_mixto/Utilidades.php";

    $usuario_id = $_REQUEST["usuario_id"];
    $categoria_id = $_REQUEST["categoria_id"];
    $titulo = $_REQUEST["titulo"];
    $contenido = $_REQUEST["contenido"];

    headers();
    echo json_encode(Hilo::crear($usuario_id, $categoria_id, $titulo, $contenido), JSON_UNESCAPED_UNICODE);
?>


