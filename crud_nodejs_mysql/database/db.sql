CREATE DATABASE crudnodejsmysql;

--using the database
use crudnodejsmysql;

--creating a table 
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR (100) NOT NULL,
    phone VARCHAR(15)
);

--creating a table 
CREATE TABLE users(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(50) NOT NULL,
    name VARCHAR (50) NOT NULL,
    rol VARCHAR(20) NOT NULL,
    password VARCHAR(50)
);

--Para mostrar todas las tablas
SHOW TABLES; 
--Para describir la tabla
DESCRIBE CUSTOMER;
--Para seleccionar datos 
SELECT * FROM customer;
describe customer;