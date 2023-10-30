<?php
require_once "../_mixto/Dato.php";
require_once "../_mixto/DAO.php";

class Usuario extends Dato implements JsonSerializable
{

    private string $nombre;
    private string $correo;
    private string $contrasenna;
    private ?string $bio = null;
    private ?string $lugar = null;
    private ?array $hilos = null;
    private ?array $mensajes = null;
    /**
     * @param int $id
     * @param string $nombre
     * @param string $correo
     */
    public function __construct(int $id, string $nombre, string $correo, string $contrasenna, ?string $bio, ?string $lugar)
    {
        parent::__construct($id);
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->contrasenna = $contrasenna;
        $this->bio = $bio;
        $this->lugar = $lugar;
    }

    public static function obtenerPorId(int $id): ?Usuario
    {
        return DAO::usuarioObtenerPorId($id);
    }

    public function actualizar(): ?Usuario
    {
        return DAO::usuarioActualizar($this);
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
     * @return string
     */
    public function getContrasenna(): string
    {
        return $this->contrasenna;
    }

    /**
     * @param string $contrasenna
     */
    public function setContrasenna(string $contrasenna): void
    {
        $this->contrasenna = $contrasenna;
    }

    /**
     * @return string|null
     */
    public function getBio(): ?string
    {
        return $this->bio;
    }

    /**
     * @param string|null $bio
     */
    public function setBio(?string $bio): void
    {
        $this->bio = $bio;
    }

    /**
     * @return string|null
     */
    public function getLugar(): ?string
    {
        return $this->lugar;
    }

    /**
     * @param string|null $lugar
     */
    public function setLugar(?string $lugar): void
    {
        $this->lugar = $lugar;
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
    public static function crear(string $nombre, string $correo, string $password, ?string $bio, ?string $lugar): ?Usuario
    {
        return DAO::usuarioCrear($nombre, $correo, $password, $bio, $lugar);
    }

    /**
     * @inheritDoc
     */
    public function jsonSerialize()
    {
        return [
          "id" => $this->id,
          "nombre" => $this->nombre,
          "bio" => $this->bio,
          "lugar" => $this->lugar,
          "hilos" => $this->hilos,
          "mensajes" => $this->mensajes,
          "correo" => $this->correo,
        ];
    }
}