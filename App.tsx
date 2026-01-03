
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LegalContent, { LegalType } from './components/LegalContent';

function App() {
  const [view, setView] = useState<'home' | LegalType>('home');

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleLegalClick = (type: LegalType) => {
    setView(type);
  };

  const handleGoHome = () => {
    setView('home');
  };

  return (
    <div className="min-h-screen">
      <Navbar onGoHome={handleGoHome} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Features />
            <Comparison />
            <Process />
            <ContactForm />
          </>
        ) : (
          <LegalContent type={view} onBack={handleGoHome} />
        )}
      </main>
      
      <Footer onLegalClick={handleLegalClick} />
    </div>
  );
}

export default App;
