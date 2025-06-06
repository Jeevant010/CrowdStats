'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class WalletAddressMismatchError extends DynamicError.DynamicError {
    constructor(message, { activeAddress, expectedAddress, walletName, }) {
        super(message, 'wallet_address_mismatch_error');
        this.expectedAddress = expectedAddress;
        this.activeAddress = activeAddress;
        this.walletName = walletName;
    }
}

exports.WalletAddressMismatchError = WalletAddressMismatchError;
