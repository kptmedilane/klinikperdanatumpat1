import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Ultrasound.jpg',
      title: 'Ultrasound Scan Baby (2D/3D/5D)',
      alt: 'Ultrasound scan procedure',
      slug: 'ultrasound-scan-baby',
      description: 'Lihat bayi dengan lebih jelas & nyata.'
    },
    {
      image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Pink%20Book.jpg',
      title: 'Buka Buku Mengandung (Buku Pink)',
      alt: 'Pregnancy book consultation',
      slug: 'buka-buku-mengandung',
      description: 'Pendaftaran kehamilan dan rekod pemeriksaan ibu mengandung.'
    },
    {
      image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Rawatan%20Kesuburan.jpg',
      title: 'Rawatan Kesuburan (TTC)',
      alt: 'Fertility treatment consultation',
      slug: 'rawatan-kesuburan',
      description: 'Bantuan profesional untuk anda yang sedang mencuba hamil.'
    },
    {
      image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Checkup%20Bayi.webp',
      title: 'Checkup Bayi Selepas Kelahiran',
      alt: 'Newborn baby checkup',
      slug: 'checkup-bayi-selepas-kelahiran',
      description: 'Pastikan bayi sihat & berkembang dengan baik selepas lahir.'
    },
    {
      image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Vaksin.png',
      title: 'Vaksinasi / Imunisasi',
      alt: 'Vaccination and immunization',
      slug: 'vaksinasi-imunisasi',
      description: 'Lindungi anak anda daripada penyakit berbahaya sejak awal usia.'
    },
    {
      image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/rawatan%20am.jpg',
      title: 'Rawatan Am (Demam, Batuk, Selsema)',
      alt: 'General treatment for fever, cough, cold',
      slug: 'rawatan-am',
      description: 'Rawatan harian untuk masalah kesihatan biasa seisi keluarga.'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      className="py-16 sm:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perkhidmatan Utama Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Penjagaan lengkap untuk ibu, bayi & keluarga — semua di bawah satu klinik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight min-h-[3.5rem] flex items-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                <Link
                  to={`/perkhidmatan/${service.slug}`}
                  state={{ 
                    service: {
                      name: service.title,
                      image: service.image,
                      slug: service.slug,
                      description: service.description
                    },
                    category: { title: 'Perkhidmatan Klinik', bgColor: 'from-pink-500 to-pink-600' }
                  }}
                  className="inline-block w-full text-center bg-white border-2 border-pink-500 text-pink-500 py-3 px-6 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-200 transform hover:scale-105 mt-auto"
                >
                  Lihat Servis
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/perkhidmatan"
            className="inline-flex items-center space-x-2 bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>📋 Lihat Semua Perkhidmatan</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;