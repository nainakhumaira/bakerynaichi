<!-- ============================================
     TECHNICAL DOCUMENTATION - NAICHI BAKERY
     ============================================ -->

# 🔧 DOKUMENTASI TEKNIS - NAICHI BAKERY

**Panduan lengkap untuk developer yang ingin memahami struktur kode dan logika aplikasi.**

---

## 📑 DAFTAR ISI

1. [Arsitektur Aplikasi](#arsitektur-aplikasi)
2. [File Structure](#file-structure)
3. [State Management](#state-management)
4. [Alur Data & Logika](#alur-data--logika)
5. [API Integration](#api-integration)
6. [Performance Optimization](#performance-optimization)
7. [Security Considerations](#security-considerations)

---

## 🏗️ ARSITEKTUR APLIKASI

### **Diagram Alur Aplikasi:**

```
┌─────────────────────────────────────────────────────┐
│            NAICHI BAKERY - ARCHITECTURE             │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ┌─────────────┐    ┌──────────────┐    ┌─────────┐ │
│  │   HTML5     │───▶│   CSS3 (v3)  │───▶│ Tailwind│ │
│  │ Semantic    │    │ Custom CSS   │    │  CDN    │ │
│  │  Markup     │    │ + Animations │    │         │ │
│  └─────────────┘    └──────────────┘    └─────────┘ │
│         │                                    │        │
│         └────────────────────────┬───────────┘        │
│                                  │                    │
│                        ┌─────────▼──────────┐        │
│                        │   JavaScript ES6   │        │
│                        │  - State Mgmt      │        │
│                        │  - Event Handlers  │        │
│                        │  - Calculations    │        │
│                        │  - LocalStorage    │        │
│                        └────────────────────┘        │
│                                  │                    │
│        ┌─────────────────────────┼─────────────────┐ │
│        │                         │                 │ │
│   ┌────▼────┐    ┌──────────┐    ┌──────────┐ ┌───▼────┐
│   │  Cart   │    │ Wishlist │    │ Products │ │ Checkout
│   │ Manager │    │ Manager  │    │ Manager  │ │ Modal
│   └────┬────┘    └──────────┘    └──────────┘ └────────┘
│        │
│    ┌───▼──────────────────────────────┐
│    │      localStorage (Client)        │
│    │  - Cart State (JSON)              │
│    │  - Wishlist State (Array)         │
│    │  - User Session (Optional)        │
│    └────────────────────────────────────┘
│
└─────────────────────────────────────────────────────┘

OPTIONAL BACKEND:
┌──────────────┐      ┌──────────────┐     ┌──────────┐
│  REST API    │◀────▶│ PHP/Node.js  │◀───▶│  MySQL   │
│  Endpoints   │      │  Backend     │     │ Database │
└──────────────┘      └──────────────┘     └──────────┘
```

### **Component Structure:**

```
Aplikasi Naichi Bakery
├── Navbar (Fixed Top)
│   ├── Logo & Branding
│   ├── Navigation Links
│   ├── Cart Icon (with Badge)
│   └── Wishlist Icon (with Badge)
│
├── Hero Section
│   ├── Background Image/Gradient
│   ├── Headline & Subheadline
│   └── CTA Button
│
├── Products Section
│   ├── Category Filter Buttons
│   └── Product Grid
│       ├── Product Card (×6)
│       │   ├── Product Image
│       │   ├── Category Badge
│       │   ├── Wishlist Button
│       │   ├── Product Info
│       │   ├── Price & Stock
│       │   └── Add to Cart Button
│       └── Empty State (jika filter tidak ada hasil)
│
├── About Section
│   └── Company Info
│
├── Contact Section
│   ├── Address
│   ├── Phone
│   └── Email
│
├── Footer
│   ├── Company Info
│   ├── Links
│   └── Social Media
│
├── Cart Sidebar (Right Panel)
│   ├── Cart Items List
│   │   ├── Item Card (×n)
│   │   │   ├── Product Image
│   │   │   ├── Product Name
│   │   │   ├── Quantity Control
│   │   │   └── Remove Button
│   │   └── Empty State
│   ├── Cart Summary
│   │   ├── Subtotal
│   │   ├── Tax
│   │   └── Total
│   └── Action Buttons
│       ├── Checkout Button
│       └── Continue Shopping Button
│
└── Checkout Modal (Popup)
    ├── Nota Header
    ├── Items List
    ├── Totals
    ├── Payment Method Selection
    └── Action Buttons
        ├── Print Receipt
        ├── Complete
        └── Back
```

---

## 📂 FILE STRUCTURE & PENJELASAN

### **1. database.sql** (Backend)
```sql
-- Struktur Database MySQL
-- 7 Tables dengan Foreign Keys dan Indexes
-- Seed data untuk 6 produk

Ukuran: ~4 KB
Database: naichi_bakery
Engine: InnoDB
Charset: utf8mb4

Tabel Utama:
- users (Authentication)
- products (Master Data)
- wishlist (User Favorites)
- cart (Shopping Cart)
- orders (Purchase History)
- order_items (Order Detail)
```

### **2. index.html** (Frontend Structure)
```html
File: index.html
Ukuran: ~15 KB
Sections:
├── <head>
│   ├── Meta Tags
│   ├── Tailwind CSS CDN
│   ├── Font Awesome Icons CDN
│   ├── Google Fonts
│   └── Custom CSS (<style> tag)
│
├── <body>
│   ├── Navbar (sticky)
│   ├── Hero Section
│   ├── Products Section
│   ├── About Section
│   ├── Contact Section
│   ├── Footer
│   ├── Cart Sidebar
│   ├── Checkout Modal
│   └── <script src="script.js">

Template Structure:
- Semantic HTML5
- Zero external JS libraries (Vanilla JS)
- All styling via Tailwind CSS (CDN) + Custom CSS
- Inline SVG/Font Awesome icons
- Responsive using Tailwind breakpoints
```

### **3. script.js** (Frontend Logic)
```javascript
File: script.js
Ukuran: ~18 KB
Sections:

1. DATA LAYER
   - products[] - Master data produk (6 items)
   - cart{} - Shopping cart state
   - wishlist[] - Wishlist state
   - activeCategory - Current filter

2. INITIALIZATION
   - DOMContentLoaded event handler
   - Load state from localStorage
   - Render initial products
   - Setup event listeners

3. PRODUCT MANAGEMENT
   - renderProducts()
   - filterAndRenderProducts()
   - updateCategoryFilter()

4. CART SYSTEM
   - addToCart()
   - removeFromCart()
   - updateCartQuantity()
   - calculateCartTotal()
   - updateCartUI()
   - toggleCart()
   - saveCartToStorage()
   - loadCartFromStorage()

5. WISHLIST SYSTEM
   - toggleWishlistItem()
   - updateWishlistVisuals()
   - updateWishlistUI()
   - toggleWishlist()
   - saveWishlistToStorage()
   - loadWishlistFromStorage()

6. CHECKOUT & RECEIPT
   - openCheckoutModal()
   - closeCheckoutModal()
   - printReceipt()
   - completeCheckout()
   - generateNotaNumber()

7. UTILITIES
   - formatCurrency()
   - showNotification()
   - scrollToProducts()

Total Lines: ~800 lines (dengan comments)
```

---

## 🧠 STATE MANAGEMENT

### **Cart State Structure:**

```javascript
// Global state object
let cart = {
    1: {
        product: {
            id: 1,
            nama_produk: "Naichi Pillow Choco",
            kategori: "Roti Manis",
            deskripsi: "...",
            harga: 45000,
            stok: 50,
            gambar_url: "https://..."
        },
        quantity: 2
    },
    3: {
        product: { ... },
        quantity: 1
    }
};

// localStorage Format (JSON string)
// Key: "naichi_cart"
// Value: { "1": { productId: 1, quantity: 2 }, "3": { productId: 3, quantity: 1 } }
```

### **Wishlist State Structure:**

```javascript
// Global state array
let wishlist = [1, 3, 5];  // Array of product IDs

// localStorage Format (JSON string)
// Key: "naichi_wishlist"
// Value: "[1, 3, 5]"
```

### **Active Category State:**

```javascript
let activeCategory = 'all';  // or specific category name

// Options: 'all', 'Roti Manis', 'Pastry & Croissant', 'Cake & Dessert'
```

---

## 🔄 ALUR DATA & LOGIKA

### **1. Flow: Add to Cart**

```
User clicks "Add to Cart" button
    ↓
addToCart(productId) function called
    ↓
Cek: Apakah product ada di database?
    ├─ YES: Continue
    └─ NO: Show error, return
    ↓
Cek: Apakah stok > 0?
    ├─ YES: Continue
    └─ NO: Alert "Produk habis"
    ↓
Cek: Apakah product sudah di cart?
    ├─ YES: Increment quantity
    └─ NO: Add new item with quantity = 1
    ↓
saveCartToStorage() - Simpan ke localStorage
    ↓
updateCartUI() - Update tampilan cart sidebar
    ↓
showNotification() - Tampilkan notifikasi
    ↓
Update DOM dengan cart count badge
```

### **2. Flow: Cart Calculation**

```
calculateCartTotal() function
    ↓
Loop through cart items:
  ├─ subtotal += product.harga × quantity
    ↓
Calculate tax:
  ├─ tax = subtotal × 0.11  (11% PPN)
    ↓
Calculate total:
  ├─ total = subtotal + tax
    ↓
Return { subtotal, tax, total }
    ↓
Update UI:
  ├─ Document.getElementById('totalPrice').textContent
  ├─ Document.getElementById('subtotal').textContent
  └─ Document.getElementById('taxAmount').textContent
```

### **3. Flow: Checkout**

```
User clicks "Bayar Sekarang"
    ↓
Validasi: Cart tidak kosong?
    ├─ YES: Continue
    └─ NO: Alert, return
    ↓
generateNotaNumber() - Buat nota unik (NC-YYYYMMDD-XXX)
    ↓
Render checkout modal dengan:
  ├─ Nota number
  ├─ Current date/time
  ├─ Item list dari cart
  ├─ Subtotal, tax, total
  └─ Payment method radio buttons
    ↓
User membaca struk dan memilih metode pembayaran
    ↓
User klik "Cetak Struk" atau "Selesai"
    ├─ Cetak: printReceipt() - Open print dialog
    └─ Selesai: completeCheckout() - Clear cart & show success
    ↓
Clear cart:
  ├─ cart = {}
  ├─ saveCartToStorage()
    ↓
Update UI:
  ├─ updateCartUI()
  ├─ Close checkout modal
  └─ Close cart sidebar
```

### **4. Flow: Category Filter**

```
User clicks category filter button
    ↓
Update activeCategory variable
    ↓
updateCategoryFilter() - Visual update button colors
    ↓
filterAndRenderProducts():
  ├─ IF activeCategory === 'all'
  │   └─ filtered = all products
  ├─ ELSE
  │   └─ filtered = products.filter(p => p.kategori === activeCategory)
    ↓
renderProducts(filtered) - Render filtered products ke DOM
```

---

## 🌐 API INTEGRATION (Optional Backend)

### **Endpoint Structure (untuk masa depan):**

```
BASE_URL = https://api.naichi.com/v1

PRODUCTS:
  GET    /products              - Get all products
  GET    /products/:id          - Get product by ID
  GET    /products?category=X   - Filter by category
  POST   /products              - Create product (admin)
  PUT    /products/:id          - Update product (admin)
  DELETE /products/:id          - Delete product (admin)

CART:
  GET    /cart/:userId          - Get user cart
  POST   /cart                  - Add to cart
  PUT    /cart/:cartId          - Update cart item
  DELETE /cart/:cartId          - Remove from cart

WISHLIST:
  GET    /wishlist/:userId      - Get user wishlist
  POST   /wishlist              - Add to wishlist
  DELETE /wishlist/:wishlistId  - Remove from wishlist

ORDERS:
  POST   /orders                - Create order
  GET    /orders/:userId        - Get user orders
  GET    /orders/:orderId       - Get order detail
```

### **Contoh Implementasi Fetch (untuk update script.js):**

```javascript
// Fetch produk dari backend
async function fetchProducts() {
    try {
        const response = await fetch('https://api.naichi.com/v1/products');
        const data = await response.json();
        products = data;  // Replace local data
        renderProducts(products);
    } catch (error) {
        console.error('❌ Error fetching products:', error);
        // Fallback ke hardcoded data
    }
}

// POST order ke backend
async function submitOrder(orderData) {
    try {
        const response = await fetch('https://api.naichi.com/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(orderData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('❌ Error submitting order:', error);
    }
}
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### **Current Implementation:**

```javascript
✅ Optimizations sudah diterapkan:

1. Lazy Loading Images
   - Gunakan loading="lazy" attribute di <img> tags
   - Mengurangi initial page load time

2. Event Delegation
   - Category filter buttons menggunakan delegated events
   - Efisien untuk multiple elements

3. Efficient DOM Updates
   - Batch DOM updates dalam updateCartUI()
   - Minimal reflows dan repaints

4. localStorage Caching
   - Cache cart & wishlist ke localStorage
   - Tidak perlu fetch dari server setiap kali

5. CSS Transitions
   - Gunakan CSS transitions instead of JS animations
   - Lebih smooth dan efficient
```

### **Rekomendasi Improvement:**

```javascript
// 1. Implement debounce untuk search (future feature)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 2. Virtual scrolling untuk inventory besar
// Implementasikan ketika produk > 1000

// 3. Service Worker untuk offline support
// Simpan cache di Service Worker

// 4. Code splitting untuk backend
// Pisahkan logic ke modules
```

---

## 🔒 SECURITY CONSIDERATIONS

### **Current Security Measures:**

```javascript
✅ Implemented:

1. Input Validation
   - Validasi quantity > 0
   - Validasi stok availability
   - Cek product existence

2. Data Sanitization
   - Escape HTML dalam product names
   - Format currency safely

3. Client-Side Validation
   - Prevent negative quantities
   - Prevent exceed stock

4. localStorage Usage
   - Hanya simpan non-sensitive data
   - Cart & wishlist aman disimpan client-side
```

### **⚠️ UNTUK PRODUCTION - Security Requirements:**

```javascript
❌ JANGAN lakukan di backend:

1. Jangan trust client-side price calculation
   - Server harus re-validate dan calculate harga
   - Prevent price manipulation

2. Jangan simpan password di localStorage
   - Gunakan server-side sessions/JWT tokens
   - Hash password dengan bcrypt

3. Jangan bypass inventory check
   - Server harus validate stok saat checkout
   - Prevent overselling

4. Implement authentication
   - User registration & login
   - Session management
   - CORS protection

5. Database Security
   - Use parameterized queries (prevent SQL injection)
   - Implement role-based access control
   - Encrypt sensitive data

6. API Security
   - Rate limiting
   - Request validation
   - HTTPS only
   - API key management

7. Data Encryption
   - SSL/TLS untuk transit
   - Encrypt sensitive data at rest
```

### **Contoh Secure Backend (PHP):**

```php
<?php
// Secure backend example (untuk integration)

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// CORS Protection
header('Access-Control-Allow-Origin: https://naichi.com');

// Database Connection
$conn = new mysqli(
    $_ENV['DB_HOST'],
    $_ENV['DB_USER'],
    $_ENV['DB_PASS'],
    $_ENV['DB_NAME']
);

// Get Cart dengan validation
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['action'] === 'getCart') {
    $user_id = intval($_SESSION['user_id']);
    
    // Gunakan prepared statement
    $stmt = $conn->prepare("
        SELECT c.*, p.harga, p.stok 
        FROM cart c 
        JOIN products p ON c.product_id = p.id 
        WHERE c.user_id = ?
    ");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    // Validate stok sebelum checkout
    while ($row = $result->fetch_assoc()) {
        if ($row['kuantitas'] > $row['stok']) {
            http_response_code(409);
            die(json_encode(['error' => 'Stok tidak cukup']));
        }
    }
    
    echo json_encode($result->fetch_all());
}
?>
```

---

## 🧪 TESTING CHECKLIST

### **Functional Testing:**

```
□ Products Display
  ✓ 6 produk muncul dengan benar
  ✓ Gambar load dari Unsplash
  ✓ Harga dan stok ditampilkan

□ Category Filter
  ✓ Filter "Semua" menampilkan 6 produk
  ✓ Filter "Roti Manis" menampilkan 2 produk
  ✓ Filter "Pastry" menampilkan 2 produk
  ✓ Filter "Cake" menampilkan 2 produk
  ✓ Visual button update correctly

□ Add to Cart
  ✓ Produk ditambahkan ke cart
  ✓ Counter badge terupdate
  ✓ Cart sidebar update item count
  ✓ Total harga ter-kalkulasi benar

□ Cart Management
  ✓ Update quantity +/- berfungsi
  ✓ Remove item berfungsi
  ✓ Harga subtotal terupdate otomatis
  ✓ Pajak dihitung dengan benar (11%)
  ✓ Total = subtotal + pajak

□ Wishlist
  ✓ Ikon hati berubah warna saat diklik
  ✓ Counter badge terupdate
  ✓ Data persisten setelah refresh

□ Checkout
  ✓ Modal muncul dengan benar
  ✓ Nota number ter-generate unik
  ✓ Tanggal muncul dengan benar
  ✓ Semua items muncul di struk
  ✓ Totals mencocokkan cart

□ Print Receipt
  ✓ Print dialog muncul
  ✓ Format struk rapi
  ✓ Semua data tercakup

□ Responsive
  ✓ Mobile (320px): Semua element responsive
  ✓ Tablet (768px): Layout optimal
  ✓ Desktop (1024px): Layout maksimal
  ✓ Navbar sticky di semua breakpoint
```

### **Browser Compatibility:**

```
✓ Chrome 90+
✓ Firefox 88+
✓ Safari 14+
✓ Edge 90+
✓ Mobile Chrome
✓ Mobile Safari
```

---

## 📊 CODE METRICS

```
Project Statistics:
─────────────────────────────────────────────
File              Lines    Size      Type
─────────────────────────────────────────────
database.sql      ~200     ~4 KB     SQL
index.html        ~650     ~15 KB    HTML
script.js         ~800     ~18 KB    JavaScript
README.md         ~400     ~8 KB     Markdown
TECHNICAL.md      ~800     ~15 KB    Markdown
─────────────────────────────────────────────
TOTAL             ~2850    ~60 KB    

Performance Metrics:
─────────────────────────────────────────────
Metric            Target    Status
─────────────────────────────────────────────
Lighthouse Score  > 90      ✓ Good
Page Load Time    < 2s      ✓ Good (CDN)
First Paint       < 1s      ✓ Excellent
Largest Paint     < 2.5s    ✓ Good
```

---

## 🚀 DEPLOYMENT CHECKLIST

### **Pre-Deployment:**

```
□ Code Review
  ✓ Linting passed
  ✓ No console errors
  ✓ Comments reviewed

□ Testing
  ✓ All functional tests passed
  ✓ Cross-browser testing completed
  ✓ Responsive testing on devices

□ Optimization
  ✓ Images optimized
  ✓ CSS/JS minified (if not CDN)
  ✓ No hardcoded passwords/keys

□ Security
  ✓ HTTPS enabled
  ✓ Database secured
  ✓ API endpoints validated
```

### **Deployment Steps:**

```bash
# 1. Backup production
# 2. Deploy database changes
mysql -u root -p naichi_bakery < database.sql

# 3. Deploy frontend files
# Copy index.html, script.js to web server
cp index.html script.js /var/www/naichi/

# 4. Deploy backend (optional)
# Copy PHP files ke /api/ folder

# 5. Verify deployment
curl https://naichi.com
# Check console.log messages

# 6. Monitor
# Watch for errors in logs
tail -f /var/log/nginx/naichi.log
```

---

## 📚 REFERENSI & RESOURCES

```
Frontend:
- https://tailwindcss.com/docs
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://developer.mozilla.org/en-US/docs/Web/API

Backend:
- https://www.php.net/manual/
- https://dev.mysql.com/doc/
- https://restfulapi.net/

Tools:
- VS Code: https://code.visualstudio.com/
- Git: https://git-scm.com/
- Browser DevTools (F12)

Icons & Assets:
- Font Awesome: https://fontawesome.com/
- Unsplash: https://unsplash.com/
- Google Fonts: https://fonts.google.com/
```

---

*Last Updated: Juni 2026*
*Version: 1.0.0 - Technical Documentation*
