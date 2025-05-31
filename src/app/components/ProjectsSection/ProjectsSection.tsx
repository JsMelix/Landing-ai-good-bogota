import React from 'react';
import styles from './ProjectsSection.module.scss';

const ProjectsSection: React.FC = () => {
  // Datos de ejemplo para los proyectos
  const projects = [
    {
      title: 'Consultoría',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/placeholder-laptop.jpg', // ** IMPORTANTE: Reemplaza con la ruta real de tus imágenes desde el directorio /public **
      link: '#', // Enlace "Saber más..."
    },
    {
      title: 'Learning Hub',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/placeholder-laptop.jpg', // ** IMPORTANTE: Reemplaza con la ruta real de tus imágenes desde el directorio /public **
      link: '#',
    },
    {
      title: 'Consultoría',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/placeholder-laptop.jpg', // ** IMPORTANTE: Reemplaza con la ruta real de tus imágenes desde el directorio /public **
      link: '#',
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Proyectos</h2> {/* Título de la sección */}

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          // Alternamos la clase 'imageLeft' para cambiar la posición de la imagen
          <div key={index} className={`${styles.projectItem} ${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className={styles.saberMasLink}>Saber más... &gt;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 