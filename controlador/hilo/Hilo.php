<?php

class Hilo extends Dato implements JsonSerializable
{

    private int $usuario_id;
    private int $categoria_id;
    private string $titulo;

    /**
     * @param int $id
     * @param int $usuario_id
     * @param int $categoria_id
     * @param string $titulo
     */
    public function __construct(int $id, int $usuario_id, int $categoria_id, string $titulo)
    {
        parent::__construct($id);
        $this->usuario_id = $usuario_id;
        $this->categoria_id = $categoria_id;
        $this->titulo = $titulo;
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




    public function jsonSerialize()
    {
        // TODO: Implement jsonSerialize() method.
    }
}