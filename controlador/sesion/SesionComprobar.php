<?php
    require_once "../_mixto/Utilidades.php";
    require_once "_Sesion.php";

    entrarSiSesionIniciada();

    $usuario = obtenerUsuarioPorPassword($_REQUEST["nombre"], $_REQUEST["contrasenna"]);

    if ($usuario) { // Equivale a if ($usuario != null)
        generarSesionRAM($usuario);

        if (isset($_REQUEST["recuerdame"])) {
            generarRenovarSesionCookie();
        }
        echo "Autenticado";
    } else {
        echo "Error de autenticación";
    }

?>