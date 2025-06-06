'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const findPasskeyEmailWalletConnector = (wallets, chain) => {
    const walletConnector = wallets
        .map(({ walletConnector }) => walletConnector)
        .find((walletConnector) => walletConnectorCore.isPasskeyWalletConnector(walletConnector) &&
        walletConnectorCore.isEmailWalletConnector(walletConnector) &&
        walletConnector.connectedChain === chain);
    return walletConnector;
};

exports.findPasskeyEmailWalletConnector = findPasskeyEmailWalletConnector;
