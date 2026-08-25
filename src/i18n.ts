import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { ru } from './locales/ru';

const LANGUAGE_STORAGE_KEY = 'app-language';

const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

const initialLanguage = savedLanguage === 'en' ? 'en' : 'ru';

void i18n.use(initReactI18next).init({
  resources: {
    ru,
    en,
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  supportedLngs: ['ru', 'en'],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (language) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
});

export default i18n;
