import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className='hero'>
      <div>
        <h1 className='hero__hello'>{t('Hero.Welcome')}</h1>
        <h1 className='hero__intro'>{t('Hero.Intro')}</h1>
      </div>
      <div className='hero__imageContainer'>
        <img
          className='hero__image'
          alt='Photo de Julian Norris'
          src={require('../../assets/images/me-image.avif')}
        ></img>
      </div>
    </section>
  );
}
