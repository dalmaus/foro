<?php
    function getBdConnection(){
        $serverName = "localhost";
        $dbName = "foro";
        $username = "root";
        $password = "";

        return new PDO("mysql:host=$serverName;dbname=$dbName;", $username, $password);
    }
?>