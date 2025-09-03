import React from 'react';
import { Heart, Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pink-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img
                  src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat//klinik%20logo.png"
                  alt="Klinik Perdana Tumpat Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Klinik Perdana Tumpat</h3>
                <p className="text-pink-100">Klinik Terbaik Ibu & Si Manja</p>
              </div>
            </div>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Klinik keluarga yang menyediakan rawatan khusus untuk ibu hamil, kanak-kanak, 
              dan seluruh keluarga dengan suasana yang selesa dan mesra.
            </p>
            <div className="flex items-center space-x-2 text-pink-100">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Rawatan Penuh Kasih Sayang</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-200 flex-shrink-0" />
                <span className="text-pink-100 text-sm">
                  Pt 3597, Viana Business Park, Jalan Dato Keramat, Bandar Tumpat,<br />
                  16200 Tumpat, Kelantan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-200 flex-shrink-0" />
                <a
                  href="tel:+60123456789"
                  className="text-pink-100 hover:text-white transition-colors text-sm"
                >
                  09-726 0766
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-pink-200 flex-shrink-0" />
                <span className="text-pink-100 text-sm">
                  Ahad - Sabtu<br />
                  9:00 AM - 10:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Perkhidmatan</h4>
            <ul className="space-y-2 text-pink-100 text-sm">
              <li>• Ultrasound Scan Baby (2D/3D/5D)</li>
              <li>• Scan Perkembangan Baby</li>
              <li>• Scan Jantina Baby</li>
              <li>• Detail Scan / Anomaly Scan (oleh Sonographer)</li>
              <li>• NT Scan (Down Syndrome Scan – oleh Sonographer)</li>
              <li>• Scan Gynae (Masalah Rahim Wanita)</li>
              <li>• Buka Buku Mengandung (Buku Pink)</li>
              <li>• Rawatan Kesuburan (TTC) / Ikhtiar Hamil</li>
              <li>• Rawatan Postnatal (Ibu Berpantang)</li>
              <li>• Checkup Luka Bersalin</li>
              <li>• Pap Smear</li>
              <li>• Masalah Keputihan / Jangkitan GBS</li>
              <li>• Masalah Penyusuan / Bengkak Susu</li>
              <li>• Saringan Kanser (Payudara, Ovari, Serviks)</li>
              <li>• Checkup Bayi Selepas Kelahiran</li>
              <li>• Khitan (Sunat Bayi Perempuan)</li>
              <li>• Ujian Jaundice / Kuning</li>
              <li>• Sedut Kahak</li>
              <li>• Rawatan Lelah / Asma</li>
              <li>• Vaksinasi / Imunisasi</li>
              <li>• Masalah Penyusuan / Pemakanan Bayi</li>
              <li>• Masalah Bayi Cirit / Sembelit</li>
              <li>• Rawatan Am (Demam, Batuk, Selsema, Tonsil)</li>
              <li>• Rawatan Eczema / Kulit</li>
              <li>• Rawatan Diabetes, Kolesterol & Darah Tinggi</li>
              <li>• Rawatan Gout / Sendi</li>
              <li>• Cuci Luka</li>
              <li>• Cuci Telinga</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-pink-100 text-sm">
                © 2024 Klinik Perdana Tumpat. Hak Cipta Terpelihara.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-pink-400 hover:bg-white hover:text-pink-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/klinikperdanatumpat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-400 hover:bg-white hover:text-pink-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@drelyperdana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-400 hover:bg-white hover:text-pink-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-pink-400 hover:bg-white hover:text-pink-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;