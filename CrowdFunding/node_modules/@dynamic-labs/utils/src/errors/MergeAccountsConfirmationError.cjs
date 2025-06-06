'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class MergeAccountsConfirmationError extends DynamicError.DynamicError {
    constructor({ code, mergeConflicts, walletAddress, }) {
        super('MergeAccountsConfirmationError', code);
        this.mergeConflicts = mergeConflicts;
        this.walletAddress = walletAddress;
    }
}

exports.MergeAccountsConfirmationError = MergeAccountsConfirmationError;
