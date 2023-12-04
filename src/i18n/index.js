import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: localStorage.getItem("lang"),
    debug: true,
    fallBackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    ns: 'translation',
    defaultNS: 'translation'
  });

  export default i18next;