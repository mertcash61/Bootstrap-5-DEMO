-- Veritabanı oluşturma
CREATE DATABASE my_website;

-- Veritabanını kullanma
USE my_website;

-- Kullanıcılar tablosu
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Kartlar tablosu
CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Örnek veriler ekleme
INSERT INTO users (username, email, password) VALUES
('user1', 'user1@example.com', 'hashed_password1'),
('user2', 'user2@example.com', 'hashed_password2');

INSERT INTO cards (title, content) VALUES
('Kart Başlığı 1', 'Bu, kartın içeriğidir.'),
('Kart Başlığı 2', 'Bu, kartın içeriğidir.'),
('Kart Başlığı 3', 'Bu, kartın içeriğidir.');
