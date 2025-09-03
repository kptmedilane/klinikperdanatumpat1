import React, { useEffect } from 'react';

const Doctors = () => {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      {/* Doctors Section */}
      <section id="doctors" className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Doktor Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Dipimpin oleh doktor perempuan berpengalaman dalam penjagaan ibu mengandung, bayi & keluarga — mesra, prihatin dan dipercayai ramai.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Doctor Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-pink-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Doctor Photo */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                    <img
                      src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Doctor%20Ely.jpeg"
                      alt="Dr Ely Fauziani"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="space-y-6 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Dr Ely Fauziani
                    </h3>
                    
                    {/* Qualifications Frame */}
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-4 mb-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Kelayakan Profesional:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-pink-500 mr-2">•</span>
                            <span>MBBS (India)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-pink-500 mr-2">•</span>
                            <span>Diploma Paediatrics (RCP Ireland)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-pink-500 mr-2">•</span>
                            <span>Breastfeeding Specialist (ANCC US)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Experience Points */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-pink-500 text-lg">❤️</span>
                      <p className="text-gray-700 text-base leading-relaxed">
                        Dikenali kerana layanan lembut & mesra ibu
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-pink-500 text-lg">🤰</span>
                      <p className="text-gray-700 text-base leading-relaxed">
                        Berpengalaman dalam kehamilan, kesuburan & penjagaan bayi
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-pink-500 text-lg">👶</span>
                      <p className="text-gray-700 text-base leading-relaxed">
                        Dipercayai ramai di Tumpat sejak 5 tahun lalu
                      </p>
                    </div>
                  </div>

                  {/* TikTok Button */}
                  <div className="pt-4">
                    <a
                      href="https://www.tiktok.com/@drelyperdana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span className="text-lg">🎥</span>
                      <span>Lihat Video Dr Ely di TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Video Pilihan Dr Ely
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Tips kehamilan & bersalin daripada doktor anda sendiri — ringkas, mudah & terus dari TikTok.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <div className="aspect-[9/16] max-w-sm mx-auto">
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@drelyperdana/video/7257024888135879937" 
                    data-video-id="7257024888135879937" 
                    style={{ maxWidth: '100%', minWidth: '325px' }}
                  > 
                    <section> 
                      <a 
                        target="_blank" 
                        title="@drelyperdana" 
                        href="https://www.tiktok.com/@drelyperdana?refer=embed"
                      >
                        @drelyperdana
                      </a> 
                      Perkongsian tips utk elak atau kurangkan terkoyak masa bersalin bersama Dr Ely
                    </section> 
                  </blockquote>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <div className="aspect-[9/16] max-w-sm mx-auto">
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@drelyperdana/video/7255896589359762690" 
                    data-video-id="7255896589359762690" 
                    style={{ maxWidth: '100%', minWidth: '325px' }}
                  > 
                    <section> 
                      <a 
                        target="_blank" 
                        title="@drelyperdana" 
                        href="https://www.tiktok.com/@drelyperdana?refer=embed"
                      >
                        @drelyperdana
                      </a> 
                      Betul ke seks mudahkan bersalin? Apa tips boleh diamalkan untuk mudahkan proses bersalin
                    </section> 
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <a
                href="https://www.tiktok.com/@drelyperdana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="text-xl">🎥</span>
                <span>Tonton Lebih Banyak Video</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;