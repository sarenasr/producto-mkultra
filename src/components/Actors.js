import React from 'react';
import { motion } from 'framer-motion';
import './Actors.css';

const Actors = () => {
  const actors = [
    {
      name: 'Allen W. Dulles',
      role: 'Director de la CIA (1953-1961)',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Allen_w_dulles.jpg',
      description: 'Veterano de la OSS durante la Segunda Guerra Mundial, Dulles fue el principal impulsor de MK-ULTRA. Como Director de la CIA, autorizó el programa en 1953 y proporcionó recursos y autonomía operacional sin precedentes. Creía firmemente que Estados Unidos necesitaba capacidades de control mental para competir con los enemigos comunistas.',
      contribution: 'Aprobó el programa MK-ULTRA en abril de 1953 y otorgó exenciones financieras especiales que permitían iniciar proyectos sin contratos escritos ni supervisión normal.'
    },
    {
      name: 'Sidney Gottlieb',
      role: 'Director del Programa MK-ULTRA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sidney_Gottlieb_photo.jpg/440px-Sidney_Gottlieb_photo.jpg',
      description: 'Químico y jefe del Personal de Servicios Técnicos (TSS) de la CIA, Gottlieb fue el "envenenador en jefe" de la agencia. Lideró MK-ULTRA desde su inicio, supervisando 149 subproyectos diferentes. Era conocido por su disposición a experimentar con técnicas extremas y su creencia de que cualquier método era justificable en la lucha contra el comunismo.',
      contribution: 'Diseñó y supervisó los experimentos más controvertidos del programa, incluyendo la administración de LSD sin consentimiento. En 1973, ordenó la destrucción de la mayoría de los archivos de MK-ULTRA.'
    },
    {
      name: 'Donald Ewen Cameron',
      role: 'Psiquiatra y Experimentador',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Donald_Ewen_Cameron_canmedaj01237-0046-a.jpg/440px-Donald_Ewen_Cameron_canmedaj01237-0046-a.jpg',
      description: 'Presidente de la Asociación Psiquiátrica Estadounidense y director del Allan Memorial Institute en Montreal, Cameron fue uno de los investigadores más notorio de MK-ULTRA. Desarrolló la técnica de "conducción psíquica" y "despatronización", intentando borrar la mente de los pacientes y reprogramarla. Sus métodos causaron daño psicológico permanente a numerosas víctimas.',
      contribution: 'Realizó experimentos extremos en pacientes psiquiátricos entre 1957 y 1964, utilizando electroshocks intensivos, privación sensorial, dosis masivas de LSD y otras drogas. Sus víctimas incluyen a Velma Orlikow, quien más tarde demandó al gobierno estadounidense.'
    },
    {
      name: 'Richard Helms',
      role: 'Jefe de Operaciones Encubiertas y Director de la CIA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Richard_M_Helms-Official-Portrait.jpg/440px-Richard_M_Helms-Official-Portrait.jpg',
      description: 'Como jefe de operaciones en el Directorio de Planes de la CIA y posteriormente como Director de la CIA (1966-1973), Helms fue un firme defensor de MK-ULTRA. Apoyó los experimentos en ciudadanos sin consentimiento y defendió la continuación del programa incluso cuando surgieron preocupaciones éticas.',
      contribution: 'En 1973, como Director de la CIA, ordenó la destrucción de la mayoría de los archivos de MK-ULTRA antes de dejar el cargo, dificultando enormemente las investigaciones posteriores sobre los abusos del programa.'
    },
    {
      name: 'George Hunter White',
      role: 'Agente Federal de Narcóticos',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23222" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="14px" fill="%23c9a961"%3EG. H. White%3C/text%3E%3C/svg%3E',
      description: 'Veterano de la OSS y agente federal de narcóticos, White fue reclutado por Gottlieb para dirigir "casas seguras" de la CIA en Nueva York y San Francisco. Usando el alias "Morgan Hall", White drogaba secretamente a ciudadanos desprevenidos con LSD y otras sustancias, observando y grabando sus comportamientos.',
      contribution: 'Administró docenas de experimentos en ciudadanos sin consentimiento en casas seguras de la CIA, muchas veces utilizando prostitutas para atraer víctimas. Sus operaciones representan algunos de los aspectos más perturbadores de MK-ULTRA.'
    },
    {
      name: 'Frank Olson',
      role: 'Científico del Ejército y Víctima',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23222" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="14px" fill="%23c9a961"%3EF. Olson%3C/text%3E%3C/svg%3E',
      description: 'Bacteriólogo del Ejército de Estados Unidos que trabajaba en la División de Operaciones Especiales del Cuerpo Químico del Ejército. En noviembre de 1953, Olson fue drogado con LSD sin su conocimiento durante un retiro con personal de la CIA en Deep Creek Lake, Maryland. Días después, murió al caer desde una ventana del décimo piso del Hotel Statler en Nueva York.',
      contribution: 'Su muerte se convirtió en el caso más infame de MK-ULTRA. Aunque oficialmente fue declarada suicidio, su familia cuestionó esta conclusión durante décadas. El caso ayudó a exponer los peligros de los experimentos sin consentimiento informado.'
    }
  ];

  return (
    <section id="actores" className="actors">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Actores Principales</h2>

          <div className="actors-grid">
            {actors.map((actor, index) => (
              <motion.div
                key={index}
                className="actor-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="actor-image">
                  <img src={actor.image} alt={actor.name} loading="lazy" />
                  <div className="actor-overlay"></div>
                </div>
                
                <div className="actor-content">
                  <h3>{actor.name}</h3>
                  <p className="actor-role">{actor.role}</p>
                  <p className="actor-description">{actor.description}</p>
                  
                  <div className="actor-contribution">
                    <h4>Contribución al Programa:</h4>
                    <p>{actor.contribution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Actors;
