# create database
CREATE DATABASE IF NOT EXISTS nimaptestdb ;

# to use database
USE nimaptestdb;

# create categories table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

# create products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Corrected Category Insert
INSERT INTO categories (name) 
VALUES ('Laptop'), ('Smartphone'), ('Television'), ('AC');

-- Corrected Product Insert with 4 additional records (Total 7)
INSERT INTO products (name, category_id) VALUES 
('Lenovo Ideapad 320', 1),
('Xiaomi 11234', 2),
('Redmi note 11 5G', 2),
('Samsung Crystal 4K TV', 3), 
('LG 1.5 Ton 5 Star AC', 4),  
('MacBook Air M2', 1),       
('iPhone 15 Pro', 2);
