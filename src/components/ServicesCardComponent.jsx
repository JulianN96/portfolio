import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ServicesCardComponent({title, description, image}) {
  const { t } = useTranslation();
  return (
    <div className='servicesCard'>
      <div className='servicesCard__text'>
        <h2 className='servicesCard__title'>{title}</h2>
        <p className='servicesCard__description'>{description}</p>
      </div>
        <img src={image} className='servicesCard__image'/>
      <div className='servicesCard__buttonContainer'>
        <a className='servicesCard__button CTAButton' href='#projects'>{t('Services.Buttons.Examples')}</a>
        <a className='servicesCard__button CTAButton' href='#contact'>{t('Services.Buttons.Quote')}</a>
      </div>
    </div>
  )
}
