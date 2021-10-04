import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const SUPPORTED_LANGUAGES = ['en', 'es'];
const NAMESPACES = [
  'dashboard', 'menu', 'campaigns',
];

const loadPath =
  '/api/v1/i18n.json?lng={{lng}}&ns={{ns}}';


const languageDetector = new LanguageDetector(null, {
  lookupCookie: 'lng',
});

i18n
    .use(Backend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      ns: NAMESPACES,
      defaultNS: 'dashboard',
      supportedLngs: ['en', 'es'],
      fallbackLng: SUPPORTED_LANGUAGES[0],
      backend: {
        loadPath: loadPath,
        addPath: loadPath,
        allowMultiLoading: true,
      },
      saveMissing: true,
      react: {
        useSuspense: true,
      },
      interpolation: {
        escapeValue: false,
      },
    });

export default i18n;
