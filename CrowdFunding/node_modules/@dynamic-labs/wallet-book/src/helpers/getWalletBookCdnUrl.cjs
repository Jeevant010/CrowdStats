'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const DEFAULT_WALLET_BOOK_CDN_URL = 'https://dynamic-static-assets.com/wallet-book/v1/stable/wallet-book.json';
const getWalletBookCdnUrl = () => utils.getEnvVarWithFallback([
    'WALLET_BOOK_CDN_URL',
    'NEXT_PUBLIC_WALLET_BOOK_CDN_URL',
    'REACT_APP_WALLET_BOOK_CDN_URL',
], DEFAULT_WALLET_BOOK_CDN_URL);

exports.getWalletBookCdnUrl = getWalletBookCdnUrl;
