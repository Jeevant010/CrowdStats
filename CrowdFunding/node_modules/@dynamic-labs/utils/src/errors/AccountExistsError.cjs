'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class AccountExistsError extends DynamicError.DynamicError {
    constructor(errorMessage, errorPayload) {
        super(errorMessage);
        this.errorMessage = errorMessage;
        this.errorPayload = errorPayload;
    }
}

exports.AccountExistsError = AccountExistsError;
