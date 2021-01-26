import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header>
    <div class="nav-container">
      <h1 class="branding">
        <a href="index.html">Tana</a>
      </h1>
      <nav>
        <ul class="navbar">
          <li class="current">
            <a href="index.html">Galería</a>
          </li>
          <li>
            <a href="about.html">Historia</a>
          </li>
          <li>
            <a href="contact.html">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
