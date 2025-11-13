import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1>MK-ULTRA</h1>
          <p className="hero-subtitle">
            Experimentos secretos de la CIA
          </p>
          <p className="hero-location">
            Estados Unidos y Canadá, 1953–1964
          </p>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="#introduccion" className="scroll-indicator">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </motion.div>
      </div>

      <div className="hero-document-bg">
        <img 
          src={`${process.env.PUBLIC_URL}/images/Mkultra-lsd-doc.jpg`}
          alt="Documento desclasificado de MK-ULTRA"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
