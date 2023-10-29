<?php
    require_once "../_mixto/Utilidades.php";
    require_once "_Sesion.php";

    headers();
    if(isset($_REQUEST["nombre"]) || isset($_REQUEST["contrasenna"])){ //via GET
        echo json_encode(login($_REQUEST["nombre"], $_REQUEST["contrasenna"]));
    }else{ //via POST
        echo json_encode(loginJson(file_get_contents('php://input')));
    }

?>