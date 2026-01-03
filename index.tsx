
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  MessageSquare, 
  Calendar, 
  RefreshCcw, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  ChevronRight, 
  Check, 
  Send,
  Zap,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';

// --- COMPONENTES UNIFICADOS ---

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      {/* Navbar Simple */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold font-jakarta tracking-tighter">HUMAN</span>
            <span className="text-xl font-medium font-jakarta tracking-tighter text-sky-400">AGENTS</span>
          </div>
          <a href="#agenda" className="bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105">
            Agendar Evaluación
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Zap className="w-3 h-3 fill-current" /> Agentes entrenados por Top Closers
          </div>
          <h1 className="text-5xl md:text-7xl font-jakarta font-extrabold mb-8 leading-[1.1]">
            Vende más y escala con <span className="gradient-text">Human Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Atiende todos los leads en WhatsApp e Instagram. Agendamos llamadas, reducimos no-shows y automatizamos tu CRM para que solo te preocupes por cerrar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#agenda" className="group flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-sky-500/20">
              Agendar Evaluación Gratuita
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/50 pt-12">
            {[
              { val: "+30%", desc: "Más Agendas" },
              { val: "-6h", desc: "Admin Semanal" },
              { val: "24/7", desc: "Atención Leads" },
              { val: "-20%", desc: "No-Shows" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white font-jakarta">{stat.val}</div>
                <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sellpoints / Value Props */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold mb-6 leading-tight">
                “Con el mismo gasto en ads, <span className="text-sky-400">te subo agendas y cierres.”</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 italic">
                “Si hoy perdés leads, tenés no-shows o tu CRM es un desastre, esto no es opcional. Es más barato que contratar 1 setter junior y rinde como 3.”
              </p>
              <div className="space-y-4">
                {[
                  "Si no aumentamos conversaciones calificadas, no seguimos.",
                  "Reducimos no-show mínimo un 20–30% con seguimiento inteligente.",
                  "Tu equipo deja de perder 6 horas semanales en el CRM.",
                  "Perseguimos el pago hasta reconocer la captura o transferencia."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-sky-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-sky-400" /></div>
                    <p className="text-slate-200 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-8 rounded-3xl border-sky-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-sky-500/10 text-sky-400 text-xs font-bold rounded-bl-xl">GARANTÍA DE ROI</div>
              <h3 className="text-xl font-bold font-jakarta mb-6">Funciones del Agente:</h3>
              <ul className="space-y-4">
                {[
                  { icon: <MessageSquare className="w-5 h-5" />, t: "Atiende WhatsApp e Instagram" },
                  { icon: <Calendar className="w-5 h-5" />, t: "Agenda llamadas calificadas" },
                  { icon: <TrendingUp className="w-5 h-5" />, t: "Reduce no-shows automáticamente" },
                  { icon: <ShieldCheck className="w-5 h-5" />, t: "Asiste al closer post-llamada" },
                  { icon: <CreditCard className="w-5 h-5" />, t: "Persigue el pago hasta cobrar" },
                  { icon: <Database className="w-5 h-5" />, t: "Mantiene el CRM limpio sin esfuerzo" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <span className="text-sky-400">{item.icon}</span>
                    {item.t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="agenda" className="py-24 px-4">
        <div className="max-w-4xl mx-auto glass rounded-[2rem] overflow-hidden border-slate-700/50">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-sky-600 p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-jakarta font-extrabold mb-6 italic">Agenda tu Evaluación.</h2>
              <p className="text-sky-100 mb-8 font-medium">
                Sesión técnica gratuita de 15 min para diagnosticar tu funnel y calcular cuánto podrías estar ahorrando.
              </p>
              <div className="flex items-center gap-3 text-sm text-sky-200">
                <Clock className="w-4 h-4" /> <span>Respuesta en menos de 2h</span>
              </div>
            </div>
            <div className="md:col-span-3 p-8 md:p-12 bg-slate-900/50">
              {!submitted ? (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nombre Completo</label>
                    <input required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-sky-500 outline-none transition-all" placeholder="Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">WhatsApp / Email</label>
                    <input required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-sky-500 outline-none transition-all" placeholder="contacto@empresa.com" />
                  </div>
                  <button className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold py-4 rounded-lg flex items-center justify-center gap-2 transition-all">
                    SOLICITAR EVALUACIÓN <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-sky-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-jakarta mb-2">¡Recibido!</h3>
                  <p className="text-slate-400">Te contactaremos por WhatsApp hoy mismo.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-12 px-4 border-t border-slate-900 text-center">
        <div className="flex flex-col items-center mb-6 leading-none">
          <span className="text-sm font-extrabold font-jakarta tracking-tighter">HUMAN</span>
          <span className="text-sm font-medium font-jakarta tracking-tighter text-sky-400">AGENTS</span>
        </div>
        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Human Agents. IA de alto rendimiento para ventas.</p>
      </footer>
    </div>
  );
};

// Renderizado directo
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
