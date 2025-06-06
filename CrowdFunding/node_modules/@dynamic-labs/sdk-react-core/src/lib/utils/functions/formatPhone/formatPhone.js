'use client'
import { guessCountryByPartialPhoneNumber, removeDialCode, getActiveFormattingMask } from 'react-international-phone';
import { getCustomCountries } from '../getCustomCountries/getCustomCountries.js';

/**
 * This takes a phone number (with country code, doesn't work otherwise)
 * and returns the same phone number, but formatted to its corresponding country
 */
const formatPhone = (phone) => {
    var _a;
    const { country } = guessCountryByPartialPhoneNumber({
        // Enables using custom formatting
        countries: getCustomCountries(),
        phone,
    });
    if (!country)
        return phone;
    const strippedPhone = removeDialCode({ dialCode: country.dialCode, phone });
    const mask = getActiveFormattingMask({ country, phone });
    const regex = /\./g;
    // Must be an exact match of the expected digit count and the actual digit count
    if (((_a = mask.match(regex)) !== null && _a !== void 0 ? _a : []).length !== removeNonDigits(strippedPhone).length)
        return phone;
    let i = 0;
    const formattedPhone = mask.replace(regex, () => strippedPhone[i++]);
    return `+${country.dialCode} ${formattedPhone}`;
};
const removeNonDigits = (text) => text.replace(/\D+/g, '');

export { formatPhone };
