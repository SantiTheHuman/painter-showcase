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
          La principal ocupación del pintor es la distribución uniforme de
          pintura por las superficies a decorar utilizando herramientas tales
          como brochas o rodillos. El pintor es contratado por los constructores
          o dueños de las viviendas para dar color y protección a sus paredes y
          techos de acuerdo a sus gustos y al diseño de la vivienda.
        </p>
        <img
          src="..\..\pintando.jpg"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />

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
