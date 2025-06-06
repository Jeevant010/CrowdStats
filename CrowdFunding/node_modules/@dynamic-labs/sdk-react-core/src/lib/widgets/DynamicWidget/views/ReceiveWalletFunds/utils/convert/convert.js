'use client'
import { MAX_DISPLAY_LENGTH } from '../../consts.js';

const roundToMaxDisplayLength = (value) => value.toString().slice(0, MAX_DISPLAY_LENGTH);
const convertToFiat = (amount, token, exchangeRates) => {
    if (amount === '')
        return '';
    const value = parseFloat(amount);
    if (isNaN(value))
        return '';
    return exchangeRates[token] !== undefined
        ? roundToMaxDisplayLength(value * exchangeRates[token])
        : undefined;
};
const convertFromFiat = (amount, token, exchangeRates) => {
    if (amount === '')
        return '';
    const value = parseFloat(amount);
    if (isNaN(value))
        return '';
    return exchangeRates[token] !== undefined
        ? roundToMaxDisplayLength(value / exchangeRates[token])
        : undefined;
};

export { convertFromFiat, convertToFiat };
