'use client'
import { getEnvVarWithFallback } from '@dynamic-labs/utils';

const DEFAULT_WALLET_BOOK_CDN_URL = 'https://dynamic-static-assets.com/wallet-book/v1/stable/wallet-book.json';
const getWalletBookCdnUrl = () => getEnvVarWithFallback([
    'WALLET_BOOK_CDN_URL',
    'NEXT_PUBLIC_WALLET_BOOK_CDN_URL',
    'REACT_APP_WALLET_BOOK_CDN_URL',
], DEFAULT_WALLET_BOOK_CDN_URL);

export { getWalletBookCdnUrl };
