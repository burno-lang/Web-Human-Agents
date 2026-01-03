
import React from 'react';
import { X, Check } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold mb-8 leading-tight">
              Más barato que 1 Setter Junior. <br/>
              Rinde como <span className="text-teal-400">3 Seniors.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              “Si hoy perdés leads, tenés no-shows o tu CRM es un desastre, esto no es opcional. Con el mismo gasto en ads, te subimos agendas, asistencia y cierres sin contratar más personal.”
            </p>
            
            <ul className="space-y-4">
              {[
                "Garantía: Si no aumentamos conversaciones calificadas, no seguimos.",
                "Reducción del 30% en no-shows pre-call.",
                "Liberamos 6 horas/semana por vendedor.",
                "Entrenamiento basado en top closers del mercado."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-teal-400/20 blur-2xl rounded-3xl"></div>
            <div className="relative glass-card rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              <div className="p-6 bg-slate-800/50 border-b border-slate-700 font-bold font-jakarta flex justify-between">
                <span>Eficiencia Operativa</span>
                <span className="text-blue-400">Human Agents AI</span>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Tiempo de respuesta</span>
                  <span className="font-semibold">&lt; 30 Segundos</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[98%]"></div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <span className="text-slate-400">Consistencia en seguimiento</span>
                  <span className="font-semibold">Impecable 24/7</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 w-[100%]"></div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-slate-400">Costo vs Escalabilidad</span>
                  <span className="font-semibold">Lineal vs Exponencial</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[95%]"></div>
                </div>
              </div>
              <div className="p-6 bg-blue-600 text-center font-bold">
                Ahorro Estimado: +$15,000 / mes en Ops
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
