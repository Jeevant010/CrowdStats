'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class WalletNotDeployedError extends DynamicError.DynamicError {
    constructor() {
        super('Wallet has not been deployed', 'wallet_not_deployed');
    }
}

exports.WalletNotDeployedError = WalletNotDeployedError;
