DROP DATABASE IF EXISTS bdturing;
CREATE DATABASE bdturing;
USE bdturing;

CREATE TABLE clientes(
    id_clientes TINYINT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre_completo VARCHAR(20),
    email VARCHAR(20),
    telefono VARCHAR(20),
    empresa VARCHAR(20),
    mensaje VARCHAR(20)
);

CREATE TABLE email(
    id_email TINYINT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(20)
);

DELIMITER $$

CREATE PROCEDURE `almacenado` () 
BEGIN 
SELECT * FROM clientes;
END$$ 

CREATE PROCEDURE `correosE` ()
BEGIN
SELECT * FROM email;
END$$

DELIMITER ;

call almacenado();
call correosE();
