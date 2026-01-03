
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="agenda" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[2rem] overflow-hidden border border-slate-700/50">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold mb-6">Agenda tu Sesión de Evaluación.</h2>
              <p className="text-blue-100 text-lg mb-8">
                Descubre cómo implementar un agente de IA que atienda a tus leads mientras duermes. 
                Sesión técnica gratuita de 15 min.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <div className="font-bold">Diagnóstico Funnel</div>
                    <div className="text-blue-200 text-sm">Detectamos fugas en tu proceso actual.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <div className="font-bold">Estimación ROI</div>
                    <div className="text-blue-200 text-sm">Cálculo de ahorro y aumento de agendas.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-16 bg-slate-900/80 backdrop-blur-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Nombre Completo</label>
                      <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Email Corporativo</label>
                      <input required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="juan@empresa.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">WhatsApp de Contacto</label>
                    <input required type="tel" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="+34 600 000 000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">¿Cuál es tu principal problema hoy?</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                      <option>Muchos leads, poco seguimiento</option>
                      <option>Alto % de No-Show en llamadas</option>
                      <option>CRM desactualizado/sucio</option>
                      <option>Necesito escalar sin contratar más gente</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2 group">
                    Agendar mi Sesión Ahora
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-center text-slate-500 text-xs">Sin compromiso. Evaluación 100% gratuita.</p>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-jakarta mb-4">¡Petición Recibida!</h3>
                  <p className="text-slate-400 mb-8">Un especialista de nuestro equipo te contactará por WhatsApp en las próximas horas para confirmar el horario.</p>
                  <button onClick={() => setSubmitted(false)} className="text-blue-400 hover:text-blue-300 font-medium">Volver a enviar</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
