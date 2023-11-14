import React from 'react';
import Hero from '../components/Sections/Hero';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Sections/Navbar';
import LargeCardComponent from '../components/LargeCardComponent';

import htmlicon from '../assets/images/icons/htmlicon.png';
import cssicon from '../assets/images/icons/cssicon.png';

export default function Homepage() {
  const { t } = useTranslation();
  return (
    <div className='homepage'>
      <Navbar />
      <Hero />
      <section className='homepage__about'>
        <h2>{t('About.Title')}</h2>
        <div className='homepage__aboutText'>
          <p>{t('About.Content')}</p>
        </div>
      </section>
      <section className='homepage__services' id='services'>
        <h2 className='section__title'>Services</h2>
      </section>
      <section className='homepage__experience' id='experience'>
        <h2 className='section__title'>Experience</h2>
        <div className='experience__cardsContainer largeCardComponent__Container'>
          <LargeCardComponent 
            skillName={'HTML'}
            skillTime={'1.5 years'}
            avatarImage={htmlicon}
            tags = {['Content Integration', 'SEO Optimization', 'Test object', 'MongoDB', 'UI/UX Design']}
          />
          <LargeCardComponent 
            skillName={'CSS'}
            skillTime={'1.5 years'}
            avatarImage={cssicon}
            tags = {['Responsive Design', 'UI/UX Design']}
          />
          <LargeCardComponent 
            skillName={'Javascript'}
            skillTime={'1.5 years'}
            avatarImage={cssicon}
            tags = {['Modular Structure', 'API Integrations', 'User Driven Experiences']}
          />
          <LargeCardComponent 
            skillName={'React'}
            skillTime={'1 year'}
            avatarImage={cssicon}
            tags = {['Reusable Components', 'Routing Management', 'Stateful Management']}
          />
          <LargeCardComponent 
            skillName={'SASS'}
            skillTime={'6 Months'}
            avatarImage={cssicon}
            tags = {['Modular Structure', 'Reusability of Clean Code', 'Fluid Animations']}
          />
          <LargeCardComponent 
            skillName={'NodeJS'}
            skillTime={'2 Months'}
            avatarImage={cssicon}
            tags = {['Backend Framework Development', 'Customizable Server-side Logic', 'MongoDB Setup']}
          />
        </div>
      </section>
      <section className='homepage__projects' id='projects'>
        <h2 className='section__title'>{t('Projects')}</h2>
      </section>
      <section className='homepage__contact' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <h3 className='contact__text'>
          Let's start a project together! Contact me here:
        </h3>
        <form className='form__container'>
          <div className='form__inputContainer'>
            <label className='form__label' for='name'>Name</label>
            <input className='form__input' name='name' required={true} aria-autocomplete='name'></input>
          </div>
          <label className='form__label' for='email'>Email Address</label>
          <input className='form__input' name='email' required={true} aria-autocomplete='email'></input>
          <label className='form__label' for='phone'>Phone Number</label>
          <input className='form__input' name='phone' required={true} aria-autocomplete='tel'></input>
          <label className='form__label' for='message'>Message</label>
          <textarea className='form__input form__largeInput' name='message' required={true}></textarea>
        </form>

      </section>
    </div>
  );
}
