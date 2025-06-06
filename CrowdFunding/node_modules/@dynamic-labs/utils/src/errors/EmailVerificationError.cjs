'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class EmailVerificationError extends DynamicError.DynamicError {
    constructor(message, code) {
        super(message, code);
    }
}

exports.EmailVerificationError = EmailVerificationError;
