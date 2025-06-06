'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class ChainalysisError extends DynamicError.DynamicError {
    constructor(walletPublicKey) {
        super('This address is not approved for access');
        this.walletPublicKey = walletPublicKey;
    }
}

exports.ChainalysisError = ChainalysisError;
