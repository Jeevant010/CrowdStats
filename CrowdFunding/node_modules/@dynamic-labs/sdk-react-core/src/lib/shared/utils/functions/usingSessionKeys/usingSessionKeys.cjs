'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const usingSessionKey = (walletConnector) => walletConnectorCore.isSessionKeyCompatibleWalletConnector(walletConnector) ||
    (walletConnectorCore.isAccountAbstractionConnector(walletConnector) &&
        walletConnectorCore.isSessionKeyCompatibleWalletConnector(walletConnector.getEOAConnector()));

exports.usingSessionKey = usingSessionKey;
