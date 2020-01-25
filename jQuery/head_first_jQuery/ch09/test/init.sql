CREATE DATABASE IF NOT EXISTS simple_php_post;

USE simple_php_post;

CREATE TABLE IF NOT EXISTS db (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    msg VARCHAR(20) NOT NULL
);

INSERT INTO db (msg)
VALUES ('John'),
       ('bammer');
