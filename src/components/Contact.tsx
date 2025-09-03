import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    telefon: '',
    rawatan: '',
    tarikh: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Send data to webhook first
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
          message: formData.message,
          timestamp: new Date().toISOString(),
          form_source: 'homepage_appointment_form'
        }),
      });
      
      // Always proceed with WhatsApp regardless of webhook success
      // Create WhatsApp message
      const whatsappMessage = `Assalamualaikum, saya ingin membuat temujanji:
        
Nama: ${formData.nama}
No. Telefon: ${formData.telefon}
Jenis Rawatan: ${formData.rawatan}
Tarikh Pilihan: ${formData.tarikh}
Mesej: ${formData.message}

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
        message: ''
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

  return (
    <>
      {/* Contact Information Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kami sedia membantu anda. Hubungi kami untuk sebarang pertanyaan atau maklumat lanjut.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Address */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg border border-pink-100 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Alamat</h3>
              <p className="text-gray-600 mb-2">
                Pt 3597, Viana Business Park, Jalan Dato Keramat, Bandar Tumpat<br />
                16200 Tumpat, Kelantan
              </p>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mt-4">
                <p className="text-pink-700 text-sm font-medium">
                  📍 Berhadapan Klinik Kesihatan Tumpat<br />
                  🏦 Bersebelahan Agro Bank Tumpat
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Telefon</h3>
              <a
                href="tel:+60972607666"
                className="text-blue-500 hover:text-blue-600 transition-colors font-medium text-xl"
              >
                09-726 0766
              </a>
            </div>

            {/* Operating Hours */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg border border-green-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Waktu Operasi</h3>
              <p className="text-gray-600 font-medium">
                Ahad - Sabtu<br />
                9:00 AM - 10:30 PM
              </p>
            </div>
          </div>

          {/* Clinic Exterior Image */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat/About%20Us/sign%20board.jpeg"
                alt="Klinik Perdana Tumpat - Exterior View"
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Google Map */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.127248681626!2d102.1643532!3d6.189101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6ad350bb7633b%3A0x427362fd8cb130a4!2sKlinik%20Perdana%20Tumpat!5e0!3m2!1sen!2smy!4v1750636910029!5m2!1sen!2smy"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
                title="Klinik Perdana Tumpat Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tempah Temujanji / Hubungi Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Isi borang di bawah untuk buat temujanji atau tanya soalan — kami akan hubungi anda semula secepat mungkin.
            </p>
          </div>

          {/* Centered Single-Column Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-pink-100">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Contoh: 012-3456789"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="rawatan" className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Rawatan (Pilihan)
                  </label>
                  <select
                    id="rawatan"
                    name="rawatan"
                    required
                    value={formData.rawatan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  >
                    <option value="">Sila pilih rawatan</option>
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
                    Tarikh Dikehendaki
                  </label>
                  <input
                    type="date"
                    id="tarikh"
                    name="tarikh"
                    value={formData.tarikh}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="Pilih tarikh"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesej Tambahan (Pilihan)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none"
                    placeholder="Contoh: Saya ingin jumpa doktor perempuan."
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
                  <span>{isSubmitting ? 'Menghantar...' : 'Tempah Sekarang'}</span>
                </button>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700 font-medium">
                      Terima kasih! Kami akan hubungi anda secepat mungkin untuk sahkan temujanji anda.
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

          {/* WhatsApp Alternative */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Atau hubungi kami terus melalui WhatsApp:</p>
            <a
              href="https://wa.me/60124435660?text=Hi%2C%20saya%20berminat%20untuk%20buat%20temujanji%20di%20klinik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover:scale-105 transition-transform"
            >
              <img
                src="https://yvoshetqcpgpbpluheqq.supabase.co/storage/v1/object/public/image-klinik-perdana-tumpat//Chat%20on%20Whatsapp.png"
                alt="WhatsApp Sekarang"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;