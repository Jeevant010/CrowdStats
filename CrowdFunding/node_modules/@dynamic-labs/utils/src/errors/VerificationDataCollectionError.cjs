'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

/** Used when trying to get necessary data for verification OTPs */
class VerificationDataCollectionError extends DynamicError.DynamicError {
    constructor(message) {
        super('Failed to get verification data: ' + message);
    }
}

exports.VerificationDataCollectionError = VerificationDataCollectionError;
