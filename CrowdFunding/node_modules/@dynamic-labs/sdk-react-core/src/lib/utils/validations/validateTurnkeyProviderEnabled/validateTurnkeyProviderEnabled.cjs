'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var isTurnkeyEnabled = require('../../functions/isTurnkeyEnabled/isTurnkeyEnabled.cjs');
var errors = require('../../constants/errors.cjs');

const validateTurnkeyProviderEnabled = (projectSettings) => {
    const isTurnkeyProviderEnabled = isTurnkeyEnabled.isTurnkeyEnabled(projectSettings);
    if (!isTurnkeyProviderEnabled) {
        throw new utils.DynamicError('No embedded wallet is enabled. Go to the dashboard and make sure to have both Embedded wallets and at least one EVM network enabled. Also, check if EthereumWalletConnectors is in the DynamicContextProvider > settings > walletConnectors.', errors.SECURE_ENCLAVE_PROVIDER_NOT_ENABLED);
    }
    return isTurnkeyProviderEnabled;
};

exports.validateTurnkeyProviderEnabled = validateTurnkeyProviderEnabled;
