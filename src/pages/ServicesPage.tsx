import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const ServicesPage = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: 'Untuk Ibu & Wanita',
      icon: '🩺',
      bgColor: 'from-pink-500 to-pink-600',
      services: [
        {
          name: 'Ultrasound Scan Baby (2D/3D/5D)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Ultrasound.jpg',
          slug: 'ultrasound-scan-baby',
          description: 'Lihat bayi dengan lebih jelas & nyata'
        },
        {
          name: 'Scan Perkembangan Baby',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Scan%20Perkembangan%20Bayi.webp',
          slug: 'scan-perkembangan-baby',
          description: 'Pantau tumbesaran bayi dalam kandungan.'
        },
        {
          name: 'Scan Jantina Baby',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Scan%20Jantina.webp',
          slug: 'scan-jantina-baby',
          description: 'Ketahui jantina bayi anda dengan selamat dan tepat.'
        },
        {
          name: 'Buka Buku Mengandung (Buku Pink)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Pink%20Book.jpg',
          slug: 'buka-buku-mengandung',
          description: 'Daftar kehamilan anda untuk pemantauan ibu & bayi.'
        },
        {
          name: 'Rawatan Kesuburan (TTC)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Rawatan%20Kesuburan.jpg',
          slug: 'rawatan-kesuburan',
          description: 'Ikhtiar hamil dengan panduan & rawatan dari doktor.'
        },
        {
          name: 'Rawatan Postnatal (Ibu Berpantang)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Posnatal%20Care.jpg',
          slug: 'rawatan-postnatal',
          description: 'Rawatan & pemulihan selepas bersalin untuk ibu.'
        },
        {
          name: 'Checkup Luka Bersalin',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Check%20luka%20bersalin.jpg',
          slug: 'checkup-luka-bersalin',
          description: 'Pemeriksaan luka kelahiran untuk pastikan penyembuhan.'
        },
        {
          name: 'Pap Smear',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Pap%20smear.jpg',
          slug: 'pap-smear',
          description: 'Saringan awal untuk kesihatan rahim & serviks wanita.'
        },
        {
          name: 'Detail Scan / Anomaly Scan',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Anamoly%20Scan.jpg',
          slug: 'detail-scan-anomaly-scan',
          description: 'Pemeriksaan struktur badan bayi oleh sonographer bertauliah.'
        },
        {
          name: 'NT Scan (Down Syndrome)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/NT%20Scan.jpg',
          slug: 'nt-scan-down-syndrome',
          description: 'Saringan risiko sindrom Down pada awal kehamilan.'
        },
        {
          name: 'Scan Gynae (Masalah Rahim)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Scan%20Gynae',
          slug: 'scan-gynae-masalah-rahim',
          description: 'Pemeriksaan untuk kesan cyst, fibroid & masalah rahim.'
        },
        {
          name: 'Masalah Keputihan / Jangkitan GBS',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/GBS.jpg',
          slug: 'masalah-keputihan-jangkitan-gbs',
          description: 'Rawatan jangkitan faraj & bakteria semasa hamil.'
        },
        {
          name: 'Masalah Penyusuan / Bengkak Susu',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Bengkak%20Susu.jpg',
          slug: 'masalah-penyusuan-bengkak-susu',
          description: 'Bantuan penyusuan & rawatan bengkak susu.'
        },
        {
          name: 'Saringan Kanser (Payudara, Ovari, Serviks)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Saringan%20Cancer%20.webp',
          slug: 'saringan-kanser',
          description: 'Saringan kesihatan wanita secara menyeluruh.'
        }
      ]
    },
    {
      title: 'Untuk Bayi & Kanak-Kanak',
      icon: '👶',
      bgColor: 'from-blue-500 to-blue-600',
      services: [
        {
          name: 'Checkup Bayi Selepas Kelahiran',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Checkup%20Bayi.webp',
          slug: 'checkup-bayi-selepas-kelahiran',
          description: 'Pantau tumbesaran bayi dalam kandungan'
        },
        {
          name: 'Khitan (Sunat Bayi Perempuan)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Khinat.png',
          slug: 'khitan-sunat-bayi-perempuan',
          description: 'Prosedur khitan lembut & selamat untuk bayi perempuan.'
        },
        {
          name: 'Ujian Jaundice / Kuning',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Ujian%20Kuning.jpg',
          slug: 'ujian-jaundice-kuning',
          description: 'Ujian untuk kesan tahap kuning bayi baru lahir.'
        },
        {
          name: 'Sedut Kahak',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Sedut%20Kahak.jpg',
          slug: 'sedut-kahak',
          description: 'Bantu pernafasan anak dengan sedutan kahak selamat.'
        },
        {
          name: 'Rawatan Lelah / Asma',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Asma.jpg',
          slug: 'rawatan-lelah-asma',
          description: 'Rawatan nebulizer & ubat untuk anak yang ada asma.'
        },
        {
          name: 'Vaksinasi / Imunisasi',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Vaksin.png',
          slug: 'vaksinasi-imunisasi',
          description: 'Perlindungan dari penyakit sejak bayi hingga kanak-kanak.'
        },
        {
          name: 'Masalah Penyusuan / Pemakanan',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Masalah%20Penyusuan.jpg',
          slug: 'masalah-penyusuan-pemakanan',
          description: 'Panduan & rawatan untuk bayi yang kurang menyusu/makan.'
        },
        {
          name: 'Masalah Bayi Cirit / Sembelit',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/CIRIT-BIRIT.jpg.webp',
          slug: 'masalah-bayi-cirit-sembelit',
          description: 'Rawatan untuk sistem penghadaman bayi terganggu.'
        }
      ]
    },
    {
      title: 'Rawatan Umum & Dewasa',
      icon: '🏥',
      bgColor: 'from-green-500 to-green-600',
      services: [
        {
          name: 'Rawatan Am (Demam, Batuk, Selsema, Tonsil)',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/rawatan%20am.jpg',
          slug: 'rawatan-am',
          description: 'Rawatan harian untuk seisi keluarga.'
        },
        {
          name: 'Rawatan Eczema / Kulit',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/rawatan%20eczema.webp',
          slug: 'rawatan-eczema-kulit',
          description: 'Rawatan kulit gatal, ruam & ekzema berulang.'
        },
        {
          name: 'Rawatan Diabetes, Kolesterol & Darah Tinggi',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Darah%20tinggi.jpg',
          slug: 'rawatan-diabetes-kolesterol-darah-tinggi',
          description: 'Kawal penyakit kronik anda dengan pemeriksaan berkala.'
        },
        {
          name: 'Rawatan Gout / Sendi',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/gout.jpg',
          slug: 'rawatan-gout-sendi',
          description: 'Rawat sakit sendi & uric acid tinggi dengan selamat.'
        },
        {
          name: 'Cuci Luka',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Cuci%20Luka.webp',
          slug: 'cuci-luka',
          description: 'Pembersihan luka untuk elak jangkitan & sembuh cepat.'
        },
        {
          name: 'Cuci Telinga',
          image: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/CUCI-TELINGA.jpg',
          slug: 'cuci-telinga',
          description: 'Telinga tersumbat? Kami bantu bersih & legakan.'
        }
      ]
    }
  ];

  const handleLearnMore = (categoryIndex: number, serviceIndex: number) => {
    const service = serviceCategories[categoryIndex].services[serviceIndex];
    navigate(`/perkhidmatan/${service.slug}`, { 
      state: { 
        service,
        category: serviceCategories[categoryIndex]
      }
    });
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Perkhidmatan', current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Halaman Utama</span>
            </Link>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Perkhidmatan Kami
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Rawatan lengkap untuk ibu mengandung, bayi & keluarga — semua dalam satu klinik.
            </p>

            {/* Category Navigation */}
            <div className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#ibu"
                  className="inline-flex items-center space-x-3 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">🧕</span>
                  <span>Untuk Ibu/Wanita</span>
                </a>
                <a
                  href="#bayi"
                  className="inline-flex items-center space-x-3 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">👶</span>
                  <span>Untuk Bayi/Kanak-Kanak</span>
                </a>
                <a
                  href="#umum"
                  className="inline-flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">💉</span>
                  <span>Rawatan Umum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            {serviceCategories.map((category, categoryIndex) => {
              const sectionIds = ['ibu', 'bayi', 'umum'];
              return (
              <div key={categoryIndex} id={sectionIds[categoryIndex]} className="space-y-8 scroll-mt-24">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${category.bgColor} text-white px-8 py-4 rounded-2xl shadow-lg mb-8`}>
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                    >
                      {/* Service Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Service Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start space-x-3 mb-4">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.bgColor} mt-2 flex-shrink-0`}></div>
                          <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-pink-600 transition-colors flex-1">
                            {service.name}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
                          {service.description}
                        </p>
                        
                        <button
                          onClick={() => handleLearnMore(categoryIndex, serviceIndex)}
                          className={`w-full bg-gradient-to-r ${category.bgColor} text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 mt-auto`}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              📞 Hubungi Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Tak pasti rawatan yang sesuai? Hubungi kami untuk nasihat lanjut.
            </p>
            
            <a
              href="https://wa.me/60124435660?text=Hi%2C%20saya%20berminat%20untuk%20buat%20temujanji%20di%20klinik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Kami</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;