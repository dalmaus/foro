<?php

class Usuario extends Dato implements JsonSerializable
{

    private string $nombre;
    private string $correo;
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

    /**
     * @inheritDoc
     */
    public function jsonSerialize()
    {
        // TODO: Implement jsonSerialize() method.
    }
}