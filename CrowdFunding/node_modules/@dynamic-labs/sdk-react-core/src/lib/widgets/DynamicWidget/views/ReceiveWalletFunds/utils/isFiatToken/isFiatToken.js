'use client'
const isFiatToken = (symbol) => symbol === 'USD';
const isFiatOrStablecoin = (symbol) => isFiatToken(symbol) || symbol === 'USDC' || symbol === 'USDT';

export { isFiatOrStablecoin, isFiatToken };
