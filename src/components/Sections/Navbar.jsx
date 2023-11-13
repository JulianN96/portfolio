import React from 'react';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className='navbar'>
      <div className='navbar__menu'>
        <a href='#about'>{t('About')}</a>
        <a href='#services'>Services</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>{t('Projects')}</a>
        <NavLink to='/blogs'>Blog</NavLink>
      </div>
      <LanguageSelector />
    </nav>
  );
}
