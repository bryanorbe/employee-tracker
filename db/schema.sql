DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(15, 2) NOT NULL,
    dept_id INT,
    FOREIGN KEY(dept_id) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT,
    FOREIGN KEY(role_id) REFERENCES roles(id),
    manager_id INT,
    FOREIGN KEY(manager_id) REFERENCES employee(id),
    PRIMARY KEY(id)
)