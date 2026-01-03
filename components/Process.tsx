
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Auditoría de Ventas",
      description: "Analizamos tu funnel actual, scripts y CRM para identificar fugas de leads y cuellos de botella."
    },
    {
      number: "02",
      title: "Entrenamiento del Agente",
      description: "Clonamos el conocimiento de tus mejores vendedores e inyectamos la lógica de cierre de Human Agents."
    },
    {
      number: "03",
      title: "Integración de Sistemas",
      description: "Conectamos con WhatsApp, Instagram y tu CRM (Hubspot, Pipedrive, etc.) de forma invisible."
    },
    {
      number: "04",
      title: "Lanzamiento y Optimización",
      description: "El agente empieza a vender. Monitorizamos en tiempo real para ajustar scripts y maximizar ROI."
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold mb-4">El camino al <span className="text-blue-500">Escalado Masivo.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Implementamos tu agente en menos de 10 días, sin fricción para tu equipo actual.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-black font-jakarta text-slate-800 group-hover:text-blue-900/30 transition-colors mb-4">{step.number}</div>
              <h3 className="text-xl font-bold font-jakarta mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-slate-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
