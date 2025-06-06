'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isFiatToken = (symbol) => symbol === 'USD';
const isFiatOrStablecoin = (symbol) => isFiatToken(symbol) || symbol === 'USDC' || symbol === 'USDT';

exports.isFiatOrStablecoin = isFiatOrStablecoin;
exports.isFiatToken = isFiatToken;
