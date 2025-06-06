'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletBook = require('@dynamic-labs/wallet-book');

const createWallet = (walletBook$1, walletConnector) => {
    var _a;
    const walletBookWallet = walletBook.findWalletBookWallet(walletBook$1, walletConnector.key);
    return {
        chainGroup: walletConnector.metadata.groupKey,
        group: walletConnector.metadata.groupKey,
        injectedConfig: walletBookWallet === null || walletBookWallet === void 0 ? void 0 : walletBookWallet.injectedConfig,
        isInstalledOnBrowser: (_a = walletConnector.isInstalledOnBrowser()) !== null && _a !== void 0 ? _a : false,
        key: walletConnector.key,
        name: walletConnector.name,
        walletConnector: walletConnector,
        walletGroup: walletConnector.metadata.groupKey,
    };
};

exports.createWallet = createWallet;
