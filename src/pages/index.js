import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

class RootIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index) {
    this.setState({ photoIndex: index, isOpen: true }, function () {
      console.log(this.state)
    })
  }

  render() {
    const { photoIndex, isOpen } = this.state

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const imagenes = get(this, 'props.data.allContentfulImagen.edges')
    const images = imagenes.map((image) => {
      return image.node.archivoDeImagen.fluid.src
    })
    console.log(images)
    return (
      <Layout location={this.props.location}>
        thinggggggggggggggggg
        <div style={{ background: '#fff' }}>
          <Hero />
          <Helmet title={siteTitle} />
          <button type="button" onClick={() => this.setState({ isOpen: true })}>
            Open Lightbox
          </button>

          {isOpen && (
            <Lightbox
              wrapperClassName="custom-lightbox-wrapper"
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
          <div id="content" className="grid">
            {imagenes.map(({ node }, index) => {
              return (
                <div
                  onClick={() => {
                    this.handleClick(index)
                  }}
                  data-index={index}
                  className="grid-item"
                  key={index}
                >
                  {node.anyo}
                  heloo
                  <img src={node.archivoDeImagen.fluid.src} alt={node.titulo} />
                </div>
              )
            })}
          </div>
        </div>
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
