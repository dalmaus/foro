DROP DATABASE IF EXISTS foro;
CREATE DATABASE foro;
use foro;

DROP TABLE IF EXISTS categoria;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS mensaje;
DROP TABLE IF EXISTS hilo;

CREATE TABLE categoria (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(30) NOT NULL
);
CREATE TABLE usuario (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    correo VARCHAR(255)
);
CREATE TABLE hilo (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id BIGINT NOT NULL,
    categoria_id INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE CASCADE
);
CREATE TABLE mensaje (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id BIGINT NOT NULL,
    hilo_id BIGINT NOT NULL,
    titulo VARCHAR(255),
    contenido VARCHAR(65535) NOT NULL,
    fecha timestamp DEFAULT current_timestamp,
    FOREIGN KEY (hilo_id) REFERENCES hilo(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE
);

INSERT INTO categoria VALUES(null, 'General');
INSERT INTO categoria VALUES(null, 'Política');
INSERT INTO categoria VALUES(null, 'Deportes');
INSERT INTO categoria VALUES(null, 'Videojuegos');
INSERT INTO categoria VALUES(null, 'Música');

INSERT INTO usuario VALUES(null, 'PruebaUser', 'prueba@user');

INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(1, 1, 'Prueba de Título');

INSERT INTO mensaje (usuario_id, hilo_id, contenido)
VALUES (1, 1, 'Este es la prueba de un mensaje en un hilo.')



