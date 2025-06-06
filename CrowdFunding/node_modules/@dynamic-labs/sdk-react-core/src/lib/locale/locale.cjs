'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var i18n = require('i18next');
var reactI18next = require('react-i18next');
var translation = require('./en/translation.cjs');
var deepMerge = require('./helpers/deepMerge.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);

/* eslint-disable import/no-named-as-default-member */
class Locale {
    static setResources(customResources) {
        if (Locale.__resources__) {
            return;
        }
        if (!customResources) {
            Locale.__resources__ = {
                en: { translation: translation.translation },
            };
            return;
        }
        const sdkResources = {};
        Object.keys(customResources).forEach((lang) => {
            const mergedResource = Object.assign({}, translation.translation);
            sdkResources[lang] = {
                translation: deepMerge.deepMerge(mergedResource, customResources[lang]),
            };
        });
        Locale.__resources__ = sdkResources;
    }
    static setup(resources) {
        if (Locale.__initialized__ && Locale.__i18nInstance__) {
            return Locale.__i18nInstance__;
        }
        Locale.setResources(resources);
        const i18nInstance = i18n__default["default"].createInstance();
        i18nInstance.use(reactI18next.initReactI18next).init({
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

exports.Locale = Locale;
exports["default"] = Locale;
