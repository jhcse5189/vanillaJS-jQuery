CREATE DATABASE IF NOT EXISTS hfjq_race_info;

USE hfjq_race_info;

CREATE TABLE IF NOT EXISTS runners (
    runner_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    finish_time VARCHAR(10)
);

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('John', 'Smith', 'm', '25:31'),
       ('Frank', 'Jones', 'm', '26.08'),
       ('Bob', 'Hope', 'm', '26:38'),
       ('Ryan', 'Rice', 'm', '28:24'),
       ('Jacob', 'Zimmy', 'm', '29:24'),
       ('Mary', 'Brown', 'f', '26:01'),
       ('Jane', 'Smith', 'f', '28:04');
