-- Write SQL queries this file that do the following:--

-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create a database called burgers_db --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  -- Create an auto incrementing int a column called "id that serves as the primary key.--
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),

  -- Create a column named **burger_name**: a string.--

  burger_name varchar(50) NOT NULL,
  -- Creates a boolean column called "devoured" --
  -- with true when a new row is made and the value isn't otherwise defined. --
  devoured BOOLEAN DEFAULT false);


