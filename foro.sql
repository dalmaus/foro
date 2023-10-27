DROP DATABASE IF EXISTS foro;
CREATE DATABASE foro;
use foro;

# DROP TABLE IF EXISTS categoria;
# DROP TABLE IF EXISTS usuario;
# DROP TABLE IF EXISTS mensaje;
# DROP TABLE IF EXISTS hilo;

CREATE TABLE categoria (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    descripcion VARCHAR(255)
);
CREATE TABLE usuario (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    correo VARCHAR(255) NOT NULL,
    contrasenna VARCHAR(255) NOT NULL,
    bio VARCHAR(255),
    lugar VARCHAR(30)
);
CREATE TABLE hilo (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id BIGINT NOT NULL,
    categoria_id INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    fecha timestamp DEFAULT current_timestamp,
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

INSERT INTO categoria VALUES(null, 'General', 'Cuestiones generales, información y dudas sobre temas menos específicos');
INSERT INTO categoria VALUES(null, 'Política', 'Debate sobre asuntos gubernamentales y políticos de actualidad.');
INSERT INTO categoria VALUES(null, 'Deportes', 'Comparte noticias y resultados de tus deportes favoritos.');
INSERT INTO categoria VALUES(null, 'Videojuegos', 'Discute juegos, trucos y consejos con otros jugadores.');
INSERT INTO categoria VALUES(null, 'Música', 'Explora géneros, artistas y comparte tus canciones.');

INSERT INTO usuario (nombre, correo, contrasenna) VALUES('Usuario1', 'prueba@user', 'password1');
INSERT INTO usuario (nombre, correo, contrasenna) VALUES('Usuario2', 'usero@user', 'password2');

INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(1, 1, 'Prueba de Título');
INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(2, 2, 'Título 2');
INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(1, 1, 'Título 3');
INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(1, 4, 'Título 4');
INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(1, 1, 'Recomendaciones para visitar en Tokyo');
INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(1, 4, 'Gta VI - Trailer Inminente?');
INSERT INTO hilo (usuario_id, categoria_id, titulo)
VALUES(2, 5, 'Vuestra canción favorita de Michael Jackson');


INSERT INTO mensaje (usuario_id, hilo_id, contenido)
VALUES (1, 1, 'Este es la prueba de un mensaje en un hilo.');
INSERT INTO mensaje (usuario_id, hilo_id, contenido)
VALUES (2, 1, 'Prueba contestación a hilo de otro usuario.');



