import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../assets/img/Logo.png';
import styles from './Menu.module.css';

function Menu() {
  return (
    <nav className={styles.Menu}>
      <Link href="/">
        <Image className={styles.Logo} src={Logo} alt="AluraFlix logo" />
      </Link>

      <Link className={styles.ButtonLink} href="/cadastro/video">
        Novo vídeo
      </Link>
    </nav>
  );
}

export default Menu;