import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [widgetError, setWidgetError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonial photos data
  const testimonialPhotos = [
    {
      id: 1,
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Testimonial/Testimonial%201.jpeg',
      alt: 'Testimonial Photo 1'
    },
    {
      id: 2,
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Testimonial/Testimonial%202.jpeg',
      alt: 'Testimonial Photo 2'
    },
    {
      id: 3,
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Testimonial/Testimonial%203.jpeg',
      alt: 'Testimonial Photo 3'
    },
    {
      id: 4,
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Testimonial/Testimonial%204.jpeg',
      alt: 'Testimonial Photo 4'
    },
    {
      id: 5,
      src: 'https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/Testimonial/Testimonial%205.jpeg',
      alt: 'Testimonial Photo 5'
    }
  ];

  useEffect(() => {
    // Load Elfsight platform script with error handling
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    
    script.onerror = () => {
      console.warn('Elfsight widget failed to load, showing fallback testimonials');
      setWidgetError(true);
    };

    document.head.appendChild(script);

    // Set a timeout to show fallback if widget doesn't load properly
    const timeout = setTimeout(() => {
      const widgetElement = document.querySelector('.elfsight-app-5daf228d-010e-40e9-9a0e-0d0efd361a1b');
      if (widgetElement && !widgetElement.innerHTML.trim()) {
        setWidgetError(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialPhotos.length) % testimonialPhotos.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialPhotos.length);
  };

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Fallback testimonials data
  const fallbackTestimonials = [
    {
      name: "Siti Aminah",
      rating: 5,
      text: "Perkhidmatan yang sangat baik dan doktor yang berpengalaman. Saya sangat berpuas hati dengan rawatan yang diberikan.",
      date: "2 minggu yang lalu"
    },
    {
      name: "Ahmad Rahman",
      rating: 5,
      text: "Klinik yang bersih dan kakitangan yang mesra. Masa menunggu tidak lama dan rawatan sangat berkesan.",
      date: "1 bulan yang lalu"
    },
    {
      name: "Fatimah Hassan",
      rating: 5,
      text: "Doktor sangat profesional dan menjelaskan dengan terperinci. Harga berpatutan dan hasil memuaskan.",
      date: "3 minggu yang lalu"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata Pesakit Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Baca review sebenar dari pesakit yang telah mendapat rawatan di klinik kami
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {!widgetError ? (
            /* Elfsight Google Reviews Widget */
            <div 
              className="elfsight-app-5daf228d-010e-40e9-9a0e-0d0efd361a1b" 
              data-elfsight-app-lazy
            ></div>
          ) : (
            /* Fallback testimonials */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fallbackTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-600 mr-3" />
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* Testimonial Photo Carousel Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Testimoni Pesakit Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
            </div>
            {/* Testimonial Grid */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                {testimonialPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onLoad={() => console.log(`Testimonial image ${index + 1} loaded successfully`)}
                        onError={(e) => console.error(`Testimonial image ${index + 1} failed to load:`, e)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {widgetError && (
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Mengalami masalah memuat review? Sila hubungi kami untuk maklumat lanjut.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;