'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const hasEmbeddedWallet = (user, walletNameFilter) => {
    var _a;
    return Boolean(user &&
        ((_a = user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.some(({ walletProvider, walletName }) => walletProvider === sdkApiCore.WalletProviderEnum.EmbeddedWallet &&
            (!walletNameFilter || (walletName === null || walletName === void 0 ? void 0 : walletName.startsWith(walletNameFilter))))));
};

exports.hasEmbeddedWallet = hasEmbeddedWallet;
