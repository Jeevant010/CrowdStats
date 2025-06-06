'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class WalletUsedError extends DynamicError.DynamicError {
    constructor(code) {
        super('WalletUsedError', code);
    }
}

exports.WalletUsedError = WalletUsedError;
