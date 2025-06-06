'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var getPlatformForConnector = require('../../../getPlatformForConnector/getPlatformForConnector.cjs');

/**
 * This function is a helper to filter out wallets that should not appear in the wallet list
 * if they are already linked to the user profile.
 */
const staticWalletFilter = (linkedWallets, walletOptions) => walletOptions.filter((walletOption) => {
    if (walletOption.walletConnector &&
        walletConnectorCore.isConnectorEventSupported(walletOption.walletConnector, 'accountChanged', getPlatformForConnector.getPlatformForConnector(walletOption.walletConnector))) {
        return true;
    }
    if (linkedWallets.some((wallet) => wallet.connector.key === walletOption.key)) {
        return false;
    }
    return true;
});

exports.staticWalletFilter = staticWalletFilter;
