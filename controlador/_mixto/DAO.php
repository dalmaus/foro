<?php

require_once "../categoria/Categoria.php";

class DAO
{
    private static ?PDO $conexion = null;

    private static function obtenerPdoConexionBD(): PDO
    {
        $servidor = "localhost";
        $identificador = "root";
        $contrasenna = "";
        $bd = "foro"; // Schema
        $opciones = [
            PDO::ATTR_EMULATE_PREPARES => false, // Modo emulación desactivado para prepared statements "reales"
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Que los errores salgan como excepciones.
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // El modo de fetch que queremos por defecto.
        ];

        try {
            $pdo = new PDO("mysql:host=$servidor;dbname=$bd;charset=utf8", $identificador, $contrasenna, $opciones);
        } catch (Exception $e) {
            error_log("Error al conectar: " . $e->getMessage());
            echo "\n\nError al conectar:\n" . $e->getMessage();
            header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
        }

        return $pdo;
    }

    private static function garantizarConexion()
    {
        if (Self::$conexion == null) {
            Self::$conexion = Self::obtenerPdoConexionBd();
        }
    }

    private static function ejecutarConsulta(string $sql, array $parametros): array
    {
        Self::garantizarConexion();

        $select = Self::$conexion->prepare($sql);
        $select->execute($parametros);
        return $select->fetchAll(); // Se devuelve "el $rs"
    }

    // Devuelve:
    //   - null: si ha habido un error
    //   - int: el id autogenerado para el nuevo registro, si todo bien.
    private static function ejecutarInsert(string $sql, array $parametros): ?int
    {
        self::garantizarConexion();

        $insert = self::$conexion->prepare($sql);
        $sqlConExito = $insert->execute($parametros);

        if (!$sqlConExito) return null;
        else return self::$conexion->lastInsertId();
    }

    // Ejecuta un Update o un Delete.
    // Devuelve:
    //   - null: si ha habido un error
    //   - 0, 1 u otro número positivo: OK (no errores) y estas son las filas afectadas.
    private static function ejecutarUpdel(string $sql, array $parametros): ?int
    {
        Self::garantizarConexion();

        $updel = Self::$conexion->prepare($sql);
        $sqlConExito = $updel->execute($parametros);

        if (!$sqlConExito) return null;
        else return $updel->rowCount();
    }




    /* CATEGORÍA */





    private static function categoriaCrearDesdeFila(array $fila): Categoria
    {
        return new Categoria($fila["id"], $fila["nombre"], $fila["descripcion"]);
    }

    public static function categoriaObtenerPorId(int $id): ?Categoria
    {
        $rs = Self::ejecutarConsulta(
            "SELECT * FROM categoria WHERE id=?",
            [$id]
        );

        if ($rs) {
            $fila = $rs[0];
            $categoria = Self::categoriaCrearDesdeFila($fila);
            return $categoria;
        } else {
            return null;
        }
    }

    public static function categoriaObtenerTodas(): array
    {
        $rs = Self::ejecutarConsulta(
            "SELECT * FROM categoria ORDER BY id",
            []
        );

        $datos = [];
        foreach ($rs as $fila) {
            $categoria = Self::categoriaCrearDesdeFila($fila);
            array_push($datos, $categoria);
        }

        return $datos;
    }

    public static function categoriaCrear(string $nombre, string $descripcion): ?Categoria
    {
        $idAutogenerado = Self::ejecutarInsert(
            "INSERT INTO categoria (nombre, descripcion) VALUES (?, ?)",
            [$nombre, $descripcion]
        );

        if ($idAutogenerado == null) return null;
        else return Self::categoriaObtenerPorId($idAutogenerado);
    }

    public static function categoriaActualizar(Categoria $categoria): ?Categoria
    {
        $filasAfectadas = Self::ejecutarUpdel(
            "UPDATE categoria SET nombre=?, descripcion=? WHERE id=?",
            [$categoria->getNombre(), $categoria->getDescripcion(), $categoria->getId()]
        );

        if ($filasAfectadas == null) return null;
        else return $categoria;
    }

    public static function categoriaEliminarPorId(int $id): bool
    {
        $filasAfectadas = Self::ejecutarUpdel(
            "DELETE FROM categoria WHERE id=?",
            [$id]
        );

        return ($filasAfectadas == 1);
    }

    public static function categoriaEliminar(Categoria $categoria): bool
    {
        return Self::categoriaEliminarPorId($categoria->getId());
    }




    /* USUARIO */




    private static function usuarioCrearDesdeFila(array $fila): Usuario
    {
        return new Usuario(
            (int)$fila["id"],
            $fila["nombre"],
            $fila["correo"],
            $fila["contrasenna"],
            $fila["bio"],
            $fila["lugar"]
        );
    }

    public static function usuarioObtenerPorId(int $id): ?Usuario
    {
        $rs = self::ejecutarConsulta(
            "SELECT * FROM usuario WHERE id=?",
            [$id]
        );

        if ($rs) {
            return self::usuarioCrearDesdeFila($rs[0]);
        }
        else return null;
    }

    public static function usuarioObtenerTodas(): array
    {
        $datos = [];

        $rs = Self::ejecutarConsulta(
            "SELECT * FROM usuario ORDER BY nombre, correo",
            []
        );

        foreach ($rs as $fila) {
            $usuario = Self::usuarioCrearDesdeFila($fila);
            array_push($datos, $usuario);
        }

        return $datos;
    }

    public static function usuarioCrear(string $nombre, string $correo, string $contrasenna, ?string $bio, ?string $lugar): ?Usuario
    {
        $idAutogenerado = Self::ejecutarInsert(
            "INSERT INTO usuario (nombre, correo, contrasenna, bio, lugar) VALUES (?, ?, ?, ?, ?)",
            [$nombre, $correo, $contrasenna, $bio, $lugar]
        );

        if ($idAutogenerado == null) return null;
        else return self::usuarioObtenerPorId($idAutogenerado);
    }

    public static function usuarioActualizar(Usuario $usuario): ?Usuario
    {
        $filasAfectadas = self::ejecutarUpdel(
            "UPDATE usuario SET bio=?, lugar=?, correo=? WHERE id=?",
            [
                $usuario->getBio(),
                $usuario->getLugar(),
                $usuario->getCorreo(),
                $usuario->getId()
            ]
        );

        if ($filasAfectadas == null) return null;
        else return $usuario;
    } // TODO error del profe

    public static function usuarioEliminarPorId(int $id): bool
    {
        $filasAfectadas = Self::ejecutarUpdel(
            "DELETE FROM usuario WHERE id=?",
            [$id]
        );

        return ($filasAfectadas == 1);
    }

    public static function usuarioEliminar(Usuario $usuario): bool
    {
        return Self::usuarioEliminarPorId($usuario->getId());
    }

    public static function hiloObtenerPorId(int $id): ?Hilo
    {
        $rs = Self::ejecutarConsulta(
            "SELECT * FROM hilo WHERE id=?",
            [$id]
        );

        if ($rs) {
            $fila = $rs[0];
            $hilo = self::hiloCrearDesdeFila($fila);
            return $hilo;
        } else {
            return null;
        }
    }




    /*  HILO */



    private static function hiloCrearDesdeFila(array $fila): Hilo
    {
        return new Hilo($fila["id"], $fila["usuario_id"], $fila["categoria_id"], $fila["titulo"], $fila["fecha"]);
    }

    public static function hiloObtenerTodos(): array
    {
        $rs = Self::ejecutarConsulta(
            "SELECT * FROM hilo ORDER BY fecha",
            []
        );

        $datos = [];
        foreach ($rs as $fila) {
            $hilo = self::hiloCrearDesdeFila($fila);
            array_push($datos, $hilo);
        }

        return $datos;
    }

    public static function hilosObtenerPorIdUsuario(int $usuario_id): ?array
    {
        $rs = Self::ejecutarConsulta(
            "SELECT * FROM hilo WHERE usuario_id=? ORDER BY fecha DESC",
            [$usuario_id]
        );

        $datos = [];
        foreach ($rs as $fila) {
            $mensaje = self::hiloCrearDesdeFila($fila);
            $datos[] = $mensaje;
        }

        return $datos;
    }

    public static function hiloCrear(int $usuario_id, int $categoria_id, string $titulo, string $contenidoMensaje): ?Hilo
    {
        $conexion = self::obtenerPdoConexionBD();
        $idAutogeneradoHilo = null;
        try {
            $conexion->beginTransaction();

            $idAutogeneradoHilo = self::ejecutarInsert(
                "INSERT INTO hilo (usuario_id, categoria_id, titulo) VALUES (?, ?, ?)",
                [$usuario_id, $categoria_id, $titulo]
            );
            self::mensajeCrear($usuario_id, $idAutogeneradoHilo, $contenidoMensaje);
            $conexion->commit();

        }catch (PDOException $e){
            $conexion->rollBack();
            var_dump($conexion);
        }
        if ($idAutogeneradoHilo == null) return null;
        else return self::hiloObtenerPorId($idAutogeneradoHilo);
    }

    public static function hiloActualizar(Hilo $hilo): ?Hilo
    {
        $filasAfectadas = Self::ejecutarUpdel(
            "UPDATE hilo SET usuario_id=?, categoria_id=?, titulo=? WHERE id=?",
            [$hilo->getUsuarioId(), $hilo->getCategoriaId(), $hilo->getTitulo()]
        );

        if ($filasAfectadas == null) return null;
        else return $hilo;
    }

    public static function hiloEliminarPorId(int $id, int $usuario_id): bool
    {
        $filasAfectadas = self::ejecutarUpdel(
            "DELETE FROM hilo WHERE id=? AND usuario_id=?",
            [$id, $usuario_id]
        );

        return ($filasAfectadas == 1);
    }

    public static function hiloEliminar(Hilo $hilo): bool
    {
        return Self::hiloEliminarPorId($hilo->getId());
    }


    /* MENSAJE */






    private static function mensajeCrearDesdeFila(array $fila): Mensaje
    {
        return new Mensaje($fila["id"], $fila["usuario_id"], $fila["hilo_id"], $fila["contenido"], $fila["fecha"]);
    }

    public static function mensajesObtenerTodos(): array
    {
        $rs = Self::ejecutarConsulta(
            "SELECT * FROM mensaje ORDER BY fecha",
            []
        );

        $datos = [];
        foreach ($rs as $fila) {
            $mensaje = Self::mensajeCrearDesdeFila($fila);
            $datos[] = $mensaje;
        }

        return $datos;
    }

    public static function mensajesObtenerPorIdUsuario(int $usuario_id)
    {
        $rs = Self::ejecutarConsulta(
            "SELECT * FROM mensaje WHERE usuario_id=? ORDER BY fecha DESC",
            [$usuario_id]
        );

        $datos = [];
        foreach ($rs as $fila) {
            $mensaje = Self::mensajeCrearDesdeFila($fila);
            $datos[] = $mensaje;
        }

        return $datos;
    }

    public static function mensajeCrear(int $usuario_id, int $hilo_id, string $contenido): ?Mensaje
    {
        $idAutogenerado = self::ejecutarInsert(
            "INSERT INTO mensaje (usuario_id, hilo_id, contenido) VALUES (?, ?, ?)",
            [$usuario_id, $hilo_id, $contenido]
        );

        if ($idAutogenerado == null) return null;
        else return self::mensajeObtenerPorId($idAutogenerado);
    }

    public static function mensajeObtenerPorId(int $id): ?Mensaje
    {
        $rs = self::ejecutarConsulta('SELECT *
            FROM mensaje 
            WHERE id=?',
            [$id]
        );
        if ($rs) {
            $fila = $rs[0];
            $mensaje = self::mensajeCrearDesdeFila($fila);
            return $mensaje;
        } else {
            return null;
        }
    }

    public static function mensajeObtenerTodos(){
        return self::ejecutarConsulta("SELECT * FROM mensaje", []);
    }

    public static function mensajeActualizar(Mensaje $mensaje): ?Mensaje
    {
        $filasAfectadas = Self::ejecutarUpdel(
            "UPDATE mensaje SET usuario_id=?, hilo_id=?, titulo=?, contenido=?, fecha=? WHERE id=?",
            [$mensaje->getUsuarioId(), $mensaje->getHiloId(), $mensaje->getTitulo(),
                $mensaje->getContenido(), $mensaje->getFecha(), $mensaje->getId()]
        );

        if ($filasAfectadas == null) return null;
        else return $mensaje;
    }

    public static function mensajeEliminarPorId(int $id, int $usuario_id): bool
    {
        $filasAfectadas = self::ejecutarUpdel(
            "DELETE FROM mensaje WHERE id=? AND usuario_id=?",
            [$id, $usuario_id]
        );

        return ($filasAfectadas == 1);
    }

    public static function mensajeEliminar(Mensaje $mensaje): bool
    {
        return Self::mensajeEliminarPorId($mensaje->getId());
    }

    public static function hilosObtenerPorCategoria(int $id): array
    {
        $rs = self::ejecutarConsulta('SELECT *
            FROM hilo 
            WHERE categoria_id=?',
        [$id]);

        $datos = [];
        foreach ($rs as $fila) {
            $hilo = self::hiloCrearDesdeFila($fila);
            array_push($datos, $hilo);
        }
        return $datos;
    }

    public static function mensajesObtenerPorHilo(int $hilo_id): array
    {
        $rs = self::ejecutarConsulta('SELECT * FROM mensaje 
        WHERE hilo_id=?
        ORDER BY fecha',
            [$hilo_id]);

        $datos = [];
        foreach ($rs as $fila) {
            $mensaje = self::mensajeCrearDesdeFila($fila);
            array_push($datos, $mensaje);
        }
        return $datos;
    }

//    private static function transaccion(array $queriesFunc): ?array
//    {
//        $conexion = self::obtenerPdoConexionBD();
//        $elementosInsertados = [];
//        try {
//            $conexion->beginTransaction();
//            foreach($queriesFunc as $query){
//                $elementosInsertados[] = $query();
//            }
//        }catch (PDOException $e){
//            $conexion->rollback();
//        }
//
//        return $elementosInsertados;
//    }
    public static function usuarioObtenerMensajesPorId(int $id_usuario): ?array
    {
        $rs = self::ejecutarConsulta('SELECT * FROM mensaje 
        WHERE usuario_id=?
        ORDER BY fecha DESC LIMIT 4',
            [$id_usuario]);

        $datos = [];
        foreach ($rs as $fila) {
            $mensaje = self::mensajeCrearDesdeFila($fila);
            array_push($datos, $mensaje);
        }
        return $datos;
    }

    public static function usuarioObtenerHilosPorId(int $id_usuario): ?array
    {
        $rs = self::ejecutarConsulta('SELECT * FROM hilo 
        WHERE usuario_id=?
        ORDER BY fecha DESC LIMIT 4',
            [$id_usuario]
        );

        $datos = [];
        foreach ($rs as $fila) {
            $hilo = self::hiloCrearDesdeFila($fila);
            $hilo->obtenerCategoria();
            array_push($datos, $hilo);
        }
        return $datos;
    }


}



