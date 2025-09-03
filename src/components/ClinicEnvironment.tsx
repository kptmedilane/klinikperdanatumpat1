import React from 'react';
import { Heart } from 'lucide-react';

const ClinicEnvironment = () => {
  const images = [
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Counter.jpeg',
      alt: 'Counter'
    },
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Logo.jpeg',
      alt: 'Medicine Room'
    },
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Reading%20Area.jpeg',
      alt: 'Mini Playground'
    },
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Mini%20Playground.jpeg',
      alt: 'Nebulizer Area'
    },
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Waiting%20Area.jpeg',
      alt: 'Reading Area'
    },
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Medicine%20room.jpeg',
      alt: 'Toy Area'
    },
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Nebulizer%20Area.jpeg',
      alt: 'Waiting Area'
    },
    {
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/Toy.jpeg',
      alt: 'Ultrasound Room'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Suasana Klinik Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ruang yang selesa, bersih & mesra kanak-kanak — untuk keselesaan ibu, anak dan seluruh keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Caption Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-pink-100 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-pink-500" />
              <Heart className="w-4 h-4 text-pink-300" />
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Kami memahami kepentingan suasana yang selesa untuk kanak-kanak dan ibu bapa. 
              Klinik kami direka khas dengan ruang bermain, warna-warna ceria, dan suasana 
              yang tenang untuk memastikan pengalaman yang menyenangkan bagi seluruh keluarga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicEnvironment;