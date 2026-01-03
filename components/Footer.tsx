import React from 'react';

interface FooterProps {
  onLegalClick: (type: 'aviso' | 'privacidad' | 'cookies') => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="text-xl font-extrabold font-jakarta tracking-tight text-white">HUMAN</span>
            <span className="text-xl font-medium font-jakarta tracking-tight text-[#38BDF8]">AGENTS</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <button onClick={() => onLegalClick('aviso')} className="hover:text-white transition-colors cursor-pointer">Aviso Legal</button>
            <button onClick={() => onLegalClick('privacidad')} className="hover:text-white transition-colors cursor-pointer">Privacidad</button>
            <button onClick={() => onLegalClick('cookies')} className="hover:text-white transition-colors cursor-pointer">Cookies</button>
          </div>

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Human Agents. Transformando las ventas con IA.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;