import React, { useState, useRef, useEffect } from 'react';
import Hero from '../components/Sections/Hero';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Sections/Navbar';
import LargeCardComponent from '../components/LargeCardComponent';
import Socials from '../components/Sections/Socials';
import htmlicon from '../assets/images/icons/htmlicon.png';
import cssicon from '../assets/images/icons/cssicon.avif';
import jsicon from '../assets/images/icons/jsicon.avif';
import reacticon from '../assets/images/icons/reacticon.avif';
import nodeicon from '../assets/images/icons/nodeicon.avif';
import sassicon from '../assets/images/icons/sassicon.avif'
import BackgroundFX from '../components/BackgroundFX';
import ProjectPreview from '../components/ProjectPreview';
import { tagsEn, contactModalEn } from '../data/data';
import { tagsFr, contactModalFr } from '../data/dataFr';
import ReactModal from 'react-modal';

import emailjs from '@emailjs/browser';

import { projectsDataEn } from '../data/data';
import { projectsDataFr } from '../data/dataFr';

import ServicesCardComponent from '../components/ServicesCardComponent';

export default function Homepage() {
  const [projectsDataLang, setProjectsDataLang] = useState(projectsDataEn);
  const [tagsLang, setTagsLang] = useState(tagsEn);
  const [contactModalLang, setContactModalLang] = useState(contactModalEn)
  useEffect(()=> {
    if(localStorage.getItem("lang") === 'en'){
      setProjectsDataLang(projectsDataEn);
      setTagsLang(tagsEn);
      setContactModalLang(contactModalEn);
    } else if(localStorage.getItem("lang") === 'fr'){
      setProjectsDataLang(projectsDataFr);
      setTagsLang(tagsFr);
      setContactModalLang(contactModalFr);
    }
  }, [localStorage.getItem("lang")]);

  useEffect(() => {
    if(!localStorage.getItem("lang")){
      localStorage.setItem('lang', 'en')
    }
  })

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('modal-title');
  const [modalButton, setModalButton] = useState(null);
  const [modalInfo, setModalInfo] = useState('modal-info');
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a8p2ga3', 'template_xddi8fb', form.current, 'dHFbN8Q39KXoDM9Yl')
      .then((result) => {
          console.log(result.text);
          setModalTitle(contactModalLang.Success);
          setModalInfo(contactModalLang.Success_Message);
          setModalButton(<button className='CTAButton' onClick={closeModal}>{contactModalLang.Close}</button>)
          openModal();
      }, (error) => {
          console.log(error.text);
          setModalTitle(contactModalLang.Error);
          setModalInfo(contactModalLang.Error_Message);
          setModalButton(<button className='CTAButton' onClick={closeModal}>{contactModalLang.Close}</button>)
          openModal();
      });
      e.target.reset(); 
  };



  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          <p className='homepage__aboutText-content'>{t('About.Content')}</p>
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
        <h2 className='section__title'>{t('Experience')}</h2>
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
              key={project.title}
              title={project.title}
              date={project.date}
              previewImage={project.images[0].image}
              imageCollection={project.images}
              tags={project.tags}
              description={project.description}
              githubLink={project.githubLink}
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
          ></input>
          <label className='form__label' htmlFor='contactphone'>
          {t('ContactForm.Phone')}
          </label>
          <input
            className='form__input'
            id='contactphone'
            name='user_phone'
            required={true}
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
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        overlayClassName='Overlay'
        className='modal contact__modal'
      >
        <div className='contact__modalDiv'>
          <h2 className='contact__modalTitle'>{modalTitle}</h2>
          <h4 className='contact__modalInfo'>{modalInfo}</h4>
          {modalButton}
        </div>
      </ReactModal>
    </div>
  );
}
