<?php

require_once "../_mixto/Dato.php";
require_once "../_mixto/DAO.php";

class Mensaje extends Dato implements JsonSerializable
{

    private int $usuario_id;
    private int $hilo_id;
    private ?string $titulo = null; //cambiar en BBDD
    private string $contenido;
    private DateTime $fecha;

    /**
     * @param int $usuario_id
     * @param int $hilo_id
     * @param string $titulo
     * @param string $contenido
     * @param DateTime $fecha
     */
    public function __construct(int $id, int $usuario_id, int $hilo_id, ?string $titulo, string $contenido, DateTime $fecha)
    {
        parent::__construct($id);
        $this->usuario_id = $usuario_id;
        $this->hilo_id = $hilo_id;
        $this->titulo = $titulo;
        $this->contenido = $contenido;
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
    public function getHiloId(): int
    {
        return $this->hilo_id;
    }

    /**
     * @param int $hilo_id
     */
    public function setHiloId(int $hilo_id): void
    {
        $this->hilo_id = $hilo_id;
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

    /**
     * @return string
     */
    public function getContenido(): string
    {
        return $this->contenido;
    }

    /**
     * @param string $contenido
     */
    public function setContenido(string $contenido): void
    {
        $this->contenido = $contenido;
    }

    /**
     * @return DateTime
     */
    public function getFecha(): DateTime
    {
        return $this->fecha;
    }

    /**
     * @param DateTime $fecha
     */
    public function setFecha(DateTime $fecha): void
    {
        $this->fecha = $fecha;
    }

    public static function obtenerTodos(){
        return DAO::mensajesObtenerTodos();
    }


    /**
     * @inheritDoc
     */

    public function jsonSerialize()
    {
        // TODO: Implement jsonSerialize() method.
    }
}