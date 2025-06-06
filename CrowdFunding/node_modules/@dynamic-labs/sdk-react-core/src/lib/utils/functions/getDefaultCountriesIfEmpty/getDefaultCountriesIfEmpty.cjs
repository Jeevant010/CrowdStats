'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const defaultCountries = ['us', 'ca'];
/**
 * Returns the default countries if the provided countries array is empty.
 *
 * @param countries - An array of country ISO2 codes.
 * @returns An array of country ISO2 codes.
 */
const getDefaultCountriesIfEmpty = (countries) => (countries.length ? countries : defaultCountries);

exports.getDefaultCountriesIfEmpty = getDefaultCountriesIfEmpty;
