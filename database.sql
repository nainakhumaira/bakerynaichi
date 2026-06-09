-- ============================================
-- DATABASE NAICHI BAKERY - E-COMMERCE
-- ============================================
-- Buat Database
CREATE DATABASE IF NOT EXISTS naichi_bakery;
USE naichi_bakery;

-- ============================================
-- TABEL USERS
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer', 'admin') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABEL PRODUCTS
-- ============================================
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama_produk VARCHAR(150) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    deskripsi TEXT,
    harga DECIMAL(10, 2) NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    gambar_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABEL WISHLIST
-- ============================================
CREATE TABLE IF NOT EXISTS wishlist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE KEY unique_wishlist (user_id, product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABEL CART
-- ============================================
CREATE TABLE IF NOT EXISTS cart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    kuantitas INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE KEY unique_cart (user_id, product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABEL ORDERS
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_harga DECIMAL(12, 2) NOT NULL,
    tanggal_pembelian TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_bayar ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    metode_pembayaran VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABEL ORDER_ITEMS
-- ============================================
CREATE TABLE IF NOT EXISTS order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    kuantitas INT NOT NULL,
    harga_satuan DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(12, 2) GENERATED ALWAYS AS (kuantitas * harga_satuan) STORED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- SEED DATA: USERS
-- ============================================
INSERT INTO users (nama, email, password, role) VALUES
('Andi Kusuma', 'andi@example.com', SHA2('password123', 256), 'customer'),
('Admin Naichi', 'admin@naichi.com', SHA2('admin123', 256), 'admin'),
('Siti Rahma', 'siti@example.com', SHA2('password456', 256), 'customer'),
('Budi Santoso', 'budi@example.com', SHA2('password789', 256), 'customer');

-- ============================================
-- SEED DATA: PRODUCTS
-- ============================================
-- KATEGORI: ROTI MANIS
INSERT INTO products (nama_produk, kategori, deskripsi, harga, stok, gambar_url) VALUES
('Naichi Pillow Choco', 'Roti Manis', 'Roti sobek lembut isi cokelat premium dari Belgia. Tekstur empuk dan renyah di bagian luar, dengan cokelat yang melumer di mulut.', 45000, 50, 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&h=500&fit=crop'),
('Matcha Red Bean Bun', 'Roti Manis', 'Roti bun khas Jepang dengan perpaduan unik matcha dan pasta kacang merah. Rasa yang seimbang antara manis dan pahit, sempurna untuk teman teh.', 38000, 40, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=500&fit=crop');

-- KATEGORI: PASTRY & CROISSANT
INSERT INTO products (nama_produk, kategori, deskripsi, harga, stok, gambar_url) VALUES
('Almond Butter Croissant', 'Pastry & Croissant', 'Croissant renyah dan berlapis dengan toping almond sliced dan isian krim almond yang kaya. Baked fresh setiap hari dengan mentega berkualitas tinggi.', 52000, 35, 'https://images.unsplash.com/photo-1555507036-a1fd6f82809a?w=500&h=500&fit=crop'),
('Pain au Chocolat', 'Pastry & Croissant', 'Pastry khas Prancis yang berlapis-lapis sempurna dengan isian cokelat batangan premium. Crispy di luar, lembut di dalam dengan cokelat yang mengalir.', 48000, 45, 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&h=500&fit=crop');

-- KATEGORI: CAKE & DESSERT
INSERT INTO products (nama_produk, kategori, deskripsi, harga, stok, gambar_url) VALUES
('Strawberry Shortcake Slice', 'Cake & Dessert', 'Kue spons lembut berlapis dengan krim segar dan potongan stroberi lokal yang manis. Setiap slice adalah kombinasi sempurna antara roti spongy dan krim melumer.', 65000, 30, 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=500&h=500&fit=crop'),
('Lotus Biscoff Cheesecake', 'Cake & Dessert', 'Cheesecake panggang dengan selai Lotus dan remahan Biscoff yang renyah di atas. Texture creamy yang tak terlupakan dengan rasa karamel yang khas.', 75000, 25, 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=500&h=500&fit=crop');

-- ============================================
-- VERIFIKASI DATA
-- ============================================
-- Tampilkan semua produk
SELECT 'DAFTAR PRODUK' AS 'INFO';
SELECT id, nama_produk, kategori, harga, stok FROM products;

-- Tampilkan semua users
SELECT 'DAFTAR USERS' AS 'INFO';
SELECT id, nama, email, role FROM users;
