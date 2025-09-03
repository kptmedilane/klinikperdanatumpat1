import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { ScrollPositionProvider } from './components/ScrollPositionProvider';
import { useScrollRestoration } from './hooks/useScrollRestoration';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';

function App() {
  // Initialize scroll restoration
  useScrollRestoration();

  return (
    <ScrollPositionProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perkhidmatan" element={<ServicesPage />} />
          <Route path="/perkhidmatan/:slug" element={<ServiceDetailPage />} />
          <Route path="/tentang-kami" element={<AboutUsPage />} />
          <Route path="/hubungi-kami" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </ScrollPositionProvider>
  );
}

export default App;