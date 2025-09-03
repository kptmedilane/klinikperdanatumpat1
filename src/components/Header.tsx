import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'services') {
      navigate('/perkhidmatan');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <img
                src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat//klinik%20logo.png"
                alt="Klinik Perdana Tumpat Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            </div>
            <div>
              <Link to="/" className="block">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 hover:text-pink-500 transition-colors">
                  Klinik Perdana Tumpat
                </h1>
              </Link>
              <p className="text-xs text-gray-600 hidden sm:block">
                Klinik Terbaik Ibu & Si Manja
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium relative group"
            >
              Utama
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/tentang-kami"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium relative group"
            >
              Tentang Kami
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/perkhidmatan"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium relative group"
            >
              Perkhidmatan
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/hubungi-kami"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium relative group"
            >
              Hubungi Kami
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/60124435660?text=Hi%2C%20saya%20berminat%20untuk%20buat%20temujanji%20di%20klinik"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>WhatsApp Kami</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <nav className="space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors font-medium"
              >
                Utama
              </Link>
              <Link
                to="/tentang-kami"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors font-medium"
              >
                Tentang Kami
              </Link>
              <Link
                to="/perkhidmatan"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors font-medium"
              >
                Perkhidmatan
              </Link>
              <Link
                to="/hubungi-kami"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors font-medium"
              >
                Hubungi Kami
              </Link>
              <div className="px-4 pt-2">
                <a
                  href="https://wa.me/60124435660?text=Hi%2C%20saya%20berminat%20untuk%20buat%20temujanji%20di%20klinik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
                >
                  WhatsApp Kami
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;