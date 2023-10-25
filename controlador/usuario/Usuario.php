<?php
require_once "../_mixto/Dato.php";
require_once "../_mixto/DAO.php";

class Usuario extends Dato implements JsonSerializable
{

    private string $nombre;
    private string $correo;
    private ?array $hilos = null;
    private ?array $mensajes = null;
    /**
     * @param int $id
     * @param string $nombre
     * @param string $correo
     */
    public function __construct(int $id, string $nombre, string $correo)
    {
        parent::__construct($id);
        $this->nombre = $nombre;
        $this->correo = $correo;
    }

    public static function obtenerPorId(int $id): ?Usuario
    {
        return DAO::usuarioObtenerPorId($id);
    }

    /**
     * @return string
     */
    public function getCorreo(): string
    {
        return $this->correo;
    }

    /**
     * @param string $correo
     */
    public function setCorreo(string $correo): void
    {
        $this->correo = $correo;
    }

    /**
     * @return string
     */
    public function getNombre(): string
    {
        return $this->nombre;
    }

    /**
     * @param string $nombre
     */
    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    public function getHilos(): ?array
    {
        if($this->hilos == null) $this->hilos = DAO::usuarioObtenerHilosPorId($this->id);
        return $this->hilos;
    }

    public function getMensajes(): ?array
    {
        if($this->mensajes == null) $this->mensajes = DAO::usuarioObtenerMensajesPorId($this->id);
        return $this->mensajes;
    }

    /**
     * @inheritDoc
     */
    public function jsonSerialize()
    {
        return [
          "id" => $this->id,
          "nombre" => $this->nombre,
          "hilos" => $this->hilos,
          "mensajes" => $this->mensajes,
        ];
    }
}