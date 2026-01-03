
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
            Agentes Entrenados por Top Closers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-jakarta font-extrabold tracking-tight mb-8 leading-tight">
            Vende más y escala con <span className="gradient-text">Human Agents</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Atiende leads 24/7, agenda citas calificadas y automatiza tu CRM. 
            <span className="text-slate-200"> Deja que la IA haga el trabajo pesado mientras tu equipo cierra ventas.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#agenda" 
              className="group flex items-center justify-center gap-2 bg-[#38BDF8] hover:bg-sky-400 text-slate-950 px-10 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-sky-500/20"
            >
              Agendar Evaluación Gratuita
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">+30%</div>
              <div className="text-slate-500 text-sm mt-1">Más citas agendadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">0s</div>
              <div className="text-slate-500 text-sm mt-1">Tiempo de respuesta</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">100%</div>
              <div className="text-slate-500 text-sm mt-1">CRM Actualizado</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">-6h</div>
              <div className="text-slate-500 text-sm mt-1">Admin semanal/vendedor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
