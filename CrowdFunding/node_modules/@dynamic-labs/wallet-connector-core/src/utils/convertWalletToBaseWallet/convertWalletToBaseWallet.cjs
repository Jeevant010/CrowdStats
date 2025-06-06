'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const convertWalletToBaseWallet = (wallet) => ({
    additionalAddresses: wallet.additionalAddresses,
    address: wallet.address,
    chain: wallet.chain,
    id: wallet.id,
    isAuthenticated: wallet.isAuthenticated,
    key: wallet.key,
});
const convertWalletToBaseWalletPartial = (wallet) => ({
    additionalAddresses: wallet.additionalAddresses,
    address: wallet.address,
    chain: wallet.chain,
    id: wallet.id,
    isAuthenticated: wallet.isAuthenticated,
    key: wallet.key,
});

exports.convertWalletToBaseWallet = convertWalletToBaseWallet;
exports.convertWalletToBaseWalletPartial = convertWalletToBaseWalletPartial;
