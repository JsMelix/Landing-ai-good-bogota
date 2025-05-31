"use client";

import React, { useState, useEffect } from 'react';
import styles from './InfoSection.module.scss';

const InfoSection: React.FC = () => {
  const images = ['/good_logo.png', '/team_ai.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className={styles.infoSection}>
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
      <div className={styles.imageGallery}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className={index === currentImageIndex ? styles.visible : ''}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection; 