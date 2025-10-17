import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Heart, Star, Search, Minus, Plus, Trash2, Eye, EyeOff } from 'lucide-react';

export default function F1GearHub() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [authForm, setAuthForm] = useState({ email: '', password: '', name: '' });

  const categories = ['All', 'Apparel', 'Gaming Gear', 'Collectibles', 'Accessories', 'Tech Gadgets', 'MOZA Racing'];
  const USD_TO_INR = 83;

  const [products] = useState([
    { id: 1, name: 'Ferrari F1 Jersey', category: 'Apparel', priceUSD: 89, stock: 45, image: '/images/Ferrari-F1-Jersey.jpg', rating: 4.5, reviews: 28 },
    { id: 2, name: 'Red Bull Racing Cap', category: 'Apparel', priceUSD: 35, stock: 60, image: '/images/Red-Bull-Racing-Cap.jpg', rating: 4.8, reviews: 42 },
    { id: 3, name: 'Mercedes Hoodie', category: 'Apparel', priceUSD: 125, stock: 30, image: '/images/Mercedes-Hoodie.jpg', rating: 4.7, reviews: 35 },
    { id: 4, name: 'Fanatec CSL Elite Wheel', category: 'Gaming Gear', priceUSD: 449, stock: 12, image: '/images/Fanatec-CSL-Elite-Wheel.jpg', rating: 4.9, reviews: 156 },
    { id: 5, name: 'Racing Pedal Set', category: 'Gaming Gear', priceUSD: 299, stock: 18, image: '/images/Ferrari-F1-Jersey.jpg', rating: 4.6, reviews: 98 },
    { id: 6, name: 'Pro Racing Chair', category: 'Gaming Gear', priceUSD: 599, stock: 8, image: '/images/Pro-Racing-Chair.jpg', rating: 4.8, reviews: 112 },
    { id: 7, name: 'Max Verstappen Helmet', category: 'Collectibles', priceUSD: 149, stock: 25, image: '/images/Max-Verstappen-Helmet.jpg', rating: 4.7, reviews: 67 },
    { id: 8, name: 'F1 Championship Poster', category: 'Collectibles', priceUSD: 45, stock: 100, image: '/images/F1-Championship-Poster.jpg', rating: 4.4, reviews: 89 },
    { id: 9, name: 'Die-Cast Model Set', category: 'Collectibles', priceUSD: 199, stock: 20, image: '/images/Die-Cast-Model-Set.jpg', rating: 4.9, reviews: 134 },
    { id: 10, name: 'F1 Keychain Set', category: 'Accessories', priceUSD: 12, stock: 200, image: '/images/F1-Keychain-Set.jpg', rating: 4.3, reviews: 45 },
    { id: 11, name: 'Racing Gloves Pro', category: 'Accessories', priceUSD: 79, stock: 40, image: '/images/Racing-Gloves-Pro.jpg', rating: 4.6, reviews: 52 },
    { id: 12, name: 'Gaming Monitor 144Hz', category: 'Tech Gadgets', priceUSD: 349, stock: 15, image: '/images/Gaming-Monitor-144Hz.jpg', rating: 4.8, reviews: 203 },
    { id: 13, name: 'Gaming Headset', category: 'Tech Gadgets', priceUSD: 199, stock: 35, image: '/images/Gaming-Headset.jpg', rating: 4.7, reviews: 178 },
    { id: 14, name: 'Mechanical Keyboard', category: 'Tech Gadgets', priceUSD: 159, stock: 50, image: '/images/Mechanical-Keyboard.jpg', rating: 4.5, reviews: 142 },
    { id: 15, name: 'MOZA R3 Wheelbase', category: 'MOZA Racing', priceUSD: 249, stock: 22, image: '/images/MOZA-R3-Wheelbase.jpg', rating: 4.8, reviews: 89, series: 'R3', style: 'GT & Formula' },
    { id: 16, name: 'MOZA R5 Wheelbase', category: 'MOZA Racing', priceUSD: 399, stock: 18, image: '/images/MOZA-R5-Wheelbase.jpg', rating: 4.9, reviews: 145, series: 'R5', style: 'GT & Formula' },
    { id: 17, name: 'MOZA R9 Wheelbase', category: 'MOZA Racing', priceUSD: 599, stock: 12, image: '/images/MOZA-R9-Wheelbase.jpg', rating: 4.9, reviews: 167, series: 'R9', style: 'GT & Formula' },
    { id: 18, name: 'MOZA R12 Wheelbase', category: 'MOZA Racing', priceUSD: 799, stock: 8, image: '/images/MOZA-R12-Wheelbase.jpg', rating: 5.0, reviews: 203, series: 'R12', style: 'GT & Formula' },
    { id: 19, name: 'MOZA Formula Steering Wheel', category: 'MOZA Racing', priceUSD: 179, stock: 35, image: '/images/MOZA-Formula-Steering-Wheel.jpg', rating: 4.8, reviews: 112, style: 'Formula' },
    { id: 20, name: 'MOZA Rally Steering Wheel', category: 'MOZA Racing', priceUSD: 179, stock: 28, image: '/images/MOZA-Rally-Steering-Wheel.jpg', rating: 4.7, reviews: 98, style: 'Rally' },
    { id: 21, name: 'MOZA Pro Pedal Set', category: 'MOZA Racing', priceUSD: 349, stock: 30, image: '/images/MOZA-Pro-Pedal-Set.jpg', rating: 4.9, reviews: 156, type: 'Pedal' },
    { id: 22, name: 'MOZA Handbrake Module', category: 'MOZA Racing', priceUSD: 89, stock: 45, image: '/images/MOZA-Handbrake-Module.jpg', rating: 4.6, reviews: 67, type: 'Accessory' },
    { id: 23, name: 'MOZA Quick Release Adapter', category: 'MOZA Racing', priceUSD: 45, stock: 60, image: '/images/MOZA-Quick-Release-Adapter.jpg', rating: 4.7, reviews: 78, type: 'Accessory' },
    { id: 24, name: 'MOZA Cable Management Kit', category: 'MOZA Racing', priceUSD: 35, stock: 80, image: '/images/MOZA-Cable-Management-Kit.jpg', rating: 4.5, reviews: 45, type: 'Accessory' },
    { id: 25, name: 'MOZA Complete Racing Bundle', category: 'MOZA Racing', priceUSD: 1299, stock: 6, image: '/images/MOZA-Complete-Racing-Bundle.jpg', rating: 5.0, reviews: 89, bundle: true },
  ]);

  const handleAuth = () => {
    if (!authForm.email || !authForm.password) {
      alert('Please fill all fields');
      return;
    }

    if (authForm.email === 'admin@f1gearhub.com' && authForm.password === 'admin123') {
      setCurrentUser({ email: authForm.email, name: 'Admin' });
      setIsAdmin(true);
    } else {
      setCurrentUser({ email: authForm.email, name: authForm.name || 'User' });
      setIsAdmin(false);
    }

    setShowAuthModal(false);
    setAuthForm({ email: '', password: '', name: '' });
    setCurrentPage('home');
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: qty } : item));
    }
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (id) => wishlist.some(item => item.id === id);

  const filteredProducts = products.filter(p =>
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'price-low') return a.priceUSD - b.priceUSD;
    if (sortBy === 'price-high') return b.priceUSD - a.priceUSD;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.id - a.id;
  });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.priceUSD * item.quantity * USD_TO_INR), 0);

  const formatPrice = (priceUSD) => {
    const priceINR = priceUSD * USD_TO_INR;
    return `₹${priceINR.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-black text-white">
      <header className="sticky top-0 z-40 bg-black border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => setCurrentPage('home')} className="text-2xl font-black text-red-500">🏁 F1 GearHub</button>

            <nav className="hidden md:flex gap-6">
              <button onClick={() => setCurrentPage('home')} className={`font-bold ${currentPage === 'home' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}>Home</button>
              <button onClick={() => setCurrentPage('shop')} className={`font-bold ${currentPage === 'shop' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}>Shop</button>
              <button onClick={() => setCurrentPage('wishlist')} className={`font-bold ${currentPage === 'wishlist' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}>Wishlist</button>
              {isAdmin && <button onClick={() => setCurrentPage('admin')} className={`font-bold ${currentPage === 'admin' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}>Admin</button>}
            </nav>

            <div className="flex items-center gap-4">
              <button onClick={() => setCurrentPage('cart')} className="relative p-2 hover:bg-red-600 rounded-lg">
                <ShoppingCart size={24} />
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{cartCount}</span>}
              </button>

              {!currentUser ? (
                <>
                  <button onClick={() => { setShowAuthModal(true); setAuthMode('login'); }} className="hidden sm:block px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-bold">Login</button>
                  <button onClick={() => { setShowAuthModal(true); setAuthMode('signup'); }} className="hidden sm:block px-4 py-2 border-2 border-red-600 rounded-lg font-bold">Sign Up</button>
                </>
              ) : (
                <button onClick={() => { setCurrentUser(null); setIsAdmin(false); setCart([]); setCurrentPage('home'); }} className="px-4 py-2 bg-red-600 rounded-lg font-bold">Logout</button>
              )}

              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 space-y-2 border-t border-red-600 pt-4">
              <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className="block w-full text-left py-2">Home</button>
              <button onClick={() => { setCurrentPage('shop'); setMenuOpen(false); }} className="block w-full text-left py-2">Shop</button>
              <button onClick={() => { setCurrentPage('wishlist'); setMenuOpen(false); }} className="block w-full text-left py-2">Wishlist</button>
              {isAdmin && <button onClick={() => { setCurrentPage('admin'); setMenuOpen(false); }} className="block w-full text-left py-2">Admin</button>}
            </div>
          )}
        </div>
      </header>

      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 w-full max-w-md border-2 border-red-600">
            <h2 className="text-2xl font-bold mb-6 text-red-500">{authMode === 'login' ? 'Login' : 'Sign Up'}</h2>

            {authMode === 'signup' && (
              <input type="text" placeholder="Full Name" value={authForm.name} onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-4 text-white placeholder-gray-400" />
            )}

            <input type="email" placeholder="Email" value={authForm.email} onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-4 text-white placeholder-gray-400" />

            <div className="relative mb-4">
              <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={authForm.password} onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-400">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {authMode === 'login' && <p className="text-xs text-gray-300 mb-4 bg-gray-800 p-2 rounded">Admin: admin@f1gearhub.com Pass: admin123</p>}

            <button onClick={handleAuth} className="w-full bg-red-600 hover:bg-red-700 rounded-lg py-2 font-bold mb-3">{authMode === 'login' ? 'Login' : 'Sign Up'}</button>
            <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="w-full text-gray-400 text-sm py-2">{authMode === 'login' ? 'Need account?' : 'Have account?'}</button>
            <button onClick={() => setShowAuthModal(false)} className="w-full border-2 border-red-600 rounded-lg py-2 font-bold mt-2">Cancel</button>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg p-12 text-center">
              <h1 className="text-5xl font-black mb-4">🏁 F1 GearHub</h1>
              <p className="text-xl text-gray-100 mb-6">Official F1 Merchandise and Racing Gear</p>
              <button onClick={() => setCurrentPage('shop')} className="px-8 py-3 bg-black hover:bg-gray-800 rounded-lg font-bold">Shop Now</button>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-500">Featured Categories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[{ name: 'Apparel', icon: '👕' }, { name: 'Gaming Gear', icon: '🎮' }, { name: 'MOZA Racing', icon: '⚡' }].map(cat => (
                  <button key={cat.name} onClick={() => { setCurrentPage('shop'); setSelectedCategory(cat.name); }} className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 rounded-lg p-8 text-center">
                    <div className="text-5xl mb-3">{cat.icon}</div>
                    <h3 className="text-xl font-bold">{cat.name}</h3>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-500">Top Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 4).map(product => (
                  <div key={product.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-red-600">
                    <div className="bg-gray-700 h-32 flex items-center justify-center text-5xl">
                    {product.image.startsWith('/') ? (
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    ) : (
                    <span>{product.image}</span>
                        )}
                        </div>

                    <div className="p-4">
                      <h3 className="font-bold line-clamp-2 mb-1">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs">{product.rating}</span>
                      </div>
                      <p className="text-lg font-bold text-red-500 mb-3">{formatPrice(product.priceUSD)}</p>
                      <button onClick={() => addToCart(product)} className="w-full bg-red-600 hover:bg-red-700 rounded-lg py-2 font-bold">Add</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'shop' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-red-500">Shop All Products</h1>

            <div className="flex gap-2 bg-gray-800 rounded-lg px-4 py-2">
              <Search size={20} className="text-gray-400" />
              <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-1 bg-transparent outline-none text-white placeholder-gray-400" />
            </div>

            <div className="flex flex-wrap gap-2 justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-lg font-bold ${selectedCategory === cat ? 'bg-red-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    {cat}
                  </button>
                ))}
              </div>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-gray-700 rounded-lg px-3 py-2 text-white font-bold">
                <option value="newest">Newest</option>
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-gray-800 rounded-lg border border-gray-700 hover:border-red-600 overflow-hidden">


                    
                  <div className="relative bg-gray-700 h-40 flex items-center justify-center text-6xl">
                    {product.image.startsWith('/') ? (
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    ) : (
                    <span>{product.image}</span>
                    )}

                    <button onClick={() => toggleWishlist(product)} className="absolute top-2 right-2 p-2 bg-gray-900 rounded-lg hover:bg-gray-800">
                      <Heart size={18} className={isInWishlist(product.id) ? 'text-red-600 fill-red-600' : 'text-gray-400'} />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold line-clamp-2 mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-400 mb-2">{product.category}</p>
                    {product.series && <p className="text-xs text-yellow-400 mb-1">Series: {product.series}</p>}
                    {product.style && <p className="text-xs text-yellow-400 mb-1">Style: {product.style}</p>}
                    <div className="flex items-center gap-1 mb-3">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-xs">{product.rating}</span>
                    </div>
                    <p className="text-lg font-bold text-red-500 mb-3">{formatPrice(product.priceUSD)}</p>
                    <button onClick={() => addToCart(product)} className="w-full bg-red-600 hover:bg-red-700 rounded-lg py-2 font-bold">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'cart' && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-red-500">Shopping Cart</h1>
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-2xl text-gray-400 mb-4">Cart is empty</p>
                <button onClick={() => setCurrentPage('shop')} className="px-6 py-3 bg-red-600 rounded-lg font-bold">Continue Shopping</button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex gap-4">
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.category}</p>
                        <p className="text-red-500 font-bold">{formatPrice(item.priceUSD)}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-700 rounded-lg p-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-600 rounded"><Minus size={16} /></button>
                        <span className="w-6 text-center font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-600 rounded"><Plus size={16} /></button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{formatPrice(item.priceUSD * item.quantity)}</p>
                        <button onClick={() => removeFromCart(item.id)} className="mt-2 text-red-500 hover:text-red-400"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border-2 border-red-600 h-fit">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-2 mb-6 border-t border-gray-700 pt-4">
                    <div className="flex justify-between"><span>Subtotal:</span><span>{formatPrice(cartTotal / USD_TO_INR)}</span></div>
                    <div className="flex justify-between"><span>Shipping:</span><span className="text-green-400">Free</span></div>
                    <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-4 mt-4"><span>Total:</span><span className="text-red-500">{formatPrice(cartTotal / USD_TO_INR)}</span></div>
                  </div>
                  {currentUser ? (
                    <button className="w-full bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg py-3 font-bold mb-3">Proceed Checkout</button>
                  ) : (
                    <button onClick={() => setShowAuthModal(true)} className="w-full bg-red-600 rounded-lg py-3 font-bold mb-3">Login to Checkout</button>
                  )}
                  <button onClick={() => setCurrentPage('shop')} className="w-full border-2 border-red-600 rounded-lg py-2 font-bold">Continue Shopping</button>
                </div>
              </div>
            )}
          </div>
        )}

        {currentPage === 'wishlist' && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-red-500">My Wishlist</h1>
            {wishlist.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-2xl text-gray-400 mb-4">Wishlist is empty</p>
                <button onClick={() => setCurrentPage('shop')} className="px-6 py-3 bg-red-600 rounded-lg font-bold">Start Shopping</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlist.map(product => (
                  <div key={product.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                    <div className="bg-gray-700 h-40 flex items-center justify-center text-6xl">{product.image}</div>
                    <div className="p-4">
                      <h3 className="font-bold line-clamp-2 mb-1">{product.name}</h3>
                      <p className="text-lg font-bold text-red-500 mb-3">{formatPrice(product.priceUSD)}</p>
                      <button onClick={() => addToCart(product)} className="w-full bg-red-600 rounded-lg py-2 font-bold mb-2">Add to Cart</button>
                      <button onClick={() => toggleWishlist(product)} className="w-full border-2 border-red-600 rounded-lg py-2 font-bold">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {currentPage === 'admin' && isAdmin && (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-red-500">Admin Dashboard</h1>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-600">
                <p className="text-gray-400 text-sm">Total Products</p>
                <p className="text-4xl font-bold text-red-500">{products.length}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-600">
                <p className="text-gray-400 text-sm">Total Stock</p>
                <p className="text-4xl font-bold text-yellow-500">{products.reduce((s, p) => s + p.stock, 0)}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-600">
                <p className="text-gray-400 text-sm">Inventory Value</p>
                <p className="text-4xl font-bold text-green-500">{formatPrice(products.reduce((s, p) => s + (p.priceUSD * p.stock), 0) / USD_TO_INR)}</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Products Inventory</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {products.map(p => (
                  <div key={p.id} className="bg-gray-700 rounded-lg p-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.image}</span>
                      <div>
                        <p className="font-bold">{p.name}</p>
                        <p className="text-xs text-gray-400">{formatPrice(p.priceUSD)} Stock: {p.stock}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'admin' && !isAdmin && (
          <div className="text-center py-16">
            <p className="text-2xl text-red-500 font-bold mb-4">Admin Access Only</p>
            <button onClick={() => setCurrentPage('home')} className="px-6 py-3 bg-red-600 rounded-lg font-bold">Back Home</button>
          </div>
        )}
      </main>

      <footer className="bg-black border-t-2 border-red-600 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 space-y-3">
        <p>F1 GearHub - Your Ultimate F1 Racing Gear Store</p>
        <p className="text-sm">2024 F1 GearHub. All rights reserved. Prices shown in INR</p>

        {/* Charles Leclerc Quote */}
        <div className="mt-6">
        <p className="italic text-gray-300 text-lg">
            “Must be the water💧” <span className="text-red-500 font-semibold"></span>
        </p>
        </div>

        {/* Feedback & Booking */}
        <div className="mt-4 text-gray-300">
        <p className="font-bold text-red-500 text-lg">📩 Feedback & Special Bookings</p>
        <a 
        href="mailto:samarohithreddy26@gmail.com"
        className="text-yellow-400 hover:text-yellow-300 underline font-semibold"
        >
        samarohithreddy26@gmail.com
        </a>
        </div>
        </div>
        </footer>


    </div>
  );
}