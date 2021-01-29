import React from 'react'
// import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'

export default function historia(props) {
  return (
    <Layout location={props.location}>
      <HeroImage
        src="https://lh3.googleusercontent.com/Ql3rTSdyE6iKa7tR5JBYSaotvg6Z1gI6bmDlyjzf2Ck2ebYwjlmcvJ930t4_YFAeCPDfUBu1owdSPaUXBA9OrdnR4k4BMKZI1jPpGxzRKJ6nQ5KvsfoQN4TeGAVi_6GHa3N9ZZZjwtl96OIxymI-UBBJtMAEGklD0qPCks6D4B1mXlmJSe-nUKsM2R1oiqVtWnA_iSepZworK0V89P9Pfc9_87TlSd1P2hJLAMKuf5Wl0ma_KdKknP_3uGQp40gDmdeplxQ6iiSFvoA_7-ynqyg6I6JeXJUDhB9g_fFlHllq4cxYiVA0kxLkWoHDXU8ofeyTtZP2wofauDI3hzTmopl8b6s1sJ0V0sWY--IEGhrwp7g4I_RHkULv4KoCvFzjOqAmSBAKpWK3C_8qAAso8D53THC10PULvFIWWeyLZ1KPk9FslIxAQGQCLPesY5vpTr8Gp1eKjtYpScvtcG7At1EHJcCXgdpO1fXFd13V5IXQluhZZPija8oyIRkh7K6dxICGwylWjhxxSul6FUJQ9xsPaeKp69o323lwXuBVIV4JM5UpusLvYHLuG976qKgYM5ie08VtI3GZk4qAwtnXz1V2NDVDBWL3s3wKSpxV5UCNGdyFrUf6gHy3w0s1hwlfky2rp4xu1O_2dpA6-qII7UDWLsbVa-Q3urxP3BJh88ND_ed4du3J231Mhjh_JZo=w1023-h887-no?authuser=0"
        height="130vh"
      />

      <section className="about-text">
        <p>
          TANA (Encarna García) nació en La Mancha, en Peñas de San Pedro
          (Albacete) aunque desde los nueve años vive en Valencia. Estudió
          Magisterio y Derecho y la docencia ha sido su profesión en todos los
          niveles académicos, desde una escuela unitaria en Venta del Moro,
          pasando por diversos Institutos de Enseñanza Media, hasta la Facultad
          de Derecho de Valencia.{' '}
        </p>
        <img
          src="..\..\pintando.jpg"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <p>
          Si la docencia ha sido su profesión, la pintura y la música han sido
          su fascinación. Comenzó a pintar una vez liberada de sus compromisos
          laborales y es completamente AUTODIDACTA. La Mancha y el Mediterráneo
          son los pilares de su inspiración. Empezó a pintar para sí misma,
          animada siempre por su marido (su mayor admirador) y sólo su familia y
          amigos vieron sus obras en algunas ocasiones. Sólo una apuesta (que
          perdió) con su primo M, la llevó a exponer su obra al público. En esa
          ocasión se dijo de ella:
        </p>{' '}
        <p className="press-quote">
          "La pintura de Tana es vital y sin artificios : una vuelta a la vieja
          escuela del trazo agradable, del halago a la naturaleza, que vibra en
          los óleos y los pasteles...las flores presentan vivos colores, el
          cielo muestra toda su pureza azul, las hojas tienen un tacto casi
          palpable. Una pintura vitalista y hermosa en la que vale la pena
          recrearse"
        </p>
        <img src="..\..\prensa-torrevieja.jpg" style={{ maxWidth: '100%' }} />
        <p>
          A Tana le gusta especialmente la pintura que despierta sensaciones
          placenteras y prefiere la naturaleza como tema de sus obras. No
          obstante, desde hace algún tiempo, trabaja con lápices acuarelables en
          temas como sus "PACIENCIAS" entre las que hay una interesante
          colección de pai pais, y su colección de "CAPRICHOS", en la que la
          figura insinuada o esquemática de la cabeza femenina, sostiene
          licencias florales u otras fantasías.
        </p>
        <img src="..\..\flores.jpg" style={{ maxWidth: '100%' }} />
        <p>
          Podría concluirse que en la obra de Tana hay predilección por los
          temas sencillos y próximos y una gran pasión por el color.
        </p>
      </section>
      <footer>
        <p>&copy; 2021 Tana</p>
      </footer>
    </Layout>
  )
}
