import React from 'react'
import { useState } from 'react'
import i18next from '../i18n'

export default function LanguageSelector() {

  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18next.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
  }

  return (
    <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
      <option value='en'>English</option>
      <option value='fr'>Francais</option>
    </select>
  )
}
