import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header>
    <nav role="navigation" className={styles.navigation}>
      <Link
        // className={styles.title}
        className={styles.rotulo}
        to="/"
      >
        <img
          alt="Tana, el nombre artístico de la pintora."
          src="./tana-rotulo.png"
        ></img>
      </Link>
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
    {/* </div> */}
  </header>
)
