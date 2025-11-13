import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section footer-about">
            <h3>MK-ULTRA</h3>
            <p>
              Un proyecto de investigación histórica sobre uno de los programas 
              más controvertidos de la CIA durante la Guerra Fría.
            </p>
            <div className="footer-meta">
              <p><strong>Institución:</strong> Universidad de los Andes</p>
              <p><strong>Ubicación:</strong> Bogotá, Colombia</p>
            </div>
          </div>

          <div className="footer-section footer-navigation">
            <h4>Navegación</h4>
            <ul>
              <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
              <li><button onClick={() => scrollToSection('introduccion')}>Introducción</button></li>
              <li><button onClick={() => scrollToSection('contexto')}>Contexto Histórico</button></li>
              <li><button onClick={() => scrollToSection('cronologia')}>Cronología</button></li>
              <li><button onClick={() => scrollToSection('actores')}>Actores Clave</button></li>
              <li><button onClick={() => scrollToSection('metodos')}>Métodos</button></li>
              <li><button onClick={() => scrollToSection('investigaciones')}>Investigaciones</button></li>
              <li><button onClick={() => scrollToSection('fuentes')}>Fuentes</button></li>
            </ul>
          </div>

          <div className="footer-section footer-resources">
            <h4>Recursos Externos</h4>
            <ul>
              <li>
                <a href="https://www.intelligence.senate.gov/sites/default/files/hearings/95mkultra.pdf" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Senate MK-ULTRA Hearing (1977)
                </a>
              </li>
              <li>
                <a href="https://nsarchive.gwu.edu/briefing-book/intelligence/2018-08-13/cias-family-jewels" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  National Security Archive
                </a>
              </li>
              <li>
                <a href="https://www.cia.gov/readingroom/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  CIA Reading Room
                </a>
              </li>
              <li>
                <a href="https://www.intelligence.senate.gov/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Senate Intelligence Committee
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-legal">
            <h4>Información Legal</h4>
            <div className="license-info">
              <p>
                <strong>Licencia:</strong> Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
              </p>
              <p>
                Este contenido puede ser compartido y adaptado con fines educativos 
                y no comerciales, con la debida atribución.
              </p>
            </div>
            <div className="academic-disclaimer">
              <p>
                <strong>Propósito Académico:</strong> Este sitio web fue creado con fines 
                educativos e históricos. Todo el contenido está basado en documentos 
                gubernamentales desclasificados y fuentes verificables.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-creators">
            <h4>Creadores del Proyecto</h4>
            <p><strong>Samuel Amaya y Santiago Arenas</strong></p>
            <p>Universidad de los Andes, Bogotá, Colombia</p>
          </div>

          <div className="footer-copyright">
            <p>&copy; {currentYear} Proyecto MK-ULTRA - Universidad de los Andes. Todos los derechos reservados.</p>
            <p className="footer-disclaimer">
              El contenido presentado refleja hechos históricos documentados. Las opiniones 
              y análisis son responsabilidad exclusiva de los autores del proyecto.
            </p>
          </div>

          <div className="footer-acknowledgment">
            <p>
              En memoria de las víctimas de MK-ULTRA y sus familias, quienes sufrieron 
              violaciones irreparables de sus derechos humanos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
