import React from 'react';
import { motion } from 'framer-motion';
import './Sources.css';

const Sources = () => {
  const sources = [
    {
      type: 'Documentos Gubernamentales',
      title: 'Senate MK-ULTRA Hearing (1977)',
      author: 'U.S. Senate Select Committee on Intelligence',
      year: '1977',
      description: 'Audiencias del Senado sobre el Proyecto MK-ULTRA presididas por el Senador Ted Kennedy. Incluye el testimonio del Director de la CIA, Almirante Stansfield Turner.',
      url: 'https://www.intelligence.senate.gov/sites/default/files/hearings/95mkultra.pdf',
      icon: '📄'
    },
    {
      type: 'Archivo Nacional de Seguridad',
      title: 'The National Security Archive - MK-ULTRA Collection',
      author: 'National Security Archive, George Washington University',
      year: '2018',
      description: 'Colección exhaustiva de documentos desclasificados sobre MK-ULTRA, incluyendo memorandos, reportes de experimentos y correspondencia interna de la CIA.',
      url: 'https://nsarchive.gwu.edu/briefing-book/intelligence/2018-08-13/cias-family-jewels',
      icon: '🗃️'
    },
    {
      type: 'Investigación Histórica',
      title: 'Project MK-ULTRA: CIA Mind Control',
      author: 'John Marks',
      year: '1979',
      description: 'Investigación periodística fundamental basada en documentos obtenidos mediante la Ley de Libertad de Información (FOIA). Marks fue uno de los primeros en exponer la amplitud del programa.',
      url: null,
      citation: 'Marks, John. "The Search for the Manchurian Candidate: The CIA and Mind Control." Times Books, 1979.',
      icon: '📚'
    },
    {
      type: 'Comisión de Investigación',
      title: 'Church Committee Report',
      author: 'U.S. Senate Select Committee to Study Governmental Operations',
      year: '1976',
      description: 'Reporte final de la Comisión Church que investigó operaciones ilegales de inteligencia, incluyendo experimentación humana no autorizada en programas como MK-ULTRA.',
      url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions',
      icon: '📋'
    },
    {
      type: 'Investigación Académica',
      title: 'In the Sleep Room: The Story of CIA Brainwashing Experiments in Canada',
      author: 'Anne Collins',
      year: '1988',
      description: 'Investigación detallada sobre los experimentos del Dr. Ewen Cameron en el Allan Memorial Institute de Montreal, documenta el sufrimiento de las víctimas y las conexiones con la CIA.',
      url: null,
      citation: 'Collins, Anne. "In the Sleep Room: The Story of the CIA Brainwashing Experiments in Canada." Lester & Orpen Dennys, 1988.',
      icon: '📖'
    }
  ];

  const additionalResources = [
    {
      title: 'CIA Freedom of Information Act Library',
      url: 'https://www.cia.gov/readingroom/',
      description: 'Sala de lectura digital de la CIA con documentos desclasificados'
    },
    {
      title: 'Advisory Committee on Human Radiation Experiments',
      url: 'https://ehss.energy.gov/ohre/roadmap/achre/intro_9_3.html',
      description: 'Informe sobre experimentos de radiación humana relacionados con programas de la Guerra Fría'
    },
    {
      title: 'Joint Hearing on Biomedical and Behavioral Research (1977)',
      url: 'https://www.intelligence.senate.gov/',
      description: 'Audiencias conjuntas sobre investigación biomédica y conductual del gobierno'
    }
  ];

  return (
    <section id="fuentes" className="sources">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Fuentes y Referencias</h2>
          <p className="sources-intro">
            Esta página web está basada en documentos gubernamentales desclasificados, 
            testimonios del Congreso, investigaciones periodísticas y estudios académicos. 
            Todas las fuentes son verificables y de dominio público.
          </p>

          <div className="sources-grid">
            {sources.map((source, index) => (
              <motion.div
                key={index}
                className="source-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="source-icon">{source.icon}</div>
                <div className="source-type">{source.type}</div>
                <h3>{source.title}</h3>
                <div className="source-meta">
                  <span className="source-author">{source.author}</span>
                  <span className="source-year">({source.year})</span>
                </div>
                <p className="source-description">{source.description}</p>
                
                {source.url ? (
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="source-link"
                  >
                    Acceder al Documento →
                  </a>
                ) : (
                  <div className="source-citation">
                    <strong>Cita:</strong> {source.citation}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="additional-resources">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>Recursos Adicionales</h3>
              <div className="resources-list">
                {additionalResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    className="resource-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {resource.title}
                    </a>
                    <p>{resource.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="methodology-note">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h4>Nota Metodológica</h4>
              <p>
                Esta página web se construyó exclusivamente con información extraída de fuentes 
                primarias y secundarias verificables. No se han incluido teorías conspirativas no 
                documentadas ni especulaciones sin fundamento. Todos los hechos presentados están 
                respaldados por documentos gubernamentales desclasificados, testimonios oficiales 
                ante el Congreso de Estados Unidos o investigaciones académicas y periodísticas 
                rigurosas.
              </p>
              <p>
                Los documentos originales de MK-ULTRA fueron en gran parte destruidos por orden del 
                Director de la CIA Richard Helms en 1973. Sin embargo, aproximadamente 20,000 documentos 
                sobrevivieron y fueron desclasificados en 1977 mediante solicitudes bajo la Ley de 
                Libertad de Información (FOIA). Estos documentos, junto con testimonios de las audiencias 
                del Senado, forman la base documental de esta investigación.
              </p>
            </motion.div>
          </div>

          <div className="disclaimer">
            <h5>Aviso de Contenido</h5>
            <p>
              El contenido de esta página describe experimentos que involucraron abuso físico y 
              psicológico, trauma severo y violaciones de derechos humanos. El material se presenta 
              con fines educativos e históricos, manteniendo el respeto por las víctimas y sus familias.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sources;
