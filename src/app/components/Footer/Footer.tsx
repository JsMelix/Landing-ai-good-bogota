import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link'; // Para los enlaces de navegación
import Image from 'next/image'; // Importa el componente Image

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Columna 1: Logo y texto */}
        <div className={styles.col}>
          {/* Usamos el componente Image para el logo */}
          <div className={styles.logoContainer}> {/* Usamos un nuevo nombre de clase para estilos de contenedor */}
             <Image
                src="/footer_logo.png" // ** Asegúrate de que esta ruta sea correcta desde el directorio /public **
                alt="Young AI Leaders Community Logo" // Texto alternativo
                width={150} // Ajusta según el tamaño deseado del logo
                height={80} // Ajusta según el tamaño deseado del logo
                objectFit="contain" // Ajusta cómo la imagen se redimensiona
             />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Columna 2: Menú */}
        <div className={styles.col}>
          <h3>Menu</h3>
          <nav>
            <ul>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/proyectos">Proyectos</Link></li>
              <li><Link href="/eventos">Eventos</Link></li>
              <li><Link href="/contacto">Contactos</Link></li>
            </ul>
          </nav>
        </div>

        {/* Columna 3: Documentos */}
        <div className={styles.col}>
           <h3>Documentos</h3>
           <ul>
             <li><Link href="#">Documento 1</Link></li> {/* Reemplaza # con la ruta real */}
             <li><Link href="#">Documento 2</Link></li> {/* Reemplaza # con la ruta real */}
           </ul>
        </div>

        {/* Columna 4: Contacto y Redes Sociales */}
        <div className={styles.col}>
           <p>correo@correo.com</p> {/* Reemplaza con tu correo */}
           <p>+57 31312345678</p> {/* Reemplaza con tu teléfono */}
           {/* Íconos de redes sociales - Placeholders */}
           <div className={styles.socialIcons}>
             {/* Reemplaza los spans con tus enlaces e íconos reales */}
             {/* <a href="#"><img src="/icon-instagram-white.svg" alt="Instagram" /></a> */}
             {/* <a href="#"><img src="/icon-facebook-white.svg" alt="Facebook" /></a> */}
             {/* <a href="#"><img src="/icon-youtube-white.svg" alt="YouTube" /></a> */}
             {/* <a href="#"><img src="/icon-linkedin-white.svg" alt="LinkedIn" /></a> */}
             <span className={styles.socialIconPlaceholder}>📷</span>
             <span className={styles.socialIconPlaceholder}>FB</span>
             <span className={styles.socialIconPlaceholder}>YT</span>
             <span className={styles.socialIconPlaceholder}>IN</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 