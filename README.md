# 🍞 NAICHI BAKERY - E-COMMERCE WEBSITE

**Selamat datang di Naichi Bakery E-Commerce Platform!** 

Ini adalah website e-commerce premium untuk toko roti dengan tampilan modern, responsif, dan fully functional. Dirancang dengan standar profesional menggunakan HTML, CSS (Tailwind CSS), dan JavaScript Vanilla.

---

## 📋 DAFTAR ISI

1. [Fitur Utama](#fitur-utama)
2. [Struktur Project](#struktur-project)
3. [Instalasi & Setup](#instalasi--setup)
4. [Panduan Penggunaan](#panduan-penggunaan)
5. [Dokumentasi Database](#dokumentasi-database)
6. [Fitur-Fitur Detail](#fitur-fitur-detail)
7. [Customization](#customization)
8. [Troubleshooting](#troubleshooting)

---

## ✨ FITUR UTAMA

### 🎨 **UI/UX Premium**
- ✅ Desain mewah dengan tema Warm Beige (#FDFBF7), Dark Chocolate (#3E2723), dan Gold (#D4AF37)
- ✅ Responsive design untuk mobile, tablet, dan desktop
- ✅ Smooth animations dan transisi yang elegant
- ✅ Navbar sticky dengan logo dan icon badge counter

### 🛍️ **Katalog Produk Interaktif**
- ✅ 6 produk premium dari 3 kategori (Roti Manis, Pastry & Croissant, Cake & Dessert)
- ✅ Filter kategori real-time
- ✅ Kartu produk yang interaktif dengan hover effects
- ✅ Badge kategori untuk setiap produk
- ✅ Informasi stok dan harga yang terupdate

### 🛒 **Sistem Keranjang Belanja Real-time**
- ✅ Tambah/hapus produk tanpa page reload
- ✅ Update kuantitas dengan tombol +/-
- ✅ Perhitungan total harga otomatis
- ✅ Counter badge untuk jumlah item
- ✅ Persisten cart (disimpan di localStorage)

### ❤️ **Fitur Wishlist Favorit**
- ✅ Tambah/hapus produk dari wishlist
- ✅ Visual indicator dengan ikon hati yang berubah warna
- ✅ Counter wishlist di navbar
- ✅ Persisten wishlist (disimpan di localStorage)

### 💳 **Checkout & Struk Digital**
- ✅ Modal popup checkout yang elegant
- ✅ Struk belanja otomatis dengan nomor nota unik
- ✅ Perhitungan pajak (PPN 11%)
- ✅ Pilihan metode pembayaran (E-Wallet, Transfer Bank)
- ✅ Fitur cetak struk dalam format text yang rapi

### 📱 **Responsif & Mobile-First**
- ✅ Desain fully responsive
- ✅ Touch-friendly buttons dan controls
- ✅ Optimal untuk semua ukuran layar

---

## 📁 STRUKTUR PROJECT

```
bakerynaichi/
├── database.sql          # Script SQL lengkap (DDL + DML)
├── index.html            # File HTML utama dengan Tailwind CSS
├── script.js             # File JavaScript dengan semua logika
├── README.md             # File ini (dokumentasi lengkap)
└── [Assets from Unsplash] # Gambar produk (loaded via CDN)
```

### 📊 **Database Schema**

```
naichi_bakery/
├── users (id, nama, email, password, role)
├── products (id, nama_produk, kategori, deskripsi, harga, stok, gambar_url)
├── wishlist (id, user_id, product_id) - Foreign Key
├── cart (id, user_id, product_id, kuantitas) - Foreign Key
├── orders (id, user_id, total_harga, tanggal_pembelian, status_bayar)
└── order_items (id, order_id, product_id, kuantitas, harga_satuan)
```

---

## 🚀 INSTALASI & SETUP

### **Opsi 1: Setup Frontend Only (Cepat)**

1. **Clone atau download project:**
   ```bash
   git clone <repository-url>
   cd bakerynaichi
   ```

2. **Buka file `index.html` di browser:**
   - Langsung buka `index.html` dengan double-click, atau
   - Gunakan Live Server extension di VS Code

3. **Siap digunakan!** ✅
   - Aplikasi sudah fully functional tanpa perlu backend/database
   - Data produk sudah hardcoded di `script.js`
   - Cart dan Wishlist disimpan di localStorage

### **Opsi 2: Setup dengan Backend PHP & MySQL (Production-Ready)**

#### **Prerequisites:**
- PHP 7.4+ dengan MySQLi extension
- MySQL Server 5.7+
- Web server (Apache/Nginx)

#### **Step-by-step:**

1. **Setup Database:**
   ```bash
   # Login ke MySQL
   mysql -u root -p
   
   # Jalankan script SQL
   mysql -u root -p < database.sql
   ```

2. **Setup Backend PHP (optional):**
   ```bash
   # Buat folder untuk API endpoints
   mkdir -p api/
   # Buat file-file PHP untuk CRUD operations
   ```

3. **Konfigurasi Backend Connection:**
   - Update `script.js` untuk fetch dari backend API
   - Setup CORS jika diperlukan

---

## 📖 PANDUAN PENGGUNAAN

### **Untuk Pengunjung Website:**

#### 1. **Browsing Produk**
   - Scroll ke section "Menu Spesial Kami"
   - Klik tombol kategori untuk filter (Semua, Roti Manis, Pastry, Cake)
   - Hover pada kartu produk untuk lihat detail

#### 2. **Tambah ke Wishlist**
   - Klik ikon hati pada kartu produk
   - Ikon berubah merah ketika ditambahkan
   - Lihat counter di navbar untuk total wishlist

#### 3. **Tambah ke Keranjang**
   - Klik tombol "Tambah ke Keranjang"
   - Produk otomatis masuk ke keranjang
   - Counter di navbar terupdate

#### 4. **Kelola Keranjang**
   - Klik ikon shopping bag di navbar
   - Sidebar keranjang muncul dari kanan
   - Update kuantitas dengan tombol +/-
   - Hapus item dengan tombol "Hapus"
   - Lihat subtotal, pajak, dan total harga

#### 5. **Checkout**
   - Klik tombol "Bayar Sekarang" di keranjang
   - Modal struk belanja muncul
   - Review semua item dan total
   - Pilih metode pembayaran
   - Klik "Cetak Struk" atau "Selesai"

### **Untuk Developer:**

#### **Menambah Produk Baru:**
```javascript
// Edit array `products` di script.js
const products = [
    {
        id: 7,
        nama_produk: 'Produk Baru',
        kategori: 'Roti Manis', // atau kategori lain
        deskripsi: 'Deskripsi produk',
        harga: 50000,
        stok: 30,
        gambar_url: 'https://images.unsplash.com/...'
    },
    // ...
];
```

#### **Mengubah Warna Tema:**
```html
<!-- Di file index.html, section <style> -->
:root {
    --warm-beige: #FDFBF7;      /* Ubah warna latar -->
    --dark-chocolate: #3E2723;  /* Ubah warna teks -->
    --gold: #D4AF37;            /* Ubah warna aksen -->
}
```

#### **Menambah Kategori Produk:**
```html
<!-- Di index.html, section filter buttons -->
<button class="category-filter badge" data-category="Kategori Baru">Kategori Baru</button>
```

---

## 🗄️ DOKUMENTASI DATABASE

### **Tabel: users**
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INT PRIMARY KEY | ID user |
| nama | VARCHAR(100) | Nama lengkap |
| email | VARCHAR(100) UNIQUE | Email unik |
| password | VARCHAR(255) | Password ter-hash |
| role | ENUM('customer', 'admin') | Role pengguna |
| created_at | TIMESTAMP | Waktu dibuat |

### **Tabel: products**
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INT PRIMARY KEY | ID produk |
| nama_produk | VARCHAR(150) | Nama produk |
| kategori | VARCHAR(50) | Kategori (Roti Manis/Pastry/Cake) |
| deskripsi | TEXT | Deskripsi detail |
| harga | DECIMAL(10,2) | Harga dalam Rupiah |
| stok | INT | Jumlah stok tersedia |
| gambar_url | VARCHAR(255) | URL gambar dari Unsplash |

### **Tabel: wishlist**
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INT PRIMARY KEY | ID wishlist |
| user_id | INT FK | Referensi ke users |
| product_id | INT FK | Referensi ke products |
| created_at | TIMESTAMP | Waktu ditambahkan |

### **Tabel: cart**
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INT PRIMARY KEY | ID cart |
| user_id | INT FK | Referensi ke users |
| product_id | INT FK | Referensi ke products |
| kuantitas | INT | Jumlah item |
| created_at | TIMESTAMP | Waktu ditambahkan |

### **Tabel: orders**
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INT PRIMARY KEY | ID order |
| user_id | INT FK | Referensi ke users |
| total_harga | DECIMAL(12,2) | Total harga pembelian |
| tanggal_pembelian | TIMESTAMP | Waktu pembelian |
| status_bayar | ENUM | Status (pending/completed/cancelled) |
| metode_pembayaran | VARCHAR(50) | Metode pembayaran |

### **Tabel: order_items**
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INT PRIMARY KEY | ID order item |
| order_id | INT FK | Referensi ke orders |
| product_id | INT FK | Referensi ke products |
| kuantitas | INT | Jumlah item |
| harga_satuan | DECIMAL(10,2) | Harga satuan saat pembelian |
| subtotal | DECIMAL(12,2) | Generated (kuantitas × harga_satuan) |

---

## 🎯 FITUR-FITUR DETAIL

### **1. Real-time Cart System**
- Menggunakan JavaScript state management (objek `cart`)
- Perhitungan total otomatis dengan rumus: `subtotal + tax(11%)`
- Validasi stok produk sebelum checkout
- Simpan ke localStorage untuk persistency

**Code snippet:**
```javascript
// State cart
let cart = {
    1: { product: {...}, quantity: 2 },
    3: { product: {...}, quantity: 1 }
};

// Hitung total
function calculateCartTotal() {
    let subtotal = 0;
    Object.values(cart).forEach(item => {
        subtotal += item.product.harga * item.quantity;
    });
    const tax = subtotal * 0.11; // PPN 11%
    const total = subtotal + tax;
    return { subtotal, tax, total };
}
```

### **2. Wishlist Interaktif**
- Toggle favorit dengan click pada ikon hati
- Visual feedback dengan perubahan warna (merah = favorit)
- Counter badge untuk total wishlist
- Data disimpan di localStorage

**Code snippet:**
```javascript
function toggleWishlistItem(productId, event) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    saveWishlistToStorage();
    updateWishlistUI();
}
```

### **3. Checkout & Receipt System**
- Generate nomor nota unik: `NC-YYYYMMDD-XXX`
- Tampilkan modal dengan summary lengkap
- Opsi metode pembayaran
- Fitur cetak struk dalam format text

**Contoh Struk:**
```
╔════════════════════════════════════════╗
║        NAICHI BAKERY - STRUK BELANJA    ║
╚════════════════════════════════════════╝

NOTA: #NC-20260609-042
Tanggal: 9 Juni 2026, 14:30

────────────────────────────────────────
Naichi Pillow Choco
  2x @ Rp 45.000           Rp 90.000
────────────────────────────────────────
Subtotal           : Rp 90.000
PPN (11%)          : Rp 9.900
────────────────────────────────────────
TOTAL PEMBAYARAN    : Rp 99.900
```

### **4. Category Filtering**
- Filter real-time tanpa page reload
- Update visual button sesuai kategori aktif
- Smooth transition saat render ulang produk

**Kategori yang tersedia:**
1. **Roti Manis** - Naichi Pillow Choco, Matcha Red Bean Bun
2. **Pastry & Croissant** - Almond Butter Croissant, Pain au Chocolat
3. **Cake & Dessert** - Strawberry Shortcake Slice, Lotus Biscoff Cheesecake

---

## 🎨 CUSTOMIZATION

### **Mengubah Warna Tema:**
```css
:root {
    --warm-beige: #FDFBF7;      /* Warna latar utama */
    --dark-chocolate: #3E2723;  /* Warna text/dark elements */
    --gold: #D4AF37;            /* Warna aksen/highlight */
    --light-gold: #F0E6D2;      /* Warna lightening */
    --soft-brown: #6D4C41;      /* Warna secondary */
}
```

### **Mengubah Logo/Branding:**
```html
<!-- Di navbar section -->
<div class="flex items-center gap-2">
    <i class="fas fa-bread-slice"></i>
    <span>Naichi</span>  <!-- Ubah teks ini -->
</div>
```

### **Menambah Kategori Baru:**
```javascript
// 1. Update array products dengan kategori baru
const newProduct = {
    kategori: 'Kategori Baru'
};

// 2. Tambah filter button di HTML
<button class="category-filter badge" data-category="Kategori Baru">
    Kategori Baru
</button>
```

### **Mengubah Pajak (PPN):**
```javascript
// Di function calculateCartTotal()
const tax = subtotal * 0.11;  // Ubah 0.11 (11%) ke nilai lain

// Contoh: PPN 10%
const tax = subtotal * 0.10;
```

---

## 🔧 TROUBLESHOOTING

### **Q: Produk tidak muncul di halaman**
**A:** Pastikan:
- File `script.js` sudah di-load di `index.html`
- Data produk sudah ada di array `products`
- Browser console tidak ada error (cek dengan F12)

### **Q: Cart tidak tersimpan setelah refresh**
**A:** Pastikan:
- Browser mendukung localStorage
- Tidak dalam mode incognito/private browsing
- Cek browser console untuk error

### **Q: Gambar produk tidak muncul**
**A:** Kemungkinan:
- Link Unsplash expired atau blocked
- Ganti dengan gambar lokal atau URL lain
- Cek console untuk CORS error

### **Q: Modal checkout tidak muncul**
**A:** Debug dengan:
- Pastikan keranjang tidak kosong sebelum checkout
- Cek CSS display properties
- Cek z-index untuk modal

### **Q: Wishlist tidak berfungsi**
**A:** Pastikan:
- Event listener ter-setup dengan benar
- localStorage enabled
- Cek console untuk JavaScript error

---

## 📚 TEKNOLOGI YANG DIGUNAKAN

### **Frontend:**
- **HTML5** - Semantic markup
- **CSS3** - Custom styling + Tailwind CSS via CDN
- **JavaScript ES6** - Vanilla JS tanpa library (Lightweight!)

### **CSS Framework:**
- **Tailwind CSS** - Utility-first CSS via CDN
- **Font Awesome 6.4** - Icon library via CDN
- **Google Fonts** - Playfair Display & Poppins

### **Storage:**
- **localStorage** - Client-side data persistence

### **Backend (Optional):**
- **PHP** - REST API endpoints
- **MySQL** - Database management

---

## 💡 TIPS & BEST PRACTICES

1. **Untuk Production:**
   - Setup backend PHP/Node.js untuk API
   - Implementasi authentication/login
   - Use HTTPS untuk keamanan
   - Add database connection pooling
   - Implement caching strategy

2. **Untuk Performance:**
   - Lazy load gambar dengan `loading="lazy"`
   - Minify JS dan CSS di production
   - Optimize gambar dari Unsplash
   - Use CDN untuk static assets

3. **Untuk Security:**
   - Sanitize user input di backend
   - Hash password dengan bcrypt
   - Implement CSRF protection
   - Validate input di server-side

---

## 📞 SUPPORT & CONTACT

**Naichi Bakery Official:**
- 📍 Jl. Sunset No. 123, Jakarta Pusat
- 📞 +62 812-3456-7890
- 📧 info@naichi.com
- 🌐 www.naichibakery.com

---

## 📄 LICENSE

Proyek ini dibuat dengan ❤️ untuk Naichi Bakery. 
Silakan modifikasi dan customize sesuai kebutuhan Anda.

---

## 🙏 TERIMA KASIH

Terima kasih telah menggunakan Naichi Bakery E-Commerce Platform!
Setiap feedback dan saran sangat kami hargai untuk improvement berkelanjutan.

**Happy Baking & Happy Shopping! 🍞✨**

---

*Last Updated: Juni 2026*
*Version: 1.0.0*