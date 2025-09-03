import React from 'react';
import { ArrowLeft, MessageCircle, Phone, Heart, Shield, Users, Award, Clock, MapPin, Star, CheckCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const AboutUsPage = () => {
  const keyDifferentiators = [
    {
      icon: Heart,
      title: 'Doktor Perempuan Berpengalaman',
      description: 'Dipimpin oleh Dr Ely Fauziani yang memahami keperluan khusus wanita dan ibu'
    },
    {
      icon: Shield,
      title: 'Privasi & Keselamatan Terjamin',
      description: 'Suasana selesa dan privat untuk rawatan yang sensitif'
    },
    {
      icon: Users,
      title: 'Fokus Ibu & Anak',
      description: 'Pakar dalam penjagaan kehamilan, kelahiran dan kesihatan kanak-kanak'
    },
    {
      icon: Award,
      title: 'Kelayakan Profesional',
      description: 'Doktor berkelayakan tinggi dengan pengalaman antarabangsa'
    },
    {
      icon: Clock,
      title: 'Waktu Operasi Fleksibel',
      description: 'Buka 7 hari seminggu untuk kemudahan keluarga'
    },
    {
      icon: Star,
      title: 'Dipercayai Komuniti',
      description: '5.0★ rating Google dari 100+ ibu yang berpuas hati'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tentang Kami', current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Halaman Utama</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Tentang Kami
                </h1>
                <h2 className="text-2xl sm:text-3xl text-pink-600 font-semibold mb-6">
                 Klinik Terbaik Ibu & Si Manja
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                 Klinik Perdana Tumpat telah beroperasi sejak 2023, membawa legasi jenama Perdana yang dipercayai sejak tahun 1980. Dipimpin oleh doktor perempuan berpengalaman hampir 10 tahun, kami komited menyediakan rawatan penuh kasih sayang untuk ibu mengandung, bayi dan seisi keluarga — dalam suasana yang selesa dan mesra.
                </p>
              </div>

              {/* Right Column - Clinic Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Logo.jpeg"
                    alt="Klinik Perdana Tumpat - Ruang Bacaan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-pink-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">5.0★ Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Menyediakan Rawatan Sejak 1980 di Bawah Nama Perdana
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                   Klinik Perdana Tumpat beroperasi sejak 2023, namun jenama Perdana telah dikenali ramai sejak tahun 1980 — menjadi sebahagian daripada kepercayaan komuniti dalam penjagaan kesihatan ibu, bayi dan keluarga.
                  </p>
                  <p>
                   Klinik ini diketuai oleh doktor perempuan dengan hampir 10 tahun pengalaman. Kami komited memberi rawatan berkualiti dalam suasana yang selesa, teliti dan mesra wanita.
                  </p>
                  <p>
                    Kami memahami keperluan ibu moden yang mahukan rawatan cepat dan penuh empati — dari perancangan kehamilan hingga penjagaan selepas bersalin dan kesihatan anak kecil. Dengan teknologi terkini dan pasukan berdedikasi, kami terus menjadi pilihan utama di Tumpat dan sekitarnya.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <div className="text-3xl font-bold text-pink-600 mb-2">7+</div>
                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Keluarga Dilayani</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Clinic Environment Images */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Waiting%20Area.jpeg"
                      alt="Mini Playground"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Ultrasound%20Room.jpeg"
                      alt="Bilik Ultrasound"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Counter.jpeg"
                    alt="Ruang Nebulizer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Doktor Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dipimpin oleh doktor perempuan berpengalaman yang memahami keperluan khusus wanita dan keluarga
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Doctor Photo */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Doctor%20Ely.jpeg"
                      alt="Dr Ely Fauziani"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Right Column - Doctor Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Dr Ely Fauziani
                    </h3>
                    <p className="text-lg text-pink-600 font-semibold mb-4">
                      Doktor Pakar Wanita & Kanak-Kanak
                    </p>
                  </div>

                  {/* Qualifications */}
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Kelayakan Profesional:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">MBBS (India) - Ijazah Perubatan</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Diploma Paediatrics (RCP Ireland) - Pakar Kanak-Kanak</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Breastfeeding Specialist (ANCC US) - Pakar Penyusuan</span>
                      </li>
                    </ul>
                  </div>

                  {/* Approach & Philosophy */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Pendekatan Rawatan:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Heart className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <strong>Layanan Penuh Kasih:</strong> Memahami setiap pesakit sebagai individu dengan keperluan unik
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <strong>Pendekatan Holistik:</strong> Merawat bukan sahaja penyakit, tetapi kesejahteraan keseluruhan
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <strong>Privasi Terjamin:</strong> Memastikan keselesaan dan privasi setiap pesakit wanita
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Link */}
                  <div className="pt-4">
                    <a
                      href="https://www.tiktok.com/@drelyperdana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <span className="text-lg">🎥</span>
                      <span>Lihat Tips Kesihatan di TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Visi & Misi Kami
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Klinik Perdana Tumpat memberi keutamaan dalam mempromosikan keshatan yang terbaik untuk masyarakat setempat.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Menawarkan perkhidmatan kesihatan yang berkualiti dan kemudahan fasiliti yang sesuai untuk semua peringkat umur.</span>
                  </li>
                </ul>
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
                </div>
                <ul className="space-y-3 text-center text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Matlamat kami adalah untuk menjadi pusat kesihatan primer yang terbaik untuk komuniti setempat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Mengapa Pilih Klinik Perdana Tumpat?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kami komited untuk memberikan rawatan terbaik dengan pendekatan yang holistik dan mesra keluarga
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyDifferentiators.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Galeri Klinik Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Lihat lebih dekat suasana dan kemudahan yang tersedia di Klinik Perdana Tumpat
              </p>
            </div>

            {/* Image Grid - 10 images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {/* Image 1 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Counter.jpeg"
                    alt="Counter Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 2 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Logo.jpeg"
                    alt="Medicine Room"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 3 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/team.jpeg"
                    alt="Mini Playground"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 4 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Nebulizer%20Area.jpeg"
                    alt="Nebulizer Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 5 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Reading%20Area.jpeg"
                    alt="Reading Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 6 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Toy.jpeg"
                    alt="Toy Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 7 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Waiting%20Area.jpeg"
                    alt="Waiting Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 8 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Medicine%20room.jpeg"
                    alt="Clinic Logo Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 9 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Mini%20Playground.jpeg"
                    alt="Sign Board"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Image 10 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat//Ultrasound%20Room.png"
                    alt="Ultrasound Room"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Location & Contact Info */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Lokasi & Maklumat Hubungan
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Maklumat Klinik</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-600 mb-2">
                        Pt 3597, Viana Business Park, Jalan Dato Keramat, Bandar Tumpat<br />
                        16200 Tumpat, Kelantan
                      </p>
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                        <p className="text-pink-700 text-sm font-medium">
                          📍 Berhadapan Klinik Kesihatan Tumpat<br />
                          🏦 Bersebelahan Agro Bank Tumpat
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                      <a
                        href="tel:+60972607666"
                        className="text-pink-500 hover:text-pink-600 transition-colors font-medium"
                      >
                        09-726 0766
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Waktu Operasi</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>Ahad - Sabtu: 9:00 AM - 10:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-pink-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.127248681626!2d102.1643532!3d6.189101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6ad350bb7633b%3A0x427362fd8cb130a4!2sKlinik%20Perdana%20Tumpat!5e0!3m2!1sen!2smy!4v1750636910029!5m2!1sen!2smy"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Klinik Perdana Tumpat Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-500 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Buat Temujanji Hari Ini
            </h2>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Hubungi kami untuk mendapatkan rawatan terbaik untuk anda dan keluarga. 
              Kami sedia membantu dalam perjalanan kesihatan anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/60124435660?text=Hi%2C%20saya%20berminat%20untuk%20buat%20temujanji%20di%20klinik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Sekarang</span>
              </a>
              
              <Link
                to="/hubungi-kami#contact"
                className="inline-flex items-center space-x-3 bg-pink-400 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>Borang Temujanji</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;