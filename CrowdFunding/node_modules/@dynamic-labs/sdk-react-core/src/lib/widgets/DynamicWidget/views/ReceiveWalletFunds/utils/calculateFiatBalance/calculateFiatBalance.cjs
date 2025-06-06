'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isFiatToken = require('../isFiatToken/isFiatToken.cjs');

const calculateFiatBalance = (token, exchangeRates) => {
    // If there is no token, return 0 instead of undefined because token is only undefined
    // when and only when user has no balance for it.
    if (!token)
        return 0;
    if (token.fiatBalance)
        return token.fiatBalance;
    // Fixing price to 1 for stablecoins to match user expectation
    if (isFiatToken.isFiatOrStablecoin(token.symbol))
        return token.balance;
    if (token.price)
        return token.balance * token.price;
    if (exchangeRates[token.symbol])
        return token.balance * exchangeRates[token.symbol];
    // Here we return undefined instead of 0 because we know user HAS balance for this token,
    // but we cannot calculate the fiat balance, so show as unavailable.
    return undefined;
};

exports.calculateFiatBalance = calculateFiatBalance;
