'use client'
import { convertToFiat } from '../convert/convert.js';
import { isFiatToken } from '../isFiatToken/isFiatToken.js';

const respectsMinimum = (amount, minimum, exchangeRates) => {
    if (!minimum)
        return true;
    const amountInFiat = !isFiatToken(amount.token)
        ? convertToFiat(amount.value, amount.token, exchangeRates)
        : amount.value;
    const minimumInFiat = !isFiatToken(minimum.token)
        ? convertToFiat(minimum.value, minimum.token, exchangeRates)
        : minimum.value;
    if (amountInFiat === undefined || minimumInFiat === undefined)
        return true;
    return parseFloat(amountInFiat) >= parseFloat(minimumInFiat);
};

export { respectsMinimum };
