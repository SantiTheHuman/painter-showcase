import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header>
    <div className={styles.navContainer}>
      <h1 className={styles.title}>
        <a href="index.html">Tana</a>
      </h1>
      <nav role="navigation" className={styles.navigation}>
        <Link
          className={styles.navigationItem}
          activeClassName={styles.current}
          to="/"
        >
          Galería
        </Link>
        <Link
          className={styles.navigationItem}
          activeClassName={styles.current}
          to="/historia"
        >
          Historia
        </Link>
        <Link
          className={styles.navigationItem}
          activeClassName={styles.current}
          to="/contacto"
        >
          Contacto
        </Link>
      </nav>
    </div>
  </header>
)
