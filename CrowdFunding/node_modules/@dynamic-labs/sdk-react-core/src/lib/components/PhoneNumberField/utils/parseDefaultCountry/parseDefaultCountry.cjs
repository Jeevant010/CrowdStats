'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactInternationalPhone = require('react-international-phone');
var utils = require('@dynamic-labs/utils');
var localStorage = require('../../../../utils/constants/localStorage.cjs');

const parseDefaultCountry = ({ defaultIso2, countries, initialPhone, }) => {
    // Return the country inferred from the phone number if possible
    if (initialPhone) {
        const { country } = reactInternationalPhone.guessCountryByPartialPhoneNumber({
            countries,
            phone: initialPhone,
        });
        if (country) {
            return country;
        }
    }
    const parsedCountries = countries.map(reactInternationalPhone.parseCountry);
    // If the user has previously selected a country, use that as the default
    const lastUsedCountryIso2 = utils.StorageService.getItem(localStorage.PHONE_INPUT_DEFAULT_COUNTRY);
    const lastUsedCountry = parsedCountries.find(({ iso2 }) => iso2 === lastUsedCountryIso2);
    if (lastUsedCountry) {
        return lastUsedCountry;
    }
    // Use default country setting if found in enabled countries
    const defaultCountry = parsedCountries.find(({ iso2 }) => iso2 === defaultIso2);
    if (defaultCountry) {
        return defaultCountry;
    }
    // Return US if it is enabled
    const countryUS = parsedCountries.find(({ iso2 }) => iso2 === 'us');
    if (countryUS) {
        return countryUS;
    }
    // Return the first country in the list as a last resort
    if (parsedCountries[0]) {
        return parsedCountries[0];
    }
    throw new Error('No country list was provided');
};

exports.parseDefaultCountry = parseDefaultCountry;
