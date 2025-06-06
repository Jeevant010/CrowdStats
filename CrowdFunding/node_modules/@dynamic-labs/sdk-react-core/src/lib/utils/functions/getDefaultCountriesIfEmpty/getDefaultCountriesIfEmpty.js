'use client'
const defaultCountries = ['us', 'ca'];
/**
 * Returns the default countries if the provided countries array is empty.
 *
 * @param countries - An array of country ISO2 codes.
 * @returns An array of country ISO2 codes.
 */
const getDefaultCountriesIfEmpty = (countries) => (countries.length ? countries : defaultCountries);

export { getDefaultCountriesIfEmpty };
