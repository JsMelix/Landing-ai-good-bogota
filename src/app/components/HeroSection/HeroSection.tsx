import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/hub_logo.png" alt="Hub Logo" />
        </div>
        <h1 className={styles.title}>hub Bogota</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className={styles.contactBtn}>Contactar</button>
      </div>
    </section>
  );
};

export default HeroSection;