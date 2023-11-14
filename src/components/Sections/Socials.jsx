import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Socials() {
  return (
    <section className="socials" id="socials">
      <div className="socials-container">
            <a
              className="social-list__link"
              href="https://ko-fi.com/artventuresinfrance"
              target="_blank"
            >
              <FontAwesomeIcon className='social-list__icon' icon={faEnvelope} />
            </a>

            <a
              className="social-list__link"
              href="https://www.instagram.com/artventures_in_france"
              target="_blank"
            >
              <FontAwesomeIcon className='social-list__icon' icon={faInstagram} />
            </a>

            <a
              className="social-list__link"
              href="https://www.facebook.com/artventuresinfrance"
              target="_blank"
            >
            <FontAwesomeIcon className='social-list__icon' icon={faFacebook} />
            </a>

            <a
              className="social-list__link"
              href="https://www.youtube.com/@artventuresinfrance"
              target="_blank"
            >
            <FontAwesomeIcon className='social-list__icon' icon={faYoutube} />
            </a>
      </div>
    </section>
  )
}
