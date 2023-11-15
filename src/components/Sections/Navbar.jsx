import React, { useState } from 'react';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const [navColor, setNavColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 400) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  const { t } = useTranslation();
  return (
    <nav className={navColor ? 'navbar--scrolled navbar' : 'navbar'}>
      <div className='navbar__menu'>
        <a className='navbar__menuItem' href='#about'>{t('About.Title')}</a>
        <a className='navbar__menuItem' href='#services'>Services</a>
        <a className='navbar__menuItem' href='#experience'>Experience</a>
        <a className='navbar__menuItem' href='#projects'>{t('Projects')}</a>
        <a className='navbar__menuItem' href='#projects'>Contact</a>
        {/* <NavLink className='navbar__menuItem' to='/blogs'>Blog</NavLink> */}
      </div>
      <LanguageSelector />
    </nav>
  );
}
