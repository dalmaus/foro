<?php
    require_once "../_sesion/_Sesion.php";
    require_once "Hilo.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if(sesionIniciada()){
        $usuario_id = $_SESSION["id"];
        $categoria_id = $_REQUEST["categoria_id"];
        $titulo = $_REQUEST["titulo"];
        $contenido = $_REQUEST["contenido"];

        echo json_encode(Hilo::crear($usuario_id, $categoria_id, $titulo, $contenido), JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }
?>


