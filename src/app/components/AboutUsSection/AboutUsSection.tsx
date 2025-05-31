import React from 'react';
import styles from './AboutUsSection.module.scss';

const AboutUsSection: React.FC = () => {
  return (
    <section className={styles.nosotrosSection}>
      <div className={styles.contentWrapper}>
        <h2>Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a href="#" className={styles.saberMasLink}>Saber más... &gt;</a>
      </div>
      <div className={styles.imagePlaceholder}></div>
    </section>
  );
};

export default AboutUsSection; 