CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	orders varchar(255) NOT NULL,
    devoured boolean default false,
	PRIMARY KEY (id)
);