import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, Clock, CheckCircle, Users, Heart, Baby, UserCheck } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const service = location.state?.service;
  const category = location.state?.category;

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or data is missing.</p>
          <Link
            to="/perkhidmatan"
            className="inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  // Service-specific content
  const getServiceContent = (slug: string) => {
    const serviceContent: { [key: string]: any } = {
      'ultrasound-scan-baby': {
        subheading: 'Lihat bayi dengan lebih jelas & nyata',
        description: 'Scan ultrasound baby membolehkan ibu melihat bayi dalam kandungan dengan lebih jelas — dari pergerakan hingga wajah. Teknologi 2D, 3D dan 5D memberikan pengalaman visual yang lebih realistik, sambil memastikan bayi sihat dan berkembang baik. Prosedur ini selamat, tidak menyakitkan, dan tidak menggunakan radiasi berbahaya.',
        whoIsThisFor: [
          { icon: Baby, text: 'Ibu mengandung (semua trimester)' },
          { icon: Heart, text: 'Pasangan yang ingin lihat bayi mereka' },
          { icon: Users, text: 'Keluarga yang ingin kenali jantina bayi' },
          { icon: UserCheck, text: 'Ibu yang perlu pantau perkembangan bayi' }
        ]
      },
      'scan-perkembangan-baby': {
        subheading: 'Pantau tumbesaran bayi dalam kandungan',
        description: 'Pemeriksaan berkala untuk memastikan bayi berkembang dengan sihat dan normal. Kami akan ukur saiz kepala, badan, dan anggota badan bayi untuk pastikan tumbesaran mengikut jadual yang sepatutnya. Scan ini penting untuk kesan sebarang masalah awal.',
        whoIsThisFor: [
          { icon: Baby, text: 'Ibu mengandung 20+ minggu' },
          { icon: Heart, text: 'Ibu yang risiko tinggi' },
          { icon: Users, text: 'Ibu dengan sejarah komplikasi' },
          { icon: UserCheck, text: 'Pemantauan rutin kehamilan' }
        ]
      },
      'scan-jantina-baby': {
        subheading: 'Ketahui jantina bayi anda dengan selamat dan tepat',
        description: 'Scan jantina baby boleh dilakukan seawal 16-20 minggu kehamilan. Kami gunakan teknologi ultrasound terkini untuk tentukan jantina bayi dengan tepat. Prosedur ini selamat dan memberikan kepastian kepada ibu bapa untuk persiapan kelahiran.',
        whoIsThisFor: [
          { icon: Baby, text: 'Ibu mengandung 16+ minggu' },
          { icon: Heart, text: 'Pasangan yang ingin tahu jantina' },
          { icon: Users, text: 'Keluarga untuk persiapan kelahiran' },
          { icon: UserCheck, text: 'Perancangan nama dan keperluan bayi' }
        ]
      },
      'buka-buku-mengandung': {
        subheading: 'Daftar kehamilan anda untuk pemantauan ibu & bayi',
        description: 'Buku Pink adalah rekod rasmi kehamilan yang diperlukan untuk semua ibu mengandung di Malaysia. Kami akan buka buku ini dan lakukan pemeriksaan awal termasuk berat badan, tekanan darah, dan ujian air kencing. Buku ini penting untuk rawatan di hospital kerajaan.',
        whoIsThisFor: [
          { icon: Baby, text: 'Ibu mengandung baru (6-12 minggu)' },
          { icon: Heart, text: 'Kehamilan pertama' },
          { icon: Users, text: 'Temujanji fleksibel untuk ibu & pasangan di klinik swasta' },
          { icon: UserCheck, text: 'Pemantauan kesihatan rutin' }
        ]
      },
      'rawatan-kesuburan': {
        subheading: 'Ikhtiar hamil dengan panduan & rawatan dari doktor',
        description: 'Rawatan kesuburan (TTC - Trying to Conceive) membantu pasangan yang menghadapi kesukaran untuk hamil. Kami sediakan pemeriksaan menyeluruh, nasihat pemakanan, suplemen yang sesuai, dan rawatan hormon jika diperlukan. Pendekatan kami holistik dan mesra pasangan.',
        whoIsThisFor: [
          { icon: Heart, text: 'Pasangan yang cuba hamil 6+ bulan' },
          { icon: Users, text: 'Wanita dengan haid yang tidak teratur' },
          { icon: UserCheck, text: 'Pasangan dengan sejarah keguguran' },
          { icon: Baby, text: 'Mereka yang ingin optimumkan kesuburan' }
        ]
      },
      'rawatan-postnatal': {
        subheading: 'Rawatan & pemulihan selepas bersalin untuk ibu',
        description: 'Rawatan postnatal penting untuk pemulihan ibu selepas bersalin. Kami sediakan pemeriksaan kesihatan am, rawatan luka bersalin, nasihat penyusuan, dan sokongan emosi. Tempoh pantang adalah masa kritikal yang memerlukan perhatian khusus.',
        whoIsThisFor: [
          { icon: Heart, text: 'Ibu selepas bersalin (0-6 minggu)' },
          { icon: Baby, text: 'Ibu yang menyusu' },
          { icon: Users, text: 'Ibu dengan komplikasi bersalin' },
          { icon: UserCheck, text: 'Pemulihan kesihatan mental' }
        ]
      },
      'checkup-luka-bersalin': {
        subheading: 'Pemeriksaan luka kelahiran untuk pastikan penyembuhan',
        description: 'Pemeriksaan luka bersalin penting untuk pastikan penyembuhan yang baik dan elak jangkitan. Kami akan periksa luka episiotomi atau C-section, bersihkan jika perlu, dan beri nasihat penjagaan. Rawatan awal dapat elakkan komplikasi.',
        whoIsThisFor: [
          { icon: Heart, text: 'Ibu selepas bersalin normal' },
          { icon: UserCheck, text: 'Ibu selepas C-section' },
          { icon: Users, text: 'Ibu dengan luka episiotomi' },
          { icon: Baby, text: 'Pemeriksaan rutin postnatal' }
        ]
      },
      'checkup-bayi-selepas-kelahiran': {
        subheading: 'Pastikan bayi sihat & berkembang dengan baik selepas lahir',
        description: 'Checkup bayi baru lahir adalah penting untuk pastikan kesihatan dan perkembangan yang normal. Kami akan periksa berat badan, panjang, lilitan kepala, refleks, dan tanda-tanda vital. Pemeriksaan ini membantu kesan masalah awal.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi selepas kelahiran 0-6 bulan' },
          { icon: Heart, text: 'Bayi Prematur' },
          { icon: Users, text: 'Pemantauan perkembangan hingga 5 tahun' },
          { icon: UserCheck, text: 'Pemantauan perkembangan rutin' }
        ]
      },
      'ujian-jaundice-kuning': {
        subheading: 'Ujian untuk kesan tahap kuning bayi baru lahir',
        description: 'Jaundice atau kuning adalah biasa pada bayi baru lahir tetapi perlu dipantau. Kami gunakan alat khas untuk ukur tahap bilirubin tanpa perlu ambil darah. Jika tahap tinggi, rawatan phototherapy mungkin diperlukan.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi baru lahir (0-2 minggu)' },
          { icon: Heart, text: 'Bayi dengan kulit/mata kuning' },
          { icon: Users, text: 'Bayi yang kurang menyusu' },
          { icon: UserCheck, text: 'Follow-up selepas keluar hospital' }
        ]
      },
      'khitan-sunat-bayi-perempuan': {
        subheading: 'Prosedur khitan lembut & selamat untuk bayi perempuan',
        description: 'Khitan bayi perempuan dilakukan mengikut sunnah dengan cara yang lembut dan selamat. Prosedur ini dilakukan oleh doktor berpengalaman dengan alat steril dan teknik yang betul. Kami pastikan keselesaan dan keselamatan bayi.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi perempuan (0-6 bulan)' },
          { icon: Heart, text: 'Keluarga Muslim' },
          { icon: Users, text: 'Mengikut kepercayaan agama' },
          { icon: UserCheck, text: 'Prosedur sunnah' }
        ]
      },
      'vaksinasi-imunisasi': {
        subheading: 'Perlindungan dari penyakit sejak bayi hingga kanak-kanak',
        description: 'Program vaksinasi lengkap untuk melindungi anak dari penyakit berbahaya. Kami ikut jadual imunisasi kebangsaan dan sediakan vaksin tambahan jika diperlukan. Semua vaksin disimpan pada suhu yang betul untuk keberkesanan maksimum.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi dari lahir' },
          { icon: Users, text: 'Kanak-kanak hingga 18 tahun' },
          { icon: Heart, text: 'Dewasa yang perlu booster' },
          { icon: UserCheck, text: 'Vaksin travel jika diperlukan' }
        ]
      },
      'rawatan-am': {
        subheading: 'Rawatan harian untuk seisi keluarga',
        description: 'Rawatan am untuk masalah kesihatan biasa seperti demam, batuk, selsema, sakit tekak, dan tonsil. Kami sediakan rawatan yang sesuai untuk semua peringkat umur dari bayi hingga dewasa dengan pendekatan yang mesra keluarga.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi dan kanak-kanak' },
          { icon: Users, text: 'Dewasa dan warga emas' },
          { icon: Heart, text: 'Keluarga dengan anak kecil' },
          { icon: UserCheck, text: 'Masalah kesihatan biasa' }
        ]
      },
      'pap-smear': {
        subheading: 'Saringan awal kanser serviks untuk wanita',
        description: 'Pap smear adalah ujian mudah dan cepat untuk mengesan perubahan sel pada serviks (pangkal rahim) yang mungkin membawa kepada kanser serviks. Prosedur ini tidak menyakitkan dan sangat penting untuk kesihatan wanita. Kami lakukan dengan cara yang selesa dan privat.',
        whoIsThisFor: [
          { icon: Users, text: 'Wanita berumur 21 tahun ke atas' },
          { icon: Heart, text: 'Wanita yang aktif secara seksual' },
          { icon: UserCheck, text: 'Wanita yang prihatin kesihatan reproduktif' },
          { icon: Baby, text: 'Ibu yang ingin saringan rutin' }
        ]
      },
      'detail-scan-anomaly-scan': {
        subheading: 'Pemeriksaan struktur badan bayi oleh sonographer',
        description: 'Detail Scan atau Anomaly Scan adalah pemeriksaan menyeluruh struktur badan bayi yang dilakukan oleh sonographer bertauliah. Scan ini dapat kesan kecacatan struktur seperti masalah jantung, otak, tulang belakang dan organ dalaman. Biasanya dilakukan pada 18-22 minggu kehamilan.',
        whoIsThisFor: [
          { icon: Baby, text: 'Ibu mengandung 18-22 minggu' },
          { icon: Heart, text: 'Kehamilan berisiko tinggi' },
          { icon: Users, text: 'Ibu dengan sejarah keluarga kecacatan' },
          { icon: UserCheck, text: 'Pemeriksaan struktur menyeluruh' }
        ]
      },
      'nt-scan-down-syndrome': {
        subheading: 'Saringan risiko sindrom Down pada awal kehamilan',
        description: 'NT Scan (Nuchal Translucency) adalah ujian saringan untuk menilai risiko bayi mengalami sindrom Down dan kecacatan kromosom lain. Dilakukan pada 11-14 minggu kehamilan dengan mengukur ketebalan cecair di belakang tengkuk bayi. Prosedur ini dilakukan oleh sonographer yang terlatih khas.',
        whoIsThisFor: [
          { icon: Baby, text: 'Ibu mengandung 11-14 minggu' },
          { icon: Heart, text: 'Ibu berumur 35 tahun ke atas' },
          { icon: Users, text: 'Pasangan dengan sejarah genetik' },
          { icon: UserCheck, text: 'Saringan risiko kromosom' }
        ]
      },
      'scan-gynae-masalah-rahim': {
        subheading: 'Pemeriksaan untuk kesan masalah rahim wanita',
        description: 'Scan Gynae adalah pemeriksaan ultrasound untuk mengesan masalah pada rahim, ovari dan organ reproduktif wanita seperti cyst ovari, fibroid, endometriosis, dan ketebalan dinding rahim. Pemeriksaan ini penting untuk diagnosis awal masalah ginekologi.',
        whoIsThisFor: [
          { icon: Users, text: 'Wanita dengan haid tidak teratur' },
          { icon: Heart, text: 'Wanita dengan sakit perut bawah' },
          { icon: UserCheck, text: 'Masalah kesuburan' },
          { icon: Baby, text: 'Pemeriksaan rutin kesihatan wanita' }
        ]
      },
      'masalah-keputihan-jangkitan-gbs': {
        subheading: 'Rawatan jangkitan faraj dan bakteria GBS',
        description: 'Rawatan untuk masalah keputihan yang tidak normal, gatal-gatal, dan jangkitan bakteria termasuk Group B Streptococcus (GBS) yang berbahaya untuk ibu mengandung. Kami sediakan ujian dan rawatan yang sesuai untuk memastikan kesihatan reproduktif yang optimum.',
        whoIsThisFor: [
          { icon: Users, text: 'Wanita dengan keputihan tidak normal' },
          { icon: Baby, text: 'Ibu mengandung dengan jangkitan' },
          { icon: Heart, text: 'Wanita dengan gatal-gatal faraj' },
          { icon: UserCheck, text: 'Saringan GBS semasa hamil' }
        ]
      },
      'masalah-penyusuan-bengkak-susu': {
        subheading: 'Bantuan penyusuan dan rawatan bengkak susu',
        description: 'Sokongan dan rawatan untuk ibu yang menghadapi masalah penyusuan seperti bengkak susu, saluran susu tersumbat, mastitis, dan kesukaran bayi menyusu. Dr Ely adalah Breastfeeding Specialist yang berpengalaman membantu ibu dalam perjalanan penyusuan.',
        whoIsThisFor: [
          { icon: Baby, text: 'Ibu baru yang menyusukan' },
          { icon: Heart, text: 'Ibu dengan bengkak susu' },
          { icon: Users, text: 'Masalah perlekatan bayi' },
          { icon: UserCheck, text: 'Sokongan penyusuan eksklusif' }
        ]
      },
      'saringan-kanser': {
        subheading: 'Saringan menyeluruh kanser wanita',
        description: 'Program saringan komprehensif untuk mengesan kanser payudara, ovari, dan serviks pada peringkat awal. Termasuk pemeriksaan klinikal, ultrasound, dan ujian makmal yang diperlukan. Saringan awal adalah kunci untuk rawatan yang berkesan.',
        whoIsThisFor: [
          { icon: Users, text: 'Wanita berumur 40 tahun ke atas' },
          { icon: Heart, text: 'Wanita dengan sejarah keluarga kanser' },
          { icon: UserCheck, text: 'Saringan kesihatan rutin' },
          { icon: Baby, text: 'Wanita yang prihatin kesihatan' }
        ]
      },
      'rawatan-eczema-kulit': {
        subheading: 'Rawatan kulit gatal, ruam dan ekzema',
        description: 'Rawatan untuk masalah kulit seperti ekzema, dermatitis, ruam, dan kulit gatal yang berulang. Kami sediakan diagnosis yang tepat dan rawatan yang sesuai untuk semua peringkat umur, termasuk bayi dan kanak-kanak yang sensitif.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi dengan kulit sensitif' },
          { icon: Users, text: 'Kanak-kanak dengan ekzema' },
          { icon: Heart, text: 'Dewasa dengan masalah kulit kronik' },
          { icon: UserCheck, text: 'Kulit gatal yang berulang' }
        ]
      },
      'rawatan-diabetes-kolesterol-darah-tinggi': {
        subheading: 'Kawal penyakit kronik dengan pemeriksaan berkala',
        description: 'Pengurusan dan pemantauan penyakit kronik seperti diabetes, kolesterol tinggi, dan hipertensi. Kami sediakan ujian darah, nasihat diet, ubat-ubatan, dan pemeriksaan berkala untuk memastikan penyakit anda terkawal dengan baik.',
        whoIsThisFor: [
          { icon: Users, text: 'Pesakit diabetes' },
          { icon: Heart, text: 'Individu dengan kolesterol tinggi' },
          { icon: UserCheck, text: 'Pesakit darah tinggi' },
          { icon: Baby, text: 'Pemeriksaan kesihatan rutin' }
        ]
      },
      'rawatan-gout-sendi': {
        subheading: 'Rawatan sakit sendi dan uric acid tinggi',
        description: 'Rawatan untuk gout (sakit sendi akibat uric acid tinggi), arthritis, dan masalah sendi lain. Kami sediakan ujian darah untuk tahap uric acid, ubat anti-radang, dan nasihat diet untuk mengawal dan mencegah serangan gout.',
        whoIsThisFor: [
          { icon: Users, text: 'Pesakit gout kronik' },
          { icon: Heart, text: 'Individu dengan sakit sendi' },
          { icon: UserCheck, text: 'Uric acid tinggi' },
          { icon: Baby, text: 'Pencegahan masalah sendi' }
        ]
      },
      'cuci-luka': {
        subheading: 'Pembersihan luka untuk sembuh cepat dan selamat',
        description: 'Perkhidmatan pembersihan dan rawatan luka untuk memastikan penyembuhan yang optimum dan mencegah jangkitan. Termasuk rawatan luka kecil, luka kronik, dan penjagaan selepas pembedahan dengan teknik steril yang betul.',
        whoIsThisFor: [
          { icon: Users, text: 'Luka yang tidak kunjung sembuh' },
          { icon: Heart, text: 'Luka selepas pembedahan' },
          { icon: UserCheck, text: 'Pencegahan jangkitan luka' },
          { icon: Baby, text: 'Luka kecil dan calar' }
        ]
      },
      'cuci-telinga': {
        subheading: 'Telinga tersumbat? Kami bantu bersih dan legakan',
        description: 'Perkhidmatan pembersihan telinga yang selamat untuk mengeluarkan kotoran telinga yang keras dan tersumbat. Dilakukan dengan alat khas dan teknik yang betul untuk mengelakkan kecederaan pada gendang telinga.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi dengan kotoran telinga' },
          { icon: Users, text: 'Kanak-kanak dan dewasa' },
          { icon: Heart, text: 'Telinga tersumbat dan tidak selesa' },
          { icon: UserCheck, text: 'Pendengaran terganggu' }
        ]
      },
      'sedut-kahak': {
        subheading: 'Bantu pernafasan anak dengan sedutan kahak selamat',
        description: 'Prosedur untuk membantu bayi dan kanak-kanak yang mengalami kesukaran bernafas akibat kahak yang berlebihan. Dilakukan dengan alat khas yang selamat untuk membersihkan saluran pernafasan dan memudahkan pernafasan.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi dengan kahak berlebihan' },
          { icon: Users, text: 'Kanak-kanak dengan selsema' },
          { icon: Heart, text: 'Kesukaran bernafas akibat kahak' },
          { icon: UserCheck, text: 'Selepas sakit pernafasan' }
        ]
      },
      'rawatan-lelah-asma': {
        subheading: 'Rawatan nebulizer dan ubat untuk anak yang ada asma',
        description: 'Rawatan untuk masalah pernafasan seperti asma, bronkitis, dan lelah pada kanak-kanak. Kami sediakan rawatan nebulizer, ubat bronkodilator, dan nasihat pengurusan asma untuk memastikan anak dapat bernafas dengan selesa.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi dengan masalah pernafasan' },
          { icon: Users, text: 'Kanak-kanak asma' },
          { icon: Heart, text: 'Lelah dan batuk berulang' },
          { icon: UserCheck, text: 'Rawatan nebulizer' }
        ]
      },
      'masalah-penyusuan-pemakanan': {
        subheading: 'Panduan untuk bayi yang kurang menyusu atau makan',
        description: 'Sokongan dan rawatan untuk bayi yang mengalami masalah penyusuan, kurang makan, atau gangguan pemakanan. Termasuk penilaian pertumbuhan, nasihat pemakanan, dan strategi untuk meningkatkan selera makan bayi.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi yang kurang menyusu' },
          { icon: Users, text: 'Kanak-kanak susah makan' },
          { icon: Heart, text: 'Berat badan tidak naik' },
          { icon: UserCheck, text: 'Masalah pertumbuhan' }
        ]
      },
      'masalah-bayi-cirit-sembelit': {
        subheading: 'Rawatan sistem penghadaman bayi yang terganggu',
        description: 'Rawatan untuk masalah penghadaman bayi seperti cirit-birit, sembelit, kolik, dan masalah perut. Kami akan menilai punca masalah dan memberikan rawatan yang sesuai untuk memastikan sistem penghadaman bayi berfungsi dengan normal.',
        whoIsThisFor: [
          { icon: Baby, text: 'Bayi dengan cirit-birit' },
          { icon: Users, text: 'Bayi yang sembelit' },
          { icon: Heart, text: 'Masalah kolik dan perut kembung' },
          { icon: UserCheck, text: 'Gangguan penghadaman' }
        ]
      }
    };

    return serviceContent[slug] || {
      subheading: 'Rawatan berkualiti untuk kesihatan anda',
      description: 'Kami menyediakan rawatan yang komprehensif dan berkualiti tinggi untuk memastikan kesihatan dan keselamatan anda serta keluarga. Setiap prosedur dilakukan dengan teliti oleh doktor berpengalaman dalam suasana yang selesa dan mesra.',
      whoIsThisFor: [
        { icon: Users, text: 'Semua peringkat umur' },
        { icon: Heart, text: 'Keluarga yang prihatin kesihatan' },
        { icon: UserCheck, text: 'Mereka yang ingin rawatan berkualiti' },
        { icon: Baby, text: 'Ibu dan anak' }
      ]
    };
  };

  const content = getServiceContent(slug || '');

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Perkhidmatan', href: '/perkhidmatan' },
          { label: service.name, current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/perkhidmatan"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {service.name}
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
              {content.subheading}
            </p>

            {/* Image */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Tentang Perkhidmatan Ini
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Ultrasound Scan Types Section - Only for Ultrasound service */}
            {slug === 'ultrasound-scan-baby' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Jenis-Jenis Scan Ultrasound
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                  Kami menyediakan teknologi ultrasound terkini untuk memberikan pengalaman visual yang terbaik
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* 2D Scan */}
                  <div className="text-center">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-blue-50 to-blue-100">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/2D%20Scan.jpg"
                        alt="2D Ultrasound Scan"
                        className="w-full h-full object-cover"
                       loading="eager"
                        onError={(e) => {
                          console.error('2D Scan image failed to load');
                          // Keep the image element but show a background color
                          e.currentTarget.style.backgroundColor = '#dbeafe';
                          e.currentTarget.style.display = 'flex';
                          e.currentTarget.style.alignItems = 'center';
                          e.currentTarget.style.justifyContent = 'center';
                          e.currentTarget.innerHTML = '<div class="text-blue-600 font-semibold text-lg">2D Scan</div>';
                        }}
                       onLoad={() => console.log('2D Scan image loaded successfully')}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2D Scan</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Gambar hitam putih tradisional</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Pemeriksaan kesihatan asas bayi</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Ukur saiz dan perkembangan</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Sesuai untuk semua trimester</span>
                      </div>
                    </div>
                  </div>

                  {/* 3D Scan */}
                  <div className="text-center">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-pink-50 to-pink-100">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/3d%20scan.jpg"
                        alt="3D Ultrasound Scan"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100">
                              <div class="text-center">
                                <div class="text-6xl mb-4">🎭</div>
                                <div class="text-pink-600 font-semibold">3D Scan</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">3D Scan</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Gambar 3 dimensi yang jelas</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Lihat wajah bayi dengan detail</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Bonding awal ibu dan bayi</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Terbaik pada 26-32 minggu</span>
                      </div>
                    </div>
                  </div>

                  {/* 5D Scan */}
                  <div className="text-center">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-purple-50 to-purple-100">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/5d%20scan.webp"
                        alt="5D Ultrasound Scan"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
                              <div class="text-center">
                                <div class="text-6xl mb-4">✨</div>
                                <div class="text-purple-600 font-semibold">5D Scan</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">5D Scan</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Teknologi paling canggih</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Gambar realistik seperti foto</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Lihat pergerakan bayi secara live</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Pengalaman emosi yang mendalam</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Benefits */}
                <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    🌟 Kelebihan Scan di Klinik Kami
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">Doktor perempuan berpengalaman</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">Peralatan ultrasound terkini</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">Suasana selesa dan privat</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">Foto dan video untuk kenangan</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">Harga berpatutan dan transparan</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">Pasangan boleh hadir bersama</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Gender Reveal Section - Only for Scan Jantina Baby service */}
            {slug === 'scan-jantina-baby' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Jantina Bayi Anda
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                  Ketahui jantina bayi anda dengan tepat dan selamat melalui teknologi ultrasound terkini
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Baby Boy */}
                  <div className="text-center">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-blue-50 to-blue-100 relative">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Bayi%20Lelaki.jpeg"
                        alt="Baby Boy"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                              <div class="text-center">
                                <div class="text-6xl mb-4">👶🏻</div>
                                <div class="text-blue-600 font-semibold text-xl">Baby Boy</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      {/* Blue overlay for boy theme */}
                      <div className="absolute inset-0 bg-blue-500 bg-opacity-10"></div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-4">👦 Bayi Lelaki</h3>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Dapat dikesan seawal 16-18 minggu</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Ketepatan 95-99% selepas 18 minggu</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Persiapan nama dan keperluan bayi</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Baby Girl */}
                  <div className="text-center">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-pink-50 to-pink-100 relative">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/bayi%20perempuan.jpg"
                        alt="Baby Girl"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100">
                              <div class="text-center">
                                <div class="text-6xl mb-4">👶🏻</div>
                                <div class="text-pink-600 font-semibold text-xl">Baby Girl</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      {/* Pink overlay for girl theme */}
                      <div className="absolute inset-0 bg-pink-500 bg-opacity-10"></div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">👧 Bayi Perempuan</h3>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Dapat dikesan seawal 16-18 minggu</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Ketepatan 95-99% selepas 18 minggu</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Persiapan nama dan keperluan bayi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    ✨ Maklumat Penting Tentang Scan Jantina
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold">📅</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Masa Terbaik:</span>
                          <span className="text-gray-700 ml-1">18-22 minggu kehamilan</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Ketepatan:</span>
                          <span className="text-gray-700 ml-1">95-99% selepas 18 minggu</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-600 font-bold">🏥</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Prosedur:</span>
                          <span className="text-gray-700 ml-1">Selamat, tidak menyakitkan</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 font-bold">👨‍👩‍👧‍👦</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Keluarga:</span>
                          <span className="text-gray-700 ml-1">Pasangan boleh hadir bersama</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Eczema Treatment Testimonial Section - Only for Rawatan Eczema/Kulit service */}
            {slug === 'rawatan-eczema-kulit' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Hasil Rawatan Eczema Kami
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                  Lihat transformasi kulit pesakit kami sebelum dan selepas rawatan
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Before Treatment */}
                  <div className="text-center">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-red-50 to-orange-50 relative">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Eczema%20before.png"
                        alt="Sebelum Rawatan Eczema"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
                              <div class="text-center">
                                <div class="text-6xl mb-4">😔</div>
                                <div class="text-red-600 font-semibold text-xl">Sebelum Rawatan</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      {/* Red overlay for before theme */}
                      <div className="absolute inset-0 bg-red-500 bg-opacity-5"></div>
                    </div>
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-red-600 mb-4">😔 Sebelum Rawatan</h3>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Kulit merah dan berradang</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Gatal-gatal yang teruk</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Kulit kering dan mengelupas</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Tidak selesa dan menjejaskan tidur</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* After Treatment */}
                  <div className="text-center">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-green-50 to-emerald-50 relative">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Eczema%20selepas.png"
                        alt="Selepas Rawatan Eczema"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
                              <div class="text-center">
                                <div class="text-6xl mb-4">😊</div>
                                <div class="text-green-600 font-semibold text-xl">Selepas Rawatan</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      {/* Green overlay for after theme */}
                      <div className="absolute inset-0 bg-green-500 bg-opacity-5"></div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-green-600 mb-4">😊 Selepas Rawatan</h3>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Kulit kembali normal dan sihat</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Tiada lagi gatal-gatal</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Kulit lembut dan lembap</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Kualiti hidup yang lebih baik</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Treatment Information */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    ✨ Maklumat Rawatan Eczema
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold">⏱️</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Tempoh Rawatan:</span>
                          <span className="text-gray-700 ml-1">2-4 minggu untuk hasil optimum</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 font-bold">🎯</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Kadar Kejayaan:</span>
                          <span className="text-gray-700 ml-1">90% pesakit menunjukkan pembaikan</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-600 font-bold">🏥</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Rawatan:</span>
                          <span className="text-gray-700 ml-1">Selamat untuk semua umur</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 font-bold">👨‍⚕️</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Follow-up:</span>
                          <span className="text-gray-700 ml-1">Pemantauan berkala disediakan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Khitan Testimonial Section - Only for Khitan service */}
            {slug === 'khitan-sunat-bayi-perempuan' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Testimoni Ibu Bapa
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                  Pengalaman ibu bapa yang telah mempercayai kami untuk prosedur khitan anak mereka
                </p>

                <div className="max-w-2xl mx-auto">
                  {/* Testimonial Image */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-pink-50 to-rose-50">
                    <img
                      src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/sunat%20testimonial.jpeg"
                      alt="Testimoni Khitan"
                      className="object-bottom"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50">
                            <div class="text-center">
                              <div class="text-6xl mb-4">👶</div>
                              <div class="text-pink-600 font-semibold text-xl">Testimoni Khitan</div>
                              <div class="text-gray-500 text-sm mt-2">Prosedur yang selamat dan lembut</div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Prosedur Yang Selamat & Lembut
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Dilakukan oleh doktor perempuan berpengalaman</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Prosedur cepat dan tidak menyakitkan</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Suasana selesa dan mesra kanak-kanak</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">Penjagaan selepas prosedur yang lengkap</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                    ✨ Mengapa Pilih Kami Untuk Khitan
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-600 font-bold">👩‍⚕️</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Doktor Perempuan:</span>
                          <span className="text-gray-700 ml-1">Lebih selesa untuk bayi perempuan</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold">🏥</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Kemudahan:</span>
                          <span className="text-gray-700 ml-1">Peralatan steril dan moden</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 font-bold">⏱️</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Masa:</span>
                          <span className="text-gray-700 ml-1">Prosedur pantas dalam 10-15 minit</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 font-bold">🤱</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Penjagaan:</span>
                          <span className="text-gray-700 ml-1">Panduan lengkap selepas prosedur</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Ultrasound Scan Testimonial Section - Only for Ultrasound Scan Baby service */}
            {slug === 'ultrasound-scan-baby' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Momen Indah Bersama Bayi Anda
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                  Lihat kegembiraan ibu bapa yang telah melihat si manja mereka buat kali pertama di klinik kami.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Testimonial Photo 1 */}
                  <div className="text-center">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-pink-50 to-purple-50 relative">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Ultrasound%20Test%201.png"
                        alt="Ibu Bapa Gembira dengan Scan Bayi"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
                              <div class="text-center">
                                <div class="text-6xl mb-4">💖</div>
                                <div class="text-pink-600 font-semibold text-xl">Momen Pertama</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      <div className="absolute inset-0 bg-pink-500 bg-opacity-5"></div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Pengalaman Tak Ternilai</h3>
                      <p className="text-gray-700">
                        "Sangat teruja dapat melihat bayi kami dengan jelas melalui scan 5D. Doktor sangat sabar dan menjelaskan setiap detail. Terima kasih Klinik Perdana Tumpat!"
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Photo 2 */}
                  <div className="text-center">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-blue-50 to-green-50 relative">
                      <img
                        src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Service%20Image/Ultrasound%20Test%202.png"
                        alt="Keluarga Bahagia dengan Ultrasound Scan"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                              <div class="text-center">
                                <div class="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                                <div class="text-blue-600 font-semibold text-xl">Keluarga Bahagia</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      <div className="absolute inset-0 bg-blue-500 bg-opacity-5"></div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Sangat Disyorkan!</h3>
                      <p className="text-gray-700">
                        "Klinik ini sangat selesa dan mesra keluarga. Kami dapat melihat pergerakan bayi kami secara langsung. Pengalaman yang sangat berharga untuk kami sekeluarga."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Who is this for */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Sesuai Untuk Siapa?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {content.whoIsThisFor.map((item: any, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-pink-50 rounded-xl">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-pink-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Appointment Button */}
            <div className="text-center">
              <a
                href="https://wa.me/60124435660?text=Hi%2C%20saya%20berminat%20untuk%20buat%20temujanji%20untuk%20rawatan%20ini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Tempah Temujanji Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;