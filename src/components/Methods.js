import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Methods.css';

const Methods = () => {
  const [activeMethod, setActiveMethod] = useState(0);

  const methods = [
    {
      title: 'LSD y Drogas Psicoactivas',
      subtitle: 'El Arsenal Químico',
      description: 'El LSD (dietilamida del ácido lisérgico) fue el fármaco central de MK-ULTRA. La CIA trabajó con la empresa Eli Lilly para producir LSD en "cantidades de toneladas". Los experimentos involucraban dosis desde microgramos hasta cantidades masivas, administradas con y sin el conocimiento de los sujetos.',
      methods: [
        'Administración encubierta en bebidas',
        'Experimentos con dosis extremadamente altas',
        'Combinación con otras drogas (mescalina, psilocibina, escopolamina)',
        'Pruebas en prisioneros, pacientes psiquiátricos y ciudadanos comunes',
        'Uso de barbitúricos y anfetaminas para interrogatorios'
      ],
      impact: 'El Dr. Harris Isbell administró LSD a reclusos de la prisión federal de Lexington, Kentucky, durante hasta 77 días consecutivos. Muchos sujetos experimentaron episodios psicóticos, trastornos de estrés postraumático y daño psicológico permanente.',
      image: `${process.env.PUBLIC_URL}/images/Mkultra-lsd-doc.jpg`
    },
    {
      title: 'Electroshock Intensivo y "Conducción Psíquica"',
      subtitle: 'La Técnica de Cameron',
      description: 'El Dr. Donald Ewen Cameron desarrolló métodos extremos que combinaban electroshocks de alta intensidad con la reproducción repetida de mensajes grabados. Su objetivo era "borrar" la personalidad existente del paciente y reprogramarla.',
      methods: [
        'Page-Russell: electroshocks de 6 veces la intensidad normal',
        'Hasta 360 electroshocks en períodos cortos',
        '"Conducción psíquica": reproducir mensajes 16 horas al día durante semanas',
        'Inducción de coma con fármacos durante días o semanas',
        'Privación sensorial y aislamiento prolongado'
      ],
      impact: 'Los pacientes de Cameron perdieron recuerdos, habilidades básicas y su sentido de identidad. Muchos quedaron en estados similares a la infancia, incapaces de funcionar normalmente. Las víctimas y sus familias sufrieron trauma irreversible.',
      location: 'Allan Memorial Institute, Montreal, Canadá',
      image: `${process.env.PUBLIC_URL}/images/Allan_Memorial_Institute.jpg`
    },
    {
      title: 'Hipnosis y Manipulación Psicológica',
      subtitle: 'Control de la Mente Consciente',
      description: 'MK-ULTRA exploró extensamente el uso de hipnosis para crear estados de amnesia, sugestibilidad extrema y comportamiento controlado. Los investigadores buscaban crear "candidatos manchurianos" que pudieran realizar acciones sin recordarlas.',
      methods: [
        'Hipnosis combinada con drogas (narco-hipnosis)',
        'Creación de personalidades alternativas mediante trauma',
        'Sugestión post-hipnótica para olvidar eventos',
        'Experimentos de "mensajeros hipnóticos"',
        'Uso de hipnosis en interrogatorios'
      ],
      impact: 'Aunque los investigadores lograron crear estados hipnóticos profundos y amnesia temporal, nunca pudieron crear el control mental duradero y confiable que buscaban. Los sujetos sufrieron confusión mental, trastornos disociativos y trauma psicológico.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23151515" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="80" fill="none" stroke="%23c9a961" stroke-width="2" opacity="0.3"/%3E%3Ccircle cx="200" cy="150" r="60" fill="none" stroke="%23c9a961" stroke-width="2" opacity="0.5"/%3E%3Ccircle cx="200" cy="150" r="40" fill="none" stroke="%23c9a961" stroke-width="2" opacity="0.7"/%3E%3Ccircle cx="200" cy="150" r="20" fill="%23c9a961" opacity="0.9"/%3E%3C/svg%3E'
    },
    {
      title: 'Privación Sensorial y Aislamiento',
      subtitle: 'El Colapso Mental',
      description: 'Los investigadores estudiaron los efectos del aislamiento total y la privación sensorial en la psique humana. Querían determinar si podían "quebrar" la resistencia mental de un sujeto mediante el aislamiento extremo.',
      methods: [
        'Tanques de flotación en completa oscuridad y silencio',
        'Celdas de aislamiento sin estímulos',
        'Privación de sueño durante días',
        'Uso de máscaras y guantes para eliminar sensaciones',
        'Combinación con drogas y técnicas de desorientación'
      ],
      impact: 'Los sujetos experimentaron alucinaciones, desorientación temporal, ansiedad extrema y episodios psicóticos. Muchos desarrollaron trastornos psicológicos a largo plazo, incluyendo claustrofobia, paranoia y depresión severa.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23000" width="400" height="300"/%3E%3Crect x="150" y="100" width="100" height="100" fill="none" stroke="%23c9a961" stroke-width="2" opacity="0.5"/%3E%3C/svg%3E'
    },
    {
      title: 'Experimentos en "Casas Seguras"',
      subtitle: 'Operación Midnight Climax',
      description: 'George Hunter White dirigió casas seguras de la CIA en Nueva York y San Francisco donde se drogaba secretamente a ciudadanos desprevenidos. Las habitaciones estaban equipadas con espejos unidireccionales y equipos de grabación.',
      methods: [
        'Uso de prostitutas para atraer víctimas',
        'Administración encubierta de LSD en bebidas',
        'Observación y grabación del comportamiento',
        'Experimentos con afrodisíacos',
        'Pruebas de "sueros de la verdad"'
      ],
      impact: 'Decenas de ciudadanos estadounidenses fueron drogados sin su conocimiento ni consentimiento. Algunos experimentaron "malos viajes" extremos, episodios psicóticos y trauma duradero. La operación violó flagrantemente los derechos constitucionales y la ética médica.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23151515" width="400" height="300"/%3E%3Cpath d="M100,100 L150,150 L100,200 Z" fill="%23c9a961" opacity="0.3"/%3E%3Cpath d="M300,100 L250,150 L300,200 Z" fill="%23c9a961" opacity="0.3"/%3E%3Crect x="150" y="120" width="100" height="60" fill="%23c9a961" opacity="0.2"/%3E%3C/svg%3E'
    },
    {
      title: 'Radiación y Otros Métodos Extremos',
      subtitle: 'Experimentación sin Límites',
      description: 'MK-ULTRA no se limitó a drogas e hipnosis. Los investigadores exploraron una amplia gama de técnicas extremas, incluyendo el uso de radiación, cirugía cerebral y otros procedimientos invasivos.',
      methods: [
        'Experimentos con radiación en pacientes sin consentimiento',
        'Lobotomías y psicocirugía',
        'Uso de ultrasonidos en el cerebro',
        'Experimentos con ondas electromagnéticas',
        'Pruebas de sustancias tóxicas y venenos'
      ],
      impact: 'Estos experimentos causaron daño físico permanente, incluyendo lesiones cerebrales, cáncer y discapacidades neurológicas. Muchas víctimas nunca supieron que habían sido sujetos de experimentación gubernamental.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23151515" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="50" fill="none" stroke="%23c9a961" stroke-width="2" stroke-dasharray="5,5" opacity="0.4"/%3E%3Cline x1="200" y1="100" x2="200" y2="200" stroke="%23c9a961" stroke-width="1" opacity="0.3"/%3E%3Cline x1="150" y1="150" x2="250" y2="150" stroke="%23c9a961" stroke-width="1" opacity="0.3"/%3E%3C/svg%3E'
    }
  ];

  return (
    <section id="metodos" className="methods">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Métodos y Experimentos</h2>

          <div className="methods-tabs">
            {methods.map((method, index) => (
              <button
                key={index}
                className={`method-tab ${activeMethod === index ? 'active' : ''}`}
                onClick={() => setActiveMethod(index)}
              >
                {method.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMethod}
              className="method-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="method-grid">
                <div className="method-info">
                  <h3>{methods[activeMethod].title}</h3>
                  <p className="method-subtitle">{methods[activeMethod].subtitle}</p>
                  <p className="method-description">{methods[activeMethod].description}</p>

                  <div className="method-list">
                    <h4>Técnicas Utilizadas:</h4>
                    <ul>
                      {methods[activeMethod].methods.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {methods[activeMethod].location && (
                    <div className="method-location">
                      <strong>Ubicación Principal:</strong> {methods[activeMethod].location}
                    </div>
                  )}

                  <div className="method-impact">
                    <h4>Impacto en las Víctimas:</h4>
                    <p>{methods[activeMethod].impact}</p>
                  </div>
                </div>

                <div className="method-visual">
                  <img 
                    src={methods[activeMethod].image} 
                    alt={methods[activeMethod].title}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Methods;
