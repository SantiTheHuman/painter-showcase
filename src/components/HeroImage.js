import React from 'react'
import styles from './HeroImage.module.css'
import Img from 'gatsby-image'

export default function HeroImage({ src, opacity }) {
  return (
    <div className={styles.HeroImage}>
      <img src={src} style={{ opacity: opacity }} />
    </div>
  )
}
