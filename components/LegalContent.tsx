
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export type LegalType = 'aviso' | 'privacidad' | 'cookies';

interface LegalContentProps {
  type: LegalType;
  onBack: () => void;
}

const LegalContent: React.FC<LegalContentProps> = ({ type, onBack }) => {
  const content = {
    aviso: {
      title: "Aviso Legal",
      body: (
        <div className="space-y-6 text-slate-300">
          <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
          <div>
            <h3 className="text-white font-bold mb-2">1. Datos Identificativos</h3>
            <p>El titular del dominio web es HUMAN AGENTS S.L. (en adelante, HUMAN AGENTS), con domicilio a estos efectos en Madrid, España. Correo electrónico de contacto: hola@humanagents.ai.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">2. Usuarios</h3>
            <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">3. Uso del Portal</h3>
            <p>Este sitio proporciona el acceso a multitud de informaciones, servicios o datos en Internet pertenecientes a HUMAN AGENTS. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">4. Tecnología de IA</h3>
            <p>HUMAN AGENTS informa que los servicios prestados utilizan modelos de Inteligencia Artificial para la interacción conversacional. HUMAN AGENTS no se hace responsable de las interpretaciones subjetivas que el usuario pueda derivar de estas interacciones automáticas, aunque se garantiza un entrenamiento basado en estándares de alta calidad profesional.</p>
          </div>
        </div>
      )
    },
    privacidad: {
      title: "Política de Privacidad",
      body: (
        <div className="space-y-6 text-slate-300">
          <p>HUMAN AGENTS está comprometida con la protección de la privacidad de sus usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos sus datos personales conforme al Reglamento General de Protección de Datos (RGPD).</p>
          <div>
            <h3 className="text-white font-bold mb-2">1. Responsable del Tratamiento</h3>
            <p>Identidad: HUMAN AGENTS S.L. - Correo: privacidad@humanagents.ai</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">2. Finalidad del Tratamiento</h3>
            <p>Tratamos la información que nos facilita con el fin de prestarle el servicio solicitado, realizar la gestión administrativa necesaria y, en caso de consentimiento, enviarle comunicaciones comerciales sobre nuestros servicios de IA en ventas.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">3. Conservación de Datos</h3>
            <p>Los datos se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">4. Legitimación</h3>
            <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado al completar el formulario de contacto o agendar una llamada.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">5. Destinatarios</h3>
            <p>Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal o sea necesario para la prestación del servicio (por ejemplo, proveedores de infraestructura en la nube o servicios de IA con los que HUMAN AGENTS mantiene acuerdos de confidencialidad).</p>
          </div>
        </div>
      )
    },
    cookies: {
      title: "Política de Cookies",
      body: (
        <div className="space-y-6 text-slate-300">
          <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>
          <div>
            <h3 className="text-white font-bold mb-2">1. Cookies utilizadas en este sitio web</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies técnicas:</strong> Son las más básicas y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada para la correcta gestión de los formularios de contacto.</li>
              <li><strong>Cookies de análisis:</strong> Son aquellas que, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">2. Desactivación o eliminación de cookies</h3>
            <p>En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">3. Notas adicionales</h3>
            <p>Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</p>
          </div>
        </div>
      )
    }
  };

  const activeContent = content[type];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Volver al Inicio
      </button>
      
      <h1 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-12 text-white">
        {activeContent.title}
      </h1>
      
      <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-800">
        {activeContent.body}
      </div>
      
      <div className="mt-12 text-center text-slate-500 text-sm">
        Última actualización: Mayo 2024
      </div>
    </div>
  );
};

export default LegalContent;
