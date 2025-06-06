'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class UserRejectedTransactionError extends DynamicError.DynamicError {
    constructor() {
        super('user rejected transaction');
    }
}

exports.UserRejectedTransactionError = UserRejectedTransactionError;
