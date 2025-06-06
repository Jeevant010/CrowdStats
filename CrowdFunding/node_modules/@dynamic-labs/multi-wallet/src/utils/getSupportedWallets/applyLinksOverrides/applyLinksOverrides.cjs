'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletBook = require('@dynamic-labs/wallet-book');

const applyLinksOverrides = (walletBook$1, wallets) => wallets.map((wallet) => {
    const walletData = walletBook.findWalletBookWallet(walletBook$1, wallet.key);
    if ((walletData === null || walletData === void 0 ? void 0 : walletData.switchNetworkOnlyFromWallet) !== undefined) {
        wallet.switchNetworkOnlyFromWallet =
            walletData.switchNetworkOnlyFromWallet;
    }
    return wallet;
});

exports.applyLinksOverrides = applyLinksOverrides;
