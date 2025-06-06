'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

class ConnectorSetupError extends utils.DynamicError {
    constructor(providerName, connectorName) {
        super(`${providerName} is enabled but ${connectorName} is not in your walletConnectors list. See https://docs.dynamic.xyz/react-sdk/wallet-connectors for more information.`);
    }
}

exports.ConnectorSetupError = ConnectorSetupError;
