import React from 'react';
import styles from './PartnersSection.module.scss';
import Image from 'next/image'; // Usaremos el componente Image de Next.js para optimización

const PartnersSection: React.FC = () => {
  // Array de objetos con la información de los aliados (logo y nombre alt)
  const partners = [
    { src: '/logos/ecci-logo.png', alt: 'Universidad ECCI Logo' }, // ** Reemplaza con la ruta y nombre alt correctos **
    // Añade más objetos para otros aliados aquí
    // { src: '/logos/otro-aliado.png', alt: 'Otro Aliado Logo' },
  ];

  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.sectionTitle}>Nuestros aliados</h2> {/* Título */}

      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.partnerLogo}>
            {/* Usamos el componente Image para optimizar la carga */}
            <Image
              src={partner.src}
              alt={partner.alt}
              width={150} // Define un ancho base. Ajusta si es necesario.
              height={75} // Define una altura base. Ajusta si es necesario.
              objectFit="contain" // Asegura que el logo quepa dentro de las dimensiones
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection; 