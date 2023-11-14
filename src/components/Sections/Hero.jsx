import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <h1>{t('Hero.Welcome')}</h1>
        <h1>{t('Hero.Intro')}</h1>
      </div>
    </section>
  );
}
