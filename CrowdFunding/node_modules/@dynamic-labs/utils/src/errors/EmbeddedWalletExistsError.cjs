'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class EmbeddedWalletExistsError extends DynamicError.DynamicError {
    constructor(code) {
        super('EmbeddedWalletExistsError', code);
    }
}

exports.EmbeddedWalletExistsError = EmbeddedWalletExistsError;
