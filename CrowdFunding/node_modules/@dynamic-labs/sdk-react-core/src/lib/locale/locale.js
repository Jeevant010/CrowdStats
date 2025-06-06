'use client'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation } from './en/translation.js';
import { deepMerge } from './helpers/deepMerge.js';

/* eslint-disable import/no-named-as-default-member */
class Locale {
    static setResources(customResources) {
        if (Locale.__resources__) {
            return;
        }
        if (!customResources) {
            Locale.__resources__ = {
                en: { translation: translation },
            };
            return;
        }
        const sdkResources = {};
        Object.keys(customResources).forEach((lang) => {
            const mergedResource = Object.assign({}, translation);
            sdkResources[lang] = {
                translation: deepMerge(mergedResource, customResources[lang]),
            };
        });
        Locale.__resources__ = sdkResources;
    }
    static setup(resources) {
        if (Locale.__initialized__ && Locale.__i18nInstance__) {
            return Locale.__i18nInstance__;
        }
        Locale.setResources(resources);
        const i18nInstance = i18n.createInstance();
        i18nInstance.use(initReactI18next).init({
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false, // not needed for react as it escapes by default
            },
            lng: 'en',
            resources: Locale.getResources(),
        });
        Locale.__i18nInstance__ = i18nInstance;
        Locale.__initialized__ = true;
        return Locale.__i18nInstance__;
    }
    static getInstance() {
        if (!Locale.__initialized__) {
            this.setup();
        }
        // istanbul ignore next
        if (!Locale.__i18nInstance__ || !Locale.__initialized__) {
            throw new Error('Locale is not initialized');
        }
        return Locale.__i18nInstance__;
    }
}
Locale.__i18nInstance__ = null;
Locale.__initialized__ = false;
Locale.getResources = () => Locale.__resources__;

export { Locale, Locale as default };
