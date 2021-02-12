import React, { useState, useEffect } from 'react'
import GSheetReader from 'g-sheets-api'
import Lightbox from 'react-image-lightbox'

export default function ImageCollection({ collection }) {
  const [images, setImages] = useState([])
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [expandCollection, setExpandCollection] = useState(null)

  const options = {
    sheetId: '11jnjmKkUza3xEujPEhzXCkXX6taZysd8uCbylYTbpV8',
    sheetNumber: 2,
    returnAllResults: false,
    filter: {
      Colección: collection,
    },
  }

  useEffect(() => {
    GSheetReader(
      options,
      (results) => {
        setImages(results)
        console.log(results)
      },
      (error) => {
        console.log(error)
      }
    )
    setExpandCollection(null)
  }, [])

  const handleClick = (index) => {
    setPhotoIndex(index)
    setIsOpen(true)
    console.log(images[index])
  }

  return (
    <>
      <div className="collection-label">
        <h2 className="collection-title">{collection}</h2>
        <div className="collection-line"></div>
      </div>
      {isOpen && (
        <Lightbox
          wrapperClassName="custom-lightbox-wrapper"
          mainSrc={images[photoIndex].Enlace}
          nextSrc={images[(photoIndex + 1) % images.length].Enlace}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].Enlace
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            const prevIndex = (photoIndex + images.length - 1) % images.length
            setPhotoIndex(prevIndex)
          }}
          onMoveNextRequest={() => {
            const nextIndex = (photoIndex + 1) % images.length
            setPhotoIndex(nextIndex)
          }}
        />
      )}
      <div id="content" className="grid">
        {images.map((image, index) => {
          let imageStyle
          if (index > 2 && expandCollection !== collection) {
            imageStyle = { display: 'none' }
          } else if (index > 2 && expandCollection === collection) {
            imageStyle = { display: 'block' }
          } else if (index < 2) {
            imageStyle = { display: 'block' }
          }
          return (
            <div
              onClick={() => {
                handleClick(index)
              }}
              data-index={index}
              className="grid-item"
              key={index}
              style={imageStyle}
            >
              <img src={image.Enlace} />
            </div>
          )
        })}
        <p
          className="expand-button"
          onClick={() => setExpandCollection(collection)}
        >
          Expandir colección
        </p>
      </div>
    </>
  )
}
