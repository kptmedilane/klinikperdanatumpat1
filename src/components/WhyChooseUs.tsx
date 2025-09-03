import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const items = [
    {
      emoji: '👶',
      title: 'Fokus Pada Ibu & Bayi',
      content: 'Kami pakar dalam penjagaan ibu mengandung, bayi & wanita — dari awal kehamilan hingga kelahiran.'
    },
    {
      emoji: '✅',
      title: 'Doktor Perempuan Disediakan',
      content: 'Ramai pesakit lebih selesa dirawat oleh doktor wanita — kami sediakan pilihan ini untuk anda.'
    },
    {
      emoji: '🚀',
      title: 'Perkhidmatan Mesra & Cepat',
      content: 'Tak perlu tunggu lama. WhatsApp kami dulu untuk tempahan atau walk-in terus.'
    },
    {
      emoji: '📍',
      title: 'Klinik Tempatan di Tumpat',
      content: 'Kami faham keperluan komuniti di Kelantan. Klinik kami mudah diakses & selesa untuk seisi keluarga.'
    },
    {
      emoji: '⭐',
      title: 'Berdaftar & Dipercayai',
      content: 'Ramai ibu bersalin & keluarga yang puas hati dengan layanan kami. Semak review Google!'
    },
    {
      emoji: '🛡️',
      title: 'Suasana Selesa & Privasi Terjaga',
      content: 'Ruang rawatan tenang, selesa dan sesuai untuk wanita & ibu mengandung.'
    }
  ];

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kenapa Ramai Pilih Klinik Kami?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rawatan penuh perhatian, suasana selesa — untuk ibu, anak & seluruh keluarga anda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-pink-50/50 transition-colors text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl sm:text-3xl">{item.emoji}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {activeItem === index ? (
                    <ChevronUp className="w-6 h-6 text-pink-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {activeItem === index && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-pink-100">
                  <div className="pt-4 sm:pt-6">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-12 sm:pl-16">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;