import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruCommon from '../shared/locales/ru/common.json';
import enCommon from '../shared/locales/en/common.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: import.meta.env.DEV,

        interpolation: {
            escapeValue: false,
        },

        resources: {
            ru: {
                common: ruCommon,
            },
            en: {
                common: enCommon,
            },
        },

        ns: ['common'],
        defaultNS: 'common',
    });

export default i18n;
