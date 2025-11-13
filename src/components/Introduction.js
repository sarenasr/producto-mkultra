import React from 'react';
import { motion } from 'framer-motion';
import './Introduction.css';

const Introduction = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="introduccion" className="introduction">
      <div className="container">
        <motion.div
          className="intro-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h2>Introducción</h2>
          
          <div className="intro-text">
            <p>
              MK-ULTRA fue el nombre en clave de un programa clandestino de la Agencia Central de Inteligencia de Estados Unidos (CIA) cuyo objetivo era desarrollar técnicas de control mental, interrogatorio y modificación del comportamiento humano. Operativo principalmente entre 1953 y la década de 1970, MK-ULTRA se convirtió en uno de los programas de investigación gubernamental más controvertidos de la historia estadounidense.
            </p>

            <p>
              Autorizado inicialmente por el director de la CIA Allen Dulles en 1953, el programa se desarrolló en el contexto de la Guerra Fría y la percepción de que enemigos como la Unión Soviética, China y Corea del Norte estaban utilizando técnicas de "lavado de cerebro" en prisioneros de guerra estadounidenses. La CIA buscaba no solo desarrollar defensas contra estas técnicas, sino también crear sus propios métodos de control mental para uso en operaciones de inteligencia.
            </p>

            <p>
              MK-ULTRA abarcó más de 149 subproyectos diferentes que involucraron universidades, hospitales, prisiones y empresas farmacéuticas en Estados Unidos y Canadá. Los experimentos utilizaron una amplia variedad de métodos, incluyendo la administración de drogas psicoactivas (especialmente LSD), hipnosis, privación sensorial, aislamiento, abuso verbal y sexual, y otras formas de tortura psicológica. Muchos de estos experimentos se realizaron sin el consentimiento informado de los sujetos, violando los principios éticos fundamentales establecidos en el Código de Núremberg tras la Segunda Guerra Mundial.
            </p>

            <p>
              La existencia de MK-ULTRA permaneció en secreto hasta 1975, cuando las investigaciones del Congreso de Estados Unidos, particularmente las llevadas a cabo por la Comisión Church y el Comité Rockefeller, comenzaron a revelar la naturaleza y el alcance del programa. En 1973, el director de la CIA Richard Helms había ordenado la destrucción de la mayoría de los archivos de MK-ULTRA, dificultando enormemente la reconstrucción completa de lo que ocurrió.
            </p>

            <div className="intro-highlight">
              <p>
                El programa dejó un legado de trauma psicológico en numerosas víctimas, planteó serias preguntas sobre la supervisión de las agencias de inteligencia y se convirtió en un símbolo de los excesos del poder gubernamental durante la era de la Guerra Fría.
              </p>
            </div>
          </div>

          <motion.figure
            className="intro-figure"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-container">
              <img 
                src="/images/Mkultra-lsd-doc.jpg" 
                alt="Documento desclasificado de MK-ULTRA sobre experimentos con LSD"
                loading="lazy"
              />
            </div>
            <figcaption>
              Documento desclasificado de MK-ULTRA sobre experimentos con LSD.
              <span className="credit">Fuente: CIA / National Archives / Dominio público</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
