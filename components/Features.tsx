
import React from 'react';
import { MessageSquare, Calendar, RefreshCcw, Database, ShieldCheck, CreditCard } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Omnicanalidad Reactiva",
      description: "Atiende todos los leads en WhatsApp e Instagram en menos de 30 segundos, con el tono y conocimiento de un closer experto.",
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Setter de Alta Conversión",
      description: "Califica prospectos y agenda llamadas directamente en tu calendario. Identifica al cliente ideal y descarta curiosos.",
      icon: <Calendar className="w-6 h-6 text-teal-400" />
    },
    {
      title: "Reducción de No-Shows",
      description: "Seguimiento inteligente pre-call que reduce el absentismo entre un 20% y 30% mediante recordatorios estratégicos.",
      icon: <RefreshCcw className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "CRM Autogestionado",
      description: "Mantiene el CRM limpio sin esfuerzo humano. Rellena campos, crea negocios y genera reportes diarios automáticamente.",
      icon: <Database className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Asistente Post-Llamada",
      description: "Analiza la reunión, ofrece feedback de mejora al equipo y gestiona objeciones post-llamada para empujar el cierre.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Cierre y Cobro",
      description: "Persigue el pago hasta cobrar. Reconoce capturas de pantalla, transferencias y confirma la entrada de capital.",
      icon: <CreditCard className="w-6 h-6 text-sky-400" />
    }
  ];

  return (
    <section id="soluciones" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold mb-4">Un equipo de ventas élite, <br/><span className="text-blue-500">dentro de tu software.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Nuestros agentes no solo responden; ejecutan todo el proceso comercial de punta a punta.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-slate-800/50 transition-all border border-slate-800 group">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-jakarta mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
