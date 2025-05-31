import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/hub_color_logo.png" alt="Hub Color Logo" />
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Inicio</Link>
        <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
        <Link href="/proyectos" className={styles.navLink}>Proyectos</Link>
        <Link href="/eventos" className={styles.navLink}>Eventos</Link>
        <Link href="/contacto" className={styles.navLink}>Contacto</Link>
      </div>
      <div className={styles.contribuir}>
        <Link href="/contribuir" className={styles.contribuirBtn}>CONTRIBUIR</Link>
      </div>
    </nav>
  );
};

export default Navbar;