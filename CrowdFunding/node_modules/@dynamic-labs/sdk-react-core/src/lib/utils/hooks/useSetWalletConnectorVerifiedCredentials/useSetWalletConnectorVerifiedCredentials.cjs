'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const useSetWalletConnectorVerifiedCredentials = (user, walletOptions) => {
    if (!user || !(walletOptions === null || walletOptions === void 0 ? void 0 : walletOptions.length))
        return;
    walletOptions.forEach((walletOption) => {
        walletOption.walletConnector.setVerifiedCredentials(user.verifiedCredentials);
    });
};

exports.useSetWalletConnectorVerifiedCredentials = useSetWalletConnectorVerifiedCredentials;
