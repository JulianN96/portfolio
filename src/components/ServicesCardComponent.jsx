import React from 'react'

export default function ServicesCardComponent({title, description, image}) {
  console.log(image)
  return (
    <div className='servicesCard'>
      <div className='servicesCard__text'>
        <h2 className='servicesCard__title'>{title}</h2>
        <p className='servicesCard__description'>{description}</p>
      </div>
        <img src={image} className='servicesCard__image'/>
      <div className='servicesCard__buttonContainer'>
        <a className='servicesCard__button CTAButton' href='#projects'>Examples</a>
        <a className='servicesCard__button CTAButton' href='#contact'>Get Quote</a>
      </div>
    </div>
  )
}
