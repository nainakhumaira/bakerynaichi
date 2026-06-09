// ============================================
// NAICHI BAKERY - E-COMMERCE JAVASCRIPT
// ============================================

/**
 * DATA PRODUK MASTER
 * Sinkron dengan database MySQL - Kategori: Roti Manis, Pastry & Croissant, Cake & Dessert
 */
const products = [
    {
        id: 1,
        nama_produk: 'Naichi Pillow Choco',
        kategori: 'Roti Manis',
        deskripsi: 'Roti sobek lembut isi cokelat premium dari Belgia. Tekstur empuk dan renyah di bagian luar, dengan cokelat yang melumer di mulut.',
        harga: 45000,
        stok: 50,
        gambar_url: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&h=500&fit=crop'
    },
    {
        id: 2,
        nama_produk: 'Matcha Red Bean Bun',
        kategori: 'Roti Manis',
        deskripsi: 'Roti bun khas Jepang dengan perpaduan unik matcha dan pasta kacang merah. Rasa yang seimbang antara manis dan pahit, sempurna untuk teman teh.',
        harga: 38000,
        stok: 40,
        gambar_url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=500&fit=crop'
    },
    {
        id: 3,
        nama_produk: 'Almond Butter Croissant',
        kategori: 'Pastry & Croissant',
        deskripsi: 'Croissant renyah dan berlapis dengan toping almond sliced dan isian krim almond yang kaya. Baked fresh setiap hari dengan mentega berkualitas tinggi.',
        harga: 52000,
        stok: 35,
        gambar_url: 'https://images.unsplash.com/photo-1555507036-a1fd6f82809a?w=500&h=500&fit=crop'
    },
    {
        id: 4,
        nama_produk: 'Pain au Chocolat',
        kategori: 'Pastry & Croissant',
        deskripsi: 'Pastry khas Prancis yang berlapis-lapis sempurna dengan isian cokelat batangan premium. Crispy di luar, lembut di dalam dengan cokelat yang mengalir.',
        harga: 48000,
        stok: 45,
        gambar_url: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&h=500&fit=crop'
    },
    {
        id: 5,
        nama_produk: 'Strawberry Shortcake Slice',
        kategori: 'Cake & Dessert',
        deskripsi: 'Kue spons lembut berlapis dengan krim segar dan potongan stroberi lokal yang manis. Setiap slice adalah kombinasi sempurna antara roti spongy dan krim melumer.',
        harga: 65000,
        stok: 30,
        gambar_url: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=500&h=500&fit=crop'
    },
    {
        id: 6,
        nama_produk: 'Lotus Biscoff Cheesecake',
        kategori: 'Cake & Dessert',
        deskripsi: 'Cheesecake panggang dengan selai Lotus dan remahan Biscoff yang renyah di atas. Texture creamy yang tak terlupakan dengan rasa karamel yang khas.',
        harga: 75000,
        stok: 25,
        gambar_url: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=500&h=500&fit=crop'
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

/**
 * Object untuk menyimpan state keranjang belanja
 * Format: { productId: { product: {...}, quantity: n }, ... }
 */
let cart = {};

/**
 * Object untuk menyimpan wishlist favorit
 * Format: [productId1, productId2, ...]
 */
let wishlist = [];

/**
 * Filter kategori yang aktif
 */
let activeCategory = 'all';

// ============================================
// INIT & LOAD STATE
// ============================================

/**
 * Inisialisasi aplikasi saat DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🍞 Naichi Bakery - Aplikasi dimulai');
    
    // Load state dari localStorage
    loadCartFromStorage();
    loadWishlistFromStorage();
    
    // Render produk awal
    renderProducts(products);
    
    // Setup event listeners
    setupEventListeners();
    
    // Update UI
    updateCartUI();
    updateWishlistUI();
});

/**
 * Setup semua event listeners
 */
function setupEventListeners() {
    // Cart toggle button
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    
    // Wishlist toggle button
    document.getElementById('wishlistToggle').addEventListener('click', toggleWishlist);
    
    // Category filters
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            activeCategory = this.dataset.category;
            updateCategoryFilter();
            filterAndRenderProducts();
        });
    });
    
    // Close modal when clicking overlay
    document.getElementById('checkoutOverlay').addEventListener('click', closeCheckoutModal);
    
    console.log('✅ Event listeners setup selesai');
}

// ============================================
// PRODUCT RENDERING & FILTERING
// ============================================

/**
 * Render produk ke dalam grid UI
 * @param {Array} productsToRender - Array produk yang akan ditampilkan
 */
function renderProducts(productsToRender) {
    const container = document.getElementById('productsContainer');
    
    if (productsToRender.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">Tidak ada produk yang sesuai dengan filter</div>';
        return;
    }
    
    container.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <!-- Gambar Produk -->
            <div class="relative">
                <img src="${product.gambar_url}" alt="${product.nama_produk}" loading="lazy">
                
                <!-- Badge Kategori -->
                <div style="position: absolute; top: 12px; left: 12px;">
                    <span class="badge">${product.kategori}</span>
                </div>
                
                <!-- Wishlist Button -->
                <button class="wishlist-btn btn-icon" 
                        onclick="toggleWishlistItem(${product.id}, event)"
                        style="position: absolute; top: 12px; right: 12px; background: white; border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            
            <!-- Product Info -->
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2" style="color: #3E2723;">${product.nama_produk}</h3>
                <p class="text-sm text-gray-600 mb-4 line-clamp-2">${product.deskripsi}</p>
                
                <!-- Harga & Stok -->
                <div class="flex items-center justify-between mb-4">
                    <span class="text-2xl font-bold" style="color: #D4AF37;">Rp ${formatCurrency(product.harga)}</span>
                    <span class="text-sm ${product.stok > 0 ? 'text-green-600' : 'text-red-600'}">
                        ${product.stok > 0 ? `${product.stok} tersedia` : 'Habis'}
                    </span>
                </div>
                
                <!-- Add to Cart Button -->
                <button class="btn-primary w-full" 
                        onclick="addToCart(${product.id})"
                        ${product.stok === 0 ? 'disabled' : ''}
                        style="${product.stok === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                    <i class="fas fa-shopping-bag mr-2"></i> Tambah ke Keranjang
                </button>
            </div>
        </div>
    `).join('');
    
    // Update wishlist visual indicators
    updateWishlistVisuals();
}

/**
 * Filter dan render produk berdasarkan kategori aktif
 */
function filterAndRenderProducts() {
    let filtered = products;
    
    if (activeCategory !== 'all') {
        filtered = products.filter(p => p.kategori === activeCategory);
    }
    
    renderProducts(filtered);
}

/**
 * Update visual filter buttons
 */
function updateCategoryFilter() {
    document.querySelectorAll('.category-filter').forEach(btn => {
        if (btn.dataset.category === activeCategory) {
            btn.style.backgroundColor = '#D4AF37';
            btn.style.color = 'white';
        } else {
            btn.style.backgroundColor = '#6D4C41';
            btn.style.color = 'white';
        }
    });
}

// ============================================
// CART MANAGEMENT
// ============================================

/**
 * Tambah produk ke keranjang
 * @param {number} productId - ID produk yang ditambahkan
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('❌ Produk tidak ditemukan');
        return;
    }
    
    if (product.stok === 0) {
        alert('❌ Produk sudah habis!');
        return;
    }
    
    // Jika produk sudah ada di cart, tambah kuantitasnya
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        // Jika produk baru, tambahkan ke cart
        cart[productId] = {
            product: product,
            quantity: 1
        };
    }
    
    // Save ke localStorage
    saveCartToStorage();
    
    // Update UI
    updateCartUI();
    
    // Show notification
    showNotification(`✅ ${product.nama_produk} ditambahkan ke keranjang!`);
}

/**
 * Hapus item dari keranjang
 * @param {number} productId - ID produk yang dihapus
 */
function removeFromCart(productId) {
    if (cart[productId]) {
        delete cart[productId];
        saveCartToStorage();
        updateCartUI();
        showNotification('🗑️ Item dihapus dari keranjang');
    }
}

/**
 * Update kuantitas item di keranjang
 * @param {number} productId - ID produk
 * @param {number} newQuantity - Kuantitas baru
 */
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (cart[productId]) {
        // Validasi stok
        const maxStok = cart[productId].product.stok;
        if (newQuantity > maxStok) {
            alert(`❌ Stok maksimal: ${maxStok}`);
            return;
        }
        
        cart[productId].quantity = newQuantity;
        saveCartToStorage();
        updateCartUI();
    }
}

/**
 * Hitung total harga keranjang
 * @returns {Object} { subtotal, tax, total }
 */
function calculateCartTotal() {
    let subtotal = 0;
    
    Object.values(cart).forEach(item => {
        subtotal += item.product.harga * item.quantity;
    });
    
    const tax = subtotal * 0.11; // PPN 11%
    const total = subtotal + tax;
    
    return {
        subtotal: Math.round(subtotal),
        tax: Math.round(tax),
        total: Math.round(total)
    };
}

/**
 * Update tampilan keranjang di sidebar
 */
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const itemCount = Object.keys(cart).length;
    
    // Update counter badge
    if (itemCount > 0) {
        cartCount.textContent = itemCount;
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
    
    // Update cart items display
    if (itemCount === 0) {
        cartItems.innerHTML = '<p class="text-center text-gray-400 py-8">Keranjang kosong</p>';
    } else {
        cartItems.innerHTML = Object.entries(cart).map(([productId, item]) => `
            <div class="pb-4 mb-4 border-b border-gray-200 last:border-b-0">
                <!-- Product Info -->
                <div class="flex gap-4 mb-3">
                    <img src="${item.product.gambar_url}" 
                         alt="${item.product.nama_produk}"
                         class="w-16 h-16 object-cover rounded"
                         loading="lazy">
                    <div class="flex-1">
                        <h4 class="font-semibold text-sm" style="color: #3E2723;">${item.product.nama_produk}</h4>
                        <p class="text-xs text-gray-500 mb-1">${item.product.kategori}</p>
                        <p class="text-sm font-bold" style="color: #D4AF37;">Rp ${formatCurrency(item.product.harga)}</p>
                    </div>
                </div>
                
                <!-- Quantity Control -->
                <div class="flex items-center justify-between">
                    <div class="quantity-control">
                        <button onclick="updateCartQuantity(${productId}, ${item.quantity - 1})">−</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="updateCartQuantity(${productId}, ${item.quantity + 1})">+</button>
                    </div>
                    <button onclick="removeFromCart(${productId})" class="text-red-500 hover:text-red-700 text-sm font-semibold">
                        Hapus
                    </button>
                </div>
                
                <!-- Subtotal -->
                <div class="text-right text-xs text-gray-600 mt-2">
                    Subtotal: <span class="font-bold" style="color: #3E2723;">Rp ${formatCurrency(item.product.harga * item.quantity)}</span>
                </div>
            </div>
        `).join('');
    }
    
    // Update totals
    const totals = calculateCartTotal();
    document.getElementById('subtotal').textContent = `Rp ${formatCurrency(totals.subtotal)}`;
    document.getElementById('taxAmount').textContent = `Rp ${formatCurrency(totals.tax)}`;
    document.getElementById('totalPrice').textContent = `Rp ${formatCurrency(totals.total)}`;
}

/**
 * Toggle tampilan cart sidebar
 */
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('show');
}

/**
 * Save cart ke localStorage
 */
function saveCartToStorage() {
    const cartData = {};
    Object.entries(cart).forEach(([key, value]) => {
        cartData[key] = {
            productId: value.product.id,
            quantity: value.quantity
        };
    });
    localStorage.setItem('naichi_cart', JSON.stringify(cartData));
}

/**
 * Load cart dari localStorage
 */
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('naichi_cart');
    if (savedCart) {
        try {
            const cartData = JSON.parse(savedCart);
            Object.entries(cartData).forEach(([key, value]) => {
                const product = products.find(p => p.id === value.productId);
                if (product) {
                    cart[value.productId] = {
                        product: product,
                        quantity: value.quantity
                    };
                }
            });
        } catch (e) {
            console.error('❌ Error loading cart:', e);
        }
    }
}

// ============================================
// WISHLIST MANAGEMENT
// ============================================

/**
 * Toggle wishlist item
 * @param {number} productId - ID produk
 * @param {Event} event - Event object untuk prevent propagation
 */
function toggleWishlistItem(productId, event) {
    event.stopPropagation();
    
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        // Hapus dari wishlist
        wishlist.splice(index, 1);
        showNotification('💔 Dihapus dari wishlist');
    } else {
        // Tambah ke wishlist
        wishlist.push(productId);
        showNotification('❤️ Ditambahkan ke wishlist');
    }
    
    // Save ke localStorage
    saveWishlistToStorage();
    
    // Update UI
    updateWishlistUI();
    updateWishlistVisuals();
}

/**
 * Update tampilan wishlist button
 */
function updateWishlistVisuals() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productId = parseInt(btn.closest('.product-card').dataset.productId);
        if (wishlist.includes(productId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

/**
 * Update tampilan wishlist di navbar
 */
function updateWishlistUI() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlist.length > 0) {
        wishlistCount.textContent = wishlist.length;
        wishlistCount.style.display = 'flex';
    } else {
        wishlistCount.style.display = 'none';
    }
}

/**
 * Toggle view wishlist (bisa diperluas di masa depan untuk full wishlist page)
 */
function toggleWishlist() {
    if (wishlist.length === 0) {
        alert('📋 Wishlist Anda kosong. Tambahkan produk favorit untuk menyimpannya!');
        return;
    }
    alert(`❤️ Anda memiliki ${wishlist.length} item di wishlist`);
}

/**
 * Save wishlist ke localStorage
 */
function saveWishlistToStorage() {
    localStorage.setItem('naichi_wishlist', JSON.stringify(wishlist));
}

/**
 * Load wishlist dari localStorage
 */
function loadWishlistFromStorage() {
    const saved = localStorage.getItem('naichi_wishlist');
    if (saved) {
        try {
            wishlist = JSON.parse(saved);
        } catch (e) {
            console.error('❌ Error loading wishlist:', e);
        }
    }
}

// ============================================
// CHECKOUT & RECEIPT
// ============================================

/**
 * Buka checkout modal dengan struk belanja
 */
function openCheckoutModal() {
    if (Object.keys(cart).length === 0) {
        alert('❌ Keranjang kosong! Tambahkan produk terlebih dahulu.');
        return;
    }
    
    const totals = calculateCartTotal();
    
    // Generate nota number
    const notaNumber = generateNotaNumber();
    document.getElementById('notaNumber').textContent = notaNumber;
    
    // Set tanggal
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('notaDate').textContent = dateStr;
    
    // Render checkout items
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = Object.values(cart).map(item => `
        <div class="struk-item">
            <span class="flex-1">
                <div class="font-semibold">${item.product.nama_produk}</div>
                <div class="text-xs text-gray-500">${item.quantity}x @ Rp ${formatCurrency(item.product.harga)}</div>
            </span>
            <span class="font-semibold">Rp ${formatCurrency(item.product.harga * item.quantity)}</span>
        </div>
    `).join('');
    
    // Update totals di modal
    document.getElementById('checkoutSubtotal').textContent = `Rp ${formatCurrency(totals.subtotal)}`;
    document.getElementById('checkoutTax').textContent = `Rp ${formatCurrency(totals.tax)}`;
    document.getElementById('checkoutTotal').textContent = `Rp ${formatCurrency(totals.total)}`;
    
    // Show modal
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    modal.classList.add('show');
    overlay.classList.add('show');
}

/**
 * Tutup checkout modal
 */
function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    modal.classList.remove('show');
    overlay.classList.remove('show');
}

/**
 * Cetak/Download struk
 */
function printReceipt() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const notaNumber = document.getElementById('notaNumber').textContent;
    const totals = calculateCartTotal();
    
    // Buat konten struk dalam format text yang bisa dicetak
    let printContent = `
╔════════════════════════════════════════╗
║        NAICHI BAKERY - STRUK BELANJA    ║
╚════════════════════════════════════════╝

NOTA: #${notaNumber}
Tanggal: ${new Date().toLocaleString('id-ID')}

────────────────────────────────────────
ITEM-ITEM PEMBELIAN:
────────────────────────────────────────
`;
    
    Object.values(cart).forEach(item => {
        const subtotal = item.product.harga * item.quantity;
        printContent += `
${item.product.nama_produk}
  ${item.quantity}x @ Rp ${formatCurrency(item.product.harga)}
                    Rp ${formatCurrency(subtotal)}
`;
    });
    
    printContent += `
────────────────────────────────────────
Subtotal           : Rp ${formatCurrency(totals.subtotal)}
PPN (11%)          : Rp ${formatCurrency(totals.tax)}
────────────────────────────────────────
TOTAL PEMBAYARAN    : Rp ${formatCurrency(totals.total)}
────────────────────────────────────────

Metode Pembayaran: ${paymentMethod}

Terima kasih telah berbelanja di Naichi Bakery!
Semoga Anda menikmati setiap gigitan.

════════════════════════════════════════
    `;
    
    // Open print dialog
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<pre style="font-family: monospace; padding: 20px;">' + printContent + '</pre>');
    printWindow.document.close();
    printWindow.print();
}

/**
 * Selesaikan checkout
 */
function completeCheckout() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const notaNumber = document.getElementById('notaNumber').textContent;
    
    // Simulasi proses checkout
    alert(`✅ PEMBAYARAN BERHASIL!\n\nNota: #${notaNumber}\nMetode: ${paymentMethod}\n\nTerima kasih telah berbelanja di Naichi Bakery!`);
    
    // Clear cart
    cart = {};
    saveCartToStorage();
    
    // Close modal
    closeCheckoutModal();
    
    // Close cart sidebar
    document.getElementById('cartSidebar').classList.remove('show');
    
    // Update UI
    updateCartUI();
}

/**
 * Generate nota number unik
 * Format: NC-YYYYMMDD-XXX
 * @returns {string} Nota number
 */
function generateNotaNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const random = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    
    return `NC-${year}${month}${day}-${random}`;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format angka menjadi format currency Indonesia
 * @param {number} num - Angka yang akan diformat
 * @returns {string} String terformat (contoh: "1.000.000")
 */
function formatCurrency(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Show notification toast (temporary)
 * @param {string} message - Pesan notifikasi
 */
function showNotification(message) {
    // Create temporary notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #3E2723;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInUp 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Scroll ke section produk
 */
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// HELPER: CSS ANIMATIONS
// ============================================

// Tambahkan style untuk animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);

console.log('🎉 Naichi Bakery JavaScript loaded successfully!');
