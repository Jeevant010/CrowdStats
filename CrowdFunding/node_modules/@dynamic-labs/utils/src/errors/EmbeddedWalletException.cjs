'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class EmbeddedWalletException extends DynamicError.DynamicError {
    constructor(message) {
        super(message);
    }
}

exports.EmbeddedWalletException = EmbeddedWalletException;
