import React from 'react'
// import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'

export default function historia(props) {
  return (
    <Layout location={props.location}>
      <HeroImage src="..\..\pintando.jpg" opacity="0.8" height="130vh" />

      <section className="about-text">
        <p>
          La principal ocupación del pintor es la distribución uniforme de
          pintura por las superficies a decorar utilizando herramientas tales
          como brochas o rodillos. El pintor es contratado por los constructores
          o dueños de las viviendas para dar color y protección a sus paredes y
          techos de acuerdo a sus gustos y al diseño de la vivienda.
        </p>

        <p>
          Entre sus funciones se encuentran el rascado de las paredes para
          retirar la pintura antigua o el papel pintado antes de aplicar la
          nueva. Para ello, utiliza decapantes, agua y espátulas. Lija las
          superficies para alisarlas utilizando papel de lija o cepillos de
          metal. Rellena los orificios dejados por las escarpias y otras
          imperfecciones utilizando masilla o escayola y aplicándola con la
          espátula de masillar.
        </p>
        <p className="press-quote">
          "El pintor utiliza diferentes tipos de pintura según las
          características de la habitación, el tipo de superficie y el resultado
          buscado."
        </p>
        <img src="..\..\prensa-torrevieja.jpg" style={{ maxWidth: '100%' }} />
        <p>
          El pintor utiliza diferentes tipos de pintura según las
          características de la habitación, el tipo de superficie y el resultado
          buscado. Así, emplea pintura metálica para cubrir tuberías y
          recipientes metálicos, esmalte para los radiadores o pintura acrílica
          para las zonas húmedas o afectadas por la grasa. Además, aplica
          barnices sobre las superficies de madera para protegerlas de la
          humedad y el deterioro.
        </p>
        <img src="..\..\flores.jpg" style={{ maxWidth: '100%' }} />
        <p>
          El pintor utiliza diferentes tipos de pintura según las
          características de la habitación, el tipo de superficie y el resultado
          buscado. Así, emplea pintura metálica para cubrir tuberías y
          recipientes metálicos, esmalte para los radiadores o pintura acrílica
          para las zonas húmedas o afectadas por la grasa.
        </p>
      </section>
      <footer>
        <p>&copy; 2021 Tana</p>
      </footer>
    </Layout>
  )
}
