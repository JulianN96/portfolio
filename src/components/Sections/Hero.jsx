import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('Title')}</h1>
      <p>{t('Test')}</p>
    </section>
  );
}
