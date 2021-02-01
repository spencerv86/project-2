-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS promethium_db;
-- Creates the "todolist" database --
CREATE DATABASE promethium_db;

-- USE promethium_db;
-- CREATE TABLE outfits (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   hat_id INT,  
--   shirt_id INT,  
--   pant_id INT,  
--   shoe_id INT,
--   outer_id INT,  
--   closet_id INT
-- );

-- CREATE TABLE closets (
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- closet_name VARCHAR(255),
-- created_at timestamp
-- );
-- CREATE TABLE garment (
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- type varchar(255),
-- name varchar(255),
-- color varchar(255),
-- size varchar(255),
-- closet_id INT,
-- garment_url VARCHAR(255)
-- );