'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class MissingPublicAddressError extends DynamicError.DynamicError {
    constructor() {
        super('Missing public address', 'missing-public-address');
    }
}

exports.MissingPublicAddressError = MissingPublicAddressError;
