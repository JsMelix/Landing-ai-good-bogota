import React from 'react';
import styles from './FeaturesSection.module.scss';

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.content}>
        <div className={styles.sectionsGrid}>
          <div className={styles.sectionItem}>
            <h2>1. Talento</h2>
            <p>
              Formamos integralmente a los miembros del hub, creando equipos de trabajo de impacto para el desarrollo de proyectos.
            </p>
          </div>
          <div className={styles.sectionItem}>
            <h2>2. AI Foor Good</h2>
            <p>
              Desarrollamos soluciones innovadoras con IA que abordan desafíos del mundo real.
            </p>
          </div>
          <div className={styles.sectionItem}>
            <h2>3. Palancas</h2>
            <p>
              Tecnología, Humanos, Capital.
            </p>
          </div>
          <div className={styles.sectionItem}>
            <h2>4. Alianzas</h2>
            <p>
              Formamos alianzas con compañías de tecnología, gobiernos y cooperamos con cerca de 100 hubs alrededor del mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 