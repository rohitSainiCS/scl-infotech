import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import LendingSolutions from '../components/LendingSolutions';
import DecisionAutomation from '../components/DecisionAutomation';
import ClientsSlider from '../components/ClientsSlider';
import OurTeam from '../components/OurTeam';
// import Feedback from '../components/Feedback';
import FAQ from '../components/FAQ';
import CareersSection from '../components/CareersSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* ✅ NEW: Stats Section */}
        {/* <section id="stats">
          <StatsSection />
        </section> */}

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Lending Solutions Section */}
        <section id="lending-solutions">
          <LendingSolutions />
        </section>

        {/* Decision Automation Section */}
        <section id="decision-automation">
          <DecisionAutomation />
        </section>

        {/* Our Team Section */}
        <section id="team">
          <OurTeam />
        </section>

        {/* Feedback Section */}
        {/* <section id="feedback">
          <Feedback />
        </section> */}

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Clients Slider Section */}
        <section id="clients">
          <ClientsSlider />
        </section>

        {/* Careers Section */}
        <section id="careers">
          <CareersSection />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
