<?php
    require_once "../_sesion/_Sesion.php";
    require_once "../_mixto/DAO.php";
    require_once "../_mixto/Utilidades.php";

    headers();
    if(sesionIniciada()){
        $categoriaId = $_REQUEST["categoria"] ?? null;
        $categoria = DAO::categoriaObtenerPorId($categoriaId);

        echo json_encode($categoria, JSON_UNESCAPED_UNICODE);
    }else{
        echo json_encode(null);
    }

?>