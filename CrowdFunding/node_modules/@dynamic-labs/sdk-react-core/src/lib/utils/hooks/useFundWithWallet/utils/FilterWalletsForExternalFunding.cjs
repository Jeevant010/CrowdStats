'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const SPECIFIC_WALLETS_WITHOUT_REDIRECTS = [
    'coinbase',
    'phantomevm',
    'magiceden',
];
const FilterWalletsForExternalFunding = (wallets) => {
    if (!utils.isMobile()) {
        return wallets;
    }
    return wallets.filter((wallet) => {
        if (SPECIFIC_WALLETS_WITHOUT_REDIRECTS.includes(wallet.key)) {
            return false;
        }
        const mobileCondition = wallet.walletConnector.isWalletConnect ||
            wallet.walletConnector.mobileExperience !== 'in-app-browser';
        return mobileCondition;
    });
};

exports.FilterWalletsForExternalFunding = FilterWalletsForExternalFunding;
