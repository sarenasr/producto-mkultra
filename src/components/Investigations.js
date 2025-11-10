import React from 'react';
import { motion } from 'framer-motion';
import './Investigations.css';

const Investigations = () => {
  const investigations = [
    {
      year: '1975',
      title: 'Comisión Rockefeller',
      description: 'El presidente Gerald Ford estableció la Comisión Rockefeller para investigar actividades ilegales de la CIA. La comisión reveló experimentos con LSD en ciudadanos estadounidenses sin su consentimiento.',
      findings: [
        'Confirmó administración de drogas a ciudadanos sin conocimiento',
        'Documentó la muerte de Frank Olson',
        'Recomendó mayor supervisión de la CIA'
      ],
      icon: '🏛️'
    },
    {
      year: '1975-1976',
      title: 'Comité Church',
      description: 'El Comité Church del Senado realizó una investigación exhaustiva de las operaciones de inteligencia de EE.UU., incluyendo MK-ULTRA. Fue la primera exposición pública detallada del programa.',
      findings: [
        'Reveló 149 subproyectos de MK-ULTRA',
        'Documentó experimentación en ciudadanos desprevenidos',
        'Expuso vínculos con instituciones académicas y médicas',
        'Reveló la destrucción de documentos en 1973'
      ],
      icon: '📋'
    },
    {
      year: '1977',
      title: 'Audiencias del Senado de 1977',
      description: 'El senador Ted Kennedy presidió audiencias específicas sobre MK-ULTRA. El director de la CIA, Almirante Stansfield Turner, testificó después del descubrimiento de 20,000 documentos previamente no destruidos.',
      findings: [
        'Confirmó 149 subproyectos entre 1953 y 1964',
        'Reveló experimentos en 44 universidades y colegios',
        'Documentó 15 instituciones de investigación involucradas',
        'Confirmó 12 hospitales y 3 prisiones como sitios de experimentos',
        'Expuso uso de fundaciones y empresas como fachadas'
      ],
      quote: '"El Vicedirector de la CIA reveló que más de treinta universidades e instituciones estuvieron involucradas en un programa de pruebas e investigación que incluía pruebas encubiertas de drogas en sujetos humanos no voluntarios."',
      icon: '⚖️'
    },
    {
      year: '1984-1988',
      title: 'Demandas de las Víctimas',
      description: 'Nueve víctimas canadienses del Dr. Cameron demandaron a la CIA. El caso se resolvió extrajudicialmente, estableciendo un precedente legal.',
      findings: [
        'La CIA pagó $750,000 a nueve víctimas canadienses',
        'Admisión implícita de responsabilidad',
        'No se presentaron cargos criminales',
        'Muchas víctimas nunca recibieron compensación'
      ],
      icon: '⚖️'
    },
    {
      year: '1995',
      title: 'Disculpa Presidencial y Panel de Bioética',
      description: 'El presidente Bill Clinton emitió una disculpa formal por los experimentos de radiación humana sin consentimiento, que incluyeron aspectos de MK-ULTRA. Se estableció el Comité Asesor de Experimentos de Radiación Humana.',
      quote: '"Los miles de civiles que eran ciudadanos comunes y corrientes... no se les dio la oportunidad de decir no. Fueron vulnerados, engañados y utilizados."',
      findings: [
        'Disculpa presidencial formal a las víctimas',
        'Reconocimiento de violaciones éticas masivas',
        'Establecimiento de nuevas regulaciones de protección',
        'Compensación para algunas víctimas'
      ],
      icon: '🕊️'
    }
  ];

  const legacyItems = [
    {
      title: 'Reformas de Supervisión',
      description: 'Las revelaciones de MK-ULTRA llevaron a reformas significativas en la supervisión de las agencias de inteligencia, incluyendo la creación de comités permanentes de inteligencia en el Congreso.',
      impact: 'positive'
    },
    {
      title: 'Código de Núremberg y Bioética',
      description: 'Los experimentos de MK-ULTRA violaron flagrantemente el Código de Núremberg establecido tras los juicios de Núremberg. Esto llevó al fortalecimiento de las protecciones para sujetos humanos.',
      impact: 'positive'
    },
    {
      title: 'Cultura Popular y Teorías',
      description: 'MK-ULTRA se convirtió en parte de la cultura popular, inspirando innumerables películas, libros y teorías conspirativas. Algunos elementos reales se mezclaron con ficción.',
      impact: 'mixed'
    },
    {
      title: 'Trauma Persistente',
      description: 'Muchas víctimas y sus familias continúan sufriendo las consecuencias psicológicas y físicas de los experimentos. El trauma generacional persiste.',
      impact: 'negative'
    },
    {
      title: 'Confianza Pública Erosionada',
      description: 'MK-ULTRA dañó profundamente la confianza pública en las instituciones gubernamentales, particularmente en las agencias de inteligencia y la comunidad médica.',
      impact: 'negative'
    },
    {
      title: 'Precedente Legal',
      description: 'Los casos legales establecieron precedentes sobre la responsabilidad gubernamental en experimentos no éticos, aunque muchas víctimas nunca recibieron justicia.',
      impact: 'mixed'
    }
  ];

  return (
    <section id="investigaciones" className="investigations">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Investigaciones y Revelaciones</h2>
          <p className="section-intro">
            Durante las décadas de 1970 y 1990, una serie de investigaciones gubernamentales expusieron 
            la verdadera naturaleza de MK-ULTRA, revelando uno de los capítulos más oscuros en la historia 
            de la inteligencia estadounidense.
          </p>

          <div className="investigations-timeline">
            {investigations.map((investigation, index) => (
              <motion.div
                key={index}
                className="investigation-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="investigation-icon">{investigation.icon}</div>
                <div className="investigation-content">
                  <div className="investigation-year">{investigation.year}</div>
                  <h3>{investigation.title}</h3>
                  <p className="investigation-description">{investigation.description}</p>
                  
                  {investigation.quote && (
                    <blockquote className="investigation-quote">
                      {investigation.quote}
                    </blockquote>
                  )}

                  <div className="investigation-findings">
                    <h4>Hallazgos Clave:</h4>
                    <ul>
                      {investigation.findings.map((finding, idx) => (
                        <li key={idx}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="legacy-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>Legado de MK-ULTRA</h3>
              <p className="legacy-intro">
                El impacto de MK-ULTRA continúa resonando en la sociedad moderna, 
                afectando la política, la ética médica y la confianza pública.
              </p>

              <div className="legacy-grid">
                {legacyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`legacy-card legacy-${item.impact}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="impact-badge">{item.impact === 'positive' ? '✓' : item.impact === 'negative' ? '✗' : '~'}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="reflection-box">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h4>Reflexión Final</h4>
              <p>
                MK-ULTRA representa una advertencia histórica sobre los peligros de operar en secreto 
                sin supervisión ética. Los experimentos violaron principios fundamentales de derechos 
                humanos establecidos en el Código de Núremberg y la Declaración de Helsinki. Aunque 
                nunca se presentaron cargos criminales contra los responsables, las revelaciones llevaron 
                a reformas importantes en la supervisión de la inteligencia y la protección de sujetos 
                humanos en investigación.
              </p>
              <p>
                Las víctimas de MK-ULTRA y sus familias continúan buscando justicia y reconocimiento. 
                Su sufrimiento sirve como recordatorio permanente de la necesidad de transparencia, 
                rendición de cuentas y protecciones éticas en todas las actividades gubernamentales.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investigations;
