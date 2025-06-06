'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class ExternalAuthError extends DynamicError.DynamicError {
    constructor(code) {
        super('ExternalAuthError', code);
    }
}

exports.ExternalAuthError = ExternalAuthError;
