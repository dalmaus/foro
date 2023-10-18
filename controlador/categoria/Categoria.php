<?php

require_once "../_mixto/Dato.php";
require_once "../_mixto/DAO.php";
require_once "../hilo/Hilo.php";

class Categoria extends Dato implements JsonSerializable
{
    private string $nombre;
    private string $descripcion;
    private ?array $hilos = null;

    /**
     * @param int $id
     * @param string $nombre
     * @param string $descripcion
     */
    public function __construct(int $id, string $nombre, string $descripcion)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
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
     * @return string
     */
    public function getDescripcion(): string
    {
        return $this->descripcion;
    }

    /**
     * @param string $descripcion
     */
    public function setDescripcion(string $descripcion): void
    {
        $this->descripcion = $descripcion;
    }

    public static function obtenerTodas(): array
    {
        return DAO::categoriaObtenerTodas();
    }

    public static function obtenerPorId(int $id): ?Categoria
    {
        return DAO::categoriaObtenerPorId($id);
    }

    public function obtenerHilos(): array
    {
        if ($this->hilos == null) $this->hilos = DAO::hilosObtenerPorCategoria($this->id);
        return $this->hilos;
    }

    public function obtenerHilosConUsuario(): array
    {
        $this->hilos = $this->obtenerHilos();

        //optimizar
        foreach($this->hilos as $hilo){
            $hilo->obtenerUsuario();
        }

        return $this->hilos;
    }
    /**
     * @inheritDoc
     */
    public function jsonSerialize()
    {
        return [
          "id" => $this->id,
          "nombre" => $this->nombre,
          "descripcion" => $this->descripcion,
            "hilos" => $this->hilos,
        ];
    }
}