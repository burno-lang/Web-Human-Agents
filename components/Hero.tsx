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
            Nueva Generación de Ventas IA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-jakarta font-extrabold tracking-tight mb-8 leading-tight">
            Agentes de IA que Venden Como <span className="gradient-text">Humanos</span>, Pero Sin Descansar.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Entrenados por top closers para agendar llamadas, automatizar tu CRM y cerrar ventas en WhatsApp e Instagram. 
            <span className="text-slate-200"> Tu equipo deja de perder 6 horas semanales en tareas administrativas.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#agenda" 
              className="group flex items-center justify-center gap-2 bg-[#38BDF8] hover:bg-sky-400 text-slate-950 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-sky-900/20"
            >
              Agendar Sesión de Evaluación
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#soluciones" 
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
            >
              Ver Soluciones
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">+30%</div>
              <div className="text-slate-500 text-sm mt-1">Asistencia a llamadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">24/7</div>
              <div className="text-slate-500 text-sm mt-1">Atención Inmediata</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">0s</div>
              <div className="text-slate-500 text-sm mt-1">Carga de CRM</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-jakarta text-white">100%</div>
              <div className="text-slate-500 text-sm mt-1">Follow-up Automático</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;