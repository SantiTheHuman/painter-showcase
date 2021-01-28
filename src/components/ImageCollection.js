import React, { useState, useEffect } from 'react'
import GSheetReader from 'g-sheets-api'
import Lightbox from 'react-image-lightbox'

export default function ImageCollection({ collection }) {
  const [images, setImages] = useState([])
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const options = {
    sheetId: '11jnjmKkUza3xEujPEhzXCkXX6taZysd8uCbylYTbpV8',
    sheetNumber: 2,
    returnAllResults: false,
    filter: {
      Colección: collection,
    },
    // filterOptions: {
    //   operator: 'or',
    //   matching: 'loose'
    // }
  }

  useEffect(() => {
    GSheetReader(
      options,
      (results) => {
        setImages(results)
        console.log(results)
        // results.forEach((object, index) => {
        //   importedImages.appendChild(`<img id="${index}" src='${object.enlace}'>`);
        // });
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  const handleClick = (index) => {
    setPhotoIndex(index)
    setIsOpen(true)
    console.log(images[index])
  }

  return (
    <>
      <div className="collection-label">
        <h2 className="collection-title">Paciencias</h2>
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
          onMovePrevRequest={
            () => {
              const prevIndex = (photoIndex + images.length - 1) % images.length
              setPhotoIndex(prevIndex)
            }
            // this.setState({
            //   photoIndex: (photoIndex + images.length - 1) % images.length,
            // })
          }
          onMoveNextRequest={
            () => {
              const nextIndex = (photoIndex + 1) % images.length
              setPhotoIndex(nextIndex)
            }
            // this.setState({
            //   photoIndex: (photoIndex + 1) % images.length,
            // })
          }
        />
      )}
      <div id="content" className="grid">
        {images &&
          images.map((image, index) => {
            return (
              <div
                onClick={() => {
                  handleClick(index)
                }}
                data-index={index}
                className="grid-item"
                key={index}
              >
                <img src={image.Enlace} />
              </div>
            )
          })}
      </div>
    </>
  )
}
