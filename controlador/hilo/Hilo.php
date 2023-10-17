<?php

require_once "../_mixto/Dato.php";
require_once "../_mixto/DAO.php";
require_once "../usuario/Usuario.php";
require_once "../mensaje/Mensaje.php";

class Hilo extends Dato implements JsonSerializable
{

    private int $usuario_id;
    private int $categoria_id;
    private string $titulo;
    private string $fecha;
    private ?Usuario $usuario = null;
    private ?array $mensajes = null;

    /**
     * @param int $id
     * @param int $usuario_id
     * @param int $categoria_id
     * @param string $titulo
     */
    public function __construct(int $id, int $usuario_id, int $categoria_id, string $titulo, string $fecha)
    {
        parent::__construct($id);
        $this->usuario_id = $usuario_id;
        $this->categoria_id = $categoria_id;
        $this->titulo = $titulo;
        $this->fecha = $fecha;
    }

    /**
     * @return int
     */
    public function getUsuarioId(): int
    {
        return $this->usuario_id;
    }

    /**
     * @param int $usuario_id
     */
    public function setUsuarioId(int $usuario_id): void
    {
        $this->usuario_id = $usuario_id;
    }

    /**
     * @return int
     */
    public function getCategoriaId(): int
    {
        return $this->categoria_id;
    }

    /**
     * @param int $categoria_id
     */
    public function setCategoriaId(int $categoria_id): void
    {
        $this->categoria_id = $categoria_id;
    }

    /**
     * @return string
     */
    public function getTitulo(): string
    {
        return $this->titulo;
    }

    /**
     * @param string $titulo
     */
    public function setTitulo(string $titulo): void
    {
        $this->titulo = $titulo;
    }

    public static function obtenerTodos(): array
    {
        return DAO::hiloObtenerTodos();
    }

    public static function obtenerPorId(int $id): ?Hilo
    {
        return DAO::hiloObtenerPorId($id);
    }

    public function obtenerMensajes(): array
    {
        if ($this->mensajes == null) $this->mensajes = DAO::mensajesObtenerPorHilo($this->id);

        return $this->mensajes;
    }

    public function obtenerMensajesConUsuario(): array
    {
        $this->mensajes = $this->obtenerMensajes();

        foreach($this->mensajes as $mensaje){
            $mensaje->obtenerUsuario();
        }

        return $this->mensajes;
    }

    public function obtenerUsuario(): ?Usuario
    {
        if($this->usuario === null) $this->usuario = DAO::usuarioObtenerPorId($this->usuario_id);
        return $this->usuario;
    }

    public function jsonSerialize()
    {
        return [
            "id" => $this->id,
            "usuario_id" => $this->usuario_id,
            "categoria_id" => $this->categoria_id,
            "titulo" => $this->titulo,
            "fecha" => $this->fecha,
            "usuario" => $this->usuario,
            "mensajes" => $this->mensajes,
        ];
    }
}