import React from 'react';

const OurPanel = () => {
  // Corporate panel logos with real company logos
  const corporateLogos = [
    {
      id: 1,
      name: 'PM Care',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/PM%20Care.png',
      placeholder: false
    },
    {
      id: 2,
      name: 'AIA',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/AIA_Group_logo.svg.png',
      placeholder: false
    },
    {
      id: 3,
      name: 'Mi Care',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Micare.png',
      placeholder: false
    },
    {
      id: 4,
      name: 'Air Kelantan',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Air%20Kelantan.png',
      placeholder: false
    },
    {
      id: 5,
      name: 'CompuMed',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/CompuMed.webp',
      placeholder: false
    },
    {
      id: 6,
      name: 'Health Metrics',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Healthmetric.png',
      placeholder: false
    },
    {
      id: 7,
      name: 'Health Connect',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Healthconnect.webp',
      placeholder: false
    },
    {
      id: 8,
      name: 'E-Mas',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Emas.png',
      placeholder: false
    },
    {
      id: 9,
      name: 'Mednefit',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Mednefit.png',
      placeholder: false
    },
    {
      id: 10,
      name: 'KPTM',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/KPTM.png',
      placeholder: false
    },
    {
      id: 11,
      name: 'We Care',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/We%20Care.png',
      placeholder: false
    },
    {
      id: 12,
      name: 'Ain Medicare',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Ain%20Medicare.png',
      placeholder: false
    },
    {
      id: 13,
      name: 'MRSM',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/MRSM_Logo.jpg',
      placeholder: false
    },
    {
      id: 14,
      name: 'Amanah Raya',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Amanah%20Raya.jpg',
      placeholder: false
    },
    {
      id: 15,
      name: 'LKIM',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/LKIM.png',
      placeholder: false
    },
    {
      id: 16,
      name: 'MANIK',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/MANIK.jpg',
      placeholder: false
    },
    {
      id: 17,
      name: 'Majlis Amanah Rakyat',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Majlis%20Amanah%20Rakyat.png',
      placeholder: false
    },
    {
      id: 18,
      name: 'Giant Mara',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Giant%20Mara.png',
      placeholder: false
    },
    {
      id: 19,
      name: 'KPSB',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/KPSB%20Care.jpg',
      placeholder: false
    },
    {
      id: 20,
      name: 'Sehati',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/Sehati.png',
      placeholder: false
    },
    {
      id: 21,
      name: 'Peka B40',
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Logo/peka-b40.png',
      placeholder: false
    }
  ];

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: '#F5EBDD' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Panel Korporat Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Klinik kami berdaftar dengan pelbagai syarikat, organisasi & TPA — memudahkan urusan rawatan anda.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {corporateLogos.map((logo) => (
              <div
                key={logo.id}
                className="group bg-white rounded-xl p-3 shadow-sm border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center aspect-square"
              >
                {logo.placeholder ? (
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-xs text-gray-400 font-medium text-center">Logo {logo.id}</span>
                  </div>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain p-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPanel;