<?php
    require_once "../Utilidades.php";

    $categoriaId = $_REQUEST["categoria"] ?? null;

    $connection = getBdConnection();
    $statement = $connection->prepare(
        'SELECT c.id, c.nombre, h.id as h_id, h.titulo as h_titulo, h.usuario_id as h_usuario_id, u.nombre as u_nombre
            FROM categoria c 
            INNER JOIN hilo h
            ON c.id = h.categoria_id
            INNER JOIN usuario u
            ON h.usuario_id = u.id
            WHERE c.id = ?'
    );
    $statement->execute([$categoriaId]);
    $categoria = $statement->fetchAll(PDO::FETCH_ASSOC);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($categoria, JSON_UNESCAPED_UNICODE);
?>