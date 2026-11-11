import React from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { BackgroundCanvas } from './components/BackgroundCanvas.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemsSection } from './components/ProblemsSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { IndustriesSection } from './components/IndustriesSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { DemonstrationsSection } from './components/DemonstrationsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#516B84] text-[#E6E5E4] selection:bg-[#E6E5E4] selection:text-[#516B84] relative">
        {/* Animated Architectural Canvas in strict Primary Blue & Ivory */}
        <BackgroundCanvas />

        {/* Global Top Navigation */}
        <Header />

        {/* Page Sections */}
        <main>
          <Hero />
          <ProblemsSection />
          <ServicesSection />
          <IndustriesSection />
          <ProcessSection />
          <DemonstrationsSection />
          <AboutSection />
          <FaqSection />
          <FinalCtaSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Direct Contact Modal */}
        <ContactModal />
      </div>
    </LanguageProvider>
  );
}
