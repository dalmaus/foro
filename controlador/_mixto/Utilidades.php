<?php

    declare(strict_types=1);

    function obtenerPdoConexionBD(): PDO
    {
        $servidor = "localhost";
        $bd = "foro";
        $identificador = "root";
        $contrasenna = "";
        $opciones = [
            PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
        ];

        try {
            $conexion = new PDO("mysql:host=$servidor;dbname=$bd;charset=utf8", $identificador, $contrasenna, $opciones);
        } catch (Exception $e) {
            loguearError("Error al conectar: " . $e->getMessage());
            exit("Error al conectar");
        }

        return $conexion;
    }

    // (Esta función no se utiliza en este proyecto pero se deja por si se optimizase el flujo de navegación.)
    // Esta función redirige a otra página y deja de ejecutar el PHP que la llamó:
    function redireccionar(string $url)
    {
        header("Location: $url");
        exit;
    }

    function syso(string $contenido)
    {
        file_put_contents('php://stderr', $contenido . "\n");
    }

    function obtenerFecha(): string
    {
        return date("Y-m-d H:i:s");
    }

    function generarCadenaAleatoria($longitud) : string
    {
        for ($s = '', $i = 0, $z = strlen($a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')-1; $i != $longitud; $x = rand(0,$z), $s .= $a[$x], $i++);
        return $s;
    }

    function headers(){
        header("Content-Type: application/json");
        header("Access-Control-Allow-Origin: *");
    }
?>