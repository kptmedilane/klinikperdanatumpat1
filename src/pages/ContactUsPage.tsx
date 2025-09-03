import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, Clock, MapPin, Send, CheckCircle, Calendar, Instagram, Facebook, Globe, Users, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    nama: '',
    telefon: '',
    rawatan: '',
    tarikh: '',
    pertanyaan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Send data to webhook
      await fetch('https://hook.eu2.make.com/foxwfnohpr518sgaftujsqxi6yg63q6y', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.nama,
          phone_number: formData.telefon,
          service_type: formData.rawatan,
          preferred_date: formData.tarikh,
          message: formData.pertanyaan,
          timestamp: new Date().toISOString(),
          form_source: 'contact_us_page'
        }),
      });
      
      // Create WhatsApp message
      const whatsappMessage = `Assalamualaikum, saya ingin hubungi klinik:

Nama: ${formData.nama}
No. Telefon: ${formData.telefon}
${formData.rawatan ? `Jenis Rawatan: ${formData.rawatan}` : ''}
${formData.tarikh ? `Tarikh Dikehendaki: ${formData.tarikh}` : ''}
Pertanyaan: ${formData.pertanyaan}

Terima kasih.`;
      
      const whatsappUrl = `https://wa.me/60124435660?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      // Set success status and reset form
      setSubmitStatus('success');
      setFormData({
        nama: '',
        telefon: '',
        rawatan: '',
        tarikh: '',
        pertanyaan: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '09-726 0766',
      link: 'tel:+60972607666',
      description: 'Hubungi kami terus untuk temujanji segera',
      bgColor: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat Sekarang',
      link: 'https://wa.me/60124435660?text=Hi%20saya%20ingin%20buat%20temujanji',
      description: 'Cara paling pantas untuk buat temujanji',
      bgColor: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Lokasi Kami',
      link: 'https://maps.google.com/?q=Klinik+Perdana+Tumpat',
      description: 'Lihat lokasi kami di Google Maps',
      bgColor: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/klinikperdanatumpat/',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: '#',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      name: 'TikTok',
      url: 'https://www.tiktok.com/@drelyperdana',
      color: 'from-gray-800 to-gray-900'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Doktor Perempuan',
      description: 'Layanan dari doktor wanita berpengalaman'
    },
    {
      icon: Shield,
      title: 'Privasi Terjamin',
      description: 'Suasana selesa dan privat untuk wanita'
    },
    {
      icon: Award,
      title: 'Dipercayai',
      description: '5.0★ rating dari 100+ pesakit'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Hubungi Kami', current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 via-white to-blue-50">
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
              Hubungi Kami
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Kami sedia bantu anda — sama ada untuk temujanji, pertanyaan atau maklumat lokasi.
            </p>

            {/* Quick Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${method.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <div className="text-gray-600 font-medium mb-2">
                    {method.title === 'Telefon' ? (
                      <div className="space-y-1">
                        <p>09-726 0766</p>
                        <p>012-443 5660</p>
                      </div>
                    ) : (
                      <p>{method.value}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Clinic Exterior Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/sign%20board.jpeg"
                alt="Klinik Perdana Tumpat - Sign Board"
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Location & Contact Info */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100 h-full">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    📍 Maklumat Klinik
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-pink-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat Lengkap</h3>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          <strong>Klinik Perdana Tumpat</strong><br />
                          Pt 3597, Viana Business Park<br />
                          Jalan Dato Keramat, Bandar Tumpat<br />
                          16200 Tumpat, Kelantan
                        </p>
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                          <p className="text-pink-700 text-sm font-medium">
                            🎯 <strong>Petunjuk Arah:</strong><br />
                            📍 Berhadapan Klinik Kesihatan Tumpat<br />
                            🏦 Bersebelahan Agro Bank Tumpat<br />
                            🚗 Parking percuma tersedia
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Waktu Operasi</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center bg-green-50 rounded-lg p-3">
                            <span className="font-medium text-gray-900">Ahad – Sabtu</span>
                            <span className="text-green-600 font-bold">9:00 AM – 10:30 PM</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            ⚠️ Cuti Umum: Sila hubungi terlebih dahulu<br />
                            📞 Walk-in welcome, tapi appointment lebih baik
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Mengapa Pilih Kami?</h3>
                      <div className="space-y-3">
                        {whyChooseUs.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-4 h-4 text-pink-500" />
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">{item.title}:</span>
                              <span className="text-gray-600 ml-1">{item.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Media */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                          >
                            <social.icon className="w-6 h-6" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Google Map */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full">
                  <div className="p-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                    <h3 className="text-lg font-semibold">📍 Lokasi Kami</h3>
                    <p className="text-pink-100 text-sm">Klik pada peta untuk navigasi</p>
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.127248681626!2d102.1643532!3d6.189101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6ad350bb7633b%3A0x427362fd8cb130a4!2sKlinik%20Perdana%20Tumpat!5e0!3m2!1sen!2smy!4v1750636910029!5m2!1sen!2smy"
                    width="100%" 
                    height="500" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[500px]"
                    title="Klinik Perdana Tumpat Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                📝 Borang Hubungi Kami
              </h2>
              <p className="text-lg text-gray-600">
                Isi borang di bawah dan kami akan hubungi anda secepat mungkin melalui WhatsApp.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Penuh *
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      required
                      value={formData.nama}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Contoh: Nur Aisyah binti Ahmad"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombor Telefon *
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      required
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Contoh: 012-345 6789"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service Type */}
                  <div>
                    <label htmlFor="rawatan" className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Rawatan (Pilihan)
                    </label>
                    <select
                      id="rawatan"
                      name="rawatan"
                      value={formData.rawatan}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    >
                      <option value="">Pilih jenis rawatan</option>
                      <option value="Ultrasound Scan Baby (2D/3D/5D)">Ultrasound Scan Baby (2D/3D/5D)</option>
                      <option value="Scan Perkembangan Baby">Scan Perkembangan Baby</option>
                      <option value="Scan Jantina Baby">Scan Jantina Baby</option>
                      <option value="Detail Scan / Anomaly Scan (oleh Sonographer)">Detail Scan / Anomaly Scan (oleh Sonographer)</option>
                      <option value="NT Scan (Down Syndrome Scan – oleh Sonographer)">NT Scan (Down Syndrome Scan – oleh Sonographer)</option>
                      <option value="Scan Gynae (Masalah Rahim Wanita)">Scan Gynae (Masalah Rahim Wanita)</option>
                      <option value="Buka Buku Mengandung (Buku Pink)">Buka Buku Mengandung (Buku Pink)</option>
                      <option value="Rawatan Kesuburan (TTC) / Ikhtiar Hamil">Rawatan Kesuburan (TTC) / Ikhtiar Hamil</option>
                      <option value="Rawatan Postnatal (Ibu Berpantang)">Rawatan Postnatal (Ibu Berpantang)</option>
                      <option value="Checkup Luka Bersalin">Checkup Luka Bersalin</option>
                      <option value="Pap Smear">Pap Smear</option>
                      <option value="Masalah Keputihan / Jangkitan GBS">Masalah Keputihan / Jangkitan GBS</option>
                      <option value="Masalah Penyusuan / Bengkak Susu">Masalah Penyusuan / Bengkak Susu</option>
                      <option value="Saringan Kanser (Payudara, Ovari, Serviks)">Saringan Kanser (Payudara, Ovari, Serviks)</option>
                      <option value="Checkup Bayi Selepas Kelahiran">Checkup Bayi Selepas Kelahiran</option>
                      <option value="Khitan (Sunat Bayi Perempuan)">Khitan (Sunat Bayi Perempuan)</option>
                      <option value="Ujian Jaundice / Kuning">Ujian Jaundice / Kuning</option>
                      <option value="Sedut Kahak">Sedut Kahak</option>
                      <option value="Rawatan Lelah / Asma">Rawatan Lelah / Asma</option>
                      <option value="Vaksinasi / Imunisasi">Vaksinasi / Imunisasi</option>
                      <option value="Masalah Penyusuan / Pemakanan Bayi">Masalah Penyusuan / Pemakanan Bayi</option>
                      <option value="Masalah Bayi Cirit / Sembelit">Masalah Bayi Cirit / Sembelit</option>
                      <option value="Rawatan Am (Demam, Batuk, Selsema, Tonsil)">Rawatan Am (Demam, Batuk, Selsema, Tonsil)</option>
                      <option value="Rawatan Eczema / Kulit">Rawatan Eczema / Kulit</option>
                      <option value="Rawatan Diabetes, Kolesterol & Darah Tinggi">Rawatan Diabetes, Kolesterol & Darah Tinggi</option>
                      <option value="Rawatan Gout / Sendi">Rawatan Gout / Sendi</option>
                      <option value="Cuci Luka">Cuci Luka</option>
                      <option value="Cuci Telinga">Cuci Telinga</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="tarikh" className="block text-sm font-medium text-gray-700 mb-2">
                      Tarikh Dikehendaki (Pilihan)
                    </label>
                    <input
                      type="date"
                      id="tarikh"
                      name="tarikh"
                      value={formData.tarikh}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Question */}
                <div>
                  <label htmlFor="pertanyaan" className="block text-sm font-medium text-gray-700 mb-2">
                    Pertanyaan / Mesej Anda *
                  </label>
                  <textarea
                    id="pertanyaan"
                    name="pertanyaan"
                    rows={5}
                    required
                    value={formData.pertanyaan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none"
                    placeholder="Contoh: Saya ingin buat temujanji untuk ultrasound scan. Saya ingin jumpa doktor perempuan."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-pink-500 text-white hover:bg-pink-600 transform hover:scale-105'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Menghantar...' : 'Hantar Mesej'}</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Borang ini akan menghantar mesej WhatsApp kepada kami untuk respons yang lebih pantas.
                </p>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700 font-medium">
                      Terima kasih! Kami akan hubungi anda secepat mungkin melalui WhatsApp.
                    </p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-yellow-500" />
                    <p className="text-yellow-700 font-medium">
                      Borang telah dibuka di WhatsApp sebagai alternatif. Sila hantar mesej tersebut.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-500 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Masih ada pertanyaan? Kami sedia membantu!
            </h2>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Hubungi kami sekarang untuk mendapatkan maklumat lanjut atau buat temujanji. 
              Kami komited untuk memberikan layanan terbaik untuk anda dan keluarga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/60124435660?text=Hi%2C%20saya%20ada%20pertanyaan%20tentang%20klinik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Kami</span>
              </a>
              
              <a
                href="https://wa.me/60124435660?text=Hi%2C%20saya%20ingin%20buat%20temujanji%20di%20klinik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-pink-400 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-6 h-6" />
                <span>Tempah Temujanji</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;