'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const isHardwareWalletEnabled = (walletConnector) => walletConnector !== undefined &&
    walletConnector !== null &&
    walletConnectorCore.isHardwareWalletConnector(walletConnector) &&
    walletConnector.isHardwareWalletEnabled;

exports.isHardwareWalletEnabled = isHardwareWalletEnabled;
