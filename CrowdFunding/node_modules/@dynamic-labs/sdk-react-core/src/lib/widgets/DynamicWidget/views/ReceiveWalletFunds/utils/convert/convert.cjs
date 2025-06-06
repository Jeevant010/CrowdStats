'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var consts = require('../../consts.cjs');

const roundToMaxDisplayLength = (value) => value.toString().slice(0, consts.MAX_DISPLAY_LENGTH);
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

exports.convertFromFiat = convertFromFiat;
exports.convertToFiat = convertToFiat;
