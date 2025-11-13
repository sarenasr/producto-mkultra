import React from 'react';
import { motion } from 'framer-motion';
import './Context.css';

const Context = () => {
  return (
    <section id="contexto" className="context">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contexto Histórico</h2>

          <div className="context-grid">
            <div className="context-text">
              <h3>La Guerra Fría y el Miedo al Control Mental</h3>
              <p>
                El programa MK-ULTRA nació en el contexto de la Guerra Fría (1947–1991), un período de intensa rivalidad ideológica y militar entre Estados Unidos y la Unión Soviética. Durante este tiempo, ambas superpotencias competían no solo en términos de poderío nuclear y convencional, sino también en el desarrollo de tecnologías y técnicas de inteligencia que pudieran otorgar una ventaja estratégica.
              </p>

              <h3>El "Lavado de Cerebro" y la Guerra de Corea</h3>
              <p>
                La Guerra de Corea (1950–1953) intensificó los temores estadounidenses sobre el control mental. Durante el conflicto, varios prisioneros de guerra estadounidenses fueron sometidos a "reformas ideológicas" por parte de sus captores chinos y norcoreanos. Algunos prisioneros parecían haber adoptado voluntariamente las ideas comunistas y rehusaban regresar a Estados Unidos al finalizar la guerra. Este fenómeno fue ampliamente publicitado como "lavado de cerebro" (del término chino "xinao").
              </p>

              <p>
                Las confesiones forzadas de pilotos estadounidenses que admitían haber participado en supuestas operaciones de guerra bacteriológica generaron pánico en Washington. Aunque estas confesiones eran resultado de tortura física y psicológica, la CIA y el Departamento de Defensa temían que los comunistas hubieran desarrollado técnicas científicas avanzadas de control mental que representaban una amenaza para la seguridad nacional.
              </p>

              <h3>Antecedentes del Programa</h3>
              <p>
                MK-ULTRA no surgió de la nada. Fue precedido por otros programas de investigación de la CIA sobre control del comportamiento:
              </p>

              <ul>
                <li><strong>Proyecto BLUEBIRD (1950)</strong>: El primer esfuerzo sistemático de la CIA para explorar técnicas de interrogatorio especial y control mental.</li>
                <li><strong>Proyecto ARTICHOKE (1951)</strong>: Sucesor de BLUEBIRD, enfocado en el desarrollo de métodos para extraer información de sujetos resistentes mediante drogas y técnicas psicológicas.</li>
              </ul>

              <p>
                Estos programas iniciales sentaron las bases metodológicas y organizacionales para MK-ULTRA, que sería mucho más amplio y ambicioso en su alcance.
              </p>

              <h3>El Papel de Allen Dulles</h3>
              <p>
                Allen Welsh Dulles, director de la CIA entre 1953 y 1961, fue un impulsor clave de MK-ULTRA. Dulles era un veterano de la Oficina de Servicios Estratégicos (OSS), precursora de la CIA durante la Segunda Guerra Mundial, y creía firmemente en la necesidad de que Estados Unidos mantuviera la superioridad en el campo de la inteligencia y las operaciones encubiertas.
              </p>

              <p>
                Bajo su liderazgo, la CIA no solo autorizó MK-ULTRA sino que también proporcionó recursos sustanciales y autonomía operacional sin precedentes al programa. La estructura de MK-ULTRA fue diseñada deliberadamente para evitar la supervisión normal de la agencia, otorgando a su director, Sidney Gottlieb, un control casi absoluto sobre la selección de proyectos, la asignación de fondos y la destrucción de registros.
              </p>
            </div>

            <motion.figure
              className="context-figure"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/CIA_Original_Headquarters_Building.jpg`}
                  alt="Sede original de la CIA en Langley, Virginia"
                  loading="lazy"
                />
              </div>
              <figcaption>
                Sede de la CIA en Langley (c. 1961).
                <span className="credit">Fuente: U.S. Government / Dominio público</span>
              </figcaption>
            </motion.figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Context;
