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
        <HeroImage src="..\..\almendro1.jpg" height="100vh" />
        <ImageCollection collection="Paciencias" />
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
