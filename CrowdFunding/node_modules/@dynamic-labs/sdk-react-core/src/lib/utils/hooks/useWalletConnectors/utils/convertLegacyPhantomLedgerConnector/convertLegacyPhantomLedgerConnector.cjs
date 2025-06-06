'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const convertLegacyPhantomLedgerConnector = (account) => (Object.assign(Object.assign({}, account), { walletName: 'phantom', walletProperties: {
        hardwareWallet: sdkApiCore.HardwareWalletEnum.Ledger,
    } }));

exports.convertLegacyPhantomLedgerConnector = convertLegacyPhantomLedgerConnector;
