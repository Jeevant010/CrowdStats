'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class EmailProviderError extends DynamicError.DynamicError {
    constructor(code) {
        super('EmailProviderError', code);
    }
}

exports.EmailProviderError = EmailProviderError;
