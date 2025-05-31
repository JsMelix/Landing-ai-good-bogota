import React from 'react';
import styles from './ContributeSection.module.scss';

const ContributeSection: React.FC = () => {
  return (
    <section className={styles.contributeSection}>
      <div className={styles.contentWrapper}>
        <h2>Bogotá HUB</h2> {/* Título */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. {/* Texto de ejemplo */}
        </p>
        {/* Placeholder para íconos de redes sociales. Puedes reemplazarlos con SVGs o componentes de íconos */}
        <div className={styles.socialIcons}>
          {/* Aquí irían tus íconos, por ejemplo: */}
          {/* <a href="#"><img src="/icon-instagram.svg" alt="Instagram" /></a> */}
          {/* <a href="#"><img src="/icon-facebook.svg" alt="Facebook" /></a> */}
          {/* <a href="#"><img src="/icon-youtube.svg" alt="YouTube" /></a> */}
          {/* <a href="#"><img src="/icon-linkedin.svg" alt="LinkedIn" /></a> */}
          <span className={styles.iconPlaceholder}>□</span>
          <span className={styles.iconPlaceholder}>□</span>
          <span className={styles.iconPlaceholder}>□</span>
          <span className={styles.iconPlaceholder}>□</span>
        </div>
      </div>

      <a href="#" className={styles.contributeButton}>
        QUIERO CONTRIBUIR
      </a> {/* Botón */}
    </section>
  );
};

export default ContributeSection; 