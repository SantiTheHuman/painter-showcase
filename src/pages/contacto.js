import React, { useState, useEffect } from 'react'
// import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
// import HeroImage from '../components/HeroImage'
import emailIcon from '../../static/email-icon.svg'

export default function contacto(props) {
  // const [success, setSuccess] = useState(false)

  // const toggleSuccess = (e) => {
  //   e.preventDefault()
  //   setSuccess(true)
  // }

  // useEffect(() => {
  //   setSuccess(false)
  // }, [])

  return (
    <Layout location={props.location}>
      {/* <HeroImage src="..\..\vista-de-valencia.jpg" opacity="0.8" /> */}
      <div
        className="contact-container"
        // style={{ backgroundImage: `${url('.\vista-de-valencia.jpg')}` }}
      >
        <div className="contact-window">
          <p>
            Para cualquir pregunta o sugerencia, no dude en enviarme un mensaje.
          </p>
          <img src={emailIcon} alt="email icon" />

          <form
            className="contact-form"
            // onSubmit={() => toggleSuccess()}
            // action="/contacto"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            netlify
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <label>
              <span>Nombre</span>
              <input type="text" name="name" id="name" />
            </label>
            <label>
              <span>E-mail</span>
              <input type="email" name="email" id="email" />
            </label>
            <label>
              <span>Sujeto</span>
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              <span>Mensaje</span>
              <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <footer>
          <p
            style={{
              position: 'relative',
              top: '-110px',
              marginBottom: '0',
              color: 'white',
            }}
          >
            &copy; 2021 Tana
          </p>
        </footer>
      </div>
    </Layout>
  )
}
