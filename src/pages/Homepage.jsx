import React from 'react';
import Hero from '../components/Sections/Hero';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Sections/Navbar';

export default function Homepage() {
  const { t } = useTranslation();
  return (
    <div className='homepage'>
      <Navbar />
      <Hero />
      <section className='homepage__about'>
        <h2>{t('About')}</h2>
        <p>A passionate web developer, I build,maintain and deploy websites and web apps for a variety of clients, respecting professional standards whilst creating visually stunning websites.</p>

      </section>
      <section className='homepage__services' id='services'>
        <h2>Services</h2>
      </section>
      <section className='homepage__experience' id='experience'>
        <h2>Experience</h2>
      </section>
      <section className='homepage__projects' id='projects'>
        <h2>{t('Projects')}</h2>
      </section>
      <section className='homepage__contact' id='contact'>
        <h2>Contact</h2>
      </section>
    </div>
  );
}
