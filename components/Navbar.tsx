
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onGoHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button onClick={onGoHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white">H</div>
          <span className="text-xl font-bold font-jakarta tracking-tight">HUMAN<span className="text-blue-500">AGENTS</span></span>
        </button>
        
        <div className="flex items-center gap-4">
          <a 
            href="#agenda" 
            onClick={(e) => {
              // Ensure we scroll to agenda even if on legal page, by going home first if needed
              onGoHome();
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Agendar Evaluación
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
