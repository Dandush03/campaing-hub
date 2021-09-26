import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const FALLBACK_LANGUAGE = 'en';

const loadPath = `/api/v1/i18n.json`;

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ns: ['menu', 'dashboard'],
      defaultNS: 'dashboard',
      supportedLngs: ['en', 'es'],
      fallbackLng: FALLBACK_LANGUAGE,
      backend: {
        loadPath: loadPath,
        addPath: loadPath,
        allowMultiLoading: true,
        parse: (data, lang, namespace: string) => JSON.parse(data)[namespace],
      },
      saveMissing: true,
      react: {
        useSuspense: false,
        wait: true,
      },
      interpolation: {
        escapeValue: false,
      },
      lng: 'en',
    });

export default i18n;
