'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletBookWallet = require('./getWalletBookWallet.cjs');

const findWalletBookWallet = (walletBook, walletKey) => {
    try {
        const walletData = getWalletBookWallet.getWalletBookWallet(walletBook, walletKey);
        return walletData;
    }
    catch (err) {
        return undefined;
    }
};

exports.findWalletBookWallet = findWalletBookWallet;
