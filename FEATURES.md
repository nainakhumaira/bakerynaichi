# ✨ FITUR-FITUR LENGKAP NAICHI BAKERY

**Panduan detail untuk setiap fitur yang tersedia di website Naichi Bakery.**

---

## 🎯 DAFTAR FITUR

1. [Hero Section](#hero-section)
2. [Katalog Produk Premium](#katalog-produk-premium)
3. [Filter Kategori Real-time](#filter-kategori-real-time)
4. [Wishlist Interaktif](#wishlist-interaktif)
5. [Keranjang Belanja Smart](#keranjang-belanja-smart)
6. [Checkout & Struk Digital](#checkout--struk-digital)
7. [Notifikasi Toast](#notifikasi-toast)
8. [Responsive Design](#responsive-design)
9. [Navigation & Sticky Navbar](#navigation--sticky-navbar)
10. [Data Persistence](#data-persistence)

---

## 🎨 HERO SECTION

### **Deskripsi:**
Banner utama yang eye-catching dengan background gradient premium, headline yang menarik, dan call-to-action button.

### **Fitur:**
- ✅ Background gradient dengan aksen gold
- ✅ Headline bold: "Kelembutan Autentik di Setiap Gigitan"
- ✅ Subheadline deskriptif
- ✅ Button "Jelajahi Menu" yang scroll ke produk section
- ✅ Responsive pada semua ukuran layar

### **Cara Menggunakan:**
1. Load halaman website
2. Anda akan melihat hero section di paling atas
3. Baca headline dan subheadline
4. Klik button "Jelajahi Menu" untuk langsung ke katalog produk

### **Code Location:**
```html
<!-- Di index.html, section "HERO SECTION" -->
<section class="hero-section py-16 md:py-24 px-6 lg:px-12 relative">
    <div class="max-w-4xl mx-auto text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Kelembutan Autentik di Setiap Gigitan
        </h1>
        ...
    </div>
</section>
```

---

## 🛍️ KATALOG PRODUK PREMIUM

### **Deskripsi:**
Display 6 produk premium dari toko roti dalam grid yang rapi dan interaktif.

### **Produk yang Tersedia:**

#### **Kategori: Roti Manis (Sweet Bread)**
| No | Nama Produk | Harga | Stok | Gambar |
|----|----|-------|------|--------|
| 1 | Naichi Pillow Choco | Rp 45.000 | 50 | Unsplash - Chocolate Bread |
| 2 | Matcha Red Bean Bun | Rp 38.000 | 40 | Unsplash - Asian Bun |

#### **Kategori: Pastry & Croissant**
| No | Nama Produk | Harga | Stok | Gambar |
|----|----|-------|------|--------|
| 3 | Almond Butter Croissant | Rp 52.000 | 35 | Unsplash - Croissant |
| 4 | Pain au Chocolat | Rp 48.000 | 45 | Unsplash - Pain Chocolat |

#### **Kategori: Cake & Dessert**
| No | Nama Produk | Harga | Stok | Gambar |
|----|----|-------|------|--------|
| 5 | Strawberry Shortcake Slice | Rp 65.000 | 30 | Unsplash - Strawberry Cake |
| 6 | Lotus Biscoff Cheesecake | Rp 75.000 | 25 | Unsplash - Cheesecake |

### **Setiap Kartu Produk Menampilkan:**
- 📸 Gambar produk berkualitas tinggi
- 🏷️ Badge kategori dengan warna emas
- ❤️ Tombol wishlist (ikon hati)
- 📝 Nama produk
- 📖 Deskripsi singkat
- 💰 Harga dalam Rupiah
- 📦 Informasi stok (tersedia/habis)
- 🛒 Tombol "Tambah ke Keranjang"

### **Fitur Interaktif:**
- **Hover Effect**: Kartu produk float ke atas dengan shadow
- **Image Zoom**: Gambar zoom in saat hover
- **Wishlist Toggle**: Klik ikon hati untuk menyukai
- **Add to Cart**: Klik tombol untuk menambahkan ke keranjang

### **Cara Menggunakan:**
1. Scroll ke section "Menu Spesial Kami"
2. Lihat 6 produk dalam grid
3. Hover pada kartu untuk efek interaktif
4. Klik wishlist icon untuk favorit
5. Klik "Tambah ke Keranjang" untuk membeli

---

## 🔍 FILTER KATEGORI REAL-TIME

### **Deskripsi:**
Filter interaktif untuk menampilkan produk berdasarkan kategori pilihan.

### **Fitur:**
- ✅ 4 tombol filter: Semua, Roti Manis, Pastry & Croissant, Cake & Dessert
- ✅ Real-time filtering tanpa page reload
- ✅ Visual feedback (tombol aktif berubah warna gold)
- ✅ Smooth animation saat re-render produk
- ✅ Counter produk per kategori

### **Kategori Tersedia:**

| Tombol | Kategori | Jumlah Produk | Produk |
|--------|----------|---------------|--------|
| Semua | all | 6 | Semua produk |
| Roti Manis | Roti Manis | 2 | Pillow Choco, Matcha Red Bean Bun |
| Pastry & Croissant | Pastry & Croissant | 2 | Almond Croissant, Pain au Chocolat |
| Cake & Dessert | Cake & Dessert | 2 | Strawberry Shortcake, Lotus Cheesecake |

### **Cara Menggunakan:**
1. Di section "Menu Spesial Kami", lihat tombol filter di bawah judul
2. Tombol "Semua" default ter-select (warna gold)
3. Klik tombol kategori untuk filter
4. Grid produk otomatis update menampilkan kategori pilihan
5. Warna tombol berubah gold saat aktif

### **Contoh Filter:**
```
Klik "Roti Manis" → 
Tampilkan: Naichi Pillow Choco + Matcha Red Bean Bun

Klik "Cake & Dessert" → 
Tampilkan: Strawberry Shortcake + Lotus Cheesecake

Klik "Semua" → 
Tampilkan: Semua 6 produk
```

### **Code Location:**
```javascript
// Di script.js
function filterAndRenderProducts() {
    let filtered = products;
    if (activeCategory !== 'all') {
        filtered = products.filter(p => p.kategori === activeCategory);
    }
    renderProducts(filtered);
}
```

---

## ❤️ WISHLIST INTERAKTIF

### **Deskripsi:**
Fitur untuk menambahkan produk favorit ke dalam wishlist personal.

### **Fitur:**
- ✅ Toggle wishlist dengan klik ikon hati
- ✅ Visual indicator: Ikon berubah dari outline menjadi solid + warna merah
- ✅ Counter badge di navbar menampilkan total wishlist
- ✅ Notifikasi "Ditambahkan ke wishlist" / "Dihapus dari wishlist"
- ✅ Data persisten (tersimpan di localStorage)
- ✅ Data survive setelah refresh browser

### **Cara Menggunakan:**

#### **Menambahkan ke Wishlist:**
1. Hover pada kartu produk yang disukai
2. Klik ikon hati (❤️) di sudut kanan atas gambar
3. Ikon berubah dari hollow (♡) menjadi solid (❤️) dan berwarna merah
4. Notifikasi muncul: "❤️ Ditambahkan ke wishlist"
5. Counter di navbar terupdate

#### **Menghapus dari Wishlist:**
1. Klik ikon hati yang sudah merah (❤️)
2. Ikon berubah kembali menjadi hollow (♡) dan hitam
3. Notifikasi muncul: "💔 Dihapus dari wishlist"
4. Counter di navbar berkurang

#### **Melihat Total Wishlist:**
1. Lihat di navbar bagian atas kanan
2. Ada ikon hati dengan badge counter merah
3. Contoh: ❤️ 3 (artinya ada 3 item di wishlist)

### **Wishlist Persistence:**
```
Skenario:
1. Tambahkan 3 produk ke wishlist
2. Refresh browser (F5)
3. Wishlist masih ada dengan 3 item
4. Close browser
5. Buka ulang browser
6. Wishlist tetap ada

Teknik: Data disimpan di localStorage dengan key "naichi_wishlist"
```

### **State Wishlist:**
```javascript
// Format internal (array of product IDs)
wishlist = [1, 3, 5];

// localStorage (JSON string)
// Key: "naichi_wishlist"
// Value: "[1,3,5]"
```

### **Code Location:**
```javascript
// Di script.js
function toggleWishlistItem(productId, event) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('💔 Dihapus dari wishlist');
    } else {
        wishlist.push(productId);
        showNotification('❤️ Ditambahkan ke wishlist');
    }
    saveWishlistToStorage();
    updateWishlistUI();
}
```

---

## 🛒 KERANJANG BELANJA SMART

### **Deskripsi:**
Sistem keranjang belanja yang canggih dengan real-time calculation, quantity management, dan persistent storage.

### **Fitur Utama:**

#### **1. Add to Cart**
- Klik tombol "Tambah ke Keranjang" pada produk
- Produk otomatis masuk ke keranjang
- Validasi stok sebelum add
- Notifikasi konfirmasi

#### **2. View Cart (Sidebar)**
- Klik ikon shopping bag di navbar
- Sidebar keranjang slide dari kanan ke kiri
- Menampilkan semua item di keranjang dengan detail lengkap

#### **3. Cart Item Details**
Setiap item di keranjang menampilkan:
- 📸 Thumbnail gambar produk
- 📝 Nama produk
- 🏷️ Kategori produk
- 💰 Harga satuan (Rp)
- 🔢 Kuantitas dengan control +/-
- 🗑️ Tombol hapus item
- 💳 Subtotal per item (harga × kuantitas)

#### **4. Quantity Management**
- Tombol "-" untuk mengurangi 1 item
- Input field menampilkan jumlah saat ini (read-only)
- Tombol "+" untuk menambah 1 item
- Validasi: Tidak boleh < 1 atau > stok tersedia
- Auto-update subtotal saat quantity berubah

#### **5. Cart Summary**
Menampilkan:
- **Subtotal**: Jumlah semua item × harga
- **PPN (11%)**: Pajak tambahan
- **Total**: Subtotal + PPN
- Update otomatis real-time

#### **6. Action Buttons**
- **"Bayar Sekarang"**: Buka checkout modal
- **"Lanjut Belanja"**: Close sidebar dan kembali browsing

#### **7. Cart Counter Badge**
- Badge merah di navbar menampilkan jumlah item
- Update otomatis saat add/remove
- Hilang otomatis saat keranjang kosong

### **Cara Menggunakan:**

```
Step 1: Tambah Produk
└─ Klik "Tambah ke Keranjang"
   └─ Notifikasi: "✅ Naichi Pillow Choco ditambahkan ke keranjang!"
   
Step 2: View Cart
└─ Klik ikon shopping bag di navbar
   └─ Sidebar muncul dari kanan
   └─ Lihat semua item

Step 3: Manage Quantity
└─ Klik "+" untuk tambah quantity
└─ Klik "-" untuk kurangi quantity
   └─ Subtotal item update otomatis

Step 4: Remove Item
└─ Klik tombol "Hapus" di item
   └─ Item hilang dari keranjang
   └─ Total terupdate

Step 5: View Total
└─ Lihat summary di bawah sidebar
   └─ Subtotal: Rp X.XXX
   └─ PPN (11%): Rp X.XXX
   └─ Total: Rp X.XXX

Step 6: Checkout
└─ Klik "Bayar Sekarang"
   └─ Modal checkout muncul
```

### **Validasi Sistem:**
```javascript
❌ Tidak bisa terjadi:
- Quantity = 0 (auto delete item)
- Quantity > stok (alert max stok)
- Double item add (increment quantity)
- Cart loss (saved di localStorage)
```

### **Code Location:**
```javascript
// Di script.js
let cart = {};  // State management

function addToCart(productId) { ... }
function updateCartQuantity(productId, newQuantity) { ... }
function calculateCartTotal() { ... }
function updateCartUI() { ... }
function toggleCart() { ... }
function saveCartToStorage() { ... }
function loadCartFromStorage() { ... }
```

---

## 💳 CHECKOUT & STRUK DIGITAL

### **Deskripsi:**
Sistem checkout modern dengan modal popup yang menampilkan struk belanja detail dan opsi pembayaran.

### **Flow Checkout:**

```
User di Cart Sidebar
  ↓
Klik "Bayar Sekarang"
  ↓
Modal Checkout Muncul
  ├─ Header: Logo & Judul
  ├─ Nota Number (auto-generated)
  ├─ Tanggal & Waktu
  ├─ Daftar Item Belanja
  ├─ Perhitungan Total
  ├─ Pilih Metode Pembayaran
  └─ Action Buttons
     ├─ Cetak Struk (print dialog)
     └─ Selesai (complete transaction)
```

### **Fitur Checkout:**

#### **1. Nota Number Generation**
- Format: `NC-YYYYMMDD-XXX`
- Contoh: `NC-20260609-042`
- Unique setiap transaksi
- Auto-generated saat modal terbuka

#### **2. Receipt Header**
```
╔════════════════════════════════════════╗
║        NAICHI BAKERY - STRUK BELANJA    ║
╚════════════════════════════════════════╝

Nota: #NC-20260609-042
Tanggal: 9 Juni 2026, 14:30
```

#### **3. Item Listing**
Setiap item menampilkan:
- Nama produk
- Kuantitas & harga satuan
- Subtotal per item
- Line divider untuk clarity

#### **4. Calculation Section**
```
────────────────────────────────────
Subtotal           : Rp 150.000
PPN (11%)          : Rp 16.500
────────────────────────────────────
TOTAL PEMBAYARAN    : Rp 166.500
```

#### **5. Payment Method Selection**
Radio buttons untuk memilih:
- ✓ E-Wallet (default)
- ☐ Transfer Bank

#### **6. Action Buttons**
- **"Cetak Struk"**: Open browser print dialog
- **"Selesai"**: Complete order & clear cart

### **Cara Menggunakan:**

```
SCENARIO: User melakukan checkout

1. Pastikan cart tidak kosong
2. Klik ikon shopping bag (navbar)
3. Sidebar keranjang terbuka
4. Review item dan total
5. Klik tombol "Bayar Sekarang"
   └─ Modal checkout appear
   └─ Auto-generated nota number
   └─ Tanggal & waktu saat ini
6. Review semua item di modal
7. Verify total = cart total
8. Pilih metode pembayaran:
   └─ E-Wallet (default)
   └─ Transfer Bank
9. Pilih action:
   OPSI A: Klik "Cetak Struk"
   └─ Print dialog muncul
   └─ Format text yang rapi
   └─ Bisa langsung print atau save as PDF
   
   OPSI B: Klik "Selesai"
   └─ Alert success muncul
   └─ Cart otomatis dikosongkan
   └─ Modal close
   └─ Sidebar close
   └─ UI terupdate
10. Shopping complete! ✅
```

### **Sample Struk Output (Print):**
```
╔════════════════════════════════════════╗
║        NAICHI BAKERY - STRUK BELANJA    ║
╚════════════════════════════════════════╝

NOTA: #NC-20260609-042
Tanggal: 9 Juni 2026, 14:30:15

────────────────────────────────────────
ITEM-ITEM PEMBELIAN:
────────────────────────────────────────

Naichi Pillow Choco
  2x @ Rp 45.000
                    Rp 90.000

Almond Butter Croissant
  1x @ Rp 52.000
                    Rp 52.000

────────────────────────────────────────
Subtotal           : Rp 142.000
PPN (11%)          : Rp 15.620
────────────────────────────────────────
TOTAL PEMBAYARAN    : Rp 157.620
────────────────────────────────────────

Metode Pembayaran: E-Wallet

Terima kasih telah berbelanja di Naichi Bakery!
Semoga Anda menikmati setiap gigitan.

════════════════════════════════════════
```

### **Code Location:**
```javascript
// Di script.js
function openCheckoutModal() { ... }
function closeCheckoutModal() { ... }
function printReceipt() { ... }
function completeCheckout() { ... }
function generateNotaNumber() { ... }
```

---

## 🔔 NOTIFIKASI TOAST

### **Deskripsi:**
Pop-up notifikasi temporary yang muncul di bottom-right layar dengan pesan informasi.

### **Tipe Notifikasi:**

| Event | Notifikasi | Contoh |
|-------|-----------|--------|
| Add to Cart | ✅ Produk ditambahkan | "✅ Naichi Pillow Choco ditambahkan ke keranjang!" |
| Add to Wishlist | ❤️ Ditambahkan | "❤️ Ditambahkan ke wishlist" |
| Remove Wishlist | 💔 Dihapus | "💔 Dihapus dari wishlist" |
| Remove from Cart | 🗑️ Item dihapus | "🗑️ Item dihapus dari keranjang" |

### **Fitur:**
- Muncul di bottom-right corner
- Dark background (#3E2723) dengan text putih
- Auto-disappear setelah 3 detik
- Smooth fade-in & fade-out animation
- Stack untuk multiple notifications

### **Cara Menggunakan:**
```
Automatic - Tidak ada interaksi user required

Contoh scenarios:
1. Klik "Tambah ke Keranjang"
   → Notifikasi muncul 3 detik
   → Auto-disappear
   
2. Klik wishlist heart
   → Notifikasi muncul 3 detik
   → Auto-disappear
```

---

## 📱 RESPONSIVE DESIGN

### **Deskripsi:**
Website fully responsive dan optimal untuk semua ukuran layar dari mobile hingga desktop.

### **Breakpoints:**

| Device | Width | Optimization |
|--------|-------|--------------|
| Mobile | < 640px | Stack layout, large buttons, full-width |
| Tablet | 640-1024px | 2-column grid, balanced spacing |
| Desktop | > 1024px | 3-column grid, max-width container |

### **Responsive Features:**

#### **Mobile (< 640px):**
- ✅ Single column product grid
- ✅ Full-width buttons
- ✅ Mobile-optimized navbar
- ✅ Floating cart sidebar full-width
- ✅ Touch-friendly spacing (44px minimum)

#### **Tablet (640-1024px):**
- ✅ 2-column product grid
- ✅ Balanced horizontal spacing
- ✅ Navbar dengan icons
- ✅ Desktop-like sidebar

#### **Desktop (> 1024px):**
- ✅ 3-column product grid (optimal)
- ✅ Max-width 1280px container
- ✅ Full navbar dengan all elements
- ✅ Optimal spacing & typography

### **Cara Menggunakan:**
```
1. Buka website di different devices:
   - iPhone (375px): Mobile optimized
   - iPad (768px): Tablet optimized
   - Desktop (1920px): Desktop optimized

2. Atau, test di browser DevTools:
   - Press F12 → Toggle device toolbar
   - Test berbagai breakpoints
   - Semua element responsive

3. Fitur yang responsive:
   - Navigation & Navbar
   - Product Grid (1 → 2 → 3 columns)
   - Hero section typography
   - Sidebar width
   - Buttons & inputs
```

---

## 🧭 NAVIGATION & STICKY NAVBAR

### **Deskripsi:**
Navigation bar yang sticky (selalu di atas saat scroll) dengan logo, menu, dan quick action icons.

### **Navbar Components:**

```
┌─────────────────────────────────────────────────────────┐
│  🍞 Naichi    Produk   Tentang   Kontak   ♡   🛍️         │
│  (Logo)       (Links)                       (Icons)      │
└─────────────────────────────────────────────────────────┘
```

#### **1. Logo & Branding**
- 🍞 Bread slice icon
- "Naichi" text
- Color: Gold (#D4AF37)
- Always visible

#### **2. Navigation Links** (Desktop only)
- Produk - scroll to products section
- Tentang - scroll to about section
- Kontak - scroll to contact section
- Hover effect: text color change

#### **3. Quick Action Icons**
- **Wishlist**: ♡ icon dengan red badge (counter)
- **Cart**: 🛍️ icon dengan red badge (counter)
- Hover effect: scale up & color change to gold

### **Cara Menggunakan:**

```
1. Navbar selalu terlihat di paling atas
   └─ Tidak perlu scroll ke atas untuk navigate

2. Klik navigation links untuk scroll:
   └─ "Produk" → scroll to products section
   └─ "Tentang" → scroll to about section
   └─ "Kontak" → scroll to contact section

3. Klik icons untuk quick actions:
   └─ Wishlist icon → Toggle wishlist view
   └─ Cart icon → Toggle cart sidebar

4. Badge counter shows:
   └─ Wishlist icon badge → Total wishlist items
   └─ Cart icon badge → Total cart items
   └─ Badge disappear jika empty
```

---

## 💾 DATA PERSISTENCE

### **Deskripsi:**
Sistem penyimpanan data client-side menggunakan browser localStorage sehingga data tetap tersimpan setelah refresh atau close browser.

### **Data yang Disimpan:**

#### **1. Cart Storage**
```javascript
localStorage Key: "naichi_cart"
Format: JSON string
Content: {
    "1": { productId: 1, quantity: 2 },
    "3": { productId: 3, quantity: 1 }
}
Size: ~100 bytes per item
```

#### **2. Wishlist Storage**
```javascript
localStorage Key: "naichi_wishlist"
Format: JSON array
Content: [1, 3, 5]  // Array of product IDs
Size: ~20 bytes
```

### **Auto-Save Mechanism:**

```
User Action → State Update → Save to localStorage

Contoh:
1. Add to cart
   └─ cart state updated
   └─ saveCartToStorage() called
   └─ localStorage updated
   
2. Remove from wishlist
   └─ wishlist state updated
   └─ saveWishlistToStorage() called
   └─ localStorage updated

3. Refresh browser
   └─ DOMContentLoaded event
   └─ loadCartFromStorage() called
   └─ loadWishlistFromStorage() called
   └─ State restored dari localStorage
```

### **Cara Menggunakan:**

```
SCENARIO: Persistent Cart

1. Tambah 3 item ke cart
2. Refresh browser (F5)
   └─ Cart items masih ada ✓
3. Close browser tab
4. Buka website lagi (tab baru)
   └─ Cart items masih ada ✓
5. Clear browser data (Ctrl+Shift+Delete)
   └─ Cart items cleared ✓

Ini adalah behavior normal - user kontrol data mereka
```

### **Browser Console Debug:**
```javascript
// Lihat apa yang disimpan di localStorage
localStorage.getItem('naichi_cart')
// Output: {"1":{"productId":1,"quantity":2},"3":{"productId":3,"quantity":1}}

localStorage.getItem('naichi_wishlist')
// Output: [1,3,5]

// Manual clear (testing)
localStorage.removeItem('naichi_cart')
localStorage.removeItem('naichi_wishlist')
localStorage.clear()  // Clear all
```

---

## 🎯 QUICK START CHECKLIST

```
☑️ Setup
  □ Download/clone project
  □ Open index.html in browser
  □ Check console (F12) - no errors?

☑️ Browse Products
  □ See 6 products in grid
  □ Try category filters
  □ Verify prices & stock info

☑️ Test Wishlist
  □ Click heart icon on product
  □ Icon should turn red
  □ Counter badge should appear
  □ Refresh page - wishlist persists?

☑️ Test Cart
  □ Click "Add to Cart"
  □ Notification should appear
  □ Cart badge counter updated
  □ Click cart icon to open sidebar
  □ Update quantity with +/- buttons
  □ Remove item with delete button
  □ Totals calculated correctly?

☑️ Test Checkout
  □ Add some items to cart
  □ Click "Checkout" in sidebar
  □ Modal appears with struk?
  □ All items listed?
  □ Totals match cart?
  □ Select payment method
  □ Click "Print Struk" - print dialog?
  □ Or click "Selesai" - cart cleared?

☑️ Test Responsiveness
  □ Open DevTools (F12)
  □ Toggle device toolbar
  □ Test mobile (375px)
  □ Test tablet (768px)
  □ Test desktop (1920px)
  □ All elements responsive?

✅ All tests passed? Website is ready!
```

---

## 🚀 TIPS & TRICKS

```
💡 TIP 1: Local Testing
   Open file:// in browser or use Live Server
   Tidak butuh web server untuk testing

💡 TIP 2: Browser Storage
   Press F12 → Application → Storage → Local Storage
   Lihat data yang disimpan

💡 TIP 3: Console Logging
   Press F12 → Console
   Check log messages:
   - "🍞 Naichi Bakery - Aplikasi dimulai"
   - "✅ Event listeners setup selesai"
   - "🎉 Naichi Bakery JavaScript loaded successfully!"

💡 TIP 4: Mobile Testing
   Use Chrome DevTools device simulation
   Or actual mobile device
   Test touch interactions

💡 TIP 5: Accessibility
   Use keyboard navigation
   Tab through buttons
   Arrow keys for selection

💡 TIP 6: Performance
   Monitor Network tab (F12)
   Images load via CDN (fast)
   No external JS libraries (lightweight)
```

---

## 🎓 LEARNING RESOURCES

**Konsep yang digunakan:**

1. **Frontend Architecture**
   - State Management (cart, wishlist, activeCategory)
   - Event Delegation & Listeners
   - DOM Manipulation (innerHTM, classList, etc.)
   - Responsive Design (Tailwind CSS)

2. **JavaScript Techniques**
   - ES6 Arrow Functions
   - Array Methods (map, filter, forEach, find)
   - Object Methods (keys, values, entries)
   - Template Literals (backtick strings)
   - Destructuring

3. **CSS/Tailwind**
   - Utility-first approach
   - Responsive breakpoints
   - Custom CSS variables
   - Gradient backgrounds
   - Animations & transitions

4. **Browser APIs**
   - localStorage (Persist data)
   - window.open() (Print)
   - Date object (Timestamps)
   - Event handling

---

*Version: 1.0.0*
*Last Updated: Juni 2026*
*Happy coding! 🍞✨*
