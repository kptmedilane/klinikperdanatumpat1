import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import ClinicEnvironment from '../components/ClinicEnvironment';
import Testimonials from '../components/Testimonials';
import OurPanel from '../components/OurPanel';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Doctors />
      <Testimonials />
      <ClinicEnvironment />
      <OurPanel />
      <Contact />
    </main>
  );
};

export default HomePage;