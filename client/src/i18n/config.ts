// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { dtcTranslations } from './translations/dtc';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        dtc: dtcTranslations.en
      },
      it: {
        dtc: dtcTranslations.it
      }
    },
    lng: 'it', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    returnObjects: true, // This is important for arrays
  });

export default i18n;