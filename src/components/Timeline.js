import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      date: '1950-04',
      title: 'Proyecto BLUEBIRD',
      description: 'La CIA establece el Proyecto BLUEBIRD, el primer programa sistemático para explorar técnicas de interrogatorio especial y control mental. Se crean equipos de interrogación que utilizan polígrafo, drogas e hipnosis.',
      details: 'El Director de la CIA Roscoe Hillenkoetter aprueba el proyecto con un presupuesto de $65,515. Los equipos incluyen psiquiatras, técnicos de polígrafo e hipnotistas.'
    },
    {
      date: '1951-08',
      title: 'Proyecto ARTICHOKE',
      description: 'BLUEBIRD es renombrado como ARTICHOKE. El proyecto se expande para incluir el desarrollo de métodos para extraer información de sujetos resistentes mediante drogas y técnicas psicológicas.',
      details: 'Se documentan las primeras aplicaciones exitosas de interrogatorio narco-hipnótico en agentes rusos sospechosos de ser doble agentes.'
    },
    {
      date: '1953-04',
      title: 'Creación de MK-ULTRA',
      description: 'Allen Dulles, director de la CIA, autoriza oficialmente el programa MK-ULTRA bajo la dirección de Sidney Gottlieb. El objetivo: desarrollar capacidades en el uso encubierto de materiales biológicos y químicos.',
      details: 'El programa es estructurado con exenciones financieras especiales que permiten iniciar proyectos sin contratos escritos ni supervisión normal.'
    },
    {
      date: '1953-11',
      title: 'Caso Frank Olson',
      description: 'Frank Olson, científico del ejército que trabajaba con la CIA, muere tras caer de un edificio de 10 pisos en Nueva York. Días antes había sido drogado con LSD sin su conocimiento por Sidney Gottlieb.',
      details: 'La muerte fue inicialmente reportada como suicidio, pero surgieron serias dudas sobre las circunstancias. Olson compartía habitación con Robert Lashbrook de la CIA esa noche. Su familia cuestionó la versión oficial durante décadas.'
    },
    {
      date: '1954',
      title: 'Georgetown University Hospital',
      description: 'La CIA financia parcialmente la construcción del anexo Gorman del Georgetown University Hospital. A cambio, obtiene acceso a un sexto del edificio para experimentos y una reserva de pacientes y voluntarios.',
      details: 'El Fondo Geschickter sirve como intermediario para ocultar la participación de la CIA. Esto proporciona una instalación hospitalaria clandestina para investigación sensible.'
    },
    {
      date: '1957-1964',
      title: 'Experimentos de Ewen Cameron',
      description: 'El Dr. Donald Ewen Cameron conduce experimentos extremos en el Allan Memorial Institute de Montreal. Utiliza "conducción psíquica", electroshocks intensivos y dosis masivas de drogas en pacientes psiquiátricos.',
      details: 'Los experimentos de Cameron intentaban "borrar" la mente de los pacientes mediante privación sensorial, electroshocks repetidos y dosis masivas de LSD, y luego "reprogramarlas". Muchas víctimas sufrieron daño psicológico permanente.'
    },
    {
      date: '1963',
      title: 'Informe del Inspector General',
      description: 'El Inspector General de la CIA, John Earman, emite un informe crítico sobre MK-ULTRA. Recomienda terminar los experimentos en ciudadanos estadounidenses sin consentimiento informado.',
      details: 'El informe documenta que para 1963 no se había desarrollado ninguna "píldora de verdad", sedante efectivo o afrodisíaco operacional a pesar de años de investigación.'
    },
    {
      date: '1964',
      title: 'Reducción del Programa',
      description: 'MK-ULTRA es oficialmente reducido y reorganizado como MK-SEARCH, enfocándose más en el desarrollo de capacidades operacionales que en investigación básica.',
      details: 'Aunque el programa continúa en forma modificada, la escala de experimentación humana se reduce significativamente.'
    },
    {
      date: '1973-01',
      title: 'Destrucción de Archivos',
      description: 'Richard Helms, director de la CIA, ordena la destrucción de la mayoría de los archivos de MK-ULTRA. Sidney Gottlieb supervisa la eliminación de documentos relacionados con el programa.',
      details: 'Esta destrucción deliberada de evidencia dificultó enormemente las investigaciones posteriores y la rendición de cuentas por abusos cometidos.'
    },
    {
      date: '1975',
      title: 'Revelación Pública',
      description: 'Un artículo del New York Times de Seymour Hersh revela las operaciones ilegales de la CIA. La Comisión Rockefeller y la Comisión Church del Senado comienzan a investigar MK-ULTRA.',
      details: 'El descubrimiento de documentos financieros que escaparon a la destrucción permite reconstruir parcialmente el alcance del programa.'
    },
    {
      date: '1977-08',
      title: 'Audiencias del Congreso',
      description: 'El Senado realiza audiencias públicas sobre MK-ULTRA. Sidney Gottlieb y otros oficiales de la CIA testifican. Se hace pública la magnitud de los experimentos en ciudadanos sin consentimiento.',
      details: 'Las audiencias revelan 149 subproyectos y la participación de universidades, hospitales y prisiones. El programa es condenado públicamente.'
    },
    {
      date: '1995',
      title: 'Disculpa Presidencial',
      description: 'El presidente Bill Clinton ofrece una disculpa formal a las víctimas de los experimentos gubernamentales no éticos, incluyendo MK-ULTRA. Se establecen comisiones para revisar protecciones de sujetos humanos.',
      details: 'Aunque simbólica, la disculpa reconoce oficialmente los abusos cometidos y el fracaso del gobierno en proteger a sus ciudadanos.'
    }
  ];

  return (
    <section id="cronologia" className="timeline">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Línea de Tiempo</h2>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <div className="timeline-dot"></div>
                <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-date">{event.date}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <button className="timeline-more">
                    {selectedEvent === index ? 'Leer menos' : 'Leer más'}
                  </button>
                  
                  <AnimatePresence>
                    {selectedEvent === index && (
                      <motion.div
                        className="timeline-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{event.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
