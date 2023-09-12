CREATE DATABASE restaurant;

--using the database
use restaurant;

--creating a table 
CREATE TABLE pedido(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    platillo VARCHAR(50) NOT NULL,
    precio INTEGER  NOT NULL,
    cantidad INTEGER  NOT NULL,
    observaciones VARCHAR (100),
    cliente VARCHAR (100),
    fecha VARCHAR (20),
    estado VARCHAR(20)
);



--Para mostrar todas las tablas
SHOW TABLES; 
