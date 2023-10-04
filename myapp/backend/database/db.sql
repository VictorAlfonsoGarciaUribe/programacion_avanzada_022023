CREATE DATABASE tienda;

--using the database
use tienda;

--creating a table 
CREATE TABLE productos(
    id_producto INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    presentacion VARCHAR(100) NOT NULL,
    precio INTEGER  NOT NULL,
    cantidad INTEGER  NOT NULL,
    imagen VARCHAR (100), 
);




--Para mostrar todas las tablas
SHOW TABLES; 
