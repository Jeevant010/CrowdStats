'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getWalletBookWallet = (walletBook, walletKey, walletFallback) => {
    var _a, _b, _c;
    if (!walletKey)
        throw new Error('Wallet key is required. Please pass in a wallet key to getWalletBookWallet');
    const walletData = (_b = (_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) === null || _a === void 0 ? void 0 : _a[walletKey]) !== null && _b !== void 0 ? _b : walletFallback;
    if (!walletData) {
        throw new Error(`Wallet ${walletKey} not found in wallet book (${Object.keys((_c = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _c !== void 0 ? _c : {}).length} wallets found)`);
    }
    return walletData;
};

exports.getWalletBookWallet = getWalletBookWallet;
