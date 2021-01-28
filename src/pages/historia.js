import React from 'react'
// import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'

export default function historia(props) {
  return (
    <Layout location={props.location}>
      <HeroImage src="..\..\pintando.jpg" opacity="0.8" />

      <section className="about-text">
        <p>
          La principal ocupación del pintor es la distribución uniforme de
          pintura por las superficies a decorar utilizando herramientas tales
          como brochas o rodillos. El pintor es contratado por los constructores
          o dueños de las viviendas para dar color y protección a sus paredes y
          techos de acuerdo a sus gustos y al diseño de la vivienda.
        </p>
        Entre sus funciones se encuentran el rascado de las paredes para retirar
        la pintura antigua o el papel pintado antes de aplicar la nueva. Para
        ello, utiliza decapantes, agua y espátulas. Lija las superficies para
        alisarlas utilizando papel de lija o cepillos de metal. Rellena los
        orificios dejados por las escarpias y otras imperfecciones utilizando
        masilla o escayola y aplicándola con la espátula de masillar. Antes de
        pintar despeja las paredes retirando cables, enchufes o interruptores y
        apartando los cuadros y muebles cercanos a ellas. Protege con cinta de
        papel los enchufes, rodapiés y marcos de puertas y ventanas cercanos a
        la superficie a pintar. Asimismo, cubre con plásticos o telas la zona
        del suelo cercana a la pared o situada bajo el techo que se va a decorar
        así como los muebles que pueden verse afectados por la caída de pintura.
        <p>
          El pintor utiliza diferentes tipos de pintura según las
          características de la habitación, el tipo de superficie y el resultado
          buscado. Así, emplea pintura metálica para cubrir tuberías y
          recipientes metálicos, esmalte para los radiadores o pintura acrílica
          para las zonas húmedas o afectadas por la grasa. Además, aplica
          barnices sobre las superficies de madera para protegerlas de la
          humedad y el deterioro. Coloca pintura al gotelé sobre las paredes
          utilizando una herramienta mecánica o manual con orificios a través de
          los cuales se proyecta sobre cruz azul. Encarga pintura del color
          acordado con el constructor o el dueño de la vivienda o mezcla
          diferentes tintes con pintura blanca hasta conseguir el tono deseado.
          Antes de comenzar el trabajo puede realizar diferentes pruebas de
          color sobre la pared para obtener la aprobación del dueño. Los
          pintores también colocan el papel pintado sobre las paredes. Para
          ello, miden y cortan los rollos según las dimensiones de la
          habitación, aplican la cola y los extienden evitando crear grumos o
          bolsas de aire. Combinan los diferentes rollos de papel de manera
          coordinada de manera que el diseño quede uniforme.
        </p>
      </section>
      <footer>
        <p>&copy; 2021 Tana</p>
      </footer>
    </Layout>
  )
}
