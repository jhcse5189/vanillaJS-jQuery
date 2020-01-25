CREATE DATABASE IF NOT EXISTS hfjq_race_info;

USE hfjq_race_info;

CREATE TABLE IF NOT EXISTS runners (
    runner_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    finish_time VARCHAR(10)
);
