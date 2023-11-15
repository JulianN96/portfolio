import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



export default function Socials() {
  return (
    <section className='socials' id='socials'>
      <div className='socials-container'>
        <Link
          className='social-list__link'
          href='mailto:contact@dnadevstudios.com'
          target='_blank'
        >
          <FontAwesomeIcon className='social-list__icon' icon={faEnvelope} alt='Email'/>
        </Link>

        <Link
          className='social-list__link'
          href='https://www.github.com/JulianN96'
          target='_blank'
        >
          <FontAwesomeIcon className='social-list__icon' icon={faGithub} alt='Github Link'/>
        </Link>

        <Link
          className='social-list__link'
          href='tel:+3376789271'
          target='_blank'
        >
          <FontAwesomeIcon className='social-list__icon' icon={faPhone} alt='Phone Number'/>
        </Link>

      </div>
    </section>
  );
}
