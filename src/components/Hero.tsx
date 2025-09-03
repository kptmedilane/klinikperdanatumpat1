import React from 'react';
import { Star, Calendar, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-16 sm:pt-20 pb-16 sm:pb-24 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat//Mom%20&%20Child.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 mb-6 sm:mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              5.0 ★ Google Rating dari 100+ Ibu
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2 mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              <span className="block">Klinik Terbaik Ibu</span>
              <span className="block">& Si Manja</span>
              <span className="block">
              <span className="text-pink-300">di Tumpat</span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-2 mb-8 sm:mb-10">
            <p className="text-xl sm:text-2xl text-white leading-relaxed font-semibold drop-shadow-md">
              Dipimpin 100% Doktor Perempuan
            </p>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
             Berpengalaman Hampir 10 Tahun Dalam Penjagaan Ibu & Anak
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/60124435660?text=Hi%2C%20saya%20berminat%20untuk%20buat%20temujanji%20di%20klinik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl min-w-[240px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Sekarang</span>
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm text-pink-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[240px]"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;