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
          to='mailto:contact@dnadevstudios.com'
          target='_blank'
          aria-label='send an email'
        >
          <FontAwesomeIcon className='social-list__icon' aria-hidden='true' aria-label='send an email' icon={faEnvelope} alt='Email'/>
        </Link>

        <Link
          className='social-list__link'
          to='https://www.github.com/JulianN96'
          target='_blank'
          aria-label='visit github profile'
        >
          <FontAwesomeIcon className='social-list__icon' aria-hidden='true' aria-label='visit github profile' icon={faGithub} alt='Github Link'/>
        </Link>

        <Link
          className='social-list__link'
          to='tel:+3376789271'
          target='_blank'
          aria-label='call via telephone'
        >
          <FontAwesomeIcon className='social-list__icon' aria-hidden='true' aria-label='call via telephone' icon={faPhone} alt='Phone Number'/>
        </Link>

      </div>
    </section>
  );
}
