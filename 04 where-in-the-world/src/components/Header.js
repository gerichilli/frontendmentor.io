import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/Header.module.scss';
import ToggleTheme from './ToggleTheme';

function Header() {
  return (
    <header className={styles.header}>
      <a href="#main" className="sr-only sr-only--focus-show">
        Skip to main
      </a>
      <Link to="/" className={styles.logo}>
        Where in the world
      </Link>
      <ToggleTheme />
    </header>
  );
}

export default Header;
