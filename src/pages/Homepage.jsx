import React, { useState } from 'react';
import Hero from '../components/Sections/Hero';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Sections/Navbar';
import LargeCardComponent from '../components/LargeCardComponent';
import Socials from '../components/Sections/Socials';
import htmlicon from '../assets/images/icons/htmlicon.png';
import cssicon from '../assets/images/icons/cssicon.png';
import BackgroundFX from '../components/BackgroundFX';
import ProjectPreview from '../components/ProjectPreview';

import { projectsData } from '../data/data';


export default function Homepage() {


  const { t } = useTranslation();
  return (
    <div className='homepage'>
      <BackgroundFX />
      <Navbar />
      <Hero />
      <Socials />
      <section className='homepage__about' id='about'>
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
            tags={[
              'Content Integration',
              'SEO Optimization',
              'Test object',
              'MongoDB',
              'UI/UX Design',
            ]}
          />
          <LargeCardComponent
            skillName={'CSS'}
            skillTime={'1.5 years'}
            avatarImage={cssicon}
            tags={['Responsive Design', 'UI/UX Design']}
          />
          <LargeCardComponent
            skillName={'Javascript'}
            skillTime={'1.5 years'}
            avatarImage={cssicon}
            tags={[
              'Modular Structure',
              'API Integrations',
              'User Driven Experiences',
            ]}
          />
          <LargeCardComponent
            skillName={'React'}
            skillTime={'1 year'}
            avatarImage={cssicon}
            tags={[
              'Reusable Components',
              'Routing Management',
              'Stateful Management',
            ]}
          />
          <LargeCardComponent
            skillName={'SASS'}
            skillTime={'6 Months'}
            avatarImage={cssicon}
            tags={[
              'Modular Structure',
              'Reusability of Clean Code',
              'Fluid Animations',
            ]}
          />
          <LargeCardComponent
            skillName={'NodeJS'}
            skillTime={'2 Months'}
            avatarImage={cssicon}
            tags={[
              'Backend Framework Development',
              'Customizable Server-side Logic',
              'MongoDB Setup',
            ]}
          />
        </div>
      </section>
      <section className='homepage__projects' id='projects'>
        <h2 className='section__title'>{t('Projects')}</h2>
        <div className='projects__container'>
          {projectsData.map((project) => (
            <ProjectPreview 
              title={project.title}
              date={project.date}
              previewImage={project.images[0].image}
              imageCollection={project.images}
              tags={project.tags}
              description={project.description}
            />
          ))}
        </div>

      </section>
      <section className='homepage__contact' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <h3 className='contact__text'>
          Let's start a project together! Contact me here:
        </h3>
        <form className='form__container'>
          <div className='form__inputContainer'>
            <label className='form__label' for='contactName'>
              Name
            </label>
            <input
              className='form__input'
              id='contactName'
              name='name'
              required={true}
              aria-autocomplete='name'
            ></input>
          </div>
          <label className='form__label' for='contactemail'>
            Email Address
          </label>
          <input
            className='form__input'
            id='contactemail'
            name='email'
            required={true}
            aria-autocomplete='email'
          ></input>
          <label className='form__label' for='contactphone'>
            Phone Number
          </label>
          <input
            className='form__input'
            id='contactphone'
            name='phone'
            required={true}
            aria-autocomplete='tel'
          ></input>
          <label className='form__label' for='contactmessage'>
            Message
          </label>
          <textarea
            className='form__input form__largeInput'
            id='contactmessage'
            name='message'
            required={true}
          ></textarea>
        </form>
      </section>
    </div>
  );
}
