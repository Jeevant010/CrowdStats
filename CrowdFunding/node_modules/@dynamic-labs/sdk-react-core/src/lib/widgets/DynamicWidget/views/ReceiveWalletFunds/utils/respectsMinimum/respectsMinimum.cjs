'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var convert = require('../convert/convert.cjs');
var isFiatToken = require('../isFiatToken/isFiatToken.cjs');

const respectsMinimum = (amount, minimum, exchangeRates) => {
    if (!minimum)
        return true;
    const amountInFiat = !isFiatToken.isFiatToken(amount.token)
        ? convert.convertToFiat(amount.value, amount.token, exchangeRates)
        : amount.value;
    const minimumInFiat = !isFiatToken.isFiatToken(minimum.token)
        ? convert.convertToFiat(minimum.value, minimum.token, exchangeRates)
        : minimum.value;
    if (amountInFiat === undefined || minimumInFiat === undefined)
        return true;
    return parseFloat(amountInFiat) >= parseFloat(minimumInFiat);
};

exports.respectsMinimum = respectsMinimum;
