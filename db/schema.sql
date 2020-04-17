//Write SQL queries this file that do the following:

//   * Create the `burgers_db`.
//   * Switch to or use the `burgers_db`.
//   * Create a `burgers` table with these fields:
//    
-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create a database called burgers_db --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  -- Create an auto incrementing int a column called "id that serves as the primary key.--
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id),

  -- Create a column named **burger_name**: a string.--

  burger_name varchar(50),
  -- Creates a boolean column called "devoured" --
  -- with true when a new row is made and the value isn't otherwise defined. --
  devoured BOOLEAN DEFAULT true,
);

