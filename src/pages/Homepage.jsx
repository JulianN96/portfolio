import React, { useState, useRef, useEffect } from 'react';
import Hero from '../components/Sections/Hero';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Sections/Navbar';
import LargeCardComponent from '../components/LargeCardComponent';
import Socials from '../components/Sections/Socials';
import htmlicon from '../assets/images/icons/htmlicon.png';
import cssicon from '../assets/images/icons/cssicon.png';
import jsicon from '../assets/images/icons/jsicon.png';
import reacticon from '../assets/images/icons/reacticon.png';
import nodeicon from '../assets/images/icons/nodeicon.png';
import sassicon from '../assets/images/icons/sassicon.png'
import BackgroundFX from '../components/BackgroundFX';
import ProjectPreview from '../components/ProjectPreview';
import { tagsEn } from '../data/data';
import { tagsFr } from '../data/dataFr';

import emailjs from '@emailjs/browser';

import { projectsDataEn } from '../data/data';
import { projectsDataFr } from '../data/dataFr';

import ServicesCardComponent from '../components/ServicesCardComponent';

export default function Homepage() {

  const [currentLang, setCurrentLang] = useState(localStorage.getItem("lang"))
  const [projectsDataLang, setProjectsDataLang] = useState(projectsDataEn);
  const [tagsLang, setTagsLang] = useState(tagsEn)
  useEffect(()=> {
    if(localStorage.getItem("lang") === 'en'){
      setProjectsDataLang(projectsDataEn);
      setTagsLang(tagsEn);
    } else if(localStorage.getItem("lang") === 'fr'){
      setProjectsDataLang(projectsDataFr);
      setTagsLang(tagsFr)
    }
  }, [localStorage.getItem("lang")]);


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a8p2ga3', 'template_xddi8fb', form.current, 'dHFbN8Q39KXoDM9Yl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(); 
  };

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
        <div className='servicesCard__container'>
          <ServicesCardComponent
            title={t('Services.Website_Creation.title')}
            description={t('Services.Website_Creation.description')}
            image={projectsDataLang[5].images[0].image}
          />
          <ServicesCardComponent
            title={t('Services.Website_Optimization.title')}
            description={t('Services.Website_Optimization.description')}
            image={projectsDataLang[4].images[0].image}
          />
          <ServicesCardComponent
            title={t('Services.Domain_Management.title')}
            description={t('Services.Domain_Management.description')}
            image={projectsDataLang[3].images[0].image}
          />
        </div>
      </section>
      <section className='homepage__experience' id='experience'>
        <h2 className='section__title'>Experience</h2>
        <div className='experience__cardsContainer largeCardComponent__Container'>
          <LargeCardComponent
            skillName={'HTML'}
            skillTime={'1.5 '+ t('Years')}
            avatarImage={htmlicon}
            backgroundI={projectsDataLang[5].images[0].image}
            tags={tagsLang.HTML}
          />
          <LargeCardComponent
            skillName={'CSS'}
            skillTime={'1.5 '+ t('Years')}
            avatarImage={cssicon}
            backgroundI={projectsDataLang[5].images[0].image}
            tags={tagsLang.CSS}
          />
          <LargeCardComponent
            skillName={'Javascript'}
            skillTime={'1.5 '+ t('Years')}
            avatarImage={jsicon}
            backgroundI={projectsDataLang[5].images[0].image}
            tags={tagsLang.JS}
          />
          <LargeCardComponent
            skillName={'React'}
            skillTime={'1 '+ t('Year')}
            avatarImage={reacticon}
            backgroundI={projectsDataLang[5].images[0].image}
            tags={tagsLang.React}
          />
          <LargeCardComponent
            skillName={'SASS'}
            skillTime={'6 ' + t('Months')}
            avatarImage={sassicon}
            backgroundI={projectsDataLang[5].images[0].image}
            tags={tagsLang.SASS}
          />
          <LargeCardComponent
            skillName={'NodeJS'}
            skillTime={'2 '+ t('Months')}
            avatarImage={nodeicon}
            backgroundI={projectsDataLang[5].images[0].image}
            tags={tagsLang.NodeJS}
          />
        </div>
      </section>
      <section className='homepage__projects' id='projects'>
        <h2 className='section__title'>{t('Projects')}</h2>
        <div className='projects__container'>
          {projectsDataLang.map((project) => (
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
            {t('Contact')}
        </h3>
        <form className='form__container' ref={form} onSubmit={sendEmail}>
          <div className='form__inputContainer'>
            <label className='form__label' htmlFor='contactName'>
              {t('ContactForm.Name')}
            </label>
            <input
              className='form__input'
              id='contactName'
              name='user_name'
              required={true}
              aria-autocomplete='name'
            ></input>
          </div>
          <label className='form__label' htmlFor='contactemail'>
          {t('ContactForm.Email')}
          </label>
          <input
            className='form__input'
            id='contactemail'
            name='user_email'
            required={true}
            aria-autocomplete='email'
          ></input>
          <label className='form__label' htmlFor='contactphone'>
          {t('ContactForm.Phone')}
          </label>
          <input
            className='form__input'
            id='contactphone'
            name='user_phone'
            required={true}
            aria-autocomplete='tel'
          ></input>
          <label className='form__label' htmlFor='contactmessage'>
            Message
          </label>
          <textarea
            className='form__input form__largeInput'
            id='contactmessage'
            name='message'
            required={true}
          ></textarea>
          <button type='submit' className='CTAButton'>{t('ContactForm.Send')}</button>
        </form>
      </section>
    </div>
  );
}
