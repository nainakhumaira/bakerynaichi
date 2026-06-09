# 🚀 QUICK START GUIDE - NAICHI BAKERY

**Panduan singkat untuk langsung menggunakan website Naichi Bakery.**

---

## ⚡ 3 MENIT SETUP

### **Step 1: Buka Website**
```bash
# Opsi A: Double-click index.html
# Opsi B: Gunakan Live Server di VS Code
#   - Install extension "Live Server"
#   - Right-click index.html → "Open with Live Server"
```

### **Step 2: Browser Akan Terbuka**
- Hero section dengan banner menarik
- Navbar sticky di atas
- Scroll ke bawah untuk lihat produk

### **Step 3: Mulai Belanja! 🛍️**

---

## 🎯 FITUR UTAMA (Quick Reference)

### **1️⃣ Explore Produk**
```
→ Scroll ke "Menu Spesial Kami"
→ Lihat 6 produk dalam grid
→ Hover untuk efek interaktif
```

### **2️⃣ Filter Kategori**
```
→ Klik tombol: "Semua", "Roti Manis", "Pastry", "Cake"
→ Grid produk otomatis update
→ Active filter warna gold
```

### **3️⃣ Add to Wishlist**
```
→ Klik ikon hati (♡) pada kartu produk
→ Ikon berubah merah (❤️)
→ Counter wishlist muncul di navbar
```

### **4️⃣ Add to Cart**
```
→ Klik tombol "Tambah ke Keranjang"
→ Notifikasi pop-up muncul
→ Counter cart terupdate di navbar
```

### **5️⃣ View Cart**
```
→ Klik ikon shopping bag (🛍️) di navbar
→ Sidebar keranjang muncul dari kanan
→ Lihat semua item + total
```

### **6️⃣ Manage Quantity**
```
→ Di cart sidebar, klik tombol +/- untuk quantity
→ Subtotal update otomatis
→ Total harga ter-kalkulasi dengan pajak 11%
```

### **7️⃣ Remove Item**
```
→ Di cart sidebar, klik tombol "Hapus" pada item
→ Item langsung dihapus dari keranjang
```

### **8️⃣ Checkout**
```
→ Klik tombol "Bayar Sekarang" di cart sidebar
→ Modal checkout muncul dengan struk lengkap
→ Pilih metode pembayaran (E-Wallet / Transfer Bank)
→ Klik "Cetak Struk" atau "Selesai"
```

---

## 📦 FILE STRUCTURE

```
📁 bakerynaichi/
├── 📄 index.html         ← Buka file ini di browser
├── 📄 script.js          ← JavaScript logic
├── 📄 database.sql       ← SQL (untuk backend)
├── 📄 README.md          ← Dokumentasi lengkap
├── 📄 TECHNICAL.md       ← Untuk developer
├── 📄 FEATURES.md        ← Detail setiap fitur
└── 📄 QUICK_START.md     ← File ini
```

---

## 📱 RESPONSIVE TEST

**Cek di berbagai device:**

```
Mobile (375px)
├─ Navbar responsive ✓
├─ 1-column grid ✓
├─ Touch-friendly buttons ✓
└─ Cart sidebar full-width ✓

Tablet (768px)
├─ Navbar normal ✓
├─ 2-column grid ✓
├─ Sidebar 400px ✓
└─ Optimal spacing ✓

Desktop (1024px+)
├─ Navbar full ✓
├─ 3-column grid ✓
├─ Sidebar 400px ✓
└─ Max-width container ✓
```

---

## 💡 TIPS

| Tip | Keterangan |
|-----|-----------|
| 🔄 Refresh Page | Cart & Wishlist tetap ada (localStorage) |
| 🖨️ Print Struk | Buka print dialog, save as PDF |
| 🎨 Warna Premium | Warm Beige, Dark Chocolate, Gold |
| ✨ Smooth Animation | Hover effects pada kartu produk |
| 🔔 Notifikasi | Auto-disappear setelah 3 detik |
| 📊 6 Produk | 2 Roti Manis + 2 Pastry + 2 Cake |

---

## 🐛 TROUBLESHOOTING

### **Q: Produk tidak muncul?**
```
A: Pastikan script.js sudah load
   - Check console (F12) tidak ada error
   - Refresh page
   - Clear cache (Ctrl+Shift+Delete)
```

### **Q: Cart hilang setelah refresh?**
```
A: Ini tidak normal. Debug:
   - Check localStorage (F12 → Application)
   - Pastikan browser allow localStorage
   - Cek error di console
```

### **Q: Gambar tidak muncul?**
```
A: Link Unsplash mungkin expired
   - Ganti dengan URL gambar lain
   - Atau gunakan gambar lokal
```

### **Q: Modal checkout tidak muncul?**
```
A: Debug:
   - Pastikan cart tidak kosong
   - Check z-index CSS
   - Cek error di console
   - Try refresh page
```

---

## 🎓 LEARN MORE

| File | Topik |
|------|-------|
| README.md | Dokumentasi lengkap untuk users |
| TECHNICAL.md | Arsitektur & implementasi teknis |
| FEATURES.md | Detail setiap fitur |
| database.sql | Schema MySQL & seed data |

---

## 🔗 QUICK LINKS

- **Hero Section**: Landing page utama
- **Products**: Grid 6 produk premium
- **About**: Info tentang Naichi Bakery  
- **Contact**: Kontak & alamat
- **Footer**: Links & social media

---

## ✅ FITUR YANG READY

- ✅ 6 Produk dengan 3 kategori
- ✅ Real-time cart system
- ✅ Wishlist favorit
- ✅ Filter kategori
- ✅ Checkout & struk
- ✅ Print receipt
- ✅ Counter badge
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Data persistence (localStorage)

---

## 🚀 NEXT STEPS (Optional)

Untuk production, tambahkan:
1. Backend API (PHP/Node.js)
2. Database MySQL
3. User authentication
4. Payment gateway integration
5. Email notifications
6. Admin dashboard

---

**Happy Shopping! 🍞✨**

*Website: https://naichi.com*  
*Contact: info@naichi.com*

---

*Quick Start Guide v1.0 - Juni 2026*
