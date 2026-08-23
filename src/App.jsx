import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import AnnouncementBar from './components/layout/AnnouncementBar.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import MobileBottomNav from './components/layout/MobileBottomNav.jsx';
import CartDrawer from './components/cart/CartDrawer.jsx';
import SearchOverlay from './components/layout/SearchOverlay.jsx';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Makeup from './pages/Makeup.jsx';
import Skincare from './pages/Skincare.jsx';
import Haircare from './pages/Haircare.jsx';
import Fragrance from './pages/Fragrance.jsx';
import Offers from './pages/Offers.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart.jsx';
import Journal from './pages/Journal.jsx';
import JournalArticle from './pages/JournalArticle.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <WishlistProvider>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-ivory">
          <AnnouncementBar />
          <Navbar
            onCartClick={() => setCartOpen(true)}
            onSearchClick={() => setSearchOpen(true)}
          />
          <main className="flex-1 pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/makeup" element={<Makeup />} />
              <Route path="/skincare" element={<Skincare />} />
              <Route path="/haircare" element={<Haircare />} />
              <Route path="/fragrance" element={<Fragrance />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:slug" element={<JournalArticle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <MobileBottomNav
            onCartClick={() => setCartOpen(true)}
            onSearchClick={() => setSearchOpen(true)}
          />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
          <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}
