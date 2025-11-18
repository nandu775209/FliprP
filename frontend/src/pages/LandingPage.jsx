import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ClientsSection from '../components/ClientsSection';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      
      {/* Har section ko ID dein taku Navbar links kaam karein */}
      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="clients">
        <ClientsSection />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>

      <section id="subscribe">
        <Newsletter />
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;