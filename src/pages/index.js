import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import HeroImage from '../components/HeroImage'
import Layout from '../components/layout'
import ImageCollection from '../components/ImageCollection'
import 'react-image-lightbox/style.css'

class RootIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HeroImage
          src="https://lh3.googleusercontent.com/KeAcuMzOEgQKI1iF7LEKs6GxqZhnBC6U3I8rSUJZ_lEu6e_LnBoXpTj26Av0kPzbmYfFkx-YpLKshaPtWKSYdbMUZUpV2Mf_ItIA937IPlWlONHDCC6IZEq5w5srv2V5UTJAX0d0-AQD5QsnrxV01VNHPJ1rZB79noHUdob36-c8JDDLND6XoHd89QISJNkIcPqzqmkhUvvzeGDiT5fBYhzo82mbwvWJtxrh1yPoDNW1tBTA5QDL64C5kY5Qb5MwGc-Lz3iNiWsEMvzObjkYG3sCnRe68WNAUbXHjuXc7NVGJIJNJtFbJ2Si5uAZqy8AggEE7gZ6AYosuFmudfNS0we1HJ0qn9l6RHNwS6v0uhi8_-F_0yvyvJ2g88xKW-op47IJP84hjnb3mYQsOjiZaaExN4Migz_ZdCfNOAFu7n1_MODxyz2zI7k774ByVfIRJoJQQVhq1hM9K9iJWM76nMq_r7Vl-BYZGVVjI5ezNgxbbWzo6ht2bBEzmPLElGm2XjnUQEayWlIigTxfd5q9zf2iV7siIgT6g01d3hg68qdIFfFlGls_vYi4PfixCUihAB_w2sKm5MzQuCkwqnw2DGAa2akdzHEvxCE4_958IL62L7joAYZngS6D-ToMPvUhr6Yopwh9q3LDJS2EMX-Ni2l1WQ7M27maDHk_6h3GTw3f7hZugxq-iI6Ah5jVvKI=w1281-h972-no?authuser=0"
          height="100vh"
        />
        <ImageCollection collection="Paciencias" />
        <ImageCollection collection="Caprichos" />
        <ImageCollection collection="Pastel" />
        <footer>
          <p>&copy; 2021 Tana</p>
        </footer>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulImagen(sort: { fields: [anyo], order: DESC }) {
      edges {
        node {
          coleccion
          titulo
          archivoDeImagen {
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          anyo
        }
      }
    }
  }
`
