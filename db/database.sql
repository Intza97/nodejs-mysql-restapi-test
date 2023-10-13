-- CREATE DATABASE BD_Makeup; asi creamos la base de datos

-- USE BD_Makeup;

--asi creamos la tabla
CREATE TABLE Turnos{
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
   apellido VARCHAR(50) NOT NULL,
   telefono VARCHAR(50) NOT NULL,
   hora VARCHAR(50) NOT NULL,
   fecha VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
};

DESCRIBE Turnos;

--aqui insertamos datos en la tabla
INSERT INTO Turnos values 
 ('Juan', 'Pérez', '555-1234', '10:00 AM', '2023-10-10'),
('Ana', 'González', '555-5678', '15:30 PM', '2023-10-11'),
('Lucia', 'Martinez', '555-5788', '15:00 PM', '2023-09-11');



SELECT * FROM Turnos;






