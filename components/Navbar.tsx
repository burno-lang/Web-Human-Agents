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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button onClick={onGoHome} className="flex flex-col items-start hover:opacity-80 transition-opacity cursor-pointer leading-none">
          <span className="text-[1.4rem] font-extrabold font-jakarta tracking-tight text-[#003057] dark:text-white">HUMAN</span>
          <span className="text-[1.4rem] font-medium font-jakarta tracking-tight text-[#38BDF8]">AGENTS</span>
        </button>
        
        <div className="flex items-center gap-4">
          <a 
            href="#agenda" 
            onClick={(e) => {
              onGoHome();
            }}
            className="bg-[#38BDF8] hover:bg-sky-400 text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
          >
            Agendar Evaluación
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;