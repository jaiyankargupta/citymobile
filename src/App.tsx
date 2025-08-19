import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ShopsPage from './pages/ShopsPage';
import ShopDetailPage from './components/ShopDetailPage';
import ShopRangmahalPage from './pages/ShopRangmahalPage';
import ShopGirlsSchoolPage from './pages/ShopGirlsSchoolPage';
import ShopVijayCinemaPage from './pages/ShopVijayCinemaPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/shop/:shopId" element={<ShopDetailPage />} />
          <Route path="/shop-3" element={<ShopRangmahalPage />} />
          <Route path="/shop-2" element={<ShopGirlsSchoolPage />} />
          <Route path="/shop-1" element={<ShopVijayCinemaPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
