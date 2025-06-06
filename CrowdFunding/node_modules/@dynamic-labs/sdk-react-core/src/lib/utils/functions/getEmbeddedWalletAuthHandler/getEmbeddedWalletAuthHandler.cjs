'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const getEmbeddedWalletAuthHandler = (walletConnector) => {
    if (!walletConnector ||
        'getAuthenticatorHandler' in walletConnector === false) {
        throw new utils.DynamicError('Invalid connector type');
    }
    const turnkeyAuthenticatorHandler = walletConnector.getAuthenticatorHandler();
    return turnkeyAuthenticatorHandler;
};

exports.getEmbeddedWalletAuthHandler = getEmbeddedWalletAuthHandler;
