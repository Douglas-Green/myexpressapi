CREATE DATABASE my_api_db;

USE my_api_db;

CREATE TABLE
  characters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE
  requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endpoint VARCHAR(255),
    method VARCHAR(10),
    status INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );