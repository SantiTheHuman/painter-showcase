import React from 'react'
import Layout from '../components/layout'
import emailIcon from '../../static/email-icon.svg'

export default function contacto(props) {
  return (
    <Layout location={props.location}>
      <div className="contact-container">
        <div className="contact-window">
          <p>
            Para cualquir pregunta o sugerencia, no dude en enviarme un mensaje.
          </p>
          <img src={emailIcon} alt="email icon" />

          <form
            className="contact-form"
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
              <span>Asunto</span>
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
