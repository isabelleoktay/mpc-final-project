// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Choose your language': 'Choose your language',
      Català: 'Catalan',
      Castellano: 'Spanish',
      English: 'English',
      // ... (other English translations)
    },
  },
  ca: {
    translation: {
      'Choose your language': 'Tria el teu idioma',
      Català: 'Català',
      Castellano: 'Espanyol',
      English: 'Anglès',
      // ... (other Catalan translations)
    },
  },
  es: {
    translation: {
      'Choose your language': 'Elige tu idioma',
      Català: 'Catalán',
      Castellano: 'Español',
      English: 'Inglés',
      // ... (other Spanish translations)
    },
  },
  // ... (other languages)
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
